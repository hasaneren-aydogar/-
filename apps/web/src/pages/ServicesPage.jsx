
import React from 'react';
import { Helmet } from 'react-helmet';
import { Scissors, Sparkles, Droplet, Hand, Flower } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
  const services = [
    {
      title: 'Hair Styling',
      description: 'Expert cuts, coloring, and styling that complement your unique features and lifestyle. From classic elegance to contemporary trends.',
      price: '₺850',
      icon: Scissors,
    },
    {
      title: 'Professional Makeup',
      description: 'Flawless makeup application for any occasion. Bridal, special events, or everyday elegance with premium cosmetics.',
      price: '₺650',
      icon: Sparkles,
    },
    {
      title: 'Advanced Skincare',
      description: 'Customized facial treatments using cutting-edge technology and natural ingredients to reveal your radiant complexion.',
      price: '₺750',
      icon: Droplet,
    },
    {
      title: 'Luxury Nail Care',
      description: 'Meticulous manicure and pedicure services with premium polishes and treatments for perfectly groomed hands and feet.',
      price: '₺450',
      icon: Hand,
    },
    {
      title: 'Spa Treatments',
      description: 'Indulgent body treatments, massages, and wellness therapies designed to rejuvenate your body and calm your mind.',
      price: '₺950',
      icon: Flower,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - ZEGEUS güzellik</title>
        <meta
          name="description"
          content="Explore our premium beauty services including hair styling, makeup, skincare, nail care, and spa treatments at ZEGEUS güzellik."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-24 bg-gradient-to-b from-secondary to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance"
                  style={{ letterSpacing: '-0.02em', fontFamily: "Playfair Display, serif" }}
                >
                  Our Premium Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Discover our comprehensive range of luxury beauty treatments, each designed to enhance your natural beauty and well-being
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {services.slice(0, 4).map((service, index) => (
                  <ServiceCard key={service.title} {...service} index={index} />
                ))}
              </div>

              <div className="max-w-2xl mx-auto">
                {services.slice(4).map((service, index) => (
                  <ServiceCard key={service.title} {...service} index={index + 4} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-card">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Not sure which service is right for you?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Book a complimentary consultation with one of our beauty experts. We'll discuss your needs and create a personalized treatment plan.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
              >
                Schedule a Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
