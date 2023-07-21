import Image from "next/image";

type TweetButtonParams = {
  title: string;
  url: string;
  tags: string
};

export const TweetButton = (({ title, url, tags }) => {
  const requestUrl = "https://twitter.com/intent/tweet"
  const params = `?url=${url}&text=${title}&hashtags=${tags}&via=reona_5`;

  return (
    <a
      href={`${requestUrl}${params}`}
      target="_blank"
      className="inline-flex items-center gap-3 rounded-md border border-gray-500 p-2 no-underline"
    >
      <Image
        src="/twitter.svg"
        width={24}
        height={24}
        alt="Twitter icon"
        className="m-0 dark:inline"
      />
      ツイートする
    </a>
  );
}) satisfies React.FC<TweetButtonParams>;
