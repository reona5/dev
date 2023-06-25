import { Analytics } from "@/app/components/analytics";
import { ThemeProvider } from "@/app/components/theme-provider";
import localFont from "next/font/local";
import { Footer } from "./components/footer";
import "./globals.css";

const notoSansJP = localFont({
  src: "../public/NotoSansJP-Regular.ttf",
  display: "swap",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "gray" },
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang={process.env.NEXT_PUBLIC_SITE_LANGUAGE}>
      <body className={notoSansJP.className}>
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
