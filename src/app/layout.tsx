import "./globals.css";
import { Dosis } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Emily Tan",
  description: "Emily Tan's portfolio",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
