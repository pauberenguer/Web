"use client"

import { motion } from "framer-motion"
import { Quote, Star, Sparkles } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const testimonials = [
  {
    text: "Pau es un visionario en el campo de la IA. Sus explicaciones son claras y sus proyectos, inspiradores. ¡Totalmente recomendado!",
    author: "Carlos Martínez",
    role: "Empresario Digital",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    text: "La comunidad The AI Blueprint es increíble gracias a Pau. Siempre dispuesto a ayudar y compartir conocimientos.",
    author: "Laura García",
    role: "Desarrolladora IA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    text: "He tenido el placer de colaborar con Pau en varios proyectos. Su capacidad para transformar ideas complejas en soluciones prácticas es excepcional.",
    author: "Miguel Ángel Torres",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
  },
  {
    text: "Los tutoriales de Pau me han ayudado a automatizar mi negocio completamente. ¡Increíble valor!",
    author: "Ana Rodríguez",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    text: "Gracias a Pau y su comunidad, he conseguido implementar IA en mi empresa de forma efectiva.",
    author: "David López",
    role: "CEO Startup",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
  },
  {
    text: "El contenido de Pau es de los mejores en español sobre IA y automatización. Muy profesional.",
    author: "María Fernández",
    role: "Consultora Tech",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
  },
  {
    text: "Las masterclass de The AI Blueprint Plus son oro puro. He aprendido más en 3 meses que en años.",
    author: "Javier Sánchez",
    role: "Emprendedor",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
  },
  {
    text: "Pau tiene un don para explicar conceptos complejos de manera simple y aplicable. ¡Gracias!",
    author: "Isabel Moreno",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-950 dark:to-cyan-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Testimonios
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Lo que dice la comunidad
          </p>
          <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Infinite Scrolling Carousel - Full Width */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -3280], // Adjust based on card width * number of original testimonials
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
              {duplicatedTestimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[400px] bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-100 dark:border-gray-700"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Author with Photo at Top */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/30">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                              {testimonial.author}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm min-h-[100px]">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </motion.div>

        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
