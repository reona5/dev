import { Header } from "@/app/components/header";
import { Mdx } from "@/app/components/mdx-components";
import { RequestEditButton } from "@/app/components/request-edit-button";
import { ShareOnXButton } from "@/app/components/share-on-x-button";
import { TableOfContent } from "@/app/components/table-of-content";
import { TagList } from "@/app/components/tag-list";
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
      <Header ariaCurrent="Drafts" />
      <main className="m-auto max-w-5xl">
        <article className="prose my-6 max-w-none break-words p-4 dark:prose-invert">
          <h1 className="mb-10">{post.title}</h1>
          <TagList tags={post.tags} />
          <hr className="mt-4" />
          <div className="sm:grid sm:grid-cols-5 sm:gap-4">
            <section className="sm:col-span-4">
              <Mdx code={post.body.code} />
            </section>
            <div className="col-span-1 hidden h-full md:inline">
              <TableOfContent />
            </div>
          </div>
          <hr className="my-8" />
          <div className="grid justify-items-end gap-2">
            <ShareOnXButton
              title={post.title}
              url={`${process.env.NEXT_PUBLIC_SITE_URL}${post.slug}`}
              tags={post.tags.join("%2C")}
            />
            <RequestEditButton slug={post.slug} />
          </div>
        </article>
      </main>
    </>
  );
};

export default DraftPage;
