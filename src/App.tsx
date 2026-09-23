import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { AgentLoop } from './sections/AgentLoop'
import { ShapeVsEngineering } from './sections/ShapeVsEngineering'
import { Origin } from './sections/Origin'
import { Vision } from './sections/Vision'
import { Founder } from './sections/Founder'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Nav />
      <main>
        <Hero />
        <AgentLoop />
        <ShapeVsEngineering />
        <Origin />
        <Vision />
        <Founder />
      </main>
      <Footer />
    </div>
  )
}

export default App
