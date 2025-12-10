import { Star, Quote } from "lucide-react"

const REVIEWS = [
  {
    author: "Client Name",
    company: "Company A",
    role: "Product Manager",
    review:
      "Amazing developer! Delivered the project on time and exceeded expectations. Great communication and attention to detail.",
    rating: 5,
    image: "/client-profile.jpg",
  },
  {
    author: "John Smith",
    company: "Tech Startup",
    role: "CEO",
    review: "Built our Web3 dashboard from scratch. Highly skilled in both frontend and blockchain. Highly recommend!",
    rating: 5,
    image: "/client-profile.jpg",
  },
  {
    author: "Sarah Johnson",
    company: "E-commerce Brand",
    role: "Founder",
    review: "Transformed our website performance and user experience. Professional, reliable, and results-driven.",
    rating: 5,
    image: "/client-profile.jpg",
  },
  {
    author: "David Chen",
    company: "Finance Platform",
    role: "CTO",
    review: "Exceptional work on our smart contract integration. Deep knowledge of Web3 ecosystem and best practices.",
    rating: 5,
    image: "/client-profile.jpg",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews & Testimonials</h2>
          <p className="text-muted-foreground">What clients and collaborators have to say about working with me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="relative bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition"
            >
              {/* Quote icon background */}
              <Quote size={32} className="absolute top-4 right-4 text-primary/10" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-muted-foreground leading-relaxed italic">"{review.review}"</p>

                {/* Author info */}
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{review.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.role} at {review.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
