import ScrollOrchestrator from './components/ScrollOrchestrator'
import Hero from './components/sections/Hero'
import Philosophy from './components/sections/Philosophy'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

export default function Home() {
  return (
    <main className="relative">
      <ScrollOrchestrator>
        <Hero />
        <Philosophy />
        <Experience />
        <Contact />
      </ScrollOrchestrator>
    </main>
  )
}
