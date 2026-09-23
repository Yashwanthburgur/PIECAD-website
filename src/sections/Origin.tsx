import { Container, Eyebrow } from '../components/Layout'
import { Reveal } from '../components/Reveal'

export function Origin() {
  return (
    <section className="border-t border-white/8 py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <Eyebrow>Where it started</Eyebrow>
            <h2 className="mt-5 max-w-sm font-serif text-3xl leading-[1.1] font-semibold tracking-[-0.02em] text-paper-50 sm:text-4xl">
              Built from a real engineering workflow.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 lg:pt-16">
              The idea started from observing a friend&rsquo;s family sheet-metal fabrication business, which has
              been running for over 20 years. The repetitive CAD work we saw there became the first workflow we
              built PieCAD around.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
