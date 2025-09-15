import { Github, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import SearchComp from "./SearchComp";
import { ModeToggle } from "./ModeToggle";
import { VscGithub } from "react-icons/vsc";
import Image from "next/image";
import DashboardMenu from "./DashboardMenu";

const navObj = [
  {
    title: "Docs",
    link: "/docs/installation",
  },
  {
    title: "Components",
    link: "/docs/components",
  },
  {
    title: "Pages",
    link: "/docs/pages",
  },
];

export default function Navbar() {
  return (
    <header className="border-b sticky top-0 z-50 shadow-2xl lg:px-10 bg-background">
      <div className="py-2 flex items-center gap-5 px-2 lg:px-0">
        <div>
          <DashboardMenu />
        </div>

        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            className="size-10"
            width={50}
            height={50}
          />
        </Link>
        <nav className="hidden lg:flex gap-2 font-medium">
          {navObj.map((nav) => (
            <Link
              href={nav.link}
              key={nav.title}
              className="px-3 py-2 hover:bg-secondary/10 rounded-xl text-sm"
            >
              {nav.title}
            </Link>
          ))}
          <Link
            href={"https://bytelog.codewithkara.com/blogs"}
            target="_blank"
            className="px-3 py-2 hover:bg-secondary/10 rounded-xl text-sm"
          >
            Blogs
          </Link>
        </nav>
        <div className="flex flex-1"></div>
        <div className="hidden lg:inline">
          <SearchComp />
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={"https://github.com/GauravSinghdev/Pagely"}
            target="_blank"
          >
            <VscGithub className="size-7" />
          </Link>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
