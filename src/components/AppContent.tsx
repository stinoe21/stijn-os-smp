import type { ReactNode } from 'react'
import { withBase } from '../lib/asset'
import type { AppItem, BewijsItem } from '../types'
import CriteriaBadge from './CriteriaBadge'

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-1 mt-5 flex items-center gap-2">
      <span className="font-pixel text-[10.5px] uppercase tracking-wide text-accent-dark">{children}</span>
      <span className="h-px flex-1 bg-paper-line" />
    </div>
  )
}

function Polaroid({ item, rotate }: { item: BewijsItem; rotate: string }) {
  const cls = `block w-[140px] shrink-0 bg-white p-1.5 pb-5 shadow-window ${rotate}`
  const inner = (
    <>
      <div className="flex h-[96px] items-center justify-center overflow-hidden border border-ink/10 bg-paper-dark">
        {item.image ? (
          <img src={withBase(item.image)} alt={item.label} className="h-full w-full object-cover" />
        ) : (
          <span className="px-2 text-center font-pixel text-[7px] uppercase leading-relaxed text-ink/35">
            foto / screenshot
          </span>
        )}
      </div>
      <div className="mt-1.5 px-0.5 text-center font-sans text-[11px] leading-tight text-ink/70">
        {item.label}
      </div>
    </>
  )
  return item.image ? (
    <a
      href={withBase(item.image)}
      target="_blank"
      rel="noopener noreferrer"
      title={`${item.label} — klik om te vergroten`}
      className={`${cls} transition-transform hover:-translate-y-0.5`}
    >
      {inner}
    </a>
  ) : (
    <figure className={cls} title="Bewijs — voeg een screenshot/foto toe (zie src/data/apps.ts)">
      {inner}
    </figure>
  )
}

function DocCard({ item }: { item: BewijsItem }) {
  const isPdf = /\.pdf($|\?)/i.test(item.href!)
  return (
    <a
      href={withBase(item.href!)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-[200px] shrink-0 items-center gap-2 border-2 border-ink/70 bg-paper-dark px-2.5 py-2 shadow-icon transition-colors hover:bg-white"
    >
      <span className="grid h-9 w-7 shrink-0 place-items-center border border-ink/50 bg-white text-[9px] font-pixel text-accent-dark">
        {isPdf ? 'PDF' : 'WEB'}
      </span>
      <span className="min-w-0">
        <span className="block font-sans text-[13px] font-medium leading-snug text-ink line-clamp-2">
          {item.label}
        </span>
        <span className="font-pixel text-[9px] uppercase text-ink/50 group-hover:text-accent-dark">
          openen ↗
        </span>
      </span>
    </a>
  )
}

const POLAROID_ROTATIONS = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

export default function AppContent({ app }: { app: AppItem }) {
  const isReadme = app.id === 'readme'
  const isChangelog = app.id === 'update'

  return (
    <div className="font-sans text-[15px] leading-relaxed text-ink">
      {/* Teaser + criteria */}
      <p className="font-pixel text-[10.5px] uppercase tracking-wide text-ink/50">{app.teaser}</p>
      {app.criteria.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {app.criteria.map((c) => (
            <CriteriaBadge key={c} id={c} />
          ))}
        </div>
      )}

      {app.intro && <p className="mt-4 text-[15.5px]">{app.intro}</p>}

      {/* Detail */}
      {app.detail.length > 0 && (
        <>
          {isChangelog && <SectionLabel>Geplande updates</SectionLabel>}
          {isChangelog ? (
            <ul className="mt-2 space-y-1.5">
              {app.detail.map((d, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 font-pixel text-[10px] text-accent-dark">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-3 space-y-2.5">
              {app.detail.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </div>
          )}
        </>
      )}

      {/* Vertaaltabel (techniek -> klantwaarde) */}
      {app.vertaaltabel && app.vertaaltabel.length > 0 && (
        <>
          <SectionLabel>Techniek → klantwaarde</SectionLabel>
          <div className="mt-1 divide-y divide-paper-line border border-paper-line bg-paper-dark/40">
            {app.vertaaltabel.map((row, i) => (
              <div key={i} className="grid grid-cols-[auto,1fr] items-start gap-2 px-2 py-1.5 sm:grid-cols-[160px,1fr]">
                <span className="font-pixel text-[11px] text-retroblue">{row.van}</span>
                <span className="text-[14.5px] text-ink/80">→ {row.naar}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Reflectie */}
      <SectionLabel>Reflectie</SectionLabel>
      <div className="mt-1 space-y-2 border-l-4 border-accent bg-accent/10 px-3 py-2 text-[15px] italic">
        {app.reflectie.map((r, i) => (
          <p key={i}>{r}</p>
        ))}
      </div>

      {/* Quote */}
      {app.quote && (
        <blockquote className="mt-5 text-center font-crt text-3xl leading-tight text-retroblue">
          “{app.quote}”
        </blockquote>
      )}

      {/* Bewijs */}
      {app.bewijs.length > 0 && (
        <>
          <SectionLabel>Bewijs</SectionLabel>
          <div className="no-scrollbar -mx-1 mt-2 flex flex-wrap items-center gap-3 px-1 pb-2">
            {app.bewijs.map((b, i) =>
              b.href ? (
                <DocCard key={i} item={b} />
              ) : (
                <Polaroid key={i} item={b} rotate={POLAROID_ROTATIONS[i % POLAROID_ROTATIONS.length]} />
              ),
            )}
          </div>
        </>
      )}

      {/* Vervolgstap / kernontwikkeling */}
      <SectionLabel>{isReadme ? 'Mijn kernontwikkeling in één zin' : 'Volgende stap'}</SectionLabel>
      <p className="mt-1 flex gap-2">
        <span aria-hidden="true">{isReadme ? '🧠' : '→'}</span>
        <span className={isReadme ? 'font-medium' : ''}>{app.vervolgstap}</span>
      </p>
    </div>
  )
}
