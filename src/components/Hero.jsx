import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroBg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-24 pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-purple-800/60 to-orange-600/50" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-orange-500 text-white font-bold px-6 py-2 rounded-full mb-6 shadow-lg"
        >
          🎓 School Admission 2025 / 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
        >
          Etablissement{" "}
          <span className="text-orange-400">El Irfane</span>
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
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-2 justify-center transition transform hover:scale-105"
          >
            S'inscrire <FaArrowRight />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-arabic text-3xl mt-12 text-yellow-400 font-bold"
          dir="rtl"
        >
          التسجيل مفتوح
        </motion.p>
      </div>
    </section>
  );
}
