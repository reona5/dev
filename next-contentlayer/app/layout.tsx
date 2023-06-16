import { Analytics } from "@/app/components/analytics";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Inter } from "next/font/google";
import { Footer } from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  // refs: https://zenn.dev/link/comments/9f856c22bfee95
  const encodedSvg = encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%' y='50%' style='dominant-baseline:central;text-anchor:middle;font-size:90px;'>🫰</text></svg>")

  return (
    <html lang="ja">
      <head>
        {/* Chrome / Firefox / Edge */}
        <link
          rel="icon"
          href={`data:image/svg+xml,${encodedSvg}`}
        />
        {/* Safari / IE */}
        <link
          rel="icon alternate"
          type="image/png"
          href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1faf0.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Analytics />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
