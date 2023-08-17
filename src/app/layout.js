import "./globals.css";
import { Days_One } from "next/font/google";

const daysOne = Days_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Sanbox Chess",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${daysOne.className} bg-amber-100`}>{children}</body>
    </html>
  );
}
