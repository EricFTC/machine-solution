import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../components/ui/Buttons';

export default function AdvancedSurfaceTechnologies() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#1A1F2B] text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1574689211272-bc15e64d0085?auto=format&fit=crop&q=80&w=1920" 
            alt="Industrial machining background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] via-[#1A1F2B]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="block text-sm font-bold uppercase tracking-widest text-accent-orange mb-4 border-l-2 border-accent-orange pl-3">Process Evaluation</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">Advanced Surface Technologies</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              Exploring next-generation finishing approaches for hard materials, precision surfaces, and emerging manufacturing applications.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1 - ULTRASONIC */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2 w-full">
              <div className="relative border border-gray-200 bg-gray-50 p-2">
                <img 
                  src="/ultrasonic-tool.png" 
                  alt="Ultrasonic tool close-up" 
                  className="w-full aspect-[4/3] object-cover grayscale opacity-90"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 border-b border-gray-200 pb-4">Ultrasonic-Assisted Finishing</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Advanced ultrasonic-assisted finishing approaches for hardened steel, zirconia ceramics, and difficult-to-process materials.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 border-l-2 border-gray-300 pl-3">Applications</h4>
                  <ul className="space-y-3 text-sm text-gray-600 font-medium">
                    <li>Hardened mold steel</li>
                    <li>Zirconia ceramics</li>
                    <li>Sapphire components</li>
                    <li>Technical ceramics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 border-l-2 border-gray-300 pl-3">Capabilities</h4>
                  <ul className="space-y-3 text-sm text-gray-600 font-medium">
                    <li>Reduce manual polishing</li>
                    <li>Improve surface consistency</li>
                    <li>Lower cutting force</li>
                    <li>Fine surface generation</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 border-l-2 border-gray-300 pl-3">Exploration Areas</h4>
                <div className="flex flex-wrap gap-2">
                   <span className="text-xs font-mono uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-2">Mold cavity finishing</span>
                   <span className="text-xs font-mono uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-2">Ceramic polishing</span>
                   <span className="text-xs font-mono uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-2">Surface texturing</span>
                   <span className="text-xs font-mono uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-2">Hard brittle material</span>
                </div>
              </div>

              <div className="mt-12 inline-flex items-center gap-3 border border-gray-200 bg-gray-50 px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-600">
                 <div className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
                 </div>
                 Research & Industrial Validation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - LASER */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2 w-full">
              <div className="relative border border-gray-200 bg-white p-2">
                <img 
                  src="/laser-tool.png" 
                  alt="Laser surface treatment" 
                  className="w-full aspect-[4/3] object-cover grayscale opacity-90 contrast-125 mix-blend-multiply"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 border-b border-gray-200 pb-4">Laser Surface Processing</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Exploring laser-assisted finishing methods for precision surface treatment and controlled material interaction on complex geometries.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 border-l-2 border-gray-300 pl-3">Applications</h4>
                  <ul className="space-y-3 text-sm text-gray-600 font-medium">
                    <li>Localized surface treatment</li>
                    <li>Micro texture generation</li>
                    <li>Precision surface refinement</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 border-l-2 border-gray-300 pl-3">Exploration Areas</h4>
                <div className="flex flex-wrap gap-2">
                   <span className="text-xs font-mono uppercase tracking-wider bg-white border border-gray-200 text-gray-600 px-3 py-2">Laser-assisted polishing</span>
                   <span className="text-xs font-mono uppercase tracking-wider bg-white border border-gray-200 text-gray-600 px-3 py-2">Surface structuring</span>
                   <span className="text-xs font-mono uppercase tracking-wider bg-white border border-gray-200 text-gray-600 px-3 py-2">Hybrid finishing methods</span>
                </div>
              </div>

              <div className="mt-12 inline-flex items-center gap-3 border border-gray-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                 <div className="w-2 h-2 rounded-full border-2 border-gray-400"></div>
                 Experimental Exploration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - MATERIAL EXPLORATION */}
      <section className="py-24 bg-white border-t border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gray-200"></div>
        <div className="max-w-4xl mx-auto px-6 text-center mt-8">
          <h2 className="text-2xl font-bold tracking-tight mb-12 text-gray-900 uppercase">Current Material Exploration</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Zirconia', 'Sapphire', 'Silicon carbide', 'Tungsten carbide', 'Hardened mold steel', 'Technical ceramics'].map(mat => (
              <div key={mat} className="border border-gray-200 px-8 py-4 text-sm font-bold text-gray-800 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 hover:-translate-y-0.5 transition-all uppercase tracking-widest">
                {mat}
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium italic">
            "Different materials require different combinations of ultrasonic, abrasive, thermal, and mechanical finishing methods."
          </p>
        </div>
      </section>

      {/* ENGINEERING DISCLAIMER */}
      <section className="bg-gray-50 py-10 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            Some processes shown on this page are currently under engineering evaluation, application testing, or process development. Performance may vary depending on material, geometry, and production conditions.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Working on difficult materials or challenging surface requirements?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Send your part drawing, material details, or finishing challenge for engineering evaluation.
          </p>
          <PrimaryButton onClick={() => window.location.href = '/solution'} className="px-12 py-5 h-auto text-lg hover:-translate-y-1 shadow-md hover:shadow-lg transition-transform">
            Discuss Your Application <ArrowRight className="w-5 h-5 ml-2" />
          </PrimaryButton>
        </div>
      </section>

    </div>
  );
}
