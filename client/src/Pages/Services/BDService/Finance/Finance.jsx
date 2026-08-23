// Finance.jsx
import { BarChart3, PieChart, TrendingUp, Award } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { ShieldCheck, Users, DollarSign } from "lucide-react";

import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import img1 from '../../../../asstes/img_temp/servics/Bd/freepik__financial-governance-controls-investor-readiness-b__1408.webp'
import logo from '../../../../asstes/img_temp/logo.webp'
import ServiceGrid from "../../../../Components/Shared/Servicegrid";

const servicesData = [
  {
    title: "Accounting & Bookkeeping",
    Icon: BarChart3,
    description:
      "We manage day-to-day bookkeeping, ledger updates, and financial record-keeping to ensure accurate, organized, and compliant accounts.",
  },
  {
    title: "Financial Reporting & Compliance",
    Icon: ShieldCheck,
    description:
      "Preparation of monthly, quarterly, and annual financial statements with IFRS alignment, regulatory reporting, and audit-ready documentation.",
  },
  {
    title: "Budgeting, Forecasting & Cash Flow",
    Icon: DollarSign,
    description:
      "We develop budgets, cash flow projections, and financial forecasts to support better planning and informed decision-making.",
  },
  {
    title: "Accounts Payable & Receivable",
    Icon: Users,
    description:
      "Efficient management of invoices, vendor payments, receivables tracking, and reconciliations to maintain healthy cash flow.",
  },
  {
    title: "Financial Analysis & Management Insights",
    Icon: PieChart,
    description:
      "Clear profitability analysis, KPI tracking, and performance reviews that provide actionable financial insights for sustainable growth.",
  },
  {
    title: "Internal Controls & Process Optimization",
    Icon: TrendingUp,
    description:
      "We design and strengthen internal controls, approval workflows, and reporting structures to minimize risk and improve accuracy and efficiency.",
  },
  {
    title: "Cash Flow Management",
    Icon: BarChart3,
    description:
      "We design and strengthen financial controls, approval workflows, and operating structures to minimize risk, improve accuracy, and enhance operational efficiency.",
  },
  {
    title: "Audit Support & Preparation",
    Icon: ShieldCheck,
    description:
      "We support internal and external audits by preparing schedules, organizing documentation, and ensuring smooth audit completion.",
  },
  {
    title: "Accounting Software & ERP Guidance",
    Icon: TrendingUp,
    description:
      "Digital accounting set up and support. We help you choose, implement, and optimize systems like QuickBooks, Xero, SAP, Tally, or customized ERP solutions based on your business size and needs.",
  },
];

const benefitsData = [
  { title: "Confidence In Your Financials", icon: FaCheckCircle },
  { title: "Better Budgeting And Cash Management", icon: FaCheckCircle },
  { title: "Faster Statutory Compliance", icon: FaCheckCircle },
  { title: "Improved Investor And Stakeholder Reporting", icon: FaCheckCircle },
  { title: "Clear View Of Performance And Opportunities", icon: FaCheckCircle },
];

const Finance = () => {
  const id = 'services-bd-finance'
  return (
    <div className="w-full">
      <HeroSection
      id={id}
        bgImage={bgimg}
        alt="Bangladesh Business Setup"
        heading={
          <>
            Finance & Accounting
            <br />
            <span className="text-light-blue">
              Accurate Financials. Clear Insights.
            </span>
            <br />
            Better Decisions.
          </>
        }
        description="Managing finance and accounting in Bangladesh requires local expertise, global standards, and precision. Whether you're a startup, SME, or multinational, our Finance & Accounting services give you reliable records, compliance assurance, and strategic financial visibility, so you can focus on growth."
      />

      <SecondSection></SecondSection>

      {/* Financial Governance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl 2xl:text-5xl leading-tight text-[#16244b] font-light">
                <span className="font-bold">Financial Governance,</span>
                <br />
                <span className="font-bold">Controls & Investor</span>
                <br />
                Readiness
              </h2>
              <p className="mt-8 text-base leading-7 text-gray-600 text-justify">
                A strong financial structure is essential for regulatory
                compliance, audit transparency, and investor confidence. We
                establish robust accounting frameworks aligned with IFRS, tax
                regulations, and corporate governance standards in Bangladesh.
                From internal controls and reporting frameworks to documentation
                systems and financial oversight, we build structures that
                demonstrate credibility, reduce risk, and position your business
                for funding, partnerships, and sustainable growth.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  "Strong internal controls & governance framework",
                  "Financial reporting systems & process optimization",
                  "Risk management & compliance protocols",
                  "Investor readiness & due diligence support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <FaCircleCheck className="text-light-blue text-2xl shrink-0" />
                    <span className="text-gray-600 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={img1}
                alt="Financial Governance"
                className="w-full h-107.5 object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      
      <ServiceGrid
        description={<p className="text-base text-center text-gray-600 leading-8">
              We provide comprehensive accounting and finance services for
              Bangladeshi businesses, including both standalone and retainer
              engagement models.
            </p>}
          
        heading={<h2 className="text-4xl text-center 2xl:text-5xl font-bold text-[#13264d] mb-4">
              What We Do
            </h2>}

        services={servicesData}>


      </ServiceGrid>
       {/* What You Gain Section */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl 2xl:text-5xl font-bold text-white">What You Gain</h2>
            <div className="w-24 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-8 text-center hover:bg-[#43507d] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  <img src={logo} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Our Services Section */}
     <section className="py-24 bg-white">
  <div className="max-w-[1600px] mx-auto px-6">
    <div className="text-center mb-20">
      <h2 className="text-4xl 2xl:text-5xl font-bold text-[#16244b]">
        Why Choose Our Finance & Accounting Services
      </h2>
      <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        {
          title: "Expert Bangladesh Financial Knowledge",
          desc: "Deep understanding of local regulations, taxation, and reporting expectations across Bangladesh's business landscape.",
        },
        {
          title: "Accurate & Timely Records",
          desc: "Reliable bookkeeping and closing cycles that eliminate backlogs and discrepancies in your financial data.",
        },
        {
          title: "Strategic Financial Insights",
          desc: "Actionable reporting and dashboards that support smarter, faster executive decision-making.",
        },
        {
          title: "Scalable Accounting Solutions",
          desc: "Processes built for growth, from startups to multi-entity expansion, without rebuilding your finance function.",
        },
        {
          title: "Seamless Tech Integration",
          desc: "Support with selection, setup, and optimization of accounting systems that fit how your team actually works.",
        },
        {
          title: "Trusted Long-Term Partner",
          desc: "Not just numbers, ongoing advisory support and financial planning that grows with your business.",
        },
      ].map((feature, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const isDark = (row + col) % 2 === 0;

        return (
          <div
            key={index}
            className={`flex p-10 flex-col gap-4 duration-300 hover:shadow-2xl ${
              isDark ? "bg-light-blue" : "bg-white"
            }`}
          >
            {/* Logo */}
            <div
              className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                isDark ? "bg-white/15" : "bg-light-blue/20"
              }`}
            >
              <img
                src={logo}
                alt=""
                className={`w-8 h-8 object-contain ${
                  isDark ? "brightness-0 invert" : ""
                }`}
              />
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed text-justify ${
                isDark ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {feature.desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

     

      <ConsultationCTA
      id={id}
        heading={
          <>
            Get Started
            <br />
            <span className="font-bold">Today</span>
          </>
        }
        subheading="Whether you need full finance outsourcing, project support, or advisory services, we can streamline your accounting and financial management in Bangladesh."
        commitmentItems={[
          "Free initial consultation — no obligation",
          "Complete confidentiality & secure handling",
          "Professional & certified accounting experts",
          "Practical, customized solutions for your business",
        ]}
      />

      
    </div>
  );
};

export default Finance;
