
import { useEffect, useState } from 'react'
import { Container } from './Layout'
import { links, PRODUCT_NAME } from '../content/site'
import { GithubIcon } from './Icons'

const navItems = [
  { label: 'What it does', href: '#product' },
  { label: 'Vision', href: '#vision' },
  { label: 'Founder', href: '#founder' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Primary">
          <a href="#top" className="flex items-center gap-2.5" aria-label={`${PRODUCT_NAME} home`}>
            <span className="grid h-8 w-8 place-items-center rounded-md bg-accent-500 font-serif text-lg font-bold text-white">
              P
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight text-paper-50">
              {PRODUCT_NAME}
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-paper-50"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-paper-50 transition-colors hover:border-accent-500 hover:text-accent-300"
            >
              <GithubIcon className="h-4 w-4" />
              View the code
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-paper-50 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 pb-5 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-paper-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-paper-50"
              >
                <GithubIcon className="h-4 w-4" />
                View the code
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
