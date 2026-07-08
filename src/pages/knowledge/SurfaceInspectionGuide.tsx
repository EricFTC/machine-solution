import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SurfaceInspectionGuide() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Surface Inspection Practical Guide | SF101"
        description="Complete guide to surface inspection: stylus profilometry vs optical methods, gloss measurement angles, and inspection standards quick reference."
        canonical="/knowledge/surface-inspection-guide"
        keywords="surface inspection, roughness measurement, stylus profilometer, gloss measurement, ISO 25178, ISO 2813"
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link to="/knowledge" className="text-sm font-bold uppercase tracking-widest text-accent-orange hover:text-gray-900 transition-colors">
            ← Knowledge Center
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mt-6 mb-4">
            Surface Inspection: How to Verify Your Finish Actually Passes Spec
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="bg-orange-100 text-accent-orange px-2 py-1 rounded text-xs font-bold">SF101</span>
            <span>•</span>
            <span>7 read</span>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">Process is done. Parts are out. The question now: does this surface actually pass inspection?</p>
          <p className="text-gray-700 mb-4 leading-relaxed">In many shops, the answer is "visual check"—see if it's smooth, see if it's shiny. But visual inspection can't tell you whether Ra is 0.8 or 1.6, and it certainly can't distinguish between 60 GU and 80 GU gloss readings.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Surface inspection is the final loop in process closure—and the step most likely to get shortchanged. This article focuses on three things: how to measure surface roughness, how to measure gloss, and how to choose the right inspection standard.</p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Surface Roughness Measurement: Contact vs. Non-Contact</h2>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1.1 Contact Method — Stylus Profilometry</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">The most established and widely used roughness measurement technique. A diamond stylus traces across the measured surface under constant force. The vertical displacement is converted into an electrical signal, from which Ra, Rz, and other parameters are computed.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Key standards:</strong> GB/T 1031-2009, ISO 4287:1997, ISO 4288, ASME B46.1</p>
          <p className="text-gray-700 mb-6 leading-relaxed">Strengths: technical maturity, strong traceability, portable. But limitations include potential surface damage on soft materials (Al, Cu), 2D profile only, and stylus wear affects accuracy.</p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1.2 Non-Contact Methods — Optical Measurement</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li><strong>White Light Interferometry (WLI)</strong>: Vertical resolution down to 0.1 nm. Ideal for ultra-smooth surfaces (optical components, semiconductor wafers).</li>
            <li><strong>Confocal Laser Scanning</strong>: Sub-micron resolution through point scanning. Capable of measuring steep sidewall structures.</li>
            <li><strong>Focus Variation</strong>: Determines surface height based on changes in image sharpness. Well-suited for rough surfaces and complex geometries.</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Key standards:</strong> ISO 25178 series, GB/T 33523.6-2017</p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1.3 Which One to Choose?</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead className="bg-gray-100"><tr><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Scenario</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Recommended Method</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Rationale</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
<tr><td className="px-4 py-3 text-sm text-gray-700">In-process spot check on shop floor</td><td className="px-4 py-3 text-sm text-gray-700">Handheld stylus instrument</td><td className="px-4 py-3 text-sm text-gray-700">Portable, fast, low cost</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Soft materials (aluminum / copper / coatings)</td><td className="px-4 py-3 text-sm text-gray-700">Non-contact optical method</td><td className="px-4 py-3 text-sm text-gray-700">Avoids stylus scratching</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Ra &lt; 0.1 μm ultra-smooth surfaces</td><td className="px-4 py-3 text-sm text-gray-700">White light interferometer</td><td className="px-4 py-3 text-sm text-gray-700">Stylus method lacks sufficient precision</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">3D topography analysis required</td><td className="px-4 py-3 text-sm text-gray-700">Confocal / interferometer</td><td className="px-4 py-3 text-sm text-gray-700">Provides areal parameters</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Incoming / outgoing inspection</td><td className="px-4 py-3 text-sm text-gray-700">Stylus method</td><td className="px-4 py-3 text-sm text-gray-700">Meets standards traceability requirements</td></tr>
              </tbody>
            </table>
          </div>
          <div className="border-l-4 border-accent-orange bg-orange-50 rounded-r-lg p-4 mb-6"><p className="text-gray-700 text-sm">💡 Key Point: Stylus profilometry is the workhorse for daily shop-floor inspection. Non-contact optical methods are the precision lab's weapon of choice. They complement each other.</p></div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Gloss Measurement: Pick the Wrong Angle and Your Data Is Useless</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">Gloss is measured in GU (Gloss Units), defined per ISO 2813:2014. <strong>GU values must not be interpreted as "% reflectance."</strong></p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead className="bg-gray-100"><tr><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Measurement Angle</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Application Range</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Typical Scenarios</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
<tr><td className="px-4 py-3 text-sm text-gray-700">60°</td><td className="px-4 py-3 text-sm text-gray-700">General purpose (10–70 GU)</td><td className="px-4 py-3 text-sm text-gray-700">Standard appliance housings, ceramic glazes, general coatings</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">20°</td><td className="px-4 py-3 text-sm text-gray-700">High-gloss surfaces ({">"}70 GU @60°)</td><td className="px-4 py-3 text-sm text-gray-700">Automotive clear coats, electroplated parts, piano lacquer</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">85°</td><td className="px-4 py-3 text-sm text-gray-700">Low-gloss / matte surfaces ({"<"}10 GU @60°)</td><td className="px-4 py-3 text-sm text-gray-700">Matte coatings, textured plastics, flat wall paints</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed"><strong>Operating principle:</strong> Start with 60°. If the reading exceeds 70 GU, re-measure at 20°. If below 10 GU, re-measure at 85°.</p>
          <p className="text-gray-700 mb-6 leading-relaxed">Critical: <strong>GU values from different angles are not directly comparable.</strong> Your inspection report must state the measurement angle.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Common Inspection Standards Quick Reference</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead className="bg-gray-100"><tr><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Standard</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Applicable Scope</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Core Content</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
<tr><td className="px-4 py-3 text-sm text-gray-700">GB/T 1031-2009</td><td className="px-4 py-3 text-sm text-gray-700">General machinery</td><td className="px-4 py-3 text-sm text-gray-700">Evaluation rules and numerical series for Ra, Rz</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">ISO 4287:1997</td><td className="px-4 py-3 text-sm text-gray-700">International</td><td className="px-4 py-3 text-sm text-gray-700">Profile method surface texture parameter definitions</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">ISO 4288</td><td className="px-4 py-3 text-sm text-gray-700">International</td><td className="px-4 py-3 text-sm text-gray-700">Surface roughness measurement conditions and evaluation lengths</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">ISO 25178 series</td><td className="px-4 py-3 text-sm text-gray-700">International</td><td className="px-4 py-3 text-sm text-gray-700">Areal (3D) surface texture parameters</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">ISO 2813:2014</td><td className="px-4 py-3 text-sm text-gray-700">Coating industry</td><td className="px-4 py-3 text-sm text-gray-700">Gloss measurement (20° / 60° / 85°)</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">ASTM D523</td><td className="px-4 py-3 text-sm text-gray-700">US coating</td><td className="px-4 py-3 text-sm text-gray-700">Gloss measurement</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">VDI 3400</td><td className="px-4 py-3 text-sm text-gray-700">Mold industry</td><td className="px-4 py-3 text-sm text-gray-700">EDM surface finish standards</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">SEMI M73</td><td className="px-4 py-3 text-sm text-gray-700">Semiconductor</td><td className="px-4 py-3 text-sm text-gray-700">Silicon wafer surface roughness requirements</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Cutoff length selection:</strong> Ra ≤ 0.1 μm → 0.08 mm; Ra 0.1–2.0 μm → 0.8 mm (most common); Ra &gt; 2.0 μm → 2.5 mm or 8 mm.</p>
          <p className="text-gray-700 mb-6 leading-relaxed"><strong>2D vs. 3D parameters:</strong> Ra and Sa have similar names, but one is a profile (line) parameter and the other is an areal (surface) parameter—their values are not directly comparable.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Surface roughness inspection has two main camps: contact stylus methods and non-contact optical methods.</strong> Stylus is the shop-floor workhorse—portable, economical. Optical is the precision lab tool—non-destructive, 3D capable.</li>
            <li><strong>The first step in gloss inspection is choosing the right angle.</strong> Start at 60°; use 20° for readings {">"} 70 GU; use 85° for readings &lt; 10 GU. Reports must state the measurement angle.</li>
            <li><strong>Inspection standards are the industry's common language.</strong> GB/T 1031 for general machinery, ISO 25178 for 3D areal parameters, ISO 2813 for gloss. Reference the right standard, and your data carries weight.</li>
          </ol>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>

            <details className="mb-4 bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Will stylus and optical methods give the same Ra value on the same sample?</summary>
              <p className="text-gray-700 mt-3 leading-relaxed">Not exactly the same—but they should agree within measurement uncertainty. Per inter-laboratory comparison data, calibrated stylus instruments and confocal microscopes measuring the same standard specimen (Ra ≈ 0.8 μm) show a maximum Ra deviation of approximately 0.09 μm, within expanded uncertainty.</p>
            </details>

            <details className="mb-4 bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">What's the difference between Ra and Sa? Can they be converted?</summary>
              <p className="text-gray-700 mt-3 leading-relaxed">Ra is a 2D profile parameter (ISO 4287), computed from a single scan line. Sa is a 3D areal parameter (ISO 25178), computed over the entire measurement area. There is no simple conversion formula. When switching parameter systems, acceptance criteria need to be re-evaluated.</p>
            </details>

            <details className="mb-4 bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">My shop floor doesn't have a roughness tester. How can I quickly assess surface quality?</summary>
              <p className="text-gray-700 mt-3 leading-relaxed">Use calibrated roughness comparison specimens for rapid assessment. Compare the test surface against specimens of known Ra values through visual and tactile comparison. Accuracy doesn't match instrument measurement, but it satisfies rapid sorting needs.</p>
            </details>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
            <p className="text-gray-600 mb-4">FacetFin helps you build a complete closed loop from process design to quality control—not just helping you produce great surfaces, but helping you prove they're great.</p>
            <Link to="/contact" className="inline-flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              Get Free Evaluation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>



          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/knowledge/abrasives-selection-guide" className="flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Prev: Abrasives Guide
            </Link>
            <Link to="/knowledge/surface-finishing-2026-trends" className="flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              Next: 2026 Trends
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
