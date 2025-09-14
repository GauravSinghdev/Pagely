"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

interface titleProps {
  title: string;
}

export default function CopyComp({ title }: titleProps) {
  const [isCopied, SetIsCopied] = useState<boolean>(false);

  const handleClick = () => {
    SetIsCopied(true);
    navigator.clipboard.writeText(title);
    setTimeout(() => {
      SetIsCopied(false);
    }, 1000);
  };
  return (
    <div className="bg-accent p-3 rounded-xl flex justify-between items-s">
      <code className="font-medium">
        <pre>{title}</pre>
      </code>
      <button onClick={handleClick} className="cursor-pointer">
        {" "}
        {!isCopied ? <Copy className="size-5" /> : <Check className="size-5" />}
      </button>
    </div>
  );
}
