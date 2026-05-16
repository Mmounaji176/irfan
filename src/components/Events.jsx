import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaBullhorn,
  FaFilter,
} from "react-icons/fa";

const categories = ["Tous", "Admissions", "Académique", "Culturel", "Sport", "Parents", "Sortie"];

const formatDate = (iso) => {
  const d = new Date(iso);
  const adjusted = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  return adjusted.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const categoryColor = {
  Admissions: "bg-irfane-orange",
  Académique: "bg-irfane-green",
  Culturel: "bg-purple-600",
  Sport: "bg-blue-600",
  Parents: "bg-pink-600",
  Sortie: "bg-irfane-yellow text-irfane-dark",
};

export default function Events() {
  const [filter, setFilter] = useState("Tous");
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = filter === "Tous"
      ? "/api/events"
      : `/api/events?category=${encodeURIComponent(filter)}`;
    fetch(url)
      .then((r) => r.json())
      .then(setEvents)
      .catch(console.error);
  }, [filter]);

  useEffect(() => {
    setLoading(true);
    fetch("/api/announcements")
      .then((r) => r.json())
      .then(setAnnouncements)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const visible = events;

  return (
    <main className="pt-28 pb-20 bg-gradient-to-b from-white via-orange-50 to-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-irfane-orange/10 text-irfane-orange font-semibold px-4 py-1 rounded-full mb-4">
            <FaCalendarAlt /> Agenda El Irfane
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-irfane-dark">
            Événements & Annonces
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Retrouvez ici tous les événements, activités et annonces
            officielles de l'établissement El Irfane.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12 border-l-4 border-irfane-orange"
        >
          <div className="flex items-center gap-2 text-irfane-dark font-bold text-xl mb-4">
            <FaBullhorn className="text-irfane-orange" /> Annonces récentes
          </div>
          <ul className="divide-y divide-gray-100">
            {announcements.map((a) => (
              <li key={a.id} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <p className="font-semibold text-gray-800">{a.title}</p>
                  <p className="text-sm text-gray-600">{a.text}</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {formatDate(a.date)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex items-center gap-2 flex-wrap mb-8">
          <span className="flex items-center gap-2 text-gray-600 font-medium mr-2">
            <FaFilter /> Filtrer :
          </span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition border ${
                filter === c
                  ? "bg-irfane-dark text-white border-irfane-dark"
                  : "bg-white text-gray-700 border-gray-200 hover:border-irfane-orange"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((ev, i) => (
            <motion.article
              key={ev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <span
                  className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow ${
                    categoryColor[ev.category] || "bg-gray-700"
                  }`}
                >
                  {ev.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-irfane-dark mb-2">
                  {ev.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {ev.description}
                </p>
                <div className="space-y-1.5 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-irfane-orange" />
                    <span className="capitalize">{formatDate(ev.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-irfane-orange" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-irfane-orange" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            Aucun événement pour cette catégorie.
          </p>
        )}
      </section>
    </main>
  );
}
