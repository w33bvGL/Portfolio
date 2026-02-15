import puppeteer from 'puppeteer'

export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, 'lang')
  const { req } = event.node
  const host = req.headers.host
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = `${protocol}://${host}`
  const resumeUrl = `${baseUrl}/${lang}/resume`

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--font-render-hinting=none'
      ]
    })

    const page = await browser.newPage()

    await page.emulateMediaType('print')

    await page.goto(resumeUrl, { waitUntil: 'domcontentloaded' })
    try {
      await page.waitForSelector('.resume-body', { timeout: 5000 })
    } catch (e) {
      console.warn('Timeout waiting for .resume-body, trying to print anyway...')
    }

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
      pageRanges: '1'
    })

    await browser.close()

    setHeaders(event, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="Vahe_Sargsyan_${lang}.pdf"`,
      'Cache-Control': 'no-cache'
    })

    return pdfBuffer
  } catch (error) {
    console.error('PDF Generation Error:', error)
    throw createError({ statusCode: 500, statusMessage: 'Failed to generate PDF' })
  }
})
