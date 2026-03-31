import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black/20 backdrop-blur-sm overflow-y-auto overflow-x-hidden">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              {title}
            </h3>

            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 rounded-lg text-sm w-8 h-8 flex justify-center items-center cursor-pointer"
              onClick={onClose}
            >
              X
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
