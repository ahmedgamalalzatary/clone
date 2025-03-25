"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface PackageCardProps {
  title: string;
  price: string;
  period: number;
  color: string;
  services: string[];
  isPopular?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  period,
  color,
  services,
  isPopular = false,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="flex flex-col h-full"
    >
      <Card className={`border-0 shadow-lg p-6 h-full overflow-hidden rounded-xl relative ${isPopular ? 'ring-2 ring-alaamal-primary' : ''}`}>
        {isPopular && (
          <div className="absolute top-0 right-0 bg-alaamal-primary text-white px-4 py-1 text-sm font-medium rounded-bl-xl">
            الأكثر شيوعاً
          </div>
        )}

        <div className={`px-2 py-4 rounded-lg`}>
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${color}`}>
            <span className={`text-white font-bold text-xl`}>
              {title === "باقة الرواد" ? "فضية" : title === "الباقة الذهبية" ? "ذهبية" : "رواد"}
            </span>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-center justify-center gap-1">
            <span className="text-3xl font-bold text-alaamal-primary">{price}</span>
            <span className="text-gray-500">ريال</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">\\{period} شهر</p>
        </div>

        <div className="space-y-3 mb-6">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <FaCheck className="text-alaamal-primary flex-shrink-0" />
              <span className="text-gray-700 text-sm">{service}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <Button className="w-full bg-white hover:bg-gray-50 text-alaamal-primary border border-alaamal-primary rounded-full">
            الاشتراك في الباقة
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const Packages: React.FC = () => {
  return (
    <section className="py-16 bg-alaamal-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-alaamal-dark mb-4">
            الباقات المخصصة لقطاع الأعمال
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اختر الباقة المناسبة لاحتياجاتك من بين باقاتنا المتنوعة التي توفر لك الخدمات بأسعار تنافسية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PackageCard
            title="باقة الرواد"
            price="2,800"
            period={30}
            color="bg-gradient-to-r from-gray-400 to-gray-600"
            services={[
              "عدد الموظفين 0",
              "كشف الرواتب والاستحقاقات",
              "الكشف والمراجعة الشهرية",
              "إشعار استحقاق الخدمة",
            ]}
          />

          <PackageCard
            title="باقة الفضية"
            price="12,000"
            period={12}
            color="bg-gradient-to-r from-gray-400 to-gray-300"
            services={[
              "عدد الموظفين 6",
              "كشف الرواتب والاستحقاقات",
              "الكشف والمراجعة الشهرية",
              "إشعار استحقاق الخدمة",
            ]}
            isPopular
          />

          <PackageCard
            title="الباقة الذهبية"
            price="18,000"
            period={12}
            color="bg-gradient-to-r from-yellow-500 to-yellow-300"
            services={[
              "عدد الموظفين 12",
              "كشف الرواتب والاستحقاقات",
              "الكشف والمراجعة الشهرية",
              "إشعار استحقاق الخدمة",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Packages;
