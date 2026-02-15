import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroClaw | Zero Overhead, Zero Compromise",
  description: "Next-generation AI assistant framework built with Rust. Ultra-lightweight, blazing fast, memory-safe, supporting 22+ AI providers and multi-platform integration."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
