
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryCard from '@/components/GalleryCard.jsx';

const GalleryPage = () => {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1620252655460-080dbec533ca',
      title: 'Radiant Skin Transformation',
      category: 'Skincare',
    },
    {
      image: 'https://images.unsplash.com/photo-1608515152841-ede49b2e1bd1',
      title: 'Elegant Bridal Makeup',
      category: 'Makeup',
    },
    {
      image: 'https://images.unsplash.com/photo-1668245186988-16d4996622b0',
      title: 'Precision Hair Styling',
      category: 'Hair',
    },
    {
      image: 'https://images.unsplash.com/photo-1580421383874-7e60f05f64b4',
      title: 'Luxury Spa Experience',
      category: 'Spa',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Gallery - ZEGEUS güzellik</title>
        <meta
          name="description"
          content="View our portfolio of stunning beauty transformations and treatments at ZEGEUS güzellik. See the results of our expert services."
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
                  Our Gallery
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Explore the transformations and artistry that define ZEGEUS güzellik. Each image tells a story of beauty, confidence, and excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item, index) => (
                  <GalleryCard key={index} {...item} index={index} />
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
                Ready to begin your transformation?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join the many satisfied clients who trust ZEGEUS güzellik for their beauty needs. Book your appointment today and experience the difference.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
              >
                Book Your Appointment
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
