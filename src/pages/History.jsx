import React from 'react';
import { InView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const History = () => {
  const paragraphs = [
    "El Chelsea Football Club fue fundado en 1905 por Gus Mears, quien adquirió el estadio Stamford Bridge con la intención de crear un nuevo club en el oeste de Londres. Desde sus inicios, el Chelsea se caracterizó por atraer grandes multitudes y fichar jugadores de renombre, aunque no logró títulos importantes en sus primeros 50 años.",
    "El primer gran éxito llegó en 1955, cuando el equipo ganó su primer campeonato de liga bajo la dirección de Ted Drake. En las décadas siguientes, el club vivió altibajos, incluyendo títulos como la FA Cup en 1970 y la Recopa de Europa en 1971, pero también enfrentó crisis financieras y deportivas.",
    "El renacimiento moderno del Chelsea comenzó en los años 90 con la llegada de figuras como Ruud Gullit y Gianluca Vialli. En 2003, el club fue adquirido por el multimillonario ruso Roman Abramovich, marcando el inicio de una era dorada. Bajo la dirección de José Mourinho, el Chelsea ganó la Premier League en 2005 y 2006, y desde entonces ha sido uno de los clubes más exitosos de Europa.",
    "El Chelsea ha ganado múltiples títulos nacionales e internacionales, incluyendo la UEFA Champions League en 2012 y 2021, y la Europa League en 2013 y 2019. Además, el club ha sido pionero en el desarrollo del fútbol femenino, con el Chelsea Women convirtiéndose en una potencia tanto en Inglaterra como en Europa.",
    "Hoy en día, el Chelsea FC es reconocido mundialmente por su ambición, su estilo competitivo y su base de aficionados apasionados. Stamford Bridge sigue siendo su hogar, y el club continúa escribiendo capítulos memorables en la historia del fútbol."
  ];

  const timeline = [
    { year: 1905, event: "Fundación del Chelsea FC por Gus Mears." },
    { year: 1955, event: "Primer campeonato de liga bajo la dirección de Ted Drake." },
    { year: 1970, event: "Victoria en la FA Cup." },
    { year: 1971, event: "Victoria en la Recopa de Europa." },
    { year: 2003, event: "Adquisición por Roman Abramovich." },
    { year: 2005, event: "Victoria en la Premier League bajo la dirección de José Mourinho." },
    { year: 2012, event: "Victoria en la UEFA Champions League." },
    { year: 2013, event: "Victoria en la Europa League." },
    { year: 2019, event: "Victoria en la Europa League." },
    { year: 2021, event: "Victoria en la UEFA Champions League." },
  ];

  return (
    <div>
      <Navbar />
      <main className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Historia del Chelsea FC</h1>

        {paragraphs.map((text, i) => (
          <InView key={i} triggerOnce threshold={0.5}>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={`mb-4 transition-all duration-2000 ease-out ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                {text}
              </p>
            )}
          </InView>
        ))}

        {/* Línea de tiempo */}
        <div className="timeline mt-8 space-y-6">
          {timeline.map(({ year, event }, i) => (
            <InView key={i} triggerOnce threshold={0.5}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`timeline-item transition-all duration-2000 ease-out ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h3 className="text-xl font-semibold">{year}</h3>
                  <p>{event}</p>
                </div>
              )}
            </InView>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
