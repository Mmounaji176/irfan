import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";

const criteres = [
  "Programmes académiques",
  "Ressources pédagogiques",
  "Activités parascolaires",
  "Soutien aux élèves",
];

export default function Admissions() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    level: "Maternelle",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", level: "Maternelle", message: "" });
  };

  return (
    <section
      id="admissions"
      className="py-24 bg-gradient-to-br from-irfane-dark via-irfane-green to-irfane-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-irfane-yellow rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Admissions 2025 / 2026
          </h2>
          <p className="text-white/80 mt-3">
            Rejoignez notre famille El Irfane dès aujourd'hui
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold mb-6 text-irfane-yellow">
              Nos critères
            </h3>
            <ul className="space-y-4">
              {criteres.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20"
                >
                  <FaCheckCircle className="text-irfane-yellow text-xl flex-shrink-0" />
                  <span className="font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="bg-white rounded-2xl p-8 shadow-2xl space-y-4"
          >
            <h3 className="text-2xl font-bold text-irfane-dark mb-2">
              Demande d'inscription
            </h3>
            <input
              required
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Nom complet"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-irfane-green"
            />
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-irfane-green"
            />
            <input
              required
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Téléphone"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-irfane-green"
            />
            <select
              name="level"
              value={form.level}
              onChange={onChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-irfane-green"
            >
              <option>Maternelle</option>
              <option>Primaire</option>
              <option>Collège</option>
              <option>Lycée</option>
            </select>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={onChange}
              placeholder="Message"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-irfane-green resize-none"
            />
            <button
              type="submit"
              className="w-full bg-irfane-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-lg"
            >
              <FaPaperPlane /> Envoyer la demande
            </button>
            {sent && (
              <p className="text-green-600 text-center font-medium">
                ✓ Demande envoyée avec succès !
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
