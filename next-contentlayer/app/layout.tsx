import { Analytics } from "@/app/components/analytics";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <head>
        {/* Chrome / Firefox / Edge */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🫰</text></svg>"
        />
        {/* Safari / IE */}
        <link
          rel="icon alternate"
          type="image/png"
          href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1faf0.png"
        />
      </head>
      <body
        className={inter.className}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
