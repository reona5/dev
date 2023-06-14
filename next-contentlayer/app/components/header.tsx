import { MenuButton } from "@/app/components/menu-button";
import { ModeToggle } from "@/app/components/mode-toggle";
import Link from "next/link";
const headerItems = [
  { name: "About", href: "/about" },
  { name: "Posts", href: "/posts" },
  { name: "Tags", href: "/tags" },
  { name: "Drafts", href: "/drafts" },
] as const;

type Item = (typeof headerItems)[number]["name"];
type HeaderProps = { ariaCurrent?: Item };

export const Header = (({ ariaCurrent }) => {
  return (
    <header className="sticky top-0 bg-white/75 transition-colors ease-out dark:bg-gray-900/75 sm:static sm:bg-white sm:dark:bg-gray-900">
      <div className="m-auto flex max-w-4xl items-center justify-between p-6">
        <Link href="/" className="text-xl">
          reona.dev
        </Link>
        <nav className="hidden sm:inline">
          <ul className="flex gap-3 text-lg">
            {headerItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  {...(item.name === ariaCurrent && {
                    className: "underline",
                    "aria-current": "page",
                  })}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <ModeToggle isHidden={true} />
            </li>
          </ul>
        </nav>
        <MenuButton>
          <ModeToggle isHidden={false} />
          <nav className="inline">
            <ul className="grid items-end gap-3 text-lg">
              {headerItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    {...(item.name === ariaCurrent && {
                      className: "underline",
                      ariaCurrent: "page",
                    })}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </MenuButton>
      </div>
    </header>
  );
}) satisfies React.FC<HeaderProps>;
