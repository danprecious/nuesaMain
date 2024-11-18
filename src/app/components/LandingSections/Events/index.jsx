import { SectionHeading } from "@/app/components/LandingSections/sectionLayout"
import SpaceEffect from "@/app/components/global/spaceEffect"
import SliderComponent from "@/app/components/SliderComponent"


const EventsSection = () => {
  return (
    <div className="md:py-10  p-6 grid place-items-center relative mt-6">
        <SpaceEffect />
        <SectionHeading text={"Upcoming Events"}/>
        <SliderComponent />

    </div>
  )
}

export default EventsSection