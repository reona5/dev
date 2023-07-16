import Image from "next/image";

export const Footer: React.FC = () => {
  const items = [
    {
      name: "RSS",
      href: "/rss.xml",
      imagePath: "/rss.svg",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/reona_5",
      imagePath: "/twitter.svg",
    },
    {
      name: "GitHub",
      href: "https://github.com/reona5",
      imagePath: "/github-black.svg",
    },
  ] as const;
  const today = new Date();

  return (
    <footer>
      <div className="m-auto flex max-w-5xl justify-between p-6 sm:px-10">
        <span>&copy; {today.getFullYear()} Reona Shimada.</span>
        <nav>
          <ul className="flex gap-4 p-0">
            {items.map((item) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name === "GitHub" ? (
                    <>
                      <Image
                        src="/github-white.svg"
                        width={24}
                        height={24}
                        alt={`${item.name} icon`}
                        className="hidden dark:inline"
                      />
                      <Image
                        src={item.imagePath}
                        width={24}
                        height={24}
                        alt={`${item.name} icon`}
                        className="dark:hidden"
                      />
                    </>
                  ) : (
                    <Image
                      src={item.imagePath}
                      width={24}
                      height={24}
                      alt={`${item.name} icon`}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
