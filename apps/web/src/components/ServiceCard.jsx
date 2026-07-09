
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ title, description, price, icon: Icon, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col border-2 border-primary/30 hover:border-primary hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-primary/5">
        <CardHeader>
          {Icon && (
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-accent group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Icon className="w-8 h-8" />
            </div>
          )}
          <CardTitle className="text-2xl text-balance">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="text-3xl font-bold text-accent" style={{ fontFamily: "Playfair Display, serif" }}>
            {price}
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
            Randevu Al
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
