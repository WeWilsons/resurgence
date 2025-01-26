import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-12 bg-[color:#ffcf00]/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[color:#2C3E50]">
          Types of Lines We Offer
        </h2>
        <div className="w-full h-64 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center">
          <span className="text-gray-700">[Placeholder for Carousel]</span>
        </div>
        <p className="text-gray-700 text-center">
          We stripe parking lots, roads, and more – ensuring professional-grade
          markings every time.
        </p>
      </motion.div>
    </section>
  );
}
