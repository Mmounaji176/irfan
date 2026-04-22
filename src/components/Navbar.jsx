import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#apropos", label: "À propos" },
  { href: "/#niveaux", label: "Niveaux" },
  { href: "/events", label: "Événements" },
  { href: "/#admissions", label: "Admissions" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-irfane-dark to-irfane-green flex items-center justify-center text-white shadow-md">
            <FaGraduationCap size={20} />
          </div>
          <div className="leading-tight">
            <div
              className={`font-extrabold text-lg ${
                scrolled ? "text-irfane-dark" : "text-white"
              }`}
            >
              EL IRFANE
            </div>
            <div
              className={`text-[10px] uppercase tracking-wider ${
                scrolled ? "text-gray-500" : "text-white/80"
              }`}
            >
              Établissement scolaire
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`font-medium hover:text-irfane-orange transition ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#admissions"
              className="bg-irfane-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition"
            >
              S'inscrire
            </Link>
          </li>
        </ul>

        <button
          className={`md:hidden ${scrolled ? "text-irfane-dark" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg mt-2 mx-4 rounded-xl py-4 px-6 space-y-3"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium hover:text-irfane-dark"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#admissions"
              onClick={() => setOpen(false)}
              className="block text-center bg-irfane-orange text-white px-5 py-2 rounded-full font-semibold"
            >
              S'inscrire
            </Link>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
}
