import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
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
import Accounting from './Component/Services/Accounting';
import PersonalLone from './Component/LoanServices/PersonalLone';
import HomeLoan from './Component/LoanServices/HomeLoan';
import SliderServices from './Component/HomeUI/SliderServices';
import HomeServices from './Component/HomeUI/HomeServices';
import HeaderMate from './Component/HomeUI/HeaderMate';
import SliderHomePageMUI from './Component/HomeUI/SliderHomePageMUI';
import BusinessLoan from './Component/LoanServices/BusinessLoan';
import MortageLoan from './Component/LoanServices/MortageLoan';
import CarLoan from './Component/LoanServices/CarLoan';
import EducationLoan from './Component/LoanServices/EducationLoan';
import Balance_Topup from './Component/LoanServices/Balance_Topup';
import HealthInsurance from './Component/Insuarance/HealthInsurance';
import LifeInsurance from './Component/Insuarance/LifeInsurance';
import GeneralInsurance from './Component/Insuarance/GeneralInsurance';
import MotorInsurance from './Component/Insuarance/MotorInsurance';
import HomeInsurance from './Component/Insuarance/HomeInsurance';
import PersonalCover from './Component/Insuarance/PersonalCover';

function App() {
  return (
    <Router>
    <>
        {/* <Header /> */}
        <HeaderMate/>
       
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gst-return-compliance" element={<ServicesPage />} />
            <Route path="/income-tax-returns" element={<IncomeTaxReturns />} />
            <Route path="/tds-return" element={<TDSReturn />} />
            <Route path="/digital-sign" element={<DigitalSign />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/personal-loan" element={<PersonalLone />} />
            <Route path="/home-loan" element={<HomeLoan />} /> 
            <Route path="/business-loan" element={<BusinessLoan/>} />
            <Route path="/mortgage-loan" element={<MortageLoan/>}/>
            <Route path='/car-loan' element={<CarLoan/>} /> 
            <Route path='/education-loan' element={<EducationLoan/>}/>
            <Route path='/balance-topup-loan' element={<Balance_Topup/>}/>
            <Route path='/health-insurance' element={<HealthInsurance/>}/>
            <Route path='/life-insurance' element={<LifeInsurance/>}/>
            <Route path='/general-insurance' element={<GeneralInsurance/>}/>
            <Route path='/motor-insurance' element={<MotorInsurance/>}/>
            <Route path='/home-insurance' element={<HomeInsurance/>}/>
            <Route path='/personal-accident-cover' element={<PersonalCover/>}/>
       </Routes>
        <Footer />
    </>
</Router>
  );
}



const HomePage = () => {
  return (
      <>
          <HomeServices />
          <ServicesSection/>
          <Testimonials />
          <ClientS />
          <Visions />
          <OurBranches />
      </>
  );
};



export default App;
