import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "İstanbul Premium Oto Servis | Profesyonel Araç Bakım ve Onarım",
  description:
    "İstanbul Premium oto servis hizmetleriyle aracınıza özel bakım ve onarım çözümleri sunuyoruz. Hızlı, güvenilir ve kaliteli hizmet için bizi tercih edin!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnHover
          theme="light"
          transition={Bounce}
          toastStyle={{
            backgroundColor: "black",
            color: "white",
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
