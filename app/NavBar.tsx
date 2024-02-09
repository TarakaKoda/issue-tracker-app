"use client";

import classnames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import { DarkModeButton } from "./components";
import UserDropDown from "./components/UserDropDown";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 flex h-14 bg-background justify-center dark:bg-black dark:bg-opacity-10 dark:backdrop-blur-lg dark:backdrop-filter">
      <nav className="mb-5 flex h-14 w-full items-center justify-between gap-6 bg-blend-difference border-b-[0.1px] dark:border-darkBackground1 px-5">
        <div className="flex items-center  gap-6">
          <Link href="/">
            <AiFillBug className="h-5 w-5" />
          </Link>
          <NavLinks />
        </div>
        <div className="text-md flex w-full items-center justify-end gap-4 font-semibold leading-tight tracking-tight">
          <AuthStatus />
          <DarkModeButton />
        </div>
      </nav>
    </div>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <ul className="m-0 mb-2 mix-blend-difference flex list-none gap-6">
      {links.map((link) => (
        <li
          key={link.label}
          className={classnames({
            "text-zinc-900 dark:text-white": currentPath === link.href,
            " text-zinc-500 dark:text-zinc-400": currentPath !== link.href,
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
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;
  if (status === "unauthenticated")
    return (
      <Link
        className="text-zinc-500 dark:text-zinc-400"
        href={"/api/auth/signin"}
      >
        <p>Login</p>
      </Link>
    );
  return <UserDropDown session={session!} />;
};

export default NavBar;
