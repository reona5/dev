import React, { useMemo } from "react";
import NextLink from "next/link";
import { useTheme, Link } from "@zeit-ui/react";
import metadata from "../data/metadata.json";
import BLOG from "blog.config";

const getFixes = (metas: any) => {
  const data = metas.find((item: any) => item.name === "fixed");
  return (data || {}).children || [];
};

const fillSpace = (name: string) => {
  return name.replace(/ /g, "_");
};

const makeLink = (data: any) => {
  return (
    <NextLink href={data.url} key={data.url} passHref>
      <Link>{fillSpace(data.name)}</Link>
    </NextLink>
  );
};

const ProfileLinks = () => {
  const theme = useTheme();
  const links = useMemo(() => getFixes(metadata), []);
  return (
    <div className="link">
      {makeLink({ url: "/blog", name: BLOG.labels.default })}
      {links.map((link: string) => makeLink(link))}

      <style jsx>{`
        .link :global(a) {
          color: ${theme.palette.accents_6};
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-right: ${theme.layout.gapHalf};
        }

        .link :global(a:hover) {
          color: ${theme.palette.accents_4};
        }

        .link :global(a:last-of-type) {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
};

export default ProfileLinks;
