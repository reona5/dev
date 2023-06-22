import { Header } from "@/app/components/header";
import { PostList } from "@/app/components/post-list";
import { getPosts } from "@/app/data/post";
import Link from "next/link";

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

const Home: React.FC = () => {
  const posts = getPosts({ isPublished: true }).slice(0, 5);

  return (
    <>
      <Header />
      <main className="m-auto max-w-4xl p-6">
        <section className="grid gap-4">
          <h2 className="text-xl">{"Hello, I'm Reona Shimada👋"}</h2>
          <p>
            プログラミングに関する学びや日々の出来事を発信するウェブサイトです。
          </p>
          <PostList posts={posts} isPublished={true} />
          <Link href="/posts" className="text-lg underline">
            &gt;&gt; 記事一覧へ
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
