import { Post } from "@/.contentlayer/generated/types";
import { PostListCard } from "@/app/components/posts/PostListCard";

type PostListProps = {
  posts: Post[];
};

export const PostList = (({ posts }) => {
  return posts.length !== 0 ? (
    <ol className="grid gap-4">
      {posts.map((post) => (
        <li
          key={post._id}
          className="grid gap-2 rounded-2xl bg-gray-100 p-4 dark:bg-gray-950"
        >
          <PostListCard post={post} />
        </li>
      ))}
    </ol>
  ) : (
    <p className="text-lg">📝 記事はありません。</p>
  );
}) satisfies React.FC<PostListProps>;
