import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-alaamal-light">
      <Header />

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-alaamal-dark mb-4">تواصل معنا</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نحن دائماً سعداء بالتواصل معك والإجابة على استفساراتك وتقديم المساعدة اللازمة
            </p>
          </div>

          <ContactSection />

          <div className="mt-16">
            <div className="bg-alaamal-light rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6 text-alaamal-primary">
                <FaMapMarkedAlt className="text-4xl" />
                <h2 className="text-2xl font-bold">موقعنا</h2>
              </div>

              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5427966873984!2d46.75040721500014!3d24.701062984130483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03631e889e1d%3A0xb7c77a95a2dca731!2z2YXZhtmI2LnZhyDYp9mE2YXZhNiyIC0g2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1648227924853!5m2!1sar!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">رقم الهاتف</h3>
              <p className="text-alaamal-primary font-medium">+966 0552088807</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">الواتساب</h3>
              <p className="text-alaamal-primary font-medium">+966 0557110419</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">البريد الإلكتروني</h3>
              <p className="text-alaamal-primary font-medium">info@alaamal.com.sa</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">ساعات العمل</h3>
              <p className="text-gray-600">الأحد - الخميس: 9 صباحًا - 5 مساءً</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
