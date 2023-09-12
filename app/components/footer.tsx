import { GitHub, Rss, X } from "@/app/components/icon-components";

export const Footer: React.FC = () => {
  const items = [
    {
      name: "RSS",
      href: "/rss.xml",
    },
    {
      name: "X",
      href: "https://x.com/reona_5",
    },
    {
      name: "GitHub",
      href: "https://github.com/reona5",
    },
  ] as const;
  const today = new Date();

  return (
    <footer>
      <div className="m-auto flex max-w-5xl justify-between p-6 sm:px-10">
        <span>&copy; {today.getFullYear()} Reona Shimada.</span>
        <nav>
          <ul className="flex gap-4 p-0">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name === "RSS" && <Rss />}
                  {item.name === "X" && <X />}
                  {item.name === "GitHub" && <GitHub />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
