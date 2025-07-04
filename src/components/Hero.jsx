import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative h-[100svh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/hero/chelsea-hero.jpg')" }}
    >
      <div className="bg-white bg-opacity-75 p-1 md:p-10 rounded text-black text-center max-w-md mx-4">
        <img
          src="/assets/chelsea-logo.png"
          alt="Chelsea FC"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenido al Chelsea FC
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Descubre la historia, los logros y las leyendas de los Blues.
        </p>
        <a
          href="/trophies"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
        >
          Ver Palmarés
        </a>
      </div>
    </section>
  );
};

export default Hero;
