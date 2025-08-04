"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-400">MICHELE</div>

          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Services", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 px-3 py-2 min-h-[44px] min-w-[44px] ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              )
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["About", "Skills", "Services", "Projects", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-blue-400 transition-colors w-full min-h-[44px]"
                >
                  {item.toUpperCase()}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
