import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import LogoSection from '@/components/LogoSection.jsx';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FCFBFA] antialiased">
      <Header />

      <main>
        {/* HERO - KELİME ÇAKIŞMASI DÜZELTİLMİŞ YAPI */}
        <section className="relative pt-44 pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Sol Metin Alanı */}
            <div className="lg:col-span-7 z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div className="flex items-center gap-3 text-stone-400">
                  <div className="h-px w-8 bg-stone-300" />
                  <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                    ZEGEUS ESTETİK SİSTEMİ
                  </span>
                </div>

                {/* ANA BAŞLIK - KELİMELERİ ALT ALTA ALARAK GÖRSELİ KORUDUK */}
                <h1 className="text-6xl md:text-8xl lg:text-[90px] font-serif text-stone-900 leading-[0.85] tracking-tighter">
                  <span className="block italic text-stone-300 mb-2 text-5xl md:text-7xl">Yeni Formu:</span>
                  <span className="block uppercase underline decoration-stone-100 underline-offset-8">KUSURSUZLUĞUN</span>
                </h1>

                {/* DESTEKLEYİCİ METİN */}
                <div className="max-w-md space-y-8 md:ml-4 border-l border-stone-200 pl-8">
                  <p className="text-stone-500 font-light text-lg leading-relaxed italic">
                    Sıradan bakımların ötesinde, cildinizin biyolojisine saygı duyan
                    <span className="text-stone-900 font-medium"> yüksek teknoloji protokolleri.</span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-4">
                    <Button asChild className="rounded-none bg-stone-900 px-10 py-7 text-[10px] tracking-[0.4em] uppercase hover:bg-stone-800 transition-all shadow-[8px_8px_0px_0px_rgba(231,229,228,1)]">
                      <Link to="/randevu-al">Analiz Randevusu</Link>
                    </Button>

                    <div className="text-[9px] text-stone-400 tracking-[0.3em] leading-loose uppercase font-bold">
                // SULTANGAZİ <br />
                // PREMİUM SİSTEM
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sağ Görsel */}
            <div className="lg:col-span-5 mt-16 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full aspect-[4/5] overflow-hidden"
              >
                <img
                  src="https://i.ibb.co/zWwxQ1dh/istanbul-lazer-epilasyon-merkezleri.jpg"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                  alt="Zegeus Estetik"
                />
                <div className="absolute inset-4 border border-white/20 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HİZMETLER - ZİGZAG DÜZEN */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto space-y-40">

            {/* Lazer Epilasyon */}
            <Link to="/hizmetler" className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 overflow-hidden">
                  <img
                    src="https://i.ibb.co/HpDcHNrq/bacak-lazer-epilasyon-hakkinda-merak-edilenler-kapak.webp"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                    alt="Lazer"
                  />
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-[10px] tracking-widest text-stone-400 uppercase">Teknoloji & Konfor</span>
                  <h3 className="text-4xl font-serif">Lazer Epilasyon</h3>
                  <p className="text-stone-500 font-light italic leading-relaxed">
                    ESO onaylı cihazlarla, her cilt tipine uygun, kalıcı ve güvenli pürüzsüzlük protokolleri.
                  </p>
                  <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold pt-4 border-b border-stone-100 pb-2 w-fit">
                    İncele <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Cilt Bakımı - Ters Düzen */}
            <Link to="/hizmetler" className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 lg:order-1 order-2 space-y-6 lg:text-right">
                  <span className="text-[10px] tracking-widest text-stone-400 uppercase">Derinlemesine Bakım</span>
                  <h3 className="text-4xl font-serif">Medikal Cilt Bakımı</h3>
                  <p className="text-stone-500 font-light italic leading-relaxed lg:ml-auto max-w-sm">
                    Cildinizin nefes almasını sağlayan, gözenekleri arındıran profesyonel bakım seansları.
                  </p>
                  <div className="flex items-center lg:justify-end gap-2 text-[10px] tracking-widest uppercase font-bold pt-4 border-b border-stone-100 pb-2 w-fit lg:ml-auto">
                    İncele <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="lg:col-span-7 lg:order-2 order-1 overflow-hidden">
                  <img
                    src="https://i.ibb.co/MyPnkWFB/medikalciltbakim.jpg"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                    alt="Cilt Bakımı"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* SECTION 3: DEĞERLER - TAM ORTALI VE SİMETRİK */}
        <section className="py-24 bg-stone-900 text-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center space-y-4">
              <ShieldCheck className="w-8 h-8 text-stone-500" strokeWidth={1} />
              <h4 className="text-[11px] tracking-widest uppercase font-bold">ESO Standartları</h4>
              <p className="text-stone-500 text-xs leading-relaxed max-w-[220px]">Avrupa onaylı teknoloji ve en yüksek sterilizasyon protokolleri.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Sparkles className="text-stone-500 w-8 h-8" strokeWidth={1} />
              <h4 className="text-[11px] tracking-widest uppercase font-bold">Uzman Uygulama</h4>
              <p className="text-stone-500 text-xs leading-relaxed max-w-[220px]">Tüm süreç boyunca sertifikalı uzman eşliğinde, kişiselleştirilmiş bakım protokolü.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Star className="text-stone-500 w-8 h-8" strokeWidth={1} />
              <h4 className="text-[11px] tracking-widest uppercase font-bold">Butik Hizmet</h4>
              <p className="text-stone-500 text-xs leading-relaxed max-w-[220px]">Sultangazi'de seri üretim değil, size özel premium zaman dilimi.</p>
            </div>
          </div>
        </section>
      </main>

      <LogoSection />
      <Footer />
    </div>
  );
};

export default HomePage;