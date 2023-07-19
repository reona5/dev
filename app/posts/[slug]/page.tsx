import { Header } from "@/app/components/header";
import { Mdx } from "@/app/components/mdx-components";
import { TagList } from "@/app/components/tag-list";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PostProps = {
  params: {
    slug: string;
  };
};

const getPostFromParams = async (params: PostProps["params"]) => {
  const { slug } = params;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post || !post.isPublished) return;

  return post;
};

export const generateMetadata = async ({
  params,
}: PostProps): Promise<Metadata> => {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
};

export const generateStaticParams = async (): Promise<
  PostProps["params"][]
> => {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
};

const PostPage = async ({ params }: PostProps) => {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header ariaCurrent="Posts" />
      <main className="m-auto max-w-5xl">
        <article className="prose my-6 max-w-none break-words p-6 dark:prose-invert sm:p-10">
          <h1 className="mb-10">{post.title}</h1>
          <TagList tags={post.tags} />
          <hr className="mt-4" />
          <Mdx code={post.body.code} />
        </article>
      </main>
    </>
  );
};

export default PostPage;
