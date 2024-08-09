import { PT_Sans } from "next/font/google";
import "../globals.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { getDictionary } from "./dictionaries";
import { Analytics } from "@vercel/analytics/react";
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Atega",
  description: "Atega Partners",
};

export default async function RootLayout({ children, params }) {
  let t = await getDictionary(params.lang)
  return (
    <html lang={params.lang}>
      <body className={pt_sans.className}>
        <Navbar dict={t.navbar} />
        {children}
        
      </body>
    </html>
  );
}
