import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Zahir | Software Developer",
  description: "I build reliable software as an adaptable developer skilled in problem-solving and collaboration. Explore my portfolio of web applications and projects.",
  keywords: ["Software Developer", "Web Developer", "React", "Next.js", "TypeScript", "Full Stack"],
  authors: [{ name: "Ali Zahir" }],
  openGraph: {
    title: "Ali Zahir | Software Developer",
    description: "I build reliable software as an adaptable developer skilled in problem-solving and collaboration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
