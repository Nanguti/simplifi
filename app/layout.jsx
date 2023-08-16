import "./globals.css";
import "@/styles/css/vendor/bootstrap.min.css";
import "@/styles/css/vendor/font-awesome.css";
import "@/styles/css/vendor/fontawesome-stars.css";
import "@/styles/css/vendor/ion-fonts.css";
import "@/styles/css/plugins/slick.css";
import "@/styles/css/plugins/animate.css";
import "@/styles/css/plugins/jquery-ui.min.css";
import "@/styles/css/plugins/lightgallery.min.css";
import "@/styles/css/plugins/nice-select.css";
import "@/styles/css/custom.css";
import "@/styles/css/style.css";
import Script from "next/script";
// import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: " Simplifi Networks",
  description:
    "The Master Distributor for networking and communications equipment for East and Central Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="template-color-1">
        <div className="main-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        <Script src="/assets/js/vendor/jquery-1.12.4.min.js" />
        <Script src="/assets/js/vendor/modernizr-2.8.3.min.js" />
        <Script src="/assets/js/vendor/popper.min.js" />
        <Script src="/assets/js/vendor/bootstrap.min.js" />
        <Script src="/assets/js/plugins/slick.min.js" />
        <Script src="/assets/js/plugins/jquery.barrating.min.js" />
        <Script src="/assets/js/plugins/jquery.counterup.js" />
        <Script src="/assets/js/plugins/jquery.nice-select.js" />
        <Script src="/assets/js/plugins/jquery.sticky-sidebar.js" />
        <Script src="/assets/js/plugins/jquery-ui.min.js" />
        <Script src="/assets/js/plugins/jquery.ui.touch-punch.min.js" />
        <Script src="/assets/js/plugins/lightgallery.min.js" />
        <Script src="/assets/js/plugins/scroll-top.js" />
        <Script src="/assets/js/plugins/theia-sticky-sidebar.min.js" />
        <Script src="/assets/js/plugins/waypoints.min.js" />
        <Script src="/assets/js/plugins/jquery.zoom.min.js" />
        <Script src="/assets/js/main.js" />
      </body>
    </html>
  );
}
