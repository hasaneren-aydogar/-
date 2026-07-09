import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, ArrowRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import LogoSection from '@/components/LogoSection.jsx';
import GalleryCard from '@/components/GalleryCard.jsx';

const GaleriPage = () => {
  const galleryItems = useMemo(() => [
    {
      beforeImage: 'https://images.unsplash.com/photo-1620252655460-080dbec533ca',
      afterImage: 'https://images.unsplash.com/photo-1608515152841-ede49b2e1bd1',
      title: 'Lazer Epilasyon Sonuçları',
      category: 'Lazer Epilasyon',
      size: 'large' // Layout için özel tag
    },
    {
      beforeImage: 'https://i.ibb.co/pj1yDk44/oncesi.png',
      afterImage: 'https://i.ibb.co/ycd1pqTx/sonras.png',
      title: 'Cilt Bakımı Dönüşümü',
      category: 'Buzlu Lazer Cilt Bakımı',
      size: 'small'
    },
    {
      beforeImage: 'https://images.unsplash.com/photo-1595944025373-64a5ecfbf484',
      afterImage: 'https://images.unsplash.com/photo-1633681926019-03bd9325ec20',
      title: 'Kaş Tasarımı',
      category: 'Kaş Tasarımı',
      size: 'small'
    },
    {
      beforeImage: 'https://images.unsplash.com/photo-1620252655460-080dbec533ca',
      afterImage: 'https://images.unsplash.com/photo-1595944025373-64a5ecfbf484',
      title: 'Bölgesel Zayıflama Sonuçları',
      category: 'Bölgesel Zayıflama',
      size: 'large'
    },
  ], []);

  return (
    <>
      <Helmet>
        <title>Galeri | ZEGEUS Estetik Sonuçları</title>
        <meta name="description" content="Sultangazi ZEGEUS güzellik merkezi öncesi ve sonrası galerisi." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-[#FCFBFA] antialiased selection:bg-stone-200">
        <Header />

        <main className="flex-grow pt-44">
          {/* HEADER - JİLET GİBİ HİZALI BAŞLIK */}
          <section className="px-6 mb-32">
            <div className="max-w-7xl mx-auto flex flex-col items-start space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-stone-400"
              >
                <div className="h-px w-12 bg-stone-300" />
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-stone-400">Görsel Kanıtlar</span>
              </motion.div>

              <h1 className="text-6xl md:text-9xl font-serif text-stone-900 tracking-tighter leading-[0.85]">
                DÖNÜŞÜM <br />
                <span className="italic text-stone-300 md:ml-32 text-7xl md:text-[120px]">Arşivi</span>
              </h1>

              <div className="max-w-md md:ml-40 space-y-6">
                <p className="text-stone-500 font-light text-xl leading-relaxed italic">
                  "Bilimsel yaklaşım ve estetik vizyonun somut sonuçları. Her değişim, yeni bir başlangıçtır."
                </p>
              </div>
            </div>
          </section>

          {/* GALLERY GRID - ASİMETRİK VE DİNAMİK */}
          <section className="pb-40 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">
                {galleryItems.length > 0 ? (
                  galleryItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${item.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'
                        } flex flex-col space-y-6 group`}
                    >
                      {/* Kart Alanı */}
                      <div className="relative border border-stone-100 p-2 bg-white shadow-sm group-hover:shadow-xl transition-all duration-700">
                        <GalleryCard {...item} index={index} />
                        {/* Köşe Süsü - El Yapımı Hissi */}
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Camera className="text-stone-300 w-5 h-5" strokeWidth={1} />
                        </div>
                      </div>

                      {/* Bilgi Alanı */}
                      <div className={`flex justify-between items-start ${item.size === 'large' ? 'max-w-xl' : 'w-full'}`}>
                        <div className="space-y-1">
                          <p className="text-[10px] tracking-[0.3em] text-stone-400 uppercase font-bold">#{item.category}</p>
                          <h3 className="text-xl font-serif text-stone-900 italic">{item.title}</h3>
                        </div>
                        <div className="h-px w-8 bg-stone-200 mt-4 hidden md:block" />
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center col-span-12 text-stone-400 font-serif italic uppercase tracking-widest">Henüz çalışma yüklenmedi.</p>
                )}
              </div>
            </div>
          </section>

          {/* CTA - SİYAH VE PREMİUM KIRILMA */}
          <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10 text-center md:text-left">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
                  Kendi hikayeni <br /> <span className="text-stone-500">bugün başlat.</span>
                </h2>
                <p className="text-stone-400 font-light tracking-[0.1em] text-sm uppercase max-w-sm">
                  Sultangazi'de lüks ve hijyenik bir ortamda uzmanımızla ücretsiz tanışın.
                </p>
              </div>

              <Button asChild className="rounded-none bg-white text-stone-900 hover:bg-stone-200 px-12 py-10 text-[11px] tracking-[0.4em] uppercase transition-all shadow-[15px_15px_0px_0px_rgba(41,37,36,1)]">
                <Link to="/randevu-al" className="flex items-center gap-4 font-bold">
                  Ücretsiz Görüşme <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            {/* Arka plan süsü */}
            <Plus className="absolute -top-10 -right-10 text-stone-800 w-64 h-64 rotate-45 opacity-20 pointer-events-none" />
          </section>
        </main>

        <LogoSection />
        <Footer />
      </div>
    </>
  );
};

export default GaleriPage;