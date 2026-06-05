import { Overpass, Dosis } from "next/font/google";
import "./globals.css";
import "../styles/bootstrap.css";
import "../styles/open-iconic-bootstrap.min.css";
import "../styles/animate.css";
import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/magnific-popup.css";
import "../styles/aos.css";
import "../styles/ionicons.min.css";
import "../styles/bootstrap-datepicker.css";
import "../styles/jquery.timepicker.css";
import "../styles/flaticon.css";
import "../styles/icomoon.css";
import "../styles/fancybox.min.css";
import "../styles/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Metadata } from "next";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-overpass",
});

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dosis",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Health Root NGO',
    default: 'Health Root NGO - Healthy Young People Build a Healthy Community',
  },
  description: "Health Root NGO is a youth-centered organization dedicated to promoting health awareness, youth empowerment, and community development in Rwanda.",
  keywords: ["health", "NGO", "youth", "Rwanda", "Kigali", "empowerment", "education", "community"],
  authors: [{ name: "Health Root NGO" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${overpass.variable} ${dosis.variable}`}>
      <body className={overpass.className}>
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
