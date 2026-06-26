const EXPERIENCES = {
  en: [
    {
      id: 1,
      company: 'Nsoft',
      title: 'Full-Stack Engineer',
      period: 'Oct 2024',
      description: 'Sole engineer behind the entire platform, owning it end to end, from the PostgreSQL schema and async PHP services up to the reactive Nuxt.js UI. Designed and shipped a centralized Content-Addressable Storage (CAS) service that became the single source of truth for all ecosystem media. Engineered a transactional billing module with idempotent, double-entry accounting that stays consistent under concurrent load. Built a real-time currency-exchange engine that streams live rates over WebSockets. Modeled the schema with a partitioning and indexing strategy from day one, and layered Redis caching to keep hot reads off the database. Established CI/CD pipelines from scratch for zero-downtime releases, and delivered state-heavy user dashboards and internal admin panels on a reactive frontend.'
    },
    {
      id: 2,
      company: 'Independent Contractor',
      title: 'Full-Stack Engineer',
      period: 'Jan 2023 — Sep 2024',
      description: 'Delivered full-cycle web products for clients across e-commerce, hospitality, and lead generation, each one owned from the database to the UI. Integrated fiat and crypto payment gateways (Stripe, PayPal, and regional providers) end to end: checkout, webhooks, and reconciliation. Added real-time features over WebSockets where products needed live updates. Containerized environments with Docker and automated deployments for repeatable, low-friction releases. Stood up centralized logging and monitoring (ELK) to surface and resolve production issues faster.'
    }
  ],
  ru: [
    {
      id: 1,
      company: 'Nsoft',
      title: 'Full-Stack Engineer',
      period: 'Окт 2024',
      description: 'Единственный инженер всей платформы. Вёл её целиком: от схемы PostgreSQL и асинхронных PHP-сервисов до реактивного интерфейса на Nuxt.js. Спроектировал и запустил централизованное контент-адресуемое хранилище (CAS), которое стало единым источником правды для всей медиа экосистемы. Реализовал транзакционный биллинг с идемпотентными операциями и двойной записью, сохраняющий консистентность под конкурентной нагрузкой. Построил реалтайм-движок котировок валют, транслирующий курсы по WebSocket. Заложил схему с партиционированием и стратегией индексов с первого дня, добавил кэш-слой на Redis, чтобы снять горячие чтения с базы. С нуля выстроил CI/CD для релизов без простоя и сделал нагруженные состоянием личные кабинеты и внутренние админ-панели на реактивном фронтенде.'
    },
    {
      id: 2,
      company: 'Independent Contractor',
      title: 'Full-Stack Engineer',
      period: 'Янв 2023 — Сент 2024',
      description: 'Делал веб-продукты полного цикла для клиентов в e-commerce, гостиничном бизнесе и лидогенерации, каждый от базы данных до интерфейса. Интегрировал фиатные и крипто платёжные шлюзы (Stripe, PayPal и региональные провайдеры) сквозно: оплата, вебхуки, сверка. Добавлял реалтайм по WebSocket там, где продукту нужны были живые обновления. Контейнеризировал окружения в Docker и автоматизировал деплой ради повторяемых релизов без трения. Поднял централизованное логирование и мониторинг (ELK), чтобы быстрее находить и закрывать проблемы на проде.'
    }
  ],
  hy: [
    {
      id: 1,
      company: 'Nsoft',
      title: 'Full-Stack Engineer',
      period: 'Հոկտ 2024',
      description: 'Ամբողջ պլատֆորմի միակ ինժեները՝ վարել եմ այն end-to-end՝ PostgreSQL-ի սխեմայից և ասինխրոն PHP-սերվիսներից մինչև Nuxt.js-ի ռեակտիվ ինտերֆեյսը: Նախագծել և գործարկել եմ կենտրոնացված կոնտենտ-հասցեավորվող պահոց (CAS)՝ որպես էկոհամակարգի ողջ մեդիայի ճշմարտության միակ աղբյուր: Իրականացրել եմ տրանզակցիոն բիլինգ՝ իդեմպոտենտ գործողություններով և կրկնակի գրառմամբ, որը պահպանում է կոնսիստենտությունը կոնկուրենտ ծանրաբեռնվածության տակ: Կառուցել եմ արժույթի կուրսերի ռեալթայմ շարժիչ, որը հեռարձակում է կուրսերը WebSocket-ով: Առաջին օրվանից մոդելավորել եմ սխեման՝ պարտիցիոնավորմամբ և ինդեքսների ստրատեգիայով, ավելացրել Redis քեշ՝ տաք ընթերցումները բազայից հանելու համար: Զրոյից կառուցել եմ CI/CD՝ առանց պարապուրդի թողարկումների համար, և ստեղծել եմ վիճակով հագեցած անձնական կաբինետներ ու ներքին ադմին-վահանակներ ռեակտիվ ֆրոնտենդով:'
    },
    {
      id: 2,
      company: 'Independent Contractor',
      title: 'Full-Stack Engineer',
      period: 'Հուն 2023 — Սեպտ 2024',
      description: 'Ստեղծել եմ ամբողջական ցիկլի վեբ-պրոդուկտներ հաճախորդների համար՝ e-commerce, հյուրանոցային ոլորտ և lead-generation՝ յուրաքանչյուրը տվյալների բազայից մինչև ինտերֆեյս: Ինտեգրել եմ ֆիատ և կրիպտո վճարային դարպասներ (Stripe, PayPal և տարածաշրջանային պրովայդերներ) ծայրից ծայր՝ վճարում, webhook-ներ, հաշվեկշռում: Ավելացրել եմ ռեալթայմ WebSocket-ով այնտեղ, որտեղ պրոդուկտին պետք էին կենդանի թարմացումներ: Կոնտեյներացրել եմ միջավայրերը Docker-ով և ավտոմատացրել տեղակայումը՝ կրկնվող, առանց շփման թողարկումների համար: Բարձրացրել եմ կենտրոնացված լոգինգ և մոնիտորինգ (ELK)՝ պրոդ-խնդիրներն ավելի արագ հայտնաբերելու և լուծելու համար:'
    }
  ]
}

export default defineEventHandler((event) => {
  return getLocalizedData(event, EXPERIENCES)
})
