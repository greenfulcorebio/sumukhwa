import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import React, { useState } from 'react';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

const IMAGES = [
  "1duobcaV5RmqhDAp3wtkmK0YLw5IQ6Itk",
  "1Caa3nkuBrnSrqwfboTYXby_QQx2AaAme",
  "1txnncL5h9QiGukIh0X--Bm9IZg0nTTWE",
  "1KPktuIaX7Gf88d9MGbSzb1KuRq8ovOi7",
  "1NSqOJSyi4JDuURBd5qtn9x_HQobKsttI",
  "1_q6nS1AdejhaarVc-8Bz-J308OXAD0Hy"
];

const FAQ_DATA = [
  {
    question: "Are SUMUKHWA products safe during pregnancy?",
    answer: "We use gentle, skin-friendly ingredients. We recommend consulting your doctor if you are pregnant or nursing."
  },
  {
    question: "Where are SUMUKHWA products made?",
    answer: "Made in Korea using advanced skincare technology and high-quality standards."
  },
  {
    question: "Do SUMUKHWA products expire?",
    answer: "Yes. Please check the expiration date on the packaging and use within 6 months after opening."
  },
  {
    question: "Why are SUMUKHWA products lightly colored or scented?",
    answer: "We avoid synthetic dyes and artificial fragrances. Any color or scent comes naturally from the ingredients."
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer: "Our formulas are designed to be gentle and minimal. Always patch test before use."
  }
];

const AccordionItem = ({ title, children, isOpen, onClick }: { title: string, children: React.ReactNode, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-black/10">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-black/80 group-hover:text-black transition-colors">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <Minus size={16} strokeWidth={1} /> : <Plus size={16} strokeWidth={1} />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-sm font-light leading-relaxed text-black/60 font-sans">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqItem: React.FC<{ question: string, answer: string, isOpen: boolean, onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-black/5">
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-sm md:text-base font-sans font-medium text-black/90 group-hover:text-black transition-colors pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 opacity-40"
        >
          {isOpen ? <Minus size={14} strokeWidth={1} /> : <Plus size={14} strokeWidth={1} />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-sm font-sans font-light leading-relaxed text-black/60">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Shop = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % IMAGES.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* LEFT SIDE: CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-12">
              <span className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-4 block font-sans">Essential Ritual</span>
              <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-black leading-[1.1] mb-6">
                Miracle Snail Mucin 97% <br />
                <span className="italic font-normal">Perfect 3-In-1</span>
              </h1>
              <p className="text-lg font-light text-black/60 max-w-md font-sans leading-relaxed">
                A high-potency treatment that streamlines your ritual by combining toner, essence, and serum into one powerful step.
              </p>
            </div>

            <div className="space-y-1">
              <AccordionItem 
                title="Key Ingredients" 
                isOpen={openSection === 'key'} 
                onClick={() => toggleSection('key')}
              >
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-black/40 shrink-0" />
                    <span>Snail Secretion Filtrate: 97.02%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-black/40 shrink-0" />
                    <span>8 Types of Hyaluronic Acid, including Sodium Hyaluronate: 1003ppm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-black/40 shrink-0" />
                    <span>Panax Ginseng Root Extract</span>
                  </li>
                </ul>
              </AccordionItem>

              <AccordionItem 
                title="Formulated Without" 
                isOpen={openSection === 'without'} 
                onClick={() => toggleSection('without')}
              >
                <p>0% Parabens, Phenoxyethanol, Phthalates, Mineral Oils, PEG, Silicones, Synthetic Dyes, Sulfates.</p>
              </AccordionItem>

              <AccordionItem 
                title="Full Ingredients" 
                isOpen={openSection === 'full'} 
                onClick={() => toggleSection('full')}
              >
                <p className="text-[11px] leading-loose tracking-wide uppercase opacity-80">
                  Snail Secretion Filtrate, 1,2-Hexanediol, Butylene Glycol, Sodium Hyaluronate, Carbomer, Arginine, Ethylhexylglycerin, Sodium Polyacrylate, Panthenol, Water(Aqua), Disodium EDTA, Betaine, Trehalose, Carica Papaya (Papaya) Fruit Extract, Panax Ginseng Root Extract, Hydroxypropyltrimonium Hyaluronate, Sodium Acetylated Hyaluronate, Hydrolyzed Hyaluronic Acid, Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Hydrolyzed Sodium Hyaluronate, Potassium Hyaluronate
                </p>
              </AccordionItem>

              <AccordionItem 
                title="How To Use" 
                isOpen={openSection === 'how'} 
                onClick={() => toggleSection('how')}
              >
                <div className="space-y-4">
                  <p>Apply evenly to your face after cleansing. Gently pat using fingertips to aid absorption, and then go forth with your moisturizers. / Appliquez uniformément sur votre visage après le nettoyage. Tapotez doucement du bout des doigts pour faciliter l'absorption, puis poursuivez avec votre crème hydratante.</p>
                </div>
              </AccordionItem>
            </div>

            <div className="mt-16 pt-12 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-1 font-sans">Volume</span>
                <span className="text-sm font-medium font-sans">150ml / 5.07 fl oz</span>
              </div>
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a 
                  href="https://a.co/d/06i7Vs1b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white px-16 py-6 text-[11px] uppercase tracking-[0.4em] hover:bg-brand-text transition-all duration-500 text-center font-sans"
                >
                  Shop on Amazon
                </a>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-30 text-center font-light font-sans">
                  Secure checkout via Amazon
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE CAROUSEL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square overflow-hidden bg-white rounded-sm shadow-sm group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={`https://lh3.googleusercontent.com/d/${IMAGES[currentImage]}`}
                  alt={`Product View ${currentImage + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
              >
                <ChevronLeft size={20} strokeWidth={1} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
              >
                <ChevronRight size={20} strokeWidth={1} />
              </button>
            </div>

            {/* Thumbnail Previews */}
            <div className="flex justify-center gap-3 mt-8 overflow-x-auto pb-2 no-scrollbar">
              {IMAGES.map((imgId, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm transition-all duration-300 border-2 ${idx === currentImage ? 'border-black opacity-100 scale-105' : 'border-transparent opacity-40 hover:opacity-70'}`}
                >
                  <img 
                    src={`https://lh3.googleusercontent.com/d/${imgId}`} 
                    alt={`Thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </motion.div>

        </div>

        {/* FAQ SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-48 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-16 md:mb-20 tracking-tight">FAQ</h2>
          <div className="space-y-0">
            {FAQ_DATA.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-48 -mx-6 md:-mx-12">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};
