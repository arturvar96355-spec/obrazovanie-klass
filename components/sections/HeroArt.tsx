/** Иллюстрация вместо фото: свет из окна, книги, карандаш. Заменяется фото клиента. */
export function HeroArt() {
  return (
    <svg viewBox="0 0 800 1000" role="img" aria-label="Свет из высокого окна падает на стопку книг и карандаш" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#233f33" /><stop offset="1" stopColor="#14291f" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7E6B8" /><stop offset="1" stopColor="#E9C98A" />
        </linearGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#F7E6B8" stopOpacity="0.55" /><stop offset="1" stopColor="#F7E6B8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#wall)" />
      {/* световые лучи */}
      <polygon points="250,300 550,300 640,860 80,860" fill="url(#beam)" />
      <polygon points="300,300 380,300 330,860 140,860" fill="#F7E6B8" opacity="0.07" />
      {/* арочное окно */}
      <path d="M250 640 V330 A150 150 0 0 1 550 330 V640 Z" fill="url(#glow)" />
      <path d="M250 640 V330 A150 150 0 0 1 550 330 V640 Z" fill="none" stroke="#B08D57" strokeWidth="6" />
      <path d="M400 180 V640 M250 420 H550" stroke="#B08D57" strokeWidth="4" />
      <path d="M262 330 A138 138 0 0 1 400 192" stroke="#B08D57" strokeWidth="2" fill="none" opacity="0.7" />
      {/* подоконник */}
      <rect x="230" y="640" width="340" height="14" fill="#B08D57" />
      {/* стол */}
      <rect x="0" y="800" width="800" height="200" fill="#0f2018" />
      <rect x="0" y="796" width="800" height="8" fill="#B08D57" opacity="0.8" />
      {/* стопка книг */}
      <g>
        <rect x="190" y="740" width="270" height="56" fill="#7A2633" /><rect x="190" y="740" width="270" height="6" fill="#9a3544" />
        <rect x="210" y="690" width="240" height="50" fill="#EFE8D8" /><rect x="210" y="690" width="240" height="5" fill="#fff" opacity="0.5" />
        <rect x="200" y="640" width="250" height="50" fill="#B08D57" />
        <rect x="222" y="598" width="200" height="42" fill="#1E3B2F" stroke="#B08D57" strokeWidth="2" />
        <rect x="190" y="752" width="270" height="3" fill="#B08D57" opacity="0.6" />
      </g>
      {/* открытая книга */}
      <path d="M520 790 L640 770 L760 790 L760 800 L640 782 L520 800 Z" fill="#EFE8D8" />
      <path d="M640 770 V782" stroke="#B08D57" strokeWidth="2" />
      {/* карандаш */}
      <g transform="rotate(-14 560 760)">
        <rect x="470" y="752" width="170" height="12" fill="#B08D57" />
        <polygon points="640,752 670,758 640,764" fill="#EFE8D8" />
        <polygon points="662,756 670,758 662,760" fill="#1A1A17" />
        <rect x="470" y="752" width="22" height="12" fill="#7A2633" />
      </g>
      {/* пылинки света */}
      {[[330, 420], [470, 520], [400, 600], [520, 380], [300, 540]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2 + (i % 3)} fill="#F7E6B8" opacity="0.7" />
      ))}
    </svg>
  );
}
