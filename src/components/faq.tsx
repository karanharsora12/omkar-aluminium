"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What aluminium products do you provide?",
    answer:
      "We provide a comprehensive range of aluminium products including windows, doors, partitions, sliding windows, grills, facades, and custom aluminium work. We also offer professional powder coating finish services.",
  },
  {
    question: "Do you provide customized aluminium solutions?",
    answer:
      "Yes, we specialize in custom aluminium fabrication. As we say — You Desire, We Display. Our team works closely with clients to understand their specific requirements and delivers tailored solutions.",
  },
  {
    question: "Do you handle installation?",
    answer:
      "Absolutely. We provide professional installation services for all our aluminium products. Our experienced team ensures precise fitting and clean finishing for every installation.",
  },
  {
    question: "Do you work on residential projects?",
    answer:
      "Yes, we work extensively on residential projects including individual homes, apartments, and housing complexes in Bhavnagar and surrounding areas. We offer windows, doors, sliding systems, and grills for homes.",
  },
  {
    question: "Do you undertake commercial projects?",
    answer:
      "Yes, we undertake commercial projects of all sizes including offices, retail spaces, and commercial buildings. We have the expertise and resources to handle large-scale commercial installations.",
  },
  {
    question: "Do you offer powder coating services?",
    answer:
      "Yes, we provide professional powder coating finish services for aluminium products. This adds durability, protection, and a premium aesthetic finish to the aluminium surface.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can request a quotation by calling us at 94277 51630 or 99984 54234, sending a WhatsApp message, filling out the enquiry form on our website, or visiting our office on Siddharth Ghoghla Road, Bhavnagar.",
  },
  {
    question: "How long does an aluminium project take?",
    answer:
      "The timeline depends on the scope and complexity of the project. Simple installations may take a few days, while larger projects may take several weeks. We provide a timeline estimate during the consultation phase.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-white py-20 md:py-32">
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
            FAQ
            <span className="h-px w-8 bg-brand-yellow" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="mx-auto mt-16 max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-b border-surface-dark"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-brand-yellow-dark"
              >
                <span className="pr-4 text-base font-semibold text-navy">
                  {faq.question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-surface-dark text-navy transition-all duration-300 group-hover:border-brand-yellow">
                  {openIndex === i ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-graphite-light">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
