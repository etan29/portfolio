import "./globals.css";
import { Allerta, Amaranth } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amaranth",
});

const allerta = Allerta({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allerta",
});

export const metadata = {
  title: "Emily Tan",
  description:
    "Portfolio of Emily Tan, a Computer Science student at UC Riverside.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${amaranth.variable} ${allerta.variable} font-sans antialiased`}
      >
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
