import React from "react";
import { Link, useTheme } from "@zeit-ui/react";
import NextLink from "next/link";
import { msToString } from "lib/data-transform";

const getDateString = (date: string) => {
  const d = new Date(date);
  if (`${d}` === "Invalid Date") return "";
  return new Date(date).toLocaleString("ja-jp");
};

const time = (date: string) => {
  const t = Date.now() - new Date(date).getTime();
  return msToString(t);
};

const PostItem = ({ post }) => {
  const theme = useTheme();

  return (
    <div className="item">
      <NextLink href={post.url} as={post.url} passHref>
        <Link>
          {post.name}
          <span
            className="date"
            dangerouslySetInnerHTML={{ __html: getDateString(post.meta.date) }}
          ></span>
          <span className="date">({time(post.meta.date)})</span>
        </Link>
      </NextLink>
      <style jsx>{`
        .item {
          margin-bottom: calc(1.35 * ${theme.layout.gapHalf});
          overflow: hidden;
          max-width: 60vw;
        }

        .item :global(.link) {
          color: ${theme.palette.accents_7};
          transition: color 120ms ease;
          font-size: 0.95rem;
          max-width: 95%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
        }

        .date {
          color: ${theme.palette.accents_5};
          font-size: 0.75em;
          display: inline;
          line-height: 1.5rem;
          margin-left: 10px;
        }

        .item :global(.link:hover) {
          color: ${theme.palette.accents_3};
        }

        .item :global(.link:hover .date) {
          color: ${theme.palette.accents_3};
        }

        @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
          .item {
            max-width: 90vw;
          }

          .item :global(.link) {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PostItem;
