import React from 'react';

const NewsSection = () => {
  const news = [
    {
      title: 'Chelsea gana la UEFA Conference League 2025',
      summary: 'El Chelsea venció al Real Betis en una emocionante final, remontando el marcador en los últimos minutos.',
      date: '28 de mayo de 2025',
      link: 'https://www.90min.com/es/posts/video-el-chelsea-dio-vuelta-la-final-de-la-uefa-conference-league-en-cinco-minutos'
    },
    {
      title: 'Enzo Fernández se queda en el Chelsea',
      summary: 'El técnico Enzo Maresca confirmó que el mediocampista argentino continuará en el club la próxima temporada.',
      date: '27 de mayo de 2025',
      link: 'https://www.marca.com/futbol/chelsea.html'
    },
    {
      title: 'Chelsea clasifica a la Champions League 2025/26',
      summary: 'Con una sólida actuación en la Premier League, el Chelsea aseguró su regreso a la máxima competición europea.',
      date: '26 de mayo de 2025',
      link: 'https://us.marca.com/soccer/chelsea.html'
    },
    {
      title: 'Cucurella brilla en Stamford Bridge',
      summary: 'El lateral español fue clave en la victoria ante el Manchester United, acercando al Chelsea a la Champions.',
      date: '24 de mayo de 2025',
      link: 'https://www.marca.com/futbol/chelsea.html'
    },
    {
      title: 'Chelsea jugará el Mundial de Clubes 2025',
      summary: 'Tras su título europeo, el Chelsea participará en el nuevo formato del Mundial de Clubes.',
      date: '23 de mayo de 2025',
      link: 'https://www.90min.com/es/teams/chelsea'
    }
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">📰 Noticias Recientes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.summary}</p>
              <p className="text-gray-500 text-sm mb-2">{item.date}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Leer más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
