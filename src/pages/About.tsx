import React from "react";
import { SEO } from "../components/SEO";
import { Button } from "../components/Button";
import { CheckCircle, ShieldCheck, HeartPulse, GraduationCap } from "lucide-react";

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Our Clinic | Physical Therapy Centre Lagos"
        description="Learn about our clinical philosophy, expert team, and why we are Lagos Island's choice for evidence-based physiotherapy."
      />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-brand-navy">Clinical Excellence in the Heart of Lagos.</h1>
              <div className="prose prose-lg text-brand-gray space-y-6">
                <p>
                  Physical Therapy Centre was founded on a simple but powerful premise: that effective rehabilitation should be led by evidence, not tradition. Located in Lagos Island, our facility provides a clean, serene, and clinically advanced environment for long-term recovery.
                </p>
                <p>
                  Our team of clinical specialists brings together decades of experience in musculoskeletal health, sports performance, and neurological rehabilitation. We don't just treat symptoms; we partner with our patients to understand the mechanics of their movement and the neuroscience of their pain.
                </p>
                <p>
                  Whether you are an athlete looking for a rapid return to sport, or a professional managing chronic back pain, our goal is the same: surgery avoidance and a return to the activities that define your life.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                alt="Clinic Interior"
                className="rounded-2xl shadow-md w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Physiotherapy Equipment"
                className="rounded-2xl shadow-md w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Clinical Core Values</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">These principles guide every assessment and treatment plan we develop.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Evidence-Led", desc: "Every protocol is rooted in the latest clinical research.", icon: ShieldCheck },
              { title: "Patient-Centric", desc: "We treat the person, not just the body part.", icon: HeartPulse },
              { title: "Long-Term Focus", desc: "Our goal is permanent recovery, not temporary relief.", icon: CheckCircle },
              { title: "Clinical Rigor", desc: "Rigorous assessment standards for accurate diagnosis.", icon: GraduationCap }
            ].map((value, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center group hover:bg-brand-navy hover:text-white transition-all duration-300">
                <div className="h-14 w-14 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-sm opacity-80">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">The Clinical Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Dr. Oluwatosin Ade", role: "Principal Physiotherapist", focus: "Sports Medicine" },
              { name: "Chioma Okoro", role: "Senior Clinician", focus: "Post-Surgical Rehab" },
              { name: "Babatunde Johnson", role: "Senior Clinician", focus: "Chronic Pain Neuroscience" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
                <div className="h-32 w-32 bg-brand-navy rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white uppercase">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-brand-teal font-semibold text-sm mb-4">{member.role}</p>
                <div className="inline-block px-4 py-1 bg-slate-100 rounded-full text-xs font-bold text-brand-gray">
                  Expertise: {member.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Better Care</h2>
          <p className="text-gray-300 mb-10 max-w-xl">Join the hundreds of patients who have successfully recovered in our care.</p>
          <Button size="lg" variant="secondary">Book Your First Session</Button>
        </div>
      </section>
    </>
  );
};
