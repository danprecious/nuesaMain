import PreFooter from '@/_local-components/preFooter';
import Footer from '@/_local-components/footer';


const MilestoneLayout = ({children}) => {
  return (
    <div className=''>
    {children}
    <PreFooter />
    <Footer />
    </div>
  )
}

export default MilestoneLayout;
