import path from 'path'
import type { H3Event } from 'h3'
import { eventHandler, sendStream, getQuery, createError, sendError } from 'h3'
import puppeteer from 'puppeteer'
import fs from 'fs-extra'

export default eventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event)
    const supportedLangs = ['de', 'en', 'es', 'fr', 'hy', 'nl', 'pl', 'ru', 'uk']
    const lang = supportedLangs.includes(<string>query.lang) ? query.lang : 'en'

    const fileName = `resume-${lang}.pdf`
    const dirPath = path.resolve(process.cwd(), 'public/resume')
    const filePath = path.resolve(dirPath, fileName)

    // 1. ПРОВЕРКА КЭША: Если файл создан меньше часа назад — отдаем сразу
    if (await fs.pathExists(filePath)) {
      const stats = await fs.stat(filePath)
      const now = new Date().getTime()
      const fileAge = (now - stats.mtimeMs) / 1000 / 60 // в минутах

      if (fileAge < 60) { // 1 час кэша
        console.log(`🚀 Serving cached PDF for [${lang}]`)
        return sendPDF(event, filePath)
      }
    }

    console.log(`🛠 Cache miss or expired. Generating PDF for [${lang}]...`)
    await fs.ensureDir(dirPath)

    // 2. ОПТИМИЗАЦИЯ PUPPETEER
    const browser = await puppeteer.launch({
      headless: true, // Всегда true в проде
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage', // Важно для Docker/Linux
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    })

    const page = await browser.newPage()

    // Блокируем лишние ресурсы, которые не нужны для PDF (метрики, шрифты сторонние и тд)
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

    // Используем 'networkidle2' вместо 'networkidle0' — это быстрее
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
