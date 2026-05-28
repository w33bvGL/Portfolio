export {}

declare global {
  type Locale = 'en' | 'hy' | 'ru'

  type Translated<T> = {
    [L in Locale]: T[]
  }
}
