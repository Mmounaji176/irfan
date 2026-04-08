import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-irfane-orange font-semibold uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-irfane-dark mt-2">
            Contactez-nous
          </h2>
          <div className="w-24 h-1 bg-irfane-orange mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <a
              href="tel:0808642748"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-irfane-dark to-irfane-green text-white rounded-xl shadow-lg hover:scale-[1.02] transition"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                <FaPhoneAlt />
              </div>
              <div>
                <div className="text-sm opacity-90">Appelez-nous</div>
                <div className="font-bold text-xl">08 08 64 27 48</div>
              </div>
            </a>

            <a
              href="tel:0678916356"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-irfane-orange to-irfane-yellow text-white rounded-xl shadow-lg hover:scale-[1.02] transition"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                <FaPhoneAlt />
              </div>
              <div>
                <div className="text-sm opacity-90">Mobile</div>
                <div className="font-bold text-xl">06 78 91 63 56</div>
              </div>
            </a>

            <a
              href="https://wa.me/212678916356"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 bg-green-500 text-white rounded-xl shadow-lg hover:scale-[1.02] transition"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                <FaWhatsapp />
              </div>
              <div>
                <div className="text-sm opacity-90">WhatsApp</div>
                <div className="font-bold text-xl">Discuter maintenant</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl">
              <div className="w-14 h-14 bg-irfane-dark text-white rounded-full flex items-center justify-center text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <div className="text-sm text-gray-500">Adresse</div>
                <div className="font-bold text-irfane-dark">
                  Etablissement El Irfane, Maroc
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200">
              <iframe
                title="map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-7.65%2C33.55%2C-7.55%2C33.62&layer=mapnik"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message envoyé !");
            }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-4 h-fit"
          >
            <h3 className="text-2xl font-bold text-irfane-dark">
              Envoyez-nous un message
            </h3>
            <input
              required
              placeholder="Votre nom"
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:outline-none focus:border-irfane-green"
            />
            <input
              required
              type="email"
              placeholder="Votre email"
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:outline-none focus:border-irfane-green"
            />
            <input
              placeholder="Sujet"
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:outline-none focus:border-irfane-green"
            />
            <textarea
              required
              rows="5"
              placeholder="Votre message"
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:outline-none focus:border-irfane-green resize-none"
            />
            <button
              type="submit"
              className="w-full bg-irfane-dark hover:bg-irfane-green text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-lg"
            >
              <FaEnvelope /> Envoyer
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
