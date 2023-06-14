import Link from "next/link";

type TagListProps = {
  tags: string[];
};

export const TagList = (({ tags }) => {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <p key={tag} className="my-1 mr-1 rounded-md border bg-gray-50 p-1 text-sm dark:bg-black">
          <Link href={`/tags/${tag}`}>{tag}</Link>
        </p>
      ))}
    </div>
  );
}) satisfies React.FC<TagListProps>;
