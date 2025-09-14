"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import DialogBox02 from "./DialogBox02";

export default function DialogComp02() {
  const [isCodeShown, setIsCodeShown] = useState(false);

  return (
    <div className="flex flex-col space-y-10 my-10">
      <h1 className="text-2xl font-medium text-secondary/80">Dialog Box 02</h1>

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
          {!isCodeShown ? <DialogBoxComp /> : <DialogBoxCode />}
        </div>
      </div>
    </div>
  );
}

function DialogBoxComp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <div className="w-full h-full bg-secondary/10 flex flex-col justify-center items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 border-2 border-destructive rounded cursor-pointer"
      >
        Delete Something
      </button>

      {isOpen && <DialogBox02 onClose={() => setIsOpen(false)} />}
    </div>
  );
}

function DialogBoxCode() {
  const [isCopied, setIsCopied] = useState(false);
  const codeString = `
import React, { useState } from "react";

function DialogBoxComp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="w-full h-full bg-secondary/10 flex flex-col justify-center items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 border-2 border-destructive rounded cursor-pointer"
      >
        Delete Something
      </button>

      {isOpen && <DialogBox onClose={() => setIsOpen(false)} />}
    </div>
  );
}

interface DialogBoxProps {
  onClose: () => void;
}

function DialogBox02({ onClose }: DialogBoxProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      setIsDeleting(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="h-screen fixed inset-0 flex flex-col justify-center items-center z-50">
      {/* Overlay */}
      <div className="bg-black/50 absolute inset-0" onClick={onClose} />

      {/* Dialog Content */}
      <div className="relative flex flex-col gap-4 px-6 py-5 bg-white rounded-2xl shadow-xl z-10 max-w-sm w-full text-center">
        <h1 className="text-xl font-semibold text-gray-800">Delete Item?</h1>
        <p className="text-sm text-gray-600">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>

        <div className="flex justify-center gap-3 mt-4">
          {/* Cancel Button */}
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition disabled:opacity-50"
          >
            Cancel
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
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
