import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Page01Comp from "./Page01Comp";

export const metadata: Metadata = {
  title: "Page 01",
};

export default function LPage01() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto space-y-10">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Page 01</h1>
          <div className="flex gap-2 items-center">
            <Link href={"/docs/components/dialog-box"}>
              <ArrowLeft className="bg-secondary/15 rounded" />
            </Link>

            <Link href={"/docs/pages/page-02"} className="flex gap-2">
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
      <div className="border-t flex flex-col gap-10 divide-y-2">
        <Page01Comp/>
      </div>
    </div>
  );
}
