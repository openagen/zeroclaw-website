import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroClaw | Security Intelligence",
  description: "ZeroClaw official website built with Next.js and Tailwind CSS"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
