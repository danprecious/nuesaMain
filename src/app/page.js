import SectionOne from "@/_local-components/sectionOne";
import SectionTwo from "@/_local-components/sectionTwo";
import Footer from "@/_local-components/footer";
import PreFooter from "@/_local-components/preFooter";
import SectionLayout from "@/_local-components/sectionLayout";
import Hero from "@/_local-components/hero";
import SpaceEffect from "@/_local-components/spaceEffect";
import CommunitySection from "@/components/LandingSections/community";
import MilestoneSection from "@/components/LandingSections/milestones";
import PresidentNotes from "@/components/presidentNotes";
import PhotoGallery from "@/components/LandingSections/photogallery";
import TeamMembers from "@/components/LandingSections/TeamMembers";
import EventsSection from "@/components/LandingSections/Events";


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
