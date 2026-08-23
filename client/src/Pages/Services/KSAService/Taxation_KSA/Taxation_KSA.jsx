
import { FaCheckCircle } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";

import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";

import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/KSA/445569.webp'
import img2 from '../../../../asstes/img_temp/servics/KSA/VAT.webp'
import img3 from '../../../../asstes/img_temp/servics/KSA/Branch-of-Foreign-Company-1.webp'
import img4 from '../../../../asstes/img_temp/servics/KSA/vat2.webp'
import img6 from '../../../../asstes/img_temp/servics/KSA/zakat.webp'
import img7 from '../../../../asstes/img_temp/servics/KSA/capital.webp'
import img5 from '../../../../asstes/img_temp/servics/KSA/freepik__create-image-for-wesite-section-corporate-tax-advi__80768.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import logo from '../../../../asstes/img_temp/logo.webp'
import { motion } from "framer-motion";
import SharedFullButton from "../../../../Components/Shared/SharedFullButton";
const handleTags = [
  "VAT Registration Support",
  "ZATCA Compliance Coordination",
  "E-Invoicing Support",
  "VAT Filing Assistance",
  "Tax Documentation Management",
  "Compliance-Ready Record Support",
  "Financial Data Coordination",
  "Tax Process Monitoring",
];

const vatAdvisoryPoints = [
  "VAT registration support",
  "Tax account setup assistance",
  "Business activity classification",
  "Initial compliance documentation",
  "ZATCA registration coordination",
  "Tax profile setup support",
  "Regulatory onboarding assistance",
  "VAT setup process guidance",
];

const zatcaBenefits = [
  "ZATCA compliance assistance",
  "E-invoicing coordination support",
  "Invoice documentation review",
  "Tax invoice organization",
  "Digital invoice process support",
  "Reporting documentation management",
  "Operational compliance coordination",
  "Regulatory process monitoring",
];

const vatFilingItems = [
  "VAT filing coordination support",
  "Tax data preparation support",
  "Financial record organization",
  "VAT calculation assistance",
  "Reporting documentation review",
  "Filing deadline coordination support",
  "Compliance reporting support",
  "Tax setup assistance",
  "Regulatory documentation support",
  "Tax account organization",
  "Business activity classification support",
  "VAT-related record coordination",
  "Compliance documentation review",
  "Tax readiness support",
];

const ongoingBenefits = [
  "ZATCA compliance assistance",
  "E-invoicing coordination support",
  "Invoice documentation review",
  "Tax invoice organization",
  "Digital invoice process support",
  "Reporting documentation management",
  "Operational compliance coordination",
  "Regulatory process monitoring",
];

const gains = [
  "Improved Tax Organization",
  "Stronger VAT Compliance",
  "Better Reporting Accuracy",
  "Organized Tax Documentation",
  "Reduced Compliance Risks",
  "Structured Financial Processes",
];

const whyChoose = [
  {
    title: "KSA Tax Compliance Understanding",
    desc: "Support aligned with Saudi Taxation and VAT requirements.",
  },
  {
    title: "ZATCA-Focused Operational Support",
    desc: "Helping businesses maintain organized regulatory coordination.",
  },
  {
    title: "Structured Documentation Management",
    desc: "Improving Tax-record organization and reporting readiness.",
  },
  {
    title: "Operational Compliance Approach",
    desc: "Supporting smoother Tax management across business operations",
  },
  {
    title: "Scalable Business Support",
    desc: "Flexible Taxation support for startups, SMEs, and enterprises.",
  },
  {
    title: "Long-Term Compliance Stability",
    desc: "Building structured Tax processes that support sustainable growth.",
  },
];

const Taxation_KSA = () => {
  const id = 'services-ksa-tax'
  return (
    <div className="w-full">
      <HeroSection
        id={id}
        bgImage={bg}
        alt="Taxation KSA"
        heading={
          <>
            Strengthen Your Tax
            <br />
            <span className="text-light-blue">Compliance In Saudi Arabia</span>
          </>
        }
        description={<><span className="font-bold italic">de tempête</span> provides Taxation support services in Saudi Arabia, helping businesses maintain VAT compliance, improve Tax documentation processes, and manage regulatory requirements with greater operational confidence.</>}
      />

      <SecondSection></SecondSection>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={img1}
            alt="Tax Compliance & Regulatory Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Tax Compliance &<br />
              <span className="font-normal">Regulatory Support</span>
            </h2>
            <p className="mt-5 text-justify text-gray-500 leading-7">
              Managing Tax obligations in Saudi Arabia requires businesses to
              maintain organized financial records, accurate reporting
              processes, and compliance-ready documentation aligned with local
              regulations.
            </p>
            <p className="mt-3 text-justify text-gray-500 leading-7">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              supports businesses across Saudi Arabia with structured Taxation
              services designed to improve Tax management processes, support VAT
              compliance, and maintain organized regulatory documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            What We Handle For You
          </h2>
          <div className="w-16 h-0.5 bg-light-blue mx-auto mb-12" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {handleTags.map((t, i) => (
              <div
                key={i}
                className="bg-[#37456B] flex justify-center items-center h-20 rounded-lg py-12 px-4 text-center text-white text-base font-medium"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              VAT <span className="font-normal">Advisory</span>
            </h2>
            <p className="mt-5 text-justify text-gray-500">
              Businesses operating in Saudi Arabia must maintain proper VAT
              registration and structured Tax documentation processes to support
              regulatory compliance.
            </p>
            <p className="mt-3 text-justify text-gray-500">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              assists businesses with VAT registration support and Tax setup
              coordination designed to improve operational readiness and
              organized Tax management systems.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              Our Services Include
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {vatAdvisoryPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img2}
            alt="VAT Advisory"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={img3}
            alt="ZATCA Compliance & E-Invoicing Coordination"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              ZATCA Compliance &{" "}<br />
              <span className="font-normal">
                E-

                Invoicing Coordination
              </span>
            </h2>
            <p className="mt-5 text-justify text-gray-500">
              Businesses in Saudi Arabia are required to align with ZATCA
              regulations and maintain compliant e-invoicing processes for
              smoother Tax operations.
            </p>
            <p className="mt-3 text-justify text-gray-500">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              supports businesses with ZATCA compliance coordination and
              e-invoicing support designed to improve reporting accuracy and
              operational compliance.
            </p>
            <p className="mt-3 font-semibold text-gray-700">Benefits:</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {zatcaBenefits.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              VAT Filing & Tax
              <br />
              <span className="font-normal">Documentation Support</span>
            </h2>
            <p className="mt-5 text-justify text-gray-500">
              Accurate VAT filing and organized Tax documentation are essential
              for maintaining smoother financial operations and reducing
              compliance-related risks.
            </p>
            <p className="mt-3 text-justify text-gray-500">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              provides VAT filing support services in Saudi Arabia to help
              businesses maintain organized Tax records and structured reporting
              processes.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              Filing Support Includes
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {vatFilingItems.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img4}
            alt="VAT Filing & Tax Documentation Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={img5}
            alt="Ongoing Tax Coordination & Regulatory Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Ongoing Tax Coordination &<br />
              <span className="font-normal">Regulatory Support</span>
            </h2>
            <p className="mt-5 text-gray-500">
              <span className="font-semibold text-justify text-gray-700 italic">de tempête</span>{" "}
              supports businesses in Saudi Arabia with ongoing Tax coordination
              and regulatory support to help maintain smoother reporting
              processes, organized reporting activities, and operational Tax
              management.
            </p>
            <p className="mt-3 font-semibold text-gray-700">Benefits:</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {ongoingBenefits.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}


          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Capital Gains<br />
              <span className="font-normal">Tax</span>
            </h2>

            <p className="mt-5 text-gray-500">
              Capital gains in Saudi Arabia can have different tax treatment
              depending on the{" "}
              <span className="font-semibold text-gray-700">
                investor’s residency, ownership structure, and type of asset or
                transaction.
              </span>{" "}
              We help businesses and investors assess their KSA capital gains tax
              exposure, structure transactions efficiently, and meet applicable
              ZATCA requirements.
            </p>

            <p className="mt-3 font-semibold text-gray-700">
              Perfect for:
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                "Investors planning share or securities disposals",
                "Foreign shareholders selling interests in Saudi companies",
                "Businesses undergoing mergers, acquisitions or restructuring",
                "Companies assessing taxable gains and available exemptions",
                "Investors seeking KSA capital gains tax compliance and advisory",
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img7}
            alt="Capital Gains Tax"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />

        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <img
            src={img6}
            alt="Corporate Zakat Compliance"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Corporate Zakat<br />
              <span className="font-normal">Compliance</span>
            </h2>

            <p className="mt-5 text-gray-500">
              Businesses subject to{" "}
              <span className="font-semibold text-gray-700">
                Corporate Zakat in Saudi Arabia
              </span>{" "}
              must accurately calculate their Zakat base and meet applicable filing
              and payment requirements. We support businesses with{" "}
              <span className="font-semibold text-gray-700">
                Zakat assessment, return preparation, filing and ZATCA compliance
              </span>
              , helping minimize compliance risks and maintain accurate reporting.
            </p>

            <p className="mt-3 font-semibold text-gray-700">
              Our support covers:
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                "Zakat base calculation and assessment",
                "Annual Zakat return preparation and filing",
                "ZATCA compliance and documentation support",
                "Zakat liability review and reconciliation",
                "ZATCA queries, assessments and audit support",
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <div className="mb-20 flex justify-center">
        <SharedFullButton text={'Legal & Regulatory Update'} path={'/library/ksa'}></SharedFullButton>
      </div>


      <section className="py-24 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">What You Gain?</h2>
          <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6 mb-14" />
          <div className="grid lg:grid-cols-3 gap-6">
            {gains.map((g, i) => (
              <div
                key={i}
                className="bg-[#37456B] rounded-lg py-6 px-4 text-white font-medium"
              >
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#16244b]">
              Why Choose <span className="font-bold italic">de tempête</span>{" "}
              for Taxation Services?
            </h2>

            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((f, i) => {
              const row = Math.floor(i / 3);
              const col = i % 3;
              const isDark = (row + col) % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: (i % 3) * 0.12,
                    ease: "easeOut",
                  }}
                  className={`flex p-10 flex-col gap-4 duration-300 hover:shadow-2xl ${isDark ? "bg-light-blue" : "bg-white"
                    }`}
                >
                  <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
                    {f.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed text-justify ${isDark ? "text-gray-700" : "text-gray-500"
                      }`}
                  >
                    {f.desc}
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
            Start Building A<br />
            Stronger Tax
            <br />
            Framework <span className="font-bold">Today</span>
          </>
        }
        subheading={<><span className="font-black italic">de tempête</span> helps businesses in Saudi Arabia improve VAT compliance and maintain organized Tax operations.</>}
        commitmentItems={[
          "Free initial Tax consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "Region-specific Tax experts",
          "Transparent and practical advice tailored to your needs",
        ]}
      />

      {/* <RecentBlogs blogs={blogPosts} /> */}
    </div>
  );
};

export default Taxation_KSA;
