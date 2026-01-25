"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

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

export function Reviews() {
    return (
        <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews & Testimonials</h2>
                    <p className="text-muted-foreground">What clients and collaborators have to say about working with me</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {REVIEWS.map((review, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="relative bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors hover:shadow-lg"
                        >
                            {/* Quote icon background */}
                            <Quote size={32} className="absolute top-4 right-4 text-primary/10" />

                            <div className="space-y-4">
                                {/* Stars */}
                                <div className="flex gap-1">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                                        >
                                            <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                        </motion.div>
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
