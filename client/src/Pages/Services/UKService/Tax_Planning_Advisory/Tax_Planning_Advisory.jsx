// File: Tax_Planning_Advisory.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";

import { LuChartColumnBig } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";

const whyChoose = [
  "Tailored tax planning for individuals and businesses",
  "Full compliance with HMRC regulations",
  "Proactive strategies to reduce liabilities",
  "Strong support for audits and investigations",
  "Clear, transparent guidance from experienced advisors",
];

import img1 from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img2 from '../../../../asstes/img_temp/0652f824-1c9b-4dd5-b267-c07aab27ec1d.webp'
import img3 from '../../../../asstes/img_temp/servics/UK/freepik__personal-tax-planningimage-for-website-section-no-__88846.webp'
import img4 from '../../../../asstes/img_temp/servics/UK/freepik__capital-gains-tax-cgt-advisory-image-unique-concep__88848.webp'
import img5 from '../../../../asstes/img_temp/servics/UK/freepik__inheritance-tax-planning-image-unique-but-clear-co__88850.webp'
import img6 from '../../../../asstes/img_temp/servics/UK/freepik__rd-tax-credit-claims-image-unique-but-clear-concep__88851.webp'
import img7 from '../../../../asstes/img_temp/servics/UK/freepik__hmrc-investigation-support-dispute-resolution-imag__88852.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import logo from '../../../../asstes/img_temp/logo.webp'
import SharedFullButton from "../../../../Components/Shared/SharedFullButton";
const Tax_Planning_Advisory = () => {
  const id = 'servics-uk-tax'
  return (
    <div className="w-full">
      <HeroSection
      id={id}
        bgImage={img1}
        alt="Tax Planning & Advisory"
        heading={
          <>
            Smart Tax Planning.
            <br />
            <span className="text-light-blue">
              Stronger Financial Outcomes.
            </span>
          </>
        }
        description="From corporate Tax strategy to personal Tax optimisation, our Tax Planning & Advisory services ensure full compliance, reduced liabilities, and a clear roadmap for long-term financial efficiency. Whether you're a business, investor, or individual, we help you navigate complex Tax regulations with clarity and confidence."
      />

      <SecondSection></SecondSection>

      {/* Corporate Tax Planning */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img2}
            alt="Corporate Tax Planning & Compliance"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl 2xl:text-5xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Corporate Tax Planning</span>
              <br />& Compliance
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Minimise liabilities, stay compliant, and optimise your overall
              Tax position.
            </p>
            <p className="mt-3 text-base text-justify leading-8 text-gray-500">
              We design efficient corporate Tax strategies tailored to your
              business structure, industry, and long-term goals. From compliance
              and filing to strategic planning and risk reduction, our experts
              ensure your business meets all regulatory requirements while
              maximising Tax efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Tax Planning */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl 2xl:text-5xl font-bold text-[#16244b]">
              Personal <br/> <span className="font-light">Tax Planning</span>
            </h2>
            <p className="mt-5 text-gray-500 font-semibold">
              Reduce your Tax burden with proactive planning.
            </p>
            <p className="mt-3 text-justify text-gray-500 leading-7">
              Our personal Tax advisory helps you manage income, investments,
              and assets more efficiently. We build tailored Tax plans that
              ensure compliance while reducing unnecessary liabilities, giving
              you clarity and peace of mind throughout the financial year.
            </p>
          </div>
          <img
            src={img3}
            alt="Personal Tax Planning"
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Capital Gains Tax */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img4}
            alt="Capital Gains Tax Advisory"
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Capital Gains Tax</span>
              <br />
              (CGT) Advisory
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Keep more of what you earn.
            </p>
            <p className="mt-3 text-justify text-base leading-8 text-gray-500">
              We help you understand your CGT obligations and implement
              strategies to reduce your overall liability. Whether you're
              selling property, shares, or business assets, our advisors ensure
              accurate calculations, smart planning, and timely compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Inheritance Tax */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Inheritance</span>
              <br />
              Tax Planning
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Secure your assets for the next generation.
            </p>
            <p className="mt-3 text-justify text-base leading-8 text-gray-500">
              Our inheritance Tax planning ensures your wealth is transferred
              efficiently and Tax-effectively. We create structured plans that
              minimise Tax exposure, protect your beneficiaries, and align with
              your long-term family goals.
            </p>
          </div>
          <img
            src={img5}
            alt="Inheritance Tax Planning"
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* R&D Tax Credit */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img6}
            alt="R&D Tax Credit Claims"
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">R&D Tax</span>
              <br />
              Credit Claims
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Claim what you're eligible for, without complexity.
            </p>
            <p className="mt-3 text-base leading-8 text-gray-500">
              We help innovative businesses reclaim a portion of their R&D
              expenditure through eligible Tax credits. Our team manages the
              full claim process, documentation, technical justification, and
              submission, ensuring accuracy, compliance, and maximum benefit.
            </p>
          </div>
        </div>
      </section>

      {/* HMRC Investigation Support */}
      <section className="py-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl 2xl:text-5xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">HMRC Investigation</span>
              <br />
              Support & Dispute Resolution
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Expert support to resolve disputes quickly and compliantly.
            </p>
            <p className="mt-3 text-base leading-8 text-gray-500">
              Facing an HMRC investigation can be overwhelming. Our specialists
              handle communication, documentation, and negotiations or
              settlement discussions—ensuring your case is managed
              professionally and your rights are fully protected.
            </p>
          </div>
          <img
            src={img7}
            alt="HMRC Investigation Support & Dispute Resolution"
            className="w-full h-96 object-center object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>
      <div className="mb-20 flex justify-center">
        <SharedFullButton text={'Legal & Regulatory Update'} path={'/library/uk'}></SharedFullButton>
      </div>
      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our{" "}
              <span className="font-bold">
                Tax Planning & Advisory Services
              </span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-20">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3">
                  <img src={logo} alt="" />
                </div>
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
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
        bodyText="Get expert Tax guidance designed to protect your income, assets, and long-term financial goals."
        highlightText="Speak to Our Tax Experts"
      />

      
    </div>
  );
};

export default Tax_Planning_Advisory;
