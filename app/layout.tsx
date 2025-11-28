import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Havsan Grup | Robotik, Yapay Zeka & Enerji",
  description: "Havsan Grup - Üç ana iş kolunu (Robotik, AI, Enerji) tek bir çatı altında toplayan yüksek teknolojili dijital platform",
  keywords: ["Havsan", "Robotik", "Yapay Zeka", "Enerji", "AI", "GES"],
  authors: [{ name: "Havsan Grup" }],
  openGraph: {
    title: "Havsan Grup | Robotik, Yapay Zeka & Enerji",
    description: "Havsan Grup - Üç ana iş kolunu (Robotik, AI, Enerji) tek bir çatı altında toplayan yüksek teknolojili dijital platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
