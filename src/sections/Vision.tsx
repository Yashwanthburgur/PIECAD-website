import { Container, Eyebrow } from '../components/Layout'
import { Reveal } from '../components/Reveal'

export function Vision() {
  return (
    <section id="vision" className="border-t border-white/8 py-16 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Where it goes</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl leading-[1.1] font-semibold tracking-[-0.02em] text-paper-50 sm:text-4xl">
            Mechanical CAD is where we start.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            PieCAD is being built as an autonomous AI engineering agent. Today, it operates real mechanical CAD.
            The long-term goal is to let engineers delegate more of their engineering work to agents.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
