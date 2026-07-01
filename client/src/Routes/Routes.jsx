import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home/Home";

//Company Formation Pages
import BusinessUAE from "../Pages/Company-Formation/BusinessUAE/BusinessUAE";
import BusinessKSA from "../Pages/Company-Formation/BusinessKSA/BusinessKSA";
import BusinessBD from "../Pages/Company-Formation/BusinessBD/BusinessBD";
import BusinessUK from "../Pages/Company-Formation/BusinessUK/BusinessUK";
import BusinessUSA from "../Pages/Company-Formation/BusinessUSA/BusinessUSA";

//BD Services Pages
import Market_Expansion from "../Pages/Services/BDService/Market_Expansion/Market_Expansion";
import UKMarketExpansion from "../Pages/Services/UKService/Market_Expansion/Market_Expansion";
import Compliance_Regulatory from "../Pages/Services/UKService/Compliance_Regulatory/Compliance_Regulatory";
import Bookkeeping_Financial_Management from "../Pages/Services/UKService/Bookkeeping_Financial_Management/Bookkeeping_Financial_Management";
import Tax_Planning_Advisory from "../Pages/Services/UKService/Tax_Planning_Advisory/Tax_Planning_Advisory";
import Virtual_CFO_Outsourced_Accounting from "../Pages/Services/UKService/Virtual_CFO_Outsourced_Accounting/Virtual_CFO_Outsourced_Accounting";
import UKTechnology from "../Pages/Services/UKService/Technology/Technology";
import Industry_Specific_Accounting_Solutions from "../Pages/Services/UKService/Industry_Specific_Accounting_Solutions/Industry_Specific_Accounting_Solutions";
import Market_Expansion_Setup_Advisory from "../Pages/Services/UAEService/Market_Expansion_Setup_Advisory/Market_Expansion_Setup_Advisory";
import Regulatory_Compliance from "../Pages/Services/UAEService/Regulatory_Compliance/Regulatory_Compliance";
import Finance_Accounting from "../Pages/Services/UAEService/Finance_Accounting/Finance_Accounting";
import Taxation_UAE from "../Pages/Services/UAEService/Taxation_UAE/Taxation_UAE";
import HR_Payroll_Solutions from "../Pages/Services/UAEService/HR_Payroll_Solutions/HR_Payroll_Solutions";
import Branding_Growth from "../Pages/Services/UAEService/Branding_Growth/Branding_Growth";
import Technology_UAE from "../Pages/Services/UAEService/Technology_UAE/Technology_UAE";
import UAEInvestment from "../Pages/Services/UAEService/Investment/Investment";
import Business_Advisory from "../Pages/Services/UKService/Business_Advisory/Business_Advisory";
import KSAMarketExpansionSetupAdvisory from "../Pages/Services/KSAService/Market_Expansion_Setup_Advisory/Market_Expansion_Setup_Advisory";
import KSARegulatoryCompliance from "../Pages/Services/KSAService/Regulatory_Compliance/Regulatory_Compliance";
import KSAFinanceAccounting from "../Pages/Services/KSAService/Finance_Accounting/Finance_Accounting";
import KSATaxation from "../Pages/Services/KSAService/Taxation_KSA/Taxation_KSA";
import KSAHRPayrollSolutions from "../Pages/Services/KSAService/HR_Payroll_Solutions/HR_Payroll_Solutions";
import KSABrandingGrowth from "../Pages/Services/KSAService/Branding_Growth/Branding_Growth";
import KSATechnology from "../Pages/Services/KSAService/Technology/Technology";
import KSAInvestment from "../Pages/Services/KSAService/Investment/Investment";

import Regulatory from "../Pages/Services/BDService/Regulatory/Regulatory";
import Finance from "../Pages/Services/BDService/Finance/Finance";
import Taxation from "../Pages/Services/BDService/Taxation/Taxation";
import HR_Payroll from "../Pages/Services/BDService/HR_Payroll/HR_Payroll";
import Training from "../Pages/Services/BDService/Training/Training";
import Investment from "../Pages/Services/BDService/Investment/Investment";
import Technology from "../Pages/Services/BDService/Technology/Technology";

// Library
import UAELibrary from "../Pages/Library/UAELibrary";
import KSALibrary from "../Pages/Library/KSALibrary";
import UKLibrary from "../Pages/Library/UKLibrary";
import BDLibrary from "../Pages/Library/BDLibrary";

// Publications
import UAEPublications from "../Pages/Publications/UAEPublications";
import KSAPublications from "../Pages/Publications/KSAPublications";
import UKPublications from "../Pages/Publications/UKPublications";
import BDPublications from "../Pages/Publications/BDPublications";

// Forms
import UAEForms from "../Pages/Forms/UAEForms";
import KSAForms from "../Pages/Forms/KSAForms";
import UKForms from "../Pages/Forms/UKForms";
import BDForms from "../Pages/Forms/BDForms";
import NewsEventsPage from "../Pages/NewsEvents/NewsEventsPage";
import CouncilTaxArrangementPlan from "../Pages/Blog/CouncilTaxArrangementPlan";
import SelfAssessmentTaxReturnProcess from "../Pages/Blog/SelfAssessmentTaxReturnProcess";
import VirtualCFORoleBenefits from "../Pages/Blog/VirtualCFORoleBenefits";
import NewsEventDetail from "../Pages/NewsEvents/NewsEventDetail";
import ContactUs from "../Pages/Contact/ContactUs";
import VirtualCFO from "../Pages/Home/Expertise/VirtualCfo/VirtualCFO";
import BusinessValuation from "../Pages/Home/Expertise/Business/BusinessValuation";
import TaxAdvisory from "../Pages/Home/Expertise/Tax/TaxAdvisory";
import Bookkeeping from "../Pages/Home/Expertise/Bookkeeping/Bookkeeping";
import HRandPayroll from "../Pages/Home/Expertise/HR/HRandPayroll";
import POstInvestment from "../Pages/Home/Expertise/Post/POstInvestment";
import Due from "../Pages/Home/Expertise/Due/Due";
import InvestmentReadiness from "../Pages/Home/Expertise/Investment/InvestmentReadiness";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {path:"/" , element :<Home></Home>},
      {path:"/business-setup/uae" , element :<BusinessUAE></BusinessUAE>},
      {path:"/business-setup/ksa" , element :<BusinessKSA></BusinessKSA>},
      {path:"/business-setup/bd" , element :<BusinessBD></BusinessBD>},
      {path:"/business-setup/uk" , element :<BusinessUK></BusinessUK>},
      {path:"/business-setup/usa" , element :<BusinessUSA></BusinessUSA>},
      {path:"/contact" , element : <ContactUs></ContactUs> },

      // Hire Based On Expertise routes
      {path:"/virtual-cfo" , element : <VirtualCFO></VirtualCFO> },
      {path:"/business-valuation" , element : <BusinessValuation></BusinessValuation> },
      {path:"/Tax-Advisory" , element : <TaxAdvisory></TaxAdvisory> },
      {path:"/bookkeeping" , element : <Bookkeeping></Bookkeeping> },
      {path:"/hr-payroll" , element : <HRandPayroll></HRandPayroll> },
      {path:"/investment-readiness" , element : <InvestmentReadiness></InvestmentReadiness> },
      {path:"/due-diligence" , element : <Due></Due> },
      {path:"/post-investment-monitoring" , element : <POstInvestment></POstInvestment> },


      // Duplicate routes for BD Services
      {
        path: "/services/bd/market-expansion",
        element: <Market_Expansion></Market_Expansion>,
      },
      {
        path: "/services/uk/market-expansion",
        element: <UKMarketExpansion></UKMarketExpansion>,
      },
      {
        path: "/services/uk/compliances",
        element: <Compliance_Regulatory></Compliance_Regulatory>,
      },
      {
        path: "/services/uk/bookkeeping",
        element: <Bookkeeping_Financial_Management></Bookkeeping_Financial_Management>,
      },
       {
        path: "/services/uk/tax-planning",
        element: <Tax_Planning_Advisory></Tax_Planning_Advisory>,
      },
      {
        path: "/services/uk/virtual-cfo",
        element: <Virtual_CFO_Outsourced_Accounting></Virtual_CFO_Outsourced_Accounting>,
      },
      {
        path: "/services/uk/mtd",
        element: <UKTechnology></UKTechnology>,
      },
      {
        path: "/services-uk/industry-specific-accounting-solutions",
        element: <Industry_Specific_Accounting_Solutions></Industry_Specific_Accounting_Solutions>,
      },



      {
        path: "/services/uae/market-expansion",
        element: <Market_Expansion_Setup_Advisory></Market_Expansion_Setup_Advisory>,
      },
      {
        path: "/services/uk/compliance",
        element: <Regulatory_Compliance></Regulatory_Compliance>,
      },
      {
        path: "/services/uae/finance",
        element: <Finance_Accounting></Finance_Accounting>,
      },
      {
        path: "/services/uae/taxation",
        element: <Taxation_UAE></Taxation_UAE>,
      },
      {
        path: "/services/uae/hr-payroll",
        element: <HR_Payroll_Solutions></HR_Payroll_Solutions>,
      },
      {
        path: "/services/uae/branding",
        element: <Branding_Growth></Branding_Growth>,
      },
      {
        path: "/services/uae/e-invoicing",
        element: <Technology_UAE></Technology_UAE>,
      },
      {
        path: "/services/uae/investment",
        element: <UAEInvestment></UAEInvestment>,
      },
       {
        path: "/services/bd/regulatory",
        element: <Business_Advisory></Business_Advisory>,
      },
      {
        path: "/services/ksa/market-expansion",
        element: <KSAMarketExpansionSetupAdvisory></KSAMarketExpansionSetupAdvisory>,
      },
      {
        path: "/services/ksa/regulatory",
        element: <KSARegulatoryCompliance></KSARegulatoryCompliance>,
      },
      {
        path: "/services/ksa/finance",
        element: <KSAFinanceAccounting></KSAFinanceAccounting>,
      },
      {
        path: "/services/ksa/taxation",
        element: <KSATaxation></KSATaxation>,
      },
      {
        path: "/services/ksa/hr-payroll",
        element: <KSAHRPayrollSolutions></KSAHRPayrollSolutions>,
      },
      {
        path: "/services/ksa/branding",
        element: <KSABrandingGrowth></KSABrandingGrowth>,
      },
      {
        path: "/services/ksa/automation",
        element: <KSATechnology></KSATechnology>,
      },
      {
        path: "/services/ksa/investment",
        element: <KSAInvestment></KSAInvestment>,
      },


      { path: "/services/bd/regulatory", element: <Regulatory></Regulatory> },
      { path: "/services/bd/finance", element: <Finance></Finance> },
      { path: "/services/bd/taxation", element: <Taxation></Taxation> },
      { path: "/services/bd/hr-payroll", element: <HR_Payroll></HR_Payroll> },
      { path: "/services/bd/training", element: <Training></Training> },
      { path: "/services/bd/investment", element: <Investment></Investment> },
      { path: "/services/bd/technology", element: <Technology></Technology> },

      // Library
      { path: "/library/uae", element: <UAELibrary /> },
      { path: "/library/ksa", element: <KSALibrary /> },
      { path: "/library/uk", element: <UKLibrary /> },
      { path: "/library/bangladesh", element: <BDLibrary /> },

      // Publications
      { path: "/publications/uae", element: <UAEPublications /> },
      { path: "/publications/ksa", element: <KSAPublications /> },
      { path: "/publications/uk", element: <UKPublications /> },
      { path: "/publications/bangladesh", element: <BDPublications /> },

      // Forms
      { path: "/forms/uae", element: <UAEForms /> },
      { path: "/forms/ksa", element: <KSAForms /> },
      { path: "/forms/uk", element: <UKForms /> },
      { path: "forms/bangladesh", element: <BDForms /> },

      // News & Events
      { path: "/news-events", element: <NewsEventsPage /> },
      { path: "/news-events/:slug", element: <NewsEventDetail /> },
      { path: "/blog/council-tax-arrangement-plan", element: <CouncilTaxArrangementPlan /> },
      { path: "/blog/self-assessment-tax-return-process", element: <SelfAssessmentTaxReturnProcess /> },
      { path: "/blog/virtual-cfo-role-benefits", element: <VirtualCFORoleBenefits /> },

    ]
  }
]);

export default Routes;
