import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Chelsea FC. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
