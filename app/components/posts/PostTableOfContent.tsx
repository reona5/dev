"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

export const PostTableOfContent: React.FC = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".prose",
      headingSelector: "h2, h3",
      scrollSmoothOffset: -80,
      headingsOffset: 80,
      orderedList: false,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <aside className="sticky top-20 mt-12">
      <nav>
        <header className="font-bold">目次</header>
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="toc" />
      </nav>
    </aside>
  );
};
