import { X } from "@/app/components/icon-components";

type ShareOnXButtonParams = {
  title: string;
  url: string;
  tags: string;
};

export const ShareOnXButton = (({ title, url, tags }) => {
  const requestUrl = "https://x.com/intent/tweet";
  const params = `?url=${url}&text=${title}&hashtags=${tags}&via=reona_5`;

  return (
    <a
      href={`${requestUrl}${params}`}
      target="_blank"
      className="inline-flex items-center gap-3 rounded-md bg-gray-200 p-2 no-underline transition-colors transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <X />
      共有する
    </a>
  );
}) satisfies React.FC<ShareOnXButtonParams>;
