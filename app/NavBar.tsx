"use client";

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import DarkModeButton from "./components/DarkModeButton";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="mb-5 flex h-14 items-center justify-between border-b border-darkBackground1 px-5">
      <div className="flex gap-6">
        <Link href="/">
          <AiFillBug className="h-5 w-5" />
        </Link>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li
              key={link.label}
              className={classnames({
                "text-zinc-900 dark:text-white": currentPath === link.href,
                " text-zinc-500 dark:text-zinc-500": currentPath !== link.href,
                "transition-colors ": true,
              })}
            >
              <Link href={link.href}>
                <p className="text-md font-semibold leading-tight tracking-tight">
                  {link.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <DarkModeButton />
    </nav>
  );
};

export default NavBar;
