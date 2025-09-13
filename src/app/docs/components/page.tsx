import React from "react";

import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { compObj } from "@/lib/arrays";

export const metadata: Metadata = {
  title: "Components",
};

export default function ComponentPage() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto space-y-5">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Dialog Box</h1>
          <div className="flex gap-2 items-center">
            <Link href={"/docs/installation"}>
              <ArrowLeft className="bg-secondary/15 rounded" />
            </Link>

            <Link href={"/docs/pages"} className="flex gap-2">
              <ArrowRight className="bg-secondary/15 rounded" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-secondary/80 text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore. Repellendus sint excepturi et minima accusamus. Voluptatem officiis eum earum!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-5 border-t pt-5">
        {compObj.map((comp) => (
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
