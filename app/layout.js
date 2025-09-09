import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n/I18nContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = { title: "Vending Maticin" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider>
          <div className="bgimage-set-css min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center sm:px-6 md:px-10 bg-[#ecf6f6]">
            {children}
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
