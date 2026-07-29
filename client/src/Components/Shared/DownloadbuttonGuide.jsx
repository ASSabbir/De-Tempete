import { useState } from 'react';
import API from '../../api/axios';
import logo from '../../asstes/img_temp/logo1.webp';

export default function DownloadButtonGuide({ guideKey, label = 'Download Now' }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      setError('Name, email and phone are required');
      return;
    }
    if (!agreed) {
      setError('Please agree to the Terms & Conditions and Privacy Policy');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const { data } = await API.post('/business-setup-leads', {
        ...form,
        guide: guideKey,
      });
      window.open(data.downloadUrl, '_blank', 'noopener,noreferrer');
      setOpen(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#081B57] text-white px-10 py-5 rounded-xl text-lg font-medium hover:bg-[#10297c] transition duration-300 shadow-lg"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0d1526] border border-[#1e2d4a] rounded-xl w-full max-w-md p-8">
            <img src={logo} alt="de tempête" className="h-9 mb-6" />

            <h2 className="text-2xl font-bold text-white mb-2">
              Access Premium Resource
            </h2>
            <p className="text-base text-gray-300 mb-6">
              Fill the form below to download the guide.
            </p>

            {error && (
              <div className="bg-red-500/15 text-red-300 text-base rounded-md px-3 py-2 mb-4">
                {error}
              </div>
            )}

            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-[#1c2333] border border-[#2d3650] rounded-md px-4 py-3 text-white text-base mb-3 placeholder-gray-400 focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[#1c2333] border border-[#2d3650] rounded-md px-4 py-3 text-white text-base mb-3 placeholder-gray-400 focus:outline-none"
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-[#1c2333] border border-[#2d3650] rounded-md px-4 py-3 text-white text-base mb-5 placeholder-gray-400 focus:outline-none"
            />

            <label className="flex items-start gap-2 text-xs text-gray-300 mb-5 cursor-pointer leading-relaxed">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (error) setError('');
                }}
                className="mt-0.5 accent-[#22b8e0] cursor-pointer"
              />
              <span>
                I agree to the{' '}
                <a href="/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-[#38d1e8] underline">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#38d1e8] underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <div className="flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-3 rounded-md border border-[#2d3650] text-gray-300 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading || !agreed}
                className="flex-1 py-3 rounded-md bg-gradient-to-r from-[#38d1e8] to-[#22b8e0] text-[#0a1220] font-bold disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Download'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}