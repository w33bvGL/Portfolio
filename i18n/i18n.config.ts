import de from './locales/de.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import hy from './locales/hy.json'
import nl from './locales/nl.json'
import pl from './locales/pl.json'
import ru from './locales/ru.json'
import uk from './locales/uk.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    de,
    en,
    es,
    fr,
    hy,
    nl,
    pl,
    ru,
    uk
  }
}))
