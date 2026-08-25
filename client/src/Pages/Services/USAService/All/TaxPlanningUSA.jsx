// File: TaxPlanningUSA.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";

import { LuChartColumnBig } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import federalTaxImg from '../../../../asstes/img_temp/servics/usa31.webp'
import stateTaxImg from '../../../../asstes/img_temp/servics/UK/freepik__personal-tax-planningimage-for-website-section-no-__88846.webp'
import salesTaxImg from '../../../../asstes/img_temp/servics/UK/freepik__capital-gains-tax-cgt-advisory-image-unique-concep__88848.webp'
import reporting1099Img from '../../../../asstes/img_temp/servics/UK/freepik__inheritance-tax-planning-image-unique-but-clear-co__88850.webp'
import taxPlanningImg from '../../../../asstes/img_temp/servics/usa32.webp'
import img33 from '../../../../asstes/img_temp/servics/usa33.webp'
import img34 from '../../../../asstes/img_temp/servics/usa34.webp'
import img35 from '../../../../asstes/img_temp/servics/usa35.webp'
import { motion } from "framer-motion";
import logo from '../../../../asstes/img_temp/logo.webp'
import SharedFullButton from "../../../../Components/Shared/SharedFullButton";

const whyChoose = [
  "Tailored Tax strategy for LLCs, C-Corps, and multi-state businesses",
  "Full compliance with IRS and state Tax regulations",
  "Proactive planning to reduce federal and state liabilities",
  "Accurate, on-time sales Tax and 1099 filings",
  "Clear, transparent guidance from experienced US Tax advisors",
  "Dedicated support for audit representation and notice resolution",
];

const TaxPlanningUSA = () => {
  const id = 'services-usa-tax'
  return (
    <div className="w-full">
      <SevicsBanner
        id={id}
        bgImage={bgimg}
        alt="USA Tax Planning & Advisory Services"
        description="Navigate US federal and state Tax obligations with confidence through our comprehensive Tax planning and advisory services. From federal Tax preparation for LLCs and C-Corps to state Tax filings, sales Tax registration, 1099 reporting, and proactive Tax planning, we help businesses of every size stay compliant while minimizing their overall Tax burden."
        title1={"Smart Tax Planning"}
        title2={"Built For Your US Business Structure"}
      ></SevicsBanner>



      {/* Federal Tax Preparation (LLC / C-Corp) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={federalTaxImg}
            alt="Federal Tax Preparation for LLCs and C-Corps"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Federal Tax Preparation</span>
              <br />(LLC / C-Corp)
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Accurate federal filings built around your entity structure.
            </p>
            <p className="mt-3 text-base text-justify leading-8 text-gray-500">
              We prepare and coordinate federal Tax filings tailored to your
              business structure, whether you operate as an LLC or C-Corp.
              From entity-specific deductions to filing deadlines, our team
              ensures your federal Tax position is accurate, compliant, and
              optimized for your long-term goals.
            </p>
          </div>
        </div>
      </section>

      {/* State Tax Filings Coordination */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-[#16244b]">
              State Tax <span className="font-light">Filings Coordination</span>
            </h2>
            <p className="mt-5 text-gray-500 font-semibold">
              One coordinated process across every state you operate in.
            </p>
            <p className="mt-3 text-gray-500 text-justify leading-7">
              Our state Tax advisory helps you manage filing obligations
              across multiple jurisdictions efficiently. We coordinate state
              income Tax, franchise Tax, and other state-level filings,
              giving you clarity and consistency across every state where
              your business has a presence.
            </p>
          </div>
          <img
            src={stateTaxImg}
            alt="State Tax Filings Coordination"
            className="w-full h-80 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Sales Tax Registration & Filing */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={salesTaxImg}
            alt="Sales Tax Registration & Filing"
            className="w-full h-80 object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Sales Tax</span>
              <br />
              Registration & Filing
            </h2>
            <p className="mt-6 text-base  leading-8 text-gray-500 font-semibold">
              Stay ahead of sales Tax obligations in every state you sell into.
            </p>
            <p className="mt-3 text-justify text-base leading-8 text-gray-500">
              We help you understand where you need to register for sales
              Tax and manage the full filing process from there. Whether
              you're selling physical goods, digital products, or services,
              our advisors ensure accurate registration, timely filings, and
              full compliance across jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* 1099 Reporting Support */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">1099</span>
              <br />
              Reporting Support
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Accurate contractor reporting, filed on time.
            </p>
            <p className="mt-3 text-base leading-8 text-gray-500">
              Our 1099 reporting support ensures every contractor and
              vendor payment is tracked, categorized, and reported correctly
              to the IRS. We manage form preparation, recipient distribution,
              and filing deadlines, minimizing your risk of penalties and
              reporting errors.
            </p>
          </div>
          <img
            src={reporting1099Img}
            alt="1099 Reporting Support"
            className="w-full h-88 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Tax Planning & Advisory */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={taxPlanningImg}
            alt="Tax Planning & Advisory"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Tax Planning</span>
              <br />
              & Advisory
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Plan ahead, not just at filing time.
            </p>
            <p className="mt-3 text-base leading-8 text-gray-500">
              We work with you throughout the year, not just at Tax season,
              to build a proactive Tax strategy for your business. From
              estimated payment planning to entity structure reviews and
              deduction opportunities, our advisors help you make informed
              decisions that reduce your overall Tax burden.
            </p>
          </div>
        </div>
      </section>
      {/* OBBBA */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">OBBBA</span>
              <br />
              Tax Advisory
            </h2>

            <p className="mt-3 text-base leading-8 text-gray-500">
              The{" "}
              <span className="font-bold">
                One Big Beautiful Bill Act (OBBBA)
              </span>{" "}
              introduces significant changes to U.S. federal tax rules affecting
              businesses, investors, and employers. We help you understand the new
              provisions, identify available tax-saving opportunities, and keep your
              tax strategy and compliance aligned with the latest requirements.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#16244b] mb-4">
                Perfect for:
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Businesses assessing{" "}
                    <strong className="text-gray-700">
                      100% bonus depreciation and capital investment deductions
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Companies evaluating{" "}
                    <strong className="text-gray-700">
                      domestic R&amp;D expensing and tax incentives
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    LLCs, partnerships &amp; S corporations reviewing{" "}
                    <strong className="text-gray-700">
                      Section 199A/QBI deductions
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Employers adapting to{" "}
                    <strong className="text-gray-700">
                      new payroll, tips and overtime tax provisions
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Businesses planning investments under the{" "}
                    <strong className="text-gray-700">
                      new OBBBA tax framework
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <img
            src={img33}
            alt="1099 Reporting Support"
            className="w-full h object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>
      <section className="pb-12 pt-10 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img34}
            alt="Tax Planning & Advisory"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">FBAR & </span>
              <br />
              Cross-Border Reporting
            </h2>

            <p className="mt-3 text-base leading-8 text-gray-500">
              U.S. taxpayers with foreign bank accounts, financial assets, or
              international interests may face multiple reporting obligations. We help
              individuals and businesses navigate{" "}
              <span className="font-bold">
                FBAR, FATCA and other U.S. cross-border reporting requirements
              </span>
              , reducing compliance risks and avoiding costly reporting errors.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#16244b] mb-4">
                Perfect for:
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    U.S. persons with{" "}
                    <strong className="text-gray-700">
                      foreign bank or financial accounts
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Individuals required to file{" "}
                    <strong className="text-gray-700">
                      FBAR (FinCEN Form 114)
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Taxpayers reporting foreign financial assets under{" "}
                    <strong className="text-gray-700">
                      FATCA / Form 8938
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Business owners with{" "}
                    <strong className="text-gray-700">
                      international financial interests or signature authority
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Individuals and businesses managing{" "}
                    <strong className="text-gray-700">
                      complex cross-border reporting obligations
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 pt-10 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">State BOI Reporting</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Stay Compliant with State-Level Ownership Rules
            </p>

            <p className="mt-3 text-base leading-8 text-gray-500">
              Beneficial Ownership Information (BOI) obligations can extend beyond
              federal requirements, with certain U.S. states introducing their own
              ownership disclosure rules. We help businesses identify applicable{" "}
              <span className="font-bold">
                state BOI requirements, filing deadlines and exemptions
              </span>{" "}
              to maintain accurate and timely compliance.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#16244b] mb-4">
                Perfect for:
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Businesses assessing{" "}
                    <strong className="text-gray-700">
                      state-level beneficial ownership requirements
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Foreign entities registered to{" "}
                    <strong className="text-gray-700">
                      do business in applicable U.S. states
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Companies identifying{" "}
                    <strong className="text-gray-700">
                      beneficial owners and substantial control
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Businesses reviewing{" "}
                    <strong className="text-gray-700">
                      BOI exemptions and disclosure obligations
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-500">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-light-blue shrink-0"></span>
                  <span>
                    Companies managing{" "}
                    <strong className="text-gray-700">
                      initial, annual and updated state BOI filings
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <img
            src={img35}
            alt="1099 Reporting Support"
            className="w-full  object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>
      <div className="mb-20 mt-10 flex justify-center">
        <SharedFullButton text={'Legal & Regulatory Update'} path={'/library/usa'}></SharedFullButton>
      </div>



      {/* Why Choose */}
      <section className="pb-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our{" "}
              <span className="font-bold">
                Tax Planning & Advisory Services
              </span>
            </h2>

            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((item, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;
              const isDark = (row + col) % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.12,
                    ease: "easeOut",
                  }}
                  className={`flex p-10 flex-col items-center text-center gap-4 duration-300 hover:shadow-2xl ${isDark ? "bg-light-blue" : "bg-white"
                    }`}
                >
                  {/* Logo */}
                  <div
                    className={`w-12 h-12 rounded-sm flex items-center justify-center ${isDark ? "bg-white/15" : "bg-light-blue/20"
                      }`}
                  >
                    <img
                      src={logo}
                      alt=""
                      className={`w-8 h-8 object-contain ${isDark ? "brightness-0 invert" : ""
                        }`}
                    />
                  </div>

                  {/* Content */}
                  <p
                    className={`text-base font-semibold leading-6 ${isDark ? "text-gray-700" : "text-gray-500"
                      }`}
                  >
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      <ConsultationCTA
        id={id}
        heading={
          <>
            Plan Smarter. Save
            <br />
            More. <span className="font-bold">Stay Compliant.</span>
          </>
        }
        bodyText="Get expert US Tax guidance designed to protect your business, reduce liabilities, and support your long-term financial goals."
        highlightText="Speak to Our Tax Experts"
      />


    </div>
  );
};

export default TaxPlanningUSA;