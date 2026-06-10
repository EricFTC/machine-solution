import React from 'react';
import { ArrowRight, Layers, Cog, Globe, CheckCircle2, Factory } from 'lucide-react';
import { PrimaryButton } from '../components/ui/Buttons';
import { Link } from 'react-router-dom';

export default function EquipmentSolutionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#1A1F2B] text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
            alt="Industrial equipment systems" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] via-[#1A1F2B]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="block text-sm font-bold uppercase tracking-widest text-accent-orange mb-4 border-l-2 border-accent-orange pl-3">Equipment Solutions</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">Equipment Integration & Automation</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-snug">
              Process first. Equipment second. We integrate the right machinery to scale your validated surface finishing process.
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              From standalone stations to fully automated production lines, we provide equipment solutions engineered specifically around your part and throughput requirements.
            </p>
            <Link to="/contact">
              <PrimaryButton className="px-8 py-4 h-auto text-lg hover:-translate-y-1 shadow-md hover:shadow-lg transition-transform">
                Discuss Equipment Integration <ArrowRight className="w-5 h-5 ml-2" />
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">We Don't Start With a Catalog.</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Many suppliers try to fit your part into their standard machine. We work backward: we define the optimal finishing parameters for your part, then integrate the equipment that delivers it reliably.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <span className="bg-gray-100 px-4 py-2 rounded">Part Analysis</span>
            <span className="text-gray-300">→</span>
            <span className="bg-gray-100 px-4 py-2 rounded">Process Validation</span>
            <span className="text-gray-300">→</span>
            <span className="bg-orange-50 text-accent-orange px-4 py-2 rounded border border-orange-100">Equipment Integration</span>
          </div>
        </div>
      </section>

      {/* INTEGRATION CAPABILITIES */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Equipment Capabilities</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-10 rounded-xl hover:shadow-md transition-shadow">
              <Cog className="w-12 h-12 text-gray-400 mb-6" />
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-gray-900 border-b border-gray-100 pb-4">Standalone Machines</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Standard and modified standalone equipment targeted at specific finishing operations or lower volume production.</p>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Manual polishing lathes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Planetary tube polishers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Flat surface grinders</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-xl hover:shadow-md transition-shadow border-t-4 border-t-accent-orange">
              <Layers className="w-12 h-12 text-gray-700 mb-6" />
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-gray-900 border-b border-gray-100 pb-4">Automated Production Lines</h3>
              <p className="text-gray-600 leading-relaxed mb-6">High-throughput continuous finishing lines integrating multi-head setups for single-pass processing.</p>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Conveyor deburring lines</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Robotic polishing cells</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Automated tube handling</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-xl hover:shadow-md transition-shadow">
              <Factory className="w-12 h-12 text-gray-400 mb-6" />
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-gray-900 border-b border-gray-100 pb-4">Custom Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Equipment engineered entirely from the ground up for unique part geometries or specialized material requirements.</p>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Custom fixture design</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Multi-axis CNC integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Environmentally enclosed cells</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL SUPPORT */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Globe className="w-16 h-16 text-gray-300 mx-auto mb-8" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Global Commissioning & Support</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Integrating complex equipment requires robust ongoing support. We handle export logistics, on-site commissioning, operator train-the-trainer programs, and secure global spare parts availability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Looking to scale your finishing process?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Send us your production requirements. Let's design an equipment solution that actually delivers on its promises.
          </p>
          <Link to="/contact">
            <PrimaryButton className="px-12 py-5 h-auto text-lg hover:-translate-y-1 shadow-md hover:shadow-lg transition-transform">
              Discuss Equipment Needs <ArrowRight className="w-5 h-5 ml-2" />
            </PrimaryButton>
          </Link>
        </div>
      </section>

    </div>
  );
}
