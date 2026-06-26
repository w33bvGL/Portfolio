const FAQ = {
  en: [
    { q: 'How do you approach system scalability?', a: 'I design for growth from day one. Microservices, event-driven processing (Kafka), and layered caching (Redis/PostgreSQL) keep the system responsive as load climbs.' },
    { q: 'What is your process for integrating new features into existing systems?', a: 'I aim for zero-downtime deployments. Modular, tested code lets new features land without regressing what already works.' },
    { q: 'How do you handle technical debt?', a: 'I treat tech debt as a trade-off, not a sin. I track it and pay it down with incremental refactoring during feature work, so the codebase stays maintainable without stalling delivery.' },
    { q: 'Can you work solo or do you need a team?', a: 'Both. Solo, I have owned an entire product lifecycle as the sole engineer. On a team, I integrate into existing workflows fast and deliver without constant oversight.' },
    { q: 'How do you select the technology stack?', a: 'I pick the stack from the problem, not preference. Whether it is the Laravel/Nuxt ecosystem or something more specialized, I go for the most robust, maintainable fit.' },
    { q: 'What is your communication style during the development lifecycle?', a: 'I keep it transparent and regular. You hear about progress, architectural decisions, and risks, so we stay aligned with the business throughout.' }
  ],
  ru: [
    { q: 'Как вы обеспечиваете масштабируемость системы?', a: 'Проектирую с запасом на рост с первого дня. Микросервисы, event-driven обработка (Kafka) и слоистое кэширование (Redis/PostgreSQL) держат систему отзывчивой по мере роста нагрузки.' },
    { q: 'Каков ваш подход к внедрению новых функций в действующий проект?', a: 'Целюсь в деплой без простоя. Модульный, покрытый тестами код позволяет добавлять функции, не ломая то, что уже работает.' },
    { q: 'Как вы работаете с техническим долгом?', a: 'Отношусь к техдолгу как к компромиссу, а не греху. Фиксирую его и гашу поэтапным рефакторингом по ходу разработки, так что код остаётся поддерживаемым, а выпуск фич не встаёт.' },
    { q: 'Вы работаете один или в команде?', a: 'И так, и так. В одиночку вёл полный жизненный цикл продукта как единственный инженер. В команде быстро вливаюсь в процессы и выдаю результат без постоянного контроля.' },
    { q: 'Как вы выбираете стек технологий?', a: 'Выбираю стек от задачи, а не от предпочтений. Будь то экосистема Laravel/Nuxt или более специализированные инструменты, беру самое надёжное и поддерживаемое решение.' },
    { q: 'Как выстроена коммуникация в процессе разработки?', a: 'Держу коммуникацию прозрачной и регулярной. Прогресс, архитектурные решения и риски всегда на виду, чтобы мы оставались в одной плоскости с бизнесом.' }
  ],
  hy: [
    { q: 'Ինչպե՞ս եք ապահովում համակարգի մասշտաբայնությունը (scalability):', a: 'Նախագծում եմ աճի հաշվարկով առաջին օրվանից՝ միկրոսերվիսներ, event-driven մշակում (Kafka) և շերտավոր քեշավորում (Redis/PostgreSQL), որպեսզի համակարգը մնա արագ՝ ծանրաբեռնվածության աճին զուգահեռ:' },
    { q: 'Ինչպե՞ս եք կատարում նոր գործառույթների ներդրումը գործող նախագծում:', a: 'Նպատակս zero-downtime տեղակայումն է: Մոդուլային, թեստավորված կոդը թույլ է տալիս ավելացնել ֆունկցիոնալ՝ առանց արդեն աշխատողը կոտրելու:' },
    { q: 'Ինչպե՞ս եք աշխատում տեխնիկական պարտքի (technical debt) հետ:', a: 'Տեխնիկական պարտքը դիտարկում եմ որպես փոխզիջում, ոչ թե մեղք: Գրանցում եմ այն և մարում աստիճանական ռեֆակտորինգով՝ մշակման ընթացքում, որպեսզի կոդը մնա պահպանելի, իսկ ֆիչերների թողարկումը՝ չդանդաղի:' },
    { q: 'Դուք աշխատում եք միայնա՞կ, թե՞ թիմում:', a: 'Եվ՛ այնպես, և՛ այնպես: Միայնակ՝ վարել եմ պրոդուկտի ողջ կյանքի ցիկլը որպես միակ ինժեներ: Թիմում՝ արագ ինտեգրվում եմ պրոցեսներին և ապահովում արդյունք առանց մշտական վերահսկողության:' },
    { q: 'Ինչպե՞ս եք ընտրում տեխնոլոգիական ստեկը:', a: 'Ստեկն ընտրում եմ ըստ խնդրի, ոչ թե նախասիրության: Լինի Laravel/Nuxt էկոհամակարգը, թե ավելի մասնագիտացված գործիքներ՝ ընտրում եմ ամենահուսալի և պահպանելի լուծումը:' },
    { q: 'Ինչպե՞ս է կառուցված հաղորդակցությունը մշակման ընթացքում:', a: 'Հաղորդակցությունը պահում եմ թափանցիկ և կանոնավոր՝ առաջընթաց, ճարտարապետական որոշումներ և ռիսկեր, որպեսզի մնանք բիզնեսի հետ նույն հարթության վրա:' }
  ]
}

export default defineEventHandler((event) => {
  return getLocalizedData(event, FAQ)
})
