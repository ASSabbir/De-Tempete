import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import logo from '../../../../asstes/img_temp/logo.webp'
const softwareItems = [
  "System Setup & Custom Configuration",
  "KSA VAT-Compliant Invoicing & Reporting",
  "Chart of Accounts Structuring",
  "Data Import, Migration & Backup",
  "Staff Training & Post-Implementation Support",
];
import tableau from "../../../../asstes/img_temp/New folder/9-1.webp";
import sage from "../../../../asstes/img_temp/New folder/3-2.webp";
import a from "../../../../asstes/img_temp/New folder/11-1.webp";
import b from "../../../../asstes/img_temp/New folder/12-1-934x1024.webp";
import c from "../../../../asstes/img_temp/New folder/7-2.webp";
import d from "../../../../asstes/img_temp/New folder/8.webp";
import e from "../../../../asstes/img_temp/New folder/13-1.webp";
import f from "../../../../asstes/img_temp/New folder/6-1.webp";
import g from "../../../../asstes/img_temp/New folder/2.webp";

const logos = [tableau, sage, a, b, c, d, e, f, g];
import { motion } from "framer-motion";

const cloudCards = [
  {
    title: "Systems Integration (CRM, Inventory, Banking)",
    desc: "Connect all your business tools to create a unified ecosystem with seamless data flow.",
  },
  {
    title: "Real-Time Dashboards & Analytics",
    desc: "Gain instant financial visibility with live reports, KPIs, and analytics tailored to your business.",
  },
  {
    title: "Compliance & System Risk Review",
    desc: "Ensure your digital systems follow KSA regulations, maintain data accuracy, and stay free from operational risks.",
  },
];

const whyChoose = [
  {
    title: "Expert-Led Technology Advisory",
    desc: "We bring deep knowledge of cloud accounting, ERP systems, and automation tailored to KSA business needs.",
  },
  {
    title: "End-to-End Implementation",
    desc: "From platform selection to full deployment, we handle every step with precision and clarity.",
  },
  {
    title: "Customized Workflows",
    desc: "Your systems are configured around your processes — ensuring smoother operations and faster decision-making.",
  },
  {
    title: "KSA VAT & Compliance Ready",
    desc: "All setups are aligned with local regulations, so your reporting stays accurate and audit-proof.",
  },
];

const Technology = () => {
  const id = 'services-ksa-technology'
  return (
    <div className="w-full">
      <HeroSection
        id={id}
        bgImage={bg}
        alt="Automation and Digital Transformation KSA"
        heading={
          <>
            Powering Your Business With
            <br />
            <span className="text-light-blue">Intelligent Automation</span>
          </>
        }
        description={
          <>
            Empowering KSA businesses with smarter, faster, and fully automated
            financial systems
            <br />

            At <span className="italic font-bold">de tempête</span>, we help businesses move beyond manual work and
            embrace technology that saves time, reduces errors, and brings
            complete clarity to financial operations. Whether you're a startup
            or a growing enterprise, our tech-driven solutions streamline your
            accounting, compliance, and day-to-day workflows—so you operate with
            precision and confidence.
          </>
        }
      />

      <SecondSection></SecondSection>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Cloud Accounting, ERP & Digital Operations
              <br />
              <span className="font-normal">Advisory</span>
            </h2>

            <p className="mt-5 text-gray-500">
              We help businesses shift from manual work to fully automated,
              cloud-powered financial systems. Our advisory ensures you choose
              the right tools, streamline workflows, and build a digital setup
              that supports accuracy, speed, and long-term scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cloudCards.map((c, i) => {
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

                  {/* Title */}
                  <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed text-justify ${isDark ? "text-gray-700" : "text-gray-500"
                      }`}
                  >
                    {c.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Software <span className="">Implementation</span>
            </h2>
            <p className="mt-4 text-gray-500">
              We implement QuickBooks, Xero, Odoo, Zoho and customize accounting software so you can operate with precision and stay 100% compliant with KSA standards.
            </p>
          </div>
          <div className="space-y-3">
            {softwareItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center px-5 py-4"
              >
                <span className="w-8 h-8  rounded-md flex items-center justify-center text-white mr-4">
                  <img src={logo} alt="" />
                </span>
                <span className="text-[#16244b] font-semibold text-base flex-1">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Why Choose Our{" "}
              <span className="font-normal">Technolgy Services</span>
            </h2>

            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyChoose.map((f, i) => {
              const isDark = i === 0 || i === 3;

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

                  {/* Title */}
                  <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
                    {f.title}
                  </h3>

                  {/* Description */}
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


      {/* Technological Partner Section */}

      <section className="pt-15 bg-white overflow-hidden">
        <div className=" mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-light text-[#16244B] mb-20">
            Technological <span className="font-bold">Partner</span>
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex items-center"
              style={{
                animation: "scrollLefts 15s linear infinite",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="shrink-0 ">
                  <img
                    src={logo}
                    alt="Partner"
                    className="h-60 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <style>{`
      @keyframes scrollLefts {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `}</style>
        </div>
      </section>
      <ConsultationCTA
        id={id}
        heading={
          <>
            Start Your KSA
            <br />
            Expansion <span className="font-bold">Today</span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your KSA presence with confidence."
        commitmentItems={[
          "Free initial tax consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "Region-specific tax experts",
          "Transparent and practical advice tailored to your needs",
        ]}
      />


    </div>
  );
};

export default Technology;
