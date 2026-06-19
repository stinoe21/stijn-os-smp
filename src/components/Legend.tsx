// Compacte, vaste legenda op het bureaublad: helpt de beoordelaar snel begrijpen
// dat elk icoon een onderdeel van de ontwikkeling opent. Puur informatief.

const ITEMS: { naam: string; uitleg: string }[] = [
  { naam: 'Bouwlog.exe', uitleg: 'hóe ik leer: door te bouwen' },
  { naam: 'BackToBeing.app', uitleg: 'de motor achter mijn reflectie' },
  { naam: 'Spiegel.sys', uitleg: 'kritische reflectie op wie ik ben' },
  { naam: 'POP.doc', uitleg: 'hoe ik mijn leren stuur' },
  { naam: 'Ethiek.exe', uitleg: 'de ethiek van AI-muziek' },
  { naam: 'Mediaprofessional.app', uitleg: 'ethisch handelen in de praktijk' },
  { naam: 'Gesprek.mov', uitleg: 'video: eindgesprek met mijn mediaprofessional' },
  { naam: 'Update v2.0', uitleg: 'volgende leerdoelen' },
]

export default function Legend() {
  return (
    <div className="w-[230px] border-2 border-ink bg-paper shadow-window transition-shadow hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.35)]">
      <div className="border-b-2 border-ink bg-gradient-to-b from-retroblue to-[#152744] px-2.5 py-1.5">
        <span className="font-pixel text-[11px] tracking-tight text-paper">Legenda</span>
      </div>
      <div className="px-3 py-2.5">
        <p className="mb-2 font-sans text-[12.5px] leading-snug text-ink/75">
          Elk icoon opent een onderdeel van mijn lerend vermogen.
        </p>
        <ul className="space-y-1">
          {ITEMS.map((it) => (
            <li key={it.naam} className="leading-snug">
              <span className="font-pixel text-[9px] text-accent-dark">{it.naam}</span>{' '}
              <span className="font-sans text-[12px] text-ink/75">— {it.uitleg}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2.5 border-t border-paper-line pt-2 font-sans text-[11px] italic leading-snug text-ink/60">
          De meter rechtsboven laat zien welke deelaspecten van Lerend Vermogen terugkomen.
        </p>
      </div>
    </div>
  )
}
