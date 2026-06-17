import { CRITERIA } from '../data/criteria'
import type { CriterionId } from '../types'

/**
 * Meter met de beoordeelde deelaspecten van Lerend Vermogen. Een aspect "kleurt
 * in" zodra een venster is geopend dat dat aspect afdekt. Maakt voor de
 * beoordelaar in één oogopslag zichtbaar dat alle aspecten aan bod komen.
 */
export default function CriteriaMeter({ seen }: { seen: Set<CriterionId> }) {
  const total = CRITERIA.length
  const done = CRITERIA.filter((c) => seen.has(c.id)).length

  return (
    <div className="flex items-center gap-2">
      <span className="hidden font-pixel text-[8px] uppercase text-paper/70 sm:inline">
        Criteria {done}/{total}
      </span>
      <div className="flex gap-1" role="group" aria-label={`Beoordelingscriteria: ${done} van ${total} bekeken`}>
        {CRITERIA.map((c) => {
          const active = seen.has(c.id)
          return (
            <span
              key={c.id}
              title={`${c.nr}. ${c.label}${active ? ' — bekeken' : ' — nog niet bekeken'}`}
              className={[
                'flex h-4 w-4 items-center justify-center border text-[8px] font-pixel transition-colors',
                active
                  ? 'border-ink/60 bg-accent text-ink'
                  : 'border-paper/30 bg-black/20 text-paper/40',
              ].join(' ')}
            >
              {active ? '✓' : c.nr}
            </span>
          )
        })}
      </div>
    </div>
  )
}
