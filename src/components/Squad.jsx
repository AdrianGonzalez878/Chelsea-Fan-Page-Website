import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

const players = [
  // Porteros
  {
    name: 'Robert Sánchez',
    position: 'Portero',
    image: '/assets/players/robert-sanchez.jpg',
  },
  {
    name: 'Marcus Bettinelli',
    position: 'Portero',
    image: '/assets/players/marcus-bettinelli.jpg',
  },
  {
    name: 'Filip Jørgensen',
    position: 'Portero',
    image: '/assets/players/filip-jorgensen.jpg',
  },
  {
    name: 'Lucas Bergström',
    position: 'Portero',
    image: '/assets/players/lucas-bergstrom.jpg',
  },
  // Defensores
  {
    name: 'Reece James',
    position: 'Defensor',
    image: '/assets/players/reece-james.jpg',
  },
  {
    name: 'Marc Cucurella',
    position: 'Defensor',
    image: '/assets/players/marc-cucurella.jpg',
  },
  {
    name: 'Benoît Badiashile',
    position: 'Defensor',
    image: '/assets/players/benoit-badiashile.jpg',
  },
  {
    name: 'Trevoh Chalobah',
    position: 'Defensor',
    image: '/assets/players/trevoh-chalobah.jpg',
  },
  {
    name: 'Levi Colwill',
    position: 'Defensor',
    image: '/assets/players/levi-colwill.jpg',
  },
  {
    name: 'Malo Gusto',
    position: 'Defensor',
    image: '/assets/players/malo-gusto.jpg',
  },
  {
    name: 'Wesley Fofana',
    position: 'Defensor',
    image: '/assets/players/wesley-fofana.jpg',
  },
  {
    name: 'Josh Acheampong',
    position: 'Defensor',
    image: '/assets/players/josh-acheampong.jpg',
  },
  {
    name: 'Tosin Adarabioyo',
    position: 'Defensor',
    image: '/assets/players/tosin-adarabioyo.jpg',
  },
  // Centrocampistas
  {
    name: 'Enzo Fernández',
    position: 'Centrocampista',
    image: '/assets/players/enzo-fernandez.jpg',
  },
  {
    name: 'Mykhailo Mudryk',
    position: 'Centrocampista',
    image: '/assets/players/mykhailo-mudryk.jpg',
  },
  {
    name: 'Cole Palmer',
    position: 'Centrocampista',
    image: '/assets/players/cole-palmer.jpg',
  },
  {
    name: 'Moisés Caicedo',
    position: 'Centrocampista',
    image: '/assets/players/moises-caicedo.jpg',
  },
  {
    name: 'Roméo Lavia',
    position: 'Centrocampista',
    image: '/assets/players/romeo-lavia.jpg',
  },
  {
    name: 'Omari Kellyman',
    position: 'Centrocampista',
    image: '/assets/players/omari-kellyman.jpg',
  },
  {
    name: 'Kiernan Dewsbury-Hall',
    position: 'Centrocampista',
    image: '/assets/players/kiernan-dewsbury-hall.jpg',
  },
  {
    name: 'Mathis Amougou',
    position: 'Centrocampista',
    image: '/assets/players/mathis-amougou.jpg',
  },
  // Delanteros
  {
    name: 'Noni Madueke',
    position: 'Delantero',
    image: '/assets/players/noni-madueke.jpg',
  },
  {
    name: 'Nicolas Jackson',
    position: 'Delantero',
    image: '/assets/players/nicolas-jackson.jpg',
  },
  {
    name: 'Christopher Nkunku',
    position: 'Delantero',
    image: '/assets/players/christopher-nkunku.jpg',
  },
  {
    name: 'Tyrique George',
    position: 'Delantero',
    image: '/assets/players/tyrique-george.jpg',
  },
  {
    name: 'David Datro Fofana',
    position: 'Delantero',
    image: '/assets/players/david-datro-fofana.jpg',
  },
  {
    name: 'Marc Guiu',
    position: 'Delantero',
    image: '/assets/players/marc-guiu.jpg',
  },
  {
    name: 'Pedro Neto',
    position: 'Delantero',
    image: '/assets/players/pedro-neto.jpg',
  },
  {
    name: 'Jadon Sancho',
    position: 'Delantero',
    image: '/assets/players/jadon-sancho.jpg',
  },
  
];

const Squad = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredPlayers =
    filter === 'Todos'
      ? players
      : players.filter((player) => player.position === filter);

  const filterOptions = ['Todos', 'Portero', 'Defensor', 'Centrocampista', 'Delantero'];

  return (
    <section className="p-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Plantilla del Chelsea FC</h2>

      {/* Botones de filtro */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              filter === option
                ? 'bg-blue-700 text-white'
                : 'bg-white text-blue-700 border border-blue-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Grid de jugadores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPlayers.map((player, index) => (
          <InView key={index} triggerOnce threshold={0.3}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`bg-white rounded shadow p-4 text-center transition-all duration-1000 transform ${
                  inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-48 h-48 mx-auto mb-4 object-cover rounded-full"
                />
                <h3 className="text-xl font-semibold">{player.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{player.position}</p>
              </div>
            )}
          </InView>
        ))}
      </div>
    </section>
  );
};

export default Squad;
