import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Code } from "lucide-react"

import sih2023 from "@/assets/sih2023.jpg"
import sih2024 from "@/assets/sih2024.jpg"
import ncer from "@/assets/ncer.jpg"
import rotaractLogo from "@/assets/rotaract.png"
import acmLogo from "@/assets/acm.png"
import basketball from "@/assets/basketball.jpg"
import academics from "@/assets/academics.jpg"
import acmletter from "@/assets/acm-letter.jpg"
import rotaractletter from "@/assets/rotaract-letter.jpg"

const achievements = [
  {
    key: "hackathons",
    label: "Hackathons",
    icon: Code,
    color: "from-indigo-600 to-pink-600",
    items: [
      {
        title: "Smart India Hackathon 2023",
        organization: "Government of India",
        description:
          "Built an AI-based Android app to assist mental health analysis and early diagnosis for national-level competition.",
        image: sih2023
      },
      {
        title: "Smart India Hackathon 2024",
        organization: "Government of India",
        description:
          "Solved DeepFake detection and women’s safety with scalable AI in our winning solution under team Code Crafters.",
        image: sih2024,
        certificate: "https://drive.google.com/file/d/10u4GQSXHJ1CuirFn2VxzPmAr1PXOQNF8/view?usp=sharing",
        linkedin: "https://www.linkedin.com/posts/pratham-shewale-000a10256_smartindiahackathon-hackathon-ai-ugcPost-7233866377797746688-KAp_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETEqxYB_-rDxx3RhbyPq4fMI-AHB8iPNEM"
      },
      {
        title: "Codement_24 – ScrapSwap",
        organization: "NCER Pune",
        description:
          "Developed a gamified app for sustainable waste management to promote environmental impact and reward systems.",
        image: ncer,
        certificate: "https://drive.google.com/file/d/10vdZXb_Ip03TXOqXX8gnarTBh1gv25pK/view?usp=sharing",
        linkedin: "https://www.linkedin.com/posts/yashwant-karnawat_codementabr24-firsthackathon-ncer-activity-7184409681140801536-ySro?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETEqxYB_-rDxx3RhbyPq4fMI-AHB8iPNEM"
      }
    ]
  },
  {
    key: "awards",
    label: "Awards",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    items: [
      {
        title: "First Rank – Academics",
        organization: "AI&DS - DYPIEMR",
        description:
          "Secured 1st position in department for S.E and T.E consecutively, maintaining top academic performance.",
        image: academics,
        certificate: "https://drive.google.com/file/d/10uOTwm1h3hHUWV16HAhcYZxATcr4V76P/view?usp=sharing"
      },
      {
        title: "Gold Medal – Basketball",
        organization: "Nakshatra 4.0",
        description:
          "Represented department in inter-college basketball tournament and secured first position.",
        image: basketball,
        certificate: "https://drive.google.com/file/d/10vdZXb_Ip03TXOqXX8gnarTBh1gv25pK/view?usp=sharing"
      }
    ]
  },
  {
    key: "volunteering",
    label: "Volunteering",
    icon: Users,
    color: "from-fuchsia-600 to-purple-600",
    items: [
      {
        title: "Professional Development Director",
        organization: "Rotaract Club of DYPIU",
        description:
          "Led and facilitated technical workshops, resume-building sessions, and peer mentorship programs under Rotaract to empower student development. Fostered a culture of continuous learning, collaboration, and skill enhancement within the club.",
        logo: rotaractLogo,
        letter: rotaractletter
      },
      {
        title: "Community Service Co-ordinator",
        organization: "ACM DYPIEMR",
        description:
          "Organized hands-on coding events, technical quizzes, and community-driven workshops under ACM. Promoted industry mentorship and peer-to-peer learning to build a strong, collaborative tech ecosystem and coordinated in multiple tech events.",
        logo: acmLogo,
        letter: acmletter
      }
    ]
  }
]

export function AchievementsSection() {
  const [activeTab, setActiveTab] = useState("hackathons")

  const currentCategory = achievements.find((cat) => cat.key === activeTab)
  const Icon = currentCategory?.icon || Trophy

  return (
    <section
      id="others"
      className="relative min-h-screen flex flex-col justify-center px-6 py-24 bg-gradient-to-br from-[#0f0f1a] via-[#0d0d18] to-black text-white"
    >
      <div className="absolute top-0 left-0 w-28 h-28 bg-pink-500 opacity-30 blur-2xl rounded-full animate-floating pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-36 h-36 bg-blue-500 opacity-20 blur-3xl rounded-full animate-floating-slow pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-purple-600 opacity-25 blur-3xl rounded-full animate-floating-mid pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient">
              Leadership
            </span>
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Recognition for excellence in academics, leadership, and service
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {achievements.map((cat) => (
            <Button
              key={cat.key}
              variant={activeTab === cat.key ? "default" : "ghost"}
              onClick={() => setActiveTab(cat.key)}
              className={`rounded-full border text-sm px-4 py-1.5 ${
                activeTab === cat.key
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className={`p-2 rounded-xl bg-gradient-to-r ${currentCategory?.color}`}>
            <Icon className="w-5 h-5 text-background" />
          </div>
          <h3 className="text-xl font-semibold">{currentCategory?.label}</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentCategory?.items.map((item, idx) => (
            <Card
              key={idx}
              className="relative p-3.5 rounded-[2rem] bg-white/5 backdrop-blur-lg ring-4 ring-purple-400/20 hover:scale-[1.03] transition-transform duration-500 flex flex-col justify-between min-h-[235px]"
            >
              {item.logo && (
                <div className="absolute top-3 left-3 w-10 h-10 rounded-md overflow-hidden border border-border bg-white p-1">
                  <img
                    src={item.logo}
                    alt={`${item.organization} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div className={`${item.logo ? "pl-10" : ""} space-y-1`}>
                {item.image && (
                  <img
                    src={item.image}
                    className="w-full h-28 object-cover rounded-md"
                    alt={item.title}
                  />
                )}
                <h4 className="font-semibold text-base">{item.title}</h4>
                <Badge variant="secondary" className="text-xs">
                  {item.organization}
                </Badge>
                <p className="text-white/80 leading-snug text-sm">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {item.letter && (
                  <a
                    href={item.letter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-white/10 text-xs rounded-md hover:bg-white/20 transition"
                  >
                    Letter
                  </a>
                )}
                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-white/10 text-xs rounded-md hover:bg-white/20 transition"
                  >
                    Certificate
                  </a>
                )}
                {item.linkedin && (
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-white/10 text-xs rounded-md hover:bg-white/20 transition"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
