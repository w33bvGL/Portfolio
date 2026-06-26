const ABOUT_DATA = {
  en: [
    {
      title: 'Architectural Philosophy',
      content: 'I build systems end to end, not just features. I lean on clear domain boundaries, fault tolerance, and code that stays maintainable as the product grows, so the architecture supports the business instead of fighting it.'
    },
    {
      title: 'Technical Depth',
      content: 'My core is async PHP (Swoole) with PostgreSQL and Redis, paired with Vue/Nuxt on the frontend. I\'ve built content storage, transactional billing, and real-time engines from scratch. I pick tools by the problem, not by habit.'
    },
    {
      title: 'Work Model',
      content: 'I take full ownership of my domain. I\'ve shipped an entire platform solo as the sole engineer, and I plug into an existing team just as fast. No micromanagement needed.'
    }
  ],
  ru: [
    {
      title: 'Архитектурный подход',
      content: 'Строю системы целиком, а не отдельные фичи. Опираюсь на чёткие доменные границы, отказоустойчивость и код, который остаётся поддерживаемым по мере роста продукта. Архитектура должна помогать бизнесу, а не мешать ему.'
    },
    {
      title: 'Техническая экспертиза',
      content: 'Ядро стека: асинхронный PHP (Swoole) с PostgreSQL и Redis, на фронте Vue/Nuxt. С нуля строил контент-хранилище, транзакционный биллинг и реалтайм-движки. Инструменты подбираю под задачу, а не по привычке.'
    },
    {
      title: 'Формат работы',
      content: 'Беру полную ответственность за свой домен. Запускал целую платформу соло как единственный инженер и так же быстро вливаюсь в готовую команду. Микроменеджмент не нужен.'
    }
  ],
  hy: [
    {
      title: 'Ճարտարապետական մոտեցում',
      content: 'Կառուցում եմ համակարգերն ամբողջությամբ, ոչ թե առանձին ֆիչերներ: Հենվում եմ հստակ դոմենային սահմանների, հուսալիության և կոդի վրա, որը մնում է պահպանելի՝ պրոդուկտի աճին զուգահեռ, որպեսզի ճարտարապետությունն օգնի բիզնեսին, ոչ թե խանգարի:'
    },
    {
      title: 'Տեխնիկական փորձառություն',
      content: 'Հիմքը՝ ասինխրոն PHP (Swoole)՝ PostgreSQL-ով և Redis-ով, ֆրոնտում՝ Vue/Nuxt: Զրոյից կառուցել եմ կոնտենտ-պահոց, տրանզակցիոն բիլինգ և ռեալթայմ շարժիչներ, և գործիքներն ընտրում եմ ըստ խնդրի, ոչ թե սովորության:'
    },
    {
      title: 'Աշխատանքային ձևաչափ',
      content: 'Ստանձնում եմ լիարժեք պատասխանատվություն իմ տիրույթի համար: Գործարկել եմ ամբողջ պլատֆորմը միայնակ՝ որպես միակ ինժեներ, և նույնքան արագ ինտեգրվում եմ գործող թիմին՝ ապահովելով արդյունք առանց մանրակրկիտ վերահսկողության:'
    }
  ]
}

export default defineEventHandler((event) => {
  return getLocalizedData(event, ABOUT_DATA)
})
