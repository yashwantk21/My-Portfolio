import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building,
  Calendar,
  Code,
  FileText,
  TrendingUp,
  Database,
  Code2,
  ClipboardList
} from "lucide-react"

const experience = [
  {
    title: "Intern Software Engineer - AI/ML",
    company: "Scalefull Technologies LLP",
    period: "Dec 2024 – Feb 2025",
    type: "Internship",
    description:
      "Worked on end-to-end machine learning pipelines including data preprocessing, EDA, and building classification and regression models using TensorFlow and Keras.",
    achievements: [
      "Built ML pipelines and automation scripts",
      "Conducted EDA and model evaluation",
      "Implemented deep learning architectures",
      "Enhanced debugging and visualization skills"
    ],
    skills: [
      "Machine Learning", "Deep Learning", "Classification", "Regression",
      "EDA", "TensorFlow", "Keras", "Pandas", "Scikit-learn", "Model Evaluation"
    ],
    offerLetter: "https://drive.google.com/file/d/1CDM2Z9_kMB0yI_o0aFH7UDVbw_pI5A0f/view?usp=sharing",
    completionLetter: "https://drive.google.com/file/d/1Py349IdH4Ked_SWtpcld8IJy5JKPoqNq/view?usp=sharing"
  }
]

const certifications = [
  {
    title: "Data Science Bootcamp",
    provider: "Udemy",
    icon: Database,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "ML A-Z with Python & R",
    provider: "Udemy",
    icon: TrendingUp,
    color: "from-pink-500 to-yellow-500"
  },
  {
    title: "Content Marketing Basics",
    provider: "Great Learning",
    icon: ClipboardList,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Java Full Stack Development",
    provider: "Wisdom Sprouts IT Training Hub",
    icon: Code2,
    color: "from-orange-500 to-red-500"
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen flex flex-col justify-center px-6 py-24 bg-gradient-to-br from-[#0f0f1a] via-[#0d0d18] to-black text-white">
      <div className="absolute top-0 left-0 w-28 h-28 bg-pink-500 opacity-30 blur-2xl rounded-full animate-floating pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-36 h-36 bg-blue-500 opacity-20 blur-3xl rounded-full animate-floating-slow pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-purple-600 opacity-25 blur-3xl rounded-full animate-floating-mid pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            My professional journey and continuous learning milestones
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              Professional Experience
            </h3>

            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-5 rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl ring-2 ring-purple-400/10 space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-purple-400/30"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-bold">{exp.title}</h4>
                    <p className="text-primary font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-xs text-white/70 justify-end">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                    <Badge variant="secondary" className="text-xs">{exp.type}</Badge>
                  </div>
                </div>

                <p className="text-white/80 text-sm">{exp.description}</p>

                <div>
                  <h5 className="font-semibold text-sm mb-1">Key Achievements:</h5>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    {exp.achievements.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="border-white/20 text-white/90 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs transition-all hover:bg-white/10"
                    onClick={() => window.open(exp.offerLetter, "_blank")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Offer Letter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs transition-all hover:bg-white/10"
                    onClick={() => window.open(exp.completionLetter, "_blank")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Completion Letter
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <Card
                    key={index}
                    className="p-5 rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-lg flex items-center gap-3 shadow-md ring-1 ring-purple-400/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-purple-400/30"
                  >
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${cert.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{cert.title}</h4>
                      <p className="text-xs text-white/70">{cert.provider}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
