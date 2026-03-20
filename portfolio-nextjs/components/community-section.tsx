"use client"

import { motion } from "framer-motion"
import { Youtube, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

// Skool Icon Component - "sk" logo
function SkoolIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
        <span className="text-[0.65em] font-black text-blue-600" style={{ marginTop: "0.05em" }}>
          sk
        </span>
      </div>
    </div>
  )
}

const communityLinks = [
  {
    title: "Comunidad Exclusiva",
    description: "Únete a The AI Blueprint Plus, una comunidad premium donde profesionales aprenden a crear agentes autónomos, escalar agencias de IA y dominar la automatización avanzada. Formación completa de n8n, biblioteca de +100 plantillas y acceso a masterclass exclusivas.",
    action: "Unirme Ahora",
    href: "https://www.skool.com/the-ai-blueprint-plus",
    color: "from-blue-500 to-blue-600",
    align: "left",
    highlight: "The AI Blueprint Plus",
  },
  {
    title: "Contenido gratuito",
    description: "En mi canal de YouTube comparto contenido relacionado con la IA aplicada, tutoriales prácticos de n8n, casos de uso reales, comparativas de modelos de lenguaje y estrategias para implementar IA en proyectos profesionales. Aprendizajes, lecciones y errores condensados en videos prácticos y de alta calidad.",
    action: "Ver Canal de YouTube",
    href: "https://www.youtube.com/@PauBerenguerAI",
    color: "from-blue-500 to-blue-600",
    align: "right",
    highlight: "IA aplicada",
  },
]

export function CommunitySection() {
  return (
    <section
      id="community"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Comunidad
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            ¿Cómo te puedo ayudar?
          </p>
          <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto rounded-full" />
        </motion.div>

        {/* Help Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {communityLinks.map((link, index) => {
            const isEven = index % 2 === 0
            const highlightedDescription = link.description.replace(
              link.highlight,
              `<span class="font-semibold text-blue-600 dark:text-blue-400">${link.highlight}</span>`
            )

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 sm:p-12 shadow-lg hover:shadow-2xl transition-all overflow-hidden ${link.align === "right" ? "text-right" : ""}`}>
                  <div className="space-y-6">
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                        {link.title}
                      </h3>
                      <p
                        className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: highlightedDescription }}
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${link.color} hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-500/50 transition-all text-lg px-8 py-6 rounded-full`}
                        onClick={() => window.open(link.href, "_blank")}
                      >
                        {link.action}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
