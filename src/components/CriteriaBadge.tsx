import { CRITERIA_BY_ID } from '../data/criteria'
import type { CriterionId } from '../types'

const DOT: Record<CriterionId, string> = {
  reflectie: 'bg-accent',
  leerproces: 'bg-retroblue',
  ethiek: 'bg-screen-glow',
  mediaprof: 'bg-[#c0563a]',
}

/** Chip die één beoordelingscriterium toont (gebruikt in vensters). */
export default function CriteriaBadge({ id }: { id: CriterionId }) {
  const c = CRITERIA_BY_ID[id]
  return (
    <span className="retro-chip" title={c.full}>
      <span className={`inline-block h-2 w-2 ${DOT[id]} border border-ink/40`} />
      {c.nr}. {c.label}
    </span>
  )
}
