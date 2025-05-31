"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Palette, ShoppingBag, BookOpen, Instagram, Globe, PenTool } from "lucide-react"

const services = [
  {
    icon: <ShoppingBag className="h-10 w-10" />,
    title: "Herramientas con IA",
    description: "Integro inteligencia artificial en mis procesos creativos para optimizar tiempos, explorar estilos únicos y generar ideas visuales innovadoras. Desde la generación de imágenes hasta la edición automatizada, uso estas herramientas como aliadas para llevar cada proyecto a otro nivel.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Branding",
    description: "Desarrollo identidades visuales coherentes. Al integrar herramientas de inteligencia artificial en mi proceso creativo, logro conceptos innovadores que capturan la esencia y voz visual de cada marca.",
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Diseño Editorial",
    description:
      "Diseño composiciones atractivas para revistas, catálogos y publicaciones digitales, con un enfoque en claridad, jerarquía visual y narrativa—haciendo que cada página sea funcional y estética.",
  },
  {
    icon: <Instagram className="h-10 w-10" />,
    title: "Contenido para Redes Sociales",
    description: "Produzco contenido visual llamativo utilizando recursos generados con IA y herramientas como CapCut, Canva, Premiere Pro y DaVinci Resolve. Creo piezas atractivas, coherentes con la marca y optimizadas para plataformas como Instagram y TikTok.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Prototipado Web",
    description: "Diseño interfaces amigables en Figma, creando prototipos interactivos que dan vida a experiencias digitales—ideales para sitios web, portafolios y páginas de aterrizaje.",
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "Ilustración",
    description: "Creo ilustraciones personalizadas y recursos visuales que cuentan tu historia con un estilo distintivo.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-bold text-primary text-4xl md:text-5xl mb-4">Mis Servicios</h2>
          <p className="font-bricolage text-secondary text-lg max-w-2xl mx-auto">
            Explora mi trabajo en diferentes áreas del diseño gráfico
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background p-8 rounded-lg shadow-sm border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md"
            >
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="font-bricolage text-secondary text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

