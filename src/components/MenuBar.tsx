import { useEffect, useState } from 'react'
import type { CriterionId } from '../types'
import CriteriaMeter from './CriteriaMeter'

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 15000)
    return () => clearInterval(t)
  }, [])
  const time = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })
  return (
    <span className="font-crt text-lg leading-none text-paper">
      <span className="hidden text-paper/70 sm:inline">Amsterdam&nbsp;</span>
      {time}
    </span>
  )
}

export default function MenuBar({
  seen,
  scanlines,
  onToggleScanlines,
}: {
  seen: Set<CriterionId>
  scanlines: boolean
  onToggleScanlines: () => void
}) {
  return (
    <div className="z-40 flex items-center justify-between gap-2 border-b-2 border-black/40 bg-gradient-to-b from-bezel-light to-bezel-dark px-2 py-1 text-ink shadow-[0_1px_0_rgba(255,255,255,0.4)_inset]">
      <div className="flex items-center gap-2">
        <span className="text-accent-dark" aria-hidden="true">
          ❋
        </span>
        <span className="font-pixel text-[11px] tracking-tight">Stijn OS</span>
        <span className="hidden font-pixel text-[9px] text-ink/50 md:inline">· persoonlijke ontwikkeling</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onToggleScanlines}
          className="font-pixel text-[8px] uppercase text-ink/60 hover:text-ink"
          title="CRT-effect aan/uit (voor betere leesbaarheid)"
        >
          CRT: {scanlines ? 'aan' : 'uit'}
        </button>
        <div className="rounded bg-black/70 px-2 py-0.5">
          <CriteriaMeter seen={seen} />
        </div>
        <div className="rounded bg-black/70 px-2 py-0.5">
          <Clock />
        </div>
      </div>
    </div>
  )
}
