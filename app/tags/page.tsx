import { allPosts } from "@/.contentlayer/generated";
import { Header } from "@/app/components/header";
import { allTags } from "@/app/data/tag";
import Link from "next/link";

export const metadata = {
  title: "タグ一覧",
  description: "タグ一覧です。",
};

const Tags: React.FC = () => {
  const tags = allTags
    .map((tag) => {
      return {
        name: tag,
        posts: allPosts.filter((post) => post.tags.includes(tag)),
      };
    })
    .sort((a, b) => b.posts.length - a.posts.length);

  return (
    <>
      <Header ariaCurrent="Tags" />
      <main className="m-auto max-w-4xl p-6">
        <h1 className="mb-8 text-3xl font-bold">タグ一覧</h1>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="m-2 rounded-md border bg-gray-50 p-1 text-sm dark:bg-black"
            >
              <Link href={`/tags/${tag.name}`}>
                {tag.name} ({tag.posts.length})
              </Link>
            </p>
          ))}
        </div>
      </main>
    </>
  );
};

export default Tags;
