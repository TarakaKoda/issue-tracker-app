"use client";

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import { DarkModeButton } from "./components";
import { useSession } from "next-auth/react";
import UserDropDown from "./components/UserDropDown";

const NavBar = () => {
  const { status, data: session } = useSession();
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <div className="flex w-full max-w-[96rem] justify-center">
      <nav className="mb-5 flex h-14 w-full items-center justify-between gap-6 border-b border-darkBackground1 px-5">
        <div className="flex items-center gap-6">
          <Link href="/">
            <AiFillBug className="h-5 w-5" />
          </Link>
          <ul className="m-0 mb-2 flex list-none gap-6">
            {links.map((link) => (
              <li
                key={link.label}
                className={classnames({
                  "text-zinc-900 dark:text-white": currentPath === link.href,
                  " text-zinc-500 dark:text-zinc-500":
                    currentPath !== link.href,
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
        <div className="text-md flex items-center gap-2 font-semibold leading-tight tracking-tight">
          {status === "authenticated" && (
            // <Link href={"/api/auth/signout"}><p>Logout</p></Link>
            <UserDropDown session={session} />
          )}
          {status === "unauthenticated" && (
            <Link href={"/api/auth/signin"}>
              <p>Login</p>
            </Link>
          )}
          <DarkModeButton />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
