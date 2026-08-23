import BannerUK from './BannerUK';
import Why_Business from './Why_Business';
import Types_of_Company from './Types_of_Company';
import BusinessSetupBook from './BusinessSetupBook';
import ReadyToStublish from './ReadyToStublish';
import EndToEnd from './EndToEnd';
import ProcessStep from './ProcessStep';
import { ConsultationCTA } from '../../../Components/Shared/ConsultationCTA';


const BusinessUK = () => {
    
    return (
        <div>
            <BannerUK></BannerUK>
            <Why_Business></Why_Business>
            <Types_of_Company></Types_of_Company>
            <ProcessStep></ProcessStep>
            <EndToEnd></EndToEnd>
            <ReadyToStublish></ReadyToStublish>
            <BusinessSetupBook></BusinessSetupBook>
            <ConsultationCTA
                        id={'bussiness-setup-uk'}
                            heading={
                                <>
                                    Get Started
                                    <br />
                                    <span className="font-bold">Today</span>
                                </>
                            }
                            subheading="Whether you are setting up a new company, expanding into the UK, or restructuring your business, de tempête provides practical support to make the setup process simple and efficient."
                            commitmentItems={[
                                "Free initial consultation — no obligation",
                                "Complete confidentiality & secure handling",
                                "Expert UK business setup guidance",
                                "Practical, customized solutions for your business",
                            ]}
                        />
        </div>
    );
};

export default BusinessUK; 
