import React from "react";

import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { pagesObj } from "@/lib/arrays";

export const metadata: Metadata = {
  title: "Components",
};

export default function PagesPage() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto space-y-10">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Landing Pages</h1>
          <div className="flex gap-2 items-center">
            <Link href={"/docs/components"}>
              <ArrowLeft className="bg-secondary/15 rounded" />
            </Link>

            <Link href={"/docs/installation"} className="flex gap-2">
              <ArrowRight className="bg-secondary/15 rounded" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-secondary/80 text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            delectus?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-5 border-t pt-5">
        {pagesObj.map((comp) => (
          <Link
            href={comp.link}
            key={comp.title}
            className="hover:underline hover:underline-offset-4 font-medium"
          >
            {comp.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
