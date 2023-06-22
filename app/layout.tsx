import { Analytics } from "@/app/components/analytics";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Inter } from "next/font/google";
import { Footer } from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "gray" },
  ],
  icons: {
    icon: [{ url: "/icon.svg" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang={process.env.NEXT_PUBLIC_SITE_LANGUAGE}>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
