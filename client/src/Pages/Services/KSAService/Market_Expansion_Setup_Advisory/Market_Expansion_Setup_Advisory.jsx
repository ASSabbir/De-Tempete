import { CalendarDays, Globe, Handshake, Medal, ChevronDown } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";


const setupCards = [
  { title: "MISA Licensed Foreign Entity", desc: "The primary entry point for international entities entering Saudi Arabia.", points: ["100% foreign ownership (eligible sectors)", "MISA investment license approval", "Access to Saudi market operations", "Required for legal foreign presence", "Enables CR registration process", "Suitable for most industries"], img: "/src/asstes/Images/servics/KSA/Tax-Compliance-Regulatory-Support.webp" },
  { title: "Saudi LLC (Limited Liability Company)", desc: "A fully operational local entity structure for long-term business activity.", points: ["Locally registered Saudi company", "Flexible ownership structure", "Physical office requirement", "Suitable for trading & services", "Employee visa eligibility", "Full regulatory compliance"], img: "/src/asstes/Images/servics/KSA/Financial-Reporting-Document-KSA.webp" },
  { title: "Branch of Foreign Company", desc: "Expand your existing global company directly into Saudi Arabia.", points: ["No separate legal entity required", "Operate under parent company", "Suitable for contracts & projects", "Requires MISA approval", "Limited to parent company activities", "Strong for established businesses"], img: "/src/asstes/Images/servics/KSA/Branch-of-Foreign-Company-1.webp" },
  { title: "Regional Headquarters (RHQ)", desc: "Establish a regional strategic base within Saudi Arabia.", points: ["Required for government contracts (in many cases)", "Incentives for multinational companies", "Strengthens regional positioning", "Supports regional operations", "Compliance with RHQ program policies", "Long-term strategic presence"], img: "/src/asstes/Images/servics/KSA/Tax-Compliance-Regulatory-Support.webp" },
];

const marketPositionCards = [
  { title: "Position Your Business for the Saudi Market", desc: "We define where your business sits within the Saudi landscape, aligning demand, competition, and pricing strategy to ensure a strong and confident market entry." },
  { title: "Localize Your Model for Compliance & Culture", desc: "We adapt your business model to Saudi regulations, cultural expectations, and ensure your operations integrate seamlessly within the local ecosystem." },
  { title: "Build Scalable Market Access & Operations", desc: "We structure your sales channels, partnerships, and internal operations to support sustainable growth while meeting Saudi compliance requirements from day one." },
];

const exportReadinessItems = [
  { title: "Assessing Market Entry Readiness & Risk Exposure", desc: "We evaluate your business model against Saudi market conditions, regulatory exposure, and operational risk factors before you commit resources." },
  { title: "MISA Licensing & Regulatory Roadmap Planning", desc: "A structured roadmap covering MISA licensing requirements, timelines, and dependencies to keep your setup on track." },
  { title: "Commercial Registration (CR) & Legal Structuring", desc: "Guidance on Commercial Registration, legal entity structuring, and documentation required to operate compliantly in Saudi Arabia." },
  { title: "Qiwa, GOSI & ZATCA Platform Registrations Support", desc: "End-to-end support registering and activating your business across mandatory Saudi government platforms." },
  { title: "Scalable Growth Strategy for Long-Term Expansion", desc: "We design your operational and market strategy to scale sustainably as your Saudi presence matures." },
];

const investorVisaCards = [
  { title: "Investor & Partner Visa Processing", icon: FaCheckCircle },
  { title: "Dependent Visa Sponsorship", icon: FaCheckCircle },
  { title: "Emirates ID & Medical Coordination", icon: FaCheckCircle },
  { title: "Visa Renewals And Compliance", icon: FaCheckCircle },
];

const whyChooseUs = [
  { title: "Complete Setup Expertise", desc: "We handle your full Saudi business setup from licensing to search, ensuring a smooth and compliant process." },
  { title: "MISA & Regulatory Knowledge", desc: "Strong understanding of MISA and Saudi regulations ensures fully compliant setup." },
  { title: "Strategic Market Entry", desc: "We position your business for strong entry and long-term growth in the Saudi market." },
  { title: "Faster Approvals", desc: "Efficient processes and expert handling keep speed up approvals and reduce delays." },
  { title: "Industry-Focused Solutions", desc: "Tailored setup strategies aligned with your industry and business goals." },
  { title: "Ongoing Compliance Support", desc: "Continuous support to ensure your business stays aligned with Saudi regulatory requirements." },
];

const Market_Expansion_Setup_Advisory = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Business Setup KSA"
        heading={<>Establish Your Business Presence<br /><span className="text-light-blue">In Saudi Arabia The Right Way</span></>}
        description="Expanding into Saudi Arabia requires strategic alignment with regulatory frameworks, local compliance, and market dynamics. At de tempête, we guide you through the complete Saudi market entry process, from MISA licensing to operational setup, ensuring a smooth, compliant, and scalable business presence."
        ctaText="Enter Saudi with confidence"
      />

      <StatsSection stats={[
        { icon: CalendarDays, end: 0, label: "Years of Experience" },
        { icon: Globe, end: 0, label: "Countries Covered" },
        { icon: Handshake, end: 918, duration: 2500, label: "Clients Served" },
        { icon: Medal, end: 3, label: "Awards Received" },
      ]} />

      {/* Business Setup & Registration */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-6">
            <h2 className="text-5xl font-bold text-[#13264d]">Business Setup & <span className="font-normal">Registration</span></h2>
            <p className="mt-4 text-light-blue font-semibold">From entity formation to licensing, we simplify every stage of your KSA business setup.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {setupCards.map((c, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-56">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold">{c.title}</h3>
                    <p className="text-gray-200 text-sm">{c.desc}</p>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-2 gap-3">
                  {c.points.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">We handle your complete Saudi business setup journey with a structured, compliant, and efficient approach, from licensing to full operational readiness.</p>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg transition duration-300">Explore Complete Business Setup Service Guide →</button>
          </div>
        </div>
      </section>

      {/* Market Position Cards (icon only style) */}
      <section className="py-20 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-3 gap-12 text-center">
          {marketPositionCards.map((c, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold text-[#16244b] mb-3">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-6">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Export Readiness Accordion */}
      <section className="py-24 bg-[#16244B]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-light text-white"><span className="font-bold">Export Readiness,</span> Trade<br />Compliance & Logistics Advisory</h2>
            <p className="mt-6 text-gray-300">Prepare your business to operate successfully in Saudi Arabia with the right compliance, operational planning, and expansion strategy.</p>
          </div>
          <div className="space-y-4">
            {exportReadinessItems.map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg overflow-hidden bg-[#1c2c5c]">
                <button className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="flex items-center gap-3 text-white font-semibold text-sm"><span className="text-cyan-400">◆</span>{item.title}</span>
                  <ChevronDown size={18} className="text-gray-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Account Opening */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src="/src/asstes/Images/servics/Ksa/Regional-Headquarters-RHQ3.webp" alt="Bank Account Opening" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Bank Account <span className="font-normal">Opening Assistance</span></h2>
            <p className="mt-5 text-gray-500">A corporate bank account is essential to activate your business operations in Saudi Arabia.</p>
            <p className="mt-3 font-semibold text-gray-700">We support you with:</p>
            <div className="space-y-3 mt-6">
              {["Corporate bank account coordination", "Compliance-based documentation preparation", "Banking partner alignment", "Capital deposit assistance", "End-to-end account activation"].map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trademark Registration */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Trademark <span className="font-normal">Registration & IP<br />Protection</span></h2>
            <p className="mt-5 text-gray-500">Secure your brand identity in Saudi Arabia with structured trademark registration and intellectual property protection.</p>
            <p className="mt-3 font-semibold text-gray-700">Our support includes:</p>
            <div className="space-y-3 mt-6">
              {["Trademark search & registration in Saudi Arabia", "Intellectual property protection strategy", "Legal documentation & filings", "Brand protection within the Saudi market"].map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/src/asstes/Images/servics/Ksa/freepik__plain-blank-closeup-of-trademark-certificate-gold-__58646 (1).webp" alt="Trademark Registration" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Investor Visa & Residency */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src="/src/asstes/Images/servics/Ksa/Investor-Visa-Saudi.webp" alt="Investor Visa & Residency" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Investor Visa & Saudi<br />Residency Support</h2>
            <p className="mt-5 text-gray-500">Ensure smooth relocation and workforce setup with complete visa and residency support in Saudi Arabia.</p>
            <p className="mt-3 font-semibold text-gray-700">We support you with:</p>
            <div className="space-y-3 mt-6">
              {["Investor visa processing", "General manager visa support", "Employee visa & Iqama processing", "Residency compliance & documentation"].map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Visa & UAE Residency Support (icon cards, per screenshot text as-is) */}
      <section className="py-24 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white">Investor <span className="font-bold">Visa & UAE Residency</span> Support</h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">Secure your place in the UAE with seamless investor and residency visa assistance. Our specialists manage all documentation and applications to ensure smooth visa processing for investors, employees, and dependents.</p>
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6" />
          <div className="grid lg:grid-cols-4 gap-6 mt-14">
            {investorVisaCards.map((c, i) => (
              <div key={i} className="bg-[#37456B] rounded-2xl py-10 px-6">
                <div className="w-14 h-14 bg-cyan-400/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <c.icon className="text-cyan-400 text-2xl" />
                </div>
                <h3 className="text-white font-semibold">{c.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Saudi Market Expansion Advisory */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">Why Choose Our Saudi Market <span className="font-normal">Expansion Advisory</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChooseUs.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-[#16244b] mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={<>Start Your UAE<br />Expansion <span className="font-bold">Today</span></>}
        subheading="Get expert guidance, avoid costly delays, and build your UAE presence with confidence."
        commitmentItems={["Free initial tax consultation — no obligation", "100% confidentiality and secure handling of data", "Region-specific tax experts", "Transparent and practical advice tailored to your needs"]}
      />

      <RecentBlogs blogs={[
        { id: 1, image: "/src/asstes/Images/New folder/council-tax.webp", title: "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide", desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to" },
        { id: 2, image: "/src/asstes/Images/New folder/self-assessment-tax-return.webp", title: "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity", desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process," },
        { id: 3, image: "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp", title: "The Role and Benefits of a Virtual CFO in Modern Businesses", desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual" },
      ]} />
    </div>
  );
};

export default Market_Expansion_Setup_Advisory;