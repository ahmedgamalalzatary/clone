"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface StatisticItemProps {
  title: string;
  value: string;
  suffix?: string;
  delay?: number;
}

const useCounter = (end: number, duration: number = 2, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, start]);

  return count;
};

const StatisticItem: React.FC<StatisticItemProps> = ({ title, value, suffix = "", delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCounter(parseInt(value), 2, isInView);

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-xl shadow-md text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-4xl md:text-5xl font-bold text-alaamal-primary mb-2">
        {count}
        <span className="text-alaamal-gold">{suffix}</span>
      </h3>
      <p className="text-alaamal-dark font-medium">{title}</p>
    </motion.div>
  );
};

const Statistics: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-alaamal-dark mb-4">
            إنجازات مشرفة وإحصائيات نعتز بها في مسيرة منصتنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatisticItem
            title="عميل نلنا ثقتهم"
            value="2930"
            suffix="+"
            delay={0.1}
          />
          <StatisticItem
            title="خدمة نقدمها"
            value="134"
            suffix="+"
            delay={0.2}
          />
          <StatisticItem
            title="سنوات خبرة"
            value="6"
            suffix="+"
            delay={0.3}
          />
          <StatisticItem
            title="معاملات منجزة"
            value="13241"
            suffix="+"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
