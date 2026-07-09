import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
// İkonları eksiksiz listeledim, hata buradan gelmiş olabilir
import {
  MessageCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import LogoSection from '@/components/LogoSection.jsx';

const RandevuAlPage = () => {
  const whatsappNumber = '905533030809';
  const whatsappMessage = encodeURIComponent('Merhaba, ZEGEUS için randevu almak istiyorum.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Randevu | ZEGEUS Sultangazi</title>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-[#FCFBFA]">
        <Header />

        <main className="flex-grow pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* Header */}
            <header className="mb-16 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 uppercase tracking-tight"
              >
                İletişim <span className="italic text-stone-400">&</span> Randevu
              </motion.h1>
              <div className="h-px w-16 bg-stone-200 mx-auto" />
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Sol: WhatsApp Kartı */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white border border-stone-100 p-10 shadow-sm relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h2 className="text-2xl font-serif text-stone-900 mb-6 italic text-accent">Hızlı Randevu Hattı</h2>
                    <p className="text-stone-500 font-light mb-8 max-w-sm">
                      WhatsApp üzerinden uzmanlarımızla anında iletişime geçebilirsiniz.
                    </p>
                    <Button asChild className="bg-stone-900 text-white rounded-none px-8 py-6 text-[11px] tracking-widest uppercase">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        WhatsApp'tan Yaz <ArrowRight className="ml-2 w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  <MessageCircle className="absolute -right-8 -bottom-8 opacity-[0.03] w-64 h-64 pointer-events-none" />
                </motion.div>

                {/* Alt Grid: Saat ve Telefon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-stone-50/50 p-6 border border-stone-100">
                    <Clock className="w-4 h-4 text-stone-400 mb-4" />
                    <h4 className="text-[10px] tracking-widest uppercase font-semibold mb-3">Çalışma Saatleri</h4>
                    <div className="text-[12px] text-stone-500 space-y-1">
                      <p>Pzt-Cum: 10:00 - 19:00</p>
                      <p>Cmt: 10:00 - 18:00</p>
                      <p className="opacity-40">Pazar: Kapalı</p>
                    </div>
                  </div>
                  <div className="bg-stone-50/50 p-6 border border-stone-100">
                    <Phone className="w-4 h-4 text-stone-400 mb-4" />
                    <h4 className="text-[10px] tracking-widest uppercase font-semibold mb-3">Telefon</h4>
                    <a href="tel:+905533030809" className="text-sm font-medium hover:text-stone-400">0553 303 08 09</a>
                  </div>
                </div>
              </div>

              {/* Sağ: Adres */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-stone-900 text-white p-10 h-full flex flex-col justify-between"
                >
                  <div>
                    <MapPin className="w-5 h-5 text-stone-500 mb-6" />
                    <h3 className="text-lg font-serif italic mb-4 text-accent">Lokasyonumuz</h3>
                    <address className="not-italic text-stone-400 font-light text-sm leading-relaxed mb-6">
                      75. Yıl Mahallesi, İstiklal Caddesi<br />
                      1311. Sokak No: 2-B<br />
                      Sultangazi / İstanbul
                    </address>
                  </div>
                  <div className="pt-6 border-t border-stone-800">
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-4 h-4 text-stone-500" />
                      <span className="text-[9px] tracking-widest uppercase">ESO Onaylı Klinik</span>
                    </div>
                    <Button variant="link" className="text-white p-0 h-auto text-[10px] tracking-widest uppercase hover:text-stone-400">
                      <a href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwjowrPs0PWTAxUAAAAAHQAAAAAQCg..i&cshid=1776454535208477&pvq=Cg0vZy8xMXcyOGd6cWJsIhYKEHplZ2V1cyBnw7x6ZWxsaWsQAhgD&lqi=ChB6ZWdldXMgZ8O8emVsbGlrWhIiEHplZ2V1cyBnw7x6ZWxsaWuSAQxiZWF1dHlfc2Fsb24&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&ftid=0x14cab1506f93dc45:0x156b4797c9f00fc9" target="_blank" rel="noopener noreferrer">Haritayı Aç →</a>
                    </Button>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </main>

        <LogoSection />
        <Footer />
      </div>
    </>
  );
};

export default RandevuAlPage;