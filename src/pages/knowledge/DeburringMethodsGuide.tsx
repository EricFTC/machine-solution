import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DeburringMethodsGuide() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="How to Choose the Right Deburring Method for Metal Parts"
        description="Complete guide to metal deburring methods: vibratory, centrifugal, thermal, abrasive flow, brush, and mechanical deburring. When to use each method, pros and cons, and selection criteria."
        canonical="/knowledge/deburring-methods-guide"
        keywords="deburring methods, vibratory deburring, centrifugal deburring, thermal deburring, how to deburr metal, deburring process selection"
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link to="/knowledge" className="text-sm font-bold uppercase tracking-widest text-accent-orange hover:text-gray-900 transition-colors">← Knowledge Center</Link>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mt-6 mb-4">
            How to Choose the Right Deburring Method for Your Metal Parts
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>6 min read</span>
            <span>•</span>
            <span>Process Selection</span>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Choosing the wrong deburring method can damage parts, waste time, and cost money. This guide breaks down the six main deburring approaches and when each one is the right choice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Vibratory Deburring</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Parts are placed in a vibrating tub with abrasive media and compound. The vibration creates relative motion between media and parts, gradually removing burrs and rounding edges.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Best For</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Small to medium parts in bulk</li>
                  <li>• Stamped brackets, fasteners, fittings</li>
                  <li>• Parts with accessible external burrs</li>
                  <li>• Volume production (100+ parts)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">Limitations</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Long cycle times (30 min – 4 hours)</li>
                  <li>• Cannot reach internal passages</li>
                  <li>• Media impingement on thin walls</li>
                  <li>• Not suitable for precision surfaces</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Centrifugal (High-Energy) Deburring</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Similar to vibratory but uses centrifugal force to accelerate media contact. Processing times are 5-10x faster, and edge radiusing is more aggressive. Better for harder materials and tighter burrs.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Best For</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Hardened steel components</li>
                  <li>• Tight-tolerance parts needing fast processing</li>
                  <li>• Parts requiring larger edge radii</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">Limitations</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Higher media wear rates</li>
                  <li>• Risk of part-on-part damage if not separated</li>
                  <li>• Same accessibility constraints as vibratory</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Thermal (Electro-Chemical) Deburring</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            An electrical discharge burns away burrs in a reactive gas environment. The thermal energy selectively removes thin, conductive burr material while leaving the bulk part relatively unaffected.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Best For</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Cross-drilled holes and internal passages</li>
                  <li>• Areas impossible to reach with media</li>
                  <li>• Parts with multiple intersecting holes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">Limitations</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Only works on conductive materials</li>
                  <li>• May leave heat-affected zone</li>
                  <li>• Doesn't produce edge radius (just removes burr)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Brush Deburring</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Rotating abrasive brushes contact part edges to remove burrs. Can be integrated into CNC machines or used as standalone stations. Ideal for flat parts and one-sided edge treatment.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Best For</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Laser-cut flat panels</li>
                  <li>• Stamped plates</li>
                  <li>• Parts needing selective edge treatment</li>
                  <li>• Automated inline deburring</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">Limitations</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Limited to accessible edges</li>
                  <li>• Brush wear requires monitoring</li>
                  <li>• Not ideal for 3D complex parts</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Abrasive Flow Machining</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A viscoelastic abrasive-laden media is forced through internal passages under pressure. The media's abrasive particles deburr and polish surfaces that no tool can reach.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Best For</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Die cavities and mold passages</li>
                  <li>• Fuel system components</li>
                  <li>• Complex internal geometries</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">Limitations</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Requires tooling (fixtures) for each part</li>
                  <li>• Higher per-part cost</li>
                  <li>• Not economical for simple parts</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Mechanical (Manual) Deburring</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Skilled operators use hand tools, rotary burs, and abrasive pads to remove burrs one at a time. The most flexible method but also the slowest and least consistent.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Best For</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Prototype quantities</li>
                  <li>• Complex or delicate parts</li>
                  <li>• Parts too large for tumbling equipment</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">Limitations</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Inconsistent results between operators</li>
                  <li>• High labor cost per part</li>
                  <li>• Difficult to scale</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Quick Selection Guide</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">If You Need To...</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">Use This Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700">Deburr 500+ small parts quickly</td><td className="px-4 py-3 font-bold text-gray-900">Vibratory or Centrifugal</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Deburr cross-drilled holes</td><td className="px-4 py-3 font-bold text-gray-900">Thermal or Abrasive Flow</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Deburr laser-cut flat panels</td><td className="px-4 py-3 font-bold text-gray-900">Brush Deburring</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Deburr 10 prototype parts</td><td className="px-4 py-3 font-bold text-gray-900">Mechanical (Manual)</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Deburr hardened steel parts fast</td><td className="px-4 py-3 font-bold text-gray-900">Centrifugal</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Polish internal die cavity</td><td className="px-4 py-3 font-bold text-gray-900">Abrasive Flow Machining</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Not Sure Which Method Fits Your Parts?</h3>
            <p className="text-gray-600 mb-4">Send us your part drawing and we'll recommend the right deburring process — initial evaluation available.</p>
            <Link to="/contact" className="inline-flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              Get Free Evaluation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
