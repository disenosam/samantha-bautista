"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ai graphic design portfolio.png?height=1920&width=1080"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-100 dark:opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
      </div>
  

      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-helvetica-bold text-primary text-5xl md:text-7xl mb-6">SAMANTHA BAUTISTA</h1>

          <h2 className="font-bricolage text-secondary text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Diseñadora Gráfica & UI | Social Media Manager
 
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Especializada en crear contenido visual estratégico, gestionar redes sociales que conectan con audiencias y diseñar interfaces de usuario efectivas, responsivas y atractivas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#portfolio">Ver Portafolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contacto</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <Link href="#about">
            <ArrowDown className="h-8 w-8 text-muted-foreground" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

