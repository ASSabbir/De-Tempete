import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import BusinessUAE from "../Pages/Company-Formation/BusinessUAE/BusinessUAE";
import BusinessKSA from "../Pages/Company-Formation/BusinessKSA/BusinessKSA";

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
      // Library
      { path: "library/uae", element: <UAELibrary /> },
      { path: "library/ksa", element: <KSALibrary /> },
      { path: "library/uk", element: <UKLibrary /> },
      { path: "library/bangladesh", element: <BDLibrary /> },

      // Publications
      { path: "publications/uae", element: <UAEPublications /> },
      { path: "publications/ksa", element: <KSAPublications /> },
      { path: "publications/uk", element: <UKPublications /> },
      { path: "publications/bangladesh", element: <BDPublications /> },

      // Forms
      { path: "forms/uae", element: <UAEForms /> },
      { path: "forms/ksa", element: <KSAForms /> },
      { path: "forms/uk", element: <UKForms /> },
      { path: "forms/bangladesh", element: <BDForms /> },
    ]
  }
]);

 export default Routes;