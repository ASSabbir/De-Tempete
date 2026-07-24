// File: Bookkeeping_Financial_Management.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";

const whyChoose = [
  { title: "Accurate, timely, and compliant bookkeeping" },
  { title: "Data-driven insights for smarter decisions" },
  { title: "Cash flow forecasting for business stability" },
  { title: "Streamlined accounts payable & receivable" },
  { title: "Scalable solutions for SMEs and large enterprises" },
];
import img1 from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img2 from '../../../../asstes/img_temp/New folder/Bookkeeping-for-Nonprofits.webp'
import img3 from '../../../../asstes/img_temp/New folder/Reconcile Accounts.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";

const Bookkeeping_Financial_Management = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage={img1}
        alt="Bookkeeping & Financial Management"
        heading={
          <>
            Stay On Top Of Your Finances.
            <br />
            <span className="text-light-blue">Make Every Decision Count.</span>
          </>
        }
        description="Efficient bookkeeping and financial management are the backbone of every successful business. Whether you're a growing SME or an established company, our services ensure accurate records, clear insights, and data-driven decisions, so you can focus on growth, not paperwork."
      />

     <SecondSection></SecondSection>

      {/* Accurate & Timely Bookkeeping */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img2}
            alt="Accurate & Timely Bookkeeping"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Accurate & Timely</span>
              <br />
              Bookkeeping
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Keep your financial records up-to-date with precision and
              consistency.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              Our monthly and quarterly bookkeeping services ensure that every
              transaction, invoice, and expense is recorded accurately. From
              tracking income and expenses to categorizing accounts and
              reconciling statements, we provide clarity and transparency for
              better financial control.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Design Feature:
            </h4>
            <div className="space-y-3">
              {["Monthly Bookkeeping", "Quarterly Bookkeeping"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-light-blue text-lg shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reconcile Accounts */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Reconcile Accounts</span> Without
              Stress
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Ensure your bank statements and books always match.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              Bank reconciliation identifies discrepancies between your bank
              statements and internal records, preventing errors and fraud. Our
              team reviews every transaction, resolves inconsistencies, and
              provides clear reports so you always know your true cash position.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Design Feature:
            </h4>
            <div className="space-y-3">
              {[
                "Regular Reconciliation",
                "Error Detection & Correction",
                "Detailed Reporting",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img3}
            alt="Reconcile Accounts"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Cash Flow Forecasting */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-[#16244b]">
            <span className="font-bold">Cash Flow Forecasting</span> & Budgeting
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            <span className="font-semibold">
              Predict cash inflows and outflows to make smarter financial
              decisions.
            </span>{" "}
            Cash flow forecasting and budgeting help you anticipate financial
            needs, optimize spending, and avoid surprises. We create detailed
            projections, compare actuals against budgets, and provide actionable
            insights, so you can plan growth strategies and manage liquidity
            effectively.
          </p>
        </div>
      </section>

      {/* Management Accounts */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/img_temp/New folder/Management Accounts Preparation.webp"
            alt="Management Accounts"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Management Accounts</span>
              <br />
              Preparation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Turn data into actionable insights with management accounts.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              Management accounts provide a clear snapshot of your business
              performance. We prepare accurate reports, including profit & loss
              statements, balance sheets, and KPI analysis—enabling you to make
              informed strategic decisions quickly.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Design Feature:
            </h4>
            <div className="space-y-3">
              {[
                "Monthly & Quarterly Reports",
                "Performance Dashboards",
                "Key Metrics & Insights",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accounts Payable & Receivable */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl  leading-tight text-white font-light">
              Accounts Payable &{" "}
              <span className="font-bold">Receivable Management</span>
            </h2>
            <p className="mt-8 text-xl text-slate-300 leading-7 max-w-4xl mx-auto">
              <span className="font-semibold text-white">
                Stay on top of who owes you and who you owe.
              </span>{" "}
              Efficient accounts payable and receivable management improves cash
              flow and strengthens vendor and client relationships. We handle
              invoice tracking, payment scheduling, debt follow-ups, and
              reconciliation, ensuring smooth financial operations and timely
              reporting.
            </p>
            <div className="w-44 h-1 bg-light-blue rounded-full mx-auto mt-10"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {[
              "Accounts Receivable Monitoring",
              "Accounts Payable Scheduling",
              "Automated Reminders & Reporting",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-20 h-20 bg-light-blue rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-5xl" />
                </div>
                <h3 className="mt-10 text-xl font-medium text-white leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl  font-light text-[#16244b] leading-tight">
              Why Choose Our{" "}
              <span className="font-bold">
                Bookkeeping & Financial Management Services
              </span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mt-20">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuChartNoAxesCombined className="text-light-blue text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Take Control Of Your
            <br />
            Finances <span className="font-bold">Today</span>
          </>
        }
        bodyText="Professional bookkeeping and financial management are just a click away. Reduce errors, save time, and gain complete clarity on your business finances."
        highlightText="Talk to Our Financial Experts"
      />

      
    </div>
  );
};

export default Bookkeeping_Financial_Management;
