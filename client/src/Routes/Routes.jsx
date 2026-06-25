import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home/Home";

//Company Formation Pages
import BusinessUAE from "../Pages/Company-Formation/BusinessUAE/BusinessUAE";
import BusinessKSA from "../Pages/Company-Formation/BusinessKSA/BusinessKSA";
import BusinessBD from "../Pages/Company-Formation/BusinessBD/BusinessBD";
import BusinessUK from "../Pages/Company-Formation/BusinessUK/BusinessUK";
import BusinessUSA from "../Pages/Company-Formation/BusinessUSA/BusinessUSA";
import ContactUs from "../Pages/Contact/ContactUs";

//BD Services Pages
import Market_Expansion from "../Pages/Services/BDService/Market_Expansion/Market_Expansion";
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


      // Duplicate routes for BD Services
      {path:"/services/bd/market-expansion" , element :<Market_Expansion></Market_Expansion>},
      {path:"/services/bd/regulatory" , element :<Regulatory></Regulatory>},
      {path:"/services/bd/finance" , element :<Finance></Finance>},
      {path:"/services/bd/taxation" , element :<Taxation></Taxation>},
      {path:"/services/bd/hr-payroll" , element :<HR_Payroll></HR_Payroll>},
       {path:"/services/bd/training" , element :<Training></Training>},
       {path:"/services/bd/investment" , element :<Investment></Investment>},
      {path:"/services/bd/technology" , element :<Technology></Technology>},
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
      { path: "/forms/bangladesh", element: <BDForms /> },

    ]
  }
]);

 export default Routes;