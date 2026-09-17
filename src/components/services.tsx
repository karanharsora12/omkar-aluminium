"use client";

import { motion } from "motion/react";
import { LayoutGrid, DoorOpen, Grid3x3, MoveHorizontal, Fence, PaintBucket } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Aluminium Windows",
    description:
      "Durable and elegant window systems designed for modern homes and commercial spaces.",
    icon: LayoutGrid,
  },
  {
    number: "02",
    title: "Aluminium Doors",
    description:
      "Premium aluminium doors for residential and commercial spaces with secure locking systems.",
    icon: DoorOpen,
  },
  {
    number: "03",
    title: "Aluminium Partitions",
    description:
      "Modern office and interior partition solutions for efficient space management.",
    icon: Grid3x3,
  },
  {
    number: "04",
    title: "Sliding Windows",
    description:
      "Smooth and functional sliding window systems that save space and enhance aesthetics.",
    icon: MoveHorizontal,
  },
  {
    number: "05",
    title: "Aluminium Grills",
    description:
      "Strong and decorative aluminium grill solutions for enhanced security and design.",
    icon: Fence,
  },
  {
    number: "06",
    title: "Powder Coating Finish",
    description:
      "Professional powder coating services for a durable, premium finish on aluminium products.",
    icon: PaintBucket,
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
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow-dark">
            <span className="h-px w-8 bg-brand-yellow" />
            Our Services
            <span className="h-px w-8 bg-brand-yellow" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-graphite-light">
            Our range of aluminium services covers everything from windows and doors to powder coating
          </p>
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
              className="group relative rounded-2xl border border-surface-dark bg-surface/50 p-8 transition-all duration-500 hover:border-brand-yellow/30 hover:bg-white hover:shadow-xl"
            >
              <span className="absolute right-6 top-6 text-5xl font-bold text-surface-dark transition-colors duration-500 group-hover:text-brand-yellow/10">
                {service.number}
              </span>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-navy transition-colors duration-500 group-hover:bg-brand-yellow">
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-navy">{service.title}</h3>
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
