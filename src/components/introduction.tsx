"use client";

import { motion } from "motion/react";
import { ArrowRight, Shield, Ruler, Clock, Users } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Quality", description: "Premium materials" },
  { icon: Ruler, label: "Precision", description: "Accurate fabrication" },
  { icon: Clock, label: "Durability", description: "Built to last" },
  { icon: Users, label: "Professional Service", description: "Expert team" },
];

export default function Introduction() {
  return (
    <section id="about" className="relative bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl border-2 border-brand-yellow/20 lg:block" />
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-2xl bg-brand-yellow/10 lg:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow-dark">
              <span className="h-px w-8 bg-brand-yellow" />
              About Us
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl md:text-5xl">
              Alluminium Solutions Built Around{" "}
              <span className="text-brand-yellow-dark">Your Needs</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-graphite-light sm:text-lg">
              Omkar Alluminium delivers reliable and professionally crafted
              aluminium solutions for residential, commercial and architectural
              requirements. From precision fabrication to final installation, we
              focus on quality, functionality and clean finishing.
            </p>

            <p className="mt-4 text-base leading-relaxed text-graphite-light/80">
              With years of experience serving Bhavnagar and surrounding areas,
              we have established ourselves as a trusted name in aluminium
              fabrication and installation. Our commitment to excellence drives
              every project we undertake.
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold italic text-navy/70">
              &ldquo;Crafting Alluminium Excellence — You Desire, We Display&rdquo;
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand-yellow-dark"
              >
                Know More About Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="group rounded-xl border border-surface-dark bg-surface/50 p-6 text-center transition-all duration-300 hover:border-brand-yellow/30 hover:bg-white hover:shadow-lg"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/10 transition-colors group-hover:bg-brand-yellow/20">
                <item.icon className="h-5 w-5 text-brand-yellow-dark" />
              </div>
              <h3 className="text-sm font-bold text-navy">{item.label}</h3>
              <p className="mt-1 text-xs text-graphite-light">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
