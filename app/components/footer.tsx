import Image from "next/image";

export const Footer: React.FC = () => {
  const items = [
    {
      name: "RSS",
      href: "/rss.xml",
      imagePath: "/rss.svg",
    },
    {
      name: "X",
      href: "https://x.com/reona_5",
      imagePath: "/x.svg",
    },
    {
      name: "GitHub",
      href: "https://github.com/reona5",
      imagePath: "/github.svg",
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
                  <Image
                    src={item.imagePath}
                    width={24}
                    height={24}
                    alt={`${item.name} icon`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
