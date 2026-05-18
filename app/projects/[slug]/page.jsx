"use client";
import { useState, useEffect, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jsonData from "@/json/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import NotFound from "@/app/not-found";
import Image from "next/image";
import FixedButon from "@/components/FixedButton";
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function ScrollDownButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (
      scrollTop <
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setIsAtBottom(true);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsAtBottom(false);
    }
  };

  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
      <motion.div
        className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
      >
        <FontAwesomeIcon
          icon={isAtBottom ? faChevronUp : faChevronDown}
          className="text-white text-2xl"
        />
      </motion.div>
    </div>
  );
}

function ImageSlider({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center my-5 px-0">
      {/* Main Image Container */}
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl flex items-center justify-center group">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full h-12 w-12 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 duration-300"
          aria-label="Previous image"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full h-12 w-12 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 duration-300"
          aria-label="Next image"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
        </button>

        {/* Sliding Image */}
        <div className="relative w-full h-full flex justify-center items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <Image
                src={images[activeIndex]}
                alt={`Screenshot ${activeIndex + 1}`}
                layout="fill"
                objectFit="contain"
                className="w-full h-full select-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Counter Badge */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider z-20">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Container */}
      <div className="w-full mt-6 flex flex-row items-center justify-center gap-3 overflow-x-auto py-2 px-4 scrollbar-thin scrollbar-thumb-neutral-700">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            className={`relative h-16 md:h-20 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
              index === activeIndex
                ? "border-black scale-105 shadow-md opacity-100"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Page(props) {
  const params = use(props.params);
  const [data, setData] = useState(null);
  useEffect(() => {
    const selectedData = jsonData.Projects.find(
      (item) => item.slug === params.slug
    );
    if (selectedData === undefined) {
      setData("404");
    } else {
      setData(selectedData);
    }
  }, [params.slug]);

  if (data === "404") {
    return (
      <>
        <NotFound />
      </>
    );
  } else if (!data) {
    return (
      <div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
        <div className="min-h-screen flex justify-center items-center w-full">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-full">
            <div className="flex justify-center items-start flex-col mb-5 space-y-10 w-ful p-4">
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
            </div>
            <div className="flex justify-start items-start flex-col mb-5 w-full p-4">
              <div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded  w-full h-full "></div>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
          <div className="w-full h-auto aspect-video">
            <div className="animate-pulse duration-500 shadow-lg bg-neutral-400 h-full w-full rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
      <FixedButon href="/projects">
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButon>
      <ScrollDownButton />
      <div className="min-h-screen flex justify-center items-center">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2  mt-10 md:mt-0">
          <div className="min-h-screen sm:min-h-0 flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
            <div>
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Project
              </h2>
              <h1 className="text-4xl font-medium text-neutral-900">
                {data.title}
              </h1>
            </div>
            <div>
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Technology
              </h2>
              <p className="text-2xl font-normal text-neutral-900">
                {data.tech.join(", ")}
              </p>
            </div>
            <div>
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Year
              </h2>
              <p className="text-2xl font-normal text-neutral-900">
                {data.year}
              </p>
            </div>
            {data.preview && (
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Preview
                </h2>
                <p className="text-2xl font-normal text-neutral-900">
                  <a
                    href={data.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview{" "}
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="ml-3"
                    />
                  </a>
                </p>
              </div>
            )}
            {data.code && (
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Source Code
                </h2>
                <p className="text-2xl font-normal text-neutral-900">
                  <a href={data.code} target="_blank" rel="noopener noreferrer">
                    Github <FontAwesomeIcon icon={faGithub} className="ml-3" />
                  </a>
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-start items-start flex-col mb-5 ">
            <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
              Description
            </h2>
            {data.desc.map((desc, index) => (
              <p
                key={index}
                className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* images */}
      <div className="mx-auto grid grid-cols-1 p-5 md:p-20 w-full">
        <div className="w-full h-auto text-center flex flex-col justify-center ">
          {data.images.length > 3 ? (
            <ImageSlider images={data.images} />
          ) : (
            data.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Project Image ${index + 1}`}
                className="mb-5 h-auto max-h-screen max-w-7xl mx-auto"
                width={1920}
                height={1080}
                blurDataURL={image}
                layout="responsive"
                objectFit="contain"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
