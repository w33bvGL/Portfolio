import Lenis from 'lenis'
import { nextTick } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined') return

  const router = useRouter()

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  })

  let isNavigating = false
  let previousHeight = 0
  let rafId: number | null = null

  const isGlobalLocked = () =>
    window.getComputedStyle(document.body).overflow === 'hidden'
    || window.getComputedStyle(document.documentElement).overflow === 'hidden'

  let lastTargetState: 'start' | 'stop' | null = null

  const runRaf = (time: number) => {
    const shouldStop = isGlobalLocked() || isNavigating
    const currentTargetState = shouldStop ? 'stop' : 'start'

    if (currentTargetState !== lastTargetState) {
      if (shouldStop) {
        lenis.stop()
      } else {
        lenis.start()
      }
      lastTargetState = currentTargetState
    }

    lenis.raf(time)
    rafId = requestAnimationFrame(runRaf)
  }
  rafId = requestAnimationFrame(runRaf)

  let resizeObserver: ResizeObserver | null = null
  const initResizeObserver = () => {
    resizeObserver?.disconnect()
    resizeObserver = new ResizeObserver(() => {
      lenis.resize()
    })
    const target = document.getElementById('__nuxt') || document.body
    resizeObserver.observe(target)
  }

  nuxtApp.hook('app:mounted', () => {
    initResizeObserver()
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

    lenis.scrollTo(0, {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      force: true
    })

    lenis.resize()
    initResizeObserver()
    isNavigating = false
  })

  const originalUnmount = nuxtApp.vueApp.unmount
  nuxtApp.vueApp.unmount = function () {
    if (rafId) cancelAnimationFrame(rafId)
    resizeObserver?.disconnect()
    lenis.destroy()
    return originalUnmount.call(nuxtApp.vueApp)
  }

  return {
    provide: { lenis }
  }
})
