import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction"
}

export default function DocsPage() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Introduction</h1>
          <Link href={"/docs/installation"} className="flex gap-2">
            <ArrowRight className="bg-secondary/15 rounded" />
          </Link>
        </div>
        <div>
          <p className="text-secondary/80">
            Inspired by shadcn
          </p>
        </div>
      </div>
    </div>
  );
}
