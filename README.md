# EkinAI — landing page

Bu papka **EkinAI** (rasmiy nomi: *Ekin Tavsiya SI Modeli*) mobil ilovasi uchun tayyorlangan, uch tilli (UZ / EN / RU), to'liq responsive landing page saytidir. Sayt `mobappEkinAI.rar` ichidagi mobil ilova loyihasi (React Native / Expo, SamDU Sun'iy Intellekt Laboratoriyasi) tahlili asosida, faqat kodda tasdiqlangan haqiqiy funksiyalar bilan tuzilgan.

Sayt **frontend-only** (backend talab qilinmaydi) va GitHub Pages'da to'g'ridan-to'g'ri ishga tushirishga tayyor.

---

## 1. Papka tuzilishi

```
site/
├── index.html              — asosiy (va yagona) sahifa
├── css/
│   └── styles.css          — barcha uslublar (design token'lar shu yerda)
├── js/
│   └── main.js              — UZ/EN/RU tarjima lug'ati + interaktivlik
├── assets/
│   └── img/
│       ├── brand/           — logo, favicon, fon rasmlar, SamDU bino surati
│       ├── crops/           — 7 ta ekinning haqiqiy fotosurati
│       ├── crop-icons/      — 7 ta ekinning ikonka(shaffof PNG) versiyasi
│       └── flags/           — UZ/EN/RU til bayroqchalari
└── README.md                 — ushbu fayl
```

Barcha rasmlar `mobappEkinAI.rar` ichidagi `app/assets/` papkasidan olingan va veb uchun optimallashtirilgan (siqilgan, o'lchami kichraytirilgan).

---

## 2. GitHub Pages'ga joylashtirish

### Variant A — yangi repository

1. GitHub'da yangi (bo'sh) repository yarating, masalan `ekinai-landing`.
2. Ushbu `site/` papkasidagi **barcha fayllarni** (papka o'zini emas, ichidagi fayllarni) repository'ning root papkasiga joylashtiring.
3. Terminal orqali:
   ```bash
   git init
   git add .
   git commit -m "EkinAI landing page"
   git branch -M main
   git remote add origin https://github.com/<FOYDALANUVCHI_NOMI>/ekinai-landing.git
   git push -u origin main
   ```
4. GitHub'da repository → **Settings → Pages** bo'limiga o'ting.
5. **Source**: "Deploy from a branch" → Branch: `main`, papka: `/ (root)` → **Save**.
6. Bir necha daqiqadan so'ng sayt quyidagi manzilda ochiladi:
   `https://<FOYDALANUVCHI_NOMI>.github.io/ekinai-landing/`

### Variant B — mavjud repository ichida (masalan mobil ilova repo'sining bir qismi sifatida)

`site/` papkasini repository ichiga (masalan `docs/` nomi bilan) joylashtiring va Pages sozlamalarida **Source → Branch: main, papka: /docs** ni tanlang.

> **Muhim:** Fayl va papka nomlari **katta-kichik harflarga sezgir** (case-sensitive) — GitHub Pages Linux serverida ishlaydi. Barcha havolalar shu loyihada kichik harflar bilan yozilgan, o'zgartirmang.

### `.nojekyll`

Ushbu papkada bo'sh `.nojekyll` fayli bor — bu GitHub Pages'ning standart Jekyll qayta ishlashini o'chiradi (kerak emas, chunki sayt toza HTML/CSS/JS). Uni ham repository'ga albatta qo'shing (u nuqta bilan boshlangani uchun ba'zi fayl menejerlarida yashirin bo'lishi mumkin).

---

## 3. Skrinshotlarni almashtirish

Ilovaning haqiqiy skrinshotlari hali loyihada mavjud emas edi, shuning uchun ularning o'rniga aniq nomlangan **placeholder**lar qo'yilgan. Ularni topish uchun `index.html` ichida quyidagi izohlarni qidiring:

```html
<!-- APP SCREENSHOT: HOME -->
<!-- APP SCREENSHOT: SENSOR -->
<!-- APP SCREENSHOT: REVIEW -->
<!-- APP SCREENSHOT: RESULT -->
<!-- APP SCREENSHOT: FEATURE IMPACT -->
<!-- APP SCREENSHOT: HISTORY -->
```

Har bir placeholder blokida (`class="placeholder-phone"`) nom yorlig'i bor: `APP_SCREEN_HOME`, `APP_SCREEN_SENSOR`, `APP_SCREEN_REVIEW`, `APP_SCREEN_RESULT`, `APP_SCREEN_IMPACT`, `APP_SCREEN_HISTORY`.

Almashtirish tartibi:
1. Skrinshot rasmni (masalan `home.png`) `assets/img/screens/` papkasiga qo'ying (papkani o'zingiz yarating).
2. `placeholder-phone` `div`ini butunlay `<img src="assets/img/screens/home.png" alt="...">` bilan almashtiring — CSS'dagi `.phone-screen` yoki shunga o'xshash klassni rasmga moslab ishlating, yoki oddiygina `<img>`ni `border-radius: 26px;` bilan o'rab qo'ying.

Hero bo'limidagi telefon (`.phone-screen`) hozircha ilovaning **haqiqiy splash (kirish) ekrani** asosida qurilgan (`intro-background.jpg` + logo + nom — bu ilovaning `IntroSplashScreen.js` komponentidan olingan haqiqiy dizayn), shuning uchun uni albatta almashtirish shart emas, lekin xohlasangiz shu joyga "Bosh sahifa" skrinshotini ham qo'yishingiz mumkin.

---

## 4. Tilni sozlash

- Standart til: **o'zbekcha** (`uz`).
- Barcha matnlar `js/main.js` faylidagi `I18N` obyektida joylashgan (`uz`, `en`, `ru` kalitlar).
- Yangi matn qo'shish yoki tahrirlash uchun shu obyektni o'zgartiring — `index.html`dagi `data-i18n="bo'lim.kalit"` atributlari avtomatik yangilanadi.
- Tanlangan til `localStorage`da saqlanadi, sahifa qayta yuklanganda ham eslab qoladi.

---

## 5. Domen va meta ma'lumotlarni yangilash

Sayt joylashtirilgandan so'ng `index.html` faylining `<head>` qismida quyidagilarni haqiqiy manzil bilan yangilashni unutmang:

```html
<meta property="og:image" content="assets/img/brand/home-header-bg.jpg">
```

Ixtiyoriy ravishda `og:url` meta tegini ham qo'shishingiz mumkin.

---

## 6. Muhim eslatma (kontent haqida)

Ushbu landing page **faqat** ZIP fayldagi kodda tasdiqlangan funksiyalar asosida yozilgan (jonli sensor, Excel yuklash, qo'lda kiritish, TabNet tahlili, xususiyat ta'siri, GPS/xarita, tarix, 3 til). Test aniqligi (~93%) va model arxitekturasi haqidagi ma'lumotlar ilovaning o'z lokalizatsiya fayllaridan (`about.modelInfoBody`) olingan. Jonli sensor o'qish hozircha faqat maxsus "development build"da ishlaydigani haqidagi eslatma ataylab saqlab qolingan — bu haqiqiy holatni aks ettiradi.

Muallifning shaxsiy telefon raqami (ilova ichida "Ilova haqida" bo'limida mavjud) landing page'ga **qo'shilmadi** — faqat Telegram (`t.me/axatov_a`) va institut nomi qoldirildi. Agar telefon raqamini ham ko'rsatishni xohlasangiz, footer qismidagi "Muallif" blokiga qo'lda qo'shishingiz mumkin.
