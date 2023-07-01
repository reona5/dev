import { allPosts } from "@/.contentlayer/generated";
import { Header } from "@/app/components/header";
import { TagCard } from "@/app/components/tag-card";
import { allTags } from "@/app/data/tag";

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
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagCard tag={tag.name} key={tag.name}>
              {`${tag.name} (${tag.posts.length})`}
            </TagCard>
          ))}
        </div>
      </main>
    </>
  );
};

export default Tags;
