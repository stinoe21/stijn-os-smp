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
      className={[
        'group flex w-20 flex-col items-center gap-1 rounded p-1 text-center outline-none focus-visible:bg-white/10 sm:w-24',
        opened ? 'opacity-90' : '',
      ].join(' ')}
    >
      <span className="relative transition-transform group-hover:-translate-y-0.5 group-active:translate-y-0">
        <PixelIcon icon={app.icon} className="h-12 w-12 drop-shadow-icon sm:h-14 sm:w-14" />
        {opened && (
          <span
            className="absolute -right-1.5 -top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-paper bg-[#2f9e4f] text-[10px] font-bold leading-none text-white shadow-icon"
            aria-label="Bekeken"
            title="Bekeken"
          >
            ✓
          </span>
        )}
      </span>
      <span className="flex min-h-[2.4em] w-full items-start justify-center break-words font-pixel text-[9px] leading-tight text-paper text-shadow-pixel [overflow-wrap:anywhere] sm:text-[10px]">
        {app.fileName}
      </span>
    </button>
  )
}
