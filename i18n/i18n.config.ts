import en from './locales/en.json'
import hy from './locales/hy.json'
import ru from './locales/ru.json'

export default defineI18nConfig(() => ({
  locale: 'en',
  messages: {
    en,
    hy,
    ru
  }
}))
