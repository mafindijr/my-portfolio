"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, BookOpen, Zap } from "lucide-react"

export function Community() {
  const communities = [
    {
      id: 1,
      name: "Web3 Builders Community",
      role: "Active Member",
      members: "2.5K+",
      description:
        "Contributing to discussions on blockchain development, smart contracts, and decentralized applications.",
      icon: Zap,
      badges: ["Mentor", "Contributor"],
    },
    {
      id: 2,
      name: "Frontend Developers Forum",
      role: "Community Moderator",
      members: "5K+",
      description: "Moderating discussions and helping developers with React, Next.js, and modern frontend practices.",
      icon: Users,
      badges: ["Moderator", "Expert"],
    },
    {
      id: 3,
      name: "Open Source Contributors",
      role: "Maintainer",
      members: "1K+",
      description: "Maintaining and contributing to open-source projects focused on frontend and Web3 technologies.",
      icon: BookOpen,
      badges: ["Maintainer", "Contributor"],
    },
    {
      id: 4,
      name: "Tech Meetups & Workshops",
      role: "Speaker & Organizer",
      members: "500+",
      description: "Speaking at tech meetups and organizing workshops on AI, blockchain, and modern web development.",
      icon: MessageCircle,
      badges: ["Speaker", "Organizer"],
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Community Involvement</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Active member and contributor in various developer communities, sharing knowledge and helping others grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communities.map((community) => {
            const IconComponent = community.icon
            return (
              <Card
                key={community.id}
                className="p-6 bg-card border border-border hover:border-primary/50 transition-colors"
              >
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
                  <div className="flex flex-wrap gap-2">
                    {community.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-primary">{community.role}</span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
