import { Github, Layers } from "lucide-react";
import Link from "next/link";
import React from "react";
import SearchComp from "./SearchComp";
import { ModeToggle } from "./ModeToggle";
import { VscGithub } from "react-icons/vsc";
import Image from "next/image";

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
    <div className="border-b sticky top-0 z-50 shadow-2xl px-10 bg-background">
      <header className="py-2 flex items-center gap-5">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            className="size-10"
            width={50}
            height={50}
          />
        </Link>
        <nav className="flex gap-2 font-medium">
          {navObj.map((nav) => (
            <Link
              href={nav.link}
              key={nav.title}
              className="px-3 py-1 hover:bg-secondary/10 rounded-xl text-sm"
            >
              {nav.title}
            </Link>
          ))}
          <Link
            href={"https://bytelog.codewithkara.com/blogs"}
            target="_blank"
            className="px-3 py-1 hover:bg-secondary/10 rounded-xl text-sm"
          >
            Blogs
          </Link>
        </nav>
        <div className="flex flex-1"></div>
        <div className="hidden lg:inline">
          <SearchComp />
        </div>
        <div className="flex items-center gap-2">
          <VscGithub className="size-5" />
          <ModeToggle />
        </div>
      </header>
    </div>
  );
}
