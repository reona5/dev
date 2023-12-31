"use client";

import { useState } from "react";

type MenuButtonProps = {
  children: React.ReactNode;
};

export const ButtonMenu = (({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="sm:hidden">
      <button
        className="grid h-5 w-10 items-center justify-center bg-transparent"
        aria-label="メニュー"
        onClick={toggleMenu}
      >
        <span
          className={`h-0.5 w-6 bg-gray-800 transition dark:bg-white ${
            isExpanded && "translate-y-[5px] rotate-45"
          }`}
        ></span>
        <span
          // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
          className={`h-0.5 w-6 bg-gray-800 transition dark:bg-white ${
            isExpanded && "-translate-y-[5px] -rotate-45"
          }`}
        ></span>
      </button>
      {isExpanded && (
        <div className="absolute right-5 rounded-lg bg-gray-50/75 p-4 shadow-lg dark:bg-black/75 dark:shadow-gray-800">
          {children}
        </div>
      )}
    </div>
  );
}) satisfies React.FC<MenuButtonProps>;
