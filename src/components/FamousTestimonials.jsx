import React, { useState, useEffect } from 'react';

const FamousTestimonials = () => {
  const testimonials = [
    {
      quote: "Ser aficionado del Chelsea es una pasión que se lleva en el corazón.",
      author: "Adrian Gonzalez"
    },
    {
      quote: "El Chelsea es un club con una historia increíble y una afición apasionada.",
      author: "José Mourinho"
    },
    {
      quote: "Jugar en el Chelsea fue uno de los mayores honores de mi carrera.",
      author: "Frank Lampard"
    },
    {
      quote: "El Chelsea siempre tendrá un lugar especial en mi corazón.",
      author: "Didier Drogba"
    },
    {
      quote: "Liderar al Chelsea fue un sueño hecho realidad.",
      author: "John Terry"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonios de Figuras Reconocidas</h2>
        <div className="grid md:grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md transition-opacity duration-1000 ease-in-out">
            <p className="text-gray-700 italic">"{testimonials[currentTestimonial].quote}"</p>
            <p className="mt-4 text-right font-semibold">- {testimonials[currentTestimonial].author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamousTestimonials;
