import { Container } from '../components/Layout'
import { Reveal } from '../components/Reveal'
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons'
import { links } from '../content/site'

export function Founder() {
  return (
    <section id="founder" className="border-t border-white/8 py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl leading-[1.12] font-semibold tracking-[-0.02em] text-paper-50 sm:text-[2.75rem]">
            Built by Yashwanth M.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-slate-300 sm:text-xl">
            <p>
              Yashwanth is a software developer with a Diploma in Mechanical Engineering and a Bachelor&rsquo;s in
              Computer Science & Engineering.
            </p>
            <p className="text-slate-400">
              The idea started from seeing the workflow of a friend&rsquo;s family sheet-metal fabrication
              business, where much of the design work was still handled manually. That became the starting point
              for PieCAD.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={links.githubProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-accent-300"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-accent-300"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={links.mailto}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-accent-300"
            >
              <MailIcon className="h-4 w-4" />
              {links.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
