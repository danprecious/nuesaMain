import PreFooter from '@/app/components/footer/preFooter';
import Footer from '@/app/components/footer';



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
