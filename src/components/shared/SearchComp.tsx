"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { motion, AnimatePresence } from "framer-motion"; // ✅ use framer-motion
import { ArrowRight, Search } from "lucide-react";
import { compObj, pagesObj, sectionObj } from "@/lib/arrays";
import { useRouter } from "next/navigation";

export default function SearchComp() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // handle keyboard shortcuts
  useEffect(() => {
    const checkPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", checkPress);
    return () => document.removeEventListener("keydown", checkPress);
  }, []);

  // lock/unlock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="flex gap-5 items-center bg-secondary/10 p-1 px-2 rounded text-sm">
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <span>Search documentation</span>
        <div className="flex items-center gap-1">
          <div className="border bg-white dark:bg-black rounded p-0.5 text-xs">
            Ctrl
          </div>
          <div className="border bg-white dark:bg-black rounded p-0.5 text-xs">
            K
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <SearchDiv
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            close={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function SearchDiv({
  searchTerm,
  setSearchTerm,
  close,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  close: () => void;
}) {
  const router = useRouter();

  const filterData = (arr: typeof compObj) =>
    arr.filter((sec) =>
      sec.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredComp = filterData(compObj);
  const filteredSection = filterData(sectionObj);
  const filteredPages = filterData(pagesObj);

  return (
    <motion.div
      className="h-screen fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* backdrop */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={close}
      />

      {/* modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.2 }}
        className="max-w-lg w-full mx-auto z-50 border-4 p-3 rounded-xl bg-background border-primary"
        onClick={(e) => e.stopPropagation()} // ✅ stops reopening
      >
        <div className="flex flex-col max-h-[400px] overflow-y-auto no-scrollbar">
          {/* search input */}
          <div className="relative mb-3">
            <Search className="absolute top-2.5 left-2 text-secondary/70 size-4" />
            <Input
              placeholder="Search documentation..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>

          {/* sections */}
          <SearchGroup
            title="Section"
            items={filteredSection}
            onClick={(link) => {
              router.push(link);
              close();
            }}
          />
          <SearchGroup
            title="Components"
            items={filteredComp}
            onClick={(link) => {
              router.push(link);
              close();
            }}
          />
          <SearchGroup
            title="Landing Pages"
            items={filteredPages}
            onClick={(link) => {
              router.push(link);
              close();
            }}
          />

          {/* empty */}
          {filteredComp.length === 0 &&
            filteredSection.length === 0 &&
            filteredPages.length === 0 && (
              <div className="p-4 text-center text-secondary/70 text-sm">
                No results found.
              </div>
            )}
        </div>

        <div className="border-t-2 pt-2 text-xs text-secondary/60 text-center">
          Esc to return to page
        </div>
      </motion.div>
    </motion.div>
  );
}

function SearchGroup({
  title,
  items,
  onClick,
}: {
  title: string;
  items: { title: string; link: string }[];
  onClick: (link: string) => void;
}) {
  if (items.length === 0) return null;
  return (
    <div className="p-2">
      <div className="font-medium text-secondary/80">{title}</div>
      <div className="flex flex-col py-1">
        {items.map((sec) => (
          <div
            key={sec.title}
            className="flex items-center gap-4 text-sm hover:bg-secondary/10 rounded-xl px-1 py-2 cursor-pointer"
            onClick={() => onClick(sec.link)}
          >
            <ArrowRight className="size-5" />
            {sec.title}
          </div>
        ))}
      </div>
    </div>
  );
}
