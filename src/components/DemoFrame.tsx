import type { ReactNode } from 'react'

type DemoFrameProps = {
  /** Drop a real <video> or <iframe> here once it exists. */
  children?: ReactNode
  label?: string
  className?: string
}

/**
 * A restrained, empty media frame for the real product demo.
 * No fake UI chrome, no invented interface — just a clean slot for a real
 * screen recording, screenshot, or demo video.
 */
export function DemoFrame({ children, label = 'Demo recording coming soon', className = '' }: DemoFrameProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-lg border border-white/10 bg-ink-900 ${className}`.trim()}
    >
      <div className="blueprint-grid aspect-16/10 w-full">
        {children ?? (
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
              {label}
            </span>
          </div>
        )}
      </div>
    </figure>
  )
}
