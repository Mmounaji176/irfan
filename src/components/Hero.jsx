import { motion } from "framer-motion";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="hero-pattern relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-irfane-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-irfane-yellow text-irfane-dark font-bold px-6 py-2 rounded-full mb-6 shadow-lg"
        >
          🎓 School Admission 2024 / 2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
        >
          Etablissement{" "}
          <span className="text-irfane-yellow">El Irfane</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xl md:text-2xl font-light mb-3"
        >
          Maternelle · Primaire · Collège · Lycée
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          Notre projet éducatif novateur est basé sur le trilinguisme et la
          qualité de nos programmes d'enseignement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#admissions"
            className="bg-irfane-orange hover:bg-orange-600 px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-2 justify-center transition transform hover:scale-105"
          >
            S'inscrire <FaArrowRight />
          </a>
          <a
            href="#apropos"
            className="bg-white/15 backdrop-blur border-2 border-white hover:bg-white hover:text-irfane-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 justify-center transition"
          >
            <FaInfoCircle /> En savoir plus
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-arabic text-3xl mt-12 text-irfane-yellow font-bold"
          dir="rtl"
        >
          التسجيل مفتوح
        </motion.p>
      </div>
    </section>
  );
}
