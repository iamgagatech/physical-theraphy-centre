import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShieldCheck, Users, Clock, Star } from "lucide-react";
import { Button } from "../components/Button";
import { SEO, JSONLD, localBusinessSchema } from "../components/SEO";
import { services, testimonials } from "../data/mockData";

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Physical Therapy Lagos Island | Recover Without Surgery"
        description="Lagos Island's premier physiotherapy clinic specializing in evidence-led rehabilitation, chronic pain management, and long-term recovery without surgery."
      />
      <JSONLD data={localBusinessSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center rounded-full bg-brand-teal/10 px-3 py-1 text-sm font-semibold text-brand-teal mb-4">
                  Evidence-Based Clinical Care
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-navy">
                  Reclaim Your Life <br />
                  <span className="text-brand-teal">Without Surgery.</span>
                </h1>
                <p className="mt-6 text-lg text-brand-gray max-w-lg leading-relaxed">
                  We specialize in long-term recovery for chronic pain and sports injuries using advanced clinical movement and neuro-science protocols.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link to="/booking">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Schedule Consultation
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Our Services
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
                      ))}
                    </div>
                    <div className="text-sm">
                      <div className="flex text-yellow-500 mb-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <span className="font-medium">500+ Recovered Patients</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2069&auto=format&fit=crop"
                  alt="Professional physiotherapy session in Lagos clinic"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg z-20 hidden md:block border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-teal/20 p-3 rounded-full">
                    <ShieldCheck className="text-brand-teal h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy">Clinical Excellence</p>
                    <p className="text-xs text-brand-gray">Registered with NMCN & MRTB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section - Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Life-Changing Results</h2>
          <p className="text-brand-gray">See what our patients say about their journey to recovery.</p>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                <div className="flex text-yellow-500 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-brand-navy italic mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-navy/10 flex items-center justify-center font-bold text-brand-navy">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-brand-gray">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgery Avoidance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Focus on Surgery Avoidance</h2>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Many musculoskeletal conditions can be effectively managed—and often resolved—without invasive procedures. Our evidence-led approach uses the latest in clinical research to provide non-surgical alternatives that actually work.
              </p>
              <ul className="space-y-4">
                {[
                  "Clinically proven non-invasive protocols",
                  "Faster return to daily activities",
                  "Lower risk of complications compared to surgery",
                  "Addressing the root cause, not just the symptom"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-brand-teal h-6 w-6 shrink-0" />
                    <span className="font-medium text-brand-navy">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/booking">
                  <Button variant="outline">Consult a Specialist</Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-brand-navy rounded-3xl p-8 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4 text-brand-teal">Clinical Authorities</h3>
                 <p className="text-gray-300 mb-6">Our clinicians are trained in internationally recognized protocols from the UK, US, and Australia, bringing world-class physiotherapy to Lagos Island.</p>
                 <div className="grid grid-cols-2 gap-6 mt-8">
                    <div>
                      <p className="text-3xl font-bold">15+</p>
                      <p className="text-sm text-gray-400">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">2,400+</p>
                      <p className="text-sm text-gray-400">Successful Cases</p>
                    </div>
                 </div>
               </div>
               {/* Decorative background circle */}
               <div className="absolute -top-12 -right-12 h-64 w-64 bg-brand-teal/10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Path to Recovery</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">Our structured process ensures every patient receives personalized, evidence-based care from day one.</p>
          </div>
          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Comprehensive Assessment",
                  desc: "A 60-minute deep dive into your history, movement patterns, and clinical presentation.",
                  icon: Users
                },
                {
                  step: "02",
                  title: "Evidence-Led Plan",
                  desc: "We create a personalized recovery roadmap combining manual therapy and clinical movement.",
                  icon: Clock
                },
                {
                  step: "03",
                  title: "Sustained Recovery",
                  desc: "We monitor your progress and provide you with the tools to stay pain-free for the long term.",
                  icon: ShieldCheck
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 text-center"
                >
                  <div className="h-16 w-16 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    <item.icon size={28} />
                  </div>
                  <div className="text-brand-teal font-bold mb-2">Step {item.step}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-brand-gray text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Clinical Specialties</h2>
              <p className="text-brand-gray">Specialized care for complex physical conditions.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-brand-teal font-semibold gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((s) => (
              <div key={s.id} className="group border border-gray-100 rounded-2xl p-8 hover:border-brand-teal transition-colors shadow-sm hover:shadow-md">
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-teal transition-colors">{s.title}</h3>
                <p className="text-brand-gray text-sm mb-6 leading-relaxed">{s.description}</p>
                <Link to={`/services/${s.slug}`} className="text-brand-navy font-bold text-sm inline-flex items-center gap-2 group/link">
                  Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What should I wear to my first appointment?", a: "Wear comfortable, loose-fitting clothing that allows us to easily assess the area of concern (e.g., shorts for knee issues)." },
              { q: "Do I need a doctor's referral?", a: "No, in Nigeria, physiotherapists are first-contact practitioners. You can book directly with us." },
              { q: "How many sessions will I need?", a: "This varies per individual, but most patients see significant improvement within 4-6 sessions." },
              { q: "Do you accept health insurance?", a: "Yes, we work with major HMOs in Nigeria. Please contact us to verify your specific provider." },
              { q: "What is your cancellation policy?", a: "We require 24-hour notice for cancellations to avoid a fee." },
              { q: "Is the clinic accessible?", a: "Yes, our Lagos Island facility is fully wheelchair accessible with elevator access." },
              { q: "Do you offer home visits?", a: "Yes, we provide domiciliary care for patients with limited mobility on a case-by-case basis." },
              { q: "What sets you apart from other clinics?", a: "Our clinic is entirely evidence-led. We don't just 'massage' pain; we treat the underlying cause with modern science." }
            ].map((item, idx) => (
              <details key={idx} className="bg-white rounded-xl p-6 border border-gray-100 cursor-pointer group">
                <summary className="font-bold text-brand-navy list-none flex justify-between items-center">
                  {item.q}
                  <ArrowRight size={18} className="group-open:rotate-90 transition-transform text-brand-teal" />
                </summary>
                <p className="mt-4 text-brand-gray leading-relaxed text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Booking CTA */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Recovery?</h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
            Don't let pain dictate your life. Book a clinical consultation with our specialists today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="px-12">
                Book My Appointment
              </Button>
            </Link>
            <a href="tel:+2348001234567">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-navy px-12">
                Speak to a Clinician
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 bg-brand-teal/5 -skew-x-12 translate-x-1/2" />
      </section>
    </>
  );
};
