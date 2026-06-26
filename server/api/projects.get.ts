const PROJECTS = {
  en: [
    { name: 'Age of Astir', image: '/projects/age-of-astir.png', description: 'Game platform for an MMORPG: three-faction warfare, boss raids, and dungeon-progression systems.', url: 'https://ageofastir.com/' },
    { name: 'Cyberhack Pro', image: '/projects/cyberhack-pro.png', description: 'Platform for game-enhancement tools with secure licensing and a reliable delivery flow.', url: 'https://cyberhack.pro' },
    { name: 'Omex Proxy', image: '/projects/omex-proxy.png', description: 'Proxy-management platform with automated activation and a Telegram-bot control flow.', url: 'https://omex.ai' },
    { name: 'HentaiVoice', image: '/projects/hentai-voice.png', description: 'Streaming service built around a native MSE video player — HLS/M3U8, multi-track audio/video, and chunked subtitles, with zero third-party player libraries.', url: 'https://hentaivoice.com', isAdult: true },
    { name: 'W33bvgl Portfolio', image: '/projects/portfolio.png', description: 'This site: Nuxt 3 with SSR, i18n in three languages, and on-the-fly PDF résumé generation via Puppeteer.', url: 'https://github.com/w33bvGL/Portfolio' },
    { name: 'Mari Karkas', image: '/projects/mari-karkas.png', description: 'Lead-gen quiz funnel for a frame-house builder, with built-in construction-cost calculation.', url: 'https://quiz.mari-karkas.ru' },
    { name: 'Ota-ku legacy', image: '/projects/ota-ku.png', description: 'Anime-streaming portal with a large localized library, a custom video player, and an optimized CDN.' },
    { name: 'Drive Fit', image: '/projects/drive-fit.png', description: 'Fitness-club SPA with dynamic scheduling, trainer profiles, and membership flows.' },
    { name: 'Crito', image: '/projects/crito.png', description: 'High-conversion CRM landing — responsive, focused on feature presentation and lead capture.' },
    { name: 'TG Quick Click', image: '/projects/tg-quick-click.png', description: 'Telegram Mini App with clicker mechanics and an in-app economy, tuned for high-load use inside the messenger.' },
    { name: 'Podarok.ru', image: '/projects/podarokru.png', description: 'Personalized video-greeting service with a backend pipeline for video rendering and order processing.', url: 'https://podarokru.ru' }
  ],
  hy: [
    { name: 'Age of Astir', image: '/projects/age-of-astir.png', description: 'MMORPG խաղային հարթակ: Մարտեր 3 ազգերի միջև, արշավներ, բոսսեր և զնդաններ (dungeons) ընկերների հետ խաղալու համար:', url: 'https://ageofastir.com/' },
    { name: 'Cyberhack Pro', image: '/projects/cyberhack-pro.png', description: 'Խաղային գործիքների պրոֆեսիոնալ հարթակ: Հուսալի և անվտանգ ճարտարապետություն՝ նախատեսված գեյմերների համար:', url: 'https://omex.ai' },
    { name: 'Omex Proxy', image: '/projects/omex-proxy.png', description: 'Պրոքսի սերվերների կառավարման էկոհամակարգ՝ ավտոմատացված ակտիվացմամբ և Telegram բոտի ինտեգրմամբ:', url: 'https://cyberhack.pro' },
    { name: 'HentaiVoice', image: '/projects/hentai-voice.png', description: 'Hentai սթրիմինգային ծառայություն սեփական MSE փլեյերով: HLS/M3U8 աջակցություն և սուբտիտրերի չանկային բեռնում առանց գրադարանների:', url: 'https://hentaivoice.com', isAdult: true },
    { name: 'W33bvgl Portfolio', image: '/projects/portfolio.png', description: 'Անհատական պորտֆոլիո, որը ներկայացնում է full-stack ինժեներական հմտությունները Nuxt 3-ով:', url: 'https://github.com/w33bvGL/Portfolio' },
    { name: 'Mari Karkas', image: '/projects/mari-karkas.png', description: 'Կառուցապատման հարթակ: Օպտիմալացված UX՝ տների հաշվարկման ներդրված տրամաբանությամբ:', url: 'https://quiz.mari-karkas.ru' },
    { name: 'Ota-ku legacy', image: '/projects/ota-ku.png', description: 'Անիմե սթրիմինգային պորտալ մեծ գրադարանով և օպտիմալացված CDN-ով:' },
    { name: 'Drive Fit', image: '/projects/drive-fit.png', description: 'Ֆիտնես ակումբի SPA՝ ժամանակացույցի դինամիկ կառավարմամբ և մարզիչների պրոֆիլներով:' },
    { name: 'Crito', image: '/projects/crito.png', description: 'CRM համակարգի համար բարձր կոնվերսիայով լենդինգ: Ռեսպոնսիվ դիզայն՝ ուղղված լիդերի հավաքագրմանը:' },
    { name: 'TG Quick Click', image: '/projects/tg-quick-click.png', description: 'Telegram Mini App քլիքերային մեխանիկայով: Օպտիմալացված է բարձր բեռնվածության համար:' },
    { name: 'Podarok.ru', image: '/projects/podarokru.png', description: 'Անհատականացված վիդեո շնորհավորանքների ծառայություն: Բարդ բեքենդ՝ վիդեո ռենդերինգի համար:', url: 'https://podarokru.ru' }
  ],
  ru: [
    { name: 'Age of Astir', image: '/projects/age-of-astir.png', description: 'Игровая MMORPG вселенная. Сражения между тремя нациями, битвы с боссами, походы в подземелья и совместное развитие.', url: 'https://ageofastir.com/' },
    { name: 'Cyberhack Pro', image: '/projects/cyberhack-pro.png', description: 'Профессиональная платформа игровых утилит. Надежная и безопасная архитектура для геймеров.', url: 'https://cyberhack.pro' },
    { name: 'Omex Proxy', image: '/projects/omex-proxy.png', description: 'Экосистема управления прокси-серверами с автоматизированной активацией и Telegram-ботом.', url: 'https://omex.ai' },
    { name: 'HentaiVoice', image: '/projects/hentai-voice.png', description: 'Hentai-стриминг с нативным MSE-плеером собственной разработки. Поддержка HLS/M3U8 и чанковая загрузка субтитров без сторонних библиотек.', url: 'https://hentaivoice.com', isAdult: true },
    { name: 'W33bvgl Portfolio', image: '/projects/portfolio.png', description: 'Личное portfolio, демонстрирующее навыки full-stack разработки на стеке Nuxt 3.', url: 'https://github.com/w33bvGL/Portfolio' },
    { name: 'Mari Karkas', image: '/projects/mari-karkas.png', description: 'Платформа строительства каркасных домов под ключ. Оптимизированный UX с логикой расчета конструкций.', url: 'https://quiz.mari-karkas.ru' },
    { name: 'Ota-ku legacy', image: '/projects/ota-ku.png', description: 'Портал аниме-стриминга с огромной библиотекой и оптимизированной сетью доставки контента.' },
    { name: 'Drive Fit', image: '/projects/drive-fit.png', description: 'SPA фитнес-клуба с динамическим управлением расписанием и профилями тренеров.' },
    { name: 'Crito', image: '/projects/crito.png', description: 'Высококонверсионный лендинг для CRM-системы. Респонсив-дизайн с фокусом на презентацию фич и захват лидов.' },
    { name: 'TG Quick Click', image: '/projects/tg-quick-click.png', description: 'Telegram Mini App с кликер-механикой. Оптимизировано для высоких нагрузок внутри мессенджера.' },
    { name: 'Podarok.ru', image: '/projects/podarokru.png', description: 'Сервис персональных видеопоздравлений. Сложный бэкенд для рендеринга видео и обработки заказов.', url: 'https://podarokru.ru' }
  ]
}

export default defineEventHandler((event) => {
  return getLocalizedData(event, PROJECTS)
})
