import React from "react";
import { motion } from "framer-motion";

export default function QuoteForm() {
  return (
    <section id="quote" className="py-12 bg-[color:#ffcf00]/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-[color:#2C3E50]">
          Request a Quote
        </h2>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[color:#ffcf00]"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[color:#ffcf00]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[color:#ffcf00]"
          />
          <textarea
            placeholder="Project Details"
            rows={4}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[color:#ffcf00]"
          />
          <button
            type="submit"
            className="bg-[color:#ffcf00] text-black font-bold py-2 px-4 rounded hover:bg-[color:#ffcf00]/90 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
}
