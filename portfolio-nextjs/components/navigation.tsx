"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#experience", label: "Experiencia" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#about", label: "Sobre Mí" },
  { href: "#community", label: "Comunidad" },
  { href: "#contact", label: "Contacto" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()

  const navOpacity = useTransform(
    scrollY,
    [0, 100],
    [0.85, 0]
  )

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-gray-900/85 backdrop-blur-md"
        style={{ opacity: navOpacity }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-900 dark:text-white hover:text-cyan-400 hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          onClick={() => setIsOpen(false)}
        />

        <motion.div
          className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-2xl"
          variants={{
            open: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            },
            closed: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
              },
            },
          }}
        >
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                variants={{
                  open: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: index * 0.05,
                    },
                  },
                  closed: {
                    opacity: 0,
                    x: -20,
                  },
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
