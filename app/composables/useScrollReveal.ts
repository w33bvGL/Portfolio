interface ScrollRevealOptions {
  selector?: string
  rootMargin?: string
  threshold?: number
  repeat?: boolean
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    selector = '.scroll-animate-reveal',
    rootMargin = '0px 0px -60px 0px',
    threshold = 0.1,
    repeat = false,
  } = options

  if (!import.meta.client) return

  let observer: IntersectionObserver | null = null

  const init = () => {
    observer?.disconnect()

    const elements = document.querySelectorAll<HTMLElement>(selector)
    if (!elements.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (!repeat) {
              observer?.unobserve(entry.target)
            }
          } else if (repeat) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { rootMargin, threshold }
    )

    elements.forEach(el => observer!.observe(el))
  }

  onMounted(() => {
    nextTick(init)
  })

  const nuxtApp = useNuxtApp()
  nuxtApp.hook('page:transition:finish', () => {
    nextTick(init)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
