
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import HizmetlerPage from './pages/HizmetlerPage';
import GaleriPage from './pages/GaleriPage';
import HakkındaPage from './pages/HakkındaPage';
import RandevuAlPage from './pages/RandevuAlPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hizmetler" element={<HizmetlerPage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/hakkinda" element={<HakkındaPage />} />
        <Route path="/randevu-al" element={<RandevuAlPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-primary/10">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent" style={{ fontFamily: "Playfair Display, serif" }}>Sayfa Bulunamadı</h1>
              <p className="text-muted-foreground mb-8 text-lg">Aradığınız sayfa mevcut değil.</p>
              <a 
                href="/" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              >
                Anasayfaya Dön
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
