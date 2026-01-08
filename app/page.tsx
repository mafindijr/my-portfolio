import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { About } from "@/components/about"
import { Certifications } from "@/components/certifications"
import { Reviews } from "@/components/reviews"
import { Community } from "@/components/community"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Certifications />
      <Reviews />
      <Community />
      <ContactForm />
      <Footer />
    </main>
  )
}
