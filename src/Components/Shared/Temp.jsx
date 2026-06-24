import ukFlag from '../../asstes/Images/New folder/Business-set-up-in-UK.webp'
import usaFlag from '../../asstes/Images/New folder/Business-set-up-in-USA.webp'
import ksaFlag from '../../asstes/Images/New folder/Business-set-up-in-kSA.webp'
import bdFlag from '../../asstes/Images/New folder/Business-set-up-in-BD.webp'
import uae from '../../asstes/Images/New folder/Dubai-Business-set-up.webp'
import { Link } from "react-router";

const companyFormation1 = {
  
  UK: {
    flag: ukFlag,
    text:'Business Setup in UK',
    path:'/business-setup/uk'
  },
  USA: {
    flag: usaFlag,
    text:'Business Setup in USA',
    path:'/business-setup/usa'
  },
  KSA: {
    flag: ksaFlag,
    text:'Business Setup in KSA',
    path:'/business-setup/ksa'
  },
  BD: {
    flag: bdFlag,
    text:'Business Setup in BD',
    path:'/business-setup/bd'
  },
  UAE: {
    flag: uae,
    text:'Business Setup in UAE',
    path:'/business-setup/uae'
  },
};