import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { Problem } from './sections/Problem'
import { PieCAD } from './sections/PieCAD'
import { Prototype } from './sections/Prototype'
import { Vision } from './sections/Vision'
import { Founder } from './sections/Founder'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <PieCAD />
        <Prototype />
        <Vision />
        <Founder />
      </main>
      <Footer />
    </div>
  )
}

export default App
