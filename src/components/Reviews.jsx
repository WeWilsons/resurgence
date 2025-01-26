import React from "react";
import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[color:#2C3E50]">
          Customer Feedback & Gallery
        </h2>
        <div className="w-full h-64 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center">
          <span className="text-gray-700">[Placeholder for Reviews]</span>
        </div>
        <p className="text-gray-700 text-center">
          Real stories from our satisfied clients, and snapshots of our work in
          action.
        </p>
      </motion.div>
    </section>
  );
}
