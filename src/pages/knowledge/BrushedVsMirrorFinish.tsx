import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrushedVsMirrorFinish() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Brushed Finish vs Mirror Finish: Which Is Right for Your Project?"
        description="Key differences between brushed, satin, and mirror finishes on metal. Cost comparison, durability, maintenance, and application suitability for each finish type."
        canonical="/knowledge/brushed-vs-mirror-finish"
        keywords="brushed finish vs mirror finish, satin finish, metal finish comparison, stainless steel finish, brushed metal, mirror polish"
      />
      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link to="/knowledge" className="text-sm font-bold uppercase tracking-widest text-accent-orange hover:text-gray-900 transition-colors">← Knowledge Center</Link>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mt-6 mb-4">Brushed Finish vs Mirror Finish: Which Surface Treatment Is Right for Your Project?</h1>
          <div className="flex items-center gap-3 text-sm text-gray-500"><span>5 min read</span><span>•</span><span>Process Selection</span></div>
        </div>
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">The choice between brushed and mirror finish affects cost, durability, maintenance, and the overall impression of your product. Here's how to decide.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Brushed Finish</h2>
          <p className="text-gray-600 leading-relaxed mb-4">A brushed finish features visible directional lines created by abrasive belts or brushes moving across the surface. The most common type is the #4 finish on stainless steel.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Characteristics</h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Appearance:</strong> Visible directional grain pattern. Looks industrial and clean.</li>
              <li><strong>Ra range:</strong> 0.2–0.8 μm depending on grit and method</li>
              <li><strong>Cost:</strong> Lower — fewer processing steps, less critical quality control</li>
              <li><strong>Durability:</strong> Good — minor scratches blend with the grain direction</li>
              <li><strong>Maintenance:</strong> Fingerprints are less visible; easy to clean</li>
              <li><strong>Best for:</strong> Architectural panels, kitchen equipment, elevator doors, industrial enclosures</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mirror Finish</h2>
          <p className="text-gray-600 leading-relaxed mb-4">A mirror finish is achieved through progressive abrasive stages ending with buffing compounds. The result is a highly reflective, scratch-free surface.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Characteristics</h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Appearance:</strong> High reflectivity, no visible directional lines. Premium and striking.</li>
              <li><strong>Ra range:</strong> &lt;0.05 μm (#8 true mirror) to 0.2 μm (#7)</li>
              <li><strong>Cost:</strong> Higher — multiple processing stages, more rejects, higher QC requirements</li>
              <li><strong>Durability:</strong> Scratches are highly visible and difficult to repair</li>
              <li><strong>Maintenance:</strong> Shows fingerprints and water spots; requires regular cleaning</li>
              <li><strong>Best for:</strong> Medical devices, sanitary fittings, decorative features, premium consumer products</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Direct Comparison</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-100"><tr><th className="text-left px-4 py-3 font-bold text-gray-900">Factor</th><th className="text-left px-4 py-3 font-bold text-gray-900">Brushed</th><th className="text-left px-4 py-3 font-bold text-gray-900">Mirror</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-bold">Cost</td><td className="px-4 py-3">Lower</td><td className="px-4 py-3">2-3x higher</td></tr>
                <tr><td className="px-4 py-3 font-bold">Scratch Resistance</td><td className="px-4 py-3">Hides minor scratches</td><td className="px-4 py-3">Shows all scratches</td></tr>
                <tr><td className="px-4 py-3 font-bold">Fingerprint Visibility</td><td className="px-4 py-3">Low</td><td className="px-4 py-3">High</td></tr>
                <tr><td className="px-4 py-3 font-bold">Processing Steps</td><td className="px-4 py-3">1-2 stages</td><td className="px-4 py-3">4-6 stages</td></tr>
                <tr><td className="px-4 py-3 font-bold">Repair</td><td className="px-4 py-3">Re-brush locally</td><td className="px-4 py-3">Re-polish entire area</td></tr>
                <tr><td className="px-4 py-3 font-bold">Corrosion Resistance</td><td className="px-4 py-3">Good</td><td className="px-4 py-3">Excellent (smoother = fewer crevices)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Third Option: Satin / Non-Directional</h2>
          <p className="text-gray-600 leading-relaxed mb-4">If you want a premium look without the maintenance headache of a mirror, consider a satin or non-directional finish. Random orbital and vibration finishing create a uniform "frosted" texture that looks premium from every angle while being more forgiving of scratches and fingerprints.</p>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Need Samples to Compare?</h3>
            <p className="text-gray-600 mb-4">We can process sample pieces with different finish types on your actual material so you can compare side by side.</p>
            <Link to="/contact" className="inline-flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">Request Sample Processing <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </div>
        </div>
      </article>
    </div>
  );
}
