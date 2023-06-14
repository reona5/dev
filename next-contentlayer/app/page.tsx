import { allPosts } from "@/.contentlayer/generated";
import { Header } from "@/app/components/header";
import { PostList } from "@/app/components/post-list";

export const metadata = {
  title: "reona.dev",
  description:
    "reona.dev は Next.js + Vercel によって作成されています。プログラミングに関する学びや日々の出来事を発信するウェブサイトです。",
};

const Home: React.FC = () => {
  const orderedPosts = allPosts
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
    .slice(0, 5);

  return (
    <>
      <Header />
      <main className="m-auto max-w-4xl p-6">
        <section className="grid gap-4">
          <h2 className="text-xl">{"Hello, I'm Reona Shimada👋"}</h2>
          <p>
            プログラミングに関する学びや日々の出来事を発信するウェブサイトです。
          </p>
          <PostList posts={orderedPosts} isPublished={true} />
          <a href="/posts" className="text-lg underline">
            &gt;&gt; 記事一覧へ
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;
