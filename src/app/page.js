import SectionOne from "@/app/components/LandingSections/sectionOne";
import SectionTwo from "@/app/components/LandingSections/sectionTwo";
import Footer from "./components/footer";
import PreFooter from "./components/footer/preFooter";
import SectionLayout from "@/app/components/LandingSections/sectionLayout";
import Hero from "@/app/components/LandingSections/hero";
import SpaceEffect from "@/app/components/global/spaceEffect";
import CommunitySection from "@/app/components/LandingSections/community";
import MilestoneSection from "@/app/components/LandingSections/milestones";
import PresidentNotes from "@/app/components/LandingSections/presidentNotes";
import PhotoGallery from "@/app/components/LandingSections/photogallery";
import TeamMembers from "@/app/components/LandingSections/TeamMembers";
import EventsSection from "@/app/components/LandingSections/Events";


const Home = () => {
  return (
    <main className="relative p-2 h-full">
      <SpaceEffect />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionLayout headerText="Communities We Foster">
        <CommunitySection />
      </SectionLayout>
      <MilestoneSection />
      <PresidentNotes />
      <TeamMembers />
      <SectionLayout headerText="Photo Gallery">
        <PhotoGallery />
      </SectionLayout>
      <EventsSection />
      <PreFooter />
      <Footer />
    </main>
  );
};
export default Home;
