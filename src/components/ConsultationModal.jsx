import React, { useState } from 'react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company_name: '',
    'custom_fields_data[company-size_1]': '',
    'custom_fields_data[estimated-budget_3]': ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (isOpen && !isSubmitted && window.grecaptcha) {
      const renderCaptcha = () => {
        try {
          const container = document.getElementById('recaptcha-container');
          if (container) {
            container.innerHTML = ''; // Clear previous
            window.grecaptcha.render('recaptcha-container', {
              'sitekey': '6LeiP8wsAAAAABtE-2mKghtDVWTGKRKS3ZiMg4cI',
              'theme': 'dark'
            });
          }
        } catch (error) {
          console.log('Captcha render error:', error);
        }
      };
      
      setTimeout(renderCaptcha, 500);
    }
  }, [isOpen, isSubmitted]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    const response = window.grecaptcha ? window.grecaptcha.getResponse() : '';
    
    if (!response) {
      e.preventDefault();
      setError('Please verify that you are not a robot.');
      return;
    }

    setError('');
    setIsSubmitting(true);
    
    // The form will submit to the iframe in the background
    // We wait 2 seconds to give it time before showing success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#0B0F1A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Hidden Iframe for CORS-free submission */}
        <iframe 
          name="crm_submission_frame" 
          style={{ display: 'none' }} 
          title="crm_submission"
        />

        <div className="p-8 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-blue-600/10 to-transparent">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Initiate Strategy Session</h2>
            <p className="text-gray-400 text-sm">Tell us about your project goals</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-12 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Request Sent!</h3>
            <p className="text-gray-400 text-lg mb-8">Your details have been successfully transmitted to our consulting team. We will reach out within 24 hours.</p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form 
            action="https://crm.alphabusi.com/lead-form/leadStore" 
            method="POST"
            target="crm_submission_frame"
            onSubmit={handleSubmit}
            className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar"
          >
            {/* CRM Hidden Fields */}
            <input type="hidden" name="company_id" value="1" />
            <input type="hidden" name="category_id" value="2" />
            
            {/* Mirror fields to satisfy CRM validation and multiple storage patterns */}
            <input type="hidden" name="company-size" value={formData['custom_fields_data[company-size_1]']} />
            <input type="hidden" name="estimated-budget" value={formData['custom_fields_data[estimated-budget_3]']} />
            
            {/* Alternative patterns for custom fields */}
            <input type="hidden" name="custom_fields_data[1]" value={formData['custom_fields_data[company-size_1]']} />
            <input type="hidden" name="custom_fields_data[3]" value={formData['custom_fields_data[estimated-budget_3]']} />
            <input type="hidden" name="custom_fields_data[lead_1]" value={formData['custom_fields_data[company-size_1]']} />
            <input type="hidden" name="custom_fields_data[lead_3]" value={formData['custom_fields_data[estimated-budget_3]']} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Company Name</label>
              <input
                type="text"
                name="company_name"
                required
                value={formData.company_name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="Acme Corp"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Company Size</label>
              <select
                name="custom_fields_data[company-size_1]"
                value={formData['custom_fields_data[company-size_1]']}
                onChange={handleChange}
                className="w-full bg-[#1A1F2E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              >
                <option value="">Select Size</option>
                <option value="1-10">1-10 Employees</option>
                <option value="11-50">11-50 Employees</option>
                <option value="51-200">51-200 Employees</option>
                <option value="201-500">201-500 Employees</option>
                <option value="500+">500+ Employees</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Estimated Budget</label>
              <select
                name="custom_fields_data[estimated-budget_3]"
                value={formData['custom_fields_data[estimated-budget_3]']}
                onChange={handleChange}
                className="w-full bg-[#1A1F2E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              >
                <option value="">Select Budget Range</option>
                <option value="0">$10k</option>
                <option value="1">$10k - $50k</option>
                <option value="2">$50k - $100k</option>
                <option value="3">$100k - $500k</option>
                <option value="4">$500k +</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex flex-col items-center gap-4">
            {error && (
              <p className="text-red-500 text-sm font-medium bg-red-500/10 px-4 py-2 rounded-lg w-full text-center">
                {error}
              </p>
            )}
            
            {/* ReCaptcha Widget */}
            <div id="recaptcha-container"></div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform ${!isSubmitting && 'hover:scale-[1.02] active:scale-[0.98]'}`}
            >
              {isSubmitting ? 'Transmitting Details...' : 'Initiate Strategy Session'}
            </button>
            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
          </form>
        )}
      </div>
    </div>
  );
}
