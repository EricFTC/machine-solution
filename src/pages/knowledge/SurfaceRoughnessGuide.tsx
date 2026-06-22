import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SurfaceRoughnessGuide() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Understanding Surface Roughness: Ra, Rz, and What They Mean"
        description="Practical guide to surface roughness parameters Ra and Rz. How to specify the right surface finish for functional vs cosmetic applications. Industry benchmarks and common Ra values by application."
        canonical="/knowledge/surface-roughness-guide"
        keywords="surface roughness Ra, surface roughness Rz, Ra value, surface finish specification, roughness parameters, metal surface quality"
      />
      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link to="/knowledge" className="text-sm font-bold uppercase tracking-widest text-accent-orange hover:text-gray-900 transition-colors">← Knowledge Center</Link>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mt-6 mb-4">Understanding Surface Roughness: Ra, Rz, and What They Mean for Your Application</h1>
          <div className="flex items-center gap-3 text-sm text-gray-500"><span>8 min read</span><span>•</span><span>Surface Quality</span></div>
        </div>
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">When you specify a surface finish, the number you write matters. A Ra 0.4 μm mirror polish is vastly different from Ra 3.2 μm milled finish. This guide helps you choose the right parameter and value.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Is Ra?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Ra (Roughness Average) is the most common surface roughness parameter. It measures the average deviation of the surface profile from the mean line. Lower Ra = smoother surface.</p>
          <p className="text-gray-600 leading-relaxed mb-4">While Ra is the most widely used parameter, it has a significant limitation: it doesn't distinguish between peaks and valleys. Two very different surface profiles can have the same Ra value.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Is Rz?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Rz (Mean Roughness Depth) measures the average of the largest peak-to-valley heights in five consecutive sampling lengths. It captures the worst-case surface variation better than Ra.</p>
          <p className="text-gray-600 leading-relaxed mb-4">For sealing surfaces and fatigue-critical applications, Rz is often more relevant than Ra because a single deep valley can cause sealing failure or stress concentration.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common Ra Values by Application</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-100"><tr><th className="text-left px-4 py-3 font-bold text-gray-900">Ra (μm)</th><th className="text-left px-4 py-3 font-bold text-gray-900">Typical Surface</th><th className="text-left px-4 py-3 font-bold text-gray-900">Common Application</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-mono font-bold">0.025</td><td className="px-4 py-3">True mirror</td><td className="px-4 py-3">Optical components, surgical instruments</td></tr>
                <tr><td className="px-4 py-3 font-mono font-bold">0.05–0.1</td><td className="px-4 py-3">Mirror polish</td><td className="px-4 py-3">Medical devices, sanitary fittings</td></tr>
                <tr><td className="px-4 py-3 font-mono font-bold">0.2–0.4</td><td className="px-4 py-3">Fine satin / #6 finish</td><td className="px-4 py-3">Decorative hardware, consumer electronics</td></tr>
                <tr><td className="px-4 py-3 font-mono font-bold">0.4–0.8</td><td className="px-4 py-3">Standard brushed / #4</td><td className="px-4 py-3">Architectural panels, kitchen equipment</td></tr>
                <tr><td className="px-4 py-3 font-mono font-bold">0.8–1.6</td><td className="px-4 py-3">Fine machined</td><td className="px-4 py-3">Precision CNC parts, bearing surfaces</td></tr>
                <tr><td className="px-4 py-3 font-mono font-bold">1.6–3.2</td><td className="px-4 py-3">Standard machined</td><td className="px-4 py-3">General engineering, non-critical surfaces</td></tr>
                <tr><td className="px-4 py-3 font-mono font-bold">3.2–6.3</td><td className="px-4 py-3">Rough machined</td><td className="px-4 py-3">Structural components, raw material</td></tr>
                <tr><td className="px-4 py-3 font-mono font-bold">6.3+</td><td className="px-4 py-3">As-cut / as-cast</td><td className="px-4 py-3">Rough blanks, pre-finishing state</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Functional vs. Cosmetic Finishes</h2>
          <p className="text-gray-600 leading-relaxed mb-4"><strong>Functional surfaces</strong> (bearing faces, sealing surfaces, sliding contacts) need specific Ra values for performance. Going smoother than necessary is expensive; going rougher causes failures.</p>
          <p className="text-gray-600 leading-relaxed mb-4"><strong>Cosmetic surfaces</strong> (visible panels, decorative trim) need consistent visual appearance. The Ra value matters less than the uniformity of the texture across the visible area.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to Specify Your Finish Requirement</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Identify the function:</strong> Is this a sealing surface, a sliding surface, or a visual surface?</li>
              <li><strong>2. Check industry standards:</strong> Medical (ISO 13485), food-grade (3-A Sanitary Standards), aerospace (AS9100)</li>
              <li><strong>3. Provide a reference sample:</strong> If you have a "good" part, send it — it's the clearest specification</li>
              <li><strong>4. Specify both Ra and method:</strong> "Ra 0.4 μm, directional brushed" is more useful than just "Ra 0.4 μm"</li>
              <li><strong>5. Define the measurement area:</strong> Where on the part does this Ra need to be achieved?</li>
            </ol>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help Specifying Your Finish?</h3>
            <p className="text-gray-600 mb-4">Send us your part with the functional requirement and we'll recommend the right Ra target and finishing process.</p>
            <Link to="/contact" className="inline-flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">Get Free Evaluation <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </div>
        </div>
      </article>
    </div>
  );
}
