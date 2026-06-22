import SEO from '../components/SEO';
import React from 'react';
import { ArrowRight, BookOpen, Wrench, Ruler, Scale, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    icon: Wrench,
    category: 'Deburring',
    title: 'How to Choose the Right Deburring Method for Your Metal Parts',
    description: 'Comparing vibratory, centrifugal, thermal, and mechanical deburring methods. When each method is most effective and what results to expect.',
    slug: 'deburring-methods-guide',
    readTime: '6 min',
  },
  {
    icon: Ruler,
    category: 'Surface Quality',
    title: 'Understanding Surface Roughness: Ra, Rz, and What They Mean for Your Application',
    description: 'A practical guide to surface roughness parameters. How to specify the right Ra value for functional vs. cosmetic surfaces, and common benchmarks by industry.',
    slug: 'surface-roughness-guide',
    readTime: '8 min',
  },
  {
    icon: Scale,
    category: 'Process Selection',
    title: 'Brushed Finish vs Mirror Finish: Which Surface Treatment Is Right for Your Project?',
    description: 'Key differences between brushed, satin, and mirror finishes. Cost implications, durability considerations, and application suitability for each finish type.',
    slug: 'brushed-vs-mirror-finish',
    readTime: '5 min',
  },
  {
    icon: Zap,
    category: 'Automation',
    title: 'When to Automate Your Metal Finishing Process: A Decision Framework',
    description: 'How to evaluate whether manual or automated finishing is right for your production volume, part complexity, and quality requirements.',
    slug: 'automate-finishing-process',
    readTime: '7 min',
  },
  {
    icon: Shield,
    category: 'Materials',
    title: 'Stainless Steel Surface Finishing: Common Challenges and Proven Solutions',
    description: 'Addressing the most frequent issues in stainless steel finishing: heat tint, contamination, inconsistent grain direction, and achieving food-grade surface quality.',
    slug: 'stainless-steel-finishing',
    readTime: '6 min',
  },
];

export default function KnowledgeCenterPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Knowledge Center — Metal Surface Finishing Guides & Technical Articles"
        description="Expert guides on metal surface finishing: deburring techniques, polishing methods, grinding parameters, and surface roughness standards. Technical knowledge for engineers and buyers."
        canonical="/knowledge"
        keywords="metal finishing guide, deburring guide, polishing tutorial, surface roughness Ra, metal finishing knowledge"
      />

      {/* HERO */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-accent-orange" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 max-w-3xl mx-auto">
            Knowledge Center
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Technical guides, process knowledge, and practical advice for engineers working with metal surface finishing.
          </p>
        </div>
      </section>

      {/* ARTICLE LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="border border-gray-200 rounded-xl p-8 hover:shadow-md hover:border-gray-300 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-50 transition-colors">
                    <article.icon className="w-6 h-6 text-gray-500 group-hover:text-accent-orange transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-orange">{article.category}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{article.readTime} read</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-orange transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="mt-4">
                      <Link to="/contact" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-accent-orange transition-colors uppercase tracking-widest">
                        Read Article <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Have a Technical Question?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our engineers are happy to discuss your specific finishing challenge — no commitment required.
          </p>
          <Link to="/contact" className="inline-flex items-center font-bold text-accent-orange border-b-2 border-accent-orange pb-1 hover:text-gray-900 hover:border-gray-900 transition-colors">
            Ask Our Engineering Team <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
