/* =========================================================================
   EkinAI landing page — i18n dictionary + interactions.
   Default language: Uzbek (uz). Persisted in localStorage as "ekinai-lang".
   ========================================================================= */

const I18N = {
  uz: {
    meta: {
      title: "EkinAI — tuproq ma'lumotlari asosida ekin tavsiya qiluvchi sun'iy intellekt tizimi",
      description: "EkinAI — tuproq sensori, Excel fayl yoki qo'lda kiritilgan ko'rsatkichlarni ishlab chiqilgan sun'iy intellekt modeli yordamida tahlil qilib, tuproqga mos ekin tavsiya qiluvchi mobil ilova. SamDU Sun'iy Intellekt Laboratoriyasi loyihasi."
    },
    nav: { home: "Bosh sahifa", project: "Loyiha", how: "Qanday ishlaydi", app: "Ilova", sensor: "Sensor", ai: "AI", crops: "Ekinlar", contact: "Aloqa" },
    hero: {
      eyebrow: "SamDU sun'iy intellekt laboratoriyasi",
      h1: "Tuproq ma'lumotlari asosida ekin tavsiya qiluvchi sun'iy intellekt mobil ilovasi",
      lede: "Ilova tuproq namunasidagi pH, elektr o'tkazuvchanlik, azot, fosfor, kaliy va boshqa muhim ko'rsatkichlarni sensor orqali aniqlab ularni tahlil qilib, har bir ekin uchun tuproqning moslik darajasini ko'rsatadi. Model to'liq qurilma ichida, internetsiz ishlaydi.",
      ctaPrimary: "Qanday ishlashini ko'rish",
      ctaGhost: "Ilova imkoniyatlari",
      stat1v: "18", stat1l: "tuproq ko'rsatkichi",
      stat2v: "7", stat2l: "ekin turi",
      stat3v: "~93%", stat3l: "test aniqligi",
      stat4v: "Offline", stat4l: "internetsiz ishlaydi",
      floatLive: "Jonli sensor", floatLiveSub: "EC · pH · N · P · K",
      floatScore: "Moslik darajasi", floatScoreSub: "Har bir ekin uchun alohida"
    },
    problem: {
      eyebrow: "Muammo va yechim",
      title: "Tuproq tarkibini o'rganmasdan ekin tanlash fermerlar uchun qimmatga tushishi mumkin",
      pTitle: "Muammo",
      pText: "Tuproqning kimyoviy va fizik xususiyatlarini bilmasdan ekin tanlash hosildorlikning pasayishiga, ortiqcha yoki noto'g'ri o'g'itlashga olib kelishi mumkin. Tuproq tahlili odatda laboratoriya sharoiti va vaqt talab qiladi.",
      sTitle: "Yechim",
      sText: "EkinAI tuproq ko'rsatkichlarini sensordan, fayldan yoki qo'lda yig'ib, sun'iy intellekt modeli yordamida tahlil qiladi va har bir ekin uchun moslik darajasini bir necha soniyada, qurilma ichida hisoblaydi."
    },
    how: {
      eyebrow: "Jarayon", title: "Tizim qanday ishlaydi",
      s1t: "Namuna va joylashuv", s1d: "Tuproq namunasi olinadi, ilova GPS orqali namuna joylashuvini belgilaydi va xaritada saqlaydi.",
      s2t: "Ma'lumot kiritish", s2d: "Ko'rsatkichlar uch usulda olinadi: sensordan jonli o'qish, Excel fayldan yuklash yoki qo'lda kiritish.",
      s3t: "Ko'rsatkichlarni tekshirish", s3d: "18 ta tuproq xususiyati (asosiy 5 tasi va qo'shimcha 13 tasi) ko'rib chiqiladi, kerak bo'lsa tahrirlanadi.",
      s4t: "AI tahlili", s4d: "Chuqur o'qitishga asoslangan sun'iy intellekt modeli ma'lumotlarni qurilma ichida, internetga ulanmasdan tahlil qiladi.",
      s5t: "Tavsiya va natija", s5d: "Har bir ekin uchun mustaqil moslik foizi, xususiyat ta'siri va tarix ko'rinishida natija taqdim etiladi."
    },
    features: {
      eyebrow: "Mobil ilova", title: "EkinAI ilovasining imkoniyatlari",
      desc: "ZIP fayl tahlili orqali tasdiqlangan asosiy funksiyalar.",
      bigT: "Sun'iy intellekt tahlili", bigD: "Model har bir ekin uchun mustaqil moslik foizini hisoblaydi — shu sababli bir nechta ekin bir vaqtning o'zida yuqori ball olishi mumkin.",
      bigStat1v: "7", bigStat1l: "ekin", bigStat2v: "18", bigStat2l: "ko'rsatkich",
      f1t: "Jonli sensor o'qish", f1d: "RS485/Modbus tuproq sensori USB-OTG orqali ulanadi va EC, pH, N, P, K qiymatlarini real vaqtda ko'rsatadi.",
      f2t: "Excel fayldan yuklash", f2d: "Sensor eksport qilgan .xls/.xlsx fayldan N, P, K, pH va EC ustunlari avtomatik aniqlanadi.",
      f3t: "Qo'lda kiritish", f3d: "Sensor mavjud bo'lmaganda 5 ta asosiy ko'rsatkichni qo'lda kiritish imkoniyati mavjud.",
      f4t: "Xususiyat ta'siri", f4d: "Etibor mexanizmi qaysi ko'rsatkich natijaga qanchalik ta'sir qilganini grafik ko'rinishida ko'rsatadi.",
      f5t: "GPS va xarita", f5d: "Namuna joylashuvi aniqlanadi va sun'iy yo'ldosh xaritasida ko'rsatiladi.",
      f6t: "Tarix va statistika", f6d: "Saqlangan tahlillar, ularning dinamikasi va ekinlar taqsimoti dashboard ko'rinishida kuzatiladi.",
      f7t: "3 til qo'llab-quvvatlanadi", f7d: "Ilova o'zbek, ingliz va rus tillarida ishlaydi, til istalgan vaqtda almashtiriladi."
    },
    screens: {
      eyebrow: "Interfeys", title: "Ilova ekranlari",
      desc: "Mobil ilova ishlash jarayonining skrinshotlari.",
      c1: "Bosh sahifa", c1s: "Jonli sensor kartasi + tezkor menyu",
      c2: "Jonli sensor", c2s: "EC · pH · N · P · K grid ko'rinishi",
      c3: "Ko'rsatkichlarni tekshirish", c3s: "18 ta xususiyat, avto / qo'lda",
      c4: "Tahlil natijasi", c4s: "Moslik foizi va gauge",
      c5: "Xususiyat ta'siri", c5s: "Explainability grafigi",
      c6: "Dashboard", c6s: "Saqlangan tahlillar va statistika"
    },
    sensor: {
      eyebrow: "Sensor integratsiyasi", title: "Tuproq sensori va mobil ilova integratsiyasi",
      text: "Ilova RS485/Modbus protokoli asosida ishlaydigan tuproq sensori bilan USB-OTG kabeli orqali bevosita bog'lanadi. Android uchun yozilgan native modul qurilmani avtomatik aniqlaydi va ulaydi.",
      specProtoK: "Protokol", specProtoV: "RS485 / Modbus RTU",
      specConnK: "Ulanish", specConnV: "USB-OTG kabel, avtomatik aniqlash",
      specReadK: "O'lchovlar", specReadV: "Namlik, harorat, EC, pH, N, P, K",
      specLiveK: "Yangilanish", specLiveV: "Real vaqtda, barqarorlashtirish algoritmi bilan",
      note: "Eslatma: jonli sensordan o'qish maxsus \"development build\"da ishlaydi va hozircha prototip bosqichida. Ilovaning qolgan qismlari — fayldan yuklash, qo'lda kiritish, tahlil, tarix — standart muhitda to'liq ishlaydi.",
      flow1: "Tuproq namunasi", flow1s: "Dalada olingan namuna",
      flow2: "Tuproq sensori", flow2s: "RS485 / Modbus RTU",
      flow3: "Mobil ilova", flow3s: "USB-OTG orqali qabul qilish",
      flow4: "AI tahlili", flow4s: "Chuqur o'qitish, qurilma ichida",
      flow5: "Ekin tavsiyasi", flow5s: "Moslik foizi bilan"
    },
    ai: {
      eyebrow: "Sun'iy intellekt", title: "Model tuproq ma'lumotlarini qanday tahlil qiladi",
      text: "Tizim markazida e'tibor mexanizmiga asoslangan chuqur o'rganish arxitekturasi yotadi. Model haqiqiy tuproq namunalari asosida o'qitilgan va butunlay qurilma ichida ishlaydi.",
      rowArchK: "Arxitektura", rowArchV: "Chuqur o'qitish",
      rowCatK: "Kategorik xususiyatlar", rowCatV: "Ordinal Encoding",
      rowMissK: "Yo'qolgan qiymatlar", rowMissV: "Extra Trees iterative imputer",
      rowAccK: "Test aniqligi", rowAccV: "~93% — oldin ko'rilmagan namunalarda",
      scoreNote: "Moslik foizi qanday hisoblanadi? Har bir ekin uchun ball mustaqil hisoblanadi: modelning xom chiqishi statistik jihatdan normallashtirilib, sigmoid funksiyasi orqali 0–100% oralig'iga o'giriladi. Shu sababli bir nechta ekin bir vaqtning o'zida yuqori foizga ega bo'lishi mumkin."
    },
    crops: {
      eyebrow: "7 ta ekin", title: "Model tavsiya qiladigan ekinlar",
      text: "Har bir ekin uchun tuproqqa nisbatan afzalliklar qisqacha tavsiflangan."
    },
    lab: {
      eyebrow: "Ilmiy asos", title: "SamDU sun'iy intellekt laboratoriyasi",
      text: "Loyiha Samarqand davlat universiteti sun'iy intellekt laboratoriyasida amaliy tadqiqot va mobil dasturlash tajribasi kesishmasida ishlab chiqilgan.",
      v1t: "Haqiqiy namunalar", v1d: "Model haqiqiy tuproq namunalari asosida o'qitilgan va sinovdan o'tkazilgan.",
      v2t: "To'liq offline", v2d: "Tahlil qurilma ichida bajariladi, tuproq ma'lumotlari serverga yuborilmaydi.",
      v3t: "Tekshirilishi mumkin", v3d: "Model va oldindan ishlov berish usullari ilmiy maqolada hujjatlashtirilgan."
    },
    tech: {
      eyebrow: "Texnologiyalar", title: "Loyihada ishlatilgan texnologiyalar",
      g1: "Mobil ilova", g2: "Sun'iy intellekt", g3: "Sensor integratsiyasi", g4: "Ma'lumot va vizualizatsiya"
    },
    cta: {
      title: "Ushbu loyiha haqiqatdan sizga qiziqmi ?",
      text: "SamDU Sun'iy intellekt laboratoriyasining ushbu tadqiqot loyihasiga qiziqsangiz, loyiha va prototip haqida savollar yoki hamkorlik uchun bog'laning.",
      btn: "Bog'lanish"
    },
    footer: {
      tagline: "Tuproq xususiyatlarini intellektual tahlil qilish asosida ekin tavsiya qiluvchi sun'iy intellektga asoslangan mobil ilova va tuproq sensori integratsiya prototipi.",
      colPageT: "Sahifa",
      colProjT: "Loyiha", colProj1: "Xususiyat ta'siri", colProj2: "Texnologiyalar", colProj3: "Ilmiy asos",
      colAuthT: "Muallif", authorName: "Axatov Abror Askar o'g'li", authorRole: "SamDU Sun'iy Intellekt Laboratoriyasi",
      copyright: "© 2026 EkinAI · SamDU Sun'iy Intellekt Laboratoriyasi",

    },
    crop: {
      Wheat: { name: "Bug'doy", blurb: "Keng diapazonli tuproq sharoitlariga moslashuvchan asosiy don ekini." },
      Corn: { name: "Makkajo'xori", blurb: "Yuqori azot va kaliy talab qiladigan, issiqsevar don ekini." },
      Carrot: { name: "Sabzi", blurb: "Yumshoq, yaxshi drenajlangan, kam tosh aralashgan tuproqda yaxshi rivojlanadi." },
      Bean: { name: "Loviya", blurb: "Azotni o'zlashtiruvchi dukkakli ekin, o'rtacha namlik va neytral pH ni yaxshi ko'radi." },
      Pepper: { name: "Qalampir", blurb: "Issiqlikni va yaxshi drenajni yaxshi ko'radigan sabzavot ekini." },
      Potato: { name: "Kartoshka", blurb: "Yumshoq, gumusga boy, kislotaliroq tuproqda yaxshi hosil beradi." },
      Cotton: { name: "Paxta", blurb: "Chuqur ildiz tizimiga ega, o'rtacha sho'rlanishga chidamli issiqsevar ekin." }
    }
  },

  en: {
    meta: {
      title: "EkinAI — AI-powered crop recommendation from soil data",
      description: "EkinAI is a mobile app that recommends the best-matching crop from soil sensor, file, or manually entered data using an on-device TabNet AI model. A SamDU Artificial Intelligence Laboratory project."
    },
    nav: { home: "Home", project: "Project", how: "How it works", app: "App", sensor: "Sensor", ai: "AI", crops: "Crops", contact: "Contact" },
    hero: {
      eyebrow: "SamDU Artificial Intelligence Laboratory",
      h1: "An AI system that recommends crops from soil data",
      lede: "EkinAI analyzes pH, electrical conductivity, nitrogen, phosphorus, potassium and other soil readings and shows a match score for every crop. The model runs entirely on-device, with no internet connection required.",
      ctaPrimary: "See how it works",
      ctaGhost: "Explore app features",
      stat1v: "18", stat1l: "soil properties",
      stat2v: "7", stat2l: "crop types",
      stat3v: "~93%", stat3l: "test accuracy",
      stat4v: "Offline", stat4l: "runs without internet",
      floatLive: "Live sensor", floatLiveSub: "EC · pH · N · P · K",
      floatScore: "Match score", floatScoreSub: "Calculated per crop"
    },
    problem: {
      eyebrow: "Problem & solution",
      title: "Choosing a crop without knowing the soil can be costly",
      pTitle: "The problem",
      pText: "Choosing a crop without knowing the soil's chemical and physical properties can lower yields and lead to over- or under-fertilizing. Soil testing usually requires a lab and takes time.",
      sTitle: "The solution",
      sText: "EkinAI collects soil readings — from a sensor, a file, or manual entry — analyzes them with an AI model, and calculates a match score for every crop in seconds, entirely on-device."
    },
    how: {
      eyebrow: "Process", title: "How the system works",
      s1t: "Sample & location", s1d: "A soil sample is taken; the app records the sample's GPS location on a map.",
      s2t: "Enter the data", s2d: "Readings come in through three paths: live sensor reading, an Excel file, or manual entry.",
      s3t: "Review the properties", s3d: "18 soil properties (5 core plus 13 additional) are reviewed and can be edited if needed.",
      s4t: "AI analysis", s4d: "A Deep Learning-based model analyzes the data entirely on-device, with no internet connection.",
      s5t: "Recommendation", s5d: "The result shows an independent match score per crop, feature impact, and analysis history."
    },
    features: {
      eyebrow: "Mobile app", title: "What the EkinAI app can do",
      desc: "Core functionality confirmed directly from the app's source code.",
      bigT: "AI-powered analysis", bigD: "The model calculates an independent match score for every crop — so several crops can score high at the same time.",
      bigStat1v: "7", bigStat1l: "crops", bigStat2v: "18", bigStat2l: "properties",
      f1t: "Live sensor reading", f1d: "An RS485/Modbus soil sensor connects over USB-OTG and shows EC, pH, N, P and K values in real time.",
      f2t: "Excel file upload", f2d: "The app automatically detects the N, P, K, pH and EC columns from a sensor-exported .xls/.xlsx file.",
      f3t: "Manual entry", f3d: "When a sensor isn't available, the 5 core readings can be typed in by hand.",
      f4t: "Feature impact", f4d: "Deep Learning's explain() mechanism shows, as a chart, how much each property influenced the result.",
      f5t: "GPS & map", f5d: "The sample location is detected and shown on a satellite map.",
      f6t: "History & statistics", f6d: "Saved analyses, their trends, and crop distribution are tracked on a dashboard.",
      f7t: "3 languages", f7d: "The app works in Uzbek, English and Russian, switchable at any time."
    },
    screens: {
      eyebrow: "Interface", title: "App screens",
      desc: "Real screenshots from the app will be placed in these slots.",
      c1: "Home", c1s: "Live sensor card + quick menu",
      c2: "Live sensor", c2s: "EC · pH · N · P · K grid view",
      c3: "Review properties", c3s: "18 properties, auto / manual",
      c4: "Analysis result", c4s: "Match score and gauge",
      c5: "Feature impact", c5s: "Explainability chart",
      c6: "Dashboard", c6s: "Saved analyses & statistics"
    },
    sensor: {
      eyebrow: "Hardware integration", title: "Soil sensor + mobile app integration",
      text: "The app connects directly to an RS485/Modbus soil sensor over a USB-OTG cable. A native module built for Android detects and connects the device automatically.",
      specProtoK: "Protocol", specProtoV: "RS485 / Modbus RTU",
      specConnK: "Connection", specConnV: "USB-OTG cable, auto-detected",
      specReadK: "Readings", specReadV: "Moisture, temperature, EC, pH, N, P, K",
      specLiveK: "Update rate", specLiveV: "Real-time, with a stabilization algorithm",
      note: "Note: live sensor reading only works in a custom \"development build\" and is currently at the prototype stage. Every other part of the app — file upload, manual entry, analysis, history — works fully in the standard environment.",
      flow1: "Soil sample", flow1s: "Taken in the field",
      flow2: "Soil sensor", flow2s: "RS485 / Modbus RTU",
      flow3: "Mobile app", flow3s: "Received over USB-OTG",
      flow4: "AI analysis", flow4s: "TabNet, on-device",
      flow5: "Crop recommendation", flow5s: "With a match score"
    },
    ai: {
      eyebrow: "Artificial intelligence", title: "How the model analyzes soil data",
      text: "At the core of the system is  a deep learning architecture built around an attention mechanism. The model was trained on real soil sample data and runs entirely on-device.",
      rowArchK: "Architecture", rowArchV: "Attention-based deep learning",
      rowCatK: "Categorical features", rowCatV: "Ordinal Encoding",
      rowMissK: "Missing values", rowMissV: "Extra Trees Iterative Imputer",
      rowAccK: "Test accuracy", rowAccV: "~93% — on previously unseen samples",
      scoreNote: "How is the match score calculated? Each crop's score is computed independently: the model's raw output is statistically normalized and mapped to a 0–100% range through a sigmoid function. That's why several crops can score high at the same time."
    },
    crops: {
      eyebrow: "7 crops", title: "Crops the model recommends among",
      text: "Each crop's soil preferences are briefly described below."
    },
    lab: {
      eyebrow: "Scientific foundation", title: "SamDU Artificial Intelligence Laboratory",
      text: "The project is being developed at Samarkand State University's Artificial Intelligence Laboratory, at the intersection of applied research and mobile development.",
      v1t: "Real samples", v1d: "The model was trained and validated on real soil sample data.",
      v2t: "Fully offline", v2d: "Analysis runs on-device; soil data is never sent to a server.",
      v3t: "Verifiable methodology", v3d: "The model and preprocessing pipeline are documented in an academic paper."
    },
    tech: {
      eyebrow: "Technology", title: "Technologies used in the project",
      g1: "Mobile app", g2: "Artificial intelligence", g3: "Sensor integration", g4: "Data & visualization"
    },
    cta: {
      title: "Interested in the code or the research paper?",
      text: "EkinAI is an ongoing research project at SamDU's Artificial Intelligence Laboratory. Reach out with questions or collaboration ideas.",
      btn: "Get in touch"
    },
    footer: {
      tagline: "A mobile app and soil-sensor integration prototype that recommends crops through the intelligent analysis of soil properties.",
      colPageT: "Page",
      colProjT: "Project", colProj1: "Feature impact", colProj2: "Technology", colProj3: "Scientific foundation",
      colAuthT: "Author", authorName: "Axatov Abror Askar o'g'li", authorRole: "SamDU Artificial Intelligence Laboratory",
      copyright: "© 2026 EkinAI · SamDU Artificial Intelligence Laboratory",
      disclaimer: "Recommendations on this page are preliminary, AI-model-based results. Consulting an agronomist before a final decision is advisable."
    },
    crop: {
      Wheat: { name: "Wheat", blurb: "A staple cereal crop that adapts to a wide range of soil conditions." },
      Corn: { name: "Corn", blurb: "A heat-loving cereal crop that needs high nitrogen and potassium." },
      Carrot: { name: "Carrot", blurb: "Thrives in loose, well-drained soil with few stones." },
      Bean: { name: "Bean", blurb: "A nitrogen-fixing legume that favors moderate moisture and near-neutral pH." },
      Pepper: { name: "Pepper", blurb: "A vegetable crop that favors warmth and good drainage." },
      Potato: { name: "Potato", blurb: "Yields well in loose, humus-rich, slightly acidic soil." },
      Cotton: { name: "Cotton", blurb: "A deep-rooted, heat-loving crop that tolerates moderate salinity." }
    }
  },

  ru: {
    meta: {
      title: "EkinAI — рекомендация сельхозкультур по данным почвы на основе ИИ",
      description: "EkinAI — мобильное приложение, которое на основе TabNet рекомендует наиболее подходящую культуру по данным почвенного датчика, файла или ручного ввода. Проект Лаборатории ИИ СамГУ."
    },
    nav: { home: "Главная", project: "Проект", how: "Как это работает", app: "Приложение", sensor: "Датчик", ai: "ИИ", crops: "Культуры", contact: "Контакты" },
    hero: {
      eyebrow: "Лаборатория искусственного интеллекта СамГУ",
      h1: "Система ИИ, рекомендующая культуры по данным почвы",
      lede: "EkinAI анализирует pH, электропроводность, азот, фосфор, калий и другие показатели почвы и показывает процент соответствия для каждой культуры. Модель работает полностью на устройстве, без подключения к интернету.",
      ctaPrimary: "Посмотреть, как это работает",
      ctaGhost: "Возможности приложения",
      stat1v: "18", stat1l: "показателей почвы",
      stat2v: "7", stat2l: "видов культур",
      stat3v: "~93%", stat3l: "точность на тесте",
      stat4v: "Офлайн", stat4l: "работает без интернета",
      floatLive: "Датчик в реальном времени", floatLiveSub: "EC · pH · N · P · K",
      floatScore: "Процент соответствия", floatScoreSub: "Рассчитывается для каждой культуры"
    },
    problem: {
      eyebrow: "Проблема и решение",
      title: "Выбор культуры без знания почвы может обойтись дорого",
      pTitle: "Проблема",
      pText: "Выбор культуры без знания химических и физических свойств почвы может снизить урожайность и привести к неправильному внесению удобрений. Анализ почвы обычно требует лаборатории и времени.",
      sTitle: "Решение",
      sText: "EkinAI собирает показатели почвы — с датчика, из файла или вручную — анализирует их с помощью модели ИИ и за несколько секунд рассчитывает процент соответствия для каждой культуры прямо на устройстве."
    },
    how: {
      eyebrow: "Процесс", title: "Как работает система",
      s1t: "Проба и местоположение", s1d: "Берётся проба почвы, приложение определяет её местоположение по GPS и сохраняет на карте.",
      s2t: "Ввод данных", s2d: "Показатели поступают тремя способами: живое чтение с датчика, загрузка Excel-файла или ручной ввод.",
      s3t: "Проверка показателей", s3d: "Рассматриваются 18 показателей почвы (5 основных и 13 дополнительных), при необходимости их можно отредактировать.",
      s4t: "Анализ ИИ", s4d: "Модель на основе TabNet анализирует данные полностью на устройстве, без подключения к интернету.",
      s5t: "Рекомендация", s5d: "Результат показывает независимый процент соответствия по каждой культуре, влияние показателей и историю анализов."
    },
    features: {
      eyebrow: "Мобильное приложение", title: "Возможности приложения EkinAI",
      desc: "Основной функционал, подтверждённый анализом исходного кода приложения.",
      bigT: "Анализ на основе ИИ", bigD: "Модель рассчитывает независимый процент соответствия для каждой культуры — поэтому несколько культур могут одновременно получить высокий балл.",
      bigStat1v: "7", bigStat1l: "культур", bigStat2v: "18", bigStat2l: "показателей",
      f1t: "Живое чтение с датчика", f1d: "Почвенный датчик RS485/Modbus подключается через USB-OTG и показывает значения EC, pH, N, P, K в реальном времени.",
      f2t: "Загрузка Excel-файла", f2d: "Приложение автоматически определяет столбцы N, P, K, pH и EC в файле .xls/.xlsx, экспортированном датчиком.",
      f3t: "Ручной ввод", f3d: "Если датчик недоступен, 5 основных показателей можно ввести вручную.",
      f4t: "Влияние показателей", f4d: "Механизм explain() модели TabNet в виде графика показывает, насколько каждый показатель повлиял на результат.",
      f5t: "GPS и карта", f5d: "Местоположение пробы определяется и отображается на спутниковой карте.",
      f6t: "История и статистика", f6d: "Сохранённые анализы, их динамика и распределение культур отслеживаются на дашборде.",
      f7t: "Поддержка 3 языков", f7d: "Приложение работает на узбекском, английском и русском языках, язык можно переключить в любой момент."
    },
    screens: {
      eyebrow: "Интерфейс", title: "Экраны приложения",
      desc: "В эти места будут добавлены реальные скриншоты приложения.",
      c1: "Главный экран", c1s: "Карточка датчика + быстрое меню",
      c2: "Датчик в реальном времени", c2s: "Сетка EC · pH · N · P · K",
      c3: "Проверка показателей", c3s: "18 показателей, авто / вручную",
      c4: "Результат анализа", c4s: "Процент соответствия и индикатор",
      c5: "Влияние показателей", c5s: "График объяснимости",
      c6: "История", c6s: "Сохранённые анализы и статистика"
    },
    sensor: {
      eyebrow: "Интеграция оборудования", title: "Интеграция почвенного датчика и приложения",
      text: "Приложение напрямую подключается к почвенному датчику по протоколу RS485/Modbus через USB-OTG кабель. Нативный модуль, написанный для Android, автоматически обнаруживает и подключает устройство.",
      specProtoK: "Протокол", specProtoV: "RS485 / Modbus RTU",
      specConnK: "Подключение", specConnV: "USB-OTG кабель, автоопределение",
      specReadK: "Измерения", specReadV: "Влажность, температура, EC, pH, N, P, K",
      specLiveK: "Обновление", specLiveV: "В реальном времени, с алгоритмом стабилизации",
      note: "Примечание: живое чтение с датчика работает только в специальной сборке \"development build\" и пока находится на стадии прототипа. Остальные части приложения — загрузка файла, ручной ввод, анализ, история — полностью работают в стандартной среде.",
      flow1: "Проба почвы", flow1s: "Взята в поле",
      flow2: "Датчик почвы", flow2s: "RS485 / Modbus RTU",
      flow3: "Мобильное приложение", flow3s: "Приём через USB-OTG",
      flow4: "Анализ ИИ", flow4s: "TabNet, на устройстве",
      flow5: "Рекомендация культуры", flow5s: "С процентом соответствия"
    },
    ai: {
      eyebrow: "Искусственный интеллект", title: "Как модель анализирует данные почвы",
      text: "В основе системы лежит TabNet — архитектура глубокого обучения, построенная на механизме внимания. Модель обучена на реальных данных почвенных проб и работает полностью на устройстве.",
      rowArchK: "Архитектура", rowArchV: "TabNet (глубокое обучение на основе внимания)",
      rowCatK: "Категориальные признаки", rowCatV: "Ordinal Encoding",
      rowMissK: "Пропущенные значения", rowMissV: "Extra Trees Iterative Imputer",
      rowAccK: "Точность на тесте", rowAccV: "~93% — на ранее не виденных образцах",
      scoreNote: "Как рассчитывается процент соответствия? Балл каждой культуры вычисляется независимо: исходный выход модели статистически нормализуется и переводится в диапазон 0–100% через сигмоидную функцию. Поэтому несколько культур могут одновременно иметь высокий процент."
    },
    crops: {
      eyebrow: "7 культур", title: "Культуры, которые рекомендует модель",
      text: "Ниже кратко описаны предпочтения каждой культуры к почве."
    },
    lab: {
      eyebrow: "Научная основа", title: "Лаборатория искусственного интеллекта СамГУ",
      text: "Проект разрабатывается в Лаборатории искусственного интеллекта Самаркандского государственного университета, на стыке прикладных исследований и мобильной разработки.",
      v1t: "Реальные пробы", v1d: "Модель обучена и проверена на реальных данных почвенных проб.",
      v2t: "Полностью офлайн", v2d: "Анализ выполняется на устройстве, данные почвы не отправляются на сервер.",
      v3t: "Проверяемая методика", v3d: "Модель и методы предобработки данных описаны в научной статье."
    },
    tech: {
      eyebrow: "Технологии", title: "Технологии, использованные в проекте",
      g1: "Мобильное приложение", g2: "Искусственный интеллект", g3: "Интеграция датчика", g4: "Данные и визуализация"
    },
    cta: {
      title: "Интересует код проекта или научная статья?",
      text: "EkinAI — исследовательский проект, разрабатываемый в Лаборатории ИИ СамГУ. Пишите с вопросами или предложениями о сотрудничестве.",
      btn: "Связаться"
    },
    footer: {
      tagline: "Мобильное приложение и прототип интеграции почвенного датчика, рекомендующие культуры на основе интеллектуального анализа свойств почвы.",
      colPageT: "Страница",
      colProjT: "Проект", colProj1: "Влияние показателей", colProj2: "Технологии", colProj3: "Научная основа",
      colAuthT: "Автор", authorName: "Ахатов Аброр Аскар угли", authorRole: "Лаборатория ИИ СамГУ",
      copyright: "© 2026 EkinAI · Лаборатория искусственного интеллекта СамГУ",
      disclaimer: "Рекомендации на этой странице — предварительные результаты на основе модели ИИ. Перед окончательным решением рекомендуется проконсультироваться с агрономом."
    },
    crop: {
      Wheat: { name: "Пшеница", blurb: "Основная зерновая культура, адаптирующаяся к широкому диапазону почвенных условий." },
      Corn: { name: "Кукуруза", blurb: "Теплолюбивая зерновая культура с высокой потребностью в азоте и калии." },
      Carrot: { name: "Морковь", blurb: "Хорошо растёт на рыхлой, хорошо дренированной почве с малым количеством камней." },
      Bean: { name: "Фасоль", blurb: "Азотфиксирующая бобовая культура, предпочитает умеренную влажность и нейтральный pH." },
      Pepper: { name: "Перец", blurb: "Овощная культура, предпочитающая тепло и хороший дренаж." },
      Potato: { name: "Картофель", blurb: "Хорошо плодоносит на рыхлой, богатой гумусом, слегка кислой почве." },
      Cotton: { name: "Хлопок", blurb: "Теплолюбивая культура с глубокой корневой системой, устойчива к умеренному засолению." }
    }
  }
};

const FLAGS = { uz: "assets/img/flags/uz.png", en: "assets/img/flags/en.png", ru: "assets/img/flags/ru.png" };
const LANG_LABEL = { uz: "O'zbek", en: "English", ru: "Русский" };
const STORAGE_KEY = "ekinai-lang";

function getPath(obj, path) {
  return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.uz;

  document.documentElement.setAttribute("lang", lang === "uz" ? "uz" : lang);
  if (dict.meta) {
    document.title = dict.meta.title;
    const metaDesc = document.getElementById("metaDescription");
    if (metaDesc) metaDesc.setAttribute("content", dict.meta.description);
    const ogTitle = document.getElementById("ogTitle");
    if (ogTitle) ogTitle.setAttribute("content", dict.meta.title);
    const ogDesc = document.getElementById("ogDescription");
    if (ogDesc) ogDesc.setAttribute("content", dict.meta.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = getPath(dict, el.getAttribute("data-i18n"));
    if (val !== undefined) el.textContent = val;
  });

  // Language switcher UI
  document.querySelectorAll(".lang-menu button").forEach((btn) => {
    btn.setAttribute("aria-current", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });
  const currentFlag = document.getElementById("currentLangFlag");
  const currentLabel = document.getElementById("currentLangLabel");
  if (currentFlag) currentFlag.src = FLAGS[lang];
  if (currentLabel) currentLabel.textContent = lang.toUpperCase();

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
}

function initLanguage() {
  let saved = "uz";
  try { saved = localStorage.getItem(STORAGE_KEY) || "uz"; } catch (e) { /* ignore */ }
  if (!I18N[saved]) saved = "uz";
  applyLanguage(saved);

  document.querySelectorAll(".lang-menu button").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
      document.querySelector(".lang-switch").classList.remove("open");
    });
  });
}

function initLangDropdown() {
  const switchEl = document.querySelector(".lang-switch");
  const btn = document.getElementById("langToggleBtn");
  if (!switchEl || !btn) return;
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    switchEl.classList.toggle("open");
  });
  document.addEventListener("click", (e) => {
    if (!switchEl.contains(e.target)) switchEl.classList.remove("open");
  });
}

function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    links.classList.toggle("mobile-open");
  });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    toggle.classList.remove("active");
    links.classList.remove("mobile-open");
  }));
}

function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initLangDropdown();
  initMobileNav();
  initNavbarScroll();
  initReveal();
});
