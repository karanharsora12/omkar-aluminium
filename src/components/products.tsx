"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Aluminium Windows",
    description: "Durable and elegant window systems for residential and commercial spaces.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
    slug: "aluminium-windows",
  },
  {
    title: "Aluminium Doors",
    description: "Modern aluminium doors designed for style and security.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    slug: "aluminium-doors",
  },
  {
    title: "Aluminium Partitions",
    description: "Modern office and interior partition solutions.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    slug: "aluminium-partitions",
  },
  {
    title: "Sliding Windows",
    description: "Functional and space-efficient sliding window systems.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    slug: "sliding-windows",
  },
  {
    title: "Aluminium Grills",
    description: "Strong and decorative aluminium grill solutions for security.",
    image: "https://images.unsplash.com/photo-1600607687644-c7f34b5e7a84?w=600&q=80",
    slug: "aluminium-grills",
  },
  {
    title: "Powder Coating Finish",
    description: "Professional powder coating for durability and aesthetics.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    slug: "powder-coating",
  },
  {
    title: "Aluminium Facades",
    description: "Architectural aluminium facade solutions for modern buildings.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    slug: "aluminium-facades",
  },
  {
    title: "Custom Aluminium Work",
    description: "Customized fabrication based on project requirements.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    slug: "custom-aluminium",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative bg-surface py-20 md:py-32">
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
            Our Products
            <span className="h-px w-8 bg-brand-yellow" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Our Alluminium Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-graphite-light">
            Comprehensive range of premium aluminium products for every requirement
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                  <ArrowUpRight className="h-4 w-4 text-navy" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-navy transition-colors group-hover:text-brand-yellow-dark">
                  {product.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite-light">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-yellow-dark opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Explore
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
