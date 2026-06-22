import React from 'react';
import SEO from '../components/SEO';
import { ArrowRight, FileSearch, CheckCircle2, Target, Settings, MessageSquare } from 'lucide-react';
import { PrimaryButton } from '../components/ui/Buttons';
import { Link } from 'react-router-dom';

export default function ProcessConsultingPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#1A1F2B] text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
            alt="Engineering consulting" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] via-[#1A1F2B]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="block text-sm font-bold uppercase tracking-widest text-accent-orange mb-4 border-l-2 border-accent-orange pl-3">Engineering Service</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">Process Consulting</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-snug">
              Convert surface finishing challenges into practical, actionable manufacturing solutions.
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              We analyze your parts, materials, and finishing requirements to provide a data-driven process recommendation tailored to your production goals.
            </p>
            <Link to="/contact">
              <PrimaryButton className="px-8 py-4 h-auto text-lg hover:-translate-y-1 shadow-md hover:shadow-lg transition-transform">
                Request Engineering Evaluation <ArrowRight className="w-5 h-5 ml-2" />
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO & CUSTOMER CHALLENGES */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-gray-900">What We Do</h2>
              <div className="w-12 h-1 bg-accent-orange mb-8"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Finding the right surface finishing process is more critical than selecting the machine itself. An incorrect process can lead to excessive manual touch-ups, inconsistent quality, and high scrap rates.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our process consulting service bridges the gap between your raw part and the required surface finish. We evaluate geometry, material properties, and throughput requirements to design a reliable finishing workflow.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-orange shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium font-lg">Media & compound selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-orange shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium font-lg">Cycle time calculation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-orange shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium font-lg">Automation feasibility assessment</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-10 rounded-xl">
              <h3 className="text-2xl font-bold tracking-tight mb-8 text-gray-900 border-b border-gray-200 pb-4">Typical Challenges We Solve</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-gray-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">High Manual Labor Costs</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Manual polishing and deburring are bottlenecks. We identify automated alternatives that maintain or improve quality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-gray-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Inconsistent Surface Quality</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Parts vary from batch to batch. We standardize the process parameters to ensure repeatable results.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-gray-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Complex Geometries</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Internal cavities and hard-to-reach areas need finishing without altering critical dimensions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-gray-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Scaling Production</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Transitioning from prototype to mass production requires new process strategies and equipment validation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">How Process Analysis Works</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A structured, engineering-led approach to solving your finishing challenges.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm relative overflow-hidden group hover:border-accent-orange transition-colors">
              <div className="text-5xl font-black text-gray-100 absolute -bottom-4 -right-4 transition-transform group-hover:scale-110">01</div>
              <FileSearch className="w-8 h-8 text-accent-orange mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Data Collection</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">You provide part drawings, current process details, material specs, and target surface requirements.</p>
            </div>
            
             <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm relative overflow-hidden group hover:border-accent-orange transition-colors">
              <div className="text-5xl font-black text-gray-100 absolute -bottom-4 -right-4 transition-transform group-hover:scale-110">02</div>
              <Settings className="w-8 h-8 text-accent-orange mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Process Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Our engineers evaluate potential finishing methods against your geometric limits and throughput needs.</p>
            </div>

             <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm relative overflow-hidden group hover:border-accent-orange transition-colors">
              <div className="text-5xl font-black text-gray-100 absolute -bottom-4 -right-4 transition-transform group-hover:scale-110">03</div>
              <Target className="w-8 h-8 text-accent-orange mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Evaluation</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">We calculate estimated cycle times, consumable costs, and identify the most efficient workflow.</p>
            </div>

             <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm relative overflow-hidden group hover:border-accent-orange transition-colors">
              <div className="text-5xl font-black text-gray-100 absolute -bottom-4 -right-4 transition-transform group-hover:scale-110">04</div>
              <MessageSquare className="w-8 h-8 text-accent-orange mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Recommendation</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">You receive an actionable consulting report detailing the necessary process, tooling, and equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-gray-900">What You Receive</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-8 md:p-12">
              <ul className="space-y-6">
                <li className="flex gap-4">
                   <div className="w-6 h-6 rounded-full bg-orange-100 text-accent-orange flex items-center justify-center shrink-0 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900 mb-1">Actionable Process Recommendation</h4>
                     <p className="text-gray-600 leading-relaxed">A clear definition of the required finishing steps (e.g., initial deburring, secondary grinding, final polishing).</p>
                   </div>
                </li>
                 <li className="flex gap-4">
                   <div className="w-6 h-6 rounded-full bg-orange-100 text-accent-orange flex items-center justify-center shrink-0 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900 mb-1">Tooling & Media Specs</h4>
                     <p className="text-gray-600 leading-relaxed">Guidance on the exact abrasive media, compounds, or belts required to achieve the desired finish without damaging the part.</p>
                   </div>
                </li>
                 <li className="flex gap-4">
                   <div className="w-6 h-6 rounded-full bg-orange-100 text-accent-orange flex items-center justify-center shrink-0 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900 mb-1">Cycle Time Estimates</h4>
                     <p className="text-gray-600 leading-relaxed">Calculated processing times to help you plan production throughput and assess ROI.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="w-6 h-6 rounded-full bg-orange-100 text-accent-orange flex items-center justify-center shrink-0 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900 mb-1">Equipment Architecture</h4>
                     <p className="text-gray-600 leading-relaxed">Recommendations for the necessary machine configuration to support the validated process at scale.</p>
                   </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Do I need to pay for the initial process evaluation?</h4>
              <p className="text-gray-600">Initial engineering evaluations based on drawings and photos are complementary. We review the data to see if we can confidently provide a solution.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">What if I don't know the exact surface requirement (Ra value)?</h4>
              <p className="text-gray-600">That's common. You can provide a physical sample of a "good" part, or describe the functional requirement (e.g., "needs to clear a sliding fit", "cosmetic mirror finish").</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Can you guarantee the cycle time?</h4>
              <p className="text-gray-600">Initial consults provide engineered estimates. For guaranteed cycle times and surface finishes, we recommend moving to our <Link to="/services/manufacturing" className="text-accent-orange hover:underline font-medium">Manufacturing Validation</Link> service, where we run physical tests on your actual parts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Stop guessing with surface finishing.</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Send us your drawing and operational bottlenecks. Get a clear engineering path forward.
          </p>
          <Link to="/contact">
            <PrimaryButton className="px-12 py-5 h-auto text-lg hover:-translate-y-1 shadow-md hover:shadow-lg transition-transform">
              Discuss Your Application <ArrowRight className="w-5 h-5 ml-2" />
            </PrimaryButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
