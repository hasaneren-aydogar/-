import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Performans için scroll event'ini optimize ediyoruz (Debounce yerine basit bir kontrol)
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Sayfa değiştiğinde mobil menüyü otomatik kapatan useEffect (Mühendislik refleksi: side-effect yönetimi)
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { id: 'home', label: 'Anasayfa', path: '/' },
    { id: 'services', label: 'Hizmetler', path: '/hizmetler' },
    { id: 'gallery', label: 'Galeri', path: '/galeri' },
    { id: 'about', label: 'Hakkında', path: '/hakkinda' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? 'h-16 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm'
          : 'h-24 bg-transparent'
        }`}
    >
      <nav className="container mx-auto h-full px-6 flex items-center justify-between">

        {/* Brand/Logo - Ölçeklenebilir yapı */}
        <Link to="/" className="relative z-50 group">
          <img
            src="https://i.ibb.co/Jw0XtWLs/zegeus-removebg-preview.png"
            alt="ZEGEUS Management"
            className={`w-auto transition-all duration-500 group-hover:opacity-80 ${isScrolled ? 'h-10' : 'h-16'
              }`}
          />
        </Link>

        {/* Desktop Navigation - Dry Principle (Don't Repeat Yourself) */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.id}
                to={link.path}
                className="group relative py-1 text-[11px] font-medium tracking-[0.2em] uppercase text-stone-600 transition-colors hover:text-stone-950"
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-stone-900 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            );
          })}
        </div>

        {/* Action Button - UI/UX Consistency */}
        <div className="hidden md:block">
          <Link
            to="/randevu-al"
            className="inline-block px-8 py-2.5 border border-stone-900 text-[10px] font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-stone-900 hover:text-white"
          >
            Randevu Al
          </Link>
        </div>

        {/* Mobile Toggle - Minimalist Interaction */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 p-2 text-stone-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>

      </nav>

      {/* Mobile Menu Overlay - Framer Motion Optimization */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="text-2xl font-light tracking-[0.3em] uppercase text-stone-800 hover:text-stone-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/randevu-al"
              className="mt-4 px-12 py-4 border border-stone-900 text-[12px] tracking-widest uppercase"
            >
              Hemen Randevu
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;