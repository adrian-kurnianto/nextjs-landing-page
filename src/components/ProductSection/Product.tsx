"use client";
import { ModifiedProductType } from "@/productType";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

type Props = {
  products: ModifiedProductType[];
};

function Product({ products }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const openPreviewModal = (img: string) => {
    setImagePreview(img);
    setIsModalOpen(true);
  };

  return (
    <div className="mx-auto px-6 py-4 mb-10">
      <div className="w-full text-center">
        <div className="text-4xl mb-6 lg:mb-10 font-bold">Our Product</div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 gap-x-5 gap-y-10">
          {products.map((el) => {
            return (
              <div
                onClick={() => openPreviewModal(el.img)}
                key={el.id}
                className="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2  max-w-sm overflow-hidden shadow-xl rounded-lg w-[140px] md:h-[260px] xl:w-[180px] "
              >
                <div className="w-full max-h-130 relative">
                  <Image
                    className=""
                    src={el.img ? el.img : "/static/Img/hero-3.png"}
                    alt=""
                    width={300}
                    height={300}
                    style={{ objectFit: "cover", height: "130px" }}
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-lg md:text-xl mb-2">
                    ID: {el.id}
                  </div>
                  <div className="text-gray-700 text-sm xl:text-md text-ellipsis line-clamp-3 ">
                    Product Name: {el.name || "-"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        image={imagePreview}
      ></Modal>
    </div>
  );
}

export default Product;
