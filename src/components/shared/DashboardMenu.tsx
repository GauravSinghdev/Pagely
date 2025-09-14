"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { compObj, pagesObj, sectionObj } from "@/lib/arrays";
import { usePathname } from "next/navigation";

export default function DashboardMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <button className="block md:hidden" onClick={toggleMenu}>
        <Menu className="size-6" />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Sidebar Drawer */}
            <motion.aside
              className="fixed top-0 left-0 h-screen w-64 bg-background shadow-lg z-50 p-5 flex flex-col space-y-5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                className="self-end mb-5 border-b-2 shadow-xl"
                onClick={toggleMenu}
              >
                <X className="size-6" />
              </button>

              {/* Nav Links */}
              <div className="space-y-2">
                <div className="font-medium text-secondary/80">Section</div>
                <nav className="flex flex-col gap-2 font-medium">
                  {sectionObj.map((sec) => (
                    <Link
                      key={sec.title}
                      href={sec.link}
                      onClick={toggleMenu}
                      className={`p-1 hover:bg-secondary/10 rounded-xl text-sm ${pathname === sec.link ? "underline text-primary": ""}`}
                    >
                      {sec.title}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-secondary/80">Components</div>
                <nav className="flex flex-col gap-2 font-medium">
                  {compObj.map((sec) => (
                    <Link
                      key={sec.title}
                      href={sec.link}
                      onClick={toggleMenu}
                      className="p-1 hover:bg-secondary/10 rounded-xl text-sm"
                    >
                      {sec.title}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-secondary/80">Pages</div>
                <nav className="flex flex-col gap-2 font-medium">
                  {pagesObj.map((sec) => (
                    <Link
                      key={sec.title}
                      href={sec.link}
                      onClick={toggleMenu}
                      className="p-1 hover:bg-secondary/10 rounded-xl text-sm"
                    >
                      {sec.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
