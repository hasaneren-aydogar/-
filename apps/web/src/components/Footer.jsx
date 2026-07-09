import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Hakkında', path: '/hakkinda' },
    { name: 'Randevu Al', path: '/randevu-al' },
  ];

  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Marka Kimliği */}
          <div className="space-y-6">
            <img
              src="https://horizons-cdn.hostinger.com/1aa6bbb2-e22c-4754-aece-a17675e4804f/9c41669b9e8ec20d7d3c2d63d03f8281.png"
              alt="ZEGEUS Signature"
              className="h-12 w-auto mix-blend-multiply opacity-90"
            />
            <p className="text-[13px] leading-[1.8] text-stone-500 font-light tracking-wide italic">
              Bilimsel hassasiyet ve estetik vizyonun buluştuğu noktada, Sultangazi'nin en seçkin güzellik deneyimi.
            </p>
            <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] text-stone-400 uppercase">
              <ShieldCheck className="w-4 h-4 text-stone-300 stroke-[1px]" />
              <span>ESO Certified Institute</span>
            </div>
          </div>

          {/* Navigasyon */}
          <div>
            <span className="text-[12px] tracking-[0.3em] font-medium mb-8 block text-stone-900 uppercase">
              KEŞFET
            </span>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-stone-500 hover:text-stone-950 transition-colors duration-500 font-light tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Detayları */}
          <div>
            <span className="text-[12px] tracking-[0.3em] font-medium mb-8 block text-stone-900 uppercase">
              DANIŞMANLIK
            </span>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Phone className="w-4 h-4 mt-0.5 text-stone-300 stroke-[1px]" />
                <a href="tel:+905533030809" className="text-[13px] text-stone-500 hover:text-stone-950 transition-colors tracking-wide">
                  0553 303 08 09
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-4 h-4 mt-0.5 text-stone-300 stroke-[1px]" />
                <a href="mailto:info@zegeus.com" className="text-[13px] text-stone-500 hover:text-stone-950 transition-colors tracking-wide">
                  info@zegeus.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 mt-0.5 text-stone-300 stroke-[1px]" />
                <span className="text-[13px] text-stone-500 leading-relaxed font-light tracking-wide">
                  75. Yıl Mah. İstiklal Cad.<br />1311. Sk. No:2-B, Sultangazi
                </span>
              </li>
            </ul>
          </div>

          {/* Sosyal & Motto */}
          <div>
            <span className="text-[12px] tracking-[0.3em] font-medium mb-8 block text-stone-900 uppercase">
              TAKİP EDİN
            </span>
            <div className="flex gap-6 mb-8">
              <a href="https://www.instagram.com/zegeus.guzellik/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-all">
                <Instagram className="w-5 h-5 stroke-[1px]" />
              </a>
              {/* Buraya WhatsApp veya diğerleri gelebilir */}
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed italic font-light tracking-widest border-l border-stone-200 pl-4">
              "Güzellik, detayların mükemmel uyumudur."
            </p>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-20 pt-10 border-t border-stone-200/60">
          <div className="flex flex-col md:row justify-between items-center gap-6">
            <p className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
              © {currentYear} ZEGEUS GÜZELLİK ENSTİTÜSÜ
            </p>
            <div className="flex gap-8">
              <Link to="/gizlilik" className="text-[10px] tracking-[0.2em] text-stone-400 hover:text-stone-900 uppercase transition-colors">
                GİZLİLİK
              </Link>
              <Link to="/kosullar" className="text-[10px] tracking-[0.2em] text-stone-400 hover:text-stone-900 uppercase transition-colors">
                KOŞULLAR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;