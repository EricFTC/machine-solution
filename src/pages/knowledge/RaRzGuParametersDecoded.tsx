import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RaRzGuParametersDecoded() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Ra/Rz/Rq/GU Decoded — Parameter Guide | SF101"
        description="Complete guide to surface finishing parameters: Ra, Rz, Rq, and GU. Learn what each parameter means, when to use it, and why lower Ra is not always better."
        canonical="/knowledge/ra-rz-gu-parameters-decoded"
        keywords="Ra roughness, Rz parameter, Rq surface, GU gloss unit, surface roughness parameters, ISO 4287"
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link to="/knowledge" className="text-sm font-bold uppercase tracking-widest text-accent-orange hover:text-gray-900 transition-colors">
            ← Knowledge Center
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mt-6 mb-4">
            Ra/Rz/Rq/GU Decoded — Get the Parameters Wrong, and You've Wasted the Process
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="bg-orange-100 text-accent-orange px-2 py-1 rounded text-xs font-bold">SF101</span>
            <span>•</span>
            <span>7 read</span>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">In the previous two articles, we built the cognitive framework for Surface Finishing and mapped out the four major classifications and selection logic across 46 processes.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">But in real-world work, even with the right process route, there's another trap that can trip you up—<strong>parameters.</strong></p>
          <p className="text-gray-700 mb-4 leading-relaxed">Ra, Rz, Rq, GU—you probably see these letters every day, but the number of people who truly understand what each means and where to apply them is smaller than you'd think.</p>
          <p className="text-gray-700 mb-8 leading-relaxed">The most common problem: many people treat Ra as the sole evaluation criterion, even assuming "lower Ra is always better." <strong>That's an expensive misconception.</strong></p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ra — The Most Widely Used Roughness Parameter</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">Ra stands for <strong>Arithmetical Mean Deviation of the Profile.</strong> The formal definition: the arithmetical mean of the absolute values of profile deviations within the sampling length.</p>
          <p className="text-gray-700 mb-6 leading-relaxed">The Ra value series defined by GB/T 1031-2009 ranges from 0.012 to 100 μm, with the commonly used range being Ra 0.025–6.3 μm (Ref: GB/T 1031-2009).</p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">What Does an Ra Value Actually Mean?</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead className="bg-gray-100"><tr><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Ra (μm)</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Surface Condition</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Typical Machining Method</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Typical Application</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
<tr><td className="px-4 py-3 text-sm text-gray-700">&gt;12.5</td><td className="px-4 py-3 text-sm text-gray-700">Clearly visible machining marks</td><td className="px-4 py-3 text-sm text-gray-700">Rough turning, rough milling, drilling</td><td className="px-4 py-3 text-sm text-gray-700">Non-functional surfaces</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">6.3</td><td className="px-4 py-3 text-sm text-gray-700">Slightly visible machining marks</td><td className="px-4 py-3 text-sm text-gray-700">Turning, milling, drilling</td><td className="px-4 py-3 text-sm text-gray-700">Non-critical mating surfaces</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">3.2</td><td className="px-4 py-3 text-sm text-gray-700">Faintly visible machining marks</td><td className="px-4 py-3 text-sm text-gray-700">Turning, milling, reaming, grinding</td><td className="px-4 py-3 text-sm text-gray-700">General mating surfaces (gear tooth flanks)</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">1.6</td><td className="px-4 py-3 text-sm text-gray-700">Smooth surface</td><td className="px-4 py-3 text-sm text-gray-700">Precision turning, grinding, honing</td><td className="px-4 py-3 text-sm text-gray-700">Precision mating surfaces (hydraulic valve spools)</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">0.8</td><td className="px-4 py-3 text-sm text-gray-700">Machining mark direction discernible</td><td className="px-4 py-3 text-sm text-gray-700">Fine grinding, lapping, polishing</td><td className="px-4 py-3 text-sm text-gray-700">High-precision transmission parts (ball screws)</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">0.4</td><td className="px-4 py-3 text-sm text-gray-700">Mark direction barely discernible</td><td className="px-4 py-3 text-sm text-gray-700">Superfinishing, mirror grinding</td><td className="px-4 py-3 text-sm text-gray-700">Optical guideways, precision bearing races</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">0.2</td><td className="px-4 py-3 text-sm text-gray-700">Mark direction not discernible</td><td className="px-4 py-3 text-sm text-gray-700">Diamond turning</td><td className="px-4 py-3 text-sm text-gray-700">Jet engine blades</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">0.1</td><td className="px-4 py-3 text-sm text-gray-700">Dark glossy surface</td><td className="px-4 py-3 text-sm text-gray-700">Precision lapping</td><td className="px-4 py-3 text-sm text-gray-700">Precision gauge blocks</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">&lt;0.05</td><td className="px-4 py-3 text-sm text-gray-700">Mirror finish</td><td className="px-4 py-3 text-sm text-gray-700">Chemical-mechanical polishing (CMP)</td><td className="px-4 py-3 text-sm text-gray-700">Optical lenses, semiconductor wafers</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Rz — The Key Parameter for Capturing Extremes</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">Rz is defined as <strong>Maximum Profile Height</strong>: the sum of the maximum profile peak height and the maximum profile valley depth within a sampling length.</p>
          <p className="text-gray-700 mb-6 leading-relaxed">Ra tells you how rough the surface is "on average"; Rz tells you how extreme the worst peaks and valleys are.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">When a surface has isolated deep valleys—think sandblasted surfaces, honed surfaces, or EDM surfaces—Ra might look "acceptable," but Rz exposes the problem. This is why the VDI 3400 standard specifies both Ra and Rmax (Ref: ISO 4287:1997).</p>
          <div className="border-l-4 border-accent-orange bg-orange-50 rounded-r-lg p-4 mb-6"><p className="text-gray-700 text-sm">Note: The Rz definition in ISO 4287:1997 differs from the old ISO 4187-1:1984 definition of "ten-point height." Confirm which version your instrument follows.</p></div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Rq — The "Advanced Parameter" More Sensitive to Extremes</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">Rq is the <strong>Root Mean Square Deviation of the Profile.</strong> Rq is more sensitive to surface extremes (tall peaks/deep valleys). For Gaussian-distributed surfaces, Rq ≈ 1.11 × Ra.</p>
          <p className="text-gray-700 mb-6 leading-relaxed">In applications requiring precise control of friction, wear, or optical performance, Rq outperforms Ra because it better captures those "few but critical" extreme deviations.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">GU — The International Standard Unit for Gloss</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">GU (Gloss Unit) is the international standard unit for gloss, defined as the ratio of the reflected luminous flux from a specimen to that from a glass standard surface, multiplied by 100 (Ref: ISO 2813:2014). <strong>GU is NOT "% reflectance."</strong></p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Measurement Angle Selection Rules</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead className="bg-gray-100"><tr><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Condition</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Recommended Angle</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Reference Standard</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
<tr><td className="px-4 py-3 text-sm text-gray-700">General purpose (10–70 GU)</td><td className="px-4 py-3 text-sm text-gray-700">60°</td><td className="px-4 py-3 text-sm text-gray-700">ISO 2813 / ASTM D523</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Low-gloss / matte surfaces (&lt;10 GU @ 60°)</td><td className="px-4 py-3 text-sm text-gray-700">85°</td><td className="px-4 py-3 text-sm text-gray-700">ISO 2813 / ASTM D523</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">High-gloss surfaces (&gt;70 GU @ 60°)</td><td className="px-4 py-3 text-sm text-gray-700">20°</td><td className="px-4 py-3 text-sm text-gray-700">ISO 2813 / ASTM D523</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">A Counterintuitive Fact: Ra Is Not Lower-Is-Better</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">Many people—including quite a few engineers and designers—have an intuition: <strong>the smoother the surface, the better; lower Ra is more premium.</strong> <strong>That's wrong.</strong></p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Functional reason:</strong> An overly smooth surface can't hold lubricating oil. For sliding-fit components (bearings, guideways, etc.), appropriate surface roughness is the foundation of oil retention. The microscopic valleys act as miniature "oil reservoirs."</p>
          <p className="text-gray-700 mb-6 leading-relaxed"><strong>Economic reason:</strong> Going from Ra 1.6 to Ra 0.4 might triple or quintuple the cost. Going from Ra 0.4 to Ra 0.1 could add another order of magnitude.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The correct selection principle: <strong>"Meet the functional requirement, and stop there."</strong></p>
          <div className="border-l-4 border-accent-orange bg-orange-50 rounded-r-lg p-4 mb-6"><p className="text-gray-700 text-sm">"Good enough" isn't cutting corners—it's engineering wisdom.</p></div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quick Reference: The Four Parameters</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead className="bg-gray-100"><tr><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Parameter</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Full Name</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">What It Describes</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Application Scenarios</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Standard Reference</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
<tr><td className="px-4 py-3 text-sm text-gray-700">Ra</td><td className="px-4 py-3 text-sm text-gray-700">Arithmetical Mean Deviation of the Profile</td><td className="px-4 py-3 text-sm text-gray-700">Overall roughness level</td><td className="px-4 py-3 text-sm text-gray-700">General purpose, most widely used</td><td className="px-4 py-3 text-sm text-gray-700">GB/T 1031-2009</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Rz</td><td className="px-4 py-3 text-sm text-gray-700">Maximum Profile Height</td><td className="px-4 py-3 text-sm text-gray-700">Extreme peak-to-valley difference</td><td className="px-4 py-3 text-sm text-gray-700">Sandblasted surfaces, honed surfaces, molds</td><td className="px-4 py-3 text-sm text-gray-700">ISO 4287:1997</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Rq</td><td className="px-4 py-3 text-sm text-gray-700">Root Mean Square Deviation</td><td className="px-4 py-3 text-sm text-gray-700">Roughness more sensitive to extremes</td><td className="px-4 py-3 text-sm text-gray-700">Precision friction/wear/optics</td><td className="px-4 py-3 text-sm text-gray-700">—</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">GU</td><td className="px-4 py-3 text-sm text-gray-700">Gloss Unit</td><td className="px-4 py-3 text-sm text-gray-700">Surface light-reflecting ability</td><td className="px-4 py-3 text-sm text-gray-700">Decorative surfaces, coated surfaces</td><td className="px-4 py-3 text-sm text-gray-700">ISO 2813:2014</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Ra is the general-purpose parameter, Rz captures extremes, Rq is more sensitive to variation, GU measures gloss.</strong> The four parameters serve distinct roles and are not interchangeable.</li>
            <li><strong>The Ra value comparison table is the most practical tool.</strong> Memorize the correspondence between Ra values and actual surface conditions for rapid assessment on the shop floor.</li>
            <li><strong>"Lower Ra is always better" is the biggest misconception.</strong> An overly smooth surface can't retain oil, leading to dry friction; higher precision means exponentially higher cost.</li>
            <li><strong>The selection principle is "meet the functional requirement, and stop there."</strong> Non-mating surfaces don't need high finish; "just to be safe" blanket-specifying high precision is a cardinal sin of design.</li>
            <li><strong>Watch for measurement standard version differences.</strong> The Rz definition in ISO 4287:1997 differs from older standards—confirm when using legacy instruments.</li>
          </ol>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>

            <details className="mb-4 bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Can Ra and Rz be specified on the same drawing simultaneously?</summary>
              <p className="text-gray-700 mt-3 leading-relaxed">Yes—and in many industries (such as mold-making), it's standard practice. The VDI 3400 standard requires specifying both Ra and Rmax. Ra reflects overall roughness; Rz/Rmax reflects extreme peaks and valleys (Ref: ISO 4287:1997).</p>
            </details>

            <details className="mb-4 bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Why is Rq ≈ 1.11 × Ra? Is this relationship fixed?</summary>
              <p className="text-gray-700 mt-3 leading-relaxed">This relationship applies only to Gaussian-distributed surfaces (i.e., surface profiles following a normal distribution). Real machined surfaces may deviate from Gaussian distribution, in which case the Rq/Ra ratio may differ. 1.11 is an empirical approximation, not a strict constant.</p>
            </details>

            <details className="mb-4 bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Can GU values be converted to Ra values?</summary>
              <p className="text-gray-700 mt-3 leading-relaxed">No. Roughness and gloss are two independent physical dimensions. While roughness does affect gloss (generally, lower Ra means higher GU), there's no deterministic conversion relationship—because gloss is also influenced by the material's refractive index, surface texture direction, and other factors.</p>
            </details>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
            <p className="text-gray-600 mb-4">Get the parameters wrong, and even the right process is useless. FacetFin helps you find the optimal balance between performance requirements and manufacturing cost—from parameter selection to process implementation.</p>
            <Link to="/contact" className="inline-flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              Get Free Evaluation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>



          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/knowledge/forty-six-processes-overview" className="flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Prev: 46 Processes
            </Link>
            <Link to="/knowledge/abrasives-selection-guide" className="flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              Next: Abrasives Guide
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
