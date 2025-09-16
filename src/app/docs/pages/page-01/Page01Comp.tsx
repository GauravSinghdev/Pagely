"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, {useState} from "react";
import { TiTick } from "react-icons/ti";

export default function Page01Comp() {
  const [isCodeShown, setIsCodeShown] = useState(false);

  return (
    <div className="flex flex-col space-y-10 py-10">
      {/* <h1 className="text-2xl font-medium text-secondary/80">Page 01</h1> */}

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
          {!isCodeShown ? <Page01Co /> : <Page01CoCode />}
        </div>
      </div>
    </div>
  );``
}

function Page01Co() {
  return (
    <div className="size-full flex flex-col cursor-default">
      <header className="flex flex-col border-b-2 p-1">
          <div className="px-2 flex items-center justify-between">
            <div className="border-2 p-1 text-primary rounded">Logo</div>
            <nav className="flex gap-1">
                <div className="">Home</div>
                <div className="">About</div>
            </nav>
            <div className="border-2 p-1 border-primary rounded">Login</div>
          </div>
      </header>
      <main className="flex-1 flex justify-center items-center">
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-2xl text-primary">Supa Car</div>
            <div className="text-lg text-secondary/80 text-balance">Buy it. Your fav car all in one place.</div>
        </div>
        <div className="w-full h-full flex items-center justify-center"><Image src={"https://cdn.pixabay.com/objects3d/2025/07/11/04-40-10-970/render_720_720_0_340_0.png"} alt="page01-img" width={200} height={200} className="size-50 aspect-square rounded shadow-xl" style={{ filter: "drop-shadow(5px 5px 10px #000)" }}/></div>
      </main>
    </div>
  );
}

function Page01CoCode() {
  const [isCopied, setIsCopied] = useState(false);
  const codeString = `

function Page01Co() {
  return (
    <div className="size-full flex flex-col cursor-default">
      <header className="flex flex-col border-b-2 p-1">
          <div className="px-2 flex items-center justify-between">
            <div className="border-2 p-1 text-primary rounded">Logo</div>
            <nav className="flex gap-1">
                <div className="">Home</div>
                <div className="">About</div>
            </nav>
            <div className="border-2 p-1 border-primary rounded">Login</div>
          </div>
      </header>
      <main className="flex-1 flex justify-center items-center">
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-2xl text-primary">Supa Car</div>
            <div className="text-lg text-secondary/80 text-balance">Buy it. Your fav car all in one place.</div>
        </div>
        <div className="w-full h-full flex items-center justify-center"><Image src={"https://cdn.pixabay.com/objects3d/2025/07/11/04-40-10-970/render_720_720_0_340_0.png"} alt="page01-img" width={200} height={200} className="size-50 aspect-square rounded shadow-xl" style={{ filter: "drop-shadow(5px 5px 10px #000)" }}/></div>
      </main>
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
