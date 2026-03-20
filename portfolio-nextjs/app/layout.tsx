import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pau Berenguer - Co-Founder Asisttente | Creador de Contenido IA",
  description: "Transformo ideas en realidad con Inteligencia Artificial. Aquí comparto lo que aprendo construyendo mi empresa y mi canal de YouTube.",
  keywords: ["IA", "Inteligencia Artificial", "Chatbots", "Automatización", "YouTube", "The AI Blueprint"],
  authors: [{ name: "Pau Berenguer" }],
  openGraph: {
    title: "Pau Berenguer - Co-Founder Asisttente",
    description: "Transformo ideas en realidad con Inteligencia Artificial",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
