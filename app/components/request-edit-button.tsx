import { GitHub } from "@/app/components/icon-components";

type RequestEditButtonParams = {
  slug: string;
};

export const RequestEditButton = (({ slug }) => {
  const requestUrl = `https://github.com/reona5/dev/blob/main/app/content/${slug}.mdx`;

  return (
    <a
      href={requestUrl}
      target="_blank"
      className="inline-flex items-center gap-3 rounded-md border border-gray-500 p-2 no-underline"
    >
      <GitHub />
      編集の提案をする
    </a>
  );
}) satisfies React.FC<RequestEditButtonParams>;
