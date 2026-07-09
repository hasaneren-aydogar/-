import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Shield, Plus, ArrowDown } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import LogoSection from '@/components/LogoSection.jsx';

const HakkındaPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Mükemmellik',
      description: 'Sıradan bir bakım değil, her detayı titizlikle planlanmış bir estetik süreci sunuyoruz.',
    },
    {
      icon: Users,
      title: 'Uzman Kadro',
      description: 'Sertifikalı profesyonellerimizle Sultangazi’de güvenli ve teknik bir deneyim sağlıyoruz.',
    },
    {
      icon: Heart,
      title: 'Kişisel Özen',
      description: 'Sizi dinliyor ve ihtiyacınıza göre uyarlanan özel protokollerle çalışıyoruz.',
    },
    {
      icon: Shield,
      title: 'ESO Güvencesi',
      description: 'Avrupa standartlarında onaylı teknoloji ve jilet gibi sterilizasyon önceliğimiz.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Hakkımızda | ZEGEUS Sultangazi</title>
        <meta name="description" content="Sultangazi'de bilimsel temelli estetik anlayışı. ZEGEUS hikayesi." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-[#FCFBFA] antialiased selection:bg-stone-200">
        <Header />

        <main className="flex-grow pt-44">
          {/* HERO - JİLET GİBİ HİZALI VE GÜÇLÜ */}
          <section className="px-6 mb-32">
            <div className="max-w-7xl mx-auto flex flex-col items-start space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 text-stone-400"
              >
                <div className="h-px w-12 bg-stone-300" />
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold">Biz Kimiz?</span>
              </motion.div>

              <h1 className="text-6xl md:text-9xl font-serif text-stone-900 tracking-tighter leading-[0.85]">
                BİLİMSEL <br />
                <span className="italic text-stone-300 md:ml-32">Güzellik</span>
              </h1>

              <div className="max-w-md md:ml-40 flex flex-col space-y-8">
                <p className="text-stone-500 font-light text-xl leading-relaxed italic border-l-2 border-stone-100 pl-6">
                  "Doğal olanı korumak için teknolojiyi kullanıyoruz. Bizim için güzellik bir standart değil, sizin en iyi halinizdir."
                </p>
                <div className="flex items-center gap-2 text-stone-300 animate-bounce">
                  <ArrowDown size={20} strokeWidth={1} />
                </div>
              </div>
            </div>
          </section>

          {/* HİKAYEMİZ - ASİMETRİK VE PREMİUM LAYOUT */}
          <section className="py-32 bg-stone-900 text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                <div className="lg:col-span-7 space-y-12 z-10">
                  <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">Sultangazi’nin kalbinde, <br /> 2022'de başladı.</h2>
                  <div className="space-y-8 text-stone-400 font-light text-lg leading-loose max-w-xl">
                    <p>
                      ZEGEUS, 75. Yıl Mahallesi'nde modern estetik anlayışını bilimsel temellerle buluşturmak için kuruldu.
                      İki yılı aşkın süredir bölgemizde, <strong className="text-stone-100 underline decoration-stone-700">ESO standartlarını</strong>
                      benimseyerek sadece en güvenli teknolojileri kullandık.
                    </p>
                    <p className="italic">
                      Amacımız sadece bir "salon" olmak değil; steril, huzurlu ve butik bir atmosferde binlerce başarılı uygulama ile kendinizi özel hissettirmek.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 border-t border-stone-800 pt-12">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-stone-600">Vizyon</span>
                      <p className="text-sm text-stone-300 mt-2">Daima teknik, daima şeffaf.</p>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-stone-600">Konum</span>
                      <p className="text-sm text-stone-300 mt-2">75. Yıl Mah. İstiklal Cad.
                        1311. Sk. No:2-B, Sultangazi
</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="absolute -inset-6 border border-stone-800 -z-0" />
                  <img
                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80"
                    alt="Salon Atmosferi"
                    className="relative z-10 w-full aspect-[3/4] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-white text-stone-900 p-8 z-20 shadow-2xl">
                    <p className="text-2xl font-serif italic leading-none">Est. 2022</p>
                  </div>
                </div>

              </div>
            </div>
            {/* Arka plan süsü */}
            <span className="absolute top-10 right-10 text-[180px] font-serif italic text-stone-800/10 pointer-events-none select-none">ZEGEUS</span>
          </section>

          {/* DEĞERLERİMİZ - MİNİMAL VE KARAKTERLİ */}
          <section className="py-40 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col space-y-6 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center border border-stone-200 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                      <value.icon size={20} strokeWidth={1} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[11px] tracking-[0.3em] uppercase font-bold text-stone-900 flex items-center gap-2">
                        {value.title} <Plus size={10} className="text-stone-300" />
                      </h3>
                      <p className="text-stone-500 text-xs leading-relaxed font-light italic">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* GÜVENLİK PROTOKOLÜ - FARKLI BİR RENK KIRIŞI */}
          <section className="py-32 bg-stone-50 border-y border-stone-100">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
              <Shield className="w-12 h-12 text-stone-300 mx-auto" strokeWidth={1} />
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 italic">
                Güvenlik Protokollerimiz
              </h2>
              <p className="text-stone-500 font-light leading-loose text-lg max-w-2xl mx-auto uppercase tracking-widest text-[11px]">
                Misafirlerimizin sağlığı, bizim için estetik sonuçlardan daha önemlidir. Tüm ekipmanlarımız
                ESO standartlarında kalibre edilir ve her uzmanımız güncel eğitimlerle yetkinliğini yeniler.
              </p>
              <div className="flex flex-wrap justify-center gap-8 pt-8">
                {['Hassasiyet', 'Sterilizasyon', 'Teknoloji', 'Deneyim'].map(tag => (
                  <span key={tag} className="text-[9px] tracking-[0.4em] uppercase font-bold text-stone-400">
                      // {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </main>

        <LogoSection />
        <Footer />
      </div>
    </>
  );
};

export default HakkındaPage;