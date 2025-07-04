import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import TrophiesPage from './pages/TrophiesPage';
import DerbiesPage from './pages/DerbiesPage';
import SquadPage from './pages/SquadPage';
import LegendsPage from './pages/LegendsPage';


// Importa las demás páginas según las crees

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/trophies" element={<TrophiesPage />} />
        <Route path="/derbies" element={<DerbiesPage />} />
        <Route path="/squad" element={<SquadPage />} />
        <Route path="/legends" element={<LegendsPage />} />
        {/* Agrega las demás rutas aquí */}
      </Routes>
    </Router>
  );
}



export default App;
