import { Container } from '../components/Layout'
import { Reveal } from '../components/Reveal'

const steps = ['Idea', 'Plan', 'Build', 'Check', 'Iterate']

export function PieCAD() {
  return (
    <section id="product" className="border-t border-white/8 py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl leading-[1.12] font-semibold tracking-[-0.02em] text-paper-50 sm:text-[2.75rem]">
            PieCAD does the work.
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-300">
            You describe what you want. PieCAD plans the design, operates the CAD system, checks the result, and
            iterates.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ol className="mt-16 flex flex-col gap-0 sm:flex-row sm:items-center sm:gap-3">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3 sm:flex-col sm:gap-3">
                <span className="inline-flex items-center rounded border border-white/12 bg-ink-900 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-paper-50">
                  {step}
                </span>
                {i < steps.length - 1 && (
                  <span className="font-mono text-sm text-accent-500" aria-hidden="true">
                    <span className="sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}
