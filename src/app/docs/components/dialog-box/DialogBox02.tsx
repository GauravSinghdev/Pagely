import React, { useState } from "react";

interface DialogBoxProps {
  onClose: () => void;
}

export default function DialogBox02({ onClose }: DialogBoxProps) {
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
