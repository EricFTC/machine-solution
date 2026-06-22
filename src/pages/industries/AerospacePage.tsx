import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/ui/Buttons';

export default function AerospacePage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Metal Finishing for Aerospace — Precision Surface Treatment"
        description="Precision metal surface finishing for aerospace: deburring turbine components, polishing structural parts, grinding titanium and nickel alloy parts. AS9100 quality standards. Full traceability."
        canonical="/industries/aerospace"
        keywords="aerospace metal finishing, aerospace deburring, titanium polishing, nickel alloy finishing, aerospace surface treatment, turbine blade finishing"
      />

      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-accent-orange text-sm font-bold tracking-widest uppercase border border-orange-100 mb-6">Industry</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">Metal Finishing for Aerospace</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Precision surface finishing for aerospace-grade materials and critical components. We validate processes on your actual parts with full Ra/Rz documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12">Aerospace Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { part: 'Turbine & Engine Components', process: 'Deburring & Fine Finishing', desc: 'Remove machining burrs from turbine blades, vanes, and engine cases. Critical for aerodynamic performance and fatigue life. Tight Ra requirements validated per part.' },
              { part: 'Structural Aluminum Components', process: 'Surface Grinding & Texturing', desc: 'Flat and contour grinding of structural plates and frames. Surface preparation for bonding and coating with controlled roughness parameters.' },
              { part: 'Titanium Alloy Parts', process: 'Precision Deburring & Polishing', desc: 'Specialized processing for titanium alloys (Ti-6Al-4V). Low cutting force methods to avoid thermal damage and maintain metallurgical integrity.' },
              { part: 'Landing Gear Components', process: 'Grinding & Polishing', desc: 'High-strength steel landing gear components requiring precise surface finishing for fatigue performance and corrosion protection.' },
              { part: 'Fasteners & Rivets', process: 'Bulk Deburring', desc: 'Vibratory and centrifugal deburring of aerospace-grade fasteners. Uniform edge quality without dimensional distortion.' },
              { part: 'Heat Shield & Exhaust Parts', process: 'Weld Blending & Oxide Removal', desc: 'Post-weld finishing of nickel alloy and stainless steel exhaust components. Oxide removal and surface preparation for thermal coating.' },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need Aerospace-Grade Finishing?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us with your part specifications and finish requirements. We provide process validation with full documentation.</p>
          <Link to="/contact"><PrimaryButton className="px-12 py-5 h-auto text-lg shadow-md hover:-translate-y-1 transition-transform">Submit Your Part <ArrowRight className="w-5 h-5 ml-2" /></PrimaryButton></Link>
        </div>
      </section>
    </div>
  );
}
