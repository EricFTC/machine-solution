import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AbrasivesSelectionGuide() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Abrasive Selection Guide | SF101"
        description="Complete abrasive selection guide for 7 common materials. Diamond vs CBN, FEPA grit-to-Ra correlation, and equipment selection framework."
        canonical="/knowledge/abrasives-selection-guide"
        keywords="abrasive selection, aluminum oxide, silicon carbide, CBN, diamond abrasive, FEPA grit, grinding wheel"
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link to="/knowledge" className="text-sm font-bold uppercase tracking-widest text-accent-orange hover:text-gray-900 transition-colors">
            ← Knowledge Center
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mt-6 mb-4">
            Abrasive Selection Quick Reference: Al₂O₃, SiC, Diamond, and CBN
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="bg-orange-100 text-accent-orange px-2 py-1 rounded text-xs font-bold">SF101</span>
            <span>•</span>
            <span>8 read</span>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">Ever run into this: same belt grinder, same parameters, works great on carbon steel—but the moment you switch to stainless, everything falls apart? Abrasive loading, excessive heat, scratch marks all over the surface?</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The problem is almost certainly not your equipment or parameters. It's the wrong abrasive. Abrasive selection is the most overlooked—and most commonly botched—step in surface finishing.</p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Abrasive–Material Matching Quick Reference</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">The first step in abrasive selection is identifying your workpiece material. Here's the abrasive matching for 7 common materials:</p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead className="bg-gray-100"><tr><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Workpiece Material</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Recommended Abrasive</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Grit Range</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Selection Logic</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
<tr><td className="px-4 py-3 text-sm text-gray-700">Carbon steel / mild steel</td><td className="px-4 py-3 text-sm text-gray-700">Aluminum oxide (Al₂O₃)</td><td className="px-4 py-3 text-sm text-gray-700">P80–P400</td><td className="px-4 py-3 text-sm text-gray-700">Good toughness, high-temperature resistant, cost-effective</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Stainless steel</td><td className="px-4 py-3 text-sm text-gray-700">Ceramic alumina / zirconia alumina</td><td className="px-4 py-3 text-sm text-gray-700">P80–P800</td><td className="px-4 py-3 text-sm text-gray-700">Strong self-sharpening, suited for continuous production</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Aluminum alloy</td><td className="px-4 py-3 text-sm text-gray-700">Silicon carbide (SiC)</td><td className="px-4 py-3 text-sm text-gray-700">P120–P800</td><td className="px-4 py-3 text-sm text-gray-700">High hardness, non-loading</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Copper alloy</td><td className="px-4 py-3 text-sm text-gray-700">Silicon carbide (SiC)</td><td className="px-4 py-3 text-sm text-gray-700">P180–P1200</td><td className="px-4 py-3 text-sm text-gray-700">Avoids Al₂O₃ loading issues</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Titanium alloy</td><td className="px-4 py-3 text-sm text-gray-700">Zirconia alumina / ceramic alumina</td><td className="px-4 py-3 text-sm text-gray-700">P80–P400</td><td className="px-4 py-3 text-sm text-gray-700">Difficult-to-grind; requires low-heat grinding</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Cemented carbide / ceramics</td><td className="px-4 py-3 text-sm text-gray-700">Diamond</td><td className="px-4 py-3 text-sm text-gray-700">Specialty</td><td className="px-4 py-3 text-sm text-gray-700">The only effective abrasive</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Tool steel / HSS</td><td className="px-4 py-3 text-sm text-gray-700">CBN</td><td className="px-4 py-3 text-sm text-gray-700">Specialty</td><td className="px-4 py-3 text-sm text-gray-700">Preferred superhard abrasive for ferrous materials</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Aluminum alloy</strong> is the quintessential "loading-prone" material. Silicon carbide (SiC)—with its high hardness and friable nature—self-sharpens continuously and resists loading, making it the go-to choice.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Stainless steel</strong> work-hardens aggressively. You need ceramic alumina or zirconia alumina—both feature "self-sharpening" behavior where abrasive grains fracture during grinding to expose fresh cutting edges.</p>
          <p className="text-gray-700 mb-6 leading-relaxed"><strong>Titanium alloy</strong> is one of the most difficult-to-grind metals. Titanium's extremely low thermal conductivity concentrates grinding heat at the surface. Zirconia alumina or ceramic alumina is mandatory, paired with low depth-of-cut and ample coolant.</p>
          <div className="border-l-4 border-accent-orange bg-orange-50 rounded-r-lg p-4 mb-6"><p className="text-gray-700 text-sm">💡 Key Point: Abrasive selection isn't about "the harder, the better"—it's about matching material characteristics.</p></div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Diamond vs. CBN — A Classic Selection Mistake</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">Diamond is indeed the hardest known natural material (~7,000 HK). But at high grinding temperatures (above 700°C), carbon undergoes diffusion reactions with ferrous materials—carbon atoms migrate from the diamond surface into the iron matrix, accelerating diamond grain wear. This is why diamond is <strong>unsuitable for grinding ferrous materials.</strong></p>
          <p className="text-gray-700 mb-4 leading-relaxed">CBN (Cubic Boron Nitride) has a microhardness of ~5,000 HK—lower than diamond—but is <strong>chemically inert to ferrous materials</strong> at high temperatures. For precision grinding of tool steel, high-speed steel, and bearing steel, CBN is the superhard abrasive of choice.</p>
          <div className="border-l-4 border-accent-orange bg-orange-50 rounded-r-lg p-4 mb-6"><p className="text-gray-700 text-sm">Quick rule: <strong>Diamond</strong> → Non-ferrous superhard materials (cemented carbide, ceramics, optical glass). <strong>CBN</strong> → Ferrous material precision grinding (tool steel, HSS, bearing steel).</p></div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. FEPA Grit–Ra Correlation Chart</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">Below is the typical FEPA grit-to-Ra correlation for 304 stainless steel:</p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead className="bg-gray-100"><tr><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">FEPA P-grit</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Particle Size (μm)</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Ra Range (μm)</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Surface Condition</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Typical Application</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
<tr><td className="px-4 py-3 text-sm text-gray-700">P80</td><td className="px-4 py-3 text-sm text-gray-700">190</td><td className="px-4 py-3 text-sm text-gray-700">6.3–3.2</td><td className="px-4 py-3 text-sm text-gray-700">Coarse grinding marks</td><td className="px-4 py-3 text-sm text-gray-700">Heavy stock removal, weld removal</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P120</td><td className="px-4 py-3 text-sm text-gray-700">125</td><td className="px-4 py-3 text-sm text-gray-700">3.2–1.6</td><td className="px-4 py-3 text-sm text-gray-700">Visible grind marks</td><td className="px-4 py-3 text-sm text-gray-700">Medium-coarse grinding</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P180</td><td className="px-4 py-3 text-sm text-gray-700">82</td><td className="px-4 py-3 text-sm text-gray-700">3.2–1.6</td><td className="px-4 py-3 text-sm text-gray-700">Coarse grind marks</td><td className="px-4 py-3 text-sm text-gray-700">Medium grinding</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P240</td><td className="px-4 py-3 text-sm text-gray-700">58.5</td><td className="px-4 py-3 text-sm text-gray-700">1.6–0.8</td><td className="px-4 py-3 text-sm text-gray-700">Visible but finer</td><td className="px-4 py-3 text-sm text-gray-700">Fine grinding</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P320</td><td className="px-4 py-3 text-sm text-gray-700">46.2</td><td className="px-4 py-3 text-sm text-gray-700">1.6–0.8</td><td className="px-4 py-3 text-sm text-gray-700">Relatively fine marks</td><td className="px-4 py-3 text-sm text-gray-700">Brushed finish start</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P400</td><td className="px-4 py-3 text-sm text-gray-700">35</td><td className="px-4 py-3 text-sm text-gray-700">0.8–0.4</td><td className="px-4 py-3 text-sm text-gray-700">Fine grind marks</td><td className="px-4 py-3 text-sm text-gray-700">Fine grinding</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P600</td><td className="px-4 py-3 text-sm text-gray-700">25.75</td><td className="px-4 py-3 text-sm text-gray-700">0.8–0.4</td><td className="px-4 py-3 text-sm text-gray-700">Smooth to touch</td><td className="px-4 py-3 text-sm text-gray-700">Fine grinding / semi-polish</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P800</td><td className="px-4 py-3 text-sm text-gray-700">21.8</td><td className="px-4 py-3 text-sm text-gray-700">0.4–0.2</td><td className="px-4 py-3 text-sm text-gray-700">Slight sheen</td><td className="px-4 py-3 text-sm text-gray-700">Pre-polish</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P1200</td><td className="px-4 py-3 text-sm text-gray-700">15.3</td><td className="px-4 py-3 text-sm text-gray-700">0.2–0.1</td><td className="px-4 py-3 text-sm text-gray-700">Nearly mark-free</td><td className="px-4 py-3 text-sm text-gray-700">Fine polishing</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P2000</td><td className="px-4 py-3 text-sm text-gray-700">9.5</td><td className="px-4 py-3 text-sm text-gray-700">0.1–0.05</td><td className="px-4 py-3 text-sm text-gray-700">Slight gloss</td><td className="px-4 py-3 text-sm text-gray-700">Pre-mirror finish</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">P2500</td><td className="px-4 py-3 text-sm text-gray-700">8.4</td><td className="px-4 py-3 text-sm text-gray-700">&lt;0.05</td><td className="px-4 py-3 text-sm text-gray-700">High gloss</td><td className="px-4 py-3 text-sm text-gray-700">Mirror polishing</td></tr>
              </tbody>
            </table>
          </div>
          <div className="border-l-4 border-accent-orange bg-orange-50 rounded-r-lg p-4 mb-6"><p className="text-gray-700 text-sm">⚠️ Grit progression principle: Each step should increase by no more than 50%. Example: P120 → P180 → P240 → P320. Skipping grits means deep scratches cannot be removed.</p></div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Equipment Selection Quick Reference</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead className="bg-gray-100"><tr><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Equipment Type</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Suitable Workpieces</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Typical Precision (Ra)</th><th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Key Characteristics</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
<tr><td className="px-4 py-3 text-sm text-gray-700">Belt grinder</td><td className="px-4 py-3 text-sm text-gray-700">Small-to-medium parts, welds, tubes</td><td className="px-4 py-3 text-sm text-gray-700">0.4–6.3 μm</td><td className="px-4 py-3 text-sm text-gray-700">Versatile, good heat dissipation</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Surface grinder</td><td className="px-4 py-3 text-sm text-gray-700">Flat workpieces, molds</td><td className="px-4 py-3 text-sm text-gray-700">0.2–1.6 μm</td><td className="px-4 py-3 text-sm text-gray-700">High precision, rigid construction</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Polishing machine</td><td className="px-4 py-3 text-sm text-gray-700">Appearance-critical parts</td><td className="px-4 py-3 text-sm text-gray-700">0.05–0.4 μm</td><td className="px-4 py-3 text-sm text-gray-700">Pursuit of aesthetic quality</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Vibratory finishing</td><td className="px-4 py-3 text-sm text-gray-700">Small, high-volume parts</td><td className="px-4 py-3 text-sm text-gray-700">0.2–1.6 μm</td><td className="px-4 py-3 text-sm text-gray-700">Batch deburring / polishing</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">Wide-belt grinding</td><td className="px-4 py-3 text-sm text-gray-700">Metal sheets / large plates</td><td className="px-4 py-3 text-sm text-gray-700">0.08–3.2 μm</td><td className="px-4 py-3 text-sm text-gray-700">Sheet thickness control / brushing</td></tr>
<tr><td className="px-4 py-3 text-sm text-gray-700">CNC grinding & polishing</td><td className="px-4 py-3 text-sm text-gray-700">Complex curved surfaces</td><td className="px-4 py-3 text-sm text-gray-700">0.05–0.8 μm</td><td className="px-4 py-3 text-sm text-gray-700">Automated, high consistency</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">The correct decision sequence: <strong>Surface requirement → Process route → Abrasive & parameters → Equipment configuration</strong>. This sequence is irreversible.</p>
          <div className="border-l-4 border-accent-orange bg-orange-50 rounded-r-lg p-4 mb-6"><p className="text-gray-700 text-sm">💡 Key Point: Process design precedes equipment selection. Start from the surface requirement, then work backward to equipment and parameters.</p></div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>The core of abrasive selection is "material–abrasive matching."</strong> Al₂O₃ for carbon steel, SiC for aluminum and copper, diamond for non-ferrous superhard materials, CBN for ferrous precision grinding.</li>
            <li><strong>Diamond ≠ universal abrasive.</strong> Diamond reacts chemically with iron at high temperatures and is unsuitable for ferrous materials. CBN is the superhard abrasive of choice for ferrous precision grinding.</li>
            <li><strong>Grit progression is the iron rule of grinding and polishing.</strong> Each step should increase by no more than 50%. Deep scratches caused by skipping grits cannot be eliminated by subsequent steps.</li>
            <li><strong>Process design precedes equipment selection.</strong> Surface requirement → Process route → Abrasive & parameters → Equipment configuration—this is the correct decision path.</li>
          </ol>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>

            <details className="mb-4 bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Can the same abrasive be used for both carbon steel and stainless steel?</summary>
              <p className="text-gray-700 mt-3 leading-relaxed">Not recommended. Carbon steel grinds well with standard aluminum oxide (Al₂O₃)—it's cost-effective. Stainless steel requires ceramic alumina or zirconia alumina because stainless work-hardens aggressively, causing standard alumina to dull rapidly.</p>
            </details>

            <details className="mb-4 bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">What happens if I skip grits during grinding and polishing?</summary>
              <p className="text-gray-700 mt-3 leading-relaxed">Skipping grits is the most common process error. The job of each step is to 'completely eliminate the scratches from the previous step.' If you jump from P120 to P320, the deep scratches from P120 cannot be removed. The correct approach is sequential progression, each step increasing by no more than 50%.</p>
            </details>

            <details className="mb-4 bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Do different materials produce the same surface finish at the same grit size?</summary>
              <p className="text-gray-700 mt-3 leading-relaxed">No. The FEPA grit-to-Ra correlation chart is based on 304 stainless steel. Aluminum alloy is softer, achieving lower Ra values at the same grit. Titanium alloy is harder, yielding higher Ra values. When switching materials, validate parameters through test grinding.</p>
            </details>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
            <p className="text-gray-600 mb-4">FacetFin starts from your surface requirements and matches the right abrasive, process, and equipment. Whether it's carbon steel rough grinding, stainless steel precision grinding, or titanium alloy specialty grinding.</p>
            <Link to="/contact" className="inline-flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              Get Free Evaluation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>



          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/knowledge/ra-rz-gu-parameters-decoded" className="flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Prev: Parameters
            </Link>
            <Link to="/knowledge/surface-inspection-guide" className="flex items-center font-bold text-accent-orange hover:text-gray-900 transition-colors">
              Next: Inspection Guide
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
