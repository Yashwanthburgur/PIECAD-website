import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 ${className}`.trim()}>
      {children}
    </div>
  )
}

type EyebrowProps = {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2.5 ${className}`.trim()}>
      <span className="h-px w-6 bg-accent-500/70" aria-hidden="true" />
      {children}
    </span>
  )
}
