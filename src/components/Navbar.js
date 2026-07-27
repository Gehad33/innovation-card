import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "الرئيسية", href: "#hero" },
    { label: "عن الحفل", href: "#about" },
    { label: "العروسان", href: "#couple" },
    { label: "قصتنا", href: "#story" },
    { label: "البرنامج", href: "#program" },
    { label: "تأكيد الحضور", href: "#rsvp" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a
          href="#hero"
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className={scrolled ? "text-gray-800" : "text-white"}>
            One<span className="text-[#c9a84c]">Tap</span>
          </span>
          <span className={`block text-[10px] tracking-[0.3em] ${scrolled ? "text-gray-400" : "text-white/50"}`}>
            Event
          </span>
        </motion.a>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors ${
                scrolled ? "text-gray-600 hover:text-[#c9a84c]" : "text-white/70 hover:text-white"
              }`}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <button
          className={`md:hidden text-2xl ${scrolled ? "text-gray-600" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg py-4 px-4"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-gray-600 hover:text-[#c9a84c] transition-colors border-b border-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;