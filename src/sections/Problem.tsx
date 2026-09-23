import { Container } from '../components/Layout'
import { Reveal } from '../components/Reveal'

export function Problem() {
  return (
    <section className="border-t border-ink-900/10 bg-paper-50 py-20 text-ink-900 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl leading-[1.12] font-semibold tracking-[-0.02em] text-ink-900 sm:text-[2.75rem]">
            Designing in CAD is still manual.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-700 sm:text-xl">
            <p>
              Engineers spend their time creating features, changing dimensions, checking models, and repeating
              the same steps as a design evolves.
            </p>
            <p>AI can help generate shapes. But generating a shape is not the same as doing the engineering work.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
