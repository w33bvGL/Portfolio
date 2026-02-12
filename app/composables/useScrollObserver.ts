export function useScrollObserver() {
  const vIntersection = {
    mounted: (el: HTMLElement) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      }, { threshold: 0.1, rootMargin: '50px' })

      observer.observe(el)
    }
  }

  return { vIntersection }
}
