// File: src/Pages/Legal/TermsConditions.jsx
import { Link } from "react-router";

const sections = [
  { id: "definitions", label: "1. Definitions and Interpretation" },
  { id: "about-us", label: "2. Information About Us" },
  { id: "business-nature", label: "2A. Business Nature" },
  { id: "contact", label: "3. How to Contact Us" },
  { id: "access", label: "4. Access to Our Site" },
  { id: "site-changes", label: "5. Changes to Our Site" },
  { id: "terms-changes", label: "6. Changes to the Terms" },
  { id: "ip-rights", label: "7. How You May Use Our Site and Content" },
  { id: "links-to-us", label: "8. Links to Our Site" },
  { id: "links-to-others", label: "9. Links to Other Sites" },
  { id: "disclaimers", label: "10. Disclaimers" },
  { id: "liability", label: "11. Our Liability" },
  { id: "misuse", label: "12. Website Misuse" },
  { id: "security", label: "13. Viruses, Malware, and Security" },
  { id: "acceptable-use", label: "14. Acceptable Usage of Our Site" },
  { id: "cookies", label: "15. Cookie Policy" },
  { id: "personal-info", label: "16. How We Use Your Personal Information" },
  { id: "communications", label: "17. Communications from Us" },
  { id: "law-jurisdiction", label: "18. Law and Jurisdiction" },
];

const definitionsTable = [
  {
    term: "Content",
    meaning:
      "means any and all text, images, audio, video, scripts, code, software, databases, and any other form of information capable of being stored on a computer that appears on or forms part of Our Site",
  },
  {
    term: "We / Us / Our",
    meaning: "means de tempête",
  },
];

const businessServices = [
  "Accounting outsourcing (Accounting BPO) and bookkeeping",
  "Payroll and human capital management",
  "Tax, VAT, and compliance advisory services",
  "Business setup, including company formation, licensing, and entity incorporation in Bangladesh, UAE, UK, and other jurisdictions",
  "Virtual CFO and financial management services",
  "Business advisory, including due diligence, valuation, investment-readiness support, and financial reporting",
  "Back-office outsourcing and other professional advisory services",
];

const misuseItems = [
  "Copying, reproducing, distributing, or commercially exploiting any Content without our permission",
  "Scraping, data mining, automated data collection, or similar activities",
  "Attempting to bypass or interfere with security features",
  "Impersonating de tempête or misrepresenting your affiliation with Us",
  "Using Our Site in any way that may damage, disable, or impair the website or our services",
  "Using Our Site to upload or transmit harmful, illegal, or unauthorised content",
];

const breachActions = [
  "Suspend or terminate your right to use Our Site",
  "Issue you with a written warning",
  "Take legal proceedings against you for reimbursement of any and all relevant costs on an indemnity basis resulting from your breach",
  "Take further legal action against you, as appropriate",
  "Disclose such information to law enforcement authorities as required or as We deem reasonably necessary",
  "Any other actions which We deem reasonably appropriate (and lawful)",
];

const cookiePurposes = [
  "Improve your browsing experience",
  "Analyse website performance and traffic",
  "Remember your preferences",
  "Provide relevant content and improve our services",
];

const TermsConditions = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-[#16244B] py-20">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Terms & <span className="text-cyan-400">Conditions</span>
          </h1>
          <p className="mt-4 text-slate-300">
            Please read our terms and conditions
          </p>
          <p className="mt-1 text-slate-400 text-sm">
            V1.1 — Last edited: 20 July 2026
          </p>
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
            The Website Terms and Conditions (the "Terms"), together with
            any other documents referred to herein, set out the terms of use
            governing your use of this website, (detempete.com) ("Our
            Site"). It is recommended that you print a copy of the Terms for
            future reference.
          </p>
          <p className="text-gray-500 leading-8 -mt-12">
            Your agreement to comply with the Terms is indicated by your use
            of Our Site. If you do not agree to the Terms, you must stop
            using Our Site immediately.
          </p>

          {/* 1. Definitions */}
          <section id="definitions" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              1. Definitions and Interpretation
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              In the Terms, unless the context otherwise requires, the
              following expressions have the following meanings:
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-[#F5F6F8]">
                  <tr>
                    <th className="text-left p-4 font-bold text-[#16244b]">Expression</th>
                    <th className="text-left p-4 font-bold text-[#16244b]">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {definitionsTable.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="p-4 text-gray-700 font-semibold align-top whitespace-nowrap">
                        "{row.term}"
                      </td>
                      <td className="p-4 text-gray-500 align-top">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 2. About Us */}
          <section id="about-us" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              2. Information About Us
            </h2>
            <p className="text-gray-600 leading-8">
              Our Site is owned and operated by de tempête. de tempête is
              registered in Bangladesh, the United Arab Emirates, and the
              United Kingdom.
            </p>
          </section>

          {/* 2A. Business Nature */}
          <section id="business-nature" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              2A. Business Nature
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              de tempête is a global professional services firm providing a
              range of corporate and financial services to businesses and
              organizations. Our services include:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {businessServices.map((item, i) => (
                <div key={i} className="flex items-start gap-3 border border-gray-200 rounded-xl p-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span className="text-gray-600 text-sm leading-6">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-8">
              These services are primarily aimed at startups, SMEs,
              investors, and corporate clients. The use of Our Site and the
              services provided are intended for business users only.
            </p>
          </section>

          {/* 3. Contact */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              3. How to Contact Us
            </h2>
            <p className="text-gray-600 leading-8">
              To contact Us, please email Us at info@detempete.com.
            </p>
          </section>

          {/* 4. Access to Our Site */}
          <section id="access" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              4. Access to Our Site
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              Our Site and the Content is for business users only. The
              Content does not apply to individual consumers as Our services
              are not offered for personal use (that is, not in connection
              with, or for use in, their trade, business, craft, or
              profession).
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              Access to Our Site is free of charge.
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              It is your responsibility to make the arrangements necessary
              to access Our Site.
            </p>
            <p className="text-gray-600 leading-8">
              Access to Our Site is provided on an "as is" and on an "as
              available" basis. We may suspend or discontinue Our Site (or
              any part of it) at any time. We do not guarantee that Our
              Site will always be available or that access to it will be
              uninterrupted.
            </p>
          </section>

          {/* 5. Changes to Our Site */}
          <section id="site-changes" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              5. Changes to Our Site
            </h2>
            <p className="text-gray-600 leading-8">
              We may alter and update Our Site (or any part of it) at any
              time.
            </p>
          </section>

          {/* 6. Changes to the Terms */}
          <section id="terms-changes" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              6. Changes to the Terms
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              We may alter the Terms at any time. As explained above, your
              use of Our Site constitutes your acceptance of the Terms.
              Consequently, any changes made to the Terms will apply to
              your use of Our Site the first time you use it after the
              changes have been implemented. You are therefore advised to
              check this page every time you use Our Site.
            </p>
            <p className="text-gray-600 leading-8">
              If any part of the current version of the Terms conflicts
              with any previous version(s), the current version shall
              prevail unless We explicitly state otherwise.
            </p>
          </section>

          {/* 7. IP Rights */}
          <section id="ip-rights" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              7. How You May Use Our Site and Content (Intellectual Property
              Rights)
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              All Content included on Our Site and the copyright and other
              intellectual property rights in that Content belongs to or
              has been licensed by Us, unless specifically labelled
              otherwise. All Content is protected by applicable national
              and international intellectual property laws and treaties.
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              You may access, view, and use Our Site in a web browser
              (including any web browsing capability built into other types
              of software or app) and you may download Our Site (or any
              part of it) for caching (this usually occurs automatically).
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              You may print copies and download extracts of any page(s)
              from Our Site.
            </p>
            <p className="text-gray-600 leading-8">
              Our status as the owner and author of the Content on Our Site
              (or that of identified licensors, as applicable) must always
              be acknowledged.
            </p>
          </section>

          {/* 8. Links to Our Site */}
          <section id="links-to-us" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              8. Links to Our Site
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              Links to Our Site must be fair and lawful. You must not take
              unfair advantage of Our reputation or attempt to damage Our
              reputation.
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              You must not link to Our Site in a manner that suggests any
              association with Us (where there is none) or any endorsement
              or approval from Us (where there is none).
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              Your link should not use any logos or trade marks displayed
              on Our Site without Our express written permission.
            </p>
            <p className="text-gray-600 leading-8">
              You must not frame or embed Our Site on another website
              without Our express written permission.
            </p>
          </section>

          {/* 9. Links to Other Sites */}
          <section id="links-to-others" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              9. Links to Other Sites
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              Links to other websites may be included on Our Site. Unless
              expressly stated, these sites are not under Our control. We
              accept no responsibility or liability for the content of
              third-party websites.
            </p>
            <p className="text-gray-600 leading-8">
              The inclusion of a link to another website on Our Site is for
              information purposes only and does not imply any endorsement
              of that website or of its owners, operators, or any other
              parties involved with it.
            </p>
          </section>

          {/* 10. Disclaimers */}
          <section id="disclaimers" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              10. Disclaimers
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              Nothing on Our Site constitutes professional advice on which
              you should rely. It is provided for general information
              purposes only.
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              We make reasonable efforts to ensure that the Content on Our
              Site is complete, accurate, and up to date, but We make no
              warranties, representations, or guarantees (express or
              implied) that this will always be the case.
            </p>
            <p className="text-gray-600 leading-8">
              If you are a business user, We exclude all implied
              representations, warranties, conditions, and other terms
              that may apply to Our Site and Content.
            </p>
          </section>

          {/* 11. Liability */}
          <section id="liability" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              11. Our Liability
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              Nothing in the Terms excludes or restricts Our liability for
              fraud or fraudulent misrepresentation, for death or personal
              injury resulting from negligence, or for any other forms of
              liability which cannot be lawfully excluded or restricted.
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              To the fullest extent permissible by law, We accept no
              liability for any loss or damage, whether foreseeable or
              otherwise, in contract, tort (including negligence), for
              breach of statutory duty, or otherwise, arising out of or in
              connection with the use of (or inability to use) Our Site or
              the use of or reliance upon any Content included on Our Site.
            </p>
            <p className="text-gray-600 leading-8">
              We accept no liability for loss of profit, sales, business,
              or revenue; loss of business opportunity, goodwill, or
              reputation; loss of anticipated savings; business
              interruption; or for any indirect or consequential loss or
              damage.
            </p>
          </section>

          {/* 12. Website Misuse */}
          <section id="misuse" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              12. Website Misuse
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              You must not misuse Our Site. Misuse includes, but is not
              limited to:
            </p>
            <div className="space-y-3 mb-6">
              {misuseItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                  <span className="text-gray-600 leading-7">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-8">
              We reserve the right to restrict or terminate access for any
              misuse.
            </p>
          </section>

          {/* 13. Viruses, Malware, and Security */}
          <section id="security" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              13. Viruses, Malware, and Security
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              We exercise reasonable skill and care to ensure that Our Site
              is secure and free from viruses and malware; however, We do
              not guarantee that this is the case.
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              You are responsible for protecting your hardware, software,
              data, and other material from viruses, malware, and other
              internet security risks.
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              You must not deliberately introduce viruses or other malware,
              or any other material which is malicious or technologically
              harmful either to or via Our Site.
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              You must not attempt to gain unauthorised access to any part
              of Our Site, the server on which Our Site is stored, or any
              other server, computer, or database connected to Our Site.
            </p>
            <p className="text-gray-600 leading-8 mb-6">
              You must not attack Our Site by means of a denial of service
              attack, a distributed denial of service attack, or by any
              other means.
            </p>
            <div className="bg-[#F5F6F8] rounded-xl p-6">
              <p className="text-gray-600 leading-7 text-sm">
                By breaching the provisions above, you may be committing a
                criminal offence under applicable computer misuse
                legislation. Any and all such breaches will be reported to
                the relevant law enforcement authorities and We will
                cooperate fully with those authorities by disclosing your
                identity to them. Your right to use Our Site will cease
                immediately in the event of such a breach.
              </p>
            </div>
          </section>

          {/* 14. Acceptable Usage */}
          <section id="acceptable-use" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              14. Acceptable Usage of Our Site
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              You may only use Our Site in a lawful manner:
            </p>
            <div className="space-y-3 mb-8">
              {[
                "You must ensure that you comply fully with any and all local, national, or international laws and regulations that apply",
                "You must not use Our site in any way, or for any purpose, that is unlawful or fraudulent",
                "You must not use Our Site to knowingly send, upload, or in any other way transmit data that contains any form of virus or other malware or any other code designed to adversely affect computer hardware, software, or data of any kind",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                  <span className="text-gray-600 leading-7">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-8 mb-4">
              If you fail to comply with the provisions of this Part 14,
              you will be in breach of the Terms. We may take one or more
              of the following actions in response:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {breachActions.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-600 text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-8">
              We hereby exclude any and all liability arising out of any
              actions that We may take (including, but not limited to
              those set out above) in response to your breach.
            </p>
          </section>

          {/* 15. Cookie Policy */}
          <section id="cookies" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              15. Cookie Policy
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              Our Site uses cookies and similar technologies to:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {cookiePurposes.map((item, i) => (
                <div key={i} className="flex items-start gap-3 border border-gray-200 rounded-xl p-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span className="text-gray-600 text-sm leading-6">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-8 mb-4">
              Cookies do not give Us access to your device or any personal
              information other than the data you choose to share.
            </p>
            <p className="text-gray-600 leading-8 mb-4">
              You can choose to accept or refuse cookies. Most web browsers
              automatically accept cookies, but you can modify your
              browser settings to decline cookies if you prefer.
            </p>
            <p className="text-gray-600 leading-8">
              For more details on how We collect and use data, please
              refer to Our{" "}
              <Link to="/privacy-policy" className="text-cyan-500 font-semibold hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* 16. Personal Information */}
          <section id="personal-info" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              16. How We Use Your Personal Information
            </h2>
            <p className="text-gray-600 leading-8">
              We will only use your personal information as set out in Our{" "}
              <Link to="/privacy-policy" className="text-cyan-500 font-semibold hover:underline">
                Privacy Policy
              </Link>
              , available from our website in the footer, (detempete.com).
              Our use and sharing of your personal information for
              marketing purposes is subject to the express consent
              requirements set out in Part 17 and in Our Privacy Policy.
            </p>
          </section>

          {/* 17. Communications */}
          <section id="communications" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16244b] mb-6">
              17. Communications from Us
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              If We have your contact details, We may send you important
              notices by email from time to time. Such notices may relate
              to matters including, but not limited to, changes to Our
              Site or to the Terms.
            </p>
            <p className="text-gray-600 leading-8 mb-6">
              We will not send you marketing emails without your express
              consent. If you do consent to marketing, you may opt out at
              any time. All marketing emails from Us include an
              un-subscribe link. If you opt out of emails from Us, it may
              take up to 8 days for your request to take effect and you
              may continue to receive emails during that time.
            </p>

            <div className="border border-gray-200 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-[#16244b] mb-3">
                Marketing Consent and Data Sharing Acknowledgment
              </h4>
              <p className="text-gray-600 leading-7 text-sm mb-4">
                Where you provide Us with your contact information and
                basic business information (for example, when submitting
                an enquiry or engaging Our services), We will ask for your
                express acknowledgment — by way of an unticked opt-in box
                or a signed consent statement — that you agree that We may
                use that information for marketing purposes and share it
                with selected third-party marketing partners, as described
                in Our Privacy Policy.
              </p>
              <p className="text-gray-600 leading-7 text-sm">
                Providing this acknowledgment is optional and is not a
                condition of accessing Our Site or receiving Our services.
                You may withdraw your acknowledgment at any time using the
                contact details in Part 3 or the unsubscribe link in any
                marketing email. We maintain a record of each
                acknowledgment (including its date and wording) for
                compliance purposes.
              </p>
            </div>

            <p className="text-gray-600 leading-8">
              For questions or complaints about communications from Us,
              please contact Us using the details above in Part 3.
            </p>
          </section>

          {/* 18. Law and Jurisdiction */}
          <section id="law-jurisdiction" className="scroll-mt-24 bg-[#16244B] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              18. Law and Jurisdiction
            </h2>
            <p className="text-slate-300 leading-8 mb-4">
              These Terms, and any disputes or claims arising out of or in
              connection with them, shall be governed by and construed in
              accordance with the laws of the United Arab Emirates (UAE),
              where de tempête's head office is located.
            </p>
            <p className="text-slate-300 leading-8 mb-6">
              Any dispute, controversy, proceedings, or claim arising out
              of or relating to these Terms shall be subject to the
              exclusive jurisdiction of the courts of the UAE.
            </p>
            <p className="text-slate-300 leading-8 mb-8">
              This choice of law and jurisdiction does not limit any
              mandatory rights that you may have under the applicable laws
              of other countries in which de tempête is registered or
              provides services (such as Bangladesh and the UK).
            </p>
            <a
            
              href="mailto:info@detempete.com"
              className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              info@detempete.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;