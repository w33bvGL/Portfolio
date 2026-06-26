import { spawn } from 'child_process'
import http from 'http'
import fs from 'fs-extra'
import { resolve } from 'path'
import puppeteer from 'puppeteer'

const locales = [
  { code: 'en', language: 'en-US', name: 'English' },
  { code: 'hy', language: 'hy-AM', name: 'Հայերեն' },
  { code: 'ru', language: 'ru-RU', name: 'Русский' }
]

export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: ['lenis']
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vueuse/nuxt'
  ],

  ssr: true,

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    appEnv: process.env.APP_ENV || 'development',
    appBaseUrl: process.env.APP_BASE_URL || 'http://localhost:3000',
    public: {
      appEnv: process.env.APP_ENV || 'development',
      enableLenis: process.env.ENABLE_LENIS == 'false'
    }
  },

  experimental: {
    appManifest: false
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: true,
      routes: locales.flatMap((l) => {
        const prefix = l.code === 'en' ? '' : `/${l.code}`
        return [
          `${prefix}/`,
          `${prefix}/projects`,
          `${prefix}/about`,
          `${prefix}/resume`
        ]
      })
    }
  },

  hooks: {
    close: async () => {
      if (process.env.npm_lifecycle_event !== 'generate') return

      console.log('Starting PDF Resume Generation...')

      const distDir = resolve('.output/public')
      const port = 3001
      const langCodes = locales.map(l => l.code)

      const server = spawn('npx', ['serve', distDir, '-l', String(port)], {
        stdio: 'ignore',
        shell: true
      })

      const waitForServer = () => new Promise<void>((res, rej) => {
        let attempts = 0
        const interval = setInterval(() => {
          http.get(`http://localhost:${port}`, (response) => {
            if (response.statusCode && response.statusCode < 500) {
              clearInterval(interval)
              res()
            }
          }).on('error', () => {})

          if (++attempts > 30) {
            clearInterval(interval)
            rej(new Error('Server did not start in time'))
          }
        }, 500)
      })

      try {
        await waitForServer()
        console.log('PDF Server ready. Launching Browser...')

        const browser = await puppeteer.launch({
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--no-zygote',
            '--disable-gpu'
          ]
        })

        const page = await browser.newPage()

        for (const lang of langCodes) {
          const url = `http://localhost:${port}/${lang}/resume`
          const outputDir = resolve(distDir, 'resume')
          const outputPath = resolve(outputDir, `${lang}.pdf`)

          await fs.ensureDir(outputDir)

          await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })

          await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
          })

          console.log(`Generated: /resume/${lang}.pdf`)
        }

        await browser.close()
      } catch (e) {
        console.error('PDF Generation Failed:', e)
      } finally {
        server.kill()
        console.log('PDF Generation finished.')
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales,
    defaultLocale: 'en',
    strategy: 'prefix_and_default'
  },

  image: {
    inject: true,
    alias: {
      tech: '/tech'
    }
  }
})
