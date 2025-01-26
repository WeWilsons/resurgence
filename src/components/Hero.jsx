import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder-hero-image.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Arrow Asphalt Striping
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6 drop-shadow-lg">
          Let us help you make a lasting impression with clean, precise, and
          professional asphalt striping.
        </p>
      </motion.div>
    </section>
  );
}
