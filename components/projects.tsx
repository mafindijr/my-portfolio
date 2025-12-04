import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with product filtering, cart management, and Stripe payment integration. Responsive design optimized for all devices.",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "NFT Marketplace",
    description:
      "Decentralized NFT marketplace where users can mint, buy, and sell digital assets. Integrated with IPFS for metadata storage and smart contracts.",
    tags: ["Solidity", "Web3.js", "React", "Ethereum"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Real-time Chat App",
    description:
      "End-to-end encrypted messaging platform with real-time notifications. Features user authentication and message history sync.",
    tags: ["Next.js", "Supabase", "Real-time", "WebSockets"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio V1",
    description:
      "Personal portfolio showcasing previous projects and case studies. Designed with attention to performance and accessibility.",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Design System Component Library",
    description:
      "Reusable component library built with React and TypeScript. Fully documented with Storybook for team collaboration.",
    tags: ["React", "TypeScript", "Storybook", "CSS-in-JS"],
    github: "#",
    live: "#",
  },
]

export function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured)
  const otherProjects = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">A selection of my recent work in frontend development and Web3</p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">More Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
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
    <div
      className={`group border border-border rounded-lg overflow-hidden bg-background hover:border-primary/50 transition ${featured ? "md:col-span-1" : ""}`}
    >
      <div className="p-6 space-y-4 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent-foreground border border-accent/30"
              >
                {tag}
              </span>
            ))}
          </div>
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
    </div>
  )
}
