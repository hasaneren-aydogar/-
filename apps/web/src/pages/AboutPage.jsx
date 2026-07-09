
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We commit to delivering the highest quality beauty services with attention to every detail.',
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Our team consists of certified professionals with extensive training and years of experience.',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Every client receives personalized attention and treatments tailored to their unique needs.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We stay current with the latest beauty trends and techniques to offer you the best.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - ZEGEUS güzellik</title>
        <meta
          name="description"
          content="Learn about ZEGEUS güzellik, our story, mission, values, and the expert team dedicated to enhancing your natural beauty."
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
                  About ZEGEUS güzellik
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Where passion for beauty meets dedication to excellence
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Our Story
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      Founded in the heart of Istanbul's prestigious Nişantaşı district, ZEGEUS güzellik has been a sanctuary of beauty and wellness since 2018. Our vision was simple yet profound: create a space where artistry and expertise combine to celebrate individual beauty.
                    </p>
                    <p>
                      What started as a small boutique salon has grown into Istanbul's premier destination for comprehensive beauty services. Our commitment to excellence and personalized care has earned us the trust of discerning clients who value quality and authenticity.
                    </p>
                    <p>
                      Today, we continue to honor our founding principles while embracing innovation, ensuring that every visit to ZEGEUS güzellik is an experience in luxury and transformation.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1633681926019-03bd9325ec20"
                    alt="ZEGEUS güzellik salon interior"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>
              </div>

              <div className="mb-24">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-12 text-center"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6">
                        <value.icon className="w-10 h-10" />
                      </div>
                      <h3
                        className="text-xl font-semibold mb-3"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-12 text-center shadow-lg"
              >
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  To empower every individual to feel confident and beautiful through exceptional service, personalized care, and a commitment to enhancing natural beauty. At ZEGEUS güzellik, we believe that true beauty radiates from within, and our role is to help you shine.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
