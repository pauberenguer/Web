"use client"

import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, MapPin, Sparkles, Rocket, Youtube, Users } from "lucide-react"
import { useRef } from "react"
import { Card, CardContent } from "./ui/card"

const experiences = [
  {
    title: "Co-Fundador Asisttente",
    company: "Asisttente",
    period: "Enero 2025 - Actualidad",
    description:
      "Desarrollo e implementación de soluciones de inteligencia artificial y automatización para empresas y profesionales. Especialización en n8n, creación de agentes autónomos y optimización de flujos de trabajo.",
    skills: "Automatización, Estrategia de IA y 3 aptitudes más",
    icon: Briefcase,
    color: "from-gray-700 to-gray-900",
    current: true,
  },
  {
    title: "Fundador - Pau Berenguer AI",
    company: "YouTube",
    period: "Junio 2025 - Actualidad",
    description:
      "Creación de contenido educativo sobre inteligencia artificial y automatización aplicada. Tutoriales prácticos de n8n, casos de uso reales con IA, comparativas de modelos y guías paso a paso para implementar soluciones.",
    skills: "Creación de Contenido Educativo y Estrategia de crecimiento Digital",
    icon: Youtube,
    color: "from-red-500 to-red-600",
    current: true,
  },
  {
    title: "Fundador - The AI Blueprint",
    company: "Skool",
    period: "Julio 2025 - Actualidad",
    description:
      "Comunidad gratuita de más de 2200 miembros enfocada en inteligencia artificial y automatización. Recursos educativos sobre n8n, IA aplicada y masterclass exclusivas para quienes están empezando en el mundo de la IA.",
    skills: "Community Manager",
    icon: Users,
    color: "from-orange-500 to-orange-600",
    current: true,
  },
  {
    title: "Fundador - The AI Blueprint Plus",
    company: "Skool",
    period: "Agosto 2025 - Actualidad",
    description:
      "Comunidad premium en Skool para profesionales que quieren dominar IA y automatización. Formación completa de n8n de principiante a experto, biblioteca de +100 plantillas listas para usar, guías para crear y monetizar agentes de IA, y acceso a masterclass y llamadas en directo.",
    skills: "Community Manager",
    icon: Users,
    color: "from-blue-500 to-blue-700",
    current: true,
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Experiencia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Mi trayectoria profesional
          </p>
          <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden lg:block -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center"
                >
                  {/* Desktop Layout - Left Side */}
                  <div className="hidden lg:block">
                    {isEven ? (
                      <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-gray-100 dark:border-gray-700">
                        <CardContent className="p-6">
                          <motion.div
                            className="space-y-4"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {exp.title}
                              </h3>
                              <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                  <Briefcase className="w-4 h-4" />
                                  <span className="font-medium">
                                    {exp.company}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                              </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {exp.description}
                            </p>
                          </motion.div>
                        </CardContent>
                      </Card>
                    ) : null}
                  </div>

                  {/* Desktop Layout - Right Side */}
                  <div className="hidden lg:block">
                    {!isEven ? (
                      <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-gray-100 dark:border-gray-700">
                        <CardContent className="p-6">
                          <motion.div
                            className="space-y-4"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {exp.title}
                              </h3>
                              <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                  <Briefcase className="w-4 h-4" />
                                  <span className="font-medium">
                                    {exp.company}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                              </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {exp.description}
                            </p>
                          </motion.div>
                        </CardContent>
                      </Card>
                    ) : null}
                  </div>

                  {/* Mobile Layout */}
                  <Card className="lg:hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-gray-100 dark:border-gray-700">
                    <CardContent className="p-6">
                      <motion.div
                        className="space-y-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>

                      </motion.div>
                    </CardContent>
                  </Card>

                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} hidden lg:flex items-center justify-center shadow-xl`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.3 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-white rounded-full"
                      animate={
                        exp.current
                          ? {
                              scale: [1, 1.3, 1],
                              opacity: [1, 0.7, 1],
                            }
                          : {}
                      }
                      transition={
                        exp.current
                          ? {
                              duration: 2,
                              repeat: Infinity,
                            }
                          : {}
                      }
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
