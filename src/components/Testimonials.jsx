import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const items = [
  {
    name: "Fatima Z.",
    role: "Maman de Yassir, Primaire",
    text: "Une école exceptionnelle ! Mon fils a fait d'énormes progrès en français et en anglais. L'équipe pédagogique est très attentive.",
    rating: 5,
  },
  {
    name: "Karim B.",
    role: "Papa de Lina, Collège",
    text: "Le suivi personnalisé fait toute la différence. Ma fille s'épanouit pleinement à El Irfane grâce aux nombreuses activités proposées.",
    rating: 5,
  },
  {
    name: "Sara M.",
    role: "Maman de Adam, Maternelle",
    text: "Un environnement chaleureux et sécurisant. Mon petit court à l'école chaque matin avec le sourire. Je recommande vivement !",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-irfane-orange font-semibold uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-irfane-dark mt-2">
            Ce que disent les parents
          </h2>
          <div className="w-24 h-1 bg-irfane-orange mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
            >
              <FaQuoteLeft className="text-irfane-light text-4xl mb-4" />
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FaStar key={j} className="text-irfane-yellow" />
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="font-bold text-irfane-dark">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
