import React from "react";

import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Copy } from "lucide-react";
import CopyComp from "./CopyComp";

export const metadata: Metadata = {
  title: "Installation",
};

export default function InstallationPage() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Installation</h1>
          <div className="flex gap-2 items-center">
            <Link href={"/docs"}>
              <ArrowLeft className="bg-secondary/15 rounded" />
            </Link>

            <Link href={"/docs/components"} className="flex gap-2">
              <ArrowRight className="bg-secondary/15 rounded" />
            </Link>
          </div>
        </div>
        <p className="text-secondary/80">
          These are prerequisite for building a great applications.
        </p>
        <p className="text-secondary/80 my-2">
          Follow the installation steps below :
        </p>
      </div>
      {/* <div className="space-y-5 text-balance">
        <p>
          This is not a component library. It is how you build your component
          library.
        </p>
        <p>
          You know how most traditional component libraries work: you install a
          package from NPM, import the components, and use them in your app.
        </p>
        <p>
          This approach works well until you need to customize a component to
          fit your design system or require one that isn&apos;t included in the
          library. Often, you end up wrapping library components, writing
          workarounds to override styles, or mixing components from different
          libraries with incompatible APIs.
        </p>
      </div> */}

      <div className="flex flex-col gap-2 my-5 border-t">
        <div className="space-y-2 my-5 text-balance">
          <h1>Create Nextjs App : </h1>
          <CopyComp
            title={`npx create-next-app@latest my-project --typescript --eslint --app
cd my-project`}
          />
        </div>

        <div className="space-y-2 my-5 text-balance">
          <h1>Install tailwindCSS v4.1 : </h1>
          <CopyComp
            title={"npm install tailwindcss @tailwindcss/postcss postcss"}
          />
        </div>

        <div className="space-y-2 my-5 text-balance">
          <h1>Install Motion : </h1>
          <CopyComp title={"npm install motion"} />
        </div>
      </div>
    </div>
  );
}
