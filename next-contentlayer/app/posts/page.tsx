import { allPosts } from "@/.contentlayer/generated";
import { Header } from "@/app/components/header";
import { PostList } from "@/app/components/post-list";

export const metadata = {
  title: "記事一覧",
  description: "ブログ記事一覧です。",
};

const Posts: React.FC = () => {
  const orderedPosts = allPosts
    .filter((post) => post.isPublished === true)
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return (
    <>
      <Header ariaCurrent="Posts" />
      <main className="m-auto max-w-4xl p-6">
        <h1 className="mb-8 text-3xl font-bold">記事一覧</h1>
        <PostList posts={orderedPosts} isPublished={true} />
      </main>
    </>
  );
};

export default Posts;
