import { TagListCard } from "@/app/components/tags/TagListCard";

type TagListProps = {
  tags: string[];
};

export const TagList = (({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <TagListCard tag={tag} key={tag}>
          {tag}
        </TagListCard>
      ))}
    </div>
  );
}) satisfies React.FC<TagListProps>;
