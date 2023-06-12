import { allPosts } from "@/.contentlayer/generated";
import { Header } from "@/app/components/header";
import { PostList } from "@/app/components/post-list";

const Home = () => {
  const orderedPosts = allPosts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return (
    <>
      <Header />
      <main className="m-auto max-w-4xl p-6">
        <PostList posts={orderedPosts} isPublished={true} />
      </main>
    </>
  );
};

export default Home;
