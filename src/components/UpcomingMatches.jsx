// src/components/UpcomingMatches.jsx
import React from 'react';

const UpcomingMatches = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">📅 Próximos Partidos</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center border-b pb-2">
            <span>vs Manchester United</span>
            <span>15 de junio, 2025</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span>vs Arsenal</span>
            <span>22 de junio, 2025</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span>vs Liverpool</span>
            <span>29 de junio, 2025</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span>vs Real Madrid (amistoso)</span>
            <span>6 de julio, 2025</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span>vs Bayern Múnich (amistoso)</span>
            <span>13 de julio, 2025</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UpcomingMatches;
