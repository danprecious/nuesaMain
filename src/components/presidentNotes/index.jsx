import { SectionHeading } from "@/_local-components/sectionLayout";
import React from "react";

const PresidentNotes = () => {
  return (
    <div>
      <div className="flex justify-center">
        <SectionHeading text={"President's Note"} className="text-center" />
      </div>

      <div className="md:flex justify-between lg:px-20 py-10 px-2">
        <div className="lg:w-[40%] h-[70vh] flex justify-center">
          <div className="h-full lg:w-[80%] w-full bg-stone-800 rounded-2xl"></div>
        </div>
        <div className="lg:w-[50%] lg:px-5 px-2 text-justify py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          molestiae, minima corporis ad quos maiores accusantium expedita
          asperiores temporibus labore soluta optio ea odio vitae voluptas id
          cum nostrum vel eum beatae debitis similique distinctio possimus.
          Nostrum, accusantium ipsa. Molestias placeat dolorum voluptate
          molestiae reiciendis fuga expedita tempore, neque nisi veniam cumque
          incidunt rem eum facilis. Distinctio excepturi magnam cumque sequi
          praesentium molestias, magni dignissimos libero, provident minima
          quasi sint aspernatur cum a explicabo fugiat tempore laboriosam non?
          Quam doloremque, iste est quibusdam assumenda debitis recusandae, fuga
          dignissimos quos ab excepturi. Voluptatum explicabo consectetur
          corporis quasi, sed reprehenderit nulla quis sequi, debitis ipsum
          eaque necessitatibus molestias ipsa facilis corrupti eius enim
          dignissimos nemo recusandae ullam. Non distinctio nisi alias esse ex
          animi repudiandae commodi et quos adipisci nihil atque consequatur
          consequuntur excepturi beatae, quaerat deleniti est sapiente tempore
          aperiam maiores nobis quam. Eligendi debitis, esse natus quidem ullam
          recusandae fugit?
        </div>
      </div>
    </div>
  );
};

export default PresidentNotes;
