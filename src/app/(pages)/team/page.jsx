import { SectionHeading } from "@/app/components/LandingSections/sectionLayout";
import Image from "next/image";

const TeamPage = () => {
  const teams = {
    "NUESA 2024": [
      { id: 1, src: "/image1.png", alt: "Image 1" },
      { id: 2, src: "/image2.png", alt: "Image 2" },
      { id: 3, src: "/image3.png", alt: "Image 3" },
      { id: 4, src: "/image4.png", alt: "Image 4" },
      { id: 5, src: "/image5.png", alt: "Image 5" },
      { id: 6, src: "/image3.png", alt: "Image 6" },
    ],
    "NUESA 23": [
      { id: 4, src: "/image4.png", alt: "Image 4" },
      { id: 5, src: "/image5.png", alt: "Image 5" },
      { id: 6, src: "/image4.png", alt: "Image 6" },
      { id: 6, src: "/image2.png", alt: "Image 6" },
      { id: 6, src: "/image3.png", alt: "Image 6" },
      { id: 6, src: "/image1.png", alt: "Image 6" },
    ],
    "NUESA 22": [
      { id: 4, src: "/image3.png", alt: "Image 4" },
      { id: 5, src: "/image2.png", alt: "Image 5" },
      { id: 6, src: "/image4.png", alt: "Image 6" },
      { id: 6, src: "/image5.png", alt: "Image 6" },
      { id: 6, src: "/image1.png", alt: "Image 6" },
    ],
    "NUESA 21": [
      { id: 4, src: "/image2.png", alt: "Image 4" },
      { id: 5, src: "/image3.png", alt: "Image 5" },
      { id: 6, src: "/image1.png", alt: "Image 6" },
      { id: 6, src: "/image5.png", alt: "Image 6" },
      { id: 6, src: "/image3.png", alt: "Image 6" },
    ],
    "NUESA 20": [
      { id: 4, src: "/image1.png", alt: "Image 4" },
      { id: 5, src: "/image3.png", alt: "Image 5" },
      { id: 6, src: "/image4.png", alt: "Image 6" },
      { id: 6, src: "/image5.png", alt: "Image 6" },
      { id: 6, src: "/image3.png", alt: "Image 6" },
    ],
    "NUESA 19": [
      { id: 4, src: "/image2.png", alt: "Image 4" },
      { id: 5, src: "/image1.png", alt: "Image 5" },
      { id: 6, src: "/image2.png", alt: "Image 6" },
      { id: 6, src: "/image4.png", alt: "Image 6" },
      { id: 6, src: "/image5.png", alt: "Image 6" },
    ],
    "NUESA 18": [
      { id: 4, src: "/image4.png", alt: "Image 4" },
      { id: 5, src: "/image2.png", alt: "Image 5" },
      { id: 6, src: "/image3.png", alt: "Image 6" },
      { id: 6, src: "/image1.png", alt: "Image 6" },
      { id: 6, src: "/image5.png", alt: "Image 6" },
    ],
  };

  return (
    <div>
      <div className="flex justify-center px-2">
        <SectionHeading text={"NUESA OAUSTECH - NOW & THEN"} />
      </div>

      <div className="flex  flex-col items-center">
        {Object.keys(teams).map((key, index) => {
          return (
            <div key={index} className="my-8">
              <div className="text-[1.2rem] font-bold py-4 px-2 flex justify-center lg:justify-start">
                {key}
              </div>
              <div className="px-2">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum consectetur nam error illum expedita perferendis.
                </p>
              </div>
              <div className="flex w-[90vw] teamScroll ">
                {teams[key].map((image) => {
                  return (
                    <div className="">
                      <div
                        key={image.id}
                        className={`relative overflow-hidden rounded-lg bg-gray-200 h-[19rem] my-4 md:w-[12rem] w-full min-w-[15rem] mx-2`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          height={100}
                          width={100}
                          className="object-contain w-full h-full"
                        />
                        <p className="p"></p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p>Name</p>
                        <p>Position</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPage;
