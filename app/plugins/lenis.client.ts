import Lenis from 'lenis'
import { nextTick } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (!config.public.enableLenis || prefersReducedMotion) {
    return {
      provide: { lenis: null as Lenis | null }
    }
  }

  const router = useRouter()

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: easeOutExpo,
    smoothWheel: true
  })

  let isNavigating = false
  let previousHeight = 0
  let rafId: number | null = null
  let resizeObserver: ResizeObserver | null = null
  let lastTargetState: 'start' | 'stop' | null = null

  const isGlobalLocked = () =>
    window.getComputedStyle(document.body).overflow === 'hidden'
    || window.getComputedStyle(document.documentElement).overflow === 'hidden'

  const runRaf = (time: number) => {
    const shouldStop = isGlobalLocked() || isNavigating
    const targetState = shouldStop ? 'stop' : 'start'

    if (targetState !== lastTargetState) {
      if (shouldStop) {
        lenis.stop()
      } else {
        lenis.start()
      }
      lastTargetState = targetState
    }

    lenis.raf(time)
    rafId = requestAnimationFrame(runRaf)
  }

  const initResizeObserver = () => {
    resizeObserver?.disconnect()
    resizeObserver = new ResizeObserver(() => lenis.resize())
    resizeObserver.observe(document.getElementById('__nuxt') ?? document.body)
  }

  const cleanup = () => {
    if (rafId !== null) cancelAnimationFrame(rafId)
    resizeObserver?.disconnect()
    lenis.destroy()
  }

  rafId = requestAnimationFrame(runRaf)

  nuxtApp.hook('app:mounted', () => {
    initResizeObserver()

    lenis.resize()
    requestAnimationFrame(() => lenis.resize())

    document.fonts?.ready.then(() => lenis.resize())
    window.addEventListener('load', () => lenis.resize(), { once: true })
  })

  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    if (to.path !== from.path) {
      isNavigating = true
      previousHeight = document.body.scrollHeight
      lenis.stop()
    }
  })

  nuxtApp.hook('page:finish', async () => {
    if (!isNavigating) return
    await nextTick()

    let attempts = 0
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        attempts++
        if (document.body.scrollHeight !== previousHeight || attempts > 15) {
          clearInterval(interval)
          resolve()
        }
      }, 32)
    })

    lenis.scrollTo(0, { duration: 1.2, easing: easeOutExpo, force: true })

    lenis.resize()
    initResizeObserver()
    isNavigating = false
  })

  if (import.meta.hot) {
    import.meta.hot.dispose(cleanup)
  }

  const originalUnmount = nuxtApp.vueApp.unmount
  nuxtApp.vueApp.unmount = function () {
    cleanup()
    return originalUnmount.call(nuxtApp.vueApp)
  }

  return {
    provide: { lenis: lenis as Lenis | null }
  }
})
