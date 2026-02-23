import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { SEO } from "../components/SEO";
import { blogPosts } from "../data/mockData";
import { Calendar, User, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";

export const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Clinical Knowledge & Insights | PT Centre Blog"
        description="Stay informed with the latest in physiotherapy, recovery protocols, and evidence-based wellness tips for Lagos professionals."
      />

      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Clinical Knowledge</h1>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Empowering you with evidence-based insights to manage your recovery and optimize your physical health.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col group">
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl mb-6">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="flex items-center gap-4 text-xs text-brand-gray mb-4 font-bold uppercase tracking-wider">
                  <span className="text-brand-teal">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-brand-teal transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-brand-gray mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <User size={16} className="text-brand-teal" />
                    {post.author}
                  </div>
                  <Link to={`/blog/${post.slug}`} className="text-brand-navy font-bold text-sm flex items-center gap-2 group/link">
                    Read More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO
        title={`${post.title} | Clinical Knowledge`}
        description={post.excerpt}
      />

      <article className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-brand-teal font-semibold mb-8 hover:text-brand-navy transition-colors">
              <ArrowLeft size={18} className="mr-2" /> Back to Knowledge Hub
            </Link>
            
            <div className="flex items-center gap-4 text-xs text-brand-gray mb-6 font-bold uppercase tracking-wider">
              <span className="text-brand-teal">{post.category}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-brand-navy">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-100">
              <div className="h-12 w-12 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold">
                {post.author[0]}
              </div>
              <div>
                <p className="font-bold text-brand-navy">{post.author}</p>
                <p className="text-xs text-brand-gray">Clinical Specialist</p>
              </div>
            </div>

            <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg text-brand-gray max-w-none space-y-6 leading-relaxed">
              <p className="text-xl font-medium text-brand-navy leading-relaxed italic">
                {post.excerpt}
              </p>
              <p>
                In the clinical world, we often see patients who believe that surgery is the only answer to chronic pain or structural issues like herniated discs or meniscus tears. However, modern evidence increasingly points towards conservative management—specifically high-quality physical therapy—as being equally, if not more, effective in the long term.
              </p>
              <h2 className="text-2xl font-bold text-brand-navy pt-4">The Power of Targeted Rehabilitation</h2>
              <p>
                At Physical Therapy Centre, our approach focuses on progressive loading and neuromuscular re-education. This means we don't just "fix" the pain; we retrain the body to handle the demands of daily life and sport without relying on structural interventions that carry significant risks and long recovery times.
              </p>
              <p>
                Research consistently shows that for many common conditions, the outcomes at the two-year mark are virtually identical between those who had surgery and those who followed a rigorous physical therapy protocol. The difference? The PT group avoided the risks of infection, scarring, and the physiological toll of anesthesia.
              </p>
              <h3 className="text-xl font-bold text-brand-navy pt-2">Why Your Recovery Plan Matters</h3>
              <p>
                A generic exercise sheet isn't enough. A truly effective recovery plan must be:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Evidence-Based:</strong> Rooted in the latest clinical trials.</li>
                <li><strong>Progressive:</strong> Moving from simple activation to high-intensity functional movement.</li>
                <li><strong>Educative:</strong> Helping you understand the "why" behind every movement.</li>
              </ul>
            </div>

            <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in a Clinical Assessment?</h3>
              <p className="text-brand-gray mb-8">
                If you're dealing with a condition mentioned in this article, our specialists can provide a detailed evaluation.
              </p>
              <Link to="/booking">
                <Button variant="secondary" size="lg">Book a Consultation Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Internal Linking / Recommended Posts */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Knowledge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((related) => (
              <div key={related.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={related.imageUrl} className="h-48 w-full object-cover" alt={related.title} />
                <div className="p-6">
                   <h4 className="font-bold mb-2 line-clamp-2">{related.title}</h4>
                   <Link to={`/blog/${related.slug}`} className="text-brand-teal text-sm font-bold flex items-center gap-1 group">
                     Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
