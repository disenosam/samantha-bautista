"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Palette, ShoppingBag, BookOpen, Instagram, Globe, PenTool } from "lucide-react"

const services = [
  {
    icon: <ShoppingBag className="h-10 w-10" />,
    title: "AI Tools",
    description: "Designing digital garments using Clo 3D, combining pattern-making techniques and textile simulation to create realistic results. I build each piece from scratch, exploring silhouettes, drape, and textures—ideal for virtual fashion, presentations, or social media content.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Branding",
    description: "Developing cohesive brand identities. By integrating AI tools into my creative process, I develop fresh, innovative concepts that capture a brand’s essence and visual voice.",
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Editorial Design",
    description:
      "Crafting engaging layouts for magazines, catalogs, and digital publications with a focus on clarity, visual hierarchy, and storytelling—making every page both functional and beautiful.",
  },
  {
    icon: <Instagram className="h-10 w-10" />,
    title: "Social Media Content",
    description: "Producing scroll-stopping visual content Using AI-generated assets and editing tools like CapCut, Canva, Premiere Pro, and DaVinci Resolve, I create visuals that are engaging, on-brand, and ready to perform on platforms like Instagram and TikTok.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Web Prototyping",
    description: "Building user-friendly interfaces in Figma, creating clickable prototypes that bring digital experiences to life—ideal for websites, portfolios, and landing pages.",
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "Illustration",
    description: "Creating custom illustrations and visual assets that tell your story with a distinctive style.",
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
          <h2 className="font-helvetica-bold text-primary text-4xl md:text-5xl mb-4">My Servicios</h2>
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

