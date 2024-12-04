"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ModifiedProductType } from "@/productType";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  data?: ModifiedProductType[];
};

function Modal({ isOpen, onClose, data }: Props) {
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
        <div className="flex justify-around gap-3">
          {data?.map((el) => {
            return (
              <div key={el.id} className="bg-white p-4">
                <div className="shadow-lg rounded-lg max-w-[100px] lg:max-w-[120px]">
                  <Image
                    src={el.img || "/static/Img/hero-3.png"}
                    width={800}
                    height={800}
                    alt=""
                  ></Image>
                  <div>ID: {el.id || ""}</div>
                  <div>name: {el.name || ""}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Modal;
