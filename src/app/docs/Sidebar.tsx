"use client";

import { compObj, pagesObj, sectionObj } from "@/lib/arrays";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <aside className="h-screen fixed w-64 top-20 px-5 space-y-5 overflow-y-auto no-scrollbar">

      <div className="flex flex-col">
        <div className="flex items-center gap-1 font-semibold text-secondary/80">
          Sections
          <span>
            <MoveRight className="size-5 text-secondary" />
          </span>
        </div>
        <div className="flex flex-col text-sm">
          {sectionObj.map((section) => (
            <Link
              key={section.title}
              href={section.link}
              className={`p-1 px-3 hover:bg-secondary/10 rounded-xl ${
                pathname === section.link
                  ? "text-primary/80 font-semibold underline"
                  : ""
              }`}
            >
              {section.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1 font-semibold text-secondary/80">
          Components
          <span>
            <MoveRight className="size-5 text-secondary" />
          </span>
        </div>
        <div className="flex flex-col text-sm">
          {compObj.map((section) => (
            <Link
              key={section.title}
              href={section.link}
              className={`p-1 px-3 hover:bg-secondary/10 rounded-xl ${
                pathname === section.link
                  ? "text-primary/80 font-semibold underline"
                  : ""
              }`}
            >
              {section.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1 font-semibold text-secondary/80">
          Landing Pages
          <span>
            <MoveRight className="size-5 text-secondary" />
          </span>
        </div>
        <div className="flex flex-col text-sm">
          {pagesObj.map((section) => (
            <Link
              key={section.title}
              href={section.link}
              className={`p-1 px-3 hover:bg-secondary/10 rounded-xl ${
                pathname === section.link
                  ? "text-primary/80 font-semibold underline"
                  : ""
              }`}
            >
              {section.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
