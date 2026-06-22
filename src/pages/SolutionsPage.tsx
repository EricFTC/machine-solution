import SEO from '../components/SEO';
import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Factory, Cog, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../components/ui/Buttons';

export default function SolutionsPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Metal Finishing Solutions — Deburring, Polishing & Grinding"
        description="Explore our metal surface finishing solutions: deburring and edge radiusing, flat and cylindrical grinding, mirror polishing and fine finishing. Process-verified results for every application."
        canonical="/solutions"
        keywords="metal deburring solution, metal polishing solution, metal grinding solution, edge radiusing, mirror polishing, surface finishing process"
      />

      {/* HERO */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-accent-orange text-sm font-bold tracking-widest uppercase border border-orange-100 mb-6">
            Process-Verified Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto">
            Metal Surface Finishing Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every solution starts with process validation on your actual parts. We don't recommend a process until we've proven it works on your geometry, your material, and your finish requirements.
          </p>
        </div>
      </section>

      {/* SOLUTION 1 - DEBURRING */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-7 h-7 text-accent-orange" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-accent-orange">Solution 01</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Deburring & Edge Radiusing
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Remove sharp burrs, laser oxide, and dangerous edges from stamped, laser-cut, or machined metal parts. Our process delivers uniform edge quality that's safe for handling and ready for coating or assembly.
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Materials We Process</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Stainless Steel', 'Carbon Steel', 'Aluminum', 'Copper', 'Brass'].map(m => (
                      <span key={m} className="text-xs font-mono uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-2">{m}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Typical Parts</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Stamped plates & brackets</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Laser-cut panels & enclosures</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> CNC machined bodies & housings</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Welded frames & assemblies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent-orange mb-2">Typical Results</h4>
                  <p className="text-gray-900 font-bold">Uniform edge radius, burr-free surfaces, safe handling edges ready for downstream coating or assembly.</p>
                </div>
              </div>

              <Link to="/contact">
                <PrimaryButton className="px-8 shadow-sm">
                  Request Deburring Evaluation <ArrowRight className="w-4 h-4 ml-2" />
                </PrimaryButton>
              </Link>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Process Overview</h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Part Analysis', desc: 'Evaluate burr type, location, and base material thickness' },
                  { step: '02', title: 'Media Selection', desc: 'Select abrasive media and processing method based on geometry' },
                  { step: '03', title: 'Sample Processing', desc: 'Process representative parts to validate edge quality and dimensional integrity' },
                  { step: '04', title: 'Production Recommendation', desc: 'Deliver validated process with cycle times, media specs, and equipment configuration' },
                ].map(s => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-accent-orange text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">{s.step}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{s.title}</h4>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION 2 - GRINDING */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Grinding Capabilities</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent-orange pl-4">
                  <h4 className="font-bold text-gray-900">Flat Surface Grinding</h4>
                  <p className="text-sm text-gray-600">Metal plates, sheets, and flat panels — remove scale, scratches, and achieve uniform surface quality</p>
                </div>
                <div className="border-l-2 border-accent-orange pl-4">
                  <h4 className="font-bold text-gray-900">Cylindrical Grinding</h4>
                  <p className="text-sm text-gray-600">Tubes, shafts, and cylindrical components — dimensional calibration and consistent brushed finish</p>
                </div>
                <div className="border-l-2 border-accent-orange pl-4">
                  <h4 className="font-bold text-gray-900">Brushed & Satin Finishing</h4>
                  <p className="text-sm text-gray-600">Decorative and functional brushed textures — linear, random orbital, and multidirectional patterns</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-bold text-gray-900">Weld Removal & Blending</h4>
                  <p className="text-sm text-gray-600">Grind down weld seams and blend into parent material for uniform appearance</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center">
                  <Cog className="w-7 h-7 text-accent-orange" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-accent-orange">Solution 02</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Flat & Cylindrical Grinding
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Remove deep scratches, mill scale, and dimensional inconsistencies from flat and cylindrical metal components. Achieve uniform surface geometry and consistent brushed finishes.
              </p>

              <div className="space-y-4 mb-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Materials We Process</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Stainless Steel 304/316', 'Aluminum 6061/5052', 'Carbon Steel', 'Copper & Brass', 'Titanium'].map(m => (
                      <span key={m} className="text-xs font-mono uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-2">{m}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent-orange mb-2">Typical Results</h4>
                  <p className="text-gray-900 font-bold">Consistent dimensional tolerance, uniform Ra values, and repeatable brushed or satin finish quality across batches.</p>
                </div>
              </div>

              <Link to="/contact">
                <PrimaryButton className="px-8 shadow-sm">
                  Request Grinding Evaluation <ArrowRight className="w-4 h-4 ml-2" />
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION 3 - POLISHING */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-accent-orange" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-accent-orange">Solution 03</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Mirror Polishing & Fine Finishing
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Achieve high-reflectivity mirror finishes or precision surface quality for cosmetic and functional applications. We eliminate micro-defects and deliver measurable Ra/Rz improvements validated on your parts.
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Applications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Medical device components</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Sanitary fittings & food-grade surfaces</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Premium consumer product housings</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Architectural metal features</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent-orange mb-2">Typical Results</h4>
                  <p className="text-gray-900 font-bold">Significant Ra improvement with high-quality mirror appearance. Specific finish levels validated per application requirement.</p>
                </div>
              </div>

              <Link to="/contact">
                <PrimaryButton className="px-8 shadow-sm">
                  Request Polishing Evaluation <ArrowRight className="w-4 h-4 ml-2" />
                </PrimaryButton>
              </Link>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Finish Quality Levels</h3>
              <div className="space-y-4">
                {[
                  { grade: '#4 / Satin', ra: 'Ra 0.4–0.8 μm', desc: 'Directional brushed finish, common for architectural and appliance applications' },
                  { grade: '#6 / Fine Satin', ra: 'Ra 0.2–0.4 μm', desc: 'Finer directional lines, good for visible cosmetic surfaces' },
                  { grade: '#7 / Mirror', ra: 'Ra 0.05–0.2 μm', desc: 'High reflectivity, near-mirror quality for premium applications' },
                  { grade: '#8 / True Mirror', ra: 'Ra <0.05 μm', desc: 'Full mirror reflectivity, medical and optical grade surfaces' },
                ].map(f => (
                  <div key={f.grade} className="bg-white border border-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-gray-900">{f.grade}</span>
                      <span className="text-xs font-mono text-accent-orange bg-orange-50 px-2 py-1 rounded">{f.ra}</span>
                    </div>
                    <p className="text-sm text-gray-600">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION 4 - BRUSH FINISHING / TEXTURING */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Texture Options</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Linear Brushed', desc: 'Parallel directional lines, classic stainless steel look' },
                    { name: 'Random Orbital', desc: 'Non-directional "frosted" texture, uniform appearance from all angles' },
                    { name: 'Satin / Matte', desc: 'Low-reflectivity smooth finish, reduces glare' },
                    { name: 'Vibration Finish', desc: 'Soft, non-directional pattern for premium decorative surfaces' },
                  ].map(t => (
                    <div key={t.name} className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{t.name}</h4>
                      <p className="text-xs text-gray-600">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-7 h-7 text-accent-orange" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-accent-orange">Solution 04</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Brush Finishing & Surface Texturing
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Apply uniform decorative or functional surface textures to metal components. From classic linear brushed finishes to non-directional orbital patterns, we validate the exact texture and roughness parameters for your application.
              </p>

              <div className="space-y-4 mb-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Common Applications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Architectural stainless steel panels</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Aluminum heatsinks & cooling plates</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Consumer electronics housings</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Adhesion preparation surfaces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent-orange mb-2">Typical Results</h4>
                  <p className="text-gray-900 font-bold">Consistent, repeatable texture with controlled Ra values. Non-directional finishes eliminate visible directional lines.</p>
                </div>
              </div>

              <Link to="/contact">
                <PrimaryButton className="px-8 shadow-sm">
                  Request Texturing Evaluation <ArrowRight className="w-4 h-4 ml-2" />
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Not Sure Which Solution Fits?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Send us your part drawing, material, and finish requirements. Our engineers will evaluate and recommend the right process — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <PrimaryButton className="px-12 py-5 h-auto text-lg shadow-md hover:-translate-y-1 transition-transform">
                Get Process Recommendation
              </PrimaryButton>
            </Link>
            <Link to="/cases">
              <span className="inline-flex items-center font-bold text-lg text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-accent-orange hover:border-accent-orange transition-colors">
                View Verified Cases <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
