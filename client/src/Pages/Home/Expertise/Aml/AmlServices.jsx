import { motion } from "framer-motion";
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

const IconWrap = ({ children }) => (
  <div className="w-12 h-12 rounded-lg bg-light-blue/20 flex items-center justify-center text-light-blue text-2xl">
    {children}
  </div>
);

const services = [
  {
    title: "goAML Registration",
    description:
      "Complete your UAE FIU onboarding correctly and efficiently. We support regulated businesses and DNFBPs through eligibility review, document preparation, compliance officer and user account setup, portal activation, and guidance on post-registration obligations.",
    icon: <IconWrap><TbCertificate /></IconWrap>,
  },
  {
    title: "TFS Registration",
    description:
      "Meet UAE Targeted Financial Sanctions registration requirements with support on registration and account setup, required user and entity information, portal activation, and initial sanctions-compliance guidance.",
    icon: <IconWrap><TbShieldCheck /></IconWrap>,
  },
  {
    title: "AML Policy and Procedures",
    description:
      "Build a practical, risk-based AML/CFT framework tailored to your industry, customers and services — including onboarding controls, CDD and escalation procedures, suspicious activity reporting, and record-keeping requirements.",
    icon: <IconWrap><TbFileText /></IconWrap>,
  },
  {
    title: "KYC Verification",
    description:
      "Verify customers and beneficial owners with confidence through individual and corporate identity checks, corporate-document review, UBO verification, source-of-funds review, and KYC file preparation and updates.",
    icon: <IconWrap><TbUserCheck /></IconWrap>,
  },
  {
    title: "Staff AML Training",
    description:
      "Equip your team to recognise and respond to financial-crime risks with induction and refresher training, role-based awareness, KYC and red-flag recognition, sanctions responsibilities, and attendance and assessment records.",
    icon: <IconWrap><TbSchool /></IconWrap>,
  },
  {
    title: "Outsourced MLRO/Compliance Officer",
    description:
      "Access experienced compliance oversight without building a full internal team — covering ongoing oversight, customer-risk review and escalation, suspicious activity assessment, and management and board reporting.",
    icon: <IconWrap><TbUserShield /></IconWrap>,
  },
  {
    title: "MoE Inspection Support",
    description:
      "Prepare for the Ministry of Economy inspection with confidence through pre-inspection readiness review, policy and KYC file review, evidence preparation, mock inspections, and support responding to findings.",
    icon: <IconWrap><TbSearch /></IconWrap>,
  },
  {
    title: "Independent AML Audit",
    description:
      "Test the effectiveness of your AML framework independently with objective policy and control review, KYC file sample testing, risk-assessment and reporting review, and a management report with follow-up review.",
    icon: <IconWrap><TbClipboardList /></IconWrap>,
  },
  {
    title: "Sanctions-Screening Software",
    description:
      "Automate screening and strengthen ongoing compliance through software needs assessment, vendor selection and implementation, watchlist and rule setup, user training, and false-positive tuning.",
    icon: <IconWrap><TbShieldLock /></IconWrap>,
  },
  {
    title: "Business/Enterprise-Wide Risk Assessment",
    description:
      "Understand your overall AML exposure with a documented enterprise-wide risk assessment covering products, delivery channels, jurisdictions, customers and counterparties, and inherent versus residual risk.",
    icon: <IconWrap><TbAlertTriangle /></IconWrap>,
  },
  {
    title: "Regulatory Reporting (DPMSR/REAR)",
    description:
      "Prepare and submit the required UAE FIU reports accurately through goAML — including DPMSR and REAR preparation, transaction and document review, narrative and evidence preparation, and internal approval records.",
    icon: <IconWrap><TbReportAnalytics /></IconWrap>,
  },
  {
    title: "PEP and Adverse-Media Screening",
    description:
      "Identify politically exposed and reputationally high-risk customers with PEP and related-party screening, adverse-media checks, potential-match review, risk classification, and a documented screening audit trail.",
    icon: <IconWrap><TbEye /></IconWrap>,
  },
  {
    title: "Internal AML Department Setup",
    description:
      "Build a structured, long-term compliance function with governance and reporting-line design, MLRO role design, internal forms and registers, a compliance calendar, and a technology and staffing roadmap.",
    icon: <IconWrap><TbBuildingBank /></IconWrap>,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: (i % 3) * 0.1, ease: "easeOut" },
  }),
};

export default function AmlServices() {
  return (
    <section className="bg-gray-100 w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl text-[#0d1e4a] font-normal mb-3">
            AML Compliance <span className="font-extrabold">Services</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-base max-w-2xl">
            End-to-end support to help your business stay compliant, protected, and inspection-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group hover:bg-white p-10 rounded-xl duration-200 flex flex-col gap-3"
            >
              <div className="mb-1 w-fit transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {s.icon}
              </div>
              <h3 className="text-[#0d1e4a] font-bold text-base sm:text-base leading-snug group-hover:text-[#1a9fd4] transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-base leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}