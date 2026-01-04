import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Layout() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-emerald-900/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Nathasha Oshani</h1>
          <ul className="flex gap-8">
            {['home', 'about', 'services', 'skills', 'projects', 'contact'].map(section => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-lg capitalize transition-colors ${
                    activeSection === section
                      ? 'text-emerald-400'
                      : 'text-white hover:text-emerald-400'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
