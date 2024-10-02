import PreFooter from '@/_local-components/preFooter';
import Footer from '@/_local-components/footer';



const CommunitiesLayout = ({children}) => {
  return (
    <div>
      {children}
      <PreFooter />
      <Footer />
    </div>
  )
}

export default CommunitiesLayout;
