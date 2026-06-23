import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, CheckCircle2, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/ui/Buttons';

export default function BrushingGrindingPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Metal Brush Finishing & Grinding Service — Flat & Cylindrical"
        description="Professional metal brush finishing and grinding service. Flat surface grinding, cylindrical grinding, brushed and satin textures. Uniform surface quality for stainless steel, aluminum, and more."
        canonical="/services/brushing-grinding"
        keywords="metal brush finishing, metal grinding service, flat surface grinding, cylindrical grinding, brushed finish, satin finish, surface grinding"
      />

      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-accent-orange text-sm font-bold tracking-widest uppercase border border-orange-100 mb-6">Service</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">Brush Finishing & Grinding</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              From flat surface grinding to decorative brush textures and cylindrical finishing — we deliver uniform, repeatable surface quality with validated process parameters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact"><PrimaryButton className="px-8 py-4 h-auto text-lg shadow-md">Request Grinding Evaluation <ArrowRight className="w-5 h-5 ml-2" /></PrimaryButton></Link>
              <span className="text-sm text-gray-500 font-medium self-center">Engineering evaluation available</span>
            </div>
          </div>
        </div>
      </section>

      {/* GRINDING CAPABILITIES */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12 text-center">Grinding Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Flat Surface Grinding', desc: 'Precision grinding of flat metal plates, sheets, and panels. Remove mill scale, deep scratches, and dimensional inconsistencies. Achieve uniform surface quality and tight flatness tolerances.', specs: ['Plates up to 1500mm width', 'Ra 0.2–1.6 μm range', 'Thickness calibration', 'Consistent batch quality'] },
              { title: 'Cylindrical Grinding', desc: 'External and internal grinding of tubes, shafts, and cylindrical components. Dimensional calibration with consistent surface finish along the entire length.', specs: ['Tubes and shafts', 'OD and ID grinding', 'Dimensional tolerance ±0.01mm', 'Consistent brushed finish'] },
              { title: 'Weld Seam Removal', desc: 'Grind down and blend weld seams flush with parent material. Essential for stainless steel tanks, piping, and structural components requiring uniform appearance.', specs: ['Flush grinding', 'Seam blending', 'Corrosion-sensitive areas', 'Post-weld finishing'] },
              { title: 'Scale & Oxide Removal', desc: 'Remove heat tint, mill scale, and oxide layers from hot-rolled steel, heat-treated parts, and welded assemblies. Prepares surfaces for coating, plating, or inspection.', specs: ['Hot-rolled steel descaling', 'Heat tint removal', 'Pre-coating preparation', 'Weld discoloration'] },
            ].map(g => (
              <div key={g.title} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Cog className="w-5 h-5 text-accent-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{g.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{g.desc}</p>
                <ul className="space-y-2">
                  {g.specs.map(s => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRUSH TEXTURES */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 text-center">Brush & Surface Textures</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16">Beyond dimensional grinding, we apply decorative and functional surface textures with controlled roughness parameters.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Linear Brushed', desc: 'Parallel directional lines running in one direction. Classic stainless steel appearance for architectural and appliance applications.', ra: 'Ra 0.2–0.6 μm' },
              { name: 'Random Orbital', desc: 'Non-directional "frosted" or swirl pattern. Uniform appearance from all viewing angles. Premium decorative finish.', ra: 'Ra 0.3–0.8 μm' },
              { name: 'Satin / Matte', desc: 'Low-reflectivity smooth finish. Reduces glare while maintaining a refined appearance. Good for high-visibility applications.', ra: 'Ra 0.1–0.4 μm' },
              { name: 'Vibration Finish', desc: 'Soft, non-directional pattern created by vibration sanding. Popular for aluminum heatsinks and premium consumer products.', ra: 'Ra 0.4–1.2 μm' },
            ].map(t => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t.name}</h3>
                <span className="text-xs font-mono text-accent-orange bg-orange-50 px-2 py-1 rounded">{t.ra}</span>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Need a Specific Surface Finish?</h2>
          <p className="text-lg text-gray-600 mb-8">Tell us your material, target Ra, and part geometry. We'll validate the process on your actual parts.</p>
          <Link to="/contact"><PrimaryButton className="px-12 py-5 h-auto text-lg shadow-md hover:-translate-y-1 transition-transform">Submit Your Part <ArrowRight className="w-5 h-5 ml-2" /></PrimaryButton></Link>
        </div>
      </section>
    </div>
  );
}
