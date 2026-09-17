"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    project: "Residential Villa",
    testimonial:
      "Omkar Aluminium did an excellent job on our villa. The aluminium windows and doors are perfectly installed and look great. Their attention to detail is impressive.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    project: "Office Renovation",
    testimonial:
      "Professional team with quality workmanship. They completed our office partition project on time and the finishing is outstanding. Highly recommended.",
    rating: 5,
  },
  {
    name: "Ankit Desai",
    project: "Commercial Complex",
    testimonial:
      "We hired Omkar Aluminium for the facade work on our commercial building. The quality of materials and installation is top-notch. Very satisfied with the result.",
    rating: 5,
  },
  {
    name: "Sunita Patil",
    project: "Home Renovation",
    testimonial:
      "The sliding doors and windows they installed are smooth and well-fitted. The team was professional and the work was completed within the timeline.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-surface py-20 md:py-32 overflow-hidden">
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
            Testimonials
            <span className="h-px w-8 bg-brand-accent" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl">
            Trusted by Our Clients
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="mt-16">
          <div className="relative mx-auto max-w-3xl">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-0 opacity-10">
              <Quote className="h-16 w-16 text-brand-accent" />
            </div>

            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl bg-white p-8 shadow-lg sm:p-12"
            >
              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-base leading-relaxed text-graphite-light sm:text-lg">
                &ldquo;{testimonials[current].testimonial}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-white">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-xs text-graphite-light">
                    {testimonials[current].project}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-dark bg-white text-charcoal transition-colors hover:border-brand-accent hover:text-brand-accent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-brand-accent"
                        : "w-2 bg-surface-dark hover:bg-aluminium"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-dark bg-white text-charcoal transition-colors hover:border-brand-accent hover:text-brand-accent"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
