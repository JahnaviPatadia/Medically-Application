import React, { useEffect } from "react";
import axios from "axios";

const ModalComponent = ({ isOpen, closeModal, children }) => {
  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="p-4">
              {children}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-white bg-gray-500 hover:bg-gray-600 rounded-md px-4 py-2 mr-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalComponent;
