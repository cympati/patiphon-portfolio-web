import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
