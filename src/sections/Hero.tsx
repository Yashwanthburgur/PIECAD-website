import { Container } from '../components/Layout'
import { Reveal } from '../components/Reveal'
import { DemoFrame } from '../components/DemoFrame'
import { GithubIcon, MailIcon } from '../components/Icons'
import { links } from '../content/site'

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-14 sm:pt-36 sm:pb-20">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="font-serif text-4xl leading-[1.06] font-semibold tracking-[-0.02em] text-paper-50 sm:text-6xl">
              Software has agents.
              <br />
              <span className="text-slate-400">Mechanical engineering</span> still doesn&rsquo;t.
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              PieCAD is an autonomous AI engineering agent that turns engineering intent into real, editable,
              parametric engineering outputs — starting with mechanical CAD.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
              >
                <GithubIcon className="h-4 w-4" />
                View the code
              </a>
              <a
                href={links.mailto}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-paper-50 transition-colors hover:border-accent-500 hover:text-accent-300"
              >
                <MailIcon className="h-4 w-4" />
                Contact
              </a>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400 sm:ml-3">
                Working prototype · FreeCAD / OpenCASCADE
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 sm:mt-14">
          <DemoFrame label="Demo recording coming soon" />
        </Reveal>
      </Container>
    </section>
  )
}
