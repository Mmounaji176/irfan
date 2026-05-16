CREATE DATABASE IF NOT EXISTS irfane_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE irfane_db;

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(200),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(50),
  location VARCHAR(200),
  category VARCHAR(50) NOT NULL,
  description TEXT,
  image VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS announcements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  text TEXT NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed events
INSERT INTO events (title, date, time, location, category, description, image) VALUES
('Journee portes ouvertes', '2026-04-10', '09:00 - 17:00', 'Campus El Irfane', 'Admissions', 'Venez decouvrir notre ecole, rencontrer nos enseignants et visiter nos installations.', '/admissions.jpg'),
('Competition scientifique inter-ecoles', '2026-04-22', '10:00 - 16:00', 'Salle polyvalente', 'Academique', 'Nos elèves de collège et lycee participent au concours regional de sciences.', '/academique.jpg'),
('Spectacle de fin d''annee', '2026-04-18', '18:30', 'Auditorium El Irfane', 'Culturel', 'Danse, theâtre et musique : nos elèves montent sur scène pour celebrer l''annee.', '/culturel.jpg'),
('Sortie pedagogique - Rabat', '2026-04-15', '08:30 - 16:00', 'Rabat', 'Sortie', 'Les classes du primaire decouvrent le patrimoine culturel marocain.', '/sortie.jpg');

-- Seed announcements
INSERT INTO announcements (title, text, date) VALUES
('Inscriptions 2026/2027 ouvertes', 'Les inscriptions pour l''annee scolaire prochaine sont officiellement ouvertes. Places limitees.', '2026-04-20'),
('Vacances de printemps', 'L''ecole sera fermee du 27 avril au 3 mai. Reprise des cours le lundi 4 mai.', '2026-04-15'),
('Nouveau club de robotique', 'Un club de robotique ouvre ses portes aux elèves du collège. Inscriptions au bureau.', '2026-04-08');
