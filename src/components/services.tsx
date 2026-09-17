"use client";

import { motion } from "motion/react";
import { Hammer, DoorOpen, Wrench, Building2, Home, Landmark } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Aluminium Fabrication",
    description:
      "Expert fabrication of aluminium products using precision techniques and quality materials.",
    icon: Hammer,
  },
  {
    number: "02",
    title: "Door & Window Installation",
    description:
      "Professional installation of aluminium doors and windows with accurate fitting.",
    icon: DoorOpen,
  },
  {
    number: "03",
    title: "Custom Aluminium Work",
    description:
      "Tailored aluminium solutions designed and built to your exact specifications.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Commercial Projects",
    description:
      "Large-scale aluminium solutions for commercial buildings, offices and retail spaces.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Residential Projects",
    description:
      "Premium aluminium products and installation for homes and residential complexes.",
    icon: Home,
  },
  {
    number: "06",
    title: "Architectural Solutions",
    description:
      "Specialized aluminium systems for modern architectural designs and facades.",
    icon: Landmark,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 md:py-32">
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
            What We Do
            <span className="h-px w-8 bg-brand-accent" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl">
            What We Do
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-surface-dark bg-surface/50 p-8 transition-all duration-500 hover:border-brand-accent/30 hover:bg-white hover:shadow-xl"
            >
              {/* Number */}
              <span className="absolute right-6 top-6 text-5xl font-bold text-surface-dark transition-colors duration-500 group-hover:text-brand-accent/10">
                {service.number}
              </span>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-charcoal transition-colors duration-500 group-hover:bg-brand-accent">
                <service.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-charcoal">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
