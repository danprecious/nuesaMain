import { SectionHeading } from "@/_local-components/sectionLayout";

const Communities = () => {
  const communityList = [
    {
      id: "1",
      title: "NIMECA",
      communityNotes:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nihil, facere nisi quam cum sed tempora dolorem maxime aliquam placeat totam error illo odit corrupti? At quis facilis voluptatem voluptate exercitationem nisi quia? Blanditiis dicta itaque, autem incidunt quod suscipit?",
      layout: "",
    },
    {
      id: "2",
      title: "NICESA",
      communityNotes:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nihil, facere nisi quam cum sed tempora dolorem maxime aliquam placeat totam error illo odit corrupti? At quis facilis voluptatem voluptate exercitationem nisi quia? Blanditiis dicta itaque, autem incidunt quod suscipit?",
      layout: "flex-row-reverse",
    },
    {
      id: "3",
      title: "NIMECHE",
      communityNotes:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nihil, facere nisi quam cum sed tempora dolorem maxime aliquam placeat totam error illo odit corrupti? At quis facilis voluptatem voluptate exercitationem nisi quia? Blanditiis dicta itaque, autem incidunt quod suscipit?",
      layout: "",
    },
    {
      id: "4",
      title: "The Engineering Tech Community",
      communityNotes:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nihil, facere nisi quam cum sed tempora dolorem maxime aliquam placeat totam error illo odit corrupti? At quis facilis voluptatem voluptate exercitationem nisi quia? Blanditiis dicta itaque, autem incidunt quod suscipit?",
      layout: "flex-row-reverse",
    },
  ];

  return (
    <div className="text-white md:px-16 md:text-left text-center md:py-8 px-2 relative">
      <div className="flex justify-center flex-col items-center">
        <SectionHeading text="Communities" className="" />
        <div className="">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            deserunt consequuntur eius vitae. Exercitationem, aperiam? Lorem
          </p>
      
        </div>
      </div>

      <div className="w-full flex my-12">
        <div className="lg:h-[15em] lg:w-[80%] lg:mr-2 bg-stone-900 rounded-md"></div>
        <div className="lg:h-[15em] lg:w-[20%] lg:ml-3 bg-stone-900 rounded-md"></div>
      </div>

      <div className="my-10 relative">
        {communityList.map((community) => {
          return (
            <div
              key={community.id}
              className={`${
                community.layout == "flex-row-reverse" ? "flex-row-reverse" : ""
              }  flex items-center my-12`}
            >
              <div className="w-[50%] mx-4">
                <h3 className="text-[1.1rem] font-bold my-3">
                  {community.title}
                </h3>
                <p>{community.communityNotes}</p>
              </div>
              <div className="w-[50%] mx-4">
                <div className="lg:h-[30em] w-full bg-stone-900 rounded-md"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Communities;
