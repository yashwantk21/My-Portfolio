import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Github, Linkedin } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function MainSection() {
  const roles = ["AI Engineer", "ML Engineer", "Data Scientist"]
  const [currentText, setCurrentText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentRole[charIndex])
        setCharIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const hold = setTimeout(() => {
        setCurrentText("")
        setCharIndex(0)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 2000)
      return () => clearTimeout(hold)
    }
  }, [charIndex, roleIndex, roles])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-gradient-to-br from-[#0f0f1a] via-[#0d0d18] to-black text-white"
    >
      <div className="absolute top-0 left-0 w-24 h-24 bg-pink-500 opacity-30 blur-2xl rounded-full animate-floating pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-blue-500 opacity-20 blur-3xl rounded-full animate-floating-slow pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-28 h-28 bg-purple-600 opacity-25 blur-3xl rounded-full animate-floating-mid pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-center lg:text-left">
            <div>
              <Badge variant="secondary" className="text-xs bg-white text-black w-fit mx-auto lg:mx-0 px-3 py-1.5 rounded-md">
                <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text font-semibold tracking-wide">
                  {currentText}
                  <span className="animate-pulse text-white">|</span>
                </span>
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient">
                Yashwant Harisingh Karnawat
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              AI & Data Science engineering student skilled in Python, machine learning, DSA, and full-stack development.
              Passionate about impactful AI solutions, creative design, and spiritual growth.
              I enjoy cricket, data crunching, and logical thinking.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start text-xs text-white/70">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <MapPin className="w-4 h-4" />
                Pune, Maharashtra
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-4 h-4" />
                yashwantkarnawat@gmail.com
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-3">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 transition-transform shadow-md text-sm px-5 py-2.5"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1_QOClVsWWEpsDSHPhE1ElLXT-XCrRSsn/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Resume
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 pt-2">
              <a
                href="https://linkedin.com/in/yashwant-karnawat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all backdrop-blur shadow"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://github.com/yashwantk21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all backdrop-blur shadow"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card className="p-3 rounded-[2rem] bg-white/5 backdrop-blur-lg shadow-xl ring-4 ring-purple-400/30 hover:scale-105 transition-transform duration-500">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-[2rem] overflow-hidden ring-4 ring-white/20">
                <img
                  src={profilePhoto}
                  alt="Yashwant Karnawat"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
