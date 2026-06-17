import type { AppItem } from '../types'
import PixelIcon from './PixelIcon'

export default function DesktopIcon({
  app,
  opened,
  onOpen,
}: {
  app: AppItem
  opened: boolean
  onOpen: () => void
}) {
  return (
    <button
      onClick={onOpen}
      title={app.teaser}
      className="group flex w-20 flex-col items-center gap-1 rounded p-1 text-center outline-none focus-visible:bg-white/10 sm:w-24"
    >
      <span className="relative transition-transform group-hover:-translate-y-0.5 group-active:translate-y-0">
        <PixelIcon icon={app.icon} className="h-12 w-12 drop-shadow-icon sm:h-14 sm:w-14" />
        {opened && (
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border border-ink/50 bg-accent-light" />
        )}
      </span>
      <span className="font-pixel text-[9px] leading-tight text-paper text-shadow-pixel sm:text-[10px]">
        {app.fileName}
      </span>
    </button>
  )
}
