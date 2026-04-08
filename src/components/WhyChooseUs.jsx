import { motion } from "framer-motion";
import { FaLanguage, FaBookOpen, FaFutbol, FaHandsHelping } from "react-icons/fa";

const features = [
  {
    icon: <FaLanguage />,
    title: "Trilinguisme",
    desc: "Enseignement en Français, Arabe et Anglais dès le plus jeune âge.",
    color: "from-irfane-dark to-irfane-green",
  },
  {
    icon: <FaBookOpen />,
    title: "Programmes académiques",
    desc: "Des programmes innovants conformes aux standards internationaux.",
    color: "from-irfane-orange to-irfane-yellow",
  },
  {
    icon: <FaFutbol />,
    title: "Activités parascolaires",
    desc: "Sport, art, musique et clubs pour développer chaque talent.",
    color: "from-irfane-green to-irfane-light",
  },
  {
    icon: <FaHandsHelping />,
    title: "Soutien aux élèves",
    desc: "Accompagnement personnalisé et suivi pédagogique continu.",
    color: "from-irfane-yellow to-irfane-orange",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="apropos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-irfane-orange font-semibold uppercase tracking-wider">
            Pourquoi nous choisir ?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-irfane-dark mt-2">
            Notre engagement, votre réussite
          </h2>
          <div className="w-24 h-1 bg-irfane-orange mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${f.color} text-white flex items-center justify-center text-3xl mb-5 shadow-lg group-hover:scale-110 transition`}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-irfane-dark mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
