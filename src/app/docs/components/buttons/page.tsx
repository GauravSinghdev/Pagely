import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button01 from "./Button01";
import Button02 from "./Button02";
import Button03 from "./Button03";
import Button04 from "./Button04";

export const metadata: Metadata = {
  title: "Buttons",
};

export default function ButtonsPage() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto space-y-10">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Buttons</h1>
          <div className="flex gap-2 items-center">
            <Link href={"/docs/components/accordian"}>
              <ArrowLeft className="bg-secondary/15 rounded" />
            </Link>

            <Link href={"/docs/components/dialog-box"} className="flex gap-2">
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
      <div className="border-t flex flex-col gap-10">
        <Button01 />
        <Button02 />
        <Button03 />
        <Button04 />
      </div>
    </div>
  );
}
