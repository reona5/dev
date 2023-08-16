import Image from "next/image";

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
      <Image
        src="/x.svg"
        width={24}
        height={24}
        alt="X icon"
        className="m-0 dark:inline"
      />
      共有する
    </a>
  );
}) satisfies React.FC<ShareOnXButtonParams>;
