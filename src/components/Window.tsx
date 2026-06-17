import { useRef } from 'react'
import type { PointerEvent as ReactPointerEvent, RefObject } from 'react'
import type { AppItem } from '../types'
import AppContent from './AppContent'
import PixelIcon from './PixelIcon'

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))

export default function Window({
  app,
  x,
  y,
  z,
  active,
  isDesktop,
  boundsRef,
  onClose,
  onFocus,
  onMove,
}: {
  app: AppItem
  x: number
  y: number
  z: number
  active: boolean
  isDesktop: boolean
  boundsRef: RefObject<HTMLDivElement>
  onClose: () => void
  onFocus: () => void
  onMove: (x: number, y: number) => void
}) {
  const grab = useRef<{ ox: number; oy: number } | null>(null)

  function onPointerDown(e: ReactPointerEvent) {
    if (!isDesktop || !boundsRef.current) return
    onFocus()
    const rect = boundsRef.current.getBoundingClientRect()
    grab.current = { ox: e.clientX - rect.left - x, oy: e.clientY - rect.top - y }
    ;(e.currentTarget as Element).setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: ReactPointerEvent) {
    if (!grab.current || !boundsRef.current) return
    const rect = boundsRef.current.getBoundingClientRect()
    const nx = clamp(e.clientX - rect.left - grab.current.ox, 0, rect.width - 80)
    const ny = clamp(e.clientY - rect.top - grab.current.oy, 0, rect.height - 40)
    onMove(nx, ny)
  }

  function onPointerUp(e: ReactPointerEvent) {
    grab.current = null
    ;(e.currentTarget as Element).releasePointerCapture?.(e.pointerId)
  }

  const desktopStyle = isDesktop
    ? { left: x, top: y, zIndex: z, maxHeight: '72vh' }
    : { zIndex: z }

  return (
    <div
      style={desktopStyle}
      onMouseDown={onFocus}
      className={[
        'flex animate-window-in flex-col border-2 border-ink bg-paper shadow-window',
        isDesktop
          ? 'absolute w-[min(500px,88vw)]'
          : 'fixed inset-x-2 bottom-2 top-12',
      ].join(' ')}
    >
      {/* Titelbalk */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className={[
          'flex shrink-0 select-none items-center gap-2 border-b-2 border-ink px-2 py-1.5',
          isDesktop ? 'cursor-move' : '',
          active ? 'bg-gradient-to-b from-retroblue to-[#152744] text-paper' : 'bg-bezel-dark text-ink/70',
        ].join(' ')}
      >
        <PixelIcon icon={app.icon} className="h-4 w-4 shrink-0" />
        <span className="truncate font-pixel text-[10px] tracking-tight">{app.fileName}</span>
        <span className="flex-1" />
        <button
          onClick={onClose}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Venster sluiten"
          className="flex h-5 w-5 items-center justify-center border-2 border-ink bg-bezel text-ink shadow-bevel active:shadow-bevel-in"
        >
          <span className="font-pixel text-[9px] leading-none">✕</span>
        </button>
      </div>

      {/* Inhoud */}
      <div className="window-scroll min-h-0 flex-1 overflow-y-auto bg-paper px-4 py-3">
        <h2 className="font-crt text-4xl leading-none text-ink">{app.title}</h2>
        <div className="mt-3">
          <AppContent app={app} />
        </div>
      </div>
    </div>
  )
}
