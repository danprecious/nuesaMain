"use client";

import { SectionHeading } from "@/_local-components/sectionLayout";
import { motion } from "framer-motion";

const MilestoneSection = () => {
  const images = [
    {
      id: "1",
      src: "db1",
    },
    {
      id: "2",
      src: "db1",
    },
    {
      id: "3",
      src: "db1",
    },
  ];

  return (
    <div className="lg:flex justify-between  mt-6 md:py-10 lg:px-28  p-6 relative min-h-screen">
      <div className="lg:w-[40%]">
        <SectionHeading text={"Milestones"} className="text-center" />

        {images.map(() => {
          return (
            <motion.div
            className="mb-10 border-l-4 border-white px-5"
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="">
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quam, placeat in ratione reiciendis nemo illum cumque
                  voluptatem mollitia cupiditate quasi hic laboriosam dolores
                  perspiciatis temporibus? A saepe praesentium deleniti illum.
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="lg:w-[50%] h-[100%] sticky top-0 right-0 overflow-hidden hidden lg:block">
        <motion.div
          className="h-full flex flex-col items-center"
          animate={{ y: ["-100%", "100%"] }} // Moves from top to bottom
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "infinity", // Loop the animation
            duration: 10, // Duration of one complete cycle
            ease: "linear", // Smooth movement
          }}
        >
          {images.map((image) => {
            return (
              <div
                key={image.id}
                className="w-[60%] min-h-[20em] rounded-2xl my-2"
              >
                image
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default MilestoneSection;
