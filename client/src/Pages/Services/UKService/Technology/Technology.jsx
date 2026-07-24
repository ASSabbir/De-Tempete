// File: Technology.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { LuSparkles, LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import SecondSection from "../../../../Components/Shared/SecondSection";
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/UK/Business-Process-Automation.webp'
import img2 from '../../../../asstes/img_temp/logo.webp'


const softwareSolutions = [
  { title: "Digital Record Keeping", desc: "Maintain organised digital financial records for HMRC compliance." },
  { title: "VAT Filing Support", desc: "Simplify VAT submissions with MTD-compatible systems." },
  { title: "HMRC-Compatible Software", desc: "Setup and support for approved accounting platforms." },
  { title: "Digital Accounting Workflows", desc: "Reduce manual bookkeeping and reporting errors." },
];

const automationItems = [
  { title: "Automated Invoicing", desc: "Generate invoices automatically with faster and more accurate billing workflows." },
  { title: "Expense Tracking", desc: "Track business expenses efficiently through organised and automated financial systems." },
  { title: "Financial Reporting", desc: "Access real-time financial reports for improved business decision-making and visibility." },
  { title: "Workflow Automation", desc: "Simplify operational processes through smart and automated workflow management systems." },
  { title: "Real-Time Insights", desc: "Monitor financial performance instantly with live business reporting and analytics." },
];

const benefits = [
  "Reduce Manual\nBookkeeping Tasks",
  "Improve VAT\nReporting Accuracy",
  "Access Real-Time\nFinancial Insights",
  "Stay HMRC Compliant\nDigitally",
  "Save Time Through\nAutomation",
];

const whyChoose = [
  { title: "UK Compliance Focused", desc: "Built around HMRC and MTD requirements." },
  { title: "Practical Business Solutions", desc: "Technology aligned with operational needs." },
  { title: "Modern Accounting Expertise", desc: "Experience with leading cloud accounting systems." },
  { title: "Reliable Ongoing Support", desc: "Continuous assistance for smoother operations." },
];

const partners = ["QuickBooks", "Tableau", "Sage", "Zoho Books", "TallyPrime", "Taxcalc"];

const Technology = () => {
  return (
    <div className="w-full">
       <HeroSection
        bgImage={bgimg}
        alt="Technology"
        heading={<>Making Tax Digital & Cloud<br /><span className="text-light-blue">Accounting For UK Businesses</span></>}
        description="At de tempête, we help UK businesses manage accounting, VAT submissions, and digital bookkeeping through HMRC-compliant cloud accounting systems designed for modern business operations."
      />

      <SecondSection></SecondSection>

      {/* Software Solutions */}
      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Software Solutions For <span className="font-bold">Businesses</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              We help businesses implement and optimize modern software solutions, including cloud accounting
              platforms, workflow systems, and operational tools that improve efficiency and reduce manual work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {softwareSolutions.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 flex flex-col items-center">
                <div>
                  <img src={img2} alt="" />
                </div>
                <h3 className="text-lg font-bold text-[#14224A] mb-3 mt-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-6 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Process Automation */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">Business Process <span className="font-light">Automation</span></h2>
            <p className="mt-5 text-gray-500 leading-7">
              At de tempête, we help businesses eliminate manual tasks, streamline workflows, and improve operational
              efficiency through intelligent automation solutions.
            </p>
            <div className="space-y-5 mt-6">
              {automationItems.map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-[#16244b]">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img1}
            alt="Business Process Automation"
            className="w-full h-full object-cover rounded-2xl "
          />
        </div>
      </section>

      {/* Smarter Accounting & Business Benefits */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-white">
              Smarter Accounting & Business <span className="font-bold">Benefits</span>
            </h2>
            <div className="w-20 h-1 bg-light-blue rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 mt-16">
            {benefits.map((item, index) => (
              <div key={index} className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl">
                <h3 className="text-lg font-medium text-white leading-relaxed whitespace-pre-line">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our <span className="font-bold">Technology Services?</span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mt-16">
            {whyChoose.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <LuChartNoAxesCombined className="text-light-blue text-2xl mb-4" />
                <h3 className="font-bold text-[#16244b] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <ConsultationCTA
        heading={<>Start Simplifying Your<br />Accounting With <span className="font-bold">Modern Digital Solutions</span></>}
        commitmentItems={[
          "Free initial consultation — no obligation",
          "Tailored digital & technology solutions",
          "Scalable and automation-ready systems",
          "Expert support and strategic guidance Transparent and efficient process",
        ]}
      />

      {/* Technological Partner */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-[#16244b] mb-16">
            Technological <span className="font-bold">Partner</span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center justify-items-center opacity-80">
            {partners.map((p, i) => (
              <span key={i} className="text-gray-500 font-semibold text-lg">{p}</span>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Technology;