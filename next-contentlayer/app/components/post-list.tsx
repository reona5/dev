import { Post } from "@/.contentlayer/generated/types";
import { FormattedDate } from "@/app/components/formatted-date";

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
          <a
            href={`/${isPublished ? "posts" : "draft"}/${post.slug}/`}
            className="text-lg underline"
          >
            {post.title}
          </a>
          <p className="truncate text-sm">{post.description}</p>
        </li>
      ))}
    </ol>
  ) : (
    <p className="text-lg">
      📝 {isPublished ? "下書き" : "記事"} はありません。
    </p>
  );
}) satisfies React.FC<PostListProps>;
