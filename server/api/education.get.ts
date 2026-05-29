const EDUCATION = {
  en: [
    {
      title: 'Ararat State College — Software Engineering of Computer Systems and Automated Systems',
      description: '4-year formal technical program. Focused on core computer science, algorithms, database architecture, and low-level programming foundations.',
      url: 'https://www.facebook.com/profile.php?id=100006499147474'
    },
    {
      title: 'Ghazaros Saryan Art School — Fine Arts',
      description: '8-year academic program. Studied academic drawing, painting, anatomy, and structural composition.',
      url: 'https://www.facebook.com/profile.php?id=100057590194091'
    }
  ],
  ru: [
    {
      title: 'Араратский государственный колледж — Программное обеспечение вычислительной техники и автоматизированных систем',
      description: '4-летнее профильное техническое обучение. Фундаментальная база: алгоритмы, структуры данных, проектирование баз данных и системное программирование.',
      url: 'https://www.facebook.com/profile.php?id=100006499147474'
    },
    {
      title: 'Художественная школа имени Газароса Сарьяна — Изобразительное искусство',
      description: '8-летнее академическое обучение. Изучение академического рисунка, живописи, анатомии и пространственной композиции.',
      url: 'https://www.facebook.com/profile.php?id=100057590194091'
    }
  ],
  hy: [
    {
      title: 'Արարատի պետական քոլեջ — Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովում',
      description: '4-ամյա պետական տեխնիկական կրթություն: Ծրագրավորման հիմունքներ, ալգորիթմներ, տվյալների բազաների կառուցվածք և համակարգային վերլուծություն:',
      url: 'https://www.facebook.com/profile.php?id=100006499147474'
    },
    {
      title: 'Ղազարոս Սարյանի անվան արվեստի դպրոց — Կերպարվեստ',
      description: '8-ամյա ակադեմիական ուսուցում: Ակադեմիական նկարչություն, գեղանկարչություն և կոմպոզիցիա:',
      url: 'https://www.facebook.com/profile.php?id=100057590194091'
    }
  ]
}

export default defineEventHandler((event) => {
  return getLocalizedData(event, EDUCATION)
})
