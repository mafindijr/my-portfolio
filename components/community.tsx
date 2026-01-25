"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, BookOpen, Zap } from "lucide-react"
import { motion } from "framer-motion"


type Community = {
  id: number
  name: string
  role: string
  members: string
  description: string
  icon: React.ElementType
  badges: string[]
}

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
}



export function Community() {

  const communities: Community[] = [
    {
      id: 1,
      name: "Africa Quack Believers Hackquest Web3 Community",
      role: "Advocate",
      members: "36+",
      description:
        "Contributing to discussions on blockchain development, smart contracts, and decentralized applications, web3 education & articles.",
      icon: Zap,
      badges: ["Mentor", "Contributor"],
    },
    {
      id: 2,
      name: "Sandlip Oasis Community",
      role: "Volunteer Staff",
      members: "400+",
      description: "Frontned mentoring, event management, community engagement etc.",
      icon: Users,
      badges: ["Moderator", "Technician"],
    },
    {
      id: 3,
      name: "Knots Technology Hub",
      role: "Volunteer",
      members: "300+",
      description: "contributing to community growth and event organization.",
      icon: MessageCircle,
      badges: ["Member", "Contributor"],
    },
    {
      id: 5,
      name: "GDG Community Jalingo",
      role: "Active member and volunteer",
      members: "500+",
      description: "Speaking at tech meetups and organizing workshops on AI, blockchain, and modern web development.",
      icon: Users,
      badges: ["Logistics", "volunteer"],
    },
    {
      id: 6,
      name: "Web3 Developers(X)",
      role: "Active Member",
      members: "500+",
      description: "Contributing and sharing resources and growth",
      icon: Users,
      badges: ["developer"],
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 md:py-24 md:px-12 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Community Involvement</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Active member and contributor in various developer communities, sharing knowledge and helping others grow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {communities.map((community: Community) => {
            const IconComponent = community.icon
            return (
              <motion.div key={community.id} variants={cardVariants}>
                <motion.div whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}>
                  <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-all h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{community.name}</h3>
                          <p className="text-sm text-muted-foreground">{community.members} members</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground mb-4">{community.description}</p>

                    <div className="flex items-center justify-between">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.05,
                            },
                          },
                        }}
                        className="flex flex-wrap gap-2"
                      >
                        {community.badges.map((badge) => (
                          <motion.div
                            key={badge}
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: { opacity: 1, scale: 1 },
                            }}
                          >
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                              {badge}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                      <span className="text-sm font-medium text-primary">{community.role}</span>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
