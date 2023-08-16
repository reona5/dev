import Link from "next/link";

type TagCardProps = {
  children: React.ReactNode;
  tag: string;
};

export const TagCard = (({ children, tag }) => {
  return (
    <p className="rounded-md bg-gray-200 p-1.5 text-sm dark:bg-gray-800">
      <Link href={`/tags/${tag}`} className="no-underline">
        {children}
      </Link>
    </p>
  );
}) satisfies React.FC<TagCardProps>;
