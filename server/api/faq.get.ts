const FAQ = {
  en: [
    { q: 'How do you approach system scalability?', a: 'I design for growth from day one. By implementing microservices, event-driven architecture (Kafka), and robust caching (Redis/PostgreSQL), I ensure the system remains performant under increasing load.' },
    { q: 'What is your process for integrating new features into existing systems?', a: 'I prioritize zero-downtime deployments. I focus on modularity and writing clean, tested code that integrates seamlessly with your existing infrastructure without causing regressions.' },
    { q: 'How do you handle technical debt?', a: 'I view technical debt as a trade-off. I document and manage it, performing incremental refactoring during feature development to keep the codebase maintainable while delivering business value.' },
    { q: 'What is your communication style during the development lifecycle?', a: 'I practice radical transparency. You get regular updates on progress, architectural decisions, and potential risks, ensuring we stay aligned with business objectives throughout.' }
  ],
  ru: [
    { q: 'Как вы обеспечиваете масштабируемость системы?', a: 'Я проектирую архитектуру с запасом прочности. Использование микросервисов, event-driven подхода (Kafka) и грамотное кэширование (Redis) позволяют системе стабильно работать при десятикратном росте нагрузки.' },
    { q: 'Каков ваш подход к внедрению новых функций в действующий проект?', a: 'Мой приоритет — деплой без простоев (zero-downtime). Я пишу модульный, покрытый тестами код, который расширяет функционал, не нарушая работу существующих критических узлов.' },
    { q: 'Как вы работаете с техническим долгом?', a: 'Я рассматриваю техдолг как инструмент, а не проблему. Мы классифицируем его, и я провожу поэтапный рефакторинг в процессе разработки, чтобы поддерживать код в чистоте, не тормозя выпуск новых фич.' },
    { q: 'Как выстроена коммуникация в процессе разработки?', a: 'Для меня важна «радикальная прозрачность». Вы всегда в курсе архитектурных решений, рисков и статуса задач. Мы не играем в «черный ящик», а работаем как единая команда.' }
  ],
  hy: [
    { q: 'Ինչպե՞ս եք ապահովում համակարգի մասշտաբայնությունը (scalability):', a: 'Նախագծում եմ ճարտարապետություն՝ հիմնված աճի հնարավորության վրա: Միկրոսերվիսների, event-driven մոտեցման (Kafka) և ճիշտ քեշավորման (Redis) օգտագործումը թույլ է տալիս համակարգին կայուն աշխատել բեռնվածության բազմապատիկ աճի դեպքում:' },
    { q: 'Ինչպե՞ս եք կատարում նոր գործառույթների ներդրումը գործող նախագծում:', a: 'Իմ առաջնահերթությունը zero-downtime դեպլոյն է: Ես գրում եմ մոդուլային, թեստավորված կոդ, որն ընդլայնում է ֆունկցիոնալությունը՝ առանց գոյություն ունեցող կարևոր հանգույցների աշխատանքը խաթարելու:' },
    { q: 'Ինչպե՞ս եք աշխատում տեխնիկական պարտքի (technical debt) հետ:', a: 'Ես տեխնիկական պարտքը դիտարկում եմ որպես գործիք, ոչ թե խնդիր: Մենք դասակարգում ենք այն, և ես մշակման գործընթացում կատարում եմ աստիճանական ռեֆակտորինգ՝ կոդը մաքուր պահելու համար՝ չդանդաղեցնելով բիզնեսի առաջընթացը:' },
    { q: 'Ինչպե՞ս է կառուցված հաղորդակցությունը մշակման ընթացքում:', a: 'Ինձ համար կարևոր է «արմատական թափանցիկությունը»: Դուք միշտ տեղյակ եք ճարտարապետական որոշումների, ռիսկերի և առաջընթացի մասին: Մենք չենք խաղում «սև արկղ»-ի խաղ, այլ աշխատում ենք որպես մեկ թիմ:' }
  ]
}

export default defineEventHandler((event) => {
  return getLocalizedData(event, FAQ)
})
