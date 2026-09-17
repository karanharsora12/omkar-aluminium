"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Upload,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Shaileshbhai Mistri",
    value: "+91-94277 51630",
    href: "tel:+919427751630",
  },
  {
    icon: Phone,
    label: "Uttambhai Mistri",
    value: "+91-99984 54234",
    href: "tel:+919998454234",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91-94277 51630",
    href: "https://wa.me/919427751630",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@omkaralluminium.com",
    href: "mailto:info@omkaralluminium.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Siddharth Ghoghla Road, Opp. HATKESH 2, Near Sahjanand Society, Bhavnagar.",
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: null,
  },
];

const projectTypes = [
  "Residential",
  "Commercial",
  "Office",
  "Architectural",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    location: "",
    requirement: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative bg-surface py-20 md:py-32">
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
            Get in Touch
            <span className="h-px w-8 bg-brand-yellow" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Let&apos;s Discuss Your Project
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl bg-navy p-8">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="mt-2 text-sm text-white/60">
                Reach out to us for premium aluminium solutions.
              </p>

              <div className="mt-8 space-y-5">
                {contactInfo.map((info) => (
                  <div key={`${info.label}-${info.value}`} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <info.icon className="h-5 w-5 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-0.5 text-sm text-white transition-colors hover:text-brand-yellow"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 flex gap-3">
                <a
                  href="tel:+919427751630"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-yellow px-4 py-3 text-sm font-bold text-navy transition-colors hover:bg-brand-yellow-light"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919427751630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-navy">Send an Enquiry</h3>
              <p className="mt-2 text-sm text-graphite-light">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-wider text-graphite"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-surface-dark bg-surface/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-yellow focus:bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium uppercase tracking-wider text-graphite"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-surface-dark bg-surface/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-yellow focus:bg-white"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-wider text-graphite"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-surface-dark bg-surface/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-yellow focus:bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-xs font-medium uppercase tracking-wider text-graphite"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-surface-dark bg-surface/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-yellow focus:bg-white"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="location"
                    className="block text-xs font-medium uppercase tracking-wider text-graphite"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-surface-dark bg-surface/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-yellow focus:bg-white"
                    placeholder="Project location"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="requirement"
                    className="block text-xs font-medium uppercase tracking-wider text-graphite"
                  >
                    Requirement
                  </label>
                  <input
                    type="text"
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-surface-dark bg-surface/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-yellow focus:bg-white"
                    placeholder="e.g., Aluminium windows, doors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-wider text-graphite"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full resize-none rounded-lg border border-surface-dark bg-surface/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-yellow focus:bg-white"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium uppercase tracking-wider text-graphite">
                    Upload Images / Documents
                  </label>
                  <div className="mt-2 flex items-center justify-center rounded-lg border-2 border-dashed border-surface-dark p-6 transition-colors hover:border-brand-yellow/50">
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-aluminium-dark" />
                      <p className="mt-2 text-sm text-graphite-light">
                        Drag & drop files here or{" "}
                        <span className="font-medium text-brand-yellow-dark">
                          browse
                        </span>
                      </p>
                      <p className="mt-1 text-xs text-aluminium-dark">
                        JPG, PNG, PDF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-navy px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-navy-light hover:shadow-lg"
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
