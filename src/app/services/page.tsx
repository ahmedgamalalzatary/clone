"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

interface ServiceItem {
  id: number;
  title: string;
  price: string;
  icon: string;
  link: string;
}

interface Service extends ServiceItem {
  description: string;
}

const serviceItems: ServiceItem[] = [
  {
    id: 1,
    title: "تأسيس الشركات",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/company-establishment",
  },
  // Add more service items as needed
];

const services: Service[] = serviceItems.map((item) => ({
  id: item.id,
  title: item.title,
  price: item.price,
  icon: item.icon,
  description: item.title,
  link: item.link
}));


export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedServices, setDisplayedServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDisplayedServices(services);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-alaamal-light">
      <Header />

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-alaamal-dark mb-4">خدماتنا</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات الحكومية المميزة لتسهيل إجراءات الأعمال للشركات والأفراد
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence>
              {displayedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={item}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  transition={{ duration: 0.5 }}
                  className="bg-alaamal-light rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="h-10 w-10"
                      />
                    </div>
                    <span className="text-alaamal-primary font-bold">
                      {service.price} ريال
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-alaamal-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mt-4">
                    <Button className="w-full bg-white hover:bg-gray-50 text-alaamal-primary border border-alaamal-primary/20 rounded-full">
                      طلب الخدمة
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {isLoading && (
            <div className="flex justify-center items-center mt-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-alaamal-primary"></div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
