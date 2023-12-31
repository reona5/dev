import { Header } from "@/app/components/Header";
import { PostList } from "@/app/components/PostList";
import { getPosts } from "@/app/data/post";

export const metadata = {
  title: "下書き一覧",
  description: "下書き一覧です。",
};

const Drafts: React.FC = () => {
  const posts = getPosts({ isPublished: false });

  return (
    <>
      <Header ariaCurrent="Drafts" />
      <main className="m-auto max-w-5xl">
        <section className="p-4">
          <h1 className="mb-8 text-3xl font-bold">下書き一覧</h1>
          <PostList posts={posts} />
        </section>
      </main>
    </>
  );
};

export default Drafts;
