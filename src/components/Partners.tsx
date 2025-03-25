"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "بلانت",
    logo: "https://ext.same-assets.com/3341991382/3195214342.webp",
  },
  {
    id: 2,
    name: "وليد خياط",
    logo: "https://ext.same-assets.com/3341991382/3994859028.webp",
  },
  {
    id: 3,
    name: "عبد العزيز الصياد",
    logo: "https://ext.same-assets.com/3341991382/2768903345.png",
  },
];

const Partners: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-alaamal-primary mb-4">
            نفتخر بهم شركاؤنا الذين نثق بهم
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-16">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="w-64 h-64 flex items-center justify-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={200}
                className="max-h-full max-w-full object-contain"
                priority
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
