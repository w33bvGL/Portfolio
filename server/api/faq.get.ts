import type { TranslatedFaq } from '~/types/faq'

export default defineEventHandler((): TranslatedFaq => {
  return {
    ru: [
      {
        q: 'Сколько лет вы занимаетесь разработкой?',
        a: 'Я начал коммерчески работать в 2020 году. До этого писал pet-проекты и контрибьютил в open source. За это время прошел путь от верстки лендингов до архитектуры сложных систем.'
      },
      {
        q: 'Какие технологии вы используете?',
        a: 'Основной стек: Nuxt.js, Vue 3, Laravel, PHP, TypeScript. Для инфраструктуры использую Docker, MySQL/PostgreSQL, Redis. Также работаю с RabbitMQ и Kafka для микросервисов.'
      },
      {
        q: 'Вы работаете под ключ?',
        a: 'Да. Я беру на себя весь цикл: от обсуждения идеи и проектирования архитектуры до разработки, тестирования, запуска в продакшен и дальнейшей поддержки.'
      },
      {
        q: 'Как проходит оплата?',
        a: 'Гибко: обычно это предоплата 30–50%, остальное — по факту сдачи этапов (milestones) или спринтов. Возможна почасовая оплата для консультаций.'
      }
    ],
    en: [
      {
        q: 'How long have you been in development?',
        a: 'I started working commercially in 2020. Before that, I built pet projects and contributed to open source. Since then, I’ve gone from building landing pages to architecting complex systems.'
      },
      {
        q: 'What technologies do you use?',
        a: 'My core stack: Nuxt.js, Vue 3, Laravel, PHP, TypeScript. For infrastructure, I use Docker, MySQL/PostgreSQL, Redis. I also work with RabbitMQ and Kafka for microservices.'
      },
      {
        q: 'Do you work on a turnkey basis?',
        a: 'Yes. I handle the entire cycle: from discussing the idea and planning architecture to development, testing, production launch, and ongoing support.'
      },
      {
        q: 'What are the payment terms?',
        a: 'Flexible: usually a 30–50% prepayment, with the rest paid upon completion of milestones or sprints. Hourly billing is available for consultations.'
      }
    ],
    hy: [
      {
        q: 'Քանի՞ տարի եք զբաղվում ծրագրավորմամբ',
        a: 'Կոմերցիոն գործունեությունս սկսել եմ 2020 թվականին։ Մինչ այդ զբաղվել եմ pet-նախագծերով և open source ներդրումներով։ Այդ ընթացքում անցել եմ ճանապարհ՝ պարզ կայքերից մինչև բարդ համակարգերի ճարտարապետություն։'
      },
      {
        q: 'Ի՞նչ տեխնոլոգիաներ եք օգտագործում',
        a: 'Հիմնական ստեկը՝ Nuxt.js, Vue 3, Laravel, PHP, TypeScript։ Ենթակառուցվածքների համար օգտագործում եմ Docker, MySQL/PostgreSQL, Redis։ Աշխատում եմ նաև RabbitMQ-ի և Kafka-ի հետ միկրոսերվիսների համար։'
      },
      {
        q: 'Աշխատու՞մ եք «բանալին ձեռքին» (turnkey) սկզբունքով',
        a: 'Այո։ Ես վերցնում եմ ամբողջ ցիկլը՝ գաղափարի քննարկումից և ճարտարապետության նախագծումից մինչև մշակում, թեստավորում, գործարկում և հետագա աջակցություն։'
      },
      {
        q: 'Ինչպե՞ս է կատարվում վճարումը',
        a: 'Ճկուն․ սովորաբար 30–50% կանխավճար, մնացածը՝ ըստ փուլերի (milestones) կամ սպրինտների հանձնման։ Հնարավոր է նաև ժամավճար՝ խորհրդատվությունների համար։'
      }
    ],
    uk: [
      {
        q: 'Скільки років ви займаєтесь розробкою?',
        a: 'Я почав комерційно працювати у 2020 році. До цього писав pet-проєкти та контриб’ютив у open source. За цей час пройшов шлях від верстки лендінгів до архітектури складних систем.'
      },
      {
        q: 'Які технології ви використовуєте?',
        a: 'Основний стек: Nuxt.js, Vue 3, Laravel, PHP, TypeScript. Для інфраструктури використовую Docker, MySQL/PostgreSQL, Redis. Також працюю з RabbitMQ та Kafka для мікросервісів.'
      },
      {
        q: 'Ви працюєте під ключ?',
        a: 'Так. Я беру на себе весь цикл: від обговорення ідеї та проєктування архітектури до розробки, тестування, запуску в продакшен та подальшої підтримки.'
      },
      {
        q: 'Як відбувається оплата?',
        a: 'Гнучко: зазвичай це передоплата 30–50%, решта — за фактом здачі етапів (milestones) або спринтів. Можлива погодинна оплата для консультацій.'
      }
    ]
  }
})
