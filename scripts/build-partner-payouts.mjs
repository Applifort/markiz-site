import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1600" height="1000" viewBox="0 0 1600 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @font-face {
      font-family: 'Noto Sans';
      src: url('/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf') format('truetype');
      font-weight: 400;
    }
    @font-face {
      font-family: 'Noto Sans';
      src: url('/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf') format('truetype');
      font-weight: 700;
    }
    .sans { font-family: 'Noto Sans', sans-serif; }
  </style>
  <rect width="1600" height="1000" fill="#faf9fc"/>

  <g transform="translate(48,36)">
    <path d="M12 36c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" fill="#e38a3a"/>
    <path d="M36 36c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" fill="#e38a3a"/>
    <path d="M42 16.8L24 36 6 16.8 12 10.2 24 22.8 42 4v12.8z" fill="#e38a3a"/>
    <text class="sans" x="56" y="34" font-size="28" font-weight="700" fill="#09080c">\u043c\u0430\u0440\u043a\u0438\u0437</text>
    <g transform="translate(980,4)">
      <text class="sans" x="0" y="30" font-size="18" fill="#4e4a56">\u041e\u0431\u0437\u043e\u0440</text>
      <text class="sans" x="110" y="30" font-size="18" fill="#4e4a56">\u041a\u043b\u0438\u0435\u043d\u0442\u044b</text>
      <rect x="228" y="6" width="120" height="36" rx="18" fill="rgba(155,126,212,0.16)"/>
      <text class="sans" x="248" y="30" font-size="18" font-weight="700" fill="#7c5cbf">\u0412\u044b\u043f\u043b\u0430\u0442\u044b</text>
    </g>
  </g>

  <g>
    <rect x="48" y="112" width="480" height="148" rx="24" fill="#ffffff" stroke="#ddd9e4"/>
    <text class="sans" x="76" y="156" font-size="16" fill="#76727e">\u0412 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435</text>
    <text class="sans" x="76" y="206" font-size="40" font-weight="700" fill="#09080c">48 200 \u20bd</text>
    <text class="sans" x="76" y="236" font-size="16" fill="#7c5cbf">+18% \u043a \u043f\u0440\u043e\u0448\u043b\u043e\u043c\u0443</text>

    <rect x="560" y="112" width="480" height="148" rx="24" fill="#ffffff" stroke="#ddd9e4"/>
    <text class="sans" x="588" y="156" font-size="16" fill="#76727e">\u0417\u0430 \u043f\u043e\u043b\u0433\u043e\u0434\u0430</text>
    <text class="sans" x="588" y="206" font-size="40" font-weight="700" fill="#09080c">214 600 \u20bd</text>
    <text class="sans" x="588" y="236" font-size="16" fill="#4e4a56">\u0440\u0430\u0441\u0442\u0451\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u0435\u0441\u044f\u0446</text>

    <rect x="1072" y="112" width="480" height="148" rx="24" fill="#ffffff" stroke="#ddd9e4"/>
    <text class="sans" x="1100" y="156" font-size="16" fill="#76727e">\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432</text>
    <text class="sans" x="1100" y="206" font-size="40" font-weight="700" fill="#09080c">11</text>
    <text class="sans" x="1100" y="236" font-size="16" fill="#4e4a56">\u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435</text>
  </g>

  <rect x="48" y="284" width="1504" height="668" rx="28" fill="#ffffff" stroke="#ddd9e4"/>
  <text class="sans" x="84" y="336" font-size="26" font-weight="700" fill="#09080c">\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b</text>
  <text class="sans" x="84" y="368" font-size="16" fill="#76727e">\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f \u0441 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432</text>

  <g font-family="Noto Sans, sans-serif" font-size="14" fill="#76727e">
    <text x="84" y="430">56 \u0442\u044b\u0441</text>
    <text x="84" y="522">42 \u0442\u044b\u0441</text>
    <text x="84" y="614">28 \u0442\u044b\u0441</text>
    <text x="84" y="706">14 \u0442\u044b\u0441</text>
    <text x="84" y="798">0 \u0442\u044b\u0441</text>
  </g>
  <g stroke="#eeeaf2" stroke-width="1">
    <line x1="168" y1="420" x2="1488" y2="420"/>
    <line x1="168" y1="512" x2="1488" y2="512"/>
    <line x1="168" y1="604" x2="1488" y2="604"/>
    <line x1="168" y1="696" x2="1488" y2="696"/>
    <line x1="168" y1="788" x2="1488" y2="788"/>
  </g>

  <defs>
    <linearGradient id="area" x1="0" y1="420" x2="0" y2="788" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#9b7ed4" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#9b7ed4" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <path
    d="M280 696 C 396 683, 396 683, 512 670 C 628 650, 628 650, 744 630 C 860 604, 860 604, 976 578 C 1092 551, 1092 551, 1208 525 C 1324 499, 1324 499, 1440 473 L 1440 788 L 280 788 Z"
    fill="url(#area)"
  />
  <path
    d="M280 696 C 396 683, 396 683, 512 670 C 628 650, 628 650, 744 630 C 860 604, 860 604, 976 578 C 1092 551, 1092 551, 1208 525 C 1324 499, 1324 499, 1440 473"
    stroke="#9b7ed4"
    stroke-width="4"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <g fill="#ffffff" stroke="#9b7ed4" stroke-width="3">
    <circle cx="280" cy="696" r="7"/>
    <circle cx="512" cy="670" r="7"/>
    <circle cx="744" cy="630" r="7"/>
    <circle cx="976" cy="578" r="7"/>
    <circle cx="1208" cy="525" r="7"/>
    <circle cx="1440" cy="473" r="7"/>
  </g>

  <rect x="1328" y="412" width="148" height="40" rx="12" fill="#141318"/>
  <text class="sans" x="1402" y="438" text-anchor="middle" font-size="15" fill="#f2f0f6">48 \u0442\u044b\u0441 \u20bd \u00b7 \u0438\u044e\u043d</text>

  <g class="sans" font-size="16" fill="#76727e" text-anchor="middle">
    <text x="280" y="830">\u042f\u043d\u0432</text>
    <text x="512" y="830">\u0424\u0435\u0432</text>
    <text x="744" y="830">\u041c\u0430\u0440</text>
    <text x="976" y="830">\u0410\u043f\u0440</text>
    <text x="1208" y="830">\u041c\u0430\u0439</text>
    <text x="1440" y="830">\u0418\u044e\u043d</text>
  </g>
</svg>`;

await writeFile('public/screenshots/partner-payouts.svg', svg, 'utf8');
await sharp('public/screenshots/partner-payouts.svg', { density: 144 }).png().toFile('public/screenshots/partner-payouts.png');
console.log('ok');
