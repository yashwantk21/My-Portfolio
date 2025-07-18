import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileDown } from "lucide-react"

import dypiemrLogo from "@/assets/dypiemr.png"
import jspmLogo from "@/assets/jspm.png"
import svvLogo from "@/assets/svv.png"

const education = [
  {
    degree: "B.E. in Artificial Intelligence and Data Science",
    institution: "Dr. D. Y. Patil Institute of Engineering, Management and Research",
    period: "2022 – Present",
    cgpa: "9.42",
    status: "Current",
    logo: dypiemrLogo
  },
  {
    degree: "12th CBSE",
    institution: "JSPM's Blossom Public School",
    period: "2022",
    cgpa: "87.6%",
    status: "Completed",
    logo: jspmLogo
  },
  {
    degree: "10th CBSE",
    institution: "Saraswati Vishwa Vidyalaya National School",
    period: "2020",
    cgpa: "96%",
    status: "Completed",
    logo: svvLogo
  }
]

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full flex flex-col justify-start items-center px-4 py-20 bg-gradient-to-br from-[#0f0f1a] via-[#0d0d18] to-black text-white"
    >
      <div className="absolute top-0 left-0 w-28 h-28 bg-pink-500 opacity-30 blur-2xl rounded-full animate-floating pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-36 h-36 bg-blue-500 opacity-20 blur-3xl rounded-full animate-floating-slow pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-purple-600 opacity-25 blur-3xl rounded-full animate-floating-mid pointer-events-none" />

      <div className="text-center mt-2 mb-6 z-10 relative">
        <h2 className="text-3xl lg:text-4xl font-bold mb-1">
          Education & <span className="text-gradient">Academics</span>
        </h2>
        <p className="text-base text-white/70 max-w-2xl mx-auto">
          Strong academic foundation with consistent excellence
        </p>
      </div>

      <Badge className="bg-purple-700/30 text-white/70 text-xs mb-10 z-10 relative">
        Academic Background
      </Badge>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 z-10">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:ring-2 hover:ring-purple-500/30 transition-all duration-300 h-full flex flex-col gap-4 items-center text-center"
          >
            <div className="flex items-center gap-3 flex-col">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px] shadow-md">
                <div className="bg-white rounded-lg w-full h-full flex items-center justify-center">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center text-center mt-2">
                <Badge
                  variant={edu.status === "Current" ? "default" : "secondary"}
                  className={`${
                    edu.status === "Current"
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs"
                      : "text-xs"
                  }`}
                >
                  {edu.status}
                </Badge>
                <div className="text-lg font-bold text-gradient mt-1">{edu.cgpa}</div>
              </div>
            </div>

            <div className="space-y-1 min-h-[120px] flex flex-col justify-center">
              <h3 className="text-base sm:text-lg font-semibold text-white leading-tight break-words text-balance">
                {edu.institution}
              </h3>
              <div className="w-16 border-t-2 border-pink-500/70 rounded-full mx-auto" />
              <p className="text-sm text-white/70 font-medium">{edu.degree}</p>
              <p className="text-xs text-white/50">{edu.period}</p>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-14 text-sm italic text-white/60 text-center max-w-xl z-10">
        “Kindly find my resume attached here.”
      </p>

      <a
        href="https://drive.google.com/file/d/1_QOClVsWWEpsDSHPhE1ElLXT-XCrRSsn/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300 z-10"
      >
        <FileDown className="w-4 h-4" />
        View Resume
      </a>
    </section>
  )
}
