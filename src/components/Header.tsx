"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)] py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/3341991382/3019418145.svg"
              alt="منصة الأعمال"
              width={140}
              height={50}
              className="h-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10 px-8 py-2 rounded-full ring-2 ring-[#a9541a]/20">
          <Link href="/" className="text-gray-600 hover:text-alaamal-primary transition-colors duration-200 font-medium text-[15px]">
            الرئيسية
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-alaamal-primary transition-colors duration-200 font-medium text-[15px]">
            خدماتنا
          </Link>
          <Link href="/packages" className="text-gray-600 hover:text-alaamal-primary transition-colors duration-200 font-medium text-[15px]">
            الباقات
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-alaamal-primary transition-colors duration-200 font-medium text-[15px]">
            تواصل معنا
          </Link>
        </nav>

        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            className="bg-[#C4821C] hover:bg-[#C4821C]/90 text-white rounded-full px-6 py-2 text-[15px] font-medium"
          >
            احجز خدمة جديدة
          </Button>
        </motion.div>

        <button className="md:hidden text-gray-600 hover:text-gray-800 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
