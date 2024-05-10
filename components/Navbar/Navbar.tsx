"use client";

import Link from "next/link";
import ImageContainer from "@/components/common/ImageContainer";
import VerticalSeparator from "@/components/Navbar/VerticalSeparator";
import ToggleDarkMode from "@/components/Navbar/ToggleDarkMode";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import logoDark from "@/public/logo_dark.png";
import logoLight from "@/public/logo_light.png";

const MENU = [
  { id: 0, name: "About", href: "/about" },
  { id: 1, name: "Projects", href: "/projects" },
  { id: 2, name: "Blog", href: "/blog" },
  { id: 3, name: "Resumé", href: "/doh_resumé.pdf" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuExpand, setMenuExpand] = useState(false);

  return (
    <div className="w-full h-16 flex justify-between items-center px-4 fixed top-0 bg-grey-3 dark:bg-grey-0 z-50">
      <Link href="/">
        <ImageContainer
          src={logoDark}
          alt="logo"
          className="h-8 w-8 block dark:hidden"
        />
        <ImageContainer
          src={logoLight}
          alt="logo"
          className="h-8 w-8 hidden dark:block"
        />
      </Link>
      <div className="h-full flex tablet:flex-row-reverse justify-between items-center tablet:space-x-reverse space-x-8">
        <ToggleDarkMode />
        <VerticalSeparator />
        <Menu
          className="tablet:hidden cursor-pointer"
          onClick={() => setMenuExpand(!menuExpand)}
        />
        <ul
          className={`flex-col tablet:flex-row tablet:relative absolute tablet:top-0 top-16 tablet:right-0 right-7 tablet:space-y-0 space-y-2 tablet:space-x-12 text-lg p-4 bg-grey-3 dark:bg-grey-0 ${
            menuExpand ? "flex" : "tablet:flex hidden"
          }`}
        >
          {MENU.map((menuItem) => (
            <li
              key={menuItem.id}
              className={`${
                pathname === "/" + menuItem.name.toLowerCase() && "underline"
              } hover:underline`}
            >
              <Link href={menuItem.href}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
