import { useEffect, useState } from 'react'
import BootScreen from './components/BootScreen'
import Desktop from './components/Desktop'
import MenuBar from './components/MenuBar'
import PresentationBar from './components/PresentationBar'
import StatusBar from './components/StatusBar'
import { useIsDesktop } from './hooks/useMediaQuery'
import { usePresentation } from './hooks/usePresentation'
import { useWindows } from './hooks/useWindows'

export default function App() {
  const [booted, setBooted] = useState(false)
  const [scanlines, setScanlines] = useState(true)
  const [visual, setVisual] = useState(false) // presentatiemodus: minder tekst, meer beeld
  const wm = useWindows()
  const presentation = usePresentation(wm.openOnly, wm.closeAll)
  const isDesktop = useIsDesktop()

  // De rondleiding starten zet meteen de visuele presentatiemodus aan.
  const startPresentation = () => {
    setVisual(true)
    presentation.start()
  }

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
            onStartPresentation={startPresentation}
            presenting={presentation.active}
            visual={visual}
            onToggleVisual={() => setVisual((v) => !v)}
          />
          <Desktop wm={wm} isDesktop={isDesktop} compact={visual} />
          <PresentationBar p={presentation} />
          <StatusBar
            openCount={wm.windows.length}
            seenCount={wm.openedEver.size}
            total={presentation.total}
          />
        </div>
      </div>
    </div>
  )
}
