import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Upload, Cog, CheckCircle2, MessageSquare, Sparkles, CodeSquare, Check, TestTube, Lightbulb, Settings, Factory } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../components/ui/Buttons';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-base-bg text-base-text font-sans">
      
      {/* SECTION 1 - HERO */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden border-b border-base-border bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded bg-orange-50 text-accent-orange text-sm font-bold tracking-wider uppercase border border-orange-100 mb-6"
            >
              Surface Finishing Integrator
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight"
            >
              Surface Finishing Process & Equipment Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              From process development and production validation to equipment selection and automation integration. Send us your part drawing, photo, or finishing challenge and receive a practical recommendation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-4"
            >
              <Link to="/contact" className="flex-1 sm:flex-none">
                <PrimaryButton className="w-full text-lg shadow-md px-8">
                  Get Process Recommendation
                </PrimaryButton>
              </Link>
              <Link to="/contact" className="flex-1 sm:flex-none">
                <SecondaryButton className="w-full text-lg border-2">
                  <Upload className="w-5 h-5" /> Submit Your Part
                </SecondaryButton>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 text-sm text-gray-500 font-medium mt-6"
            >
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Start with your part</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Engineering evaluation</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[500px] w-full rounded shadow-xl overflow-hidden border border-gray-200 bg-gray-100"
          >
            <img 
              src="/2b1f2682-c68a-4c8e-b2dc-d034a150693c.png" 
              alt="Engineering thinking and process flow" 
              className="object-cover w-full h-full grayscale-[20%]"
            />
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION - HOW WE SUPPORT YOUR PROJECT */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">How We Support Your Project</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-700 mb-6">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Analyze parts, materials, and finishing requirements. Receive practical process recommendations tailored to your production goals, not just a machine spec.
              </p>
            </div>
            
            <div className="bg-white p-10 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-700 mb-6">
                <TestTube className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Validation</h3>
              <p className="text-gray-600 leading-relaxed">
                Prototype testing, process verification, and production evaluation before investment. Ensure the finishing process works consistently on your actual parts.
              </p>
            </div>

            <div className="bg-white p-10 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-accent-orange">
              <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center text-accent-orange mb-6">
                <Factory className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale successful processes into production through equipment integration and automation. We provide the right machinery matched to the validated process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION - WHY CUSTOMERS CONTACT US */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Why Customers Contact Us</h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "We spend too much time on manual polishing.",
              "We are not sure which process to use.",
              "We need better surface consistency.",
              "We want to automate finishing operations.",
              "We need mirror finish on hardened materials.",
              "We need to reduce sharp edge rejects."
            ].map((quote, idx) => (
              <Link to="/contact" key={idx} className="block p-8 border border-gray-200 bg-gray-50 rounded-xl hover:border-accent-orange hover:bg-white transition-all group">
                <MessageSquare className="w-6 h-6 text-gray-400 mb-4 group-hover:text-accent-orange transition-colors" />
                <p className="text-lg font-medium text-gray-800 leading-snug mb-6">"{quote}"</p>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest group-hover:text-accent-orange transition-colors flex items-center gap-1">
                  Start Consultation <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION - SOLUTIONS */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Process Engineering Solutions</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">Focusing on resolving specific manufacturing challenges through validated processes.</p>
          </div>
          
          <div className="space-y-12">
            
            {/* Solution 1 */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <Cog className="w-8 h-8 text-gray-700" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Deburring & Edge Radiusing</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Problem Solved</span>
                      <p className="text-gray-800 font-medium">Remove sharp edges, primary burrs, and safety hazards.</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Typical Parts</span>
                      <p className="text-gray-800 font-medium">Stamped plates, laser-cut panels, CNC machined bodies.</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-accent-orange mb-2">Typical Result</span>
                      <p className="text-gray-800 font-bold">Safe, uniform edges ready for coating or assembly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <Settings className="w-8 h-8 text-gray-700" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Flat & Cylindrical Grinding</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Problem Solved</span>
                      <p className="text-gray-800 font-medium">Remove deep scratches, scale, and dimensional inconsistencies.</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Typical Parts</span>
                      <p className="text-gray-800 font-medium">Metal plates, tubes, welded structures, enclosures.</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-accent-orange mb-2">Typical Result</span>
                      <p className="text-gray-800 font-bold">Uniform dimensional tolerance and consistent brushed finish.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <Sparkles className="w-8 h-8 text-gray-700" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Mirror Polishing & Fine Finishing</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Problem Solved</span>
                      <p className="text-gray-800 font-medium">Eliminate micro-defects and achieve high cosmetic or functional reflectivity.</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Typical Parts</span>
                      <p className="text-gray-800 font-medium">Medical devices, sanitary fittings, premium consumer goods.</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-accent-orange mb-2">Typical Result</span>
                      <p className="text-gray-800 font-bold">High Ra reduction, Ra &lt; 0.05μm, brilliant cosmetic appearance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-16 text-center">
            <Link to="/solutions" className="inline-flex items-center text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-accent-orange hover:border-accent-orange transition-colors">
              Explore All Solutions <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2.5 - ADVANCED SURFACE TECHNOLOGIES TEASER */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
            <div className="md:w-5/12 bg-gray-200 relative overflow-hidden h-64 md:h-auto">
              <img 
                src="/exploration-teaser.png"
                alt="Advanced surface technologies exploration"
                className="w-full h-full object-cover grayscale opacity-90 contrast-125 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
              <span className="block text-sm font-bold uppercase tracking-widest text-accent-orange mb-3">Long-Term Engineering</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">Advanced Surface Technologies</h2>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
                Areas we are actively researching and evaluating. We continue exploring advanced finishing methods for hardened materials, precision molds, technical ceramics, and next-generation surface applications.
              </p>
              <div>
                <Link to="/advanced-surface-technologies" className="inline-flex items-center gap-2 font-bold text-gray-900 border-b-2 border-accent-orange pb-1 hover:text-accent-orange transition-colors">
                  Explore Future Processes <ArrowRight className="w-4 h-4" />
             </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CASES */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Industrial Cases</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row group transition-all duration-300">
            <div className="md:w-1/2 overflow-hidden bg-gray-100 relative">
              <img src="/8cf89a17-e9ed-4817-aeec-a018d36a3519.png" alt="Featured Case Result" className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <div className="mb-8">
                <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Problem</span>
                <h3 className="text-xl font-medium text-gray-900 leading-snug">High manual labor required to remove sharp burrs and inconsistent edges after CNC machining.</h3>
              </div>
              
              <div className="mb-8">
                <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Process</span>
                <p className="text-lg text-gray-700 leading-snug">Engineering evaluation of abrasive media resulting in an automated multi-head deburring process.</p>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <span className="block text-sm font-bold uppercase tracking-widest text-accent-orange mb-4">Result</span>
                <ul className="space-y-4 text-lg text-gray-900 font-bold">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent-orange mt-0.5 shrink-0 stroke-[3]" /> 
                    <span>Improved edge consistency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent-orange mt-0.5 shrink-0 stroke-[3]" /> 
                    <span>60% less manual finishing time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/cases" className="inline-flex items-center text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-accent-orange hover:border-accent-orange transition-colors">
              View All Cases <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white relative border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Ready to improve your surface finishing process?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Send your part drawing, photo, or material block. Get a process recommendation verified by our engineering team within 24 hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <Link to="/contact">
              <PrimaryButton className="h-16 px-12 text-xl shadow-md w-full sm:w-auto hover:shadow-lg transition-transform hover:-translate-y-1">
                Tell Us About Your Part
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
