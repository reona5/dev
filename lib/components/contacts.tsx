import React, { useMemo } from "react";
import { useTheme, Spacer, Link } from "@zeit-ui/react";
import useConfigs from "../config-context";
import Sun from "./icons/sun";
import Moon from "./icons/moon";
import Mail from "./icons/mail";
import Github from "./icons/github";
import Twitter from "./icons/twitter";
import Blog from "blog.config";

const Contacts = () => {
  const theme = useTheme();
  const configs: any = useConfigs();
  const isDark = useMemo(() => theme.type === "dark", [theme.type]);
  const switchTheme = () => configs.onChange(theme.type === "dark");
  const themeTitle = "Switch themes";
  const linkProps = {
    rel: "noreferrer",
    target: "_blank",
  };

  return (
    <>
      <div className="contacts">
        <div className="between">
          <div className="socials">
            {Blog.email && (
              <Link aria-label="email" href={Blog.email} {...linkProps}>
                <Mail />
              </Link>
            )}
            {Blog.github && (
              <Link aria-label="github" href={Blog.github} {...linkProps}>
                <Github />
              </Link>
            )}
            {Blog.twitter && (
              <Link aria-label="twitter" href={Blog.twitter} {...linkProps}>
                <Twitter />
              </Link>
            )}
          </div>
          <div>
            {isDark && (
              <span title={themeTitle}>
                <Sun onClick={switchTheme} />
              </span>
            )}
            {!isDark && (
              <span title={themeTitle}>
                <Moon onClick={switchTheme} />
              </span>
            )}
          </div>
        </div>

        <style jsx>{`
          .contacts {
            width: ${Blog.layouts.pageWidth};
            padding: 0 ${theme.layout.gapQuarter};
            position: absolute;
            z-index: 1;
            bottom: 3.5rem;
            left: 50%;
            transform: translateX(-50%);
            color: ${theme.palette.accents_6};
          }

          .between {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .contacts :global(svg) {
            cursor: pointer;
            margin: ${theme.layout.gapQuarter} ${theme.layout.gapHalf};
            position: relative;
            color: inherit;
            z-index: 2;
          }

          .contacts :global(a) {
            color: inherit;
          }

          .socials :global(a) {
            margin-right: 0.5rem;
            font-size: 0.75rem;
            text-transform: uppercase;
          }

          .contacts span {
            color: inherit;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          .contacts span:hover {
            color: ${theme.palette.accents_4};
          }

          .contacts :global(a:hover) {
            color: ${theme.palette.accents_4};
            text-decoration: underline dashed;
            cursor: ne-resize;
            transition: all 150ms ease;
          }

          @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
            .contacts {
              position: absolute;
              width: ${Blog.layouts.pageWidthMobile};
            }
          }
        `}</style>
      </div>
      <Spacer y={3.5} />
    </>
  );
};

export default Contacts;
