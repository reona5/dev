import { allPosts } from "@/.contentlayer/generated";
import { BaseHeader } from "@/app/components/BaseHeader";
import { TagListCard } from "@/app/components/tags/TagListCard";
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
      <BaseHeader ariaCurrent="Tags" />
      <main className="m-auto max-w-5xl">
        <section className="p-4">
          <h1 className="mb-8 text-3xl font-bold">タグ一覧</h1>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagListCard tag={tag.name} key={tag.name}>
                {`${tag.name} (${tag.posts.length})`}
              </TagListCard>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Tags;
