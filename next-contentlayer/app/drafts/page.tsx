import { allPosts } from "@/.contentlayer/generated";
import { Header } from "@/app/components/header";
import { PostList } from "@/app/components/post-list";

const Drafts: React.FC = () => {
  const draftPosts = allPosts.filter((post) => post.isPublished !== true);
  const orderedPosts = draftPosts.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  return (
    <>
      <Header ariaCurrent="Drafts" />
      <main className="m-auto max-w-4xl p-6">
        <h1 className="mb-8 text-3xl font-bold">下書き一覧</h1>
        <PostList posts={orderedPosts} isPublished={false} />
      </main>
    </>
  );
};

export default Drafts;
