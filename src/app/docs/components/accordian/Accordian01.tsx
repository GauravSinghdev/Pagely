"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

const accordObj = [
  {
    title: "Title 01",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, unde.",
  },
  {
    title: "Title 02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, harum mollitia ipsa autem odio porro.",
  },
  {
    title: "Title 03",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga iure, esse molestiae quo incidunt veritatis. Earum et veritatis necessitatibus.",
  },
];

export default function Accordian01() {
  const [isCodeShown, setIsCodeShown] = useState<boolean>(false);

  return (
    <div className="flex flex-col space-y-10 my-10">
      <h1 className="text-2xl font-medium text-secondary/80">Accordian 01</h1>

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-full bg-secondary/10 flex flex-col justify-center items-center">
      {accordObj.map((accord, i) => (
        <AccordianComp
          key={accord.title}
          topic={accord.title}
          description={accord.description}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function ButtonCode() {
  const [isCopied, setIsCopied] = useState(false);
  const codeString = `
const accordObj = [
  {
    title: "Title 01",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, unde.",
  },
  {
    title: "Title 02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, harum mollitia ipsa autem odio porro.",
  },
  {
    title: "Title 03",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga iure, esse molestiae quo incidunt veritatis. Earum et veritatis necessitatibus.",
  },
];

function ButtonComp() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-full bg-secondary/10 flex flex-col justify-center items-center">
      {accordObj.map((accord, i) => (
        <AccordianComp
          key={accord.title}
          topic={accord.title}
          description={accord.description}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function AccordianComp({ topic, description, isOpen, onToggle }: AccordProps) {
  return (
    <div className="w-full px-5 my-2">
      <div
        className="border rounded-lg p-3 bg-secondary/10 hover:bg-secondary/20 flex flex-col cursor-pointer shadow-sm"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-medium">{topic}</h1>
          <ArrowDown
            className={\`transition-transform duration-500 \${isOpen ? "rotate-180" : "rotate-0"}\`}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              className="text-secondary/80 py-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
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

interface AccordProps {
  topic: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordianComp({ topic, description, isOpen, onToggle }: AccordProps) {
  return (
    <div className="w-full px-5 my-2">
      <div
        className="border rounded-lg p-3 bg-secondary/10 hover:bg-secondary/20 flex flex-col cursor-pointer shadow-sm overflow-hidden"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-medium">{topic}</h1>
          <ArrowDown
            className={`transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              className="text-secondary/80 py-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
