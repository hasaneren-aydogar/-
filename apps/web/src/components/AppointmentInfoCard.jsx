
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AppointmentInfoCard = ({ icon: Icon, title, children, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-primary/5">
        <CardHeader>
          <div className="flex items-center gap-4">
            {Icon && (
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-accent flex-shrink-0">
                <Icon className="w-7 h-7" />
              </div>
            )}
            <CardTitle className="text-xl" style={{ fontFamily: "Playfair Display, serif" }}>
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AppointmentInfoCard;
