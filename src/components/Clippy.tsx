import { useState } from 'react'

// Clippy — de nostalgische paperclip-assistent. Puur voor de sfeer + een paar
// behulpzame tips. Klik op Clippy voor een volgende tip.

const TIPS = [
  'Hoi! Ik ben Clippy. 📎 Het lijkt erop dat je iemands lerend vermogen aan het bekijken bent. Klik op een icoon om te beginnen!',
  'Tip: rechtsboven kleurt de meter in — zo zie je welke deelaspecten van Lerend Vermogen al langs zijn gekomen.',
  'Nieuwsgierig naar de kern? Open BackToBeing.app en POP.doc — daar zit de motor van Stijns reflectie.',
  'Vergeet Ethiek.exe niet — daar gaat het over de ethische impact van AI-muziek (LV 4.3).',
  'Psst… deze hele OS heeft Stijn zélf gebouwd. Dat bouwen-en-reflecteren is precies waar het CGI om draait.',
]

function ClippySvg() {
  return (
    <svg
      viewBox="0 0 60 92"
      className="h-20 w-14 drop-shadow-[3px_3px_0_rgba(0,0,0,0.28)]"
      role="img"
      aria-hidden="true"
    >
      {/* Paperclip-draad: donkere basis + lichtere top voor een metalen look */}
      <g fill="none" strokeLinecap="round">
        <rect x="13" y="22" width="30" height="62" rx="15" stroke="#646a71" strokeWidth="9" />
        <rect x="13" y="22" width="30" height="62" rx="15" stroke="#c6cbd1" strokeWidth="5" />
        <rect x="21" y="8" width="27" height="52" rx="13" stroke="#646a71" strokeWidth="9" />
        <rect x="21" y="8" width="27" height="52" rx="13" stroke="#c6cbd1" strokeWidth="5" />
        <path d="M30 30 v16" stroke="#646a71" strokeWidth="9" />
        <path d="M30 30 v16" stroke="#c6cbd1" strokeWidth="5" />
      </g>
      {/* Ogen + wenkbrauwen */}
      <g>
        <circle cx="26" cy="40" r="7.5" fill="#fff" stroke="#1b1710" strokeWidth="2" />
        <circle cx="42" cy="40" r="7.5" fill="#fff" stroke="#1b1710" strokeWidth="2" />
        <circle cx="28" cy="41" r="3" fill="#1b1710" />
        <circle cx="44" cy="41" r="3" fill="#1b1710" />
        <path d="M19 31 l11 3" stroke="#1b1710" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M49 31 l-11 3" stroke="#1b1710" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default function Clippy({ onOpenReadme }: { onOpenReadme: () => void }) {
  const [tip, setTip] = useState(0)
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    if (open) setTip((t) => (t + 1) % TIPS.length)
    else setOpen(true)
  }

  return (
    <div className="pointer-events-auto flex items-end gap-1">
      <button onClick={handleClick} title="Clippy" aria-label="Clippy-assistent" className="clippy-bob shrink-0">
        <ClippySvg />
      </button>
      {open && (
        <div className="relative mb-1 w-[230px] border-2 border-ink bg-[#fff7cc] p-2.5 shadow-window">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-pixel text-[9px] text-accent-dark">📎 Clippy</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Clippy sluiten"
              className="font-pixel text-[11px] leading-none text-ink/60 hover:text-ink"
            >
              ✕
            </button>
          </div>
          <p className="font-sans text-[12.5px] leading-snug text-ink/85">{TIPS[tip]}</p>
          <div className="mt-2 flex items-center justify-between">
            <button
              onClick={onOpenReadme}
              className="font-pixel text-[8px] uppercase text-accent-dark underline decoration-dotted hover:text-ink"
            >
              ▸ LEESMIJ.txt
            </button>
            <button
              onClick={() => setTip((t) => (t + 1) % TIPS.length)}
              className="font-pixel text-[8px] uppercase text-ink/55 hover:text-ink"
            >
              volgende tip →
            </button>
          </div>
          {/* tipballon-puntje (wijst naar Clippy, links) */}
          <div className="absolute -left-[7px] bottom-5 h-3 w-3 rotate-45 border-b-2 border-l-2 border-ink bg-[#fff7cc]" />
        </div>
      )}
    </div>
  )
}
