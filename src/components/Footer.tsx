import { Instagram } from 'lucide-react';
import { TikTokIcon } from './Icons';

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="text-3xl font-medium tracking-tighter text-black mb-8 block uppercase">SUMUKHWA</a>
            <p className="text-xs font-light leading-loose opacity-60 max-w-xs">
              Sumukhwa aspires to achieve the highest results through simple ingredients, coexisting with nature.
            </p>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-[0.3em] font-medium text-black mb-10">Shop</h5>
            <ul className="flex flex-col gap-5 text-[10px] uppercase tracking-widest font-light opacity-50">
              <li><a href="https://a.co/d/06i7Vs1b" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:opacity-100 transition-all">Amazon Store</a></li>
              <li><a href="#shop" className="hover:text-black hover:opacity-100 transition-all">Skincare</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.3em] font-medium text-black mb-10">Brand</h5>
            <ul className="flex flex-col gap-5 text-[10px] uppercase tracking-widest font-light opacity-50">
              <li><a href="#about" className="hover:text-black hover:opacity-100 transition-all">About</a></li>
              <li><a href="#" className="hover:text-black hover:opacity-100 transition-all">Journal</a></li>
              <li><a href="#" className="hover:text-black hover:opacity-100 transition-all">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] font-medium text-black mb-8">Follow</h5>
            <div className="flex gap-6 text-black/60">
              <a href="https://instagram.com/sumukhwa" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><Instagram size={20} /></a>
              <a href="https://www.tiktok.com/@sumukhwa_beauty" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><TikTokIcon size={20} /></a>
            </div>
            <div className="mt-8">
              <p className="text-xs font-light opacity-60">Inquiries</p>
              <p className="text-sm font-medium mt-2 text-black">info@sumukhwa.com</p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-brand-text/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest opacity-40">© 2026 SUMUKHWA. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-40">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
