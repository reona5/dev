import Head from "next/head";
import BLOG from "../blog.config";
import { PrismBaseline } from "@zeit-ui/react-prism";
import { ZeitProvider, CssBaseline } from "@zeit-ui/react";
import React, { useCallback, useState, useEffect, useMemo } from "react";
import useDomClean from "lib/use-dom-clean";
import { getDNSPrefetchValue } from "lib/data-transform";
import ThemeConfigProvider from "lib/components/theme-config-provider";

const Application = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState("light");
  const domain = useMemo(() => getDNSPrefetchValue(BLOG.domain), []);
  const changeHandle = useCallback((isDark) => {
    const next = isDark ? "light" : "dark";
    setThemeType(next);
  }, []);
  const metaImageUrl = `https://og-image.reona5.vercel.app/reona-dev?theme=dark&images=https://reona.dev/assets/og-main.png`;

  useEffect(() => {
    if (typeof localStorage !== "object") return null;
    const themeType = localStorage.getItem("theme");
    setThemeType(themeType === "dark" ? "dark" : "light");
  }, []);
  useEffect(() => localStorage.setItem("theme", themeType), [themeType]);
  useDomClean();

  return (
    <>
      <Head>
        <title>{BLOG.title}</title>
        {domain && <link rel="dns-prefetch" href={domain} />}
        <meta name="referrer" content="strict-origin" />
        <meta name="description" content={BLOG.description} key="description" />
        <meta property="og:site_name" content={BLOG.title} />
        <meta
          property="og:description"
          content={BLOG.description}
          key="og:description"
        />
        <meta property="og:type" content="website" />
        <meta name="generator" content="unix.bio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content={BLOG.author} />
        <meta name="twitter:creator" content={`@${BLOG.twitter}`} />
        <meta property="og:title" content={BLOG.title} key="og:title" />
        <meta property="og:url" content={BLOG.domain} />
        <meta property="og:image" content={metaImageUrl} key="og:image" />
        <meta property="twitter:image" content={metaImageUrl} key="og:image" />
        <meta itemProp="image" property="og:image" content={metaImageUrl} />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <ZeitProvider theme={{ type: themeType }}>
        <CssBaseline />
        <PrismBaseline />
        <ThemeConfigProvider onChange={changeHandle}>
          <Component {...pageProps} />
        </ThemeConfigProvider>
        <style global jsx>{`
          @media only screen and (max-width: 767px) {
            html {
              font-size: 15px;
            }
          }
        `}</style>
      </ZeitProvider>
    </>
  );
};

export default Application;
