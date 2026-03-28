import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should use transparent background (only on Home hero)
  const isTransparent = !isScrolled && location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${!isTransparent ? 'bg-brand-bg/90 backdrop-blur-md py-6 border-b border-black/5' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between relative">
        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.4em] font-light">
          <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-black transition-colors">About</Link>
        </div>
        
        <Link to="/" className="text-2xl font-medium tracking-[0.2em] text-black uppercase absolute left-1/2 -translate-x-1/2">SUMUKHWA</Link>
        
        <div className="flex items-center gap-6">
          <button className="md:hidden flex items-center">
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </div>
    </nav>
  );
};
