import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaCheck, FaTimes } from "react-icons/fa";

interface Feature {
  title: string;
  value: string;
  included: boolean;
}

interface Package {
  id: number;
  title: string;
  price: string;
  period: number;
  color: string;
  badge: string;
  features: Feature[];
  description: string;
}

const packages: Package[] = [
  {
    id: 1,
    title: "باقة الرواد",
    price: "2,800",
    period: 30,
    color: "bg-gradient-to-r from-gray-400 to-gray-600",
    badge: "اقتصادية",
    features: [
      { title: "عدد الموظفين", value: "0", included: true },
      { title: "كشف الرواتب والاستحقاقات", value: "", included: true },
      { title: "الكشف والمراجعة الشهرية", value: "", included: true },
      { title: "إشعار استحقاق الخدمة", value: "", included: true },
      { title: "خدمات الاستشارات القانونية", value: "", included: false },
      { title: "خدمات نقل ملكية", value: "", included: false },
    ],
    description: "باقة مثالية للرواد من أصحاب الأعمال والمؤسسات الفردية الصغيرة.",
  },
  {
    id: 2,
    title: "باقة الفضية",
    price: "12,000",
    period: 12,
    color: "bg-gradient-to-r from-gray-400 to-gray-300",
    badge: "الأكثر شيوعاً",
    features: [
      { title: "عدد الموظفين", value: "6", included: true },
      { title: "كشف الرواتب والاستحقاقات", value: "", included: true },
      { title: "الكشف والمراجعة الشهرية", value: "", included: true },
      { title: "إشعار استحقاق الخدمة", value: "", included: true },
      { title: "خدمات الاستشارات القانونية", value: "", included: true },
      { title: "خدمات نقل ملكية", value: "", included: false },
    ],
    description: "الباقة الأكثر طلباً من قبل الشركات المتوسطة والمؤسسات النامية.",
  },
  {
    id: 3,
    title: "الباقة الذهبية",
    price: "18,000",
    period: 12,
    color: "bg-gradient-to-r from-yellow-500 to-yellow-300",
    badge: "احترافية",
    features: [
      { title: "عدد الموظفين", value: "12", included: true },
      { title: "كشف الرواتب والاستحقاقات", value: "", included: true },
      { title: "الكشف والمراجعة الشهرية", value: "", included: true },
      { title: "إشعار استحقاق الخدمة", value: "", included: true },
      { title: "خدمات الاستشارات القانونية", value: "", included: true },
      { title: "خدمات نقل ملكية", value: "", included: true },
    ],
    description: "الباقة الشاملة للشركات الكبيرة التي تبحث عن حلول متكاملة ومميزة.",
  },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-alaamal-light">
      <Header />

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-alaamal-dark mb-4">باقاتنا</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر الباقة المناسبة لاحتياجاتك من بين باقاتنا المتنوعة التي توفر لك الخدمات بأسعار تنافسية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`border-0 shadow-lg p-6 overflow-hidden rounded-xl relative ${pkg.id === 2 ? 'ring-2 ring-alaamal-primary' : ''}`}
              >
                {pkg.badge && (
                  <div className={`absolute top-0 right-0 ${pkg.id === 2 ? 'bg-alaamal-primary' : 'bg-gray-500'} text-white px-4 py-1 text-sm font-medium rounded-bl-xl`}>
                    {pkg.badge}
                  </div>
                )}

                <div className={`px-2 py-4 rounded-lg`}>
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${pkg.color}`}>
                    <span className={`text-white font-bold text-xl`}>
                      {pkg.title === "باقة الرواد" ? "رواد" : pkg.title === "باقة الفضية" ? "فضية" : "ذهبية"}
                    </span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl font-bold text-alaamal-primary">{pkg.price}</span>
                    <span className="text-gray-500">ريال</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">\\{pkg.period} شهر</p>
                  <p className="text-gray-600 mt-4">{pkg.description}</p>
                </div>

                <div className="space-y-4 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {feature.included ? (
                          <FaCheck className="text-green-500 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-red-500 flex-shrink-0" />
                        )}
                        <span className="text-gray-700">{feature.title}</span>
                      </div>
                      {feature.value && (
                        <span className="font-medium">{feature.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-alaamal-primary hover:bg-alaamal-primary/90 text-white rounded-full py-2">
                    الاشتراك في الباقة
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-alaamal-light rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-alaamal-dark mb-4">باقات مخصصة للشركات الكبرى</h2>
              <p className="text-gray-600 mb-6">
                نوفر أيضاً باقات مخصصة للشركات الكبرى والمؤسسات ذات الاحتياجات الخاصة، يمكنك التواصل معنا لتصميم باقة تناسب متطلباتك الخاصة.
              </p>
              <Button className="bg-alaamal-primary hover:bg-alaamal-primary/90 text-white rounded-full px-8 py-3">
                طلب باقة مخصصة
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
