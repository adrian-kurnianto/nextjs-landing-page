"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeroContent } from "./constant";

function Hero() {
  const [currentContent, setCurrentContent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const handleContent = (val: number) => {
    setAutoSlide(false);
    setCurrentContent(val);
  };

  const handleAutoSlide = () => {
    setCurrentContent((currentContent) => (currentContent === 0 ? 1 : 0));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(handleAutoSlide, 2000);
    return () => clearInterval(slideInterval);
  }, [autoSlide]);

  return (
    <div className="w-full pt-[10vh] h-[100vh] md:h-[75vh] xl:h-screen bg-gray-50 px-8 mb-4 transition-all ease-in-out">
      <div className="flex flex-col items-center w-[90%] sm:w-[80%] h-full mx-auto justify-center">
        <div className="w-[100%] overflow-x-hidden relative mb-8 ">
          <div
            className="flex transition-transform ease-out duration-500 gap-2"
            style={{ transform: `translateX(-${currentContent * 100}%)` }}
          >
            {HeroContent.map((el) => {
              return (
                <div
                  key={el.id}
                  className="shrink-0 flex flex-col justify-center w-full md:grid md:grid-cols-2 md:gap-4 md:place-items-center"
                >
                  <div className="md:col-span-1 md:h-full md:justify-center md:flex md:flex-col">
                    <h1 className="mb-4 text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-center md:text-left bg-gradient-to-r from-green-500 to-sky-400 inline-block text-transparent bg-clip-text">
                      {el.title}
                    </h1>
                    <p className="text-lg md:text-base lg:text-2xl text-center md:text-left mb-4">
                      {el.desc}
                    </p>
                    <div>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hidden md:block lg:block">
                        Join us
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="md:col-span-1 flex justify-center w-[280px] h-[280px] md:w-[312px] md:h-[312px] lg:w-[400px] lg:h-[400px] xl:w-[512px] xl:h-[512px] relative mb-8">
                      <Image
                        src={el.img}
                        alt=""
                        fill
                        placeholder="blur"
                        blurDataURL={el.img}
                      ></Image>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0 md:bottom-2 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {HeroContent.map((_, index) => {
                return (
                  <button
                    onClick={() => handleContent(index)}
                    key={index}
                    className={`transition-all w-3 h-3 bg-gray-400 rounded-full ${
                      currentContent === index ? "p-3" : "bg-opacity-50"
                    }`}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center md:hidden lg:hidden w-full">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[50%]">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
