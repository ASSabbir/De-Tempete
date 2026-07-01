import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";

const payrollPoints = ["Salary processing support", "Payroll record organization", "Employee compensation coordination", "Payslip preparation support", "Workforce data organization", "Payroll reporting assistance"];

const qiwaPoints = ["Qiwa coordination support", "GOSI documentation assistance", "Employee registration support", "Workforce compliance tracking", "Employee data management", "Compliance documentation support"];

const empDocPoints = ["Employment contract support", "Employee file management", "HR documentation organization", "Staff onboarding coordination", "Attendance & leave tracking", "Workforce administration support"];

const gains = ["Organized Workforce Operations", "Improved Payroll Accuracy", "Better HR Documentation", "Stronger Compliance Coordination", "Smoother Employee Management", "More Efficient HR Processes"];

const whyChoose = [
  { title: "KSA Workforce Compliance Understanding", desc: "Support aligned with Saudi workforce regulations and operational requirements." },
  { title: "Organized Payroll Operations", desc: "Helping businesses maintain structured payroll and employee management systems." },
  { title: "Efficient HR Administration", desc: "Improving workforce coordination and operational efficiency." },
  { title: "Scalable Business Support", desc: "Flexible HR and payroll solutions for startups, SMEs, and growing enterprises." },
  { title: "Structured Workforce Processes", desc: "Supporting smoother employee management and documentation workflows." },
  { title: "Long-Term Operational Stability", desc: "Building HR systems that support sustainable business growth." },
];

const HR_Payroll_Solutions = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="HR & Payroll Solutions KSA"
        heading={<>Streamline Your HR & Payroll<br /><span className="text-light-blue">In The Saudi Arabia</span></>}
        description="de tempête provides HR and payroll solutions in Saudi Arabia, helping businesses improve workforce management, payroll accuracy, and employee compliance through structured operational support."
      />

      <StatsSection stats={[
        { icon: CalendarDays, end: 0, label: "Years of Experience" },
        { icon: Globe, end: 0, label: "Countries Covered" },
        { icon: Handshake, end: 935, duration: 2500, label: "Clients Served" },
        { icon: Medal, end: 3, label: "Awards Received" },
      ]} />

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src="/src/asstes/Images/servics/KSA/freepik__hr-and-payroll-image-for-website-section-no-text__26468.webp" alt="HR & Payroll Management Support" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">HR & Payroll Management<br /><span className="font-normal">Support For Businesses</span></h2>
            <p className="mt-5 text-gray-500 leading-7">Managing employees, payroll operations, and workforce compliance requires organized systems and efficient operational processes. Businesses in Saudi Arabia must maintain accurate payroll records, salary coordination, and workforce documentation to support smooth day-to-day operations.</p>
            <p className="mt-3 text-gray-500 leading-7"><span className="font-semibold text-gray-700">de tempête</span> supports businesses across Saudi Arabia with HR and payroll services designed to improve operational efficiency, workforce organization, and compliance management.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Payroll Processing &<br /><span className="font-normal">Employee Management</span></h2>
            <p className="mt-5 text-gray-500">Accurate payroll management helps businesses maintain operational consistency and improve employee management processes. <span className="font-semibold text-gray-700">de tempête</span> provides payroll processing support services in Saudi Arabia designed to help businesses manage salary operations efficiently and maintain organized payroll records.</p>
            <p className="mt-3 font-semibold text-gray-700">Our Services Include</p>
            <div className="space-y-3 mt-6">
              {payrollPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/src/asstes/Images/servics/KSA/freepik__hr-outsourcing-image-for-website-section__98146.webp" alt="Payroll Processing & Employee Management" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src="/src/asstes/Images/servics/KSA/freepik__employe-recorder-peo-services-for-website-section-__98148.webp" alt="Qiwa, GOSI & Workforce Compliance Coordination" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Qiwa, GOSI & Workforce<br /><span className="font-normal">Compliance Coordination</span></h2>
            <p className="mt-5 text-gray-500">Businesses in Saudi Arabia must maintain workforce compliance through proper coordination with platforms such as Qiwa and GOSI. <span className="font-semibold text-gray-700">de tempête</span> assists businesses with workforce compliance support designed to improve employee record management and maintain organized operational coordination.</p>
            <p className="mt-3 font-semibold text-gray-700">Our Support Includes</p>
            <div className="space-y-3 mt-6">
              {qiwaPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Employee Documentation &<br /><span className="font-normal">HR Administration</span></h2>
            <p className="mt-5 text-gray-500">Organized HR documentation helps businesses improve workforce visibility and maintain structured employee management systems. <span className="font-semibold text-gray-700">de tempête</span> supports businesses in Saudi Arabia with HR documentation and employee record management designed to improve operational organization and administrative efficiency.</p>
            <p className="mt-3 font-semibold text-gray-700">Our Services Include</p>
            <div className="space-y-3 mt-6">
              {empDocPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/src/asstes/Images/servics/KSA/freepik__workforce-compliance-advisory-for-website-section-__26469.webp" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
        </div>
      </section>

      <section className="py-24 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">What You Gain?</h2>
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6 mb-14" />
          <div className="grid lg:grid-cols-3 gap-6">
            {gains.map((g, i) => (
              <div key={i} className="bg-[#37456B] rounded-lg py-6 px-4 text-white font-medium">{g}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">Why Choose <span className="font-normal italic">de tempête</span> for HR & Payroll Solutions?</h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChoose.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-[#16244b] mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={<>Build A More Organized<br />Workforce <span className="font-bold">System</span></>}
        subheading="de tempête helps businesses in Saudi Arabia improve payroll, workforce coordination, and HR operations through structured support systems."
        commitmentItems={["Payroll management support", "Workforce coordination", "HR documentation systems", "Compliance-focused operations"]}
      />

      <RecentBlogs blogs={[
        { id: 1, image: "/src/asstes/Images/New folder/council-tax.webp", title: "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide", desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to" },
        { id: 2, image: "/src/asstes/Images/New folder/self-assessment-tax-return.webp", title: "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity", desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process," },
        { id: 3, image: "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp", title: "The Role and Benefits of a Virtual CFO in Modern Businesses", desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual" },
      ]} />
    </div>
  );
};

export default HR_Payroll_Solutions;