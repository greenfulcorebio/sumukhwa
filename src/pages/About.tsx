import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-32 min-h-screen bg-brand-bg">
      {/* About Section */}
      <section id="story" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-48">
            {/* Section 1 - The Birth of Sumukhwa */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <span className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-8 block font-sans">The Birth of Sumukhwa</span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-black mb-10 leading-tight font-medium">
                Rooted in nature, <br />
                <span className="italic font-normal">shaped by generations.</span>
              </h2>
              <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70 font-sans">
                <p>Born from a deep understanding of medicinal herbs and traditional Korean aesthetics, Sumukhwa brings together nature, beauty, and balance.</p>
                <p>Inspired by both botanical knowledge and the art of Korean painting, our brand reflects harmony between simplicity and depth.</p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-2xl ml-auto md:mr-0"
            >
              <span className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-8 block font-sans">Our Product Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-black mb-10 leading-tight font-medium">
                Pure Simplicity. <br />
                <span className="italic font-normal">Maximum Effect.</span>
              </h2>
              <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70 font-sans">
                <p>We believe in doing more with less.</p>
                <p>By focusing on essential ingredients and eliminating unnecessary complexity, we create products that are simple, effective, and true to nature.</p>
                <p>Every formula is designed to deliver visible results—without compromise.</p>
              </div>
            </motion.div>

            {/* Section 3 - Our Commitment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="max-w-2xl"
              >
                <span className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-8 block font-sans">Our Commitment</span>
                <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-black mb-10 leading-tight font-medium">
                  Thoughtfully made. <br />
                  <span className="italic font-normal">Responsibly designed.</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70 font-sans">
                  <p>We prioritize sustainability in every step.</p>
                  <p>Our packaging is crafted from Earth Pact, made from 100% sugarcane residuals without chemical bleaching.</p>
                  <p>We continuously explore eco-conscious solutions to protect our planet.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative aspect-[4/5] overflow-hidden rounded-sm"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/11aQyW5cM6kVDRGv46nfQjZmAKH-iEwLq" 
                  alt="Earth Pact Packaging" 
                  className="w-full h-full object-cover brightness-[1.05] contrast-[0.95] saturate-[0.9] sepia-[0.03]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
