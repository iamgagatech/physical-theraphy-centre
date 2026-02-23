import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Heart, Stethoscope, Brain, Clipboard } from "lucide-react";
import { SEO } from "../components/SEO";
import { services } from "../data/mockData";

const iconMap: Record<string, any> = {
  Activity,
  Heart,
  Stethoscope,
  Brain,
  Clipboard,
};

export const Services: React.FC = () => {
  return (
    <>
      <SEO
        title="Clinical Services | Physical Therapy Centre Lagos"
        description="Explore our evidence-based physiotherapy services including sports rehab, chronic pain management, and post-surgical recovery in Lagos Island."
      />
      
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              We provide highly specialized clinical care using modern evidence-based protocols to ensure the best possible outcomes for our patients.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-teal transition-all flex flex-col"
                >
                  <div className="h-14 w-14 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal mb-6">
                    <Icon size={32} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-brand-gray mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-brand-navy font-bold flex items-center gap-2 group"
                  >
                    View Details
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Not sure which service you need?</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Our clinicians provide a comprehensive 60-minute initial assessment to determine the most effective course of treatment for your specific condition.
          </p>
          <Link to="/booking">
            <button className="bg-brand-teal text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-teal-dark transition-colors">
              Book a Consultation
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
