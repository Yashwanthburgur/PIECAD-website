import { Container, Eyebrow } from '../components/Layout'
import { Reveal } from '../components/Reveal'
import { CheckIcon } from '../components/Icons'

const model = ['Editable', 'Parametric', 'Feature-based', 'Dimensions', 'Continued iteration']

export function ShapeVsEngineering() {
  return (
    <section className="border-t border-white/8 py-16 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>The difference</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-[1.1] font-semibold tracking-[-0.02em] text-paper-50 sm:text-4xl">
            AI can generate a shape. PieCAD works with a real CAD model.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="h-full rounded-lg border border-white/10 bg-ink-900 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Shape</p>
              <p className="mt-4 text-lg text-slate-300">
                A finished-looking form with no features, dimensions, or feature history.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="h-full rounded-lg border border-accent-500/30 bg-ink-900 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-500">
                Engineering model
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
                {model.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-300">
                    <CheckIcon className="h-4 w-4 shrink-0 text-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
