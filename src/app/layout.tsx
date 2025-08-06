import { Inter } from "next/font/google";
import "./globals.css";
import "modern-normalize";
import AppBar from "./components/AppBar/AppBar";

const font = Inter({
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
    <html lang="en" className={font.className}>
      <body>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
