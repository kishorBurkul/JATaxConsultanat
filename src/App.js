import logo from './logo.svg';
import './App.css';
import Header from './Component/HomeUI/Header';
import ServicesSection from './Component/HomeUI/Services';
import Footer from './Component/HomeUI/Footer';
import Testimonials from './Component/HomeUI/Testimonials';
import ReviewSlider from './Component/HomeUI/ReviewSlider';
import Visions from './Component/HomeUI/Visions';
import Readmore from './Component/HomeUI/ReadMore';
import ClientS from './Component/HomeUI/ClientS';
import OurBranches from './Component/HomeUI/OurBranches';
import ServicesPage from './Component/Services/ServicesPage';
import IncomeTaxReturns from './Component/Services/IncomeTaxReturns';
import TDSReturn from './Component/Services/TDSReturn';
import DigitalSign from './Component/Services/DigitalSign';


function App() {
  return (
   
   <>
 <Header/>
 {/* <ServicesPage/> */}
 {/* <IncomeTaxReturns/> */}
 {/* <TDSReturn/> */}
 {/* <DigitalSign/> */}
 <ServicesSection/>
 {/* <Testimonials/>
 <ClientS/>
 <Visions/> */}
 {/* <OurBranches/>  */}
 <Footer/>

   </>
  );
}

export default App;
