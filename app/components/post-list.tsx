import { Post } from "@/.contentlayer/generated/types";
import { PostCard } from "@/app/components/post-card";

type PostListProps = {
  posts: Post[];
};

export const PostList = (({ posts }) => {
  return posts.length !== 0 ? (
    <ol className="grid gap-8">
      {posts.map((post) => (
        <li key={post._id} className="grid rounded-2xl border p-4 bg-gray-50 dark:bg-black">
          <PostCard post={post} />
        </li>
      ))}
    </ol>
  ) : (
    <p className="text-lg">📝 記事はありません。</p>
  );
}) satisfies React.FC<PostListProps>;
