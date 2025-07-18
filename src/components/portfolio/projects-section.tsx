import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Bot, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "SwasthyaMitra – AI Healthcare Chatbot",
    description:
      "Developed a rule-based chatbot on 1,184 records with 420+ symptoms mapped to 50+ diseases. Achieved 90% match accuracy for structured inputs; integrated GPT-2 to improve coverage by 18%. Built a real-time Gradio UI with response latency under 200ms; tested on 100+ inputs.",
    tech: ["Python", "NLP", "Scikit-learn", "Gradio", "Transformers", "GPT-2"],
    icon: Bot,
    github: "https://github.com/yashwantk21/SwasthyaMitra",
    accuracy: "90%",
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Cricket Score Predictor – DL Regression",
    description:
      "Trained on 18,898 records using features like batsman, bowler, and venue with MinMax scaling. Used Huberloss and Adamoptimizer; achieved MAE of 10.7 and RMSE of 13.5. Integrated ipywidgets UI for interactive predictions; validated on 30% test data",
    tech: ["Python", "Pandas", "TensorFlow", "Keras", "Scikit-learn", "Matplotlib"],
    icon: TrendingUp,
    github: "https://github.com/yashwantk21/IPL-Score-Predictor",
    metrics: "MAE: 10.7, RMSE: 13.5",
    color: "from-pink-500 to-indigo-500",
  }
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 py-20 sm:py-24 bg-gradient-to-br from-[#0f0f1a] via-[#0d0d18] to-black text-white"
    >
      <div className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-pink-500 opacity-30 blur-2xl rounded-full animate-floating pointer-events-none" />
      <div className="absolute top-1/2 right-5 sm:right-10 w-24 h-24 sm:w-36 sm:h-36 bg-blue-500 opacity-20 blur-3xl rounded-full animate-floating-slow pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 sm:left-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-purple-600 opacity-25 blur-3xl rounded-full animate-floating-mid pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Innovative AI solutions that showcase technical expertise and real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 px-2">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="p-5 rounded-[1.8rem] bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl ring-4 ring-purple-400/10 hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">
                        {project.title}
                      </h3>
                      {(project.accuracy || project.metrics) && (
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {project.accuracy || project.metrics}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-white/20 text-white/80 hover:border-white/40 text-xs px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-1.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm hover:scale-105 transition-transform shadow-md">
                        <Github className="w-3.5 h-3.5 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
