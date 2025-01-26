import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-[color:#ffcf00]">
          Arrow Asphalt Striping
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#hero" className="hover:text-[color:#ffcf00] transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[color:#ffcf00] transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="hover:text-[color:#ffcf00] transition"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#quote"
                className="hover:text-[color:#ffcf00] transition"
              >
                Request a Quote
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
