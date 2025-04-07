"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-helvetica-bold text-primary text-5xl md:text-7xl mb-6">SAMANTHA BAUTISTA</h1>

          <h2 className="font-bricolage-medium-500 text-secondary text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Creative Designer & Digital Artist
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Specializing in 3D clothing design, branding, editorial, social media content, web prototyping, and
            illustration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#portfolio">View Portfolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
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

