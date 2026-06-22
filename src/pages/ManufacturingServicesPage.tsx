import React from 'react';
import SEO from '../components/SEO';
import { ArrowRight, TestTube, Factory, Settings2, CheckCircle2, ShieldCheck, Gem } from 'lucide-react';
import { PrimaryButton } from '../components/ui/Buttons';
import { Link } from 'react-router-dom';

export default function ManufacturingServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#1A1F2B] text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1920" 
            alt="Manufacturing Process Validation" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] via-[#1A1F2B]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="block text-sm font-bold uppercase tracking-widest text-accent-orange mb-4 border-l-2 border-accent-orange pl-3">Manufacturing Services</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">Process Validation & Testing</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-snug">
              Validate processes on your actual parts before committing to equipment investment.
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              We provide sample testing, prototype finishing, and small batch production to ensure the recommended finishing process delivers consistent results.
            </p>
            <Link to="/contact">
              <PrimaryButton className="px-8 py-4 h-auto text-lg hover:-translate-y-1 shadow-md hover:shadow-lg transition-transform">
                Request Sample Testing <ArrowRight className="w-5 h-5 ml-2" />
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Manufacturing Validation Services</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:border-gray-300 transition-colors">
              <TestTube className="w-10 h-10 text-gray-700 mb-6" />
              <h3 className="text-xl font-bold tracking-tight mb-3 text-gray-900">Sample Testing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Send us representative parts. We will process them using our recommended methodology and return them alongside a detailed finishing report.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:border-gray-300 transition-colors">
      <SEO
        title="Process Validation & Testing — Sample Processing & Prototype Finishing"
        description="Validate finishing processes on your actual parts before committing to equipment. Sample testing, prototype finishing, pilot batch validation, and small batch production support for metal components."
        canonical="/services/manufacturing-validation"
        keywords="sample testing metal, prototype finishing, process validation, small batch manufacturing, metal finishing validation"
      />
              <Settings2 className="w-10 h-10 text-gray-700 mb-6" />
              <h3 className="text-xl font-bold tracking-tight mb-3 text-gray-900">Prototype Finishing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Support for R&D and NPI phases. We help dial in the surface finish requirements on engineering prototypes before you freeze the design.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:border-gray-300 transition-colors">
              <ShieldCheck className="w-10 h-10 text-gray-700 mb-6" />
              <h3 className="text-xl font-bold tracking-tight mb-3 text-gray-900">Process Validation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Run a pilot batch to verify cycle times, consumable wear rates, and surface consistency (Ra/Rz metrics) in a production-like environment.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl border-t-4 border-t-accent-orange hover:border-gray-300 transition-colors">
              <Factory className="w-10 h-10 text-gray-700 mb-6" />
              <h3 className="text-xl font-bold tracking-tight mb-3 text-gray-900">Small Batch Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Temporary production support to bridge the gap while your in-house equipment is being built and commissioned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-gray-900">Supported Processes</h2>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 p-6 rounded-lg flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5 text-gray-700" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Deburring & Edge Radiusing</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Removing primary burrs, sharp edges, and laser oxide layers on stamped or machined parts.</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5 text-gray-700" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Grinding & Calibration</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Removing deep scratches, mill marks, and establishing consistent surface geometry.</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5 text-gray-700" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Polishing & Mirror Finishing</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Significantly reducing Ra values for cosmetic or functional high-reflectivity requirements.</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5 text-gray-700" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Surface Texturing</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Applying uniform brushed, orbital, or matte finishes for aesthetic uniformity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-gray-900">Advanced Exploration Areas</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                For applications that resist conventional abrasive methods, we maintain advanced processing capabilities for engineering evaluation.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Gem className="w-6 h-6 text-accent-orange" />
                    <h4 className="font-bold text-xl text-gray-900">Hard Material Processing</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Sample testing for highly brittle or ultra-hard materials that shatter or overheat under standard grinding forces.</p>
                  <ul className="flex gap-2 flex-wrap text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <li className="bg-gray-100 px-3 py-1 rounded">Sapphire</li>
                    <li className="bg-gray-100 px-3 py-1 rounded">Silicon Carbide</li>
                    <li className="bg-gray-100 px-3 py-1 rounded">Tungsten</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings2 className="w-6 h-6 text-accent-orange" />
                    <h4 className="font-bold text-xl text-gray-900">Ultrasonic Finishing</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Prototype evaluation of ultrasonic-assisted polishing for intricate mold cavities and materials requiring extremely low cutting forces.</p>
                  <ul className="flex gap-2 flex-wrap text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <li className="bg-gray-100 px-3 py-1 rounded">Mold Steel</li>
                    <li className="bg-gray-100 px-3 py-1 rounded">Zirconia</li>
                    <li className="bg-gray-100 px-3 py-1 rounded">Ceramics</li>
                  </ul>
                </div>
              </div>

               <div className="mt-8">
                  <Link to="/advanced-surface-technologies" className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-accent-orange transition-colors">
                    Explore Advanced Technologies <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Need to prove the process first?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Send us your sample parts. We'll run the process and return them for your inspection before you invest in equipment.
          </p>
          <Link to="/contact">
            <PrimaryButton className="px-12 py-5 h-auto text-lg hover:-translate-y-1 shadow-md hover:shadow-lg transition-transform">
              Discuss Sample Testing <ArrowRight className="w-5 h-5 ml-2" />
            </PrimaryButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
