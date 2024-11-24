"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  image: string;
};

function Modal({ isOpen, onClose, image }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
  }, [onClose]);
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 transition-all z-[10000] bg-black w-full h-[100vh] bg-opacity-80 justify-center flex items-center">
        <div className="absolute top-3 right-3">
          <button onClick={onClose}>
            <XMarkIcon className="fill-white w-8" />
          </button>
        </div>
        <div className=" shadow-lg rounded-lg max-w-[300px] lg:max-w-[700px]">
          <Image src={image} width={800} height={800} alt=""></Image>
        </div>
      </div>
    </>
  );
}

export default Modal;
