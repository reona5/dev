import { BaseHeader } from "@/app/components/BaseHeader";
import { BaseMdx } from "@/app/components/BaseMdx";
import { ButtonRequestEdit } from "@/app/components/buttons/ButtonRequestEdit";
import { ButtonShareOnX } from "@/app/components/buttons/ButtonShareOnX";
import { PostFormattedDate } from "@/app/components/posts/PostFormattedDate";
import { PostTableOfContent } from "@/app/components/posts/PostTableOfContent";
import { TagList } from "@/app/components/tags/TagList";
import classNames from "classnames";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type DraftProps = {
  params: {
    slug: string;
  };
};

const getPostFromParams = async (params: DraftProps["params"]) => {
  const { slug } = params;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post || post.isPublished) return;

  return post;
};

export const generateMetadata = async ({
  params,
}: DraftProps): Promise<Metadata> => {
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
  DraftProps["params"][]
> => {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
};

const DraftPage = async ({ params }: DraftProps) => {
  const post = await getPostFromParams(params);
  const isDevelopment = process.env.NODE_ENV === "development";

  if (!post || !isDevelopment) {
    notFound();
  }

  return (
    <>
      <BaseHeader ariaCurrent="Drafts" />
      <main className="m-auto max-w-5xl">
        <article
          className={classNames(
            "prose",
            "my-6",
            "max-w-none",
            "break-words",
            "p-4",
            ["dark:prose-invert", "dark:prose-dark"],
          )}
        >
          <h1 className="mb-8">{post.title}</h1>
          <PostFormattedDate date={post.date} />
          <TagList tags={post.tags} />
          <hr className="my-0" />
          <div className="sm:grid sm:grid-cols-5 sm:gap-4">
            <section className="sm:col-span-4">
              <BaseMdx code={post.body.code} />
            </section>
            <div className="col-span-1 hidden h-full md:inline">
              <PostTableOfContent />
            </div>
          </div>
          <hr className="my-8" />
          <div className="grid justify-items-end gap-2">
            <ButtonShareOnX
              title={post.title}
              url={`${process.env.NEXT_PUBLIC_SITE_URL}${post.slug}`}
              tags={post.tags.join("%2C")}
            />
            <ButtonRequestEdit slug={post.slug} />
          </div>
        </article>
      </main>
    </>
  );
};

export default DraftPage;
