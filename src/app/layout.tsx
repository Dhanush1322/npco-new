import "../../styles/bootstrap.min.css";
import "animate.css";
import "../../styles/boxicons.min.css";
import "../../styles/flaticon.css"; 
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import "../../styles/style.css";
import "../../styles/responsive.css";
// Global rtl styles
import "../../styles/rtl.css";

import type { Metadata } from "next";
import { Open_Sans, Dosis } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import ScrollToTop from "@/components/Layouts/ScrollToTop";
import RtlMode from "@/components/Layouts/RtlMode";

// For all body text font
const open_sans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

// For all heading font
const dosis = Dosis({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-dosis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "npco",
  description: "npco",
  icons: {
    icon: "/logo.webp",           // default favicon
    shortcut: "/logo.webp",       // optional shortcut icon
    apple: "/logo.webp", // for iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${open_sans.variable} ${dosis.variable}`}>
      <body>
        {children}

        <AosAnimation />

        <ScrollToTop />

        <RtlMode />
      </body>
    </html>
  );
}
