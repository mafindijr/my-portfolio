"use client"

import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <p className="text-primary font-semibold text-lg mb-2">Welcome</p>
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight mb-2">I'm Abdulrazak Iliyasu Mafindi</h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-semibold text-balance leading-tight mb-2">
              Frontend Developer <span className="text-primary">&</span> Web3 Builder
            </h2>
            <p className="text-lg text-muted-foreground">
              Crafting beautiful interfaces and decentralized applications that push the boundaries of web development.
            </p>
          </motion.div>


          <motion.div variants={itemVariants} className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">Generative AI Expertise</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm passionate about Generative AI and its intersection with web development. I build intelligent
              applications leveraging LLMs, prompt engineering, and AI-powered features to create next-generation user
              experiences. From RAG systems to fine-tuned models, I integrate cutting-edge AI into Web3 dApps and modern
              web applications.
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base text-muted-foreground leading-relaxed max-w-lg">
            I specialize in modern React, Next.js, blockchain technologies, and AI integration. I create pixel-perfect
            UIs with exceptional user experiences, from traditional web apps to innovative Web3 dApps enhanced with
            intelligent AI features.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-3 pt-4"
          >
            <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Work
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="lg" asChild>
                <a href="/AbdulrazakLatex_resume.pdf" download>
                  <Download className="mr-2" size={18} />
                  Resume
                </a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="lg" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2" size={18} />
                  CV
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block relative h-96 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg border border-border"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-6xl font-bold text-primary/40"
              >
                {"</>"}
              </motion.div>
              <p className="text-muted-foreground mt-4">Web Development & Blockchain</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
