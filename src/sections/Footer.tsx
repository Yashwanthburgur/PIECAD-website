import { Container } from '../components/Layout'
import { links, PRODUCT_NAME, status } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 py-14">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-paper-50">{PRODUCT_NAME}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-slate-400">{status}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-accent-300"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-accent-300"
            >
              LinkedIn
            </a>
            <a
              href={links.mailto}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-accent-300"
            >
              Email
            </a>
          </div>
        </div>

        <p className="mt-10 font-mono text-xs text-slate-400">
          © {year} {PRODUCT_NAME}
        </p>
      </Container>
    </footer>
  )
}
