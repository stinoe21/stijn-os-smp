import { useEffect, useState } from 'react'

const LINES = [
  'STIJN OS v1.0',
  '',
  'Geheugen testen .......... OK',
  'Kaires-kernel laden ...... OK',
  'Module: leerproces ....... OK',
  'Module: reflectie ........ OK',
  'Module: ethiek ........... OK',
  'Module: mediaprof ........ OK',
  '',
  'Welkom, Stijn.',
  'Bureaublad starten...',
]

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= LINES.length) {
      const t = setTimeout(onDone, 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 250 : 170)
    return () => clearTimeout(t)
  }, [count, onDone])

  return (
    <button
      onClick={onDone}
      className="crt-scanlines fixed inset-0 z-[200] flex flex-col items-start justify-center bg-[#08110f] p-6 text-left font-crt text-xl text-[#7ee787] sm:p-16 sm:text-2xl"
      aria-label="Sla intro over en open het bureaublad"
    >
      <div className="mx-auto w-full max-w-2xl">
        {LINES.slice(0, count).map((l, i) => (
          <div key={i} className="leading-snug">
            {l || ' '}
          </div>
        ))}
        {count < LINES.length && <span className="animate-blink">█</span>}
      </div>
      <span className="absolute bottom-4 right-4 font-pixel text-[8px] uppercase text-[#7ee787]/50">
        klik om over te slaan
      </span>
    </button>
  )
}
