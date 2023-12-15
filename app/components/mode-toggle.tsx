"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ModeToggleProps = {
  isHidden: boolean;
};

export const ModeToggle = (({ isHidden }) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const toggleMode = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={toggleMode}
      className={isHidden ? "hidden sm:inline" : "mb-2 sm:hidden"}
    >
      <span className="sr-only">モード切り替え</span>
      {!mounted || theme === "light" ? (
        <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 26">
          <path
            className="fill-gray-700 hover:fill-black"
            fill="black"
            fillRule="evenodd"
            d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"
          />
        </svg>
      ) : (
        <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 26">
          <path
            className="dark:fill-gray-300 dark:hover:fill-white"
            fill="transparent"
            fillRule="evenodd"
            d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"
          />
        </svg>
      )}
    </button>
  );
}) satisfies React.FC<ModeToggleProps>;
