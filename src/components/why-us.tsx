"use client";

import { motion } from "motion/react";
import { Shield, Ruler, Lightbulb, Palette, Wrench, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Materials",
    description:
      "Reliable materials selected for durability and performance.",
  },
  {
    icon: Ruler,
    title: "Precision Workmanship",
    description:
      "Careful measurement, fabrication and finishing.",
  },
  {
    icon: Lightbulb,
    title: "Custom Solutions",
    description:
      "Solutions designed around individual project requirements.",
  },
  {
    icon: Palette,
    title: "Modern Designs",
    description:
      "Contemporary aluminium systems for modern spaces.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Clean and accurate installation.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    description:
      "Clear communication from enquiry to completion.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-surface py-20 md:py-32">
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
            Why Choose Us
            <span className="h-px w-8 bg-brand-accent" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl">
            Why Choose Omkar Aluminium?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-charcoal transition-all duration-500 group-hover:bg-brand-accent group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-charcoal">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite-light">
                {feature.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
