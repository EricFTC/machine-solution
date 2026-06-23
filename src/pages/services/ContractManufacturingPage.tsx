import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, Factory, PackageCheck, Truck, FileText, Ruler, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/ui/Buttons';

export default function ContractManufacturingPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">

      <SEO
        title="Contract Manufacturing — Metal Surface Finishing Services"
        description="Outsource your metal surface finishing to our qualified production network. Deburring, polishing, grinding, and texturing — from prototype to volume production. Sample processing available with Ra/Rz validation."
        canonical="/services/contract-manufacturing"
        keywords="contract manufacturing metal, metal finishing outsourcing, surface finishing service, deburring service, polishing service, metal grinding service, toll finishing, job shop metal finishing"
      />

      {/* HERO */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-accent-orange text-sm font-bold tracking-widest uppercase border border-orange-100 mb-6">
              Contract Manufacturing
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
              Your Parts, Our Process
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Don't want to invest in finishing equipment? Send us your parts — we handle the process, validate the results, and deliver finished components ready for your next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <PrimaryButton className="px-8 shadow-sm text-lg">
                  Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
                </PrimaryButton>
              </Link>
              <span className="text-sm text-gray-500 font-medium self-center">Ra/Rz validated results</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From your drawing to finished parts — a straightforward, engineer-driven process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FileText, step: '01', title: 'Send Requirements', desc: 'Share your part drawing, material spec, and finish requirements. Photos of sample parts work too.' },
              { icon: Ruler, step: '02', title: 'Process Validation', desc: 'We process sample parts and return them with a detailed finish report including Ra/Rz measurements.' },
              { icon: Factory, step: '03', title: 'Production Run', desc: 'Once you approve the sample, we run the production batch through our qualified manufacturing network.' },
              { icon: PackageCheck, step: '04', title: 'Delivery', desc: 'Finished parts are inspected, packaged, and shipped to your dock — ready for assembly or coating.' },
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <div className="w-12 h-12 bg-accent-orange text-white rounded-lg flex items-center justify-center font-bold text-lg mb-6">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PROCESS */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Finishing Services Available
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Every part is processed with validated methods and measured results. We don't guess — we prove the process on your parts first.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Deburring & Edge Radiusing', desc: 'Remove burrs from stamped, laser-cut, and machined parts. Uniform edge quality for safe handling and coating adhesion.' },
                  { title: 'Flat & Cylindrical Grinding', desc: 'Dimensional calibration, scale removal, and consistent surface geometry on plates, sheets, tubes, and shafts.' },
                  { title: 'Polishing & Mirror Finishing', desc: 'From #4 satin to #8 true mirror. Ra/Rz measured and documented for every order.' },
                  { title: 'Brush Finishing & Texturing', desc: 'Linear, random orbital, satin, and vibration textures. Consistent appearance across batches.' },
                  { title: 'Weld Blending & Seam Removal', desc: 'Grind down weld seams and blend into parent material for uniform appearance.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-accent-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white border border-gray-200 rounded-xl p-8 sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Materials We Process</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Stainless Steel 304', 'Stainless Steel 316/316L', 'Carbon Steel', 'Aluminum 6061/5052', 'Copper & Brass', 'Copper-Aluminum Alloy'].map(m => (
                    <span key={m} className="text-xs font-mono uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-700 px-3 py-2 rounded">
                      {m}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-6">Part Types</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Flat plates & panels</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Tubes, pipes & shafts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Stamped & laser-cut parts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> CNC machined components</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Heatsinks & cooling plates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Welded frames & assemblies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUME TIERS */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">From One-Off to Volume</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Whether you need a single prototype or ongoing production, we scale to your requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Ruler className="w-6 h-6 text-accent-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prototype & Sample</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Process validation on your actual parts. Ideal for R&D, NPI, and proving the finish spec before committing to volume.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 1–50 parts</li>
                <li>• Ra/Rz finish report included</li>
                <li>• Typical turnaround: 5–7 business days</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 border-t-4 border-t-accent-orange">
              <div className="w-12 h-12 bg-accent-orange rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production Orders</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Regular batch processing through our qualified manufacturing network. Consistent quality, competitive pricing.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 50–5,000+ parts per order</li>
                <li>• Process locked after sample approval</li>
                <li>• Batch-to-batch consistency guaranteed</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-accent-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Supply</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Scheduled deliveries for repeat orders. We hold your process parameters and deliver on your cadence.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Monthly / quarterly schedules</li>
                <li>• Dedicated process parameters</li>
                <li>• Priority scheduling for contract clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Why Outsource to Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We bring engineering discipline to contract finishing. Every order starts with process validation — not guesswork.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Process-First Approach', desc: 'We do not just run parts. We validate the specific process on your geometry and material before production, so results are repeatable.' },
                  { title: 'Qualified Manufacturing Network', desc: 'Production runs through vetted facilities with the right equipment and environmental compliance for your part requirements.' },
                  { title: 'Measured & Documented', desc: 'Every order ships with Ra/Rz surface measurement data. You know exactly what you are getting — no surprises at incoming inspection.' },
                  { title: 'No Capital Investment', desc: 'Skip the equipment purchase, tooling setup, and operator training. Pay per part, not per machine.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-accent-orange text-white flex items-center justify-center shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">Typical Industries Served</h3>
              <div className="space-y-4">
                {[
                  { industry: 'Electronics & Thermal Management', parts: 'Heatsinks, cooling plates, enclosures' },
                  { industry: 'Food & Beverage Processing', parts: 'Sanitary fittings, vessel surfaces, food-grade finishes' },
                  { industry: 'Architecture & Interior Design', parts: 'Stainless panels, elevator doors, decorative fixtures' },
                  { industry: 'General Industrial', parts: 'Machine components, brackets, frames, welded assemblies' },
                  { industry: 'Consumer Products', parts: 'Appliance housings, premium hardware, decorative surfaces' },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900">{row.industry}</span>
                      <p className="text-sm text-gray-600">{row.parts}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ready to Outsource Your Finishing?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Send your part drawing, material, and finish requirements. We'll provide a process recommendation and quote — typically within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <PrimaryButton className="px-12 py-5 h-auto text-lg shadow-md hover:-translate-y-1 transition-transform">
                Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
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
