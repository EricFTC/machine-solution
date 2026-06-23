import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/ui/Buttons';

export default function DeburringPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Metal Deburring Service — Edge Radiusing & Burr Removal"
        description="Professional metal deburring and edge radiusing service. Remove burrs from stamped, laser-cut, and machined parts. Uniform edge quality for safe handling, coating, and assembly. Engineering evaluation available."
        canonical="/services/deburring"
        keywords="metal deburring service, burr removal, edge radiusing, deburring stamped parts, laser cut deburring, CNC deburring, metal edge finishing"
      />

      {/* HERO */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-accent-orange text-sm font-bold tracking-widest uppercase border border-orange-100 mb-6">
              Service
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">
              Metal Deburring & Edge Radiusing
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Remove sharp burrs, laser oxide, and dangerous edges from your metal parts. We validate the deburring process on your actual components before recommending a production solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <PrimaryButton className="px-8 py-4 h-auto text-lg shadow-md">
                  Request Free Evaluation <ArrowRight className="w-5 h-5 ml-2" />
                </PrimaryButton>
              </Link>
              <span className="text-sm text-gray-500 font-medium self-center">Response within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DEBURRING MATTERS */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Why Professional Deburring Matters
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Burrs aren't just cosmetic defects — they cause real manufacturing and safety problems. Left unchecked, burrs can injure workers, interfere with assembly tolerances, create stress concentration points, and cause coating adhesion failures.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Worker Safety', desc: 'Sharp edges cause cuts during handling and assembly' },
                  { title: 'Assembly Interference', desc: 'Burrs prevent proper part mating and fastener seating' },
                  { title: 'Coating Failures', desc: 'Burr tips create thin-spot coating failures and corrosion points' },
                  { title: 'Fatigue Cracking', desc: 'Stress concentration at burr roots leads to premature failure' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-red-50 rounded flex items-center justify-center shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Burrs We Remove</h3>
              <div className="space-y-4">
                {[
                  { type: 'Poisson Burr', cause: 'Formed when metal is compressed — common in stamping and forming', severity: 'Medium' },
                  { type: 'Tear Burr', cause: 'Created when metal is torn rather than sheared cleanly — common in blanking', severity: 'High' },
                  { type: 'Roll-over Burr', cause: 'Material folds over the edge during cutting — typical in punching operations', severity: 'Medium' },
                  { type: 'Cut Burr', cause: 'Residual material after machining — CNC milling, turning, drilling', severity: 'Low-Medium' },
                  { type: 'Laser Oxide', cause: 'Oxide layer formed during laser cutting — must be removed before welding or coating', severity: 'High' },
                ].map(b => (
                  <div key={b.type} className="bg-white border border-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-gray-900">{b.type}</span>
                      <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${b.severity === 'High' ? 'bg-red-50 text-red-600' : b.severity === 'Medium' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'}`}>{b.severity}</span>
                    </div>
                    <p className="text-sm text-gray-600">{b.cause}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS METHODS */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Deburring Methods We Apply</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The right method depends on your part geometry, material, burr type, and production volume. We select and validate the optimal approach for your application.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { method: 'Vibratory Deburring', desc: 'Bulk processing for small to medium parts. Gentle, consistent edge breaking with media and compound selection tailored to your material.', best: 'Stamped brackets, small CNC parts, fasteners' },
              { method: 'Centrifugal Deburring', desc: 'High-energy processing for faster cycle times and more aggressive edge radiusing. Effective on harder materials and tighter burrs.', best: 'Hardened steel components, tight-tolerance parts' },
              { method: 'Brush Deburring', desc: 'Rotating abrasive brushes for targeted edge treatment. Ideal for flat parts, laser-cut panels, and parts with one critical surface.', best: 'Laser-cut panels, flat stamped plates' },
              { method: 'Thermal Deburring', desc: 'Electrical-thermal energy removes burrs in hard-to-reach areas including cross-drilled holes and internal passages.', best: 'Complex internal passages, cross-drilled holes' },
              { method: 'Mechanical Hand Deburring', desc: 'Manual finishing for prototype quantities and parts too delicate or complex for automated processing.', best: 'Prototypes, complex geometry, low volume' },
              { method: 'Abrasive Flow Machining', desc: 'Viscoelastic abrasive media flows through internal passages to deburr and finish surfaces that tools cannot reach.', best: 'Internal passages, die cavities, fuel system components' },
            ].map(m => (
              <div key={m.method} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{m.method}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{m.desc}</p>
                <div className="border-t border-gray-100 pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-orange">Best For</span>
                  <p className="text-sm text-gray-700 font-medium mt-1">{m.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12 text-center">Materials We Deburr</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Stainless Steel 304', 'Stainless Steel 316', 'Carbon Steel', 'Aluminum 6061', 'Aluminum 5052', 'Copper', 'Brass', 'Titanium', 'Nickel Alloys', 'Spring Steel', 'Galvanized Steel', 'Zinc Die Cast'].map(m => (
              <div key={m} className="border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-800 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">{m}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Need Burrs Removed From Your Parts?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Send us your part drawing or sample. We'll evaluate the burr type and recommend the right deburring process — initial evaluation available.
          </p>
          <Link to="/contact">
            <PrimaryButton className="px-12 py-5 h-auto text-lg shadow-md hover:-translate-y-1 transition-transform">
              Submit Your Part <ArrowRight className="w-5 h-5 ml-2" />
            </PrimaryButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
