interface ScrollRevealOptions {
  selector?: string
  rootMargin?: string
  threshold?: number
  repeat?: boolean
}

let globalObserver: IntersectionObserver | null = null

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  if (!import.meta.client) return

  const {
    selector = '.scroll-animate-reveal, .scroll-animate-fade',
    rootMargin = '0px 0px -60px 0px',
    threshold = 0.1,
    repeat = false
  } = options

  const init = () => {
    globalObserver?.disconnect()
    globalObserver = null

    const elements = document.querySelectorAll<HTMLElement>(selector)
    if (!elements.length) return

    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (!repeat) {
              globalObserver?.unobserve(entry.target)
            }
          } else if (repeat) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { rootMargin, threshold }
    )

    elements.forEach(el => globalObserver!.observe(el))
  }

  onMounted(() => nextTick(init))

  const nuxtApp = useNuxtApp()
  nuxtApp.hook('page:transition:finish', () => nextTick(init))

  onUnmounted(() => {
    globalObserver?.disconnect()
    globalObserver = null
  })
}
