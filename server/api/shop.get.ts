import type { TranslatedShopItems } from '~/types/shop'

export default defineEventHandler((): TranslatedShopItems => {
  return <TranslatedShopItems>{
    en: [
      {
        name: 'Ota-ku',
        description: 'Free online anime streaming with Russian voice-over. Dive into endless anime adventures on ota-ku.am — the portal for true anime fans.',
        image: '/projects/ota-ku.png',
        url: 'https://ota-ku.am',
        price: 0,
        discount: 100
      },
      {
        name: 'W33bv.gl Portfolio',
        description: 'Personal portfolio showcasing full-stack projects, skills, and development experience. Open-source and built with a modern tech stack.',
        image: '/projects/portfolio.png',
        url: 'https://vahe.anidzen.com',
        github: 'https://github.com/vahe-sargsyan2005/Portfolio',
        price: 0,
        discount: 100
      },
      {
        name: 'Currzy — Currency Library',
        description: 'Open-source library for fetching, managing, and converting up-to-date currency exchange rates from multiple reliable providers. Easily integrates into any project.',
        image: '/projects/currzy.png',
        url: 'https://currzy.anidzen.com',
        github: 'https://github.com/Currzy',
        price: 2800,
        discount: 25
      },
      {
        name: 'Rus Military Badges',
        description: 'A resource pack replacing default icons with insignias of the Russian army. Perfect for servers, mods, personal projects, and templates.',
        image: '/projects/rus-military-badges.png',
        url: 'https://modrinth.com/resourcepack/rus-military-badges',
        github: 'https://github.com/Zone-13/rus-military-badges',
        price: 0,
        discount: 100
      }
    ],

    ru: [
      {
        name: 'Ota-ku',
        description: 'Бесплатный онлайн просмотр аниме с русской озвучкой. Погружайтесь в неограниченные аниме-приключения на ota-ku.am — портале для настоящих фанатов аниме',
        image: '/projects/ota-ku.png',
        url: 'https://ota-ku.am',
        price: 0,
        discount: 100
      },
      {
        name: 'W33bv.gl Portfolio',
        description: 'Личное портфолио с демонстрацией full-stack проектов, навыков и опыта разработки. Open-source, современный стек технологий.',
        image: '/projects/portfolio.png',
        url: 'https://vahe.anidzen.com',
        github: 'https://github.com/vahe-sargsyan2005/Portfolio',
        price: 0,
        discount: 100
      },
      {
        name: 'Currzy — библиотека валют',
        description: 'Open-source библиотека для получения, управления и конвертации актуальных курсов валют от нескольких надёжных провайдеров. Легко интегрируется в проекты.',
        image: '/projects/currzy.png',
        url: 'https://currzy.anidzen.com',
        github: 'https://github.com/Currzy',
        price: 2800,
        discount: 25
      },
      {
        name: 'Русские армейские погоны',
        description: 'Пакет ресурсов заменяет стандартные иконки на знаки различия российской армии. Идеально для серверов, модов, личных проектов и шаблонов.',
        image: '/projects/rus-military-badges.png',
        url: 'https://modrinth.com/resourcepack/rus-military-badges',
        github: 'https://github.com/Zone-13/rus-military-badges',
        price: 0,
        discount: 100
      }
    ],

    hy: [
      {
        name: 'Ota-ku',
        description: 'Անվճար անիմե դիտում ռուսերեն ձայնավորմամբ։ Ներծծվեք անսահման անիմե արկածների աշխարհում ota-ku.am կայքում՝ իսկական անիմե սիրահարների համար։',
        image: '/projects/ota-ku.png',
        url: 'https://ota-ku.am',
        price: 0,
        discount: 100
      },
      {
        name: 'W33bv.gl Portfolio',
        description: 'Անձնական պորտֆոլիո՝ full-stack նախագծերի, հմտությունների և փորձի ցուցադրմամբ։ Բաց կոդով և կառուցված ժամանակակից տեխնոլոգիաներով։',
        image: '/projects/portfolio.png',
        url: 'https://vahe.anidzen.com',
        github: 'https://github.com/vahe-sargsyan2005/Portfolio',
        price: 0,
        discount: 100
      },
      {
        name: 'Currzy — արժույթի գրադարան',
        description: 'Բաց կոդով գրադարան՝ արժույթների փոխարժեքները ստանալու, կառավարելու և փոխակերպելու համար՝ մի քանի վստահելի աղբյուրներից։ Հեշտ է ինտեգրվում ցանկացած նախագծում։',
        image: '/projects/currzy.png',
        url: 'https://currzy.anidzen.com',
        github: 'https://github.com/Currzy',
        price: 2800,
        discount: 25
      },
      {
        name: 'Ռուսական բանակի ուսադիրներ',
        description: 'Ռեսուրս փաթեթը փոխարինում է ստանդարտ նշանները ռուսական բանակի տարբերանշաններով։ Հարմար է սերվերների, մոդերի և անհատական նախագծերի համար։',
        image: '/projects/rus-military-badges.png',
        url: 'https://modrinth.com/resourcepack/rus-military-badges',
        github: 'https://github.com/Zone-13/rus-military-badges',
        price: 0,
        discount: 100
      }
    ]
  }
})
