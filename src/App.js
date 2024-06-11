import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ServicesSection from './Component/HomeUI/Services';
import Footer from './Component/HomeUI/Footer';
import Testimonials from './Component/HomeUI/Testimonials';
import ClientS from './Component/HomeUI/ClientS';
import OurBranches from './Component/HomeUI/OurBranches';
import ServicesPage from './Component/Services/ServicesPage';
import IncomeTaxReturns from './Component/Services/IncomeTaxReturns';
import TDSReturn from './Component/Services/TDSReturn';
import DigitalSign from './Component/Services/DigitalSign';
import Accounting from './Component/Services/Accounting';
import PersonalLone from './Component/LoanServices/PersonalLone';
import HomeLoan from './Component/LoanServices/HomeLoan';
import HomeServices from './Component/HomeUI/HomeServices';
import HeaderMate from './Component/HomeUI/HeaderMate';
import BusinessLoan from './Component/LoanServices/BusinessLoan';
import MortageLoan from './Component/LoanServices/MortageLoan';
import CarLoan from './Component/LoanServices/CarLoan';
import EducationLoan from './Component/LoanServices/EducationLoan';
import BalanceTopup from './Component/LoanServices/BalanceTopup';
import HealthInsurance from './Component/Insuarance/HealthInsurance';
import LifeInsurance from './Component/Insuarance/LifeInsurance';
import GeneralInsurance from './Component/Insuarance/GeneralInsurance';
import MotorInsurance from './Component/Insuarance/MotorInsurance';
import HomeInsurance from './Component/Insuarance/HomeInsurance';
import PersonalCover from './Component/Insuarance/PersonalCover';
import Vision from './Component/HomeUI/Vision';
import MaternityHealthInsurance from './Component/Insuarance/MaternityHealthInsurane';
import TermLifeInsurance from './Component/Insuarance/TermLifeInsurance';
import AboutUs from './Component/HomeUI/AboutUs';
import ContactUs from './Component/HomeUI/ContactUs';
import UdyamRegistrstion from './Component/Registration/UdyamRegistrstion';
import GstRegistration from './Component/Registration/GstRegistration';
import CompanyRegistration from './Component/Registration/ComapanyRegistartion';
import PanRegistration from './Component/Registration/PanRegistration';
import ShopActRegistration from './Component/Registration/ShopActRegistration';
import TradeMarkRegistration from './Component/Registration/TradeMarkRegistration';
import ProfessionalTaxRegistration from './Component/Registration/ProfessionalTaxRegistration';
import EpfRegistration from './Component/Registration/EpfRegistration';
import AboutHome from './Component/HomeUI/AboutHome';
import TestingForm from './Component/Registration/TestingForm';
import FoodLRegistartion from './Component/Registration/FoodLicenceRegistartion';
import ImportExportRegi from './Component/Registration/ImportExportRegi';
import CashCreditOverdraftLoan from './Component/LoanServices/CashCreditOverdraftLoan';
import TANRegistration from './Component/Registration/TANRegistration';
import MutualFund from './Component/HomeUI/MutualFund';



function App() {
  return (
    <Router>
    <>

        <HeaderMate/>
       
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
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
            <Route path='/balance-topup-loan' element={<BalanceTopup/>}/>
            <Route path='/health-insurance' element={<HealthInsurance/>}/>
            <Route path='/life-insurance' element={<LifeInsurance/>}/>
            <Route path="/term-life-insurance" element={<TermLifeInsurance/>}/>
            <Route path='/general-insurance' element={<GeneralInsurance/>}/>
            <Route path='/motor-insurance' element={<MotorInsurance/>}/>
            <Route path='/home-insurance' element={<HomeInsurance/>}/>
            <Route path='/personal-accident-cover' element={<PersonalCover/>}/>
            <Route path='/maternity-health-insurance' element={<MaternityHealthInsurance/>}/>
            <Route path='/gst-registration' element={<GstRegistration/>}/>
            <Route path='/udyog-adhar-registration' element={<UdyamRegistrstion/>}/>
            <Route path="/pan-registration" element={<PanRegistration/>}/>
            <Route path='/company-registration' element={<CompanyRegistration/>}/>
            <Route path='/shop-act-registration' element={<ShopActRegistration/>}/>
            <Route path="/trademark-registrations"  element={<TradeMarkRegistration/>}/>
            <Route path="/professional-tax-registration" element={<ProfessionalTaxRegistration/>}/>
            <Route path="/epf-registration" element={<EpfRegistration/>}/>
            <Route path='/testing-form' element={<TestingForm/>}/>
            <Route path='/food-license-registration' element={<FoodLRegistartion/>}/>
            <Route path='/import-export-registration' element={<ImportExportRegi/>}/>
            <Route path='/cash-credit-overdraft-loan' element={<CashCreditOverdraftLoan/>}/>
            <Route path='/tan-registartion' element={<TANRegistration/>}/>
            <Route path="/mutual-fund" element={<MutualFund/>}/>
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
          <AboutHome/>
          <ServicesSection/>
          <Testimonials />
          <ClientS />
       b  <Vision/>
          <OurBranches />
      </>
  );
};



export default App;
