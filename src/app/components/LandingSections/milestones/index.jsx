"use client";

import { SectionHeading } from "@/app/components/LandingSections/sectionLayout";
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
    {
      id: "4",
      src: "db1",
    },
    {
      id: "5",
      src: "db1",
    },
  ];

  return (
    <div className=" flex justify-center items-center  mt-6 md:py-32 lg:px-28  p-6">
      <div className="lg:w-[40vw]">
        <SectionHeading text={"Milestones"} className="text-center" />

        {images.map((image) => {
          return (
            <motion.div
            className=" border-l-4 border-white px-5 "
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2 }}
              key={image.id}
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
      <div className="lg:w-[50vw]  h-[95vh] overflow-hidden relative  hidden lg:block">
        <motion.div
          className="max-h-[127vh] flex flex-col items-center py-10"
          animate={{ y: ["0%", "-100%"] }} // Moves from top to bottom
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
                className="w-[60%] min-h-[20em] bg-red-500 rounded-2xl my-2"
              >
                {image.id}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default MilestoneSection;
