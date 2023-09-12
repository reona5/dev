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
      className="inline-flex items-center gap-3 rounded-md border border-gray-500 p-2 no-underline"
    >
      <X />
      共有する
    </a>
  );
}) satisfies React.FC<ShareOnXButtonParams>;
