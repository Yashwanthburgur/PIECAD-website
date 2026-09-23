import { Container } from '../components/Layout'
import { Reveal } from '../components/Reveal'
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons'
import { links, PRODUCT_NAME } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 py-14 sm:py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-accent-500 font-serif text-sm font-bold text-white">
                  P
                </span>
                <span className="font-serif text-lg font-semibold text-paper-50">{PRODUCT_NAME}</span>
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
                Working prototype · Pre-revenue · Seeking design partners
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-paper-50 transition-colors hover:border-accent-500 hover:text-accent-300"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={links.mailto}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-paper-50 transition-colors hover:border-accent-500 hover:text-accent-300"
              >
                <MailIcon className="h-4 w-4" />
                {links.email}
              </a>
            </div>
          </div>

          <p className="mt-10 border-t border-white/8 pt-6 font-mono text-xs text-slate-400">
            © {year} {PRODUCT_NAME}
          </p>
        </Reveal>
      </Container>
    </footer>
  )
}
