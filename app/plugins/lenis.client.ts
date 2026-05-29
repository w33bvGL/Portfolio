import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  if (!import.meta.client) return

  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    autoRaf: false
  })

  const isGlobalLocked = () => {
    return window.getComputedStyle(document.body).overflow === 'hidden'
      || window.getComputedStyle(document.documentElement).overflow === 'hidden'
  }

  const runRaf = (time: number) => {
    if (isGlobalLocked()) {
      lenis.stop()
    } else {
      lenis.start()
    }

    lenis.raf(time)
    requestAnimationFrame(runRaf)
  }
  requestAnimationFrame(runRaf)

  window.addEventListener('wheel', (event) => {
    let target = event.target as HTMLElement | null
    const delta = event.deltaY

    while (target && target !== document.body) {
      const style = window.getComputedStyle(target)
      const overflowY = style.overflowY

      const isScrollable = overflowY === 'auto' || overflowY === 'scroll'
      const canScrollMore = delta > 0
        ? target.scrollHeight > target.clientHeight + target.scrollTop
        : target.scrollTop > 0

      if (isScrollable && canScrollMore) {
        event.stopPropagation()
        return
      }

      target = target.parentElement
    }
  }, { passive: false, capture: true })

  return { provide: { lenis } }
})
