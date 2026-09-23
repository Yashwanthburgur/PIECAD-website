import { Container } from '../components/Layout'
import { Eyebrow } from '../components/Layout'
import { Reveal } from '../components/Reveal'
import { ArrowIcon } from '../components/Icons'

const steps = [
  { title: 'Intent', text: 'The engineer describes what needs to be done.' },
  { title: 'Agent', text: 'PieCAD plans the engineering operations required.' },
  { title: 'CAD', text: 'The agent drives the real CAD environment.' },
  { title: 'Verify', text: 'The result is inspected against the model state.' },
  { title: 'Edit / Iterate', text: 'The model is modified and work continues.' },
]

export function AgentLoop() {
  return (
    <section id="product" className="border-t border-white/8 py-16 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>What it does</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl leading-[1.1] font-semibold tracking-[-0.02em] text-paper-50 sm:text-4xl">
            From intent to engineering output.
          </h2>
        </Reveal>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 60} as="li">
              <div className="flex h-full flex-col bg-ink-900 p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-500">
                  <span>0{i + 1}</span>
                  {i < steps.length - 1 && <ArrowIcon className="h-3.5 w-3.5 text-white/20" />}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-paper-50">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
