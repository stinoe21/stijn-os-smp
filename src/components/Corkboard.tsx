/**
 * Prikbord-widget op het bureaublad: een sticky note die de bezoeker op weg
 * helpt en naar LEESMIJ.txt linkt. Het echte bewijs (polaroids) staat per
 * onderwerp in de losse vensters.
 */
export default function Corkboard({ onOpenReadme }: { onOpenReadme: () => void }) {
  return (
    <div className="pointer-events-auto w-[210px] select-none">
      <div className="relative border-4 border-[#6b4f2a] bg-[#b07d43] p-3 shadow-window dotted-bg">
        {/* Sticky note */}
        <div className="relative -rotate-2 bg-[#fff3a8] p-3 shadow-md">
          <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-black/30 bg-[#c0563a] shadow" />
          <p className="font-sans text-[12px] leading-snug text-ink/80">
            Welkom in mijn brein. Elk icoon opent een stuk van mijn lerend vermogen.
          </p>
          <button
            onClick={onOpenReadme}
            className="mt-2 font-pixel text-[9px] uppercase text-accent-dark underline decoration-dotted hover:text-ink"
          >
            ▸ Start bij LEESMIJ.txt
          </button>
        </div>
      </div>
    </div>
  )
}
