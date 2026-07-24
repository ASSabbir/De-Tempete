// File: src/Pages/Legal/PrivacyPolicy.jsx
import { Link } from "react-router";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "data-controller", label: "2. Who We Are — Data Controller" },
  { id: "data-we-collect", label: "3. Personal Data We Collect" },
  { id: "how-we-collect", label: "4. How We Collect Personal Data" },
  { id: "purposes", label: "5. Purposes and Legal Bases of Processing" },
  { id: "marketing", label: "6. Use of Your Contact Information for Marketing" },
  { id: "sharing", label: "7. Sharing of Personal Data" },
  { id: "international-transfers", label: "8. International Data Transfers" },
  { id: "retention", label: "9. Data Retention" },
  { id: "security", label: "10. Security" },
  { id: "your-rights", label: "11. Your Rights" },
  { id: "us-residents", label: "12. United States Residents" },
  { id: "cookies", label: "13. Cookies" },
  { id: "third-party", label: "14. Third-Party Links and Tools" },
  { id: "children", label: "15. Children" },
  { id: "changes", label: "16. Changes to This Policy" },
  { id: "contact", label: "17. Contact Us" },
];

const purposesTable = [
  {
    purpose: "Providing our services",
    examples: "Accounting, tax, payroll, advisory, valuation, due diligence and business setup services",
    basis: "Performance of a contract; legitimate interests",
  },
  {
    purpose: "Responding to enquiries",
    examples: "Replying to contact-form submissions and consultation requests",
    basis: "Legitimate interests; steps prior to entering a contract",
  },
  {
    purpose: "Marketing (see Section 6)",
    examples: "Newsletters, service updates, event invitations, offers",
    basis: "Your consent; legitimate interests / soft opt-in for existing clients where permitted",
  },
  {
    purpose: "Legal and regulatory compliance",
    examples: "AML/KYC checks, tax filings, responding to lawful requests from regulators and authorities",
    basis: "Legal obligation",
  },
  {
    purpose: "Website operation and security",
    examples: "Analytics, fraud prevention, troubleshooting",
    basis: "Legitimate interests; consent (non-essential cookies)",
  },
  {
    purpose: "Establishing or defending legal claims",
    examples: "Debt recovery, dispute resolution",
    basis: "Legitimate interests; legal obligation",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-[#16244B] py-20">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Privacy <span className="text-cyan-400">Policy</span>
          </h1>
          <p className="mt-4 text-slate-300">Last updated: 20 July 2026</p>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-6 py-16 grid lg:grid-cols-4 gap-12">
        {/* Table of Contents — sticky sidebar */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-[#16244b] mb-4">Contents</h3>
            <nav className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-gray-500 hover:text-cyan-500 transition-colors leading-6"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="lg:col-span-3 space-y-16">
          <p className="text-gray-500 leading-8">
            de tempête ("De Tempête", "we", "us", "our") is a global finance,
            accounting, tax, payroll and advisory firm operating in the United
            Arab Emirates, the United Kingdom, the Kingdom of Saudi Arabia,
            Bangladesh, Estonia and the United States of America. This
            Privacy Policy explains how we collect, use, disclose, transfer
            and protect personal data when you visit detempete.com (the
            "Website"), contact us, request a consultation, or engage our
            services.
          </p>

          {/* 1. Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              We are committed to processing personal data in accordance
              with the data protection laws applicable in each jurisdiction
              in which we operate, including: the UAE Federal Decree-Law No.
              45 of 2021 on the Protection of Personal Data (UAE PDPL); the
              UK General Data Protection Regulation and the Data Protection
              Act 2018 (UK GDPR), together with the Privacy and Electronic
              Communications Regulations 2003 (PECR); the Saudi Personal
              Data Protection Law issued by Royal Decree No. M/19 of 2021,
              as amended (KSA PDPL); the Bangladesh Personal Data
              Protection Ordinance 2025, as amended (BD PDPO); Regulation
              (EU) 2016/679 (EU GDPR), which applies to our operations in
              Estonia; and applicable United States federal and state
              privacy laws, including state consumer privacy acts and the
              CAN-SPAM Act.
            </p>
            <p className="text-gray-600 leading-8">
              By using the Website or providing personal data to us, you
              acknowledge that you have read and understood this Privacy
              Policy.
            </p>
          </section>

          {/* 2. Data Controller */}
          <section id="data-controller" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              2. Who We Are — Data Controller
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              de tempête and its affiliated entities act as the data
              controller of personal data collected through the Website and
              in the course of providing our services. Where we process
              client data solely on a client's instructions (for example,
              employee payroll data processed on behalf of a client), we
              act as a data processor and the client remains the
              controller.
            </p>
            <p className="text-gray-600 leading-8 mb-4 font-semibold text-[#16244b]">
              You can contact us regarding this Privacy Policy at:
            </p>
            <div className="space-y-3">
              {[
                "Email: info@detempete.com",
                "UK Office: 115 London Road, Morden, SM4 5HP, United Kingdom — +44 7831 848639",
                "UAE Office: 601-31, Business Village Block B, Clock Tower Roundabout, Port Saeed, Deira, Dubai, United Arab Emirates",
                "Bangladesh Office: Bashati Xclusive, Flat B4, House 06, Road 07, Niketon, Dhaka 1212, Bangladesh — +880 1953 335155",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                  <span className="text-gray-600">{line}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Personal Data We Collect */}
          <section id="data-we-collect" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              3. Personal Data We Collect
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              We collect the following categories of personal data:
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "Contact and identity data",
                  desc: "name, job title, company name, email address, telephone number, postal address, and any information you include in messages to us",
                },
                {
                  title: "Enquiry and consultation data",
                  desc: "information you submit through our contact form, free-consultation request form, or when booking a consultation (including via third-party scheduling tools such as Calendly)",
                },
                {
                  title: "Client engagement data",
                  desc: "financial, accounting, tax, payroll, corporate and transactional information provided in connection with our engagements, which may include identification documents required for client due diligence and anti-money-laundering (AML/KYC) checks",
                },
                {
                  title: "Technical data",
                  desc: "IP address, browser type, device identifiers, pages visited, and usage data collected through cookies and similar technologies when you use the Website",
                },
                {
                  title: "Marketing preference data",
                  desc: "your preferences in receiving marketing communications from us, and records of consents given or withdrawn",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-[#16244b] mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-8 mt-6">
              We do not intentionally collect sensitive personal data (such
              as health, biometric or religious data) through the Website.
              Where an engagement requires processing of sensitive data, we
              will do so only where permitted by applicable law.
            </p>
          </section>

          {/* 4. How We Collect */}
          <section id="how-we-collect" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              4. How We Collect Personal Data
            </h2>
            <div className="space-y-4">
              {[
                "Directly from you — when you complete forms on the Website, request a consultation, email or call us, or engage our services.",
                "Automatically — through cookies and analytics tools when you browse the Website.",
                "From third parties — such as your employer (where you are a client contact), publicly available registers, referral partners, and identity-verification providers used for AML/KYC purposes.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                  <span className="text-gray-600 leading-7">{line}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Purposes and Legal Bases */}
          <section id="purposes" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              5. Purposes and Legal Bases of Processing
            </h2>
            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-[#F5F6F8]">
                  <tr>
                    <th className="text-left p-4 font-bold text-[#16244b]">Purpose</th>
                    <th className="text-left p-4 font-bold text-[#16244b]">Examples</th>
                    <th className="text-left p-4 font-bold text-[#16244b]">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  {purposesTable.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="p-4 text-gray-700 font-medium align-top">{row.purpose}</td>
                      <td className="p-4 text-gray-500 align-top">{row.examples}</td>
                      <td className="p-4 text-gray-500 align-top">{row.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-8 mt-6">
              Where UAE PDPL, KSA PDPL or BD PDPO applies, we rely on your
              consent or another lawful basis recognised under those laws
              (including contractual necessity and compliance with legal
              obligations).
            </p>
          </section>

          {/* 6. Marketing */}
          <section id="marketing" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              6. Use of Your Contact Information for Marketing
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              Where you provide us with your contact information (such as
              your name, email address or telephone number) — for example
              through our contact form, consultation booking, newsletter
              sign-up, or in the course of becoming a client — we may use
              that contact information to send you marketing
              communications. These may include newsletters, updates on our
              services, tax and regulatory alerts, event invitations and
              promotional offers relating to de tempête's services.
            </p>
            <p className="text-gray-600 leading-8 mb-6">
              We will do this only where you have consented to receive
              marketing communications, or, where permitted by applicable
              law, where you are an existing client and the communication
              relates to services similar to those you have engaged us for
              (the "soft opt-in" under UK PECR and equivalent rules). In
              jurisdictions that require prior consent for direct marketing
              — including the UAE, Saudi Arabia and Bangladesh — we will
              send marketing communications only with your consent.
            </p>
            <p className="text-gray-600 leading-8 mb-4 font-semibold text-[#16244b]">
              You may opt out of marketing communications at any time, free
              of charge, by:
            </p>
            <div className="space-y-3 mb-6">
              {[
                'clicking the "unsubscribe" link in any marketing email we send;',
                'emailing us at info@detempete.com with the subject "Unsubscribe"; or',
                "contacting any of our offices listed in Section 2.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                  <span className="text-gray-600">{line}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-8">
              Opting out of marketing does not affect communications
              necessary for the performance of our services (such as
              engagement letters, invoices and service notices), nor the
              lawfulness of processing carried out before your withdrawal
              of consent. We do not sell your personal data, and we do not
              share your contact information with third parties for their
              own marketing purposes.
            </p>
          </section>

          {/* 7. Sharing */}
          <section id="sharing" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              7. Sharing of Personal Data
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              We may share personal data with:
            </p>
            <div className="space-y-3">
              {[
                "our group entities and offices in the UAE, UK, KSA, Bangladesh, Estonia and USA, for the purposes described in this Policy;",
                "service providers acting on our behalf — including IT and cloud hosting providers, email and marketing platforms, scheduling tools (e.g. Calendly), analytics providers and professional software vendors — under contracts requiring them to protect your data;",
                "professional advisers such as lawyers, auditors, banks and insurers, where necessary;",
                "regulators, tax authorities, courts and law-enforcement agencies where disclosure is required by law; and",
                "a purchaser or successor in the event of a merger, acquisition or restructuring, subject to appropriate safeguards.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                  <span className="text-gray-600 leading-7">{line}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 8. International Transfers */}
          <section id="international-transfers" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              8. International Data Transfers
            </h2>
            <p className="text-gray-600 leading-8">
              Because we operate across multiple jurisdictions, your
              personal data may be transferred to and processed in
              countries other than the country in which it was collected.
              Where we transfer personal data internationally, we apply the
              safeguards required by the applicable law, including:
              adequacy decisions or UK/EU Standard Contractual Clauses (and
              the UK International Data Transfer Addendum) for transfers
              out of the UK and Estonia; the transfer conditions of the UAE
              PDPL; the cross-border transfer rules issued under the KSA
              PDPL (including SDAIA transfer regulations); and the transfer
              provisions of the BD PDPO. Where required, we will obtain
              your consent for a transfer or implement contractual
              protections with the recipient.
            </p>
          </section>

          {/* 9. Retention */}
          <section id="retention" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              9. Data Retention
            </h2>
            <p className="text-gray-600 leading-8">
              We retain personal data only as long as necessary for the
              purposes described in this Policy, and thereafter as required
              by law. Accounting, tax and AML records are typically
              retained for the statutory minimum periods applicable in the
              relevant jurisdiction (generally between 5 and 10 years).
              Marketing contact data is retained until you opt out or until
              it is no longer needed, after which it is deleted or
              anonymised. Where you opt out of marketing, we may retain a
              minimal suppression record to ensure we respect your
              preference.
            </p>
          </section>

          {/* 10. Security */}
          <section id="security" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              10. Security
            </h2>
            <p className="text-gray-600 leading-8">
              We implement appropriate technical and organisational
              measures to protect personal data against unauthorised
              access, alteration, disclosure, loss or destruction,
              including access controls, encryption in transit, staff
              confidentiality obligations and vendor due diligence. No
              method of transmission or storage is completely secure; if we
              become aware of a personal data breach affecting your rights,
              we will notify the competent authority and, where required,
              you, in accordance with applicable law.
            </p>
          </section>

          {/* 11. Your Rights */}
          <section id="your-rights" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              11. Your Rights
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              Subject to the law applicable to you, you have rights which
              may include:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "The right to be informed about how your data is processed",
                "The right to access your personal data and obtain a copy",
                "The right to rectification of inaccurate or incomplete data",
                "The right to erasure (deletion) of your data",
                "The right to restrict or object to processing, including an absolute right to object to direct marketing",
                "The right to data portability",
                "The right to withdraw consent at any time, without affecting prior processing",
                "The right not to be subject to solely automated decisions producing legal or similarly significant effects",
              ].map((line, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-600 text-sm leading-6">{line}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-8 mb-10">
              To exercise any right, contact us at info@detempete.com. We
              may need to verify your identity before responding. We will
              respond within the timeframe required by the applicable law
              (for example, one month under the UK/EU GDPR). You will not
              be charged a fee unless permitted by law.
            </p>

            <h3 className="text-xl font-bold text-[#16244b] mb-4">Complaints</h3>
            <p className="text-gray-600 leading-8">
              You may lodge a complaint with the supervisory authority
              applicable to you: the UAE Data Office (UAE); the Information
              Commissioner's Office, ico.org.uk (UK); the Saudi Data &
              Artificial Intelligence Authority — SDAIA (KSA); the
              authority designated under the Personal Data Protection
              Ordinance (Bangladesh); the Estonian Data Protection
              Inspectorate — Andmekaitse Inspektsioon (Estonia); or your
              state Attorney General / the Federal Trade Commission (USA).
              We would appreciate the opportunity to address your concerns
              first.
            </p>
          </section>

          {/* 12. US Residents */}
          <section id="us-residents" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              12. United States Residents
            </h2>
            <p className="text-gray-600 leading-8">
              If you are a resident of a US state with a consumer privacy
              law (such as California, Colorado, Connecticut, Texas or
              Virginia), you may have rights to know, access, correct,
              delete, and obtain a copy of your personal information, and
              to opt out of targeted advertising, "sale" or "sharing" of
              personal information. de tempête does not sell personal
              information and does not share it for cross-context
              behavioural advertising. We do not discriminate against you
              for exercising your rights. Our marketing emails comply with
              the CAN-SPAM Act: they identify us as the sender, include our
              contact details, and contain a functioning unsubscribe
              mechanism which we honour promptly.
            </p>
          </section>

          {/* 13. Cookies */}
          <section id="cookies" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              13. Cookies
            </h2>
            <p className="text-gray-600 leading-8">
              The Website uses cookies and similar technologies. Essential
              cookies are necessary for the Website to function.
              Non-essential cookies (such as analytics and marketing
              cookies) are used only with your consent where required by
              law, which you can give or withdraw through your browser
              settings or any cookie banner displayed on the Website.
              Disabling cookies may affect Website functionality.
            </p>
          </section>

          {/* 14. Third-Party Links */}
          <section id="third-party" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              14. Third-Party Links and Tools
            </h2>
            <p className="text-gray-600 leading-8">
              The Website may contain links to third-party websites and
              embedded tools (such as Calendly for consultation booking).
              Those third parties operate under their own privacy policies,
              which we encourage you to review. We are not responsible for
              their processing of your personal data.
            </p>
          </section>

          {/* 15. Children */}
          <section id="children" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              15. Children
            </h2>
            <p className="text-gray-600 leading-8">
              Our services and the Website are directed at businesses and
              adults. We do not knowingly collect personal data from
              children under 18. If you believe a child has provided us
              with personal data, please contact us and we will delete it.
            </p>
          </section>

          {/* 16. Changes */}
          <section id="changes" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              16. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-8">
              We may update this Privacy Policy from time to time. The
              updated version will be posted on this page with a revised
              "Last updated" date. Material changes will be notified
              through the Website or, where appropriate, by email.
            </p>
          </section>

          {/* 17. Contact Us */}
          <section id="contact" className="scroll-mt-24 bg-[#16244B] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              17. Contact Us
            </h2>
            <p className="text-slate-300 leading-8 mb-6">
              For questions, requests or complaints regarding this Privacy
              Policy or our handling of your personal data, contact:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@detempete.com"
                className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                info@detempete.com
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-cyan-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Contact Our Offices
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;