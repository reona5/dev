import {TagList} from "@/app/components/tag-list"
import { Post } from "@/.contentlayer/generated/types";
import { FormattedDate } from "@/app/components/formatted-date";
import Link from "next/link";

type PostListProps = {
  posts: Post[];
  isPublished: boolean;
};

export const PostList = (({ posts, isPublished }) => {
  return posts.length !== 0 ? (
    <ol className="grid gap-8">
      {posts.map((post) => (
        <li key={post._id} className="grid">
          <FormattedDate date={post.date} />
          <Link href={`/${isPublished ? "posts" : "drafts"}/${post.slugAsParams}`} className="text-lg underline">
            {post.title}
          </Link>
          <p className="truncate text-sm">{post.description}</p>
          <TagList tags={post.tags} />
        </li>
      ))}
    </ol>
  ) : (
    <p className="text-lg">
      📝 {isPublished ? "下書き" : "記事"} はありません。
    </p>
  );
}) satisfies React.FC<PostListProps>;
