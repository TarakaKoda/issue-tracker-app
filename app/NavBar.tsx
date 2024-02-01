import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import DarkModeButton from "./components/DarkModeButton";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="border-darkBackground1 mb-5 flex h-14 items-center justify-between border-b px-5">
      <div className="flex gap-6">
        <Link href="/">
          <AiFillBug className="h-5 w-5" />
        </Link>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li
              key={link.label}
              className=" text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white"
            >
              <Link href={link.href}>
                <p className="text-sm font-semibold">{link.label}</p>
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
