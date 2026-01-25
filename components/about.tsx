"use client"

import { motion } from "framer-motion"

const SKILLS = [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
    { category: "Web3", skills: ["Solidity", "Ethers.js", "Web3.js", "Wagmi", "Smart Contracts"] },
    { category: "Backend", skills: ["Node.js", "PostgreSQL", "Supabase", "REST APIs", "GraphQL"] },
    { category: "Tools", skills: ["Git", "Docker", "Vercel", "GitHub", "VS Code"] },
]

const VOLUNTEER_WORK = [
    {
        organization: "Sandlip Oasis",
        role: "Front-End Developtment Mentor",
        description: "Description of your volunteer work and the impact you made.",
        period: "2024 - onGoing",
    },
    {
        organization: "Another Organization",
        role: "Another Role",
        description: "Details about your contribution and responsibilities.",
        period: "Start Year - End Year",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 150,
            damping: 12,
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

export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <div className="flex justify-center md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
                            whileInView={{ opacity: 1, rotate: -6, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, type: "spring" }}
                            whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.3 } }}
                            className="w-48 h-48 rounded-lg overflow-hidden border-4 border-primary/30 shadow-lg"
                            style={{ transform: "rotate(-6deg)" }}
                        >
                            <a href="/IMG_5546.JPG" target="_blank">
                                <img src="/IMG_5546.JPG" alt="mafindijr" className="w-full h-full object-cover" />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I'm a passionate frontend developer and Web3/Gen Ai enthusiast with over 3 years of experience building modern
                                web applications. My journey started way back in 2021 with a love for creating beautiful, performant user interfaces and
                                evolved to include blockchain development and Ai integrations.
                            </p>
                            <p>
                                I specialize in React and Next.js, with a deep understanding of state management, performance
                                optimization, and modern CSS techniques. On the Web3 side, I've built decentralized applications,
                                integrated smart contracts, and worked extensively with Ethereum ecosystem tools.
                            </p>
                            <p>
                                When I'm not coding, I contribute to open-source projects, write technical articles, and explore
                                emerging technologies in the web and blockchain space.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-16 pt-16 border-t border-border">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-8"
                    >
                        Skills
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {SKILLS.map((skillGroup, groupIndex) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                            >
                                <h3 className="font-semibold text-lg mb-3 text-primary">{skillGroup.category}</h3>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {skillGroup.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            variants={skillVariants}
                                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                            className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 pt-16 border-t border-border">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-8"
                    >
                        Volunteer Work
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {VOLUNTEER_WORK.map((work, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="p-6 rounded-lg border border-border bg-background/50 hover:bg-background/80 transition-colors hover:shadow-lg"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">{work.role}</h3>
                                        <p className="text-primary font-medium text-sm">{work.organization}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground font-medium px-3 py-1 rounded-full bg-primary/10">
                                        {work.period}
                                    </span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{work.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
