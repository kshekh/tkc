import type { Metadata } from "next";
import { Inter, League_Spartan, Montserrat } from "next/font/google";
import "./globals.css";
import { ImageResponse } from "next/og";

const inter = Inter({ subsets: ["latin"], variable: "--inter", });
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--league_lpartan",
});
const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });

export const metadata: Metadata = {
  title: "The Keys Company",
  description: "Branded Condo Portal for The Keys Company",
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${montserrat.variable} ${inter.variable} font-sans`}
    >
      <body className="bg-black/5">{children}</body>
    </html>
  );
}
