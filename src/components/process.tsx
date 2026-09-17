"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand the client's requirements.",
  },
  {
    number: "02",
    title: "Site Measurement",
    description: "Measure and evaluate the project.",
  },
  {
    number: "03",
    title: "Planning",
    description: "Finalize design, specifications and materials.",
  },
  {
    number: "04",
    title: "Fabrication",
    description: "Precision fabrication according to requirements.",
  },
  {
    number: "05",
    title: "Quality Check",
    description: "Inspect dimensions, finishing and quality.",
  },
  {
    number: "06",
    title: "Installation",
    description: "Professional installation at the project site.",
  },
  {
    number: "07",
    title: "Handover",
    description: "Final inspection and project completion.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-navy py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
            <span className="h-px w-8 bg-brand-yellow" />
            Our Process
            <span className="h-px w-8 bg-brand-yellow" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            From Requirement to Reality
          </h2>
        </motion.div>

        {/* Horizontal Timeline - Desktop */}
        <div className="mt-20 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-6 h-px origin-left bg-gradient-to-r from-brand-yellow to-brand-yellow/30"
              style={{ width: "100%" }}
            />

            <div className="grid grid-cols-7 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-yellow bg-navy">
                    <span className="text-sm font-bold text-brand-yellow">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Timeline - Mobile */}
        <div className="mt-16 md:hidden">
          <div className="relative ml-4">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-brand-yellow to-brand-yellow/30"
            />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start gap-6 pl-8"
                >
                  <div className="absolute left-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-brand-yellow bg-navy">
                    <span className="text-xs font-bold text-brand-yellow">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
