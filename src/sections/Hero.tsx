import { Container } from '../components/Layout'
import { Reveal } from '../components/Reveal'
import { GithubIcon } from '../components/Icons'
import { links, PRODUCT_NAME } from '../content/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-28">
      <div className="hairline-dark pointer-events-none absolute inset-0 h-full w-full opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-500/8 blur-[110px]" />

      <Container className="relative">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded bg-accent-500 font-serif text-lg font-bold text-white">
              P
            </span>
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-paper-50">{PRODUCT_NAME}</span>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="mt-12 max-w-3xl font-serif text-4xl leading-[1.08] font-semibold tracking-[-0.02em] text-paper-50 sm:text-6xl lg:text-7xl">
            An autonomous
            <br />
            engineering agent.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-300 sm:text-2xl">
            PieCAD helps engineers turn an idea into a real, editable engineering design — starting with mechanical
            CAD.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
              Working prototype · Pre-revenue
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
