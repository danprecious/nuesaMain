import { SectionHeading } from "@/_local-components/sectionLayout"
import SpaceEffect from "@/_local-components/spaceEffect"
import SliderComponent from "@/components/SliderComponent"


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