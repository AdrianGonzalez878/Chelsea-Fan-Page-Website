// src/components/InfoSection.jsx
import React from 'react';

const InfoSection = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
        <p className="text-lg text-gray-700 mb-4">
          Fundado en 1905, el Chelsea Football Club ha sido uno de los equipos más exitosos de Inglaterra, con una rica historia llena de triunfos y momentos inolvidables.
        </p>
        <a
          href="/history"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
        >
          Conoce Más
        </a>
      </div>
    </section>
  );
};

export default InfoSection;
