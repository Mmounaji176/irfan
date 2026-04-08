import { motion } from "framer-motion";
import { FaBaby, FaChild, FaUserGraduate, FaUniversity } from "react-icons/fa";

const niveaux = [
  {
    icon: <FaBaby />,
    title: "Maternelle",
    age: "3 - 5 ans",
    desc: "Éveil, jeu et premières découvertes dans un environnement chaleureux.",
  },
  {
    icon: <FaChild />,
    title: "Primaire",
    age: "6 - 11 ans",
    desc: "Solides fondamentaux et apprentissage trilingue dès la première année.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Collège",
    age: "12 - 14 ans",
    desc: "Approfondissement des connaissances et orientation pédagogique.",
  },
  {
    icon: <FaUniversity />,
    title: "Lycée",
    age: "15 - 18 ans",
    desc: "Préparation au baccalauréat et aux études supérieures.",
  },
];

export default function Niveaux() {
  return (
    <section id="niveaux" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-irfane-orange font-semibold uppercase tracking-wider">
            Nos niveaux scolaires
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-irfane-dark mt-2">
            De la Maternelle au Lycée
          </h2>
          <div className="w-24 h-1 bg-irfane-orange mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {niveaux.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-gradient-to-br from-irfane-dark to-irfane-green text-white rounded-2xl p-8 shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="text-5xl text-irfane-yellow mb-4">{n.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{n.title}</h3>
                <div className="text-irfane-yellow text-sm font-semibold mb-3">
                  {n.age}
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{n.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
