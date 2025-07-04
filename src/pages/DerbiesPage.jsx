import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Derbies from '../components/Derbies';

const DerbiesPage = () => {
  return (
    <div>
      <Navbar />
      <Derbies />
      <Footer />
    </div>
  );
};

export default DerbiesPage;
