import { Header } from "@/app/components/header";
import Image from "next/image";

export const metadata = {
  title: "このサイトについて",
  description: process.env.NEXT_PUBLIC_SITE_TITLE ?? "",
};

const About: React.FC = () => {
  return (
    <>
      <Header ariaCurrent="About" />
      <main className="m-auto max-w-5xl">
        <section className="prose max-w-none p-6 dark:prose-invert sm:p-10">
          <Image
            src="/placeholder-about.jpg"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            loading="eager"
            priority={true}
            className="h-auto w-full pb-8"
          />
          <h1>{metadata.title}</h1>
          <p>
            <a
              href="https://github.com/reona5/dev"
              target="_blank"
              rel="noreferrer"
            >
              {process.env.NEXT_PUBLIC_SITE_TITLE ?? ""}
            </a>
            &nbsp;は Next.js + Vercel によって作成されています。
            <a
              href="https://x.com/reona_5"
              target="_blank"
              rel="noreferrer"
            >
              Reona Shimada
            </a>
            &nbsp;のプログラミングに関する学びや日々の出来事を発信するウェブサイトです。
          </p>
          <hr />
          <h2 className="before:content-['']">筆者について</h2>
          <p>
            1994年5月生まれ。第一三共株式会社にて MR として数年勤めたのち、Web
            サービスの開発に興味を持ち2019年8月にキャリアチェンジしました。
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
