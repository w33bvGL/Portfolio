import type Lenis from 'lenis'

declare module '#app' {
  interface NuxtApp {
    $lenis: Lenis
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $lenis: Lenis
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:transition:finish', async () => {
    await nextTick()

    const lenis = nuxtApp.$lenis as Lenis | undefined

    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        force: true
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  })

  nuxtApp.hook('page:loading:end', async () => {
    await nextTick()
    const lenis = nuxtApp.$lenis as Lenis | undefined

    if (window.scrollY > 50 && lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        force: true
      })
    }
  })
})
