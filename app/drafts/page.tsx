import { Header } from "@/app/components/header";
import { PostList } from "@/app/components/post-list";
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
      <main className="m-auto max-w-4xl p-6">
        <h1 className="mb-8 text-3xl font-bold">下書き一覧</h1>
        <PostList posts={posts} isPublished={false} />
      </main>
    </>
  );
};

export default Drafts;
