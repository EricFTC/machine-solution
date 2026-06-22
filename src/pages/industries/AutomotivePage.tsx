import SEO from '../../components/SEO';
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/ui/Buttons';

export default function AutomotivePage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Metal Finishing for Automotive — Deburring, Polishing & Surface Treatment"
        description="Metal surface finishing for automotive industry: deburring stamped parts, polishing decorative trim, grinding engine components. IATF 16949 quality standards. Process validation on your parts."
        canonical="/industries/automotive"
        keywords="automotive metal finishing, automotive deburring, automotive polishing, stamped part deburring, automotive surface treatment, car part finishing"
      />

      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-accent-orange text-sm font-bold tracking-widest uppercase border border-orange-100 mb-6">Industry</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">Metal Finishing for Automotive</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              From body panel deburring to engine component grinding and decorative trim polishing — validated finishing processes for automotive manufacturing requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12">Common Automotive Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { part: 'Stamped Body Panels & Brackets', process: 'Deburring & Edge Radiusing', desc: 'Remove shear burrs and laser oxide from stamped and laser-cut body panels. Uniform edge quality for safe robotic handling and proper e-coating adhesion.' },
              { part: 'Decorative Trim & Badging', process: 'Mirror Polishing & Brush Finishing', desc: 'Achieve #7 or #8 mirror finish on stainless steel and aluminum trim pieces. Consistent brushed textures for interior and exterior decorative elements.' },
              { part: 'Engine & Drivetrain Components', process: 'Precision Grinding', desc: 'Cylindrical grinding of shafts, flat grinding of gasket surfaces. Dimensional accuracy and surface quality for sealing and bearing applications.' },
              { part: 'Heat Exchangers & Cooling Plates', process: 'Surface Texturing', desc: 'Random orbital and vibration finishing for aluminum heatsinks. Controlled surface roughness for improved thermal interface and adhesive bonding.' },
              { part: 'Exhaust System Components', process: 'Weld Blending & Polishing', desc: 'Grind and blend weld seams on stainless steel exhaust components. Mirror or brushed finish for premium appearance and corrosion resistance.' },
              { part: 'Fasteners & Hardware', process: 'Vibratory Deburring', desc: 'Bulk deburring of machined and formed fasteners. Remove forming burrs and ensure uniform edge quality for assembly line feeding.' },
            ].map(a => (
              <div key={a.part} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{a.part}</h3>
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3 py-1 rounded mb-3">{a.process}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Working on Automotive Parts?</h2>
          <p className="text-lg text-gray-600 mb-8">Send your part drawing with material and finish requirements. We'll validate the process and provide a production recommendation.</p>
          <Link to="/contact"><PrimaryButton className="px-12 py-5 h-auto text-lg shadow-md hover:-translate-y-1 transition-transform">Submit Your Part <ArrowRight className="w-5 h-5 ml-2" /></PrimaryButton></Link>
        </div>
      </section>
    </div>
  );
}
