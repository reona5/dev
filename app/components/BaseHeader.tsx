import { ButtonMenu } from "@/app/components/buttons/ButtonMenu";
import { ButtonToggleTheme } from "@/app/components/buttons/ButtonToggleTheme";
import Link from "next/link";
const headerItems = [
  { name: "About", href: "/about" },
  { name: "Posts", href: "/posts" },
  { name: "Tags", href: "/tags" },
  { name: "Drafts", href: "/drafts" },
] as const;

type Item = (typeof headerItems)[number]["name"];
type HeaderProps = { ariaCurrent?: Item };

export const BaseHeader = (({ ariaCurrent }) => {
  return (
    <>
      {/* sticky な要素がページ最上部にある場合に、next/link でページ遷移をするとスクロールアップされないバグがあるため、一時的に空の div を配置して対処している */}
      {/* refs: https://github.com/vercel/next.js/issues/28778#issuecomment-1615973918 */}
      <div />
      <header className="sticky top-0 bg-white/75 transition-colors ease-out dark:bg-gray-900/75 sm:bg-white sm:dark:bg-gray-900">
        <div className="m-auto flex max-w-5xl items-center justify-between p-4">
          <Link href="/" className="text-xl">
            {process.env.NEXT_PUBLIC_SITE_TITLE ?? ""}
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
                <ButtonToggleTheme isHidden={true} />
              </li>
            </ul>
          </nav>
          <ButtonMenu>
            <ButtonToggleTheme isHidden={false} />
            <nav className="inline">
              <ul className="grid items-end gap-3 text-lg">
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
              </ul>
            </nav>
          </ButtonMenu>
        </div>
      </header>
    </>
  );
}) satisfies React.FC<HeaderProps>;
