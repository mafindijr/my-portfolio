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

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="flex justify-center md:col-span-1">
            <div
              className="w-48 h-48 rounded-lg overflow-hidden border-4 border-primary/30 shadow-lg"
              style={{ transform: "rotate(-6deg)" }}
            >
              <a href="/IMG_5546.JPG" target="_blank">
                 <img src="/IMG_5546.JPG" alt="mafindijr" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
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
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="font-semibold text-lg mb-3 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Volunteer Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {VOLUNTEER_WORK.map((work, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-background/50 hover:bg-background/80 transition"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
