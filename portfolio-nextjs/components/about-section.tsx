"use client"

import { motion } from "framer-motion"
import { Sparkles, Target, Heart, Zap } from "lucide-react"
import { Card } from "./ui/card"

export function AboutSection() {
  const stats = [
    { number: "2", label: "Años en IA", icon: Zap },
    { number: "+10K", label: "Miembros", icon: Target },
    { number: "+200K", label: "Vistas", icon: Heart },
  ]

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-white dark:bg-gray-900"
    >
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
            Sobre Mí
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Quién soy y qué hago
          </p>
          <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Actualmente curso Administración y Dirección de Empresas en la{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Universidad Europea
              </span>
              , tras completar los dos primeros años en la Universidad de Lleida.
            </p>
            <p>
              Desde los 17 años comencé a experimentar con IA y automatización, pasando de la curiosidad técnica a la implementación real de soluciones que resuelven problemas en empresas y proyectos profesionales.
            </p>
            <p>
              Mi enfoque está en hacer la tecnología accesible: convertir conceptos complejos en herramientas prácticas que cualquiera pueda usar.
            </p>
            <p>
              A través de mi canal de YouTube y LinkedIn, comparto casos de uso reales, tutoriales prácticos de n8n, análisis de modelos de lenguaje y estrategias para aplicar la IA en escenarios profesionales.
            </p>
            <p>
              He construido una comunidad de más de{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                4000 personas
              </span>{" "}
              interesadas en automatización e IA, y fundé The AI Blueprint Plus, una comunidad premium donde profesionales aprenden a crear agentes autónomos, escalar agencias de IA y dominar la automatización avanzada.
            </p>
            <p>
              Mi objetivo es claro: ayudar a profesionales y empresas a entender que la IA no es el futuro, sino el presente. Y que aplicarla bien puede marcar la diferencia entre estancarse o escalar.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <Card className="text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-blue-100 dark:border-blue-900/30">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
