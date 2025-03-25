"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "محمد العامري",
    position: "رجل أعمال",
    text: "أتاحت لي منصة الأعمال سهولة إنجاز معاملاتي وتوفير الكثير من الوقت والجهد. أسلوب عملهم احترافي ومميز ويسعني أن أنصح بخدماتهم لجميع رجال الأعمال الذين يبحثون عن الموثوقية والدقة والإتقان في تنفيذ المعاملات الحكومية.",
    image: "https://ext.same-assets.com/3341991382/330932830.webp",
  },
  {
    id: 2,
    name: "سارة الخالدي",
    position: "صاحبة مؤسسة تجارية",
    text: "أنا عميلة منتظمة لمنصة الأعمال منذ عامين، وصدقًا لم يخذلوني أبدًا. فريق العمل متعاون وودود، والخدمة سريعة وفعالة. لقد تمكنت من توفير ساعات من وقتي بفضل خدماتهم المتميزة في إنجاز المعاملات والمراجعات الحكومية.",
    image: "https://ext.same-assets.com/3341991382/330932830.webp",
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Image
            src="https://ext.same-assets.com/1321559704/2588718124.svg"
            alt="quote"
            width={40}
            height={40}
            className="h-8 w-auto opacity-30"
          />
        </div>

        <p className="text-gray-600 mb-6 flex-grow">{testimonial.text}</p>

        <div className="flex items-center gap-4 mt-auto">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-alaamal-dark">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-alaamal-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-alaamal-dark mb-4">
            آراء و تقييمات عملائنا عن خدماتنا المميزة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
