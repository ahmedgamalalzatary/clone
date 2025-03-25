"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#fff6f1] relative overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-alaamal-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-alaamal-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-alaamal-primary mb-6 leading-tight">
              نساعدك في إنجاز معاملاتك
              <span className="text-alaamal-gold block">بكل سهولة ويسر</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              منصة الأعمال للخدمات الحكومية تقدم لك أسرع وأبسط الحلول لإنجاز معاملتك
              الحكومية بكل احترافية وموثوقية
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-alaamal-primary hover:bg-alaamal-primary/90 text-white px-8 py-6 text-lg rounded-full"
              >
                ابدأ معنا الآن
              </Button>
              <Button 
                variant="outline"
                className="border-alaamal-primary text-alaamal-primary hover:bg-alaamal-primary hover:text-white px-8 py-6 text-lg rounded-full"
              >
                تعرف على خدماتنا
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-alaamal-primary">98%</span>
                <span className="text-gray-600">نسبة رضا العملاء</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-alaamal-primary">24/7</span>
                <span className="text-gray-600">دعم متواصل</span>
              </div>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;
