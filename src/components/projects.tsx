"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Office", "Architectural"];

const projects = [
  {
    title: "Modern Residence",
    description: "Aluminium doors & windows",
    category: "Residential",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Corporate Office",
    description: "Aluminium partitions & glass",
    category: "Office",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Commercial Building",
    description: "Aluminium facade",
    category: "Commercial",
    location: "Navi Mumbai",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Luxury Villa",
    description: "Sliding doors & custom windows",
    category: "Residential",
    location: "Thane",
    image: "https://images.unsplash.com/photo-1600607687644-c7f34b5e7a84?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Tech Park Complex",
    description: "Architectural aluminium facade",
    category: "Architectural",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Retail Showroom",
    description: "Glass & aluminium partitions",
    category: "Commercial",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative bg-charcoal py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            <span className="h-px w-8 bg-brand-accent" />
            Our Portfolio
            <span className="h-px w-8 bg-brand-accent" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Work Speaks for Itself
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-accent text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden rounded-xl ${project.span}`}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="mb-2 text-xs font-medium uppercase tracking-wider text-brand-accent">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{project.description}</p>
                  <p className="mt-1 text-xs text-white/50">{project.location}</p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
