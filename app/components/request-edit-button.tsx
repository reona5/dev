import Image from "next/image";

type requestEditButtonParams = {
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
      <Image
        src="/github-white.svg"
        width={24}
        height={24}
        alt="Github icon"
        className="m-0 hidden dark:inline"
      />
      <Image
        src="/github-black.svg"
        width={24}
        height={24}
        alt="Github icon"
        className="m-0 dark:hidden"
      />
      変更をリクエストする
    </a>
  );
}) satisfies React.FC<requestEditButtonParams>;
