import { Card } from "@/components/ui/card"
import { User, Briefcase, Sparkles, Brain } from "lucide-react"

import pythonLogo from "@/assets/skills/python.png"
import cppLogo from "@/assets/skills/cpp.png"
import htmlLogo from "@/assets/skills/html.png"
import pytorchLogo from "@/assets/skills/pytorch.png"
import tensorflowLogo from "@/assets/skills/tensorflow.png"
import transformersLogo from "@/assets/skills/transformers.png"
import mysqlLogo from "@/assets/skills/mysql.png"
import firebaseLogo from "@/assets/skills/firebase.png"
import githubLogo from "@/assets/skills/github.png"

const bio =
  "I’m an AI & Data Science student passionate about solving real-world problems using technology. I enjoy building ML models, developing web apps, and designing impactful systems."

const whatIDo = [
  "Clean and prepare data for AI models",
  "Build machine learning models to make predictions",
  "Analyze data to find patterns and insights",
  "Test and improve model accuracy"
]

const skills = [
  { name: "Python", logo: pythonLogo },
  { name: "C++", logo: cppLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "PyTorch", logo: pytorchLogo },
  { name: "TensorFlow", logo: tensorflowLogo },
  { name: "Transformers", logo: transformersLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "GitHub", logo: githubLogo }
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 py-24 bg-gradient-to-br from-[#0f0f1a] via-[#0d0d18] to-black text-white"
    >
      <div className="absolute top-0 left-0 w-28 h-28 bg-purple-500 opacity-30 blur-2xl rounded-full animate-floating pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-36 h-36 bg-fuchsia-500 opacity-20 blur-3xl rounded-full animate-floating-slow pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-indigo-600 opacity-25 blur-3xl rounded-full animate-floating-mid pointer-events-none" />

      <div className="text-center mb-10 z-10 relative">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-base text-white/70 max-w-2xl mx-auto">
          Who I am, what I do, and what I bring to the table
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch relative z-10">
        <Card className="p-5 rounded-[1.8rem] bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl ring-4 ring-purple-400/10 hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between h-full">
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-3 text-xl font-bold mb-2">
                <User className="w-5 h-5 text-primary" />
                About Me
              </div>
              <p className="text-white/80 text-sm leading-relaxed">{bio}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-xl font-bold mb-2">
                <Briefcase className="w-5 h-5 text-accent" />
                What I Do
              </div>
              <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                {whatIDo.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 text-xl font-bold mb-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Currently Exploring
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Developing an AI-powered women safety analytics platform with anomaly detection and real-time alerting systems.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5 rounded-[1.8rem] bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl ring-4 ring-purple-400/10 hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between h-full">
          <div className="flex items-center justify-center gap-3 text-xl font-bold mb-5 text-white">
            <Brain className="w-5 h-5 text-pink-400" />
            My Skills
          </div>
          <div className="grid grid-cols-3 gap-5">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-14 h-14 object-contain mb-2"
                />
                <p className="text-sm font-semibold text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
