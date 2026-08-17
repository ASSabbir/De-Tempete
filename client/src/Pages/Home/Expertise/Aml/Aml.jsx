import React from 'react';
import img from '../../../../asstes/img_temp/aml.webp'
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import WhyAml from './WhyAml';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import AmlFaq from './AmlFaq';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
import AmlServices from './AmlServices';
import BusinessSetupBook from './BusinessSetupBook';
import {
  TbCertificate,
  TbShieldCheck,
  TbFileText,
  TbUserCheck,
  TbSchool,
  TbUserShield,
  TbSearch,
  TbClipboardList,
  TbShieldLock,
  TbAlertTriangle,
  TbReportAnalytics,
  TbEye,
  TbBuildingBank,
} from "react-icons/tb";
import ServiceGrid from '../../../../Components/Shared/Servicegrid';


const Aml = () => {
    const text = [
        'UAE AML Compliance Services',
        'Stay Compliant. Build Trust. Operate With Confidence.',
        <>At <span className='italic font-semibold'>de tempête</span>, we help businesses in the UAE meet their anti-money laundering, counter-terrorist financing, sanctions and regulatory obligations with confidence.</>,
        'Get a Free UAE AML Consultation'
    ]
    const benefits = [
        "Stay fully aligned with UAE FIU, goAML and TFS requirements",
        "Reduce regulatory and reputational risk with a risk-based AML framework",
        "Pass Ministry of Economy inspections with confidence",
        "Access experienced MLRO and compliance oversight on demand",
        "Automate sanctions, PEP and adverse-media screening",
        "Keep robust, audit-ready KYC and CDD records",
    ];
    const keyBenefittext = ['Build a Compliance Framework ', 'You Can Trust']
    const commitments = [
        "Free initial AML compliance consultation — no obligation",
        "100% confidential handling of all business and customer information",
        "Full-scope support across registration, policy, screening and reporting",
        "Clear, actionable guidance to stay inspection-ready year-round",
    ];

    const title = "Ready to Strengthen Your AML Compliance?";
    const des =
        "Our compliance specialists provide end-to-end AML support — from goAML and TFS registration to policy design, screening, training and audits — so your business stays protected, compliant and inspection-ready.";

        const services = [
  {
    title: "goAML Registration",
    description:
      "Complete your UAE FIU onboarding correctly and efficiently. We support regulated businesses and DNFBPs through eligibility review, document preparation, compliance officer and user account setup, portal activation, and guidance on post-registration obligations.",
    icon: <TbCertificate />,
  },
  {
    title: "TFS Registration",
    description:
      "Meet UAE Targeted Financial Sanctions registration requirements with support on registration and account setup, required user and entity information, portal activation, and initial sanctions-compliance guidance.",
    icon: <TbShieldCheck />,
  },
  {
    title: "AML Policy and Procedures",
    description:
      "Build a practical, risk-based AML/CFT framework tailored to your industry, customers and services — including onboarding controls, CDD and escalation procedures, suspicious activity reporting, and record-keeping requirements.",
    icon: <TbFileText />,
  },
  {
    title: "KYC Verification",
    description:
      "Verify customers and beneficial owners with confidence through individual and corporate identity checks, corporate-document review, UBO verification, source-of-funds review, and KYC file preparation and updates.",
    icon: <TbUserCheck />,
  },
  {
    title: "Staff AML Training",
    description:
      "Equip your team to recognise and respond to financial-crime risks with induction and refresher training, role-based awareness, KYC and red-flag recognition, sanctions responsibilities, and attendance and assessment records.",
    icon: <TbSchool />,
  },
  {
    title: "Outsourced MLRO/Compliance Officer",
    description:
      "Access experienced compliance oversight without building a full internal team — covering ongoing oversight, customer-risk review and escalation, suspicious activity assessment, and management and board reporting.",
    icon: <TbUserShield />,
  },
  {
    title: "MoE Inspection Support",
    description:
      "Prepare for the Ministry of Economy inspection with confidence through pre-inspection readiness review, policy and KYC file review, evidence preparation, mock inspections, and support responding to findings.",
    icon: <TbSearch />,
  },
  {
    title: "Independent AML Audit",
    description:
      "Test the effectiveness of your AML framework independently with objective policy and control review, KYC file sample testing, risk-assessment and reporting review, and a management report with follow-up review.",
    icon: <TbClipboardList />,
  },
  {
    title: "Sanctions-Screening Software",
    description:
      "Automate screening and strengthen ongoing compliance through software needs assessment, vendor selection and implementation, watchlist and rule setup, user training, and false-positive tuning.",
    icon: <TbShieldLock />,
  },
  {
    title: "Business/Enterprise-Wide Risk Assessment",
    description:
      "Understand your overall AML exposure with a documented enterprise-wide risk assessment covering products, delivery channels, jurisdictions, customers and counterparties, and inherent versus residual risk.",
    icon: <TbAlertTriangle />,
  },
  {
    title: "Regulatory Reporting (DPMSR/REAR)",
    description:
      "Prepare and submit the required UAE FIU reports accurately through goAML — including DPMSR and REAR preparation, transaction and document review, narrative and evidence preparation, and internal approval records.",
    icon: <TbReportAnalytics />,
  },
  {
    title: "PEP and Adverse-Media Screening",
    description:
      "Identify politically exposed and reputationally high-risk customers with PEP and related-party screening, adverse-media checks, potential-match review, risk classification, and a documented screening audit trail.",
    icon: <TbEye />,
  },
  {
    title: "Internal AML Department Setup",
    description:
      "Build a structured, long-term compliance function with governance and reporting-line design, MLRO role design, internal forms and registers, a compliance calendar, and a technology and staffing roadmap.",
    icon: <TbBuildingBank />,
  },
];
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyAml></WhyAml>
            
            <ServiceGrid
             description={<>  End-to-end support to help your business stay compliant, protected, and inspection-ready.</>}
             heading={<>AML Compliance <span className="font-extrabold">Services</span></>}
             services={services}></ServiceGrid>

            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <AmlFaq></AmlFaq>
            <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
            <Awards></Awards>
            <BusinessSetupBook></BusinessSetupBook>
        </div>
    );
};

export default Aml;