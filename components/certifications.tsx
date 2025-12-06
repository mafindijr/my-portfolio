"use client"

import { Award, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const CERTIFICATIONS = [
  {
    title: "Certified Ethereum Builder",
    issuer: "HackQuest",
    date: "2025",
    description: "Completed advanced Ethereum development and smart contract certification",
  },
  {
    title: "Certified Ethereum Learner",
    issuer: "HackQuest",
    date: "2024",
    description: "Mastered web3 basics, and learn about ethereum ecosystem",
  },
  {
    title: "Certified Edu Chain Learner",
    issuer: "HackQust",
    date: "2024",
    description: "Intensive training in blockchain development on Educhain ecosystem",
  },
]

const ACHIEVEMENTS = [
  {
    title: "Open Source Contributor",
    description: "Contributed to 5+ open-source projects including major blockchain libraries",
  },
  {
    title: "Technical Speaker",
    description: "Spoke at 5+ tech conferences about Web3 development and frontend optimization",
  },
  {
    title: "Mentor",
    description: "Mentored 20+ junior developers in Web3 and frontend development",
  },
  {
    title: "Web3 Advocate",
    description: "Pushing Blockchain adoption to african community",
  }
]

export function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl">
            Recognition of my expertise and contributions in web development, Gen Ai and blockchain technology
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index} className="hover:border-primary/50 transition">
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                  <p className="text-xs text-primary font-semibold">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((achievement, index) => (
              <Card key={index} className="hover:border-primary/50 transition">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
