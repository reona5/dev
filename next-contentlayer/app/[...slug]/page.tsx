import { allPages } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/mdx-components";

type PageProps = {
  params: {
    slug: string[];
  };
};

const getPageFromParams = async (params: PageProps["params"]) => {
  const slug = params?.slug?.join("/");
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
};

export const generateStaticParams = async (): Promise<
  PageProps["params"][]
> => {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
};

const PagePage = async ({ params }: PageProps) => {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <article className="prose py-6 dark:prose-invert">
      <h1>{page.title}</h1>
      {page.description && <p className="text-xl">{page.description}</p>}
      <hr />
      <Mdx code={page.body.code} />
    </article>
  );
};

export default PagePage;
