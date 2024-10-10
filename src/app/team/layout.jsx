import Footer from "@/_local-components/footer";
import PreFooter from "@/_local-components/preFooter";


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
