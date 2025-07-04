import React from 'react';
import { useInView } from 'react-intersection-observer';

const legends = [
  {
    name: 'Frank Lampard',
    image: '/assets/legends/frank-lampard.jpg',
    description: 'Máximo goleador del club con 211 goles en 648 partidos. Ganó 3 Premier Leagues, 4 FA Cups, 2 Copas de la Liga, la Champions League en 2012 y la Europa League en 2013.',
    stats: {
      partidos: 648,
      goles: 211,
      asistencias: 150,
      titulos: ['Premier League (2005, 2006, 2010)', 'FA Cup (2007, 2009, 2010, 2012)', 'League Cup (2005, 2007)', 'Champions League (2012)', 'Europa League (2013)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'Didier Drogba',
    image: '/assets/legends/didier-drogba.jpg',
    description: 'Delantero decisivo con 164 goles en 381 partidos. Ganó 4 Premier Leagues, 4 FA Cups, 3 Copas de la Liga y la Champions League en 2012.',
    stats: {
      partidos: 381,
      goles: 164,
      asistencias: 86,
      titulos: ['Premier League (2005, 2006, 2010, 2015)', 'FA Cup (2007, 2009, 2010, 2012)', 'League Cup (2005, 2007, 2015)', 'Champions League (2012)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'John Terry',
    image: '/assets/legends/john-terry.jpg',
    description: 'Capitán legendario con 717 partidos y 67 goles. Ganó 5 Premier Leagues, 5 FA Cups, 3 Copas de la Liga, la Champions League en 2012 y la Europa League en 2013.',
    stats: {
      partidos: 717,
      goles: 67,
      asistencias: 29,
      titulos: ['Premier League (2005, 2006, 2010, 2015, 2017)', 'FA Cup (2000, 2007, 2009, 2010, 2012)', 'League Cup (2005, 2007, 2015)', 'Champions League (2012)', 'Europa League (2013)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'Petr Čech',
    image: '/assets/legends/petr-cech.jpg',
    description: 'Portero excepcional con 494 partidos y 228 porterías a cero. Ganó 4 Premier Leagues, 4 FA Cups, 3 Copas de la Liga, la Champions League en 2012 y la Europa League en 2013.',
    stats: {
      partidos: 494,
      goles: 0,
      asistencias: 0,
      titulos: ['Premier League (2005, 2006, 2010, 2015)', 'FA Cup (2007, 2009, 2010, 2012)', 'League Cup (2005, 2007, 2015)', 'Champions League (2012)', 'Europa League (2013)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'Gianfranco Zola',
    image: '/assets/legends/gianfranco-zola.jpg',
    description: 'Delantero creativo con 80 goles en 312 partidos. Ganó 2 FA Cups, la Copa de la Liga, la Supercopa de la UEFA y la Recopa de Europa.',
    stats: {
      partidos: 312,
      goles: 80,
      asistencias: 90,
      titulos: ['FA Cup (1997, 2000)', 'League Cup (1998)', 'UEFA Super Cup (1998)', 'UEFA Cup Winners\' Cup (1998)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'Ron Harris',
    image: '/assets/legends/ron-harris.jpg',
    description: 'Defensor con más apariciones en la historia del club (795). Ganó la FA Cup en 1970 y la Recopa de Europa en 1971.',
    stats: {
      partidos: 795,
      goles: 14,
      asistencias: 20,
      titulos: ['FA Cup (1970)', 'UEFA Cup Winners\' Cup (1971)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'Peter Osgood',
    image: '/assets/legends/peter-osgood.jpg',
    description: 'Delantero icónico con 150 goles en 380 partidos. Ganó la FA Cup en 1970 y la Recopa de Europa en 1971.',
    stats: {
      partidos: 380,
      goles: 150,
      asistencias: 50,
      titulos: ['FA Cup (1970)', 'UEFA Cup Winners\' Cup (1971)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'Peter Bonetti',
    image: '/assets/legends/peter-bonetti.jpg',
    description: 'Portero con 729 partidos y 208 porterías a cero. Ganó la FA Cup en 1970 y la Recopa de Europa en 1971.',
    stats: {
      partidos: 729,
      goles: 0,
      asistencias: 0,
      titulos: ['FA Cup (1970)', 'UEFA Cup Winners\' Cup (1971)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'Dennis Wise',
    image: '/assets/legends/dennis-wise.jpg',
    description: 'Centrocampista con 445 partidos y 76 goles. Ganó 2 FA Cups, la Copa de la Liga, la Supercopa de la UEFA y la Recopa de Europa.',
    stats: {
      partidos: 445,
      goles: 76,
      asistencias: 60,
      titulos: ['FA Cup (1997, 2000)', 'League Cup (1998)', 'UEFA Super Cup (1998)', 'UEFA Cup Winners\' Cup (1998)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'Ashley Cole',
    image: '/assets/legends/ashley-cole.jpg',
    description: 'Lateral izquierdo con 338 partidos. Ganó la Premier League en 2010, 4 FA Cups, la Champions League en 2012 y la Europa League en 2013.',
    stats: {
      partidos: 338,
      goles: 7,
      asistencias: 30,
      titulos: ['Premier League (2010)', 'FA Cup (2007, 2009, 2010, 2012)', 'Champions League (2012)', 'Europa League (2013)'],
    },
    video: 'https://www.youtube.com/embed/1gFmrUs5-qU',
  },
  {
    name: 'Eden Hazard',
    image: '/assets/legends/eden-hazard.jpg',
    description: 'Extremo creativo con 110 goles y 85 asistencias en 352 partidos con Chelsea. Ganó 2 Premier Leagues, 2 Europa Leagues, 1 FA Cup y 1 League Cup.',
    stats: {
      partidos: 352,
      goles: 110,
      asistencias: 85,
      titulos: ['Premier League (2015, 2017)', 'Europa League (2013, 2019)', 'FA Cup (2012)', 'League Cup (2015)'],
    },
    video: 'https://www.youtube.com/embed/VIDEO_ID_HAZARD',
  },
  {
    name: 'N’Golo Kanté',
    image: '/assets/legends/ngolo-kante.jpg',
    description: 'Mediocentro defensivo clave con 11 goles y 13 asistencias en 190 partidos de Premier League. Ganó Premier League, Champions League, Europa League, FA Cup y Club World Cup.',
    stats: {
      partidos: 190,
      goles: 11,
      asistencias: 13,
      titulos: ['Premier League (2017)', 'FA Cup (2018)', 'Europa League (2019)', 'Champions League (2021)', 'Club World Cup (2021)'],
    },
    video: 'https://www.youtube.com/embed/VIDEO_ID_KANTE',
  },
  {
    name: 'César Azpilicueta',
    image: '/assets/legends/cesar-azpilicueta.jpg',
    description: 'Defensor versátil con 10 goles, 35 asistencias y 115 porterías a cero en 349 partidos de Premier League con Chelsea.',
    stats: {
      partidos: 349,
      goles: 10,
      asistencias: 35,
      titulos: ['Premier League (2010)', 'FA Cups (2007, 2009, 2010, 2012)', 'Champions League (2012)', 'Europa League (2013)'],
    },
    video: 'https://www.youtube.com/embed/VIDEO_ID_AZPI',
  },
];

const Legends = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="p-4 bg-gray-100" ref={ref}>
      <h2 className="text-3xl font-bold text-center mb-6">Leyendas del Chelsea FC</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {legends.map((legend, index) => (
          <div
            key={index}
            className={`bg-white rounded shadow p-4 text-center transform transition duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src={legend.image}
              alt={legend.name}
              className="w-48 h-48 mx-auto mb-4 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold">{legend.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{legend.description}</p>
            <div className="mt-4 text-left">
              <p><strong>Partidos:</strong> {legend.stats.partidos}</p>
              <p><strong>Goles:</strong> {legend.stats.goles}</p>
              <p><strong>Asistencias:</strong> {legend.stats.asistencias}</p>
              <p><strong>Títulos:</strong></p>
              <ul className="list-disc list-inside">
                {legend.stats.titulos.map((titulo, idx) => (
                  <li key={idx}>{titulo}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
        
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Legends;
