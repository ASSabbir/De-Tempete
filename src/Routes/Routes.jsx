import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import BusinessUAE from "../Pages/Company-Formation/BusinessUAE/BusinessUAE";
import BusinessKSA from "../Pages/Company-Formation/BusinessKSA/BusinessKSA";
import BusinessBD from "../Pages/Company-Formation/BusinessBD/BusinessBD";
import BusinessUK from "../Pages/Company-Formation/BusinessUK/BusinessUK";
import BusinessUSA from "../Pages/Company-Formation/BusinessUSA/BusinessUSA";
import ContactUs from "../Pages/Contact/ContactUs";

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
      {path:"/contact" , element :<ContactUs></ContactUs>},
    ]
  }
]);

 export default Routes;