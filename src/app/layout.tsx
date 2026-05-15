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
    template: '%s | Hope Charity Organization',
    default: 'Hope - Charity Organization',
  },
  description: "Every child deserves a chance to dream, grow, and thrive. Join us in making a difference in children's lives worldwide.",
  keywords: ["charity", "donation", "children", "hope", "volunteer", "education", "nutrition"],
  authors: [{ name: "Hope Charity" }],
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
      </body>
    </html>
  );
}
