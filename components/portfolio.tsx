"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

type Category = "all" | "3d" | "branding" | "editorial" | "social" | "web" | "illustration"

type Project = {
  id: number
  title: string
  category: Exclude<Category, "all">
  image: string
  description: string
  client?: string
  year?: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Diseño de interfaz de usuario (UI)",
    category: "3d",
    image: "/Copia de portfolio.png?height=600&width=800",
    description:
      "Garments simulation and patterns making for cataloging and streamlining the manufacturing process utilizing Clo3D",
    client: "Samaneli",
    year: "2025",
    link: "https://www.behance.net/gallery/227130361/UI-PORFTFOLIO",
  },
  {
    id: 2,
    title: "Melatonin Gummy Bears",
    category: "branding",
    image: "/melamia.png?height=600&width=800",
    description:
      "Complete brand identity launch from stcrach for  a supplements cosmetics company, including logo, packaging, and brand guidelines applying all Mexican regulations for supplements.",
    client: "Melamia Beauty Co.",
    year: "2022",
    link: "https://www.behance.net/gallery/217026837/Social-media-graphic-designer-2025",
  },
  {
    id: 3,
    title: "Alchemised Book Promotion",
    category: "editorial",
    image: "/Printed.jpg?height=600&width=800",
    description:
      "Editorial design for a quarterly food magazine, featuring custom typography and photography direction.",
    client: "Penguin Random House",
    year: "2023",
    link: "https://www.behance.net/gallery/217496997/PORTFOLIO-2025",
  },
  {
    id: 4,
    title: "Bar Social Media",
    category: "social",
    image: "/drinks.jpg?height=600&width=800",
    description: "Social media campaign with AI generated images for daily content of a local bar.",
    client: "Ensenada Bar",
    year: "2023",
    link: "https://www.behance.net/gallery/217026837/Social-media-graphic-designer-2025",
  },
  {
    id: 5,
    title: "AI Tools",
    category: "AI",
    image: "/circles.png?height=600&width=800",
    description: "A few projects that i made with ai tools",
    client: "Thedisenoclub",
    year: "2025",
    link: "https://www.behance.net/gallery/222275575/AI-Graphic-Desing",
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    category: "illustration",
    image: "/Printed (1).jpg?height=600&width=800",
    description: "Adaptation of a classic novel into a 10-page children’s book, plus the front and back cover. I reimagined the story in a way that is brief, engaging, and easy to understand for young readers.",
    client: "School Project",
    year: "2023",
    link: "https://www.behance.net/gallery/217496997/PORTFOLIO-2025",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Work" },
    { value: "3d", label: "3D Clothing" },
    { value: "branding", label: "Branding" },
    { value: "editorial", label: "Editorial" },
    { value: "social", label: "Social Media" },
    { value: "web", label: "Web Design" },
    { value: "illustration", label: "Illustration" },
  ]

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-bold text-primary text-4xl md:text-5xl mb-4">Portfolio</h2>
          <p className="font-bricolage text-secondary text-lg max-w-2xl mx-auto">Selected projects and creative work</p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="font-helvetica-bold text-white text-xl mb-2">{project.title}</h3>
                  <p className="font-bricolage text-white/80 text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-helvetica-bold text-primary text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="font-bricolage text-secondary">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="font-bricolage text-accent mb-2">About the Project</h4>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {selectedProject.client && (
                      <div>
                        <h4 className="font-bricolage text-accent text-sm mb-1">Client</h4>
                        <p className="text-muted-foreground">{selectedProject.client}</p>
                      </div>
                    )}

                    {selectedProject.year && (
                      <div>
                        <h4 className="font-bricolage text-accent text-sm mb-1">Year</h4>
                        <p className="text-muted-foreground">{selectedProject.year}</p>
                      </div>
                    )}
                  </div>

                  {selectedProject.link && (
                    <Button asChild variant="outline">
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

