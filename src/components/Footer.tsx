"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSnapchat, FaFacebook, FaTiktok, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-alaamal-primary text-white mt-20">
      <div className="container mx-auto py-8">
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 border-b border-alaamal-primary/30 pb-8">
          {/* Social and Certifications */}
          <div className="w-full md:w-auto">
            <div className="flex flex-wrap gap-4 mb-6">
              <Link href="https://snapchat.com/t/dg0TPTbP" target="_blank" className="bg-white p-2 rounded-full text-alaamal-primary">
                <FaSnapchat size={20} />
              </Link>
              <Link href="https://www.facebook.com/mnastalaml/about" target="_blank" className="bg-white p-2 rounded-full text-alaamal-primary">
                <FaFacebook size={20} />
              </Link>
              <Link href="https://www.tiktok.com/@mnastalaml" target="_blank" className="bg-white p-2 rounded-full text-alaamal-primary">
                <FaTiktok size={20} />
              </Link>
              <Link href="https://x.com/mnastalaml" target="_blank" className="bg-white p-2 rounded-full text-alaamal-primary">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://www.instagram.com/mnastalaml" target="_blank" className="bg-white p-2 rounded-full text-alaamal-primary">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://wa.me/+966557110419" target="_blank" className="bg-white p-2 rounded-full text-alaamal-primary">
                <FaWhatsapp size={20} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              <Image
                src="https://ext.same-assets.com/3341991382/679436484.png"
                alt="Payment Methods"
                width={300}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Certificates */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white p-2">
                <Image
                  src="https://ext.same-assets.com/3341991382/1128536622.webp"
                  alt="بنك الراجحي"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <span className="text-white text-sm">بنك الراجحي</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white p-2">
                <Image
                  src="https://ext.same-assets.com/3341991382/3195214342.webp"
                  alt="بنك النماء"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <span className="text-white text-sm">بنك الإنماء</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white p-2">
                <Image
                  src="https://ext.same-assets.com/3341991382/3994859028.webp"
                  alt="شهادة المركز السعودي للأعمال"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <span className="text-white text-sm">شهادة المركز السعودي للأعمال</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white p-2">
                <Image
                  src="https://ext.same-assets.com/3341991382/2768903345.png"
                  alt="شهادة الضريبة"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <span className="text-white text-sm">شهادة الضريبة</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white p-2">
                <Image
                  src="https://ext.same-assets.com/3341991382/2852208972.png"
                  alt="شهادة تسجيل العلامة التجارية"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <span className="text-white text-sm">شهادة تسجيل العلامة التجارية</span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-right">
            <p className="text-sm">السجل التجاري: 1010721011 _ الرقم الضريبي: 310948253300003</p>
            <p className="text-sm">جميع الحقوق محفوظة لدى منصة الأعمال © 2024</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://snapchat.com/t/dg0TPTbP" target="_blank">
              <FaSnapchat size={18} />
            </Link>
            <Link href="https://www.facebook.com/mnastalaml/about" target="_blank">
              <FaFacebook size={18} />
            </Link>
            <Link href="https://www.tiktok.com/@mnastalaml" target="_blank">
              <FaTiktok size={18} />
            </Link>
            <Link href="https://x.com/mnastalaml" target="_blank">
              <FaTwitter size={18} />
            </Link>
            <Link href="https://www.instagram.com/mnastalaml" target="_blank">
              <FaInstagram size={18} />
            </Link>
            <Link href="https://wa.me/+966557110419" target="_blank">
              <FaWhatsapp size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
