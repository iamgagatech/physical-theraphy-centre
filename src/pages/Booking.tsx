import React, { useState } from "react";
import { CheckCircle, Shield, Clock, Calendar, Send } from "lucide-react";
import { SEO } from "../components/SEO";
import { Button } from "../components/Button";
import { services } from "../data/mockData";

import { sendBookingEmail } from "../lib/emailService";
import { trackEvent } from "../lib/analytics";

export const Booking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await sendBookingEmail(formData);

      if (response.success) {
        setIsSubmitted(true);
        window.scrollTo(0, 0);
        trackEvent('submit_booking', {
          service: formData.service,
          location: 'Lagos Island'
        });
      } else {
        alert('There was an issue sending your request. Please call us directly at +234 800 123 4567.');
      }
    } catch (err) {
      console.error('Booking submission error:', err);
      alert('Network error. Please try again or call the clinic.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4 py-20">
        <div className="max-w-xl w-full text-center space-y-8 bg-white p-12 rounded-3xl shadow-soft border border-gray-100">
          <div className="h-20 w-20 bg-brand-teal/20 text-brand-teal rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-3xl font-bold">Booking Request Received</h1>
          <p className="text-brand-gray text-lg">
            Thank you for choosing Physical Therapy Centre. A member of our clinical team will call you within 2 business hours to confirm your appointment time and discuss next steps.
          </p>
          <div className="p-6 bg-slate-50 rounded-2xl text-left space-y-4">
            <h3 className="font-bold text-brand-navy">What's Next?</h3>
            <ul className="space-y-3 text-sm text-brand-gray">
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-brand-navy text-white text-[10px] flex items-center justify-center mt-0.5">1</div>
                <span>Initial call from our clinic manager</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-brand-navy text-white text-[10px] flex items-center justify-center mt-0.5">2</div>
                <span>Confirmation of date and time via email</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-brand-navy text-white text-[10px] flex items-center justify-center mt-0.5">3</div>
                <span>Arrival instruction and digital intake form</span>
              </li>
            </ul>
          </div>
          <Button onClick={() => window.location.href = '/'} variant="outline" className="w-full">
            Return to Homepage
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Book an Appointment | Physical Therapy Centre Lagos"
        description="Schedule your clinical assessment at Lagos Island's leading physiotherapy clinic. Fast booking, expert care."
      />

      <div className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Form Section */}
            <div className="lg:w-3/5 w-full bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-gray-100">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Schedule Your Assessment</h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Full Name</label>
                    <input
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Phone Number</label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+234..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Email Address</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Primary Concern</label>
                    <select
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s.id} value={s.slug}>{s.title}</option>
                      ))}
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Preferred Date</label>
                    <input
                      required
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Additional Clinical Notes (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Briefly describe your symptoms or goals..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    variant="secondary"
                    className="w-full py-4 text-lg font-bold"
                  >
                    Confirm Booking Request <Send className="ml-2" size={20} />
                  </Button>
                </div>

                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
                  Secure & Confidential clinical intake
                </p>
              </form>
            </div>

            {/* Info Section */}
            <div className="lg:w-2/5 w-full space-y-8">
              <div className="bg-brand-navy text-white p-8 rounded-3xl">
                <h2 className="text-2xl font-bold mb-6">Why Patients Choose Us</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Shield className="text-brand-teal shrink-0" size={24} />
                    <div>
                      <p className="font-bold">Evidence-Led Approach</p>
                      <p className="text-sm text-gray-400">Clinical protocols backed by modern research.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="text-brand-teal shrink-0" size={24} />
                    <div>
                      <p className="font-bold">60-Minute Assessment</p>
                      <p className="text-sm text-gray-400">We take the time to understand your condition deeply.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Calendar className="text-brand-teal shrink-0" size={24} />
                    <div>
                      <p className="font-bold">Fast Turnaround</p>
                      <p className="text-sm text-gray-400">Bookings confirmed within 2 business hours.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <h3 className="font-bold mb-4">Location & Contact</h3>
                <div className="space-y-3 text-sm text-brand-gray">
                  <p>12B Admiralty Way, Victoria Island, Lagos Island.</p>
                  <p><strong>Phone:</strong> +234 800 123 4567</p>
                  <p><strong>Email:</strong> info@ptcentrelagos.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
