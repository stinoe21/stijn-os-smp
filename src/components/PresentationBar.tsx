import { APPS } from '../data/apps'
import type { usePresentation } from '../hooks/usePresentation'
import PixelIcon from './PixelIcon'

type Presentation = ReturnType<typeof usePresentation>

export default function PresentationBar({ p }: { p: Presentation }) {
  if (!p.active) return null
  const app = APPS.find((a) => a.id === p.currentId)

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 z-[60] flex justify-center px-3">
      <div className="pointer-events-auto flex w-full max-w-[560px] items-center gap-2 border-2 border-ink bg-paper px-2 py-1.5 shadow-window">
        <button
          onClick={p.prev}
          disabled={p.isFirst}
          className="retro-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Vorige onderdeel"
        >
          ← Vorige
        </button>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-2 text-center">
          {app && <PixelIcon icon={app.icon} className="h-5 w-5 shrink-0" />}
          <span className="min-w-0">
            <span className="block truncate font-pixel text-[10px] text-ink">{app?.fileName}</span>
            <span className="block font-pixel text-[8px] uppercase tracking-tight text-ink/50">
              stap {p.index + 1} / {p.total}
            </span>
          </span>
        </div>

        {p.isLast ? (
          <button onClick={p.stop} className="retro-btn shrink-0 bg-accent text-paper">
            ✓ Afronden
          </button>
        ) : (
          <button onClick={p.next} className="retro-btn shrink-0 bg-accent text-paper" aria-label="Volgende onderdeel">
            Volgende →
          </button>
        )}

        <button
          onClick={p.stop}
          className="ml-1 grid h-7 w-7 shrink-0 place-items-center border-2 border-ink bg-bezel text-ink shadow-bevel active:shadow-bevel-in"
          aria-label="Rondleiding sluiten"
          title="Rondleiding sluiten"
        >
          <span className="font-pixel text-[9px] leading-none">✕</span>
        </button>
      </div>
    </div>
  )
}
