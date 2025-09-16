import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DialogComp01 from "./DialogComp01";
import DialogComp02 from "./DialogComp02";

export const metadata: Metadata = {
  title: "DialogBox",
};

export default function DialogBoxPage() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto space-y-10">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">DialogBox</h1>
          <div className="flex gap-2 items-center">
            <Link href={"/docs/components/buttons"}>
              <ArrowLeft className="bg-secondary/15 rounded" />
            </Link>

            <Link href={"/docs/pages/page-01"} className="flex gap-2">
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
        <DialogComp01 />
        <DialogComp02 />
      </div>
    </div>
  );
}
