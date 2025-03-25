"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#fff6f1]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="bg-alaamal-primary text-white p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              نحن هنا لخدمتك، تواصل معنا بالطريقة التي تناسبك
            </h2>

            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <p className="font-medium">+966 0552088807</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaWhatsapp className="text-white" />
                </div>
                <div>
                  <p className="font-medium">+966 0557110419</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <p className="font-medium">info@alaamal.com.sa</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <p className="font-medium">الرياض - حي الملز - شارع صلاح الدين</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-center text-alaamal-primary">تواصل معنا</h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="text"
                placeholder="الاسم"
                className="rounded-lg p-6 border-gray-200 bg-white/80"
                pattern="^[\u0600-\u06FFa-zA-Z\s]+$"
                required
                title="الرجاء إدخال الاسم باستخدام الحروف فقط"
              />

              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                className="rounded-lg p-6 border-gray-200 bg-white/80"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                title="الرجاء إدخال بريد إلكتروني صحيح"
              />

              <Input
                type="tel"
                placeholder="رقم الهاتف"
                className="rounded-lg p-6 border-gray-200 bg-white/80"
                pattern="[0-9]{11,}"
                minLength={11}
                required
                title="الرجاء إدخال رقم هاتف صحيح (11 رقم على الأقل)"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />

              <select className="w-full h-13 rounded-lg p-5 border border-gray-200 bg-white/80 text-gray-500">
                <option value="">نوع الطلب</option>
                <option value="service">طلب خدمة</option>
                <option value="inquiry">استفسار</option>
                <option value="complaint">شكوى</option>
                <option value="suggestion">اقتراح</option>
              </select>

              <textarea
                placeholder="نص الرسالة"
                rows={5}
                className="w-full rounded-lg p-6 border border-gray-200 bg-white/80"
              ></textarea>

              <Button className="w-full bg-alaamal-primary hover:bg-alaamal-primary/90 text-white py-6 rounded-lg">
                إرسال
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
