import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
} from 'lucide-react';
import { TikTokIcon } from '../components/Icons';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-bg">
          <img 
            src="https://lh3.googleusercontent.com/d/1RkAk-Ikzy2S3oDorZzX_mP5Y2g2XupMN" 
            alt="Sumukhwa Art" 
            className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="block text-xs uppercase tracking-[0.4em] mb-6 opacity-80 text-black">THE ART OF MINIMAL SKINCARE</span>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-tight mb-6 text-black">
              Miracle Snail Mucin 97%
            </h1>
            <p className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-black">
              One Step. <span className="italic">Complete Care.</span>
            </p>
            <p className="text-sm font-light mb-10 max-w-md leading-relaxed opacity-60 text-brand-text">
              Toner · Essence · Serum in one simple step.
            </p>
            <div className="flex flex-col gap-6">
              <a href="/shop" className="inline-flex items-center justify-center gap-6 bg-black text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] hover:bg-brand-text transition-all duration-500 group w-fit">
                Discover the Collection
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 flex items-center gap-2 font-light">
                <CheckCircle2 size={12} />
                Fast & Free Shipping via Amazon Prime
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-32 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-widest opacity-60 mb-4 block">Inspired by Real Routines</span>
              <h2 className="text-4xl md:text-6xl tracking-tight text-black">Real Results. Real Routine.</h2>
            </div>
            <div className="flex gap-6">
              <a href="https://instagram.com/sumukhwa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-black transition-colors">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@sumukhwa_beauty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-black transition-colors">
                <TikTokIcon size={20} />
                <span>TikTok</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://lh3.googleusercontent.com/d/1dZnWEx0lL5zNAQZBQ5LfcSe513_gTqkw",
              "https://lh3.googleusercontent.com/d/1PmdMJyqkvP4lcxRP1pGY_M3w29za4Let",
              "https://lh3.googleusercontent.com/d/13VDgOBBE77442ItfVrKbzhSfO1RdHx6i",
              "https://lh3.googleusercontent.com/d/1sokjHnF8Q-BCUTyDTRY9BmOwhqU6OFjs"
            ].map((src, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.98 }}
                className="aspect-square overflow-hidden bg-brand-accent/20"
              >
                <img 
                  src={src} 
                  alt={`Social ${idx}`} 
                  className="w-full h-full object-cover transition-all duration-700 brightness-[1.05] contrast-[0.92] saturate-[0.85] sepia-[0.1]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Final CTA */}
      <section className="py-48 px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-8 block font-sans">The Ritual Awaits</span>
          <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-black leading-tight mb-12">
            Experience the <br />
            <span className="italic font-normal">Essence of Snail Mucin</span>
          </h2>
          <a 
            href="/shop" 
            className="inline-flex items-center justify-center gap-6 bg-black text-white px-16 py-6 text-[11px] uppercase tracking-[0.4em] hover:bg-brand-text transition-all duration-500 group w-fit"
          >
            Shop the Collection
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};
