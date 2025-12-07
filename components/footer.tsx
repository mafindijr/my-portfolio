import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const SOCIAL_LINKS = [
  { label: "GitHub", icon: Github, href: "https://github.com/mafindijr" },
  { label: "LinkedIn", icon: Linkedin, href: "http://www.linkedin.com/in/abdulrazak-mafindi-iliyasu-286538337?utm_campaign=share_via&utm_content=profle&utm_medium=android_app" },
  { label: "Twitter", icon: Twitter, href: "http://x.com/JnrMafindi?s=09" },
  { label: "Email", icon: Mail, href: "mailto:abdulrazaqiliyasumafindi@gmail.com" },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
              like to collaborate or just have a chat.
            </p>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Mafindijr. <span className="font-mono text-primary text-[16px] font-bold ">Portfolio</span></p>
          <p>Designed & built with Next.js, React, and TailwindCSS</p>
        </div>
      </div>
    </footer>
  )
}
