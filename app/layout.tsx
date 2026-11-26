import type { Metadata } from "next";
import { Archivo, Mr_Dafoe } from "next/font/google";
import { content } from "@/content";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const dafoe = Mr_Dafoe({
  variable: "--font-dafoe",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${content.name} | ${content.role}`,
  description: content.bio,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${dafoe.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink font-sans text-paper">{children}</body>
    </html>
  );
}
