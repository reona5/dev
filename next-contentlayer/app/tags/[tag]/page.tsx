import { Header } from "@/app/components/header";
import { PostList } from "@/app/components/post-list";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type TagProps = {
  params: {
    tag: string;
  };
};

const getPostsFromParams = async (params: TagProps["params"]) => {
  const tag = params?.tag;
  const posts = allPosts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return posts;
};

export const generateMetadata = async ({
  params,
}: TagProps): Promise<Metadata> => {
  const { tag } = params;
  const posts = await getPostsFromParams(params);

  if (!posts.length) return {};

  return {
    title: tag,
    description: `${tag} のブログ記事一覧です`,
  };
};

export const generateStaticParams = async (): Promise<TagProps["params"][]> => {
  const allTags = [...new Set(allPosts.map((post) => post.tags).flat())];
  return allTags.map((tag) => ({ tag }));
};

const TagPostsPage = async ({ params }: TagProps) => {
  const { tag } = params;
  const posts = await getPostsFromParams(params);

  if (!tag) {
    notFound();
  }

  return (
    <>
      <Header ariaCurrent="Tags" />
      <main className="m-auto max-w-4xl p-6">
        <h1 className="mb-8 text-3xl font-bold">{tag} の記事一覧</h1>
        <PostList posts={posts} isPublished={true} />
      </main>
    </>
  );
};

export default TagPostsPage;
