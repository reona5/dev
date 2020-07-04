import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import Profile from "./profile";
import Title from "./title";
import { Button, Link, Spacer, useToasts } from "@zeit-ui/react";
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
      <meta name="description" content={meta?.description} key="description" />
    )}
    {meta?.description && (
      <meta
        property="og:description"
        content={meta?.description}
        key="og:description"
      />
    )}
    {meta?.title && (
      <meta property="og:title" content={meta?.title} key="og:title" />
    )}
    {meta?.date && (
      <meta
        property="og:image"
        content={"/ogp/" + meta?.date.slice(0, 10) + ".png"}
        key="og:image"
      />
    )}
    {meta?.date && (
      <meta
        property="twitter:image"
        content={"/opp/" + meta?.date.slice(0, 10) + ".png"}
        key="twitter:image"
      />
    )}
  </Head>
);

const encodeCharacterForLink = (str: string | undefined) => {
  if (!str) return "";
  return str.replace(/#/g, "%23").replace(/\+/g, "%2B");
};

const Layout = ({ children, meta }: any) => {
  const [showAfterRender, setShowAfterRender] = useState(false);
  const { asPath } = useRouter();
  const inDetailPage = useMemo(() => meta?.title, []);
  useEffect(() => setShowAfterRender(true), []);
  const normalizedTitle = encodeCharacterForLink(meta?.title);
  const tweetlink = `https://twitter.com/intent/tweet?text=${normalizedTitle}%20-%20Reona\'s%20Blog%0a&url=https://${BLOG.domain}${asPath}`;
  const hatenalink = `https://b.hatena.ne.jp/add?mode=confirm&url=https://${BLOG.domain}${asPath}&title=${normalizedTitle}"`;
  const [toasts, setToast] = useToasts();
  const click = () =>
    setToast({ text: "Thank you for sharing!", delay: 10000 });

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
        {inDetailPage && <Spacer x={1} />}
        {inDetailPage && (
          <div className="share-sns">
            <Spacer y={0.5} />
            <Button type="secondary" onClick={click} ghost>
              <Link href={hatenalink} target="_blank" pure>
                Share on Hatena
              </Link>
            </Button>
            <Spacer y={0.5} />
            <Button type="success" onClick={click} ghost>
              <Link href={tweetlink} target="_blank" pure>
                Share on Twitter
              </Link>
            </Button>
          </div>
        )}
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

        .share-sns {
          text-align: right;
        }
      `}</style>
    </section>
  );
};

export default Layout;
