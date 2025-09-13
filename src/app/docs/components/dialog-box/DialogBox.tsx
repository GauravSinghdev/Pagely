import React from "react";

interface DialogBoxProps {
  onClose: () => void;
}

export default function DialogBox({ onClose }: DialogBoxProps) {
  return (
    <div className="h-screen fixed inset-0 flex flex-col justify-center items-center z-50">
      {/* Overlay */}
      <div
        className="bg-black/50 absolute inset-0"
        onClick={onClose}
      />

      {/* Dialog Content */}
      <div className="relative flex flex-col gap-4 px-6 py-5 bg-white rounded-xl shadow-lg z-10 max-w-sm text-center">
        <h1 className="text-lg font-semibold">Dialog Box</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 rounded bg-primary text-white hover:opacity-90"
        >
          Close
        </button>
      </div>
    </div>
  );
}
