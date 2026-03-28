import { spawn } from 'child_process'
import http from 'http'
import fs from 'fs-extra'
import { resolve } from 'path'
import puppeteer from 'puppeteer'

const locales = [
  { code: 'en', language: 'en-US', name: 'English' },
  { code: 'hy', language: 'hy-AM', name: 'Հայերեն' },
  { code: 'ru', language: 'ru-RU', name: 'Русский' },
]

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-og-image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vueuse/nuxt'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    appEnv: process.env.APP_ENV || 'development',
    public: {
      appEnv: process.env.APP_ENV || 'development'
    }
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
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

      const waitForServer = () => new Promise<void>((resolve, reject) => {
        let attempts = 0
        const interval = setInterval(() => {
          http.get(`http://localhost:${port}`, (res) => {
            if (res.statusCode === 200) {
              clearInterval(interval)
              resolve()
            }
          }).on('error', () => {})

          if (++attempts > 20) {
            clearInterval(interval)
            reject(new Error('Server timeout'))
          }
        }, 500)
      })

      try {
        await waitForServer()
        console.log('🚀 PDF Server ready. Launching Browser...')

        const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
        const page = await browser.newPage()

        for (const lang of langCodes) {
          const url = `http://localhost:${port}/${lang}/resume`
          const outputDir = resolve(distDir, 'resume')
          const outputPath = resolve(outputDir, `${lang}.pdf`)

          await fs.ensureDir(outputDir)

          await page.goto(url, { waitUntil: 'networkidle0' })

          await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: 0, bottom: 0, left: 0, right: 0 }
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
    bundle: { optimizeTranslationDirective: false },
    locales,
    lazy: true,
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    vueI18n: './i18n.config.ts'
  },

  image: {
    inject: true,
    alias: {
      tech: '/tech'
    }
  }
})
