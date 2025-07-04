
import React from 'react';

const PhotoGallery = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">📸 Mejores Momentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'photo1.jpg',
            'photo2.jpg',
            'photo3.jpg',
            'photo4.jpg',
            'photo5.jpg',
            'photo6.jpg',
          ].map((photo, index) => (
            <img
              key={index}
              src={`/assets/Gallery/${photo}`}
              alt={`Partido ${index + 1}`}
              className="rounded-lg shadow-md w-full h-64 object-cover transform transition duration-500 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
