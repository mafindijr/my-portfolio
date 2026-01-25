"use client"

import { Award, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl">
            Recognition of my expertise and contributions in web development, Gen Ai and blockchain technology
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-6 flex items-center gap-2"
          >
            <Award className="w-5 h-5 text-primary" />
            Certifications
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                  <Card className="hover:border-primary/50 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                      <p className="text-xs text-primary font-semibold">{cert.date}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-6 flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5 text-primary" />
            Key Achievements
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-4"
          >
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}>
                  <Card className="hover:border-primary/50 transition-all h-full">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
