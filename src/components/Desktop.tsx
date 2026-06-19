import { useRef } from 'react'
import { APPS } from '../data/apps'
import type { useWindows } from '../hooks/useWindows'
import Clippy from './Clippy'
import Corkboard from './Corkboard'
import DesktopIcon from './DesktopIcon'
import Legend from './Legend'
import Window from './Window'

type Wm = ReturnType<typeof useWindows>

function CenterLogo() {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center opacity-[0.13]">
      <div className="font-crt text-[120px] leading-none text-paper sm:text-[180px]">❋</div>
      <div className="-mt-4 font-pixel text-xl tracking-widest text-paper sm:text-3xl">STIJN OS</div>
    </div>
  )
}

export default function Desktop({
  wm,
  isDesktop,
  compact,
}: {
  wm: Wm
  isDesktop: boolean
  compact: boolean
}) {
  const boundsRef = useRef<HTMLDivElement>(null)
  const topZ = wm.windows.reduce((m, w) => Math.max(m, w.z), 0)

  // Gesprek.mov krijgt op de desktop een eigen plek rechtsonder (los van de grid).
  // Op mobiel blijft 'ie gewoon in de grid meelopen.
  const videoApp = APPS.find((a) => a.id === 'evaluatie')
  const gridApps = APPS.filter((a) => !(isDesktop && a.id === 'evaluatie'))

  return (
    <div
      ref={boundsRef}
      className="crt-vignette relative min-h-0 flex-1 overflow-hidden bg-gradient-to-br from-screen-glow via-screen to-screen-deep"
    >
      <CenterLogo />

      {/* Icoongrid */}
      <div className="relative z-10 flex max-w-[560px] flex-wrap content-start gap-1 p-3 sm:gap-2">
        {gridApps.map((app) => (
          <DesktopIcon
            key={app.id}
            app={app}
            opened={wm.openedEver.has(app.id)}
            onOpen={() => wm.openWindow(app.id)}
          />
        ))}
      </div>

      {/* Gesprek.mov — losse plek rechtsonder op de desktop, net links van de legenda */}
      {isDesktop && videoApp && (
        <div className="absolute bottom-4 right-[260px] z-10">
          <DesktopIcon
            app={videoApp}
            opened={wm.openedEver.has(videoApp.id)}
            onOpen={() => wm.openWindow(videoApp.id)}
          />
        </div>
      )}

      {/* Rechterkolom: prikbord + legenda. Rechtsboven op desktop, in de flow op mobiel. */}
      <div className="relative z-10 mx-auto mt-2 flex w-[230px] flex-col items-center gap-3 px-3 pb-4 md:absolute md:right-4 md:top-4 md:mt-0 md:w-auto md:px-0 md:pb-0">
        <Corkboard onOpenReadme={() => wm.openWindow('readme')} />
        <Legend />
      </div>

      {/* Clippy-assistent (alleen op desktop, linksonder — rechtsonder staat nu Gesprek.mov) */}
      <div className="pointer-events-none absolute bottom-3 left-4 z-10 hidden md:block">
        <Clippy onOpenReadme={() => wm.openWindow('readme')} />
      </div>

      {/* Vensters */}
      {wm.windows.map((w) => {
        const app = APPS.find((a) => a.id === w.id)
        if (!app) return null
        return (
          <Window
            key={w.id}
            app={app}
            x={w.x}
            y={w.y}
            z={w.z}
            active={w.z === topZ}
            isDesktop={isDesktop}
            compact={compact}
            boundsRef={boundsRef}
            onClose={() => wm.closeWindow(w.id)}
            onFocus={() => wm.focusWindow(w.id)}
            onMove={(x, y) => wm.setPosition(w.id, x, y)}
          />
        )
      })}
    </div>
  )
}
