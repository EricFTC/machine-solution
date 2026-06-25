import SEO from '../components/SEO';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Upload, Cog, CheckCircle2, MessageSquare, Sparkles, CodeSquare, Check, TestTube, Lightbulb, Settings, Factory } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../components/ui/Buttons';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-base-bg text-base-text font-sans">
      
            {/* SECTION 1 - HERO */}
      <section className="relative overflow-hidden border-b border-base-border bg-white">
        
        {/* Hero Text Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-accent-orange text-sm font-bold tracking-widest uppercase border border-orange-100 mb-8"
            >
              Process &bull; Production &bull; Equipment
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight"
            >
              Solutions From Process Development to Production
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed font-bold">
                Send your drawing, sample photo, or application challenge.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you need process development, production support, or equipment recommendations, we help identify the most practical path forward.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-4"
            >
              <Link to="/contact" className="flex-1 sm:flex-none">
                <PrimaryButton className="w-full text-lg shadow-md px-8 py-4 h-auto">
                  Get Process Recommendation
                </PrimaryButton>
              </Link>
              <Link to="/contact" className="flex-1 sm:flex-none">
                <SecondaryButton className="w-full text-lg border-2 py-4 h-auto">
                  <Upload className="w-5 h-5 mr-2" /> Submit Your Part
                </SecondaryButton>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-x-6 gap-y-3 text-sm text-gray-500 font-bold mt-8"
            >
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Engineering review within 24 hours</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Global manufacturing network</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Process-first approach</span>
            </motion.div>
          </div>
        </div>
      </section>

{/* NEW SECTION - HOW WE SUPPORT YOUR PROJECT */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">How We Support Your Project</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the level of support you need.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-700 mb-6 group-hover:bg-orange-50 group-hover:text-accent-orange transition-colors">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Development</h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                Develop and validate surface finishing processes before production.
              </p>
              <ul className="space-y-3 mb-10 text-gray-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Process analysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Sample testing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Parameter development</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Production feasibility review</li>
              </ul>
              <Link to="/services/process-consulting" className="inline-flex items-center font-bold text-sm tracking-widest uppercase text-gray-500 group-hover:text-accent-orange transition-colors mt-auto">
                Discuss Process <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white p-10 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-700 mb-6 group-hover:bg-orange-50 group-hover:text-accent-orange transition-colors">
                <TestTube className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contract Manufacturing</h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                Access qualified production resources for prototypes and production orders.
              </p>
              <ul className="space-y-3 mb-10 text-gray-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Prototype production</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Small batch manufacturing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Production sourcing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Quality verification</li>
              </ul>
              <Link to="/services/manufacturing-validation" className="inline-flex items-center font-bold text-sm tracking-widest uppercase text-gray-500 group-hover:text-accent-orange transition-colors mt-auto">
                Request Manufacturing Support <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white p-10 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col group border-t-4 border-t-accent-orange">
              <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center text-accent-orange mb-6">
                <Factory className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Integration</h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                Build in-house finishing capability with verified equipment solutions.
              </p>
              <ul className="space-y-3 mb-10 text-gray-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Equipment recommendation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Supplier coordination</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Automation integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-orange" /> Technical support</li>
              </ul>
              <Link to="/services/equipment-solutions" className="inline-flex items-center font-bold text-sm tracking-widest uppercase text-gray-500 group-hover:text-accent-orange transition-colors mt-auto">
                Explore Equipment Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS-FIRST APPROACH */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left side: The Philosophy */}
            <div className="lg:w-1/2">
              <span className="block text-sm font-bold uppercase tracking-widest text-accent-orange mb-4">Our Methodology</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Equipment and Production driven by <span className="text-accent-orange">Verified Processes.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We don't just sell machines from a catalog. Whether your goal is to purchase in-house equipment or outsource production, we start by engineering and validating the specific finishing process on your actual parts.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-accent-orange flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-gray-800 font-medium text-lg">Identify optimal media and cycle times</span>
                </li>
                <li className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-full bg-orange-50 text-accent-orange flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-gray-800 font-medium text-lg">Validate surface finishes (Ra/Rz metrics)</span>
                </li>
                <li className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-full bg-orange-50 text-accent-orange flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-gray-800 font-medium text-lg">Eliminate capital investment risks</span>
                </li>
              </ul>

              <Link to="/contact" className="inline-flex items-center text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-accent-orange hover:border-accent-orange transition-colors">
                Start with a Process Review <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Right side: The Outcomes */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">After Process Validation, We Deliver:</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-5 items-start group">
                    <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-50 group-hover:text-accent-orange transition-colors">
                      <Settings className="w-7 h-7 text-gray-600 group-hover:text-accent-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">1. Equipment Integration</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">Turnkey standalone machines or automated lines configured exactly to the validated process.</p>
                      <Link to="/services/equipment-solutions" className="inline-block mt-3 text-sm font-bold text-gray-500 uppercase tracking-widest group-hover:text-accent-orange transition-colors">
                        Explore Equipment &rarr;
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-5 items-start group">
                    <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-50 group-hover:text-accent-orange transition-colors">
                      <Factory className="w-7 h-7 text-gray-600 group-hover:text-accent-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">2. Contract Manufacturing</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">Don't want to buy equipment? We process your prototypes or high-volume production orders.</p>
                      <Link to="/services/contract-manufacturing" className="inline-block mt-3 text-sm font-bold text-gray-500 uppercase tracking-widest group-hover:text-accent-orange transition-colors">
                        Explore Contract Mfg &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION - SOLUTIONS */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Process Engineering Solutions</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto font-bold">Common finishing challenges we solve.</p>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Focusing on resolving specific manufacturing challenges through validated processes.</p>
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
                      <p className="text-gray-800 font-bold">Significant Ra improvement, high-quality mirror appearance. Specific finish levels validated per application.</p>
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
              <p className="text-gray-600 mb-4 leading-relaxed max-w-lg font-medium">
                These are emerging capabilities under active engineering development and validation.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-lg text-sm">
                Current exploration areas include ultrasonic-assisted finishing, laser surface processing, and hard and brittle material finishing.
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Verified Engineering Cases</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Examples of process improvement and production results.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row group transition-all duration-300">
            <div className="md:w-1/2 overflow-hidden bg-gray-100 relative">
              <img src="/488d5306a3afdfb8cecaf184ddef86c8.jpg" alt="Featured Case Result" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <div className="mb-8">
                <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Application</span>
                <h3 className="text-xl font-medium text-gray-900 leading-snug">Aluminum Heatsinks / Cooling Plates</h3>
              </div>

              <div className="mb-8">
                <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Problem</span>
                <p className="text-lg text-gray-700 leading-snug">Increasing demand for premium aesthetic finishes and surface roughening for better adhesion. Traditional linear brushing leaves distinct directional lines and doesn't provide adequate surface roughness.</p>
              </div>
              
              <div className="mb-8">
                <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Process</span>
                <p className="text-lg text-gray-700 leading-snug">Implemented automated random orbital sanding (vibration sanding) with customized abrasive media for both decoration and roughening.</p>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <span className="block text-sm font-bold uppercase tracking-widest text-accent-orange mb-4">Result</span>
                <ul className="space-y-4 text-lg text-gray-900 font-bold">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent-orange mt-0.5 shrink-0 stroke-[3]" /> 
                    <span>Premium, uniform "frosted" texture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent-orange mt-0.5 shrink-0 stroke-[3]" /> 
                    <span>Non-directional scratch finish</span>
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

      {/* SECTION 7 - HOW WE WORK */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">How We Work</h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>
            
            {[
              { title: "Submit Drawing or Part Photo", icon: <Upload className="w-6 h-6" /> },
              { title: "Engineering Review", icon: <CodeSquare className="w-6 h-6" /> },
              { title: "Process Recommendation", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "Production or Equipment Solution", icon: <Factory className="w-6 h-6" /> }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 shadow-sm flex items-center justify-center text-accent-orange mb-6 text-2xl font-black">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <div className="text-gray-400 mt-2">{step.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gray-50 relative border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Need Help With a Surface Finishing Challenge?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you need a process, production support, or equipment solution, start by sending us your drawing or application details.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <PrimaryButton className="h-16 px-12 text-xl shadow-md w-full hover:shadow-lg transition-transform hover:-translate-y-1">
                Submit Your Project
              </PrimaryButton>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto mt-2">
              <SecondaryButton className="px-8 border-2 w-full">
                Contact Engineering Team
              </SecondaryButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
