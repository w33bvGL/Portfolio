import path from 'path'
import type { H3Event } from 'h3'
import puppeteer from 'puppeteer'
import fs from 'fs-extra'

export default eventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event)
    const supportedLangs = ['en', 'fr', 'hy', 'ru', 'uk']
    const lang = supportedLangs.includes(<string>query.lang) ? query.lang : 'en'

    const fileName = `resume-${lang}.pdf`
    const dirPath = path.resolve(process.cwd(), 'public/resume')
    const filePath = path.resolve(dirPath, fileName)

    if (await fs.pathExists(filePath)) {
      const stats = await fs.stat(filePath)
      const now = new Date().getTime()
      const fileAge = (now - stats.mtimeMs) / 1000 / 60

      if (fileAge < 60) {
        console.log(`🚀 Serving cached PDF for [${lang}]`)
        return sendPDF(event, filePath)
      }
    }

    console.log(`🛠 Cache miss or expired. Generating PDF for [${lang}]...`)
    await fs.ensureDir(dirPath)

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    })

    const page = await browser.newPage()

    await page.setRequestInterception(true)
    page.on('request', (req) => {
      const resourceType = req.resourceType()
      if (['image', 'font', 'stylesheet', 'script', 'document'].includes(resourceType)) {
        req.continue()
      } else {
        req.abort()
      }
    })

    const url = `http://localhost:3000/${lang}/resume`

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

    await page.pdf({
      path: filePath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
    })

    await browser.close()

    return sendPDF(event, filePath)
  } catch (error) {
    console.error('❌ PDF Error:', error)
    return sendError(event, createError({ statusCode: 500, message: 'Generation failed' }))
  }
})

function sendPDF(event: H3Event, filePath: string) {
  const stream = fs.createReadStream(filePath)
  const baseName = path.basename(filePath)

  event.node.res.setHeader('Content-Type', 'application/pdf')
  event.node.res.setHeader('Content-Disposition', `attachment; filename=${baseName}`)
  return sendStream(event, stream)
}
