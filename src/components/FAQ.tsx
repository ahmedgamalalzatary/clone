"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const questions: Question[] = [
  {
    id: 1,
    question: "ما هي منصة الأعمال؟",
    answer: "في عام 2018 تم تأسيس منصة الاعمال. وهي مؤسســـــة متخصصة بالخدمـــات الحكومية الإلكترونية الخاصة لقطاع الأعمال والتي تساهم في إيضاح الرؤية لأصحاب الأعمال وفقاً للشروط والإجراءات الحكومية المتبعة.",
  },
  {
    id: 2,
    question: "ما هي الخدمات المقدمة؟",
    answer: "نقدم مجموعة متكاملة من الخدمات الحكومية المخصصة للقطاعين العام والخـاص، تشمل المتابعة الدقيقة وإنجاز الإجراءات والتعقيب بكفاءة عالية لضمان تيسير العمليات وتحقيق رضا العملاء.",
  },
  {
    id: 3,
    question: "كيفية توثيق الطلب بشكل قانوني؟",
    answer: "يتم توثيق جميع الطلبات بشكل قانوني من خلال اتباع الإجراءات الرسمية المعتمدة من الجهات الحكومية، ونقوم بتزويدك بجميع المستندات والوثائق التي تؤكد إتمام الخدمة بشكل رسمي وقانوني.",
  },
  {
    id: 4,
    question: "هل الخدمات متخصصة حسب القطاع؟",
    answer: "نعم، نقدم خدمات متخصصة حسب القطاع، سواء كنت فرداً أو شركة صغيرة أو متوسطة أو كبيرة، لدينا مجموعة من الحلول والخدمات المصممة خصيصاً لتلبية احتياجات كل قطاع.",
  },
  {
    id: 5,
    question: "ماهي المدة لتنفيذ طلبي ؟",
    answer: "يتوقف ذلك على نوع الخدمة والجهة المعنية.",
  },
  {
    id: 6,
    question: " هل تقدمون باقة مخصصة حسب الطلب ",
    answer: "نعم بكل تأكيد . نقدم باقات مخصصة تتناسب مع إحتياجاتك ومتطلباتك.",
  },
];

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        className={`w-full text-right flex justify-between items-center p-4 bg-white rounded-lg shadow-sm focus:outline-none transition-all ${
          isOpen ? "shadow-md" : ""
        }`}
        onClick={onClick}
      >
        <FaChevronDown
          className={`text-alaamal-primary transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
        <h3 className="text-lg font-medium text-alaamal-dark">{question}</h3>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-50 rounded-b-lg">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 bg-alaamal-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-alaamal-dark mb-4">
            أسئلة شائعة وإجابات وافية حول منصتنا وخدماتنا
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {questions.map((q) => (
            <FAQItem
              key={q.id}
              question={q.question}
              answer={q.answer}
              isOpen={openItem === q.id}
              onClick={() => handleToggle(q.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
