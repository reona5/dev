import { BaseHeader } from "@/app/components/BaseHeader";
import { PostList } from "@/app/components/posts/PostList";
import { getPosts } from "@/app/data/post";

export const metadata = {
  title: "下書き一覧",
  description: "下書き一覧です。",
};

const Drafts: React.FC = () => {
  const posts = getPosts({ isPublished: false });

  return (
    <>
      <BaseHeader ariaCurrent="Drafts" />
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
