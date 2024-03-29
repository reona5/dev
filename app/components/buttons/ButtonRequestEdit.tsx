import { GitHub } from "@/app/components/BaseIcon";
import classNames from "classnames";

type RequestEditButtonParams = {
  slug: string;
};

export const ButtonRequestEdit = (({ slug }) => {
  const requestUrl = `https://github.com/reona5/dev/blob/main/app/content/${slug}.mdx`;

  return (
    <a
      href={requestUrl}
      target="_blank"
      className={classNames(
        "inline-flex",
        "items-center",
        "gap-3",
        "rounded-md",
        "bg-gray-200",
        "p-2",
        "no-underline",
        "transition-colors",
        "hover:bg-gray-300",
        ["dark:bg-gray-800", "dark:hover:bg-gray-700"],
      )}
    >
      <GitHub />
      編集の提案をする
    </a>
  );
}) satisfies React.FC<RequestEditButtonParams>;
