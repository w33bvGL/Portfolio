export default defineEventHandler(() => {
  return {
    de: [
      { q: 'Wie viele Jahre Erfahrung haben Sie?', a: 'Ich bin seit 2023 kommerziell tätig. Mein Weg führte von der Frontend-Entwicklung hin zur Architektur komplexer verteilter Systeme und Hochlast-Infrastrukturen.' },
      { q: 'Bieten Sie Full-Cycle-Lösungen an?', a: 'Ja. Ich übernehme den gesamten Lebenszyklus: von der Systemarchitektur und dem Design bis hin zur Implementierung, automatisierten Tests, Deployment und technischem Support.' },
      { q: 'Wie sehen Ihre Kooperationsmodelle aus?', a: 'Ich bin flexibel: Projektbasis (Fixed Price), Stundensätze oder langfristige Verträge. Wir finden das Modell, das am besten zu Ihrem Business passt.' },
      { q: 'Garantiere Sie Support nach dem Launch?', a: 'Ich liefere keinen "toten" Code. Ich baue eine Infrastruktur mit ELK-Logging, Monitoring und Containerisierung auf, damit das System wartbar bleibt – für mich oder jedes andere Team unter SLA.' },
      { q: 'Können Sie auch das Design übernehmen?', a: 'Dank meines Hintergrunds an der Kunstschule verstehe ich Komposition und Farblehre. Ich entwerfe UX/UI-Systeme, die nicht nur gut aussehen, sondern technisch sauber umsetzbar sind.' },
      { q: 'Wie gehen Sie mit Legacy-Code um?', a: 'Pragmatisch. Ich führe Audits durch, identifiziere Bottlenecks und refactore schrittweise, ohne den Business-Betrieb zu stören. Ziel ist ein modulares System statt "Spaghetti-Code".' },
      { q: 'Was ist, wenn eine neue Technologie benötigt wird?', a: 'Meine Ingenieursbasis erlaubt es mir, neue Tools schnell zu adaptieren. Wenn Go oder Python für einen Microservice besser geeignet sind, implementiere ich das nach höchsten Architekturstandards.' }
    ],
    en: [
      { q: 'How many years of experience do you have?', a: 'I started my commercial career in 2023. I have evolved from building interfaces to architecting complex distributed systems and high-load infrastructures.' },
      { q: 'Do you work end-to-end?', a: 'Yes. I take full ownership of the cycle: from initial architecture and system design to development, testing, production deployment, and ongoing support.' },
      { q: 'What are your terms of cooperation?', a: 'I am flexible: fixed-price projects, hourly rates, or long-term contracts. We can discuss and adapt to any model that suits your business needs.' },
      { q: 'Can you support the project after launch?', a: 'I don’t just hand over code; I build infrastructure for the product’s long-term health. I implement ELK logging, monitoring, and containerization, ensuring the system is maintainable under SLA.' },
      { q: 'Do you work with ready-made layouts or offer design?', a: 'My art school background allows me to go beyond Figma and design UX/UI independently. I understand composition and color theory, creating intuitive interfaces that don’t need extra designers.' },
      { q: 'How do you handle legacy code?', a: 'With a cool head. I audit, identify bottlenecks, and perform step-by-step refactoring without stopping business processes. My goal is to turn "spaghetti code" into a scalable modular system.' },
      { q: 'What if a specific technology outside your stack is required?', a: 'My engineering foundation allows me to pick up new tools rapidly. If Go or Python is objectively better for a specific microservice, I will dive in and implement it following solid architectural principles.' }
    ],
    es: [
      { q: '¿Cuántos años de experiencia tienes?', a: 'Inicié mi carrera comercial en 2023. He evolucionado desde el desarrollo de interfaces hasta la arquitectura de sistemas distribuidos y de alta carga.' },
      { q: '¿Ofreces soluciones integrales?', a: 'Sí. Asumo la responsabilidad total del ciclo: desde la arquitectura inicial y diseño de sistemas hasta el desarrollo, pruebas, despliegue y soporte.' },
      { q: '¿Cuáles son tus términos de cooperación?', a: 'Soy flexible: proyectos a precio fijo, tarifas por hora o contratos a largo plazo. Podemos adaptar cualquier modelo a las necesidades de tu negocio.' },
      { q: '¿Puedes mantener el proyecto tras el lanzamiento?', a: 'No entrego código muerto. Construyo infraestructura para la vida a largo plazo del producto: logs (ELK), monitoreo y contenedores, para que el sistema sea mantenible bajo SLA.' },
      { q: '¿Trabajas con diseños listos o puedes proponer uno?', a: 'Mi formación en la escuela de arte me permite diseñar UX/UI de forma independiente. Entiendo la composición y teoría del color, creando interfaces que no requieren diseñadores extra.' },
      { q: '¿Cómo manejas el código legacy?', a: 'Con calma. Realizo auditorías, detecto cuellos de botella y refactorizo paso a paso sin detener los procesos de negocio. Mi meta es transformar el "código espagueti" en un sistema modular.' },
      { q: '¿Qué pasa si necesito una tecnología específica fuera de tu stack?', a: 'Mi base de ingeniería me permite aprender herramientas nuevas rápido. Si Go o Python es mejor para un microservicio, lo implementaré siguiendo estándares rigurosos.' }
    ],
    fr: [
      { q: 'Combien d’années d’expérience avez-vous ?', a: 'J’ai débuté ma carrière professionnelle en 2023. Je suis passé du développement d’interfaces à l’architecture de systèmes complexes et d’infrastructures à haute charge.' },
      { q: 'Proposez-vous des solutions clé en main ?', a: 'Oui. Je gère l’intégralité du cycle : de l’architecture initiale à la mise en production, en passant par les tests et le support technique.' },
      { q: 'Quelles sont vos conditions de collaboration ?', a: 'Je suis flexible : au forfait, au taux horaire ou via contrat long terme. Nous pouvons discuter du modèle le plus adapté à votre business.' },
      { q: 'Pouvez-vous assurer le support après le lancement ?', a: 'Je ne livre pas de code mort. Je mets en place une infrastructure (ELK, monitoring, Docker) permettant une maintenance fluide sous SLA, par moi-même ou une autre équipe.' },
      { q: 'Travaillez-vous sur maquettes ou proposez-vous le design ?', a: 'Mon parcours en école d’art me permet de concevoir l’UX/UI de manière autonome. Je maîtrise la composition et la théorie des couleurs pour créer des interfaces intuitives et pro.' },
      { q: 'Comment gérez-vous le code legacy ?', a: 'Avec méthode. J’audite, j’identifie les goulots d’étranglement et je refactorise par étapes sans interrompre l’activité. Mon but : transformer le "code spaghetti" en système modulaire.' },
      { q: 'Et si j’ai besoin d’une techno spécifique hors de votre stack ?', a: 'Ma base d’ingénieur me permet d’apprendre vite. Si Go ou Python est plus pertinent pour un microservice, je m’en occupe en respectant les standards d’architecture.' }
    ],
    hy: [
      { q: 'Քանի՞ տարվա փորձ ունեք:', a: 'Կոմերցիոն գործունեությունս սկսել եմ 2023 թվականին: Անցել եմ ուղի պարզ ինտերֆեյսներից մինչև բարդ համակարգերի և բարձր բեռնվածությամբ ենթակառուցվածքների ճարտարապետություն:' },
      { q: 'Աշխատու՞մ եք «բանալիի հանձնումով»:', a: 'Այո: Ես ստանձնում եմ ամբողջ ցիկլը՝ ճարտարապետության նախագծումից մինչև մշակում, թեստավորում, թողարկում և հետագա աջակցություն:' },
      { q: 'Որո՞նք են համագործակցության պայմանները:', a: 'Ճկուն եմ՝ աշխատում եմ նախագծային (fixed price), ժամավճարով կամ երկարաժամկետ պայմանագրերով: Պատրաստ եմ քննարկել ցանկացած ձևաչափ:' },
      { q: 'Կարո՞ղ եք սպասարկել նախագիծը թողարկումից հետո:', a: 'Ես չեմ հանձնում «մեռած» կոդ: Ես կառուցում եմ ենթակառուցվածք (ELK, մոնիթորինգ, կոնտեյներացում), որպեսզի համակարգը հեշտ սպասարկվի իմ կամ այլ ինժեների կողմից SLA-ի շրջանակներում:' },
      { q: 'Աշխատու՞մ եք պատրաստի մակետներով, թե՞ առաջարկում եք դիզայն:', a: 'Գեղարվեստի դպրոցի փորձս թույլ է տալիս ինքնուրույն նախագծել UX/UI: Ես հասկանում եմ կոմպոզիցիան և գույների տեսությունը, ստեղծելով ինտերֆեյսներ, որոնք դիզայների լրացուցիչ կարիք չունեն:' },
      { q: 'Ինչպե՞ս եք վերաբերվում legacy կոդին:', a: 'Հանգիստ: Կատարում եմ աուդիտ, գտնում եմ թույլ կողմերը և իրականացնում փուլային ռեֆակտորինգ առանց բիզնես պրոցեսները կանգնեցնելու: Նպատակս "spaghetti կոդը" մոդուլային համակարգի վերածելն է:' },
      { q: 'Իսկ եթե անհրաժեշտ լինի տեխնոլոգիա, որը ձեր սթեքում չկա:', a: 'Ինժեներական բազան թույլ է տալիս արագ յուրացնել նոր գործիքներ: Եթե բիզնեսի համար ավելի լավ է Go կամ Python օգտագործել, ես կիրականացնեմ դա՝ պահպանելով ճարտարապետական բոլոր ստանդարտները:' }
    ],
    nl: [
      { q: 'Hoeveel jaar ervaring heb je?', a: 'Ik ben in 2020 begonnen met commerciële ontwikkeling. Sindsdien ben ik gegroeid naar de architectuur van complexe gedistribueerde systemen.' },
      { q: 'Werk je aan turnkey-oplossingen?', a: 'Ja. Ik beheer de volledige cyclus: van architectuurontwerp tot testen, productie-deployment en support.' },
      { q: 'Wat zijn de samenwerkingvoorwaarden?', a: 'Ik ben flexibel: projectbasis (fixed price), uurtarieven of langdurige contracten. Alles is bespreekbaar op basis van jouw business.' },
      { q: 'Bied je support na de launch?', a: 'Ik lever geen dode code. Ik bouw infrastructuur voor de lange termijn: logging (ELK), monitoring en Docker, zodat het systeem onderhoudbaar blijft onder SLA.' },
      { q: 'Werk je met vaste layouts of bied je design?', a: 'Dankzij mijn kunstacademie-achtergrond ontwerp ik zelf UX/UI. Ik begrijp compositie en kleurtheorie, waardoor ik interfaces creëer die direct werken zonder extra designer.' },
      { q: 'Hoe ga je om met legacy code?', a: 'Kalm. Ik voer een audit uit, identificeer knelpunten en refactor stap voor stap zonder businessprocessen te hinderen. Mijn doel is modulaire systemen in plaats van "spaghetti code".' },
      { q: 'Wat als er een specifieke technologie nodig is buiten je stack?', a: 'Mijn engineering-basis stelt me in staat nieuwe tools snel op te pakken. Als Go of Python beter is voor een microservice, dan implementeer ik dat volgens de hoogste standaarden.' }
    ],
    pl: [
      { q: 'Ile lat doświadczenia posiadasz?', a: 'Pracę komercyjną rozpocząłem w 2023 roku. Ewoluowałem od tworzenia interfejsów do projektowania architektury złożonych systemów rozproszonych.' },
      { q: 'Czy pracujesz „pod klucz”?', a: 'Tak. Obsługuję pełny cykl: od projektu architektury po development, testy, wdrożenie produkcyjne i dalsze wsparcie techniczne.' },
      { q: 'Jakie są Twoje warunki współpracy?', a: 'Jestem elastyczny: fixed-price, stawki godzinowe lub kontrakty długoterminowe. Dostosuję model współpracy do potrzeb Twojego biznesu.' },
      { q: 'Czy wspierasz projekt po wdrożeniu?', a: 'Nie oddaję "martwego" kodu. Buduję infrastrukturę pod długofalowe życie produktu: logging (ELK), monitoring i konteneryzację, by system był utrzymywalny pod SLA.' },
      { q: 'Pracujesz na gotowych makietach czy oferujesz design?', a: 'Moje wykształcenie artystyczne pozwala mi samodzielnie projektować UX/UI. Rozumiem kompozycję i teorię koloru, tworząc interfejsy, które nie wymagają poprawek designera.' },
      { q: 'Jakie masz podejście do legacy code?', a: 'Spokojne. Przeprowadzam audyt, wykrywam wąskie gardła i refaktoryzuję etapami bez zatrzymywania procesów biznesowych. Zmieniam "spaghetti code" w system modułowy.' },
      { q: 'Co jeśli projekt wymaga technologii spoza Twojego stacku?', a: 'Baza inżynierska pozwala mi szybko wdrażać nowe narzędzia. Jeśli dla biznesu lepszy będzie Go lub Python, zajmę się tym, zachowując najwyższe standardy architektury.' }
    ],
    ru: [
      { q: 'Сколько лет вы занимаетесь разработкой?', a: 'Я начал коммерческую деятельность в 2023 году. За это время прошел путь от разработки интерфейсов до проектирования архитектуры сложных распределенных систем и высоконагруженных инфраструктур.' },
      { q: 'Вы работаете под ключ?', a: 'Да. Я беру на себя полный цикл: от проектирования архитектуры и системного дизайна до разработки, тестирования, деплоя и технической поддержки.' },
      { q: 'Каковы условия сотрудничества?', a: 'Я гибко подхожу к формату: работаю по проектам (fixed price), по часовой ставке или на долгосрочных контрактах. Мы можем обсудить любые условия, удобные для вашего бизнеса.' },
      { q: 'Сможете ли вы поддерживать проект после запуска?', a: 'Да, я не просто сдаю код, а выстраиваю инфраструктуру для долгосрочной жизни продукта. Внедряю логирование (ELK), мониторинг и контейнеризацию, чтобы поддержку мог перехватить любой инженер или я сам в рамках SLA.' },
      { q: 'Вы работаете с готовыми макетами или можете предложить дизайн?', a: 'Мой бэкграунд в художественной школе позволяет мне не только верстать по Figma, но и самостоятельно проектировать UX/UI. Я понимаю композицию и теорию цвета, поэтому создаю интерфейсы, которые удобны пользователю и не требуют правок дизайнера.' },
      { q: 'Как вы относитесь к легаси-коду?', a: 'Спокойно. Я умею проводить аудит, выявлять узкие места и проводить поэтапный рефакторинг без остановки бизнес-процессов. Моя цель — превратить "спагетти-код" в модульную систему, которую легко расширять.' },
      { q: 'Что если мне нужно внедрить специфическую технологию, которой нет в вашем стеке?', a: 'Инженерная база позволяет мне быстро осваивать новые инструменты. Если для бизнеса объективно лучше использовать Go или Python в конкретном микросервисе — я разберусь и внедрю это, соблюдая все стандарты архитектуры.' }
    ],
    uk: [
      { q: 'Скільки років ви займаєтеся розробкою?', a: 'Я почав комерційну діяльність у 2023 році. За цей час пройшов шлях від розробки інтерфейсів до архітектуры складних розподілених систем та високонавантажених інфраструктур.' },
      { q: 'Ви працюєте під ключ?', a: 'Так. Я беру на себе повний цикл: від проектування архітектури до розробки, тестування, запуску в продакшен та технічної підтримки.' },
      { q: 'Які умови оплати та співпраці?', a: 'Я відкритий до діалогу: працюю проектно (fixed price), погодинно або на контрактній основі. Ми можемо обговорити та адаптувати умови під ваші потреби.' },
      { q: 'Чи зможете ви підтримувати проект після запуску?', a: 'Так, я не просто здаю код, а вибудовую інфраструктуру для стабільної роботи продукту. Впроваджую логування (ELK), моніторинг та контейнеризацію для підтримки в рамках SLA.' },
      { q: 'Ви працюєте з готовими макетами чи пропонуєте дизайн?', a: 'Мій художній бекграунд дозволяє мені самостійно проектувати UX/UI. Я розумію композицію та теорію кольору, тому створюю інтерфейси, що не потребують правок дизайнера.' },
      { q: 'Як ви ставитеся до легасі-коду?', a: 'Спокійно. Я вмію проводити аудит, виявляти вузькі місця та проводити поетапний рефакторинг без зупинки бізнес-процесів. Перетворюю "спагеті-код" на модульну систему.' },
      { q: 'Щո եթե мені потрібно впровадити технологію, якої немає у вашому стеку?', a: 'Інженерна база дозволяє мне швидко опановувати нові інструменти. Якщо для бізнесу краще використати Go або Python — я впроваджу це, дотримуючись стандартів архітектури.' }
    ]
  }
})
