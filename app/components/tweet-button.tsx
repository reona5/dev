import Image from "next/image";

type TweetButtonParams = {
  title: string;
  url: string;
};

export const TweetButton = (({ title, url }) => {
  const requestUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;

  return (
    <a
      href={requestUrl}
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
