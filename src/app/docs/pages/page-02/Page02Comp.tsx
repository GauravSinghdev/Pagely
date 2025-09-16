"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { motion } from "motion/react";

export default function Page02Comp() {
  const [isCodeShown, setIsCodeShown] = useState(false);

  return (
    <div className="flex flex-col space-y-10 py-10">
      {/* Toggle Buttons */}
      <div className="flex flex-col gap-2">
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
        <div className="border rounded h-64 lg:h-96 max-w-2xl overflow-hidden">
          {!isCodeShown ? <LandingPreview /> : <LandingCode />}
        </div>
      </div>
    </div>
  );
}

function LandingPreview() {
  return (
    <motion.div
      className="size-full flex flex-col cursor-default bg-gradient-to-br from-white via-blue-50 to-indigo-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.header
        className="flex flex-col border-b p-2 bg-white/60 backdrop-blur-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="px-4 flex items-center justify-between">
          <motion.div
            className="text-lg font-bold text-indigo-600"
            whileHover={{ scale: 1.1 }}
          >
            TaskFlow
          </motion.div>
          <nav className="flex gap-4 text-sm text-gray-600">
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Features
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Pricing
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Contact
            </motion.div>
          </nav>
          <motion.div
            className="px-3 py-1 border rounded text-indigo-600 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            Login
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-6 p-4">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-3xl lg:text-4xl font-bold text-gray-800">
            Organize your tasks with <span className="text-indigo-600">AI</span>
          </div>
          <div className="text-base text-gray-600 max-w-md">
            TaskFlow helps you manage your work smarter with intelligent task
            suggestions, reminders, and collaboration tools.
          </div>
          <Button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow">
            Get Started
          </Button>
        </motion.div>

        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src="https://cdn.pixabay.com/photo/2016/09/30/13/40/puzzle-1705339_640.jpg"
            alt="taskflow-dashboard"
            width={280}
            height={200}
            className="rounded-xl shadow-2xl"
            priority
          />
        </motion.div>
      </main>
    </motion.div>
  );
}

function LandingCode() {
  const [isCopied, setIsCopied] = useState(false);
  const codeString = `
import { motion } from "motion/react";

function LandingPreview() {
  return (
    <motion.div
      className="size-full flex flex-col cursor-default bg-gradient-to-br from-white via-blue-50 to-indigo-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.header
        className="flex flex-col border-b p-2 bg-white/60 backdrop-blur-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="px-4 flex items-center justify-between">
          <motion.div
            className="text-lg font-bold text-indigo-600"
            whileHover={{ scale: 1.1 }}
          >
            TaskFlow
          </motion.div>
          <nav className="flex gap-4 text-sm text-gray-600">
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Features
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Pricing
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Contact
            </motion.div>
          </nav>
          <motion.div
            className="px-3 py-1 border rounded text-indigo-600 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            Login
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-6 p-4">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-3xl lg:text-4xl font-bold text-gray-800">
            Organize your tasks with <span className="text-indigo-600">AI</span>
          </div>
          <div className="text-base text-gray-600 max-w-md">
            TaskFlow helps you manage your work smarter with intelligent task
            suggestions, reminders, and collaboration tools.
          </div>
          <Button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow">
            Get Started
          </Button>
        </motion.div>

        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src="https://cdn.pixabay.com/photo/2016/09/30/13/40/puzzle-1705339_640.jpg"
            alt="taskflow-dashboard"
            width={280}
            height={200}
            className="rounded-xl shadow-2xl"
            priority
          />
        </motion.div>
      </main>
    </motion.div>
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
            setTimeout(() => setIsCopied(false), 1000);
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
