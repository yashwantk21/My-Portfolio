import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "others", label: "Others" },
  { id: "contact", label: "Contact" }
]

export function Navbar() {
  const [active, setActive] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMenuOpen(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            break
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.2,
      }
    )

    const elements = sections.map((section) =>
      document.getElementById(section.id)
    )

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-4 right-4 z-50">
      <ul className="hidden md:flex bg-white/5 backdrop-blur-lg shadow-md rounded-full px-6 py-2 border border-white/10 gap-4 text-xs font-semibold text-white">
        {sections.map((section) => (
          <li
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className={`cursor-pointer px-3 py-1 rounded-full transition-all duration-300
              ${
                active === section.id
                  ? "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white shadow-md"
                  : "text-white/70 hover:bg-white/10"
              }`}
          >
            {section.label}
          </li>
        ))}
      </ul>

      <div className="md:hidden bg-white/5 backdrop-blur-lg shadow-md rounded-full p-2 border border-white/10">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden absolute top-14 right-4 bg-white/5 backdrop-blur-lg shadow-md rounded-lg p-4 border border-white/10 text-sm font-semibold text-white flex flex-col gap-3 w-48 z-50">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300
                ${
                  active === section.id
                    ? "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white shadow-md"
                    : "text-white/70 hover:bg-white/10"
                }`}
            >
              {section.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
