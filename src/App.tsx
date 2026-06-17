import { useEffect, useState } from 'react'
import BootScreen from './components/BootScreen'
import Desktop from './components/Desktop'
import MenuBar from './components/MenuBar'
import StatusBar from './components/StatusBar'
import { useIsDesktop } from './hooks/useMediaQuery'
import { useWindows } from './hooks/useWindows'

export default function App() {
  const [booted, setBooted] = useState(false)
  const [scanlines, setScanlines] = useState(true)
  const wm = useWindows()
  const isDesktop = useIsDesktop()

  // Open automatisch LEESMIJ.txt zodra het bureaublad is geladen.
  useEffect(() => {
    if (!booted) return
    const t = setTimeout(() => wm.openWindow('readme'), 350)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booted])

  if (!booted) return <BootScreen onDone={() => setBooted(true)} />

  return (
    <div className="flex min-h-full w-full justify-center bg-desk dotted-bg md:h-full md:p-4 lg:p-6">
      {/* Monitor-behuizing */}
      <div className="flex min-h-[100svh] w-full max-w-[1180px] flex-col rounded-none border-bezel bg-gradient-to-b from-bezel-light to-bezel-dark p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.55)] md:min-h-0 md:h-full md:rounded-[16px] md:p-3 md:ring-2 md:ring-black/30">
        {/* Scherm */}
        <div
          className={[
            'relative flex min-h-0 flex-1 flex-col overflow-hidden border-2 border-black/60 bg-screen-deep md:rounded-[6px]',
            scanlines ? 'crt-scanlines' : '',
          ].join(' ')}
        >
          <MenuBar
            seen={wm.seenCriteria}
            scanlines={scanlines}
            onToggleScanlines={() => setScanlines((s) => !s)}
          />
          <Desktop wm={wm} isDesktop={isDesktop} />
          <StatusBar openCount={wm.windows.length} />
        </div>
      </div>
    </div>
  )
}
