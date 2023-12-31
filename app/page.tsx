import { BaseHeader } from "@/app/components/BaseHeader";
import { PostList } from "@/app/components/posts/PostList";
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
      <BaseHeader />
      <main className="m-auto max-w-5xl">
        <section className="grid gap-8 p-4">
          <h2 className="text-xl">{"Hello, I'm Reona Shimada👋"}</h2>
          <p>
            プログラミングに関する学びや日々の出来事を発信するウェブサイトです。
          </p>
          <PostList posts={posts} />
          <Link href="/posts" className="text-lg">
            &gt;&gt; すべての記事を見る
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
