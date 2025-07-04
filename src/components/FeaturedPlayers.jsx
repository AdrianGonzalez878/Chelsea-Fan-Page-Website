
import React from 'react';

const FeaturedPlayers = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Jugadores Destacados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl">
            <img
              src="/assets/Gallery/player1.jpg"
              alt="Jugador 1"
              className="w-40 h-40 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Cole Palmer</h3>
            <p className="text-gray-200">Joven promesa con gran capacidad de desequilibrio y visión ofensiva.</p>
          </div>
          <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl">
            <img
              src="/assets/Gallery/player2.jpg"
              alt="Jugador 2"
              className="w-40 h-40 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Moises Caicedo</h3>
            <p className="text-gray-200">Motor del mediocampo, destaca por su intensidad, presión y recuperación.</p>
          </div>
          <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl">
            <img
              src="/assets/Gallery/player3.jpg"
              alt="Jugador 3"
              className="w-40 h-40 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Reece James</h3>
            <p className="text-gray-200">Capitán del Chelsea, potencia y liderazgo desde la banda derecha.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlayers;
