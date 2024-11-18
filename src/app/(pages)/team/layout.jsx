import Footer from "@/app/components/footer";
import PreFooter from "@/app/components/footer/preFooter";


const TeamLayout = ({ children }) => {
  return (
    <section className="">
      {children}
      <PreFooter />
      <Footer />
    </section>
  );
};

export default TeamLayout;
