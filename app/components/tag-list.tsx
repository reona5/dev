import { TagCard } from "@/app/components/tag-card";

type TagListProps = {
  tags: string[];
};

export const TagList = (({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <TagCard tag={tag} key={tag}>
          {tag}
        </TagCard>
      ))}
    </div>
  );
}) satisfies React.FC<TagListProps>;
