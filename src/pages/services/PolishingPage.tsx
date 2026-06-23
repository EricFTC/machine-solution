import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/ui/Buttons';

export default function PolishingPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Metal Polishing Service — Mirror Finish & Fine Polishing"
        description="Professional metal polishing and mirror finishing service. Achieve #4 to #8 finish quality on stainless steel, aluminum, and more. Ra/Rz validated results. Sample processing available."
        canonical="/services/polishing"
        keywords="metal polishing service, mirror polishing, stainless steel polishing, aluminum polishing, mirror finish, Ra improvement, metal surface polishing"
      />

      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-accent-orange text-sm font-bold tracking-widest uppercase border border-orange-100 mb-6">Service</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">Mirror Polishing & Fine Finishing</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Achieve high-reflectivity mirror finishes or precision surface quality for cosmetic and functional applications. Every result is validated with Ra/Rz measurements on your actual parts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact"><PrimaryButton className="px-8 py-4 h-auto text-lg shadow-md">Request Sample Processing <ArrowRight className="w-5 h-5 ml-2" /></PrimaryButton></Link>
              <span className="text-sm text-gray-500 font-medium self-center">Engineering evaluation available</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINISH QUALITY LEVELS */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12 text-center">Finish Quality Levels We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { grade: '#4 Satin / Directional', ra: 'Ra 0.4–0.8 μm', desc: 'Standard brushed finish with visible directional lines. Most common for architectural stainless steel and appliance surfaces.', apps: 'Elevator panels, kitchen equipment, appliance housings' },
              { grade: '#6 Fine Satin', ra: 'Ra 0.2–0.4 μm', desc: 'Finer directional lines than #4. Smoother to the touch while retaining a brushed appearance. Good for visible cosmetic surfaces.', apps: 'Visible trim, decorative hardware, consumer products' },
              { grade: '#7 Mirror', ra: 'Ra 0.05–0.2 μm', desc: 'High reflectivity near-mirror quality. Minimal visible scratches under controlled lighting. Premium decorative and functional applications.', apps: 'Medical devices, sanitary fittings, premium consumer goods' },
              { grade: '#8 True Mirror', ra: 'Ra <0.05 μm', desc: 'Full mirror reflectivity with no visible defects. The highest standard of surface finish quality. Medical and optical grade.', apps: 'Surgical instruments, optical reflectors, pharmaceutical equipment' },
            ].map(f => (
              <div key={f.grade} className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{f.grade}</h3>
                  <span className="text-xs font-mono text-accent-orange bg-orange-50 px-3 py-1 rounded">{f.ra}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{f.desc}</p>
                <div className="border-t border-gray-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Typical Applications</span>
                  <p className="text-sm text-gray-700 font-medium mt-1">{f.apps}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLISHING METHODS */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 text-center">Polishing Process Options</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16">We match the polishing method to your geometry, material, and target finish specification.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { method: 'Mechanical Polishing', desc: 'Multi-stage abrasive progression from coarse to fine buffing compounds. The most versatile approach for flat and simple curved surfaces. Achieves #4 through #8 finishes.', icon: '🔧' },
              { method: 'Electropolishing', desc: 'Electrochemical process that removes surface material uniformly. Improves corrosion resistance and produces a hygienic, microscopically smooth surface. Ideal for food, pharma, and medical.', icon: '⚡' },
              { method: 'Robotic Polishing', desc: 'CNC-controlled polishing for complex geometries and consistent batch-to-batch quality. Reduces manual labor and ensures repeatable Ra values across production volumes.', icon: '🤖' },
            ].map(m => (
              <div key={m.method} className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="text-3xl mb-4">{m.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{m.method}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12 text-center">Materials We Polish</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {['Stainless Steel 304/316', 'Stainless Steel 430', 'Aluminum 6061/5052', 'Brass & Copper', 'Carbon Steel', 'Titanium', 'Nickel Alloys', 'Zinc Alloy'].map(m => (
              <div key={m} className="border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-800 bg-gray-50 rounded-lg">{m}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Need a Specific Finish Quality?</h2>
          <p className="text-lg text-gray-600 mb-8">Send us your part with the target Ra value or a reference sample. We'll process it and return it with a detailed finish report.</p>
          <Link to="/contact"><PrimaryButton className="px-12 py-5 h-auto text-lg shadow-md hover:-translate-y-1 transition-transform">Submit Your Part <ArrowRight className="w-5 h-5 ml-2" /></PrimaryButton></Link>
        </div>
      </section>
    </div>
  );
}
