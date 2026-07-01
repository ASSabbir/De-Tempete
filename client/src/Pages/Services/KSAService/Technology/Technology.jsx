import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
const softwareItems = [
  "System Setup & Custom Configuration",
  "UAE VAT-Compliant Invoicing & Reporting",
  "Chart of Accounts Structuring",
  "Data Import, Migration & Backup",
  "Staff Training & Post-Implementation Support",
];

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
    desc: "Ensure your digital systems follow UAE regulations, maintain data accuracy, and stay free from operational risks.",
  },
];

const whyChoose = [
  {
    title: "Expert-Led Technology Advisory",
    desc: "We bring deep knowledge of cloud accounting, ERP systems, and automation tailored to UAE business needs.",
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
    title: "UAE VAT & Compliance Ready",
    desc: "All setups are aligned with local regulations, so your reporting stays accurate and audit-proof.",
  },
];

const Technology = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
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
            Empowering UAE businesses with smarter, faster, and fully automated
            financial systems
            <br />
            <br />
            At de tempête, we help businesses move beyond manual work and
            embrace technology that saves time, reduces errors, and brings
            complete clarity to financial operations. Whether you're a startup
            or a growing enterprise, our tech-driven solutions streamline your
            accounting, compliance, and day-to-day workflows—so you operate with
            precision and confidence.
          </>
        }
      />

      <StatsSection
        stats={[
          { icon: CalendarDays, end: 0, label: "Years of Experience" },
          { icon: Globe, end: 0, label: "Countries Covered" },
          {
            icon: Handshake,
            end: 1027,
            duration: 2500,
            label: "Clients Served",
          },
          { icon: Medal, end: 4, label: "Awards Received" },
        ]}
      />

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
          <div className="grid lg:grid-cols-3 gap-10">
            {cloudCards.map((c, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <LuChartNoAxesCombined className="text-cyan-500 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Software <span className="font-normal">Implementation</span>
            </h2>
            <p className="mt-4 text-gray-500">
              We implement and customize accounting and ERP software so you can
              operate with precision and stay 100% compliant with UAE standards.
            </p>
          </div>
          <div className="space-y-3">
            {softwareItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center px-5 py-4"
              >
                <span className="w-8 h-8 bg-cyan-400 rounded-md flex items-center justify-center text-white mr-4">
                  ◆
                </span>
                <span className="text-[#16244b] font-semibold text-sm flex-1">
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
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {whyChoose.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8">
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
            Start Your UAE
            <br />
            Expansion <span className="font-bold">Today</span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your UAE presence with confidence."
        commitmentItems={[
          "Free initial tax consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "Region-specific tax experts",
          "Transparent and practical advice tailored to your needs",
        ]}
      />

      <RecentBlogs blogs={blogPosts} />
    </div>
  );
};

export default Technology;
