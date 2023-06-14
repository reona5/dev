import { Header } from "@/app/components/header";
import { Mdx } from "@/app/components/mdx-components";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PostProps = {
  params: {
    slug: string[];
  };
};

const getPostFromParams = async (params: PostProps["params"]) => {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post || !post.isPublished) return

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
    slug: post.slugAsParams.split("/"),
  }));
};

const PostPage = async ({ params }: PostProps) => {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header ariaCurrent="About" />
      <main className="m-auto max-w-4xl p-6">
        <article className="prose max-w-none dark:prose-invert">
          <h1 className="mb-2">{post.title}</h1>
          {post.description && (
            <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
              {post.description}
            </p>
          )}
          <hr className="my-4" />
          <Mdx code={post.body.code} />
        </article>
      </main>
    </>
  );
};

export default PostPage;
