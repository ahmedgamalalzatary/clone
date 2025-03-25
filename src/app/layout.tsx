import "./globals.css";
import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "منصة الأعمال - مكتب خدمات عامة - خدمات حكومية",
  description: "منصة الأعمال للخدمات الحكومية تقدم لك أسرع وأبسط الحلول لإنجاز معاملتك الحكومية بكل احترافية وموثوقية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#fff6f1]">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
