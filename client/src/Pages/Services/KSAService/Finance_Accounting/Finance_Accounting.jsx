import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";

const handleTags = [
  "Accounting & bookkeeping support",
  "Financial report management",
  "Accounts payable & receivable",
  "Financial reporting support",
  "VAT-ready documentation",
  "Cloud accounting management",
  "Bank reconciliation support",
  "Cloud accounting systems",
  "Accounting process coordination",
];

const bookkeepingPoints = [
  "General bookkeeping support",
  "Transaction recording",
  "Ledger management",
  "Expense tracking support",
  "Revenue documentation",
  "Financial data organization",
  "Accounting documentation management",
  "Month-end accounting support",
];

const reportingPoints = [
  "Financial statement support",
  "Monthly reporting summaries",
  "Expense & revenue reporting",
  "Internal reporting coordination",
  "Financial documentation review",
  "Record accuracy support",
  "Reporting data preparation",
  "Financial data consolidation",
];

const systemsPoints = [
  "Cloud accounting management",
  "Accounting workflow coordination",
  "Financial system organization",
  "Bank reconciliation support",
  "Invoice tracking assistance",
  "Payable & receivable monitoring",
  "Process accuracy reviews",
  "Financial record accessibility support",
];

const gains = [
  "Organized Financial Operations",
  "Improved Accounting Accuracy",
  "Better Financial Visibility",
  "Long-Term Financial Projections",
  "Structured Reporting Systems",
  "Reduced Operational Errors",
  "Stronger Business Organization",
];

const whyChoose = [
  {
    title: "Structured Financial Management",
    desc: "Organized accounting systems designed for smoother business operations.",
  },
  {
    title: "Reliable Accounting Support",
    desc: "Helping businesses maintain accurate and consistent financial records.",
  },
  {
    title: "Operational Efficiency Focus",
    desc: "Improving accounting workflows and financial process management.",
  },
  {
    title: "Scalable Business Support",
    desc: "Flexible accounting solutions for startups, SMEs, and growing businesses.",
  },
  {
    title: "Cloud-Based Financial Systems",
    desc: "Supporting modern and accessible accounting operations.",
  },
  {
    title: "Long-Term Business Stability",
    desc: "Building financial processes that support sustainable growth.",
  },
];

const Finance_Accounting = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Finance & Accounting KSA"
        heading={
          <>
            Build Stronger Financial
            <br />
            <span className="text-light-blue">Operations In Saudi Arabia</span>
          </>
        }
        description="de tempête provides finance and accounting support services in Saudi Arabia, helping businesses maintain organized financial records, improve accounting accuracy, and support smooth day-to-day financial operations."
      />

      <StatsSection
        stats={[
          { icon: CalendarDays, end: 9, label: "Years of Experience" },
          { icon: Globe, end: 20, label: "Countries Covered" },
          {
            icon: Handshake,
            end: 30000,
            duration: 3000,
            label: "Clients Served",
          },
          { icon: Medal, end: 120, duration: 2500, label: "Awards Received" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/src/asstes/img_temp/servics/KSA/Accounting-in-KSA.webp"
            alt="Reliable Finance & Accounting"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Reliable Finance &<br />
              <span className="font-normal">
                Accounting Support For
                <br />
                Businesses In Saudi Arabia
              </span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Strong financial management is essential for maintaining business
              visibility, operational control, and organized day-to-day
              activities. Businesses across Saudi Arabia require structured
              accounting systems and reliable financial processes to support
              sustainable growth and smoother operations.
            </p>
            <p className="mt-3 text-gray-500 leading-7">
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              supports companies in Saudi Arabia with finance and accounting
              solutions designed to improve financial organization, maintain
              reporting accuracy, and strengthen operational workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              What We Handle <span className="font-normal">For You</span>
            </h2>
            <div className="space-y-3 mt-8">
              {handleTags.map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 shrink-0" />
                  <span className="text-gray-600">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/img_temp/servics/KSA/freepik__create-image-for-wesite-section-business-valuation__80765.webp"
            alt="What We Handle For You"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/src/asstes/img_temp/servics/KSA/Accounting-Bookkeeping-Services-in-Saudi-Arabia.webp"
            alt="Accounting & Bookkeeping"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Accounting & Bookkeeping
              <br />
              <span className="font-normal">Services In Saudi Arabia</span>
            </h2>
            <p className="mt-5 text-gray-500">
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              helps businesses maintain organized accounting systems and
              accurate financial records to support daily business operations
              and long-term financial management.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {bookkeepingPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Financial Reporting &<br />
              <span className="font-normal">Business Documentation</span>
            </h2>
            <p className="mt-5 text-gray-500">
              Clear financial reporting helps businesses improve visibility,
              maintain organized documentation, and support operational
              decision-making processes.{" "}
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              provides financial reporting support services in Saudi Arabia to
              help businesses maintain structured financial records and
              organized reporting systems.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {reportingPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/img_temp/servics/KSA/Financial-Reporting-Document-KSA.webp"
            alt="Financial Reporting & Business Documentation"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/src/asstes/img_temp/servics/KSA/Accounting-and-finanical-pro-management.webp"
            alt="Accounting Systems & Financial Process Management"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Accounting Systems &<br />
              <span className="font-normal">
                Financial Process
                <br />
                Management
              </span>
            </h2>
            <p className="mt-5 text-gray-500">
              Efficient accounting systems help businesses improve workflow
              management, maintain financial accuracy, and support smoother
              operational processes.{" "}
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              supports businesses in Saudi Arabia with accounting system
              management and financial process coordination designed to improve
              operational efficiency and management.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {systemsPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              VAT-Ready Financial Record
              <br />
              <span className="font-normal">Support</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Well-maintained accounting records are essential for supporting
              VAT documentation and maintaining organized financial operations.{" "}
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              helps businesses in Saudi Arabia maintain structured financial
              records and accounting documentation that support VAT readiness
              and operational compliance requirements.
            </p>
          </div>
          <img
            src="/src/asstes/img_temp/servics/KSA/VAT.webp"
            alt="VAT-Ready Financial Record Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/src/asstes/img_temp/servics/KSA/freepik__create-image-for-wesite-section-procurement-adviso__80766.webp"
            alt="Business Financial Operations Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Business Financial
              <br />
              <span className="font-normal">Operations Support</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Reliable finance operations help businesses maintain better
              financial control, improve reporting consistency, and reduce
              operational inefficiencies.{" "}
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              assists businesses with organized accounting support that
              strengthens financial workflows and improves overall operational
              management.
            </p>
          </div>
        </div>
      </section>

      {/* What You Gain */}
      <section className="py-24 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">What You Gain</h2>
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6 mb-14" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {gains.map((g, i) => (
              <div
                key={i}
                className={`rounded-lg py-6 px-4 text-white font-medium ${i === 3 ? "bg-light-blue text-[#16244b]" : "bg-[#37456B]"}`}
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
            <h2 className="text-4xl font-bold text-[#16244b]">
              Why Choose <span className="font-normal italic">de tempête</span>{" "}
              for Finance & Accounting
            </h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChoose.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8">
                <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-[#16244b] mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Start Strengthening Your Financial
            <br />
            Operations <span className="font-bold">In Saudi Arabia</span>
          </>
        }
        subheading="de tempête helps businesses in Saudi Arabia build stronger and more organized financial operations."
        commitmentItems={[
          "Organized accounting systems",
          "Accurate financial reporting",
          "Improved operational efficiency",
          "Better financial visibility",
        ]}
      />

      <RecentBlogs blogs={blogPosts} />
    </div>
  );
};

export default Finance_Accounting;
