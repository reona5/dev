import Link from "next/link";

type TagCardProps = {
  children: React.ReactNode;
  tag: string;
};

export const TagCard = (({ children, tag }) => {
  return (
    <p className="rounded-md border bg-gray-50 p-1.5 text-sm dark:border-gray-700 dark:bg-black">
      <Link href={`/tags/${tag}`} className="no-underline">{children}</Link>
    </p>
  );
}) satisfies React.FC<TagCardProps>;
