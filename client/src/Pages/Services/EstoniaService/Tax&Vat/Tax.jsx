import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import SevicsBanner from "../../../../Components/Shared/SevicsBanner";
import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img2 from '../../../../asstes/img_temp/servics/3.png'
import img3 from '../../../../asstes/img_temp/servics/3.png'
import logo from '../../../../asstes/img_temp/logo.webp'

/* ---------------- DATA ---------------- */

const whyChoose = [
  "Expert guidance on Estonia VAT and tax compliance",
  "Accurate VAT registration, reporting and filings",
  "Proactive tax planning for efficient business operations",
  "Support for cross-border and EU VAT requirements",
  "Clear, reliable guidance from experienced tax professionals",
];

const citRows = [
  ["Tax on retained / reinvested profit", "0% — no cap on time or amount"],
  ["Tax on distributed profit (dividends)", "22%, calculated as 22/78 of the net distribution (effective ~28.2% on the net amount received)"],
  ["Regular-dividend reduced rate (14/86)", "Abolished from 1 January 2025 — standard 22/78 now applies to all distributions"],
  ["Legacy redistribution to individuals (pre-2025 dividends taxed at 14/86)", "7% withholding on redistribution"],
  ["Non-resident (branch / PE)", "Taxed only on profits distributed from Estonian-source income"],
  ["Resident company", "Taxed on worldwide distributed profits"],
];

const vatRows = [
  ["Standard VAT rate", "24% (raised from 22%, effective 1 July 2025 — now permanent)"],
  ["Reduced rate", "13% — hotel / accommodation services (raised from 9% in Jan 2025)"],
  ["Reduced rate", "9% — books, periodicals (print & electronic, with exceptions), listed pharmaceuticals"],
  ["Zero rate", "0% — exports, intra-Community supplies, specific international transport services"],
  ["Exempt (no input credit)", "Healthcare, education, insurance, certain financial services, most real estate transactions"],
  ["Mandatory registration threshold (resident)", "€40,000 taxable turnover in a calendar year — must register within 3 working days of exceeding it"],
  ["Non-resident businesses with taxable activity in Estonia", "No threshold — registration required regardless of turnover"],
  ["Non-EU businesses", "Must appoint a fiscal representative, jointly liable for VAT compliance"],
  ["EU cross-border SME exemption scheme (from 2025)", "€100,000 EU-wide turnover threshold"],
  ["OSS (One-Stop Shop) for B2C distance sales", "€10,000 EU-wide threshold for simplified pan-EU reporting"],
  ["Import VAT", "Due at customs clearance unless deferred under the import VAT accounting scheme"],
];

const vatFiling = [
  { label: "Frequency", value: "Monthly, by default, regardless of sales volume" },
  { label: "Deadline", value: "VAT return + payment due by the 20th of the month following the reporting period" },
  { label: "Filing method", value: "Electronic via the e-MTA portal (mandatory for VAT-registered entities)" },
  { label: "Penalties", value: "Late filing / payment — fines up to €32,000; late payment interest 0.06% per day" },
];

const payrollRows = [
  ["Social tax (employer-paid)", "33% of gross salary"],
  ["Unemployment insurance (employer)", "0.8%"],
  ["Minimum monthly social tax base (2026)", "€886 → minimum social tax €292.38 / employee / month"],
  ["Personal income tax", "Flat 22% (2026)"],
];

const calendarRows = [
  ["VAT return", "Monthly", "20th of following month"],
  ["Payroll / social tax declaration (TSD)", "Monthly", "10th of following month"],
  ["Annual report", "Annually", "Within 6 months of financial year-end"],
  ["CIT declaration", "On distribution event", "10th of the following month"],
];

const faqs = [
  {
    q: "Is Estonia really 0% tax?",
    a: "No. Estonia charges 0% corporate income tax only on profit that stays in the company. Tax of 22% (22/78 of net) applies the moment profit is distributed as dividends or other taxable payments.",
  },
  {
    q: "What is the current VAT rate in Estonia?",
    a: "24%, effective since 1 July 2025. Reduced rates of 13% and 9% apply to specific goods and services; 0% applies to exports and qualifying intra-EU / international supplies.",
  },
  {
    q: "When must an Estonian company register for VAT?",
    a: "Resident companies must register within 3 working days of exceeding €40,000 in annual taxable turnover. Non-resident businesses with taxable activity in Estonia must register regardless of turnover.",
  },
  {
    q: "How often are VAT returns filed in Estonia?",
    a: "Monthly, due by the 20th of the following month, filed electronically via e-MTA.",
  },
  {
    q: "Do e-Residents pay personal tax in Estonia?",
    a: "Not automatically. e-Residency grants a digital ID for company management — it does not itself create Estonian personal tax residency. Personal tax liability depends on where the individual is physically tax-resident.",
  },
  {
    q: "What happens if I miss a VAT deadline?",
    a: "Fines up to €32,000 for late filing, plus 0.06% daily interest on unpaid VAT.",
  },
];

/* ---------------- SMALL PIECES ---------------- */

const SectionTitle = ({ bold, light, sub }) => (
  <div className="text-center">
    <h2 className="text-4xl font-light text-[#16244b]">
      <span className="font-bold">{bold}</span> {light}
    </h2>
    <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-6"></div>
    {sub && (
      <p className="mt-6 max-w-3xl mx-auto text-gray-500 leading-8">{sub}</p>
    )}
  </div>
);

const InfoTable = ({ head, rows }) => (
  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
    <table className="w-full text-left text-sm md:text-base">
      <thead className="bg-[#16244b] text-white">
        <tr>
          {head.map((h) => (
            <th key={h} className="px-5 py-4 font-semibold whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            {row.map((cell, j) => (
              <td
                key={j}
                className={`px-5 py-4 align-top ${
                  j === 0 ? "font-semibold text-[#16244b]" : "text-gray-600"
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Faq = ({ item, open, onToggle }) => (
  <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
    >
      <span className="font-semibold text-[#16244b] text-lg">{item.q}</span>
      <span className="shrink-0 w-8 h-8 rounded-full bg-[#16244b] text-white flex items-center justify-center">
        {open ? <Minus size={16} /> : <Plus size={16} />}
      </span>
    </button>
    {open && (
      <p className="px-6 pb-6 text-gray-500 leading-8">{item.a}</p>
    )}
  </div>
);

/* ---------------- PAGE ---------------- */

const Tax = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full">

      <SevicsBanner bgImage={bg} alt="Bangladesh Business Setup"
                description={<>From <span className="font-bold">Estonia corporate tax and VAT registration</span> to VAT returns and cross-border Tax advisory, our <span className="font-bold">Tax & VAT Services in Estonia</span> help businesses stay compliant while managing their Tax obligations efficiently. Whether you're an Estonian company, e-Resident entrepreneur, or international business operating across the EU, we help you navigate Estonia’s digital Tax environment with clarity and confidence. </>}
                title1={'Smart Tax Planning'}
                title2={' Stronger Financial Outcomes.'}

            ></SevicsBanner>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our{" "}
              <span className="font-bold">
                Tax Planning & Advisory Services
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
                <img src={logo} className="mx-auto mb-6" alt="" />
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Income Tax */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <img
              src={img2}
              alt="Estonia Corporate Income Tax"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl leading-tight text-[#16244b] font-light">
                <span className="font-bold">Corporate Income Tax</span>
                <br />
                (CIT)
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
                0% on reinvested profit. 22% only when profit is distributed.
              </p>
              <p className="mt-3 text-base leading-8 text-gray-500">
                Estonia taxes company profit at the moment it is distributed, not
                when it is earned. Retained and reinvested profit stays untaxed,
                with no cap on time or amount.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <InfoTable head={["Item", "Rate / Rule"]} rows={citRows} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-2xl bg-[#16244b] text-white p-6">
              <p className="font-bold text-lg">Example</p>
              <p className="mt-2 leading-7 text-white/80">
                €100 of gross profit available for distribution → €78 paid to
                shareholder, €22 corporate income tax.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="font-bold text-lg text-[#16244b]">2026 update</p>
              <p className="mt-2 leading-7 text-gray-500">
                A planned increase to 24% CIT was legislated, then repealed by
                Parliament in December 2025. The rate remains 22/78 for 2026.
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-500 leading-8">
            <span className="font-semibold text-[#16244b]">
              Taxable events beyond dividends:
            </span>{" "}
            fringe benefits, gifts / donations, entertainment costs,
            non-business expenses, hidden profit distributions, and certain
            equity payments.
          </p>
        </div>
      </section>

      {/* VAT */}
      <section className="pb-20 bg-gray-50 pt-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <SectionTitle
            bold="VAT"
            light="(Käibemaks)"
            sub="Current Estonian VAT rates, exemptions, registration thresholds and EU cross-border schemes."
          />
          <div className="mt-14">
            <InfoTable head={["Item", "Detail"]} rows={vatRows} />
          </div>
        </div>
      </section>

      {/* VAT Filing */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <SectionTitle
            bold="VAT"
            light="Filing"
            sub="VAT returns are filed electronically, every month."
          />
          <div className="grid sm:grid-cols-2 gap-6 mt-14">
            {vatFiling.map((item) => (
              <div
                key={item.label}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <p className="text-[#16244b] font-bold text-lg">{item.label}</p>
                <p className="mt-2 text-gray-500 leading-8">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payroll & Social Tax */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl leading-tight text-[#16244b] font-light">
                <span className="font-bold">Payroll</span>
                <br />& Social Tax
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
                If you are hiring in Estonia.
              </p>
              <p className="mt-3 text-base leading-8 text-gray-500">
                Employer-paid social tax and unemployment insurance apply to
                every employee, on top of the flat personal income tax.
              </p>
            </div>
            <img
              src={img3}
              alt="Estonia Payroll and Social Tax"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="mt-14">
            <InfoTable head={["Item", "Rate"]} rows={payrollRows} />
          </div>
        </div>
      </section>

      {/* Filing Calendar */}
      <section className="pb-20 bg-gray-50 pt-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <SectionTitle
            bold="Filing Calendar"
            light="Snapshot"
            sub="Standard case for an OÜ."
          />
          <div className="mt-14">
            <InfoTable
              head={["Obligation", "Frequency", "Deadline"]}
              rows={calendarRows}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <SectionTitle bold="Frequently Asked" light="Questions" />
          <div className="mt-14 space-y-4">
            {faqs.map((item, i) => (
              <Faq
                key={item.q}
                item={item}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
    heading={
        <>
            Build Your
            <br />
            <span className="font-bold">European Presence</span>
        </>
    }
    subheading="From market entry and international business structuring to finance, compliance, and ongoing advisory, we help businesses expand into Europe with confidence through Estonia."
    commitmentItems={[
        "Free strategic consultation",
        "Cross-border expansion specialists",
        "International finance & reporting support",
        "Long-term partnership for sustainable growth",
    ]}
/>

    </div>
  );
};

export default Tax;