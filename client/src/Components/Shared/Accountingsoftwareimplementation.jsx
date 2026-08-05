

const complianceChecks = [
  {
    title: 'VAT scheme validation',
    description: 'Standard, Flat Rate, or Cash Accounting confirmed against your actual setup.',
  },
  {
    title: 'HMRC MTD API connection test',
    description: 'Verified live before go live, not assumed.',
  },
  {
    title: 'Companies House filing format check',
    description: 'Compatibility confirmed where applicable.',
  },
];
import logo from '../../asstes/img_temp/logo.webp'
import SharedFullButton from './SharedFullButton';

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AccountingSoftwareImplementation = ({features}) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl">
          
          <h2 className="text-4xl 2xl:text-5xl font-bold text-[#081B57] mt-3 leading-tight">
            Accounting Software Implementation Service
          </h2>
          <p className="mt-6 text-base text-gray-600 leading-relaxed">
            From choosing the right platform to getting your team fully trained on it —
            we handle the entire setup so your accounting software works for you from day one.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#57D3EB]/40 hover:shadow-md transition duration-300"
            >
              <div className="w-9 h-9 rounded-full  text-[#57D3EB] flex items-center justify-center mb-4">
                <img src={logo} alt="" />
              </div>
              <h3 className="font-bold text-[#081B57] text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance checks */}
        

        {/* CTA */}
        <div className="mt-14 text-center">
          
          <SharedFullButton text={'Get Started Now'} path={'/contact'}></SharedFullButton>
        </div>
      </div>
    </section>
  );
};

export default AccountingSoftwareImplementation;