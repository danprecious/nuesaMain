import { SectionHeading } from "@/_local-components/sectionLayout";
import React from "react";

const OurStory = () => {
  const photos = [
    {
      id: "1",
      imgSrc: "1",
      alt: "",
      orientation: "dowm",
    },
    {
      id: "2",
      imgSrc: "2",
      alt: "",
      orientation: "up",
    },
    {
      id: "3",
      imgSrc: "3",
      alt: "",
      orientation: "down",
    },
    {
      id: "4",
      imgSrc: "4",
      alt: "",
      orientation: "up",
    },
  ];

  return (
    <div className="text-white text-center md:text-left md:px-24 px-2 md:py-8">
      <div className="flex justify-center w-full flex-col items-center mb-6">
        <SectionHeading text="Our Story" className="" />
        <div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            recusandae blanditiis provident delectus, hic nostrum.
          </p>
        </div>
      </div>

      <div className="py-6 grid lg:grid-cols-4 md:grid-cols-2 m-auto items-center place-items-center">
        {photos.map((image) => {
          return (
            <div
              key={image.id}
              className={`bg-stone-900 rounded-md md:w-[15em] md:h-[15em] ${
                image.orientation == "up" ? "lg:mt-[4em] hidden md:flex" : ""
              }`}
            ></div>
          );
        })}
      </div>

      <div className="lg:mx-10 py-6">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          placeat reiciendis itaque! Qui possimus exercitationem illum excepturi
          ex alias quae hic, voluptas repellat neque deserunt quisquam animi
          voluptatum assumenda facilis ullam sint cum aliquid cumque sed?
          Dolorum consequuntur culpa pariatur est illo quae sit, nisi incidunt
          deserunt hic nulla reprehenderit explicabo tenetur aut molestias
          mollitia sed corporis officia. Culpa ab quo, voluptatibus vitae eius
          explicabo similique facere saepe animi ipsa repellat fuga nobis
          dolorem eum ducimus sunt sequi voluptatum laboriosam itaque.
          Exercitationem officia cumque vero voluptates unde sequi maxime
          laudantium perferendis, esse ex nulla iusto ullam quisquam dolorem
          quae voluptatibus similique praesentium rerum consectetur obcaecati
          pariatur! Pariatur, maxime consectetur.
          <br /> <br />
          Nulla vitae a iusto voluptates, cumque fugiat ratione possimus error
          aliquid, earum repellendus veniam obcaecati placeat quidem sunt.
          Sapiente eum vel itaque numquam dignissimos optio maxime autem maiores
          atque mollitia, accusamus non sed sunt. Sit velit doloribus ipsum.
          Dolorum vero, quas quia earum iusto doloribus aliquid impedit non
          consequatur, nemo ex facilis officia illum dolore rerum optio.
          Doloremque aliquid itaque magnam excepturi saepe tempora eveniet, in
          totam doloribus nihil, harum, rerum nulla voluptatibus porro
          repudiandae iure explicabo nobis cupiditate eum ad quibusdam ratione
          sunt et reiciendis. Corrupti neque optio provident deserunt.
        </p>
      </div>

      <div className="my-8">
        <h3 className="font-bold text-[1.1rem] my-4">Our Mission</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        dolorem dolores, eius reprehenderit explicabo iure officia impedit,
        cumque quaerat necessitatibus cupiditate in. Pariatur, asperiores labore
        temporibus quo, obcaecati non officiis ducimus alias maxime eius
        possimus nam reprehenderit soluta necessitatibus sed est. Excepturi
        quidem ipsa ea veritatis ipsam. Unde, id! Officiis a incidunt error?
      </div>

      <div className="my-8">
        <h3 className="font-bold text-[1.1rem] my-4">Our Vision</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere
          quo consequuntur molestias iusto nobis repellendus? Delectus ratione
          sequi doloribus laboriosam ducimus quia, quod rerum laudantium, quas a
          explicabo culpa accusamus libero consectetur minima odio recusandae
          vel temporibus dignissimos, suscipit eum deleniti beatae vero.
          Consequatur temporibus optio accusantium mollitia culpa molestias
        </p>
      </div>
    </div>
  );
};

export default OurStory;
