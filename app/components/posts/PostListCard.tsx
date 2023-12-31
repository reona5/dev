import { Post } from "@/.contentlayer/generated/types";
import { PostFormattedDate } from "@/app/components/posts/PostFormattedDate";
import { TagList } from "@/app/components/tags/TagList";
import Link from "next/link";

type PostListCardProps = {
  post: Post;
};

export const PostListCard = (({ post }) => {
  return (
    <>
      <PostFormattedDate date={post.date} />
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
}) satisfies React.FC<PostListCardProps>;
