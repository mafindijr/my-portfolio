"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const PROJECTS = [
    {
        title: "Gym Management System",
        description:
            "A full-stack web application for comprehensive gym operations management. This is my final year school project demonstrating modern full-stack development with React, Node.js, Express, and MongoDB.",
        tags: ["React", "TailwindCSS", "Mongodb", "JWT Auth", "Node.js", "Express.js"],
        github: "https://github.com/mafindijr/Gym-Management-System",
        live: "https://nyame-gym.vercel.app/",
        featured: true,
    },
    {
        title: "Event Scheduler Bot",
        description:
            " Telegram Integration, Bot to create, manage, and track events with blockchain-inspired features. Responsive design optimized for all devices. Just Front-End only",
        tags: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/mafindijr/managemyschedulebot",
        live: "https://t.me/Managemyshedulebot",
        featured: true,
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio showcasing previous projects and case studies. Designed with attention to performance and accessibility.",
        tags: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS", "Shadcn Ui"],
        github: "#",
        live: "#",
        featured: true,
    },
    {
        title: "HNG Cohort 13 Stage One Task",
        description:
            "This project is part of the HNG Cohort 13 internship program. It consists of a contact page and an about page, showcasing the skills and learning acquired during the internship. The goal is to facilitate communication and provide information about the intern.",
        tags: ["HTML", "CSS", "Javascript",],
        github: "https://github.com/mafindijr/hng-internship",
        live: "https://mafindijr.github.io/HNG-internship-stage-1-task/",
    },
    {
        title: "Color Guessing Game",
        description:
            "Web Game to guess RGB values based on displayed colors.",
        tags: ["HTML", "CSS", "javascript"],
        github: "https://github.com/mafindijr/color-guess-game",
        live: "https://abdul-color-guess-game.netlify.app/",
    },
    {
        title: "Design a Responsive Landing Page and Dashboard",
        description:
            "Reusable component library built with React and TypeScript. Fully documented with Storybook for team collaboration.",
        tags: ["HTML", "Javascript", "TailwindCss"],
        github: "https://github.com/mafindijr/Tcomponent",
        live: "https://tcomponent.vercel.app/",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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

export function Projects() {
    const featuredProjects = PROJECTS.filter((p) => p.featured)
    const otherProjects = PROJECTS.filter((p) => !p.featured)

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground">A selection of my recent work in frontend development and Web3</p>
                </motion.div>

                {/* Featured Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-6 mb-16"
                >
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} featured />
                    ))}
                </motion.div>

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold mb-6"
                        >
                            More Projects
                        </motion.h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            {otherProjects.map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    )
}

interface ProjectCardProps {
    project: (typeof PROJECTS)[0]
    featured?: boolean
}

function ProjectCard({ project, featured }: ProjectCardProps) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={`group border border-border rounded-lg overflow-hidden bg-background hover:border-primary/50 transition-colors ${featured ? "md:col-span-1" : ""}`}
        >
            <div className="p-6 space-y-4 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
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
                        {project.tags.map((tag) => (
                            <motion.span
                                key={tag}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent-foreground border border-accent/30"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            Code
                        </a>
                    </Button>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Live
                        </a>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
