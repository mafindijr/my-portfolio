import { Briefcase, Calendar } from "lucide-react"

const EXPERIENCE = [
  {
    company: "Tech Company Name",
    position: "Senior Frontend Developer",
    description:
      "Led frontend development of customer-facing applications, mentored junior developers, and optimized performance.",
    period: "2022 - Present",
    duration: "2 years",
    technologies: ["React", "Next.js", "TypeScript", "Web3"],
  },
  {
    company: "Startup XYZ",
    position: "Full Stack Developer",
    description: "Built and deployed blockchain-based solutions, managed databases, and implemented smart contracts.",
    period: "2020 - 2022",
    duration: "2 years",
    technologies: ["Solidity", "Web3.js", "React", "Node.js"],
  },
  {
    company: "Web Agency",
    position: "Frontend Developer",
    description:
      "Developed responsive web applications for various clients, focused on UI/UX and performance optimization.",
    period: "2019 - 2020",
    duration: "1 year",
    technologies: ["React", "TailwindCSS", "JavaScript", "CSS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground">My professional journey and key roles in web development</p>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 pb-6 border-l-2 border-primary/30 hover:border-primary/60 transition"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

              <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Briefcase size={20} className="text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{job.position}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={16} />
                  <span>{job.period}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{job.duration}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 hover:bg-accent/30 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
