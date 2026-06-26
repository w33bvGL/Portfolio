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
    { name: 'Age of Astir', image: '/projects/age-of-astir.png', description: 'MMORPG-ի խաղային պլատֆորմ՝ մարտեր երեք ազգերի միջև, բոսսերի դեմ արշավներ և զնդանների անցման համակարգ:', url: 'https://ageofastir.com/' },
    { name: 'Cyberhack Pro', image: '/projects/cyberhack-pro.png', description: 'Խաղային գործիքների պլատֆորմ՝ անվտանգ լիցենզավորմամբ և հուսալի առաքմամբ:', url: 'https://cyberhack.pro' },
    { name: 'Omex Proxy', image: '/projects/omex-proxy.png', description: 'Պրոքսիների կառավարման պլատֆորմ՝ ավտոմատ ակտիվացմամբ և Telegram-բոտով կառավարմամբ:', url: 'https://omex.ai' },
    { name: 'HentaiVoice', image: '/projects/hentai-voice.png', description: 'Սթրիմինգ՝ սեփական մշակման native MSE փլեյերով — HLS/M3U8, բազմ-ուղի աուդիո/վիդեո և չանկային սուբտիտրեր, առանց երրորդ կողմի փլեյեր-գրադարանների:', url: 'https://hentaivoice.com', isAdult: true },
    { name: 'W33bvgl Portfolio', image: '/projects/portfolio.png', description: 'Այս կայքը՝ Nuxt 3 SSR-ով, i18n երեք լեզվով և PDF-ռեզյումեի գեներացիա իրական ժամանակում Puppeteer-ով:', url: 'https://github.com/w33bvGL/Portfolio' },
    { name: 'Mari Karkas', image: '/projects/mari-karkas.png', description: 'Քվիզ-ձագար կարկասային տների կառուցապատողի համար՝ կառուցվածքի արժեքի ներդրված հաշվարկով:', url: 'https://quiz.mari-karkas.ru' },
    { name: 'Ota-ku legacy', image: '/projects/ota-ku.png', description: 'Անիմե-սթրիմինգի պորտալ՝ մեծ լոկալիզացված գրադարանով, սեփական փլեյերով և օպտիմիզացված CDN-ով:' },
    { name: 'Drive Fit', image: '/projects/drive-fit.png', description: 'Ֆիտնես ակումբի SPA՝ դինամիկ ժամանակացույցով, մարզիչների պրոֆիլներով և բաժանորդագրությունների ձևակերպմամբ:' },
    { name: 'Crito', image: '/projects/crito.png', description: 'Բարձր կոնվերսիայով լենդինգ CRM-ի համար՝ ռեսպոնսիվ, ուղղված ֆիչերների ներկայացմանը և լիդերի հավաքագրմանը:' },
    { name: 'TG Quick Click', image: '/projects/tg-quick-click.png', description: 'Telegram Mini App՝ քլիքերային մեխանիկայով և ներքին տնտեսությամբ, լարված մեսենջերի ներսում բարձր ծանրաբեռնվածության համար:' },
    { name: 'Podarok.ru', image: '/projects/podarokru.png', description: 'Անհատականացված վիդեո-շնորհավորանքների ծառայություն՝ վիդեո ռենդերինգի և պատվերների մշակման backend-փայփլայնով:', url: 'https://podarokru.ru' }
  ],
  ru: [
    { name: 'Age of Astir', image: '/projects/age-of-astir.png', description: 'Игровая платформа для MMORPG: войны между тремя нациями, рейды на боссов и система прохождения подземелий.', url: 'https://ageofastir.com/' },
    { name: 'Cyberhack Pro', image: '/projects/cyberhack-pro.png', description: 'Платформа игровых утилит с безопасным лицензированием и надёжной доставкой.', url: 'https://cyberhack.pro' },
    { name: 'Omex Proxy', image: '/projects/omex-proxy.png', description: 'Платформа управления прокси с автоматической активацией и управлением через Telegram-бота.', url: 'https://omex.ai' },
    { name: 'HentaiVoice', image: '/projects/hentai-voice.png', description: 'Стриминг на нативном MSE-плеере собственной разработки — HLS/M3U8, мультидорожечное аудио/видео и чанковые субтитры, без сторонних плеер-библиотек.', url: 'https://hentaivoice.com', isAdult: true },
    { name: 'W33bvgl Portfolio', image: '/projects/portfolio.png', description: 'Этот сайт: Nuxt 3 с SSR, i18n на трёх языках и генерация PDF-резюме на лету через Puppeteer.', url: 'https://github.com/w33bvGL/Portfolio' },
    { name: 'Mari Karkas', image: '/projects/mari-karkas.png', description: 'Квиз-воронка для застройщика каркасных домов со встроенным расчётом стоимости конструкции.', url: 'https://quiz.mari-karkas.ru' },
    { name: 'Ota-ku legacy', image: '/projects/ota-ku.png', description: 'Портал аниме-стриминга с большой локализованной библиотекой, кастомным плеером и оптимизированным CDN.' },
    { name: 'Drive Fit', image: '/projects/drive-fit.png', description: 'SPA фитнес-клуба с динамическим расписанием, профилями тренеров и оформлением абонементов.' },
    { name: 'Crito', image: '/projects/crito.png', description: 'Высококонверсионный лендинг для CRM — респонсив, с фокусом на презентацию фич и захват лидов.' },
    { name: 'TG Quick Click', image: '/projects/tg-quick-click.png', description: 'Telegram Mini App с кликер-механикой и внутренней экономикой, заточенный под высокую нагрузку внутри мессенджера.' },
    { name: 'Podarok.ru', image: '/projects/podarokru.png', description: 'Сервис персональных видеопоздравлений с бэкенд-пайплайном рендеринга видео и обработки заказов.', url: 'https://podarokru.ru' }
  ]
}

export default defineEventHandler((event) => {
  return getLocalizedData(event, PROJECTS)
})
