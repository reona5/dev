import Link from "next/link";

type TagCardProps = {
  children: React.ReactNode;
  tag: string;
};

export const TagCard = (({ children, tag }) => {
  return (
    <p className="rounded-md bg-gray-200 p-2 text-sm transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Link href={`/tags/${tag}`} className="no-underline">
        {children}
      </Link>
    </p>
  );
}) satisfies React.FC<TagCardProps>;
