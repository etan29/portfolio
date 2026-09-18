import "./globals.css";
import { Allerta, Amaranth } from "next/font/google";
import { withBasePath } from "@/data/site";
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

const iconUrl = withBasePath("/icon.png");

export const metadata = {
  metadataBase: new URL("https://etan29.github.io/portfolio"),
  title: "Emily Tan",
  description:
    "Portfolio of Emily Tan, a Computer Science student at UC Riverside.",
  icons: {
    icon: [{ url: iconUrl, type: "image/png" }],
    shortcut: iconUrl,
    apple: iconUrl,
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
