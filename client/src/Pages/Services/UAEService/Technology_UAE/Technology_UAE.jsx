// File: Technology_UAE.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { LuSparkles, LuChartNoAxesCombined } from "react-icons/lu";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const industries = ["Retail & E-commerce", "Real Estate & Construction", "Logistics & Trading", "Manufacturing & Distribution", "Healthcare & Clinics", "Hospitality & F&B", "Professional Services & Consulting", "Education & Training Providers"];

const whyChoose = [
  { title: "Certified Partners", desc: "Certified Zoho and Odoo partners with experienced UAE-based consultants." },
  { title: "Complete Implementation", desc: "End-to-end e-invoicing setup with system configuration to FTA-aligned reporting." },
  { title: "Arabic & English Support", desc: "Bilingual support for businesses across Dubai, Abu Dhabi, Sharjah, and all UAE emirates." },
  { title: "Industry-Specific Solutions", desc: "Customized e-invoicing workflows for retail, real estate, healthcare, and service businesses." },
  { title: "Compliance Support", desc: "Ongoing updates and support aligned with evolving UAE e-invoicing regulations." },
  { title: "Flexible Pricing", desc: "Transparent pricing and scalable packages for startups, SMEs, and enterprise businesses." },
];

const processSteps = [
  { title: "Discovery & Assessment", desc: "We audit your current invoicing process, ERP setup, and compliance gaps." },
  { title: "Solution Design", desc: "We recommend the right platform (Zoho or Odoo) and configuration based on your size, sector, growth plans." },
  { title: "Implementation & Configuration", desc: "VAT modules, e-invoicing settings, Peppol integration, and templates set up to UAE standards." },
  { title: "Data Migration", desc: "Clean, secure transfer of your customer, supplier, and historical invoice data." },
  { title: "Testing & Training", desc: "Real-world testing followed by hands-on training for your team." },
  { title: "Go-Live & Support", desc: "Smooth rollout backed by ongoing managed support." },
];

const partners = ["QuickBooks", "Taxcalc"];

const Technology_UAE = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
          alt="UAE E-Invoicing Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d2f67]/70"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            UAE E-Invoicing Solutions With
            <br />
            <span className="text-[#4AC4DE]">Zoho & Odoo</span>
          </h1>
          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            Stay compliant with upcoming UAE e-invoicing regulations with de tempête's certified Zoho and Odoo
            implementation services. We help businesses automate invoicing, configure VAT-ready systems, integrate
            with the Peppol-based framework, and meet FTA compliance requirements through bilingual invoice
            templates, secure workflows, and ongoing support tailored for SMEs, startups, and enterprise businesses.
          </p>
          <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-[#4AC4DE] hover:border-[#4AC4DE] hover:text-black duration-300">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F5F6F8] py-10">
        <div className="max-w-8xl mx-auto px-30">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div>
              <h2 className="text-[#14224A] text-2xl lg:text-3xl font-bold">Why Choose Us?</h2>
            </div>
            <div className="flex items-center gap-5">
              <CalendarDays size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={0} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Globe size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={0} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Countries Covered</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Handshake size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={935} duration={2500} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Clients Served</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Medal size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={3} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Awards Received</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is E-Invoicing */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-[#16244b]">
            What Is <span className="font-bold">E-Invoicing In The UAE?</span>
          </h2>
          <p className="mt-6 text-gray-500 leading-7">
            E-invoicing in the UAE is the structured digital exchange of invoices between suppliers, buyers, and the
            Federal Tax Authority (FTA) in a machine-readable format that can be validated, transmitted, and securely
            stored electronically. The UAE Ministry of Finance has announced a phased rollout of mandatory
            e-invoicing under the Peppol 5-corner model, requiring businesses to issue VAT invoices in structured
            electronic formats such as XML/UBL, transmit invoices through accredited Peppol Access Points, maintain
            secure audit trails and archiving. As compliance requirements continue to evolve, businesses across the
            UAE need reliable accounting and ERP systems that are fully prepared for the new digital invoicing
            framework.
          </p>
        </div>
      </section>

      {/* Zoho */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/UK/Global-business-strategy-in-focus.webp"
            alt="Zoho E-Invoicing Solutions In UAE"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">Zoho E-Invoicing <span className="font-light">Solutions In UAE</span></h2>
            <p className="mt-5 text-gray-500 leading-7">
              Zoho Books and Zoho Invoice help UAE businesses automate invoicing, streamline VAT processes, and
              prepare for upcoming e-invoicing requirements through a flexible cloud-based accounting system.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">What we deliver with Zoho:</h4>
            <div className="space-y-3">
              {["Zoho Books implementation with VAT and e-invoicing modules configured", "Custom invoice templates in Arabic and English", "Integration with Peppol Access Points for compliant transmission", "Automated workflows for approvals, recurring invoices, and credit notes", "Real-time dashboards for VAT liability, receivables, and audit-readiness", "Migration from legacy systems (Tally, QuickBooks, Zoho to Excel)"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              <span className="font-bold italic text-[#16244b]">Best suited for:</span> Small to mid-sized businesses, service providers, e-commerce sellers, consultants, and growing startups looking for a cloud-first, cost-effective solution.
            </p>
          </div>
        </div>
      </section>

      {/* Odoo */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">Odoo E-Invoicing <span className="font-light">Solutions In UAE</span></h2>
            <p className="mt-5 text-gray-500 leading-7">
              Odoo is a powerful, modular ERP that scales with your business. For UAE companies needing tight
              integration between invoicing, inventory, manufacturing, and CRM, Odoo is hard to beat.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">What we deliver with Odoo:</h4>
            <div className="space-y-3">
              {["Odoo ERP implementation (Community & Enterprise editions)", "UAE-localized accounting & VAT modules", "E-invoicing module setup aligned with FTA and Peppol requirements", "Custom development for industry-specific invoicing workflows", "Integration with banking, payment gateway, POS, and warehouse systems", "Training and post-go-live support for your finance team"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              <span className="font-bold italic text-[#16244b]">Best suited for:</span> Small to mid-sized businesses, service providers, e-commerce sellers, consultants, and growing startups looking for a cloud-first, cost-effective solution.
            </p>
          </div>
          <img
            src="/src/asstes/Images/servics/UK/UK-tax-compliance-workspace-concept.webp"
            alt="Odoo E-Invoicing Solutions In UAE"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Our E-Invoicing <span className="font-bold">Implementation Process</span>
            </h2>
            <p className="mt-4 text-gray-500">A clear, proven approach — no surprises.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-14 mt-16">
            {processSteps.map((item, index) => (
              <div key={index}>
                <LuSparkles className="text-3xl text-slate-500 mb-4" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Industries <span className="font-bold">We Serve</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-16">
            {industries.map((item, index) => (
              <div key={index} className="relative h-40 rounded-2xl overflow-hidden group">
                <img
                  src="/src/asstes/Images/servics/UK/Global-business-strategy-in-focus.webp"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500"
                  alt={item}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-sm">{item}</h3>
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
              Why Choose Our <span className="font-bold">Technolgy Services</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-16">
            {whyChoose.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <LuChartNoAxesCombined className="text-cyan-400 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl leading-tight font-light text-white">
                Get UAE E-Invoicing<br />Ready <span className="font-bold">Today</span>
              </h2>
              <p className="mt-8 text-cyan-400 text-lg font-semibold leading-9 max-w-xl">
                Serving Dubai - Abu Dhabi - Sharjah - Ajman - Ras Al Khaimah - Fujairah - Umm Al Quwain
              </p>
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <h3 className="text-xl font-bold text-white mb-4">Our Commitment</h3>
                <div className="space-y-3">
                  {["Free initial consultation — no obligation", "100% confidentiality and secure handling of FTA data", "Region-specific tax experts", "Transparent and practical advice tailored to your needs"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-4xl font-bold text-[#16244B] mb-8">Book a Free Consultation</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Name</label>
                    <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Message</label>
                    <textarea rows={5} placeholder="Write your message..." className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-cyan-400" />
                  </div>
                  <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-4 rounded-lg transition duration-300">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technological Partner */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-[#16244b] mb-16">
            Technological <span className="font-bold">Partner</span>
          </h2>
          <div className="flex justify-center gap-20 items-center opacity-80">
            {partners.map((p, i) => (
              <span key={i} className="text-gray-500 font-semibold text-lg">{p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology_UAE;