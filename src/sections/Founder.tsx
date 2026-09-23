import { Container, Eyebrow } from '../components/Layout'
import { Reveal } from '../components/Reveal'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { founder, links } from '../content/site'

export function Founder() {
  return (
    <section id="founder" className="border-t border-white/8 py-16 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Who built it</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-paper-50 sm:text-3xl">{founder.name}</h2>
              <p className="mt-1.5 text-sm text-slate-400">{founder.role}</p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                Mechanical Engineering diploma · Computer Science B.E. (lateral entry)
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-slate-400">
                Built PieCAD at the intersection of mechanical engineering and software.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-paper-50 transition-colors hover:border-accent-500 hover:text-accent-300"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-paper-50 transition-colors hover:border-accent-500 hover:text-accent-300"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
