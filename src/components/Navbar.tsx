import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Determine if we should use transparent background (only when not scrolled and menu closed)
  const isTransparent = !isScrolled && !isMenuOpen;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ${!isTransparent ? 'bg-brand-bg/90 backdrop-blur-md py-4 md:py-6 border-b border-black/5' : 'bg-transparent py-8 md:py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between relative">
          <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.4em] font-light">
            <a href="#shop" className="hover:text-black transition-colors">Shop</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
          </div>
          
          <a href="#home" className="text-3xl md:text-2xl font-medium tracking-[0.2em] text-black uppercase absolute left-1/2 -translate-x-1/2 whitespace-nowrap">SUMUKHWA</a>
          
          <div className="flex items-center gap-6 ml-auto md:ml-0">
            <button 
              className="md:hidden flex items-center z-50 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-brand-bg flex flex-col items-center justify-center gap-16 pt-20"
          >
            <a href="#shop" onClick={handleLinkClick} className="text-3xl font-medium uppercase tracking-[0.4em] hover:text-black transition-colors">Shop</a>
            <a href="#about" onClick={handleLinkClick} className="text-3xl font-medium uppercase tracking-[0.4em] hover:text-black transition-colors">About</a>
            <a href="#home" onClick={handleLinkClick} className="text-3xl font-medium uppercase tracking-[0.4em] hover:text-black transition-colors">Home</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
