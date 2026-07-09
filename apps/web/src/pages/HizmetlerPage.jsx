import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Wind,
  Pipette,
  Spline,
  Layers,
  ArrowRight,
  Plus
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import LogoSection from '@/components/LogoSection.jsx';

const HizmetlerPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBFA] antialiased">
      <Helmet>
        <title>Hizmetler | ZEGEUS Estetik Sistemleri</title>
      </Helmet>

      <Header />

      <main className="flex-grow pt-44">
        {/* BAŞLIK */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-stone-400">
                <div className="h-px w-12 bg-stone-300" />
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-stone-400">Uygulama Rehberi</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-serif text-stone-900 tracking-tighter leading-[0.85]">
                HİZMET <br />
                <span className="italic text-stone-300 md:ml-24">Koleksiyonu</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* HİZMET GRUPLARI */}
        <section className="pb-40 px-6">
          <div className="max-w-7xl mx-auto space-y-32">

            {/* 1. KATEGORİ: EPİLASYON SİSTEMLERİ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 sticky top-44">
                <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase font-bold">// 01</span>
                <h2 className="text-4xl font-serif text-stone-900 mt-4 italic">Epilasyon <br /> Sistemleri</h2>
                <p className="text-stone-500 text-sm mt-6 font-light leading-relaxed max-w-xs uppercase tracking-widest">
                  Farklı kıl tipleri ve cilt yapıları için optimize edilmiş kalıcı pürüzsüzlük protokolleri.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-6">
                {/* Alt Kategori: Buz Lazer */}
                <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="bg-white border border-stone-100 p-10 group hover:border-stone-900 transition-all duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <Wind className="text-stone-300 group-hover:text-stone-900 transition-colors" strokeWidth={1} size={32} />
                    <span className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">Ağrısız & Konforlu</span>
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-4">Buz Lazer Epilasyon</h3>
                  <p className="text-stone-500 text-xs font-light leading-loose uppercase tracking-[0.1em] mb-8">Kriyoterapi etkisiyle cildi soğutarak en yüksek enerjiyi acısız şekilde ileten ileri nesil teknoloji.</p>
                  <div className="h-px w-full bg-stone-50 group-hover:bg-stone-200 transition-colors" />
                </motion.div>

                {/* Alt Kategori: İğneli Epilasyon */}
                <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="bg-white border border-stone-100 p-10 group hover:border-stone-900 transition-all duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <Pipette className="text-stone-300 group-hover:text-stone-900 transition-colors" strokeWidth={1} size={32} />
                    <span className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">Kesin Sonuç</span>
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-4">İğneli Epilasyon</h3>
                  <p className="text-stone-500 text-xs font-light leading-loose uppercase tracking-[0.1em] mb-8">Özellikle açık renkli ve ince tüylerde kökü hedef alan, uzmanlık gerektiren elektroliz yöntemi.</p>
                  <div className="h-px w-full bg-stone-50 group-hover:bg-stone-200 transition-colors" />
                </motion.div>
              </div>
            </div>

            {/* 2. KATEGORİ: CİLT BAKIMI */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-stone-100 pt-32">
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                  <img src="https://i.ibb.co/fzBNkqvv/81medikalcilt.jpg" className="w-full h-full object-cover" alt="Cilt Bakımı" />
                  <div className="absolute inset-4 border border-white/20 pointer-events-none" />
                </div>
              </div>
              <div className="lg:col-span-7 lg:pl-12 space-y-8">
                <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase font-bold">// 02</span>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 italic leading-none">Medikal <br /> Cilt Bakımı</h2>
                <p className="text-stone-500 font-light text-lg leading-relaxed italic max-w-xl">
                  Cildin derin katmanlarına nüfuz eden, gözenekleri arındıran ve hücresel yenilenmeyi tetikleyen profesyonel bakım protokolü. Sultangazi'de bilimsel yaklaşımla cildinizin ışıltısını geri kazandırıyoruz.
                </p>
                <div className="flex gap-4">
                  {['Arındırma', 'Nemlendirme', 'Anti-Aging'].map(tag => (
                    <span key={tag} className="text-[9px] tracking-[0.3em] uppercase border border-stone-200 px-4 py-2 font-bold text-stone-400 italic">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. KATEGORİ: KAŞ & YÜZ MİMARİSİ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-stone-100 pt-32">
              <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase font-bold">// 03</span>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 italic leading-none text-right lg:text-left">Kaş & Yüz <br /> Mimarisi</h2>
                <p className="text-stone-500 font-light text-lg leading-relaxed italic max-w-xl lg:ml-0 ml-auto text-right lg:text-left">
                  Yüz hatlarınızı altın oran hesaplamalarıyla yeniden kurguluyoruz. Kaş tasarımı ve yüz analizi ile ifadenize derinlik ve karakter katıyoruz. Her çizgi sizin doğal anatominize uygun şekilde tasarlanır.
                </p>
                <div className="flex gap-4 justify-end lg:justify-start">
                  <Plus className="text-stone-300" size={24} strokeWidth={1} />
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-stone-900 border-b border-stone-900 pb-1">Karakterinizi Ön Plana Çıkarın</span>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-square bg-stone-100 overflow-hidden relative group">
                  <img src="https://i.ibb.co/xK4hbPRY/altin-oran-kas-alimi.jpg" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000" alt="Kaş Tasarımı" />
                  <div className="absolute top-0 right-0 p-8 text-white z-10">
                    <Spline size={40} strokeWidth={1} className="opacity-50" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ALT BANNER */}
        <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-left space-y-2">
              <h2 className="text-4xl font-serif italic">Analiz İçin Bekliyoruz.</h2>
              <p className="text-stone-500 text-xs tracking-widest uppercase">Size en uygun protokolü birlikte seçelim.</p>
            </div>
            <button className="rounded-none bg-white text-stone-900 hover:bg-stone-200 px-12 py-8 text-[11px] tracking-[0.4em] uppercase transition-all shadow-[10px_10px_0px_0px_rgba(41,37,36,1)] font-bold">
              HEMEN ARA
            </button>
          </div>
          <span className="absolute -bottom-10 -left-10 text-[200px] font-serif italic text-stone-800/10 pointer-events-none">ZEGEUS</span>
        </section>
      </main>

      <LogoSection />
      <Footer />
    </div>
  );
};

export default HizmetlerPage;