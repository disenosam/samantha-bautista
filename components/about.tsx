"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-bold text-primary text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-background border-2 border-secondary rounded-lg overflow-hidden transform -rotate-3">
              <Image
                src="/_.jpeg?height=600&width=600"
                    alt="Samantha at work"
                    fill
                    className="object-cover"
              />

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-bricolage text-secondary text-xl mb-6">Hello, I'm Samantha</h3>

            <p className="text-muted-foreground mb-6">
Soy diseñadora gráfica con pasión por crear contenido visual estratégico para empresas y pequeños negocios. Me especializo en el desarrollo de identidad visual, diseño para redes sociales y piezas impresas, pero también me considero una creativa versátil, tambien tengo experiencia en lo editorial, edicion de video y herramientas de IA, soy  capaz de adaptarme a las necesidades específicas de cada proyecto. Me encanta contar historias a través del diseño y aportar soluciones visuales que conecten con las audiencias correctas.

            </p>

            <p className="text-muted-foreground mb-6">
              With experience in branding, editorial design, social media content, and 3D fashion using Clo3D, I approach each project with curiosity and attention to detail. I enjoy exploring new tools, learning constantly, and creating visuals that connect with people on a real, human level.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bricolage text-accent mb-2">Education</h4>
                <p className="text-muted-foreground text-sm">Bachelor’s Degree in Graphic Design at UAD</p>
              </div>
              <div>
                <h4 className="font-bricolage text-accent mb-2">Location</h4>
                <p className="text-muted-foreground text-sm">Ensenada, BC</p>
              </div>
              <div>
                <h4 className="font-bricolage text-accent mb-2">Experience</h4>
                <p className="text-muted-foreground text-sm">3+ Years Professional Experience</p>
              </div>
              <div>
                <h4 className="font-bricolage text-accent mb-2">Languages</h4>
                <p className="text-muted-foreground text-sm">English, Spanish</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

