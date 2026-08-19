import React from 'react';
import BannerEstonia from './BannerEstonia';
import Why_BusinessEs from './Why_BusinessEs';
import Types_of_Company from './Types_of_Company';
import ProcessStep from './ProcessStep';
import EndToEnd from './EndToEnd';
import BusinessSetupBook from './BusinessSetupBook';
import ReadyToStublish from './ReadyToStublish';
import { ConsultationCTA } from '../../../Components/Shared/ConsultationCTA';

const BusinessEstonia = () => {
    return (
        <div>
            <BannerEstonia></BannerEstonia>
            <Why_BusinessEs></Why_BusinessEs>
            <Types_of_Company></Types_of_Company>
            <ProcessStep></ProcessStep>
            <EndToEnd></EndToEnd>
            <ReadyToStublish></ReadyToStublish>
            <BusinessSetupBook></BusinessSetupBook>
            <ConsultationCTA
            id={'bussiness-setup-estonia'}
                heading={
                    <>
                        Get Started
                        <br />
                        <span className="font-bold">Today</span>
                    </>
                }
                subheading="Whether you are setting up a new company, expanding into the Estonia, or restructuring your business, de tempête provides practical support to make the setup process simple and efficient."
                commitmentItems={[
                    "Free initial consultation — no obligation",
                    "Complete confidentiality & secure handling",
                    "Expert Estonia business setup guidance",
                    "Practical, customized solutions for your business",
                ]}
            />
            
        </div>
    );
};

export default BusinessEstonia;