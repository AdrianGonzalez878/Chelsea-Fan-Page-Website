import React from 'react';
import { InView } from 'react-intersection-observer';

const derbies = [
  {
    name: 'Arsenal',
    image: '/assets/derbies/arsenal.jpg',
    description:
      'El derbi entre Chelsea y Arsenal es uno de los más emblemáticos de Londres. Desde su primer enfrentamiento en 1907, ambos clubes han protagonizado intensos duelos, incluyendo finales de FA Cup y Community Shield.',
    stats: {
      totalMatches: 189,
      chelseaWins: 60,
      arsenalWins: 74,
      draws: 55,
    },
    video: 'https://www.youtube.com/watch?v=VIDEO_ID_ARSENAL',
  },
  {
    name: 'Tottenham Hotspur',
    image: '/assets/derbies/tottenham.jpg',
    description:
      'La rivalidad con Tottenham Hotspur es una de las más feroces para el Chelsea. Aunque comenzó como un "derbi amistoso", desde la década de 1960 se ha intensificado, con partidos cargados de tensión y enfrentamientos clave por puestos europeos y títulos.',
    stats: {
      totalMatches: 67,
      chelseaWins: 39,
      tottenhamWins: 11,
      draws: 17,
    },
    video: 'https://www.youtube.com/watch?v=VIDEO_ID_TOTTENHAM',
  },
  {
    name: 'Leeds United',
    image: '/assets/derbies/leeds.jpg',
    description:
      'El enfrentamiento con Leeds United se remonta a los años 60 y 70, destacando la final de la FA Cup de 1970, considerada una de las más físicas en la historia del fútbol inglés.',
    stats: {
      totalMatches: 25,
      chelseaWins: 11,
      leedsWins: 7,
      draws: 7,
    },
    video: 'https://www.youtube.com/watch?v=VIDEO_ID_LEEDS',
  },
  {
    name: 'Fulham',
    image: '/assets/derbies/fulham.jpg',
    description:
      'El derbi del oeste de Londres entre Chelsea y Fulham es una rivalidad local basada en la proximidad geográfica.',
    stats: {
      totalMatches: 85,
      chelseaWins: 49,
      fulhamWins: 10,
      draws: 26,
    },
    video: 'https://www.youtube.com/watch?v=VIDEO_ID_FULHAM',
  },
  {
    name: 'Queens Park Rangers (QPR)',
    image: '/assets/derbies/qpr.jpg',
    description:
      'Chelsea y QPR comparten una rivalidad histórica en el oeste de Londres. Aunque actualmente QPR no compite en la Premier League, los enfrentamientos pasados estuvieron marcados por la intensidad y la pasión de ambas aficiones.',
    stats: {
      totalMatches: 41,
      chelseaWins: 17,
      qprWins: 10,
      draws: 14,
    },
    video: 'https://www.youtube.com/watch?v=VIDEO_ID_QPR',
  },
  {
    name: 'West Ham United',
    image: '/assets/derbies/west-ham.jpg',
    description:
      'La rivalidad con West Ham United ha crecido en los últimos años, especialmente debido a la competencia por posiciones en la liga y encuentros memorables en competiciones nacionales.',
    stats: {
      totalMatches: 124,
      chelseaWins: 57,
      westHamWins: 44,
      draws: 23,
    },
    video: 'https://www.youtube.com/watch?v=VIDEO_ID_WESTHAM',
  },
  {
    name: 'Liverpool',
    image: '/assets/derbies/liverpool.jpg',
    description:
      'Aunque no es un derbi local, la rivalidad con Liverpool se ha intensificado desde principios de los 2000, con enfrentamientos frecuentes en la Champions League, FA Cup y Premier League.',
    stats: {
      totalMatches: 199,
      chelseaWins: 66,
      liverpoolWins: 87,
      draws: 46,
    },
    video: 'https://www.youtube.com/watch?v=VIDEO_ID_LIVERPOOL',
  },
];

const Derbies = () => {
  return (
    <section className="p-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Rivalidades del Chelsea FC</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {derbies.map((derby, index) => (
          <InView key={index} triggerOnce threshold={0.5}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`bg-white rounded shadow p-4 text-center transform transition duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <img
                  src={derby.image}
                  alt={derby.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold">{derby.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{derby.description}</p>
                <div className="mt-4 text-sm text-gray-700">
                  <p><strong>Partidos totales:</strong> {derby.stats.totalMatches}</p>
                  <p><strong>Victorias de Chelsea:</strong> {derby.stats.chelseaWins}</p>
                  <p><strong>Victorias de {derby.name}:</strong> {Object.values(derby.stats)[2]}</p>
                  <p><strong>Empates:</strong> {derby.stats.draws}</p>
                </div>
                <a
                  href={derby.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  Ver video destacado
                </a>
              </div>
            )}
          </InView>
        ))}
      </div>
    </section>
  );
};

export default Derbies;
