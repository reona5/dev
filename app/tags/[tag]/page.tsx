import { BaseHeader } from "@/app/components/BaseHeader";
import { PostList } from "@/app/components/posts/PostList";
import { allTags } from "@/app/data/tag";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type TagProps = {
  params: {
    tag: string;
  };
};

const getPostsBy = async (tag: TagProps["params"]["tag"]) => {
  const posts = allPosts
    .filter((post) => post.tags.includes(tag) && post.isPublished === true)
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return posts;
};

export const generateMetadata = async ({
  params,
}: TagProps): Promise<Metadata> => {
  const tag = decodeURIComponent(params.tag);

  if (!tag) return {};

  return {
    title: `${tag} の記事一覧`,
    description: `${tag} のブログ記事一覧です`,
  };
};

export const generateStaticParams = async (): Promise<TagProps["params"][]> => {
  return allTags.map((tag) => ({ tag }));
};

const TagPostsPage = async ({ params }: TagProps) => {
  const tag = decodeURIComponent(params.tag);
  const posts = await getPostsBy(tag);

  if (!tag) {
    notFound();
  }

  return (
    <>
      <BaseHeader ariaCurrent="Tags" />
      <main className="m-auto max-w-5xl">
        <section className="p-6 sm:p-10">
          <h1 className="mb-8 text-3xl font-bold">{tag} の記事一覧</h1>
          <PostList posts={posts} />
        </section>
      </main>
    </>
  );
};

export default TagPostsPage;
