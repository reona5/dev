import { Post } from "@/.contentlayer/generated/types";
import { FormattedDate } from "@/app/components/formatted-date";
import { TagList } from "@/app/components/tag-list";
import Link from "next/link";

type PostCardProps = {
  post: Post;
};

export const PostCard = (({ post }) => {
  return (
    <>
      <FormattedDate date={post.date} />
      <Link
        href={`/${post.isPublished ? "posts" : "drafts"}/${post.slugAsParams}`}
        className="text-lg"
      >
        {post.title}
      </Link>
      <p className="truncate text-sm">{post.description}</p>
      <TagList tags={post.tags} />
    </>
  );
}) satisfies React.FC<PostCardProps>;
