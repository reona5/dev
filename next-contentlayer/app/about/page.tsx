import { Header } from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "このサイトについて",
  description:
    "reona.dev は Next.js + Vercel によって作成されています。プログラミングに関する学びや日々の出来事を発信するウェブサイトです。",
};

const About: React.FC = () => {
  return (
    <>
      <Header ariaCurrent="About" />
      <main className="m-auto max-w-4xl p-6">
        <section className="prose max-w-none dark:prose-invert">
          <Image
            src="/placeholder-about.jpg"
            alt=""
            width={850}
            height={478}
            loading="eager"
            className="pb-8"
          />
          <h1>{metadata.title}</h1>
          <p>
            <Link href="/">reona.dev</Link> は Next.js + Vercel
            によって作成されています。
            <a
              href="https://twitter.com/reona_5"
              target="_blank"
              rel="noreferrer"
            >
              Reona Shimada
            </a>
            のプログラミングに関する学びや日々の出来事を発信するウェブサイトです。
          </p>
          <hr />
          <h2>筆者について</h2>
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
