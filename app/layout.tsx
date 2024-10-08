import { BaseFooter } from "@/app/components/BaseFooter";
import { ProviderTheme } from "@/app/components/providers/ProviderTheme";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const title = process.env.NEXT_PUBLIC_SITE_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
const url = process.env.NEXT_PUBLIC_SITE_URL;
const google = process.env.GOOGLE_SITE_VERIFICATION_KEY;

export const metadata = {
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description,
  openGraph: {
    title: title,
    description,
    url,
    siteName: title,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@reona_5",
  },
  verification: {
    google,
  },
  alternates: {
    canonical: url,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "gray" },
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
  metadataBase: new URL(url ?? "http://localhost:3000"),
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang={process.env.NEXT_PUBLIC_SITE_LANGUAGE}>
      <body className={inter.className}>
        <ProviderTheme attribute="class">
          {children}
          <BaseFooter />
        </ProviderTheme>
      </body>
    </html>
  );
};

export default RootLayout;
