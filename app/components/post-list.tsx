import { Post } from "@/.contentlayer/generated/types";
import { PostCard } from "@/app/components/post-card";

type PostListProps = {
  posts: Post[];
};

export const PostList = (({ posts }) => {
  return posts.length !== 0 ? (
    <ol className="grid gap-8">
      {posts.map((post) => (
        <li
          key={post._id}
          className="grid gap-2 rounded-2xl border bg-gray-50 p-4 dark:border-gray-700 dark:bg-black"
        >
          <PostCard post={post} />
        </li>
      ))}
    </ol>
  ) : (
    <p className="text-lg">📝 記事はありません。</p>
  );
}) satisfies React.FC<PostListProps>;
