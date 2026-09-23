import { Container } from '../components/Layout'
import { Reveal } from '../components/Reveal'

const stages = ['Idea', 'Plan', 'Build', 'Check', 'Iterate']

/**
 * Frame representing the real system. Deliberately a diagram, not a fake
 * product screenshot. Replace the body with a real capture when available.
 */
export function Prototype() {
  return (
    <section className="border-t border-white/8 py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl leading-[1.12] font-semibold tracking-[-0.02em] text-paper-50 sm:text-[2.75rem]">
            The result is a real engineering model.
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-300">
            Not an image. Not a mesh.
          </p>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-slate-400">
            A real, editable parametric CAD model that can continue through an engineering workflow.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-lg border border-white/12 bg-ink-900">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-3.5 sm:px-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-50">
                PieCAD prototype
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                FreeCAD / OpenCASCADE
              </span>
            </div>

            <div className="hairline-dark grid place-items-center px-5 py-16 sm:px-7 sm:py-24">
              <ol className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5">
                {stages.map((stage, i) => (
                  <li key={stage} className="flex items-center gap-4">
                    <span className="font-mono text-sm uppercase tracking-[0.2em] text-slate-300">{stage}</span>
                    {i < stages.length - 1 && (
                      <span className="font-mono text-sm text-accent-500" aria-hidden="true">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-white/10 px-5 py-3 sm:px-7">
              <p className="font-mono text-[10px] leading-relaxed text-slate-400">
                Diagram of the current system — not a product screenshot.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
