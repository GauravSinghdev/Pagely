"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

export default function Button04() {
  const [isCodeShown, setIsCodeShown] = useState<boolean>(false);

  return (
    <div className="flex flex-col space-y-10 my-10">
      <h1 className="text-2xl font-medium text-secondary/80">
        Button 04
      </h1>

      <div className="flex flex-col gap-2">
        {/* Toggle Buttons */}
        <div className="flex gap-1">
          <Button
            variant={isCodeShown ? "ghost" : "default"}
            onClick={() => setIsCodeShown(false)}
          >
            Preview
          </Button>
          <Button
            variant={!isCodeShown ? "ghost" : "default"}
            onClick={() => setIsCodeShown(true)}
          >
            Code
          </Button>
        </div>

        {/* Preview / Code */}
        <div className="border rounded h-64 lg:h-96 max-w-2xl">
          {!isCodeShown ? <ButtonComp /> : <ButtonCode />}
        </div>
      </div>
    </div>
  );
}

function ButtonComp() {
  return (
    <div className="w-full h-full bg-secondary/10 flex flex-col justify-center items-center gap-4">
      <button className="px-5 py-2 flex items-center gap-2 rounded-lg bg-primary text-white hover:bg-primary/80 transition">
        <Sparkles size={16} />
        Magic
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

function ButtonCode() {
  const [isCopied, setIsCopied] = useState(false);

  const codeString = `
function Button04Comp() {
  return (
    <div className="w-full h-full bg-secondary/10 flex flex-col justify-center items-center gap-4">
      <button className="px-5 py-2 flex items-center gap-2 rounded-lg bg-primary text-white hover:bg-primary/80 transition">
        <Sparkles size={16} />
        Magic
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
  `.trim();

  return (
    <div className="relative w-full h-full overflow-y-auto bg-secondary/10 p-4 pt-10 no-scrollbar">
      <pre className="text-sm overflow-y-auto no-scrollbar h-full">
        <code>{codeString}</code>
      </pre>

      <div className="absolute top-0 right-0">
        <Button
          onClick={() => {
            setIsCopied(true);
            navigator.clipboard.writeText(codeString);
            setTimeout(() => {
              setIsCopied(false);
            }, 1000);
          }}
        >
          {!isCopied ? (
            "Copy"
          ) : (
            <div className="flex gap-1 items-center">
              Copied <TiTick />
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}
