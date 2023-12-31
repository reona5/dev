import { BaseHeader } from "@/app/components/BaseHeader";
import { PostList } from "@/app/components/posts/PostList";
import { getPosts } from "@/app/data/post";

export const metadata = {
  title: "記事一覧",
  description: "ブログ記事一覧です。",
};

const Posts: React.FC = () => {
  const posts = getPosts({ isPublished: true });

  return (
    <>
      <BaseHeader ariaCurrent="Posts" />
      <main className="m-auto max-w-5xl">
        <section className="p-4">
          <h1 className="mb-8 text-3xl font-bold">記事一覧</h1>
          <PostList posts={posts} />
        </section>
      </main>
    </>
  );
};

export default Posts;
