import { Inter } from "next/font/google";
import "./globals.css";
import "modern-normalize";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // обери, які потрібні
  variable: "--font-inter", // опціонально — як CSS-змінна
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
