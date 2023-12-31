import Link from "next/link";

type TagListCardProps = {
  children: React.ReactNode;
  tag: string;
};

export const TagListCard = (({ children, tag }) => {
  return (
    <p className="rounded-md bg-gray-200 p-2 text-sm transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Link href={`/tags/${tag}`} className="no-underline">
        {children}
      </Link>
    </p>
  );
}) satisfies React.FC<TagListCardProps>;
