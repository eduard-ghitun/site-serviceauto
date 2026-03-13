const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  stroke: 'currentColor',
  strokeWidth: '1.8',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const icons = {
  maintenance: (
    <svg {...iconProps}>
      <path d="M14.5 4.5a4 4 0 0 0 5 5l-5.25 5.25a2 2 0 0 1-2.83 0l-2.17-2.17a2 2 0 0 0-2.83 0L3 16" />
      <path d="m5 21 2.5-2.5" />
      <path d="m16 8 2-2" />
    </svg>
  ),
  repair: (
    <svg {...iconProps}>
      <path d="M12 6V3" />
      <path d="M16.75 7.25 19 5" />
      <path d="M18 12h3" />
      <path d="m16.75 16.75 2.25 2.25" />
      <path d="M12 18v3" />
      <path d="m7.25 16.75-2.25 2.25" />
      <path d="M6 12H3" />
      <path d="M7.25 7.25 5 5" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  tuning: (
    <svg {...iconProps}>
      <path d="M5 14a7 7 0 1 1 14 0" />
      <path d="M12 14 16.5 9.5" />
      <path d="M4 14h16" />
      <path d="M6 19h12" />
    </svg>
  ),
  diagnostic: (
    <svg {...iconProps}>
      <path d="M9 5h6" />
      <path d="M7 3h10v6H7z" />
      <path d="M8 9v3" />
      <path d="M16 9v3" />
      <path d="M6 12h12l2 4v3H4v-3z" />
      <path d="M8 19v2" />
      <path d="M16 19v2" />
      <path d="M9 16h6" />
    </svg>
  ),
  precision: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 9v3l2 2" />
      <path d="M12 3v2" />
      <path d="M21 12h-2" />
    </svg>
  ),
  shield: (
    <svg {...iconProps}>
      <path d="M12 3 5 6v5c0 4.5 2.8 7.8 7 10 4.2-2.2 7-5.5 7-10V6z" />
      <path d="m9.5 12 1.8 1.8 3.7-3.8" />
    </svg>
  ),
  lightning: (
    <svg {...iconProps}>
      <path d="M13 2 6 13h5l-1 9 8-12h-5l1-8z" />
    </svg>
  ),
  chat: (
    <svg {...iconProps}>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5A8.3 8.3 0 0 1 8 18.8L3 20l1.4-4.4A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 11.5h7" />
      <path d="M8.5 8.5h4.5" />
    </svg>
  ),
  support: (
    <svg {...iconProps}>
      <path d="M4 13a8 8 0 1 1 16 0" />
      <path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" />
      <path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
      <path d="M12 19v2" />
    </svg>
  ),
  location: (
    <svg {...iconProps}>
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  phone: (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.34 2.72a2 2 0 0 1-.57 1.7L7.1 9.91a16 16 0 0 0 7 7l1.77-1.78a2 2 0 0 1 1.7-.57l2.72.34A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  mail: (
    <svg {...iconProps}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  ),
  menu: (
    <svg {...iconProps}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  ),
  close: (
    <svg {...iconProps}>
      <path d="M6 6 18 18" />
      <path d="m6 18 12-12" />
    </svg>
  ),
  arrow: (
    <svg {...iconProps}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  ),
};

export function Icon({ name }) {
  return icons[name] || null;
}
