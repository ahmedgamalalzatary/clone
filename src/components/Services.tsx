"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceItem {
  id: number;
  title: string;
  price: string;
  icon: string;
  link: string;
}

// Restore original icon paths
const serviceItems: ServiceItem[] = [
  {
    id: 1,
    title: "تأسيس الشركات",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp", // Restored original icon
    link: "/services/company-establishment",
  },
  {
    id: 2,
    title: "تعديل عقود التاسيس",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp", // Restored original icon
    link: "/services/contract-modification",
  },
  {
    id: 3,
    title: "إصدار سجل تجاري مؤسسة فردية",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/business-registration",
  },
  {
    id: 4,
    title: "تعديل سجل تجاري مؤسسة فردية",
    price: "150",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/business-registration-modification",
  },
  {
    id: 5,
    title: "حجز اسم تجاري",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/business-name-reservation",
  },
  {
    id: 6,
    title: "تصفية الشركات",
    price: "1000",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/company-liquidation",
  },
  {
    id: 7,
    title: "نقل ملكية المؤسسات",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/ownership-transfer",
  },
  {
    id: 8,
    title: "تعديل / تفعيل الملفات الحكومية",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/government-files-modification",
  },
  {
    id: 9,
    title: "تحويل المؤسسة الى شركة",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/business-to-company",
  },
  {
    id: 10,
    title: "إصدار الرمز الالكتروني الموحد",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/unified-electronic-code",
  },
  {
    id: 11,
    title: "الاستعلام عن متجر الكتروني او منشاة تجارية",
    price: "150",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/business-inquiry",
  },
  {
    id: 12,
    title: "إصدار مستخرج السجل التجاري",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/commercial-registry-extract",
  },
  {
    id: 13,
    title: "إصدار الإفادة الإلكترونية",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/electronic-statement",
  },
  {
    id: 14,
    title: "شطب سجل تجاري (مؤسسات)",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/commercial-registry-deletion",
  },
  {
    id: 15,
    title: "توثيق التجارة الالكترونية",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/ecommerce-documentation",
  },
  {
    id: 16,
    title: "استخراج تراخيص الاستثمار الأجنبي",
    price: "2000",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/foreign-investment-license",
  },
  {
    id: 17,
    title: "تجديد ترخيص وزارة الاستثمار",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/investment-license-renewal",
  },
  {
    id: 18,
    title: "تعديل ترخيص وزارة الاستثمار",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/investment-license-modification",
  },
  {
    id: 19,
    title: "اصدار تاشيرة المدير العام",
    price: "1500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/general-manager-visa",
  },
  {
    id: 20,
    title: "حجز اسم تجاري",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/business-name-reservation-2",
  },
  {
    id: 21,
    title: "إصدار تأشيره",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/visa-issuance",
  },
  {
    id: 22,
    title: "توثيق عقد عمل",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/work-contract-documentation",
  },
  {
    id: 23,
    title: "نقل كفالات",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/sponsorship-transfer",
  },
  {
    id: 24,
    title: "فتح ملف جديد او إضافة مستخدم",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/new-file-or-user",
  },
  {
    id: 25,
    title: "إصدار شهادة التوطين",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/localization-certificate",
  },
  {
    id: 26,
    title: "إنشاء لائحة تنظيم العمل",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/work-regulation",
  },
  {
    id: 27,
    title: "إضافة موقع المنشاة",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/facility-location",
  },
  {
    id: 28,
    title: "تغيير نشاط المنشاة",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/facility-activity-change",
  },
  {
    id: 29,
    title: "إصدار رخصة نشاط تجاري",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/commercial-activity-license",
  },
  {
    id: 30,
    title: "شهادة تركيب ادوات الوقاية والحماية من الحريق",
    price: "300",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/fire-protection-certificate",
  },
  {
    id: 31,
    title: "تقرير فني فوري",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/instant-technical-report",
  },
  {
    id: 32,
    title: "تعديل رخصة نشاط تجاري",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/commercial-license-modification",
  },
  {
    id: 33,
    title: "تجديد رخصة نشاط تجاري",
    price: "200",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/commercial-license-renewal",
  },
  {
    id: 34,
    title: "نقل ملكية رخصة بلدية",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/municipal-license-transfer",
  },
  {
    id: 35,
    title: "قرار مساحي بغرض التجزئة / الدمج",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/survey-decision",
  },
  {
    id: 36,
    title: "نقل ملكية رخصة البناء",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/building-license-transfer",
  },
  {
    id: 37,
    title: "إصدار رخصة هدم مباني",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/demolition-license",
  },
  {
    id: 38,
    title: "رخصة ترميم",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/renovation-license",
  },
  {
    id: 39,
    title: "تجديد رخصة البناء",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/building-license-renewal",
  },
  {
    id: 40,
    title: "رخصة التسوير",
    price: "800",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/fencing-license",
  },
  {
    id: 41,
    title: "إتمام البناء (شهادة اشغال)",
    price: "400",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/building-completion",
  },
  {
    id: 42,
    title: "إلغاء رخصة نشاط تجاري",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/commercial-license-cancellation",
  },
  {
    id: 43,
    title: "إصدار تصريح رخصة إشغال رصيف",
    price: "2000",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/sidewalk-occupation-permit",
  },
  {
    id: 44,
    title: "تقديم اعتراض على رخصة ملغاة من الرقابة اللاحقة",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/license-objection",
  },
  {
    id: 45,
    title: "ترخيص فتح الموقع 24 ساعة",
    price: "500",
    icon: "https://ext.same-assets.com/3341991382/2289908918.webp",
    link: "/services/24hour-operation-license",
  },
];

// Use the original service items directly
// No need for updatedServiceItems if we've already updated the icons in the original array

const ServicesSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [loadingMore, setLoadingMore] = useState(false);
  
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleLoadMore = () => {
    // Start loading state
    setLoadingMore(true);
    
    // Simulate loading (you can remove this timeout if not needed)
    setTimeout(() => {
      // Increase visible count
      const newCount = Math.min(visibleCount + 9, serviceItems.length);
      console.log(`Increasing visible count from ${visibleCount} to ${newCount}`);
      setVisibleCount(newCount);
      
      // End loading state
      setLoadingMore(false);
    }, 500);
  };

  // Calculate visible services based on current state
  const visibleServices = serviceItems.slice(0, visibleCount);
  const hasMoreServices = visibleCount < serviceItems.length;
  
  // Group services for animation - each batch of 9 services
  const serviceBatches = [];
  for (let i = 0; i < visibleCount; i += 9) {
    serviceBatches.push(visibleServices.slice(i, i + 9));
  }

  return (
    <section className="py-20 bg-[#fff6f1]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-alaamal-dark mb-4">خدماتنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من الخدمات الحكومية المميزة لمساعدة الأفراد والشركات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through each batch with its own animation container */}
          {serviceBatches.map((batch, batchIndex) => (
            <React.Fragment key={`batch-${batchIndex}`}>
              {batch.map((service) => (
              <motion.div
              key={service.id}
              initial={batchIndex === serviceBatches.length - 1 && batchIndex !== 0 ? "hidden" : false}
              animate="show"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-alaamal-light rounded-lg overflow-hidden shadow-lg transition-all relative group"
              >
              {/* Enhanced stylish card layout */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-alaamal-primary/10 rounded-bl-full -z-0"></div>
              
              <div className="p-7 relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-white shadow-md mr-4 transition-all group-hover:shadow-alaamal-primary/20">
                <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="h-10 w-10"
                />
                </div>
                <h3 className="text-xl font-bold text-alaamal-dark pr-1 group-hover:text-alaamal-primary transition-colors">
                {service.title}
                </h3>
              </div>

              <div className="flex justify-between items-center mt-5 gap-4">
                <Button className=" bg-white hover:bg-alaamal-primary hover:text-white text-alaamal-primary border border-alaamal-primary/20 rounded-full py-1.5 text-lg font-bold">
                طلب الخدمة
                </Button>
                <span className="text-alaamal-primary font-bold whitespace-wrap px-3 py-2 bg-alaamal-primary/5 rounded-lg">
                {service.price} ريال
                </span>
              </div>
              </div>
              </motion.div>
              ))}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 text-center">
          {hasMoreServices ? (
            <motion.div
              initial={false}
              animate={{ opacity: loadingMore ? 0.7 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={handleLoadMore}
                className="bg-alaamal-primary hover:bg-alaamal-primary/90 text-white rounded-full px-8 py-3"
                disabled={loadingMore}
              >
                {loadingMore ? 'جاري التحميل...' : 'عرض المزيد من الخدمات'}
              </Button>
            </motion.div>
          ) : (
            <Link href="/services">
              <Button className="bg-alaamal-primary hover:bg-alaamal-primary/90 text-white rounded-full px-8 py-3">
                عرض جميع الخدمات
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;