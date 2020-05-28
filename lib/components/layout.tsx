import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Profile from "./profile";
import Title from "./title";
import { Spacer } from "@zeit-ui/react";
import BLOG from "blog.config";

const ContactsWithNoSSR = dynamic(() => import("./contacts"), { ssr: false });
const LayoutHeader = ({ meta }) => (
  <Head>
    {meta?.title && (
      <title>
        {meta?.title} - {BLOG.title}
      </title>
    )}
    {meta?.description && (
      <meta name="description" content={meta?.description} />
    )}
    {meta?.description && (
      <meta property="og:description" content={meta?.description} />
    )}
    {meta?.title && <meta property="og:title" content={meta?.title} />}
    {meta?.image && <meta property="og:image" content={meta?.image} />}
    {meta?.image && <meta property="twitter:image" content={meta?.image} />}
  </Head>
);

const Layout = ({ children, meta }: any) => {
  const [showAfterRender, setShowAfterRender] = useState(false);
  const inDetailPage = useMemo(() => meta?.title, []);
  useEffect(() => setShowAfterRender(true), []);

  if (!showAfterRender)
    return (
      <div className="article-content">
        <LayoutHeader meta={meta} />
        {children}
        <style jsx>{`
          .article-content {
            opacity: 0;
            display: none;
          }
        `}</style>
      </div>
    );
  return (
    <section>
      <LayoutHeader meta={meta} />
      <div className="container">
        <Spacer />
        <Profile />
        {inDetailPage && <Title title={meta?.title} date={meta?.date} />}
        {children}
        <Spacer y={5} />
        <ContactsWithNoSSR />
      </div>

      <style jsx>{`
        section {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          width: 100%;
          max-width: ${BLOG.layouts.pageWidth};
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .container :global(h1) {
          font-size: 2rem;
        }

        .container :global(h2) {
          font-size: 1.7rem;
        }

        .container :global(h3) {
          font-size: 1.4rem;
        }

        .container :global(h4) {
          font-size: 1.2rem;
        }

        @media only screen and (max-width: 767px) {
          .container {
            max-width: ${BLOG.layouts.pageWidthMobile};
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
};

export default Layout;
