import { getFeed } from "@/app/lib/rss";

export const GET = async () => {
  const feed = await getFeed();

  return new Response(feed.xml(), {
    headers: {
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
      "Content-Type": "application/xml",
    },
  });
};
