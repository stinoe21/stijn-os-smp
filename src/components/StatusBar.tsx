export default function StatusBar({ openCount }: { openCount: number }) {
  return (
    <div className="z-40 flex items-center justify-between gap-2 border-t-2 border-black/40 bg-gradient-to-b from-bezel to-bezel-dark px-3 py-1 font-pixel text-[8px] uppercase tracking-tight text-ink/70 shadow-[0_-1px_0_rgba(255,255,255,0.3)_inset]">
      <span className="flex items-center gap-1">
        <span className="inline-block h-2 w-2 animate-pulse bg-accent" /> Stijn OS · klaar
      </span>
      <span className="hidden sm:inline">CGI · Ad Smart Media Production</span>
      <span>
        {openCount === 0 ? 'klik een icoon' : `${openCount} venster${openCount === 1 ? '' : 's'} open`}
      </span>
    </div>
  )
}
