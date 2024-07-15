import { loadGoogleFont } from "@/app/lib/loadGoogleFont";
import { allPosts } from "contentlayer/generated";
import { ImageResponse } from "next/og";

const getPostFromParams = async (params: PostProps["params"]) => {
  const { slug } = params;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post || !post.isPublished) return;

  return post;
};

export const revalidate = 7;
export const runtime = "edge";
export const alt = "reona.dev";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type PostProps = {
  params: {
    slug: string;
  };
};

const Image = async ({ params }: PostProps) => {
  const post = await getPostFromParams(params);
  if (!post) return;

  const title = `> ${post.title} _`;
  const inter = await loadGoogleFont({ family: "Inter" });

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(white, gray)",
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "48px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#0f131e",
            color: "#fff",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "48px",
            borderRadius: "10px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 style={{ fontSize: "56px" }}>{title}</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {post.tags.map((tag) => (
                <p
                  key={tag}
                  style={{
                    margin: "16px",
                    borderRadius: "16px",
                    border: "1px solid",
                    borderColor: "#fff",
                    backgroundColor: "#0f131e",
                    padding: "16px",
                    fontSize: "32px",
                    color: "#fff",
                  }}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div
            style={{
              justifyContent: "flex-end",
              fontSize: "56px",
            }}
          >
            reona.dev 🫰
          </div>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: inter,
          style: "normal",
          weight: 400,
        },
      ],
      ...size,
    },
  );
};

export default Image;
