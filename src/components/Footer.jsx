import { FaGraduationCap, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-irfane-dark to-gray-900 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-irfane-orange flex items-center justify-center">
              <FaGraduationCap />
            </div>
            <div className="font-extrabold text-xl">EL IRFANE</div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Établissement scolaire privé proposant un enseignement trilingue
            d'excellence de la maternelle au lycée.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-irfane-yellow">Liens rapides</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#accueil" className="hover:text-irfane-yellow">
                Accueil
              </a>
            </li>
            <li>
              <a href="#apropos" className="hover:text-irfane-yellow">
                À propos
              </a>
            </li>
            <li>
              <a href="#niveaux" className="hover:text-irfane-yellow">
                Niveaux
              </a>
            </li>
            <li>
              <a href="#admissions" className="hover:text-irfane-yellow">
                Admissions
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-irfane-yellow">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-irfane-yellow">Contact</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>📞 08 08 64 27 48</li>
            <li>📱 06 78 91 63 56</li>
            <li>📍 Maroc</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-irfane-yellow">Suivez-nous</h4>
          <div className="flex gap-3">
            {[FaFacebook, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="https://www.instagram.com/ey__aaaaaaah/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-irfane-orange flex items-center justify-center transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Etablissement El Irfane. Tous droits
        réservés.
      </div>
    </footer>
  );
}
