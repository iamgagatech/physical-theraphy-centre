import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, Calendar, Info } from "lucide-react";
import { Button } from "../components/Button";
import { SEO } from "../components/SEO";
import { services } from "../data/mockData";

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO
        title={`${service.title} | Physical Therapy Centre Lagos`}
        description={service.description}
      />

      <div className="bg-white border-b border-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/services" className="inline-flex items-center text-brand-teal font-semibold mb-8 hover:text-brand-navy transition-colors">
            <ArrowLeft size={18} className="mr-2" /> Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{service.title}</h1>
            <p className="text-xl text-brand-gray leading-relaxed">{service.description}</p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">About this Service</h2>
                <div className="prose prose-lg text-brand-gray max-w-none leading-relaxed">
                  {service.longDescription.split('\n').map((p, i) => (
                    <p key={i} className="mb-4">{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle className="text-brand-teal h-6 w-6 shrink-0" />
                      <span className="font-semibold text-brand-navy">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {service.faqs.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-8">Service FAQ</h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                          <Info className="text-brand-teal h-5 w-5 mt-1 shrink-0" />
                          {faq.question}
                        </h3>
                        <p className="text-brand-gray leading-relaxed pl-7">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 bg-brand-navy text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Ready to Recover?</h3>
                <p className="text-gray-300 mb-8">
                  Book an initial consultation to get a customized recovery plan for {service.title.toLowerCase()}.
                </p>
                <div className="space-y-4">
                  <Link to="/booking">
                    <Button variant="secondary" className="w-full py-4 text-lg">
                      <Calendar className="mr-2" size={20} /> Book Now
                    </Button>
                  </Link>
                  <a href="tel:+2348001234567" className="block">
                    <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-brand-navy py-4">
                      Call for Details
                    </Button>
                  </a>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-sm font-bold mb-4">Why choose us?</p>
                  <ul className="space-y-3 text-xs text-gray-400">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-teal" /> Evidence-based protocols</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-teal" /> 60-minute initial consult</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-teal" /> Licensed clinical specialists</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
