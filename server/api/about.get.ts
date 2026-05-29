const ABOUT_DATA = {
  en: [
    {
      title: 'Architectural Philosophy',
      content: 'I don\'t just write code; I engineer systems. My focus is on creating fault-tolerant, high-performance architectures that evolve with your business. I prioritize maintainability, clean domain design, and infrastructure that scales horizontally.'
    },
    {
      title: 'Technical Depth',
      content: 'I specialize in high-load distributed systems, event-driven architectures, and real-time processing. My stack is flexible—I choose the right tools for the job, whether it\'s the Laravel/Nuxt ecosystem or other technologies if the business case demands it.'
    },
    {
      title: 'Work Model',
      content: 'I work equally well solo as an architect/lead or as a key contributor in a high-performing team. I adapt to your workflows, take full ownership of my domain, and deliver without micromanagement.'
    }
  ],
  ru: [
    {
      title: 'Архитектурный подход',
      content: 'Я не просто пишу код, я проектирую системы. Мой фокус — отказоустойчивые и высокопроизводительные решения, которые развиваются вместе с вашим бизнесом. Ставлю во главу угла легкость поддержки, чистый доменный дизайн и горизонтальное масштабирование.'
    },
    {
      title: 'Техническая экспертиза',
      content: 'Специализируюсь на высоконагруженных распределенных системах, event-driven архитектурах и реалтайм-обработке. Стек гибкий: подбираю инструменты под задачу, будь то связка Laravel/Nuxt или любые другие технологии, если этого требует архитектурная целесообразность.'
    },
    {
      title: 'Формат работы',
      content: 'Работаю одинаково эффективно как в одиночку в роли архитектора, так и как ключевой игрок в составе сильной команды. Легко адаптируюсь под ваши процессы, беру на себя полную ответственность за свой домен и доставляю результат без микроменеджмента.'
    }
  ],
  hy: [
    {
      title: 'Ճարտարապետական մոտեցում',
      content: 'Ես պարզապես կոդ չեմ գրում, ես նախագծում եմ համակարգեր: Իմ ուշադրության կենտրոնում են բարձր արդյունավետությամբ, հուսալի լուծումները, որոնք զարգանում են ձեր բիզնեսի հետ միասին: Առաջնահերթ եմ համարում պահպանելիությունը (maintainability), ճիշտ դոմենային դիզայնը և հորիզոնական մասշտաբավորումը:'
    },
    {
      title: 'Տեխնիկական փորձառություն',
      content: 'Մասնագիտացած եմ բարձր ծանրաբեռնվածությամբ բաշխված համակարգերի, event-driven ճարտարապետությունների և ռեալթայմ մշակման մեջ: Տեխնոլոգիական ստեկը ճկուն է. ես ընտրում եմ լավագույն գործիքները՝ լինի դա Laravel/Nuxt էկոհամակարգը, թե այլ տեխնոլոգիաներ, եթե դա պահանջում է բիզնեսի տրամաբանությունը:'
    },
    {
      title: 'Աշխատանքային ձևաչափ',
      content: 'Աշխատում եմ հավասարապես արդյունավետ՝ թե՛ որպես մենակատար ճարտարապետ, թե՛ որպես հզոր թիմի առանցքային մասնիկ: Հեշտությամբ հարմարվում եմ ձեր պրոցեսներին, ստանձնում եմ ամբողջական պատասխանատվություն իմ տիրույթի համար և ապահովում եմ արդյունք՝ առանց մանրակրկիտ վերահսկողության (micromanagement):'
    }
  ]
}

export default defineEventHandler((event) => {
  return getLocalizedData(event, ABOUT_DATA)
})
