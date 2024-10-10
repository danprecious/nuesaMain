"use client";

import { SectionHeading } from "@/_local-components/sectionLayout";
import SpaceEffect from "@/_local-components/spaceEffect";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamMembers = () => {
  const images = [
    { id: 1, src: "/image1.png", alt: "Image 1" },
    { id: 2, src: "/image2.png", alt: "Image 2" },
    { id: 3, src: "/image3.png", alt: "Image 3" },
    { id: 4, src: "/image4.png", alt: "Image 4" },
    { id: 5, src: "/image5.png", alt: "Image 5" },
    { id: 6, src: "/cover1.png", alt: "Image 3" },
    { id: 6, src: "/image3.png", alt: "Image 1" },
    { id: 6, src: "/image1.png", alt: "Image 6" },
    { id: 6, src: "/image2.png", alt: "Image 6" },
    { id: 6, src: "/image5.png", alt: "Image 6" },
  ];

  return (
    <div className="grid place-items-center relative mt-6 md:p-10  p-6">
      <SpaceEffect />
      <SectionHeading text={"NUESA OAUSTECH TEAM"} />

      <div className="w-[100%] overflow-hidden  lg:block py-14">
        <motion.div
          className="h-full flex  items-center"
          animate={{ x: ["0%", "-100%"] }} // Moves from top to bottom
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "infinity", // Loop the animation
            duration: 50, // Duration of one complete cycle
            ease: "linear", // Smooth movement
          }}
        >
          {images.map((image) => {
            return (
              <div
                key={image.id}
                className="min-w-[15em] h-[18em] rounded-2xl my-2 bg-black mx-3 overflow-hidden relative"
              >
                <Image
                  src={image.src}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
                <p className="z-50 bg-stone-800 py-2 absolute bottom-0 w-full px-3">Name</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamMembers;
