import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    bottlenecks: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', bottlenecks: '' });
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-forest/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="bg-bloom border border-celadon max-w-md w-full rounded-lg shadow-premium relative z-10 overflow-hidden noise-bg animate-fade-in">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-forest/50 hover:text-forest transition-colors p-1.5 rounded-full hover:bg-forest/5 cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-8">
            {/* Header */}
            <div className="mb-6">
              <span className="font-mono text-[10px] tracking-widest text-emerald font-semibold uppercase block mb-1">
                Access Intake
              </span>
              <h3 className="font-display text-2xl text-forest font-medium">
                Request System Diagnosis
              </h3>
              <p className="font-ui text-xs text-black/50 mt-1">
                We accept a limited number of organizations each quarter. No sales pitches, just operations engineering.
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="font-mono text-[10px] tracking-wider text-forest/70 block mb-1.5 uppercase font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-celadon/80 focus:border-emerald focus:outline-none px-4 py-2.5 rounded-sm font-ui text-sm text-forest"
                  placeholder="e.g. Sarah Okonkwo"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] tracking-wider text-forest/70 block mb-1.5 uppercase font-medium">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-celadon/80 focus:border-emerald focus:outline-none px-4 py-2.5 rounded-sm font-ui text-sm text-forest"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] tracking-wider text-forest/70 block mb-1.5 uppercase font-medium">
                  Organization
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border border-celadon/80 focus:border-emerald focus:outline-none px-4 py-2.5 rounded-sm font-ui text-sm text-forest"
                  placeholder="Meridian Capital Group"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] tracking-wider text-forest/70 block mb-1.5 uppercase font-medium">
                  Operational Bottlenecks (Optional)
                </label>
                <textarea
                  name="bottlenecks"
                  rows="3"
                  value={formData.bottlenecks}
                  onChange={handleChange}
                  className="w-full bg-white border border-celadon/80 focus:border-emerald focus:outline-none px-4 py-2.5 rounded-sm font-ui text-sm text-forest resize-none"
                  placeholder="Describe your current manual tasks or system fragmentation..."
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-forest text-bloom font-display text-xs font-semibold tracking-widest py-3.5 rounded-sm hover:bg-emerald hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-55"
            >
              {loading ? 'TRANSMITTING...' : 'REQUEST SYSTEM DIAGNOSIS'}
            </button>
          </form>
        ) : (
          <div className="p-8 text-center flex flex-col items-center py-12">
            <div className="w-12 h-12 bg-emerald/10 border border-emerald/20 text-emerald rounded-full flex items-center justify-center mb-6">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl text-forest font-medium mb-3">
              Transmission Received
            </h3>
            <p className="font-ui text-sm text-black/60 leading-relaxed max-w-sm mb-6">
              Your diagnostic intake profile has been logged. An operations engineer will review your environment and contact you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="bg-forest text-bloom font-display text-xs font-semibold tracking-widest px-8 py-3 rounded-sm hover:bg-emerald hover:text-white transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
