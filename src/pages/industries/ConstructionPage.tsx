import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/ui/Buttons';

export default function ConstructionPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Metal Finishing for Construction — Architectural & Structural"
        description="Metal surface finishing for construction industry: architectural stainless steel polishing, structural steel deburring, decorative metal finishing. Brushed, mirror, and satin finishes for building applications."
        canonical="/industries/construction"
        keywords="construction metal finishing, architectural metal polishing, stainless steel polishing construction, decorative metal finishing, structural steel deburring"
      />

      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-accent-orange text-sm font-bold tracking-widest uppercase border border-orange-100 mb-6">Industry</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">Metal Finishing for Construction</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Architectural and structural metal finishing — from mirror-polished elevator panels to brushed stainless steel facades and deburred structural steel assemblies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12">Construction Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { part: 'Stainless Steel Panels & Facades', process: 'Brush & Mirror Polishing', desc: 'Directional brushed (#4) or mirror (#8) finish on flat and formed architectural panels. Consistent grain direction and Ra values across large surface areas.' },
              { part: 'Elevator Doors & Cabins', process: 'Hairline & Mirror Finishing', desc: 'Premium hairline brushed or mirror finish for elevator interiors. Uniform appearance with no visible transition between panels.' },
              { part: 'Handrails & Balustrades', process: 'Cylindrical Polishing', desc: 'External polishing of tubular handrail components. Consistent finish along the full length with smooth transitions at bend points.' },
              { part: 'Structural Steel Connections', process: 'Deburring & Weld Blending', desc: 'Remove flame-cut and plasma-cut burrs from structural connections. Blend weld seams for uniform appearance and coating preparation.' },
              { part: 'Decorative Metal Features', process: 'Custom Textures', desc: 'Random orbital, vibration, and custom brushed patterns for feature walls, signage, and artistic metal installations.' },
              { part: 'Door Hardware & Fittings', process: 'Satin & Mirror Polish', desc: 'Precision finishing of brass, stainless steel, and zinc alloy hardware. Consistent quality across production batches.' },
            ].map(a => (
              <div key={a.part} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{a.part}</h3>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3 py-1 rounded mb-3">{a.process}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Working on Construction Metal?</h2>
          <p className="text-lg text-gray-600 mb-8">Send us your specifications and finish requirements. We validate the process on sample panels before production.</p>
          <Link to="/contact"><PrimaryButton className="px-12 py-5 h-auto text-lg shadow-md hover:-translate-y-1 transition-transform">Request Evaluation <ArrowRight className="w-5 h-5 ml-2" /></PrimaryButton></Link>
        </div>
      </section>
    </div>
  );
}
