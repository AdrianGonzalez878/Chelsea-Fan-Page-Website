import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

const trophies = [
  {
    name: 'Premier League',
    image: '/assets/trophies/premier-league.jpg',
    count: 6,
    years: ['1954–55', '2004–05', '2005–06', '2009–10', '2014–15', '2016–17'],
    type: 'Nacional',
  },
  {
    name: 'FA Cup',
    image: '/assets/trophies/fa-cup.jpg',
    count: 8,
    years: ['1969–70', '1996–97', '1999–2000', '2006–07', '2008–09', '2009–10', '2011–12', '2017–18'],
    type: 'Nacional',
  },
  {
    name: 'EFL Cup',
    image: '/assets/trophies/efl-cup.jpg',
    count: 5,
    years: ['1964–65', '1997–98', '2004–05', '2006–07', '2014–15'],
    type: 'Nacional',
  },
  {
    name: 'Community Shield',
    image: '/assets/trophies/community-shield.jpg',
    count: 4,
    years: ['1955', '2000', '2005', '2009'],
    type: 'Nacional',
  },
  {
    name: 'UEFA Champions League',
    image: '/assets/trophies/champions-league.jpg',
    count: 2,
    years: ['2011–12', '2020–21'],
    type: 'Internacional',
  },
  {
    name: 'UEFA Europa League',
    image: '/assets/trophies/europa-league.jpg',
    count: 2,
    years: ['2012–13', '2018–19'],
    type: 'Internacional',
  },
  {
    name: 'UEFA Super Cup',
    image: '/assets/trophies/super-cup.jpg',
    count: 2,
    years: ['1998', '2021'],
    type: 'Internacional',
  },
  {
    name: 'FIFA Club World Cup',
    image: '/assets/trophies/club-world-cup.jpg',
    count: 1,
    years: ['2021'],
    type: 'Internacional',
  },
  {
    name: 'UEFA Cup Winners’ Cup',
    image: '/assets/trophies/cup-winners-cup.jpg',
    count: 2,
    years: ['1970–71', '1997–98'],
    type: 'Internacional',
  },
  {
    name: 'UEFA Europa Conference League',
    image: '/assets/trophies/conference-league.jpg',
    count: 1,
    years: ['2024–25'],
    type: 'Internacional',
  },
];

const Trophies = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredTrophies =
    filter === 'Todos' ? trophies : trophies.filter((t) => t.type === filter);

  const filterOptions = ['Todos', 'Nacional', 'Internacional'];

  return (
    <section className="p-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Palmarés del Chelsea FC</h2>

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

      {/* Grid de trofeos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTrophies.map((trophy, index) => (
          <InView key={index} triggerOnce threshold={0.3}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`bg-white rounded shadow p-4 text-center transition-all duration-1000 transform ${
                  inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <img
                  src={trophy.image}
                  alt={trophy.name}
                  className="w-68 h-40 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold">{trophy.name}</h3>
                <p className="text-blue-700 font-bold">{trophy.count} títulos</p>
                <p className="text-sm text-gray-600 mt-2">{trophy.years.join(', ')}</p>
              </div>
            )}
          </InView>
        ))}
      </div>
    </section>
  );
};

export default Trophies;
