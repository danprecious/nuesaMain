import Image from "next/image";

const PhotoGallery = () => {
  const gallery = [
    { id: 1, src: "/image1.png", alt: "Image 1" },
    { id: 2, src: "/image2.png", alt: "Image 2", wide: true },
    { id: 3, src: "/image3.png", alt: "Image 3" },
    { id: 4, src: "/image4.png", alt: "Image 4", tall: true },
    { id: 5, src: "/image5.png", alt: "Image 5" },
    { id: 6, src: "/cover1.png", alt: "Image 3", wide: true },
    { id: 6, src: "/image3.png", alt: "Image 1" },
    { id: 6, src: "/image1.png", alt: "Image 6", tall: true },
    { id: 6, src: "/image2.png", alt: "Image 6", wide: true },
    { id: 6, src: "/image5.png", alt: "Image 6", tall: true },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {gallery.map((image) => {
        return (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg bg-gray-200 max-h-[13rem] ${
              image.wide ? "lg:col-span-2" : ""
            } ${image.tall ? "lg:row-span-2" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={100}
              width={100}
              className="object-contain w-full h-full"
            />
          </div>
        );
      })}
    </div>
  );
};


export default PhotoGallery;
