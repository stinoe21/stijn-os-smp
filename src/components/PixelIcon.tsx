import type { IconKey } from '../types'

// Pixel-art app-iconen, volledig in SVG (geen externe assets).
// Elk icoon = een gekleurde tegel met een herkenbaar, chunky glyph.

const TILE: Record<IconKey, string> = {
  readme: '#ef8a2b',
  cto: '#2b2a3a',
  vertaler: '#2f6f6a',
  keynote: '#7a3f6e',
  netwerk: '#2d5fa0',
  spiegel: '#3f7a78',
  risico: '#3a3a44',
  boekhouding: '#1f7a3f',
  update: '#cf6f18',
  being: '#4f8a6b',
  pop: '#b5832e',
  ethiek: '#5b5a7a',
}

const INK = '#1b1710'
const PAPER = '#f6eed9'

function Glyph({ icon }: { icon: IconKey }) {
  switch (icon) {
    case 'readme':
      return (
        <>
          <rect x="9" y="5" width="14" height="22" fill={PAPER} stroke={INK} strokeWidth="1" />
          <rect x="11" y="9" width="10" height="1.6" fill="#8a7a52" />
          <rect x="11" y="13" width="10" height="1.6" fill="#8a7a52" />
          <rect x="11" y="17" width="10" height="1.6" fill="#8a7a52" />
          <rect x="11" y="21" width="6" height="1.6" fill="#8a7a52" />
        </>
      )
    case 'cto':
      return (
        <>
          <rect x="5" y="7" width="22" height="17" fill="#0e2429" stroke={INK} strokeWidth="1" />
          {/* prompt chevron > */}
          <rect x="9" y="12" width="2" height="2" fill="#7ee787" />
          <rect x="11" y="14" width="2" height="2" fill="#7ee787" />
          <rect x="9" y="16" width="2" height="2" fill="#7ee787" />
          {/* cursor _ */}
          <rect x="15" y="17" width="7" height="2" fill="#7ee787" className="animate-blink" />
          <rect x="11" y="25" width="10" height="2" fill={INK} />
        </>
      )
    case 'vertaler':
      // Vertaallamp: gloeilamp = "idee / begrijpbaar maken"
      return (
        <>
          <rect x="11" y="6" width="10" height="9" fill="#f6b13c" stroke={INK} strokeWidth="1" />
          <rect x="10" y="8" width="1" height="5" fill="#f6b13c" />
          <rect x="21" y="8" width="1" height="5" fill="#f6b13c" />
          <rect x="13" y="16" width="6" height="2" fill={INK} />
          <rect x="13" y="19" width="6" height="2" fill="#b3a888" />
          <rect x="14" y="22" width="4" height="2" fill={INK} />
          {/* stralen */}
          <rect x="6" y="9" width="3" height="1.5" fill="#f6b13c" />
          <rect x="23" y="9" width="3" height="1.5" fill="#f6b13c" />
          <rect x="15" y="2" width="2" height="3" fill="#f6b13c" />
        </>
      )
    case 'keynote':
      // Microfoon = spreken / keynote
      return (
        <>
          <rect x="13" y="5" width="6" height="11" rx="3" fill="#d9cfb6" stroke={INK} strokeWidth="1" />
          <rect x="14" y="8" width="4" height="1" fill={INK} opacity="0.5" />
          <rect x="14" y="10" width="4" height="1" fill={INK} opacity="0.5" />
          <rect x="14" y="12" width="4" height="1" fill={INK} opacity="0.5" />
          <rect x="15" y="18" width="2" height="5" fill={INK} />
          <rect x="10" y="23" width="12" height="2" fill={INK} />
          <rect x="10" y="15" width="2" height="3" fill={INK} />
          <rect x="20" y="15" width="2" height="3" fill={INK} />
        </>
      )
    case 'netwerk':
      return (
        <>
          <line x1="9" y1="9" x2="23" y2="11" stroke={PAPER} strokeWidth="2" />
          <line x1="23" y1="11" x2="15" y2="23" stroke={PAPER} strokeWidth="2" />
          <line x1="9" y1="9" x2="15" y2="23" stroke={PAPER} strokeWidth="2" />
          <circle cx="9" cy="9" r="3.5" fill="#f6b13c" stroke={INK} strokeWidth="1" />
          <circle cx="23" cy="11" r="3.5" fill={PAPER} stroke={INK} strokeWidth="1" />
          <circle cx="15" cy="23" r="3.5" fill={PAPER} stroke={INK} strokeWidth="1" />
        </>
      )
    case 'spiegel':
      return (
        <>
          <circle cx="16" cy="13" r="9" fill="#bcd2d6" stroke={INK} strokeWidth="1.5" />
          <rect x="11" y="9" width="3" height="6" fill={PAPER} opacity="0.7" transform="rotate(35 12 12)" />
          <rect x="15" y="22" width="2" height="7" fill="#7a5a3a" stroke={INK} strokeWidth="0.75" />
        </>
      )
    case 'risico':
      return (
        <>
          <polygon points="16,4 28,27 4,27" fill="#f6b13c" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
          <rect x="15" y="12" width="2" height="8" fill={INK} />
          <rect x="15" y="22" width="2" height="2" fill={INK} />
        </>
      )
    case 'boekhouding':
      return (
        <>
          <rect x="6" y="6" width="20" height="20" fill="#eef6ee" stroke={INK} strokeWidth="1" />
          <rect x="6" y="6" width="20" height="4" fill="#1f7a3f" />
          <line x1="13" y1="10" x2="13" y2="26" stroke="#9bbf9b" strokeWidth="1" />
          <line x1="19" y1="10" x2="19" y2="26" stroke="#9bbf9b" strokeWidth="1" />
          <line x1="6" y1="15" x2="26" y2="15" stroke="#9bbf9b" strokeWidth="1" />
          <line x1="6" y1="20" x2="26" y2="20" stroke="#9bbf9b" strokeWidth="1" />
        </>
      )
    case 'update':
      return (
        <>
          <rect x="15" y="5" width="2" height="9" fill={PAPER} />
          <polygon points="16,20 9,12 23,12" fill={PAPER} stroke={INK} strokeWidth="0.75" />
          <rect x="7" y="23" width="18" height="3" fill={PAPER} />
          <rect x="7" y="23" width="2" height="3" fill={PAPER} />
        </>
      )
    case 'being':
      // Groeiend plantje = terug naar de essentie / groei
      return (
        <>
          <rect x="15" y="14" width="2" height="12" fill="#2f5d44" />
          <path d="M16 17 C 9 16, 7 9, 14 9 C 15 13, 16 15, 16 17 Z" fill="#7ec98f" stroke={INK} strokeWidth="1" />
          <path d="M16 14 C 23 13, 25 6, 18 6 C 17 10, 16 12, 16 14 Z" fill="#a6e0b3" stroke={INK} strokeWidth="1" />
          <rect x="11" y="26" width="10" height="2" fill={INK} opacity="0.5" />
        </>
      )
    case 'pop':
      // Plan/checklist-document
      return (
        <>
          <rect x="8" y="5" width="16" height="22" fill={PAPER} stroke={INK} strokeWidth="1" />
          <rect x="11" y="9" width="3" height="3" fill="#4f8a6b" stroke={INK} strokeWidth="0.5" />
          <rect x="16" y="10" width="6" height="1.6" fill="#8a7a52" />
          <rect x="11" y="15" width="3" height="3" fill="#4f8a6b" stroke={INK} strokeWidth="0.5" />
          <rect x="16" y="16" width="6" height="1.6" fill="#8a7a52" />
          <rect x="11" y="21" width="3" height="3" fill={INK} opacity="0.25" stroke={INK} strokeWidth="0.5" />
          <rect x="16" y="22" width="6" height="1.6" fill="#8a7a52" />
        </>
      )
    case 'ethiek':
      // Weegschaal = ethische afweging
      return (
        <>
          <rect x="15" y="6" width="2" height="3" fill={PAPER} />
          <rect x="6" y="9" width="20" height="2" fill={PAPER} />
          <rect x="15" y="11" width="2" height="13" fill={PAPER} />
          <rect x="10" y="24" width="12" height="2" fill={PAPER} />
          <line x1="8" y1="11" x2="8" y2="15" stroke={PAPER} strokeWidth="1.5" />
          <path d="M4 15 h8 l-1.5 4 h-5 z" fill="#d9cfb6" stroke={INK} strokeWidth="0.75" />
          <line x1="24" y1="11" x2="24" y2="15" stroke={PAPER} strokeWidth="1.5" />
          <path d="M20 15 h8 l-1.5 4 h-5 z" fill="#d9cfb6" stroke={INK} strokeWidth="0.75" />
        </>
      )
  }
}

export default function PixelIcon({ icon, className = '' }: { icon: IconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      shapeRendering="crispEdges"
      role="img"
      aria-hidden="true"
    >
      {/* Tegel met bevel */}
      <rect x="0.5" y="0.5" width="31" height="31" rx="4" fill={TILE[icon]} stroke={INK} strokeWidth="1" />
      <rect x="2" y="2" width="28" height="2" fill="#ffffff" opacity="0.18" />
      <rect x="2" y="28" width="28" height="2" fill="#000000" opacity="0.22" />
      <Glyph icon={icon} />
    </svg>
  )
}
