import React from 'react';
import { motion } from 'framer-motion';

const LogoSection = () => {
  return (
    <section className="relative py-32 bg-stone-50 overflow-hidden border-t border-stone-100">
      {/* Arka Plan Hafif Doku */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          {/* İmza Logo Alanı */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12 relative inline-block"
          >
            {/* Arka planda dev ama çok silik marka ismi */}
            <span className="absolute inset-0 flex items-center justify-center text-[18vw] md:text-[12rem] font-serif text-stone-200/30 tracking-[0.2em] pointer-events-none select-none translate-y-4">
              ZEGEUS
            </span>

            <img
              src="https://horizons-cdn.hostinger.com/1aa6bbb2-e22c-4754-aece-a17675e4804f/9c41669b9e8ec20d7d3c2d63d03f8281.png"
              alt="ZEGEUS Signature"
              className="h-32 md:h-44 w-auto mx-auto relative z-10 mix-blend-multiply"
            />
          </motion.div>

          {/* Otorite Metni */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-[11px] tracking-[0.6em] text-stone-400 uppercase font-light mb-4">
                ESTETİK ENSTİTÜSÜ
              </h2>
              <div className="h-[1px] w-12 bg-stone-300" />
            </div>

            <p className="text-xl md:text-3xl text-stone-900 font-serif leading-relaxed max-w-3xl mx-auto italic">
              "Güzelliği bilimsel bir disiplinle, <br className="hidden md:block" />
              sanata dönüştürüyoruz."
            </p>

            <div className="pt-6">
              <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase">
                SULTANGAZİ / İSTANBUL — ESO CERTIFIED
              </p>
            </div>
          </motion.div>

          {/* Uzmanlık Alanları - Minimal Çizgi Formatı */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] tracking-[0.3em] text-stone-500 uppercase font-light"
          >
            <span className="hover:text-stone-900 transition-colors cursor-default">Lazer Epilasyon</span>
            <span className="w-1 h-1 bg-stone-300 rounded-full my-auto hidden md:block" />
            <span className="hover:text-stone-900 transition-colors cursor-default">Cilt Protokolleri</span>
            <span className="w-1 h-1 bg-stone-300 rounded-full my-auto hidden md:block" />
            <span className="hover:text-stone-900 transition-colors cursor-default">Bölgesel İncelme</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection;