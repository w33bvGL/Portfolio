import type { H3Event } from 'h3'

export default defineEventHandler((event: H3Event) => {
  const experiences = [
    {
      id: 1,
      company: 'Nsoft',
      title: 'Middle Full-Stack Engineer',
      data: {
        en: {
          period: 'Oct 2024 — Present',
          description: 'Building and maintaining full-stack features across microservices and frontend. Designed a billing module used across multiple products, built admin dashboards for internal teams, and developed a real-time currency exchange engine. Set up CI/CD pipelines from scratch and improved database performance on PostgreSQL and Redis.'
        },
        ru: {
          period: 'Окт 2024 — Наст. время',
          description: 'Разработка и поддержка full-stack функциональности в микросервисах и фронтенде. Спроектировал биллинговый модуль, используемый в нескольких продуктах, административные дашборды для внутренних команд и движок котировок в реальном времени. Настроил CI/CD пайплайны и улучшил производительность PostgreSQL и Redis.'
        },
        hy: {
          period: 'Հոկտ 2024 — Ներկա',
          description: 'Full-stack ֆունկցիոնալությունների մշակում և պահպանում միկրոսերվիսների և ֆրոնթենդի վրա: Մի քանի արտադրանքներում օգտագործվող բիլինգային մոդուլի նախագծում, ներքին թիմերի համար ադմինիստրատիվ վահանակների ստեղծում և իրական ժամանակի արժույթի փոխանակման շարժիչի մշակում: CI/CD փողօղակների կառուցում և PostgreSQL/Redis-ի կատարողականի բարելավում:'
        },
      }
    },
    {
      id: 2,
      company: 'Independent Contractor',
      title: 'Full-Stack Software Engineer',
      data: {
        en: {
          period: 'Jan 2023 — Sep 2024',
          description: 'Developed event-driven backend systems for fintech clients using Kafka and WebSockets. Integrated Stripe and crypto payment gateways. Set up centralized logging and monitoring with the ELK stack. Managed containerized deployments with Docker.'
        },
        ru: {
          period: 'Янв 2023 — Сент 2024',
          description: 'Разработка event-driven бэкенд-систем для финтех-клиентов на базе Kafka и WebSockets. Интеграция платёжных шлюзов Stripe и крипто. Настройка централизованного логирования и мониторинга через ELK Stack. Управление контейнерными деплоями на Docker.'
        },
        hy: {
          period: 'Հուն 2023 — Սեպտ 2024',
          description: 'Event-driven backend համակարգերի մշակում ֆինտեք հաճախորդների համար Kafka-ի և WebSockets-ի օգտագործմամբ: Stripe-ի և կրիպտո վճարային դարպասների ինտեգրում: ELK Stack-ի միջոցով կենտրոնացված լոգինգի և մոնիտորինգի կարգաբերում: Docker-ով կոնթեյներային տեղակայումների կառավարում:'
        },
      }
    }
  ]

  const query = getQuery(event)
  const lang = (query.lang as string) || 'en'

  return experiences.map(exp => {
    const translation = exp.data[lang as keyof typeof exp.data] || exp.data.en

    return {
      id: exp.id,
      company: exp.company,
      title: exp.title,
      ...translation
    }
  })
})
