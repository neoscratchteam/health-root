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

export const metadata = {
  title: "Hope - Charity Organization",
  description: "Every child deserves a chance to dream, grow, and thrive.",
};

export default function RootLayout({ children }) {
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
