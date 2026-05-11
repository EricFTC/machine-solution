import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Upload, Cog, CheckCircle2, Search, Truck } from 'lucide-react';
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
              Industrial Process Engineering
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight"
            >
              Grinding & Polishing Solutions for Metal Parts
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              Send your part drawing or photo. Get a process and equipment solution verified by our engineering team within 24 hours.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-4"
            >
              <Link to="/solution" className="flex-1 sm:flex-none">
                <PrimaryButton className="w-full text-lg shadow-md">
                  Get Your Solution
                </PrimaryButton>
              </Link>
              <Link to="/solution" className="flex-1 sm:flex-none">
                <SecondaryButton className="w-full text-lg">
                  <Upload className="w-5 h-5" /> Upload Your Part
                </SecondaryButton>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-gray-500 font-medium"
            >
              <CheckCircle2 className="w-4 h-4 text-accent-orange" />
              Response within 24 hours
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[500px] w-full rounded shadow-xl overflow-hidden border border-gray-200"
          >
            <img 
              src="/2b1f2682-c68a-4c8e-b2dc-d034a150693c.png" 
              alt="Industrial precision grinding process on metal part" 
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - TYPICAL APPLICATIONS */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Typical Applications We Handle</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
          </div>
          
          <div className="flex flex-col space-y-16">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
              <div className="md:w-1/2 overflow-hidden bg-gray-50 relative">
                <img src="/4de376d1-41e5-4373-a4f6-7f9ab3721bf1.png" alt="CNC Machined Parts Before and After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Deburring for stamped and CNC parts</h3>
                
                <div className="space-y-8 flex-grow">
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider text-accent-orange mb-2">Typical Parts</span>
                    <span className="text-lg font-medium text-gray-800">Stainless steel, aluminum parts</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Problem Solved</span>
                    <span className="text-lg text-gray-600">Remove sharp edges and burrs</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="block text-sm font-bold uppercase tracking-wider text-green-600 mb-2">Result</span>
                    <span className="text-lg text-gray-800 font-medium tracking-tight">Improve consistency for assembly</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row-reverse group">
              <div className="md:w-1/2 overflow-hidden bg-gray-50 relative">
                <img src="/9df6a7b7-d853-469f-ae7c-d14f33938143.png" alt="Flat Metal Surface Before and After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Flat surface grinding and finishing</h3>
                
                <div className="space-y-8 flex-grow">
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider text-accent-orange mb-2">Typical Parts</span>
                    <span className="text-lg font-medium text-gray-800">Sheet metal panels, plates</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Problem Solved</span>
                    <span className="text-lg text-gray-600">Remove scratches and uneven surfaces</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="block text-sm font-bold uppercase tracking-wider text-green-600 mb-2">Result</span>
                    <span className="text-lg text-gray-800 font-medium tracking-tight">Achieve uniform surface finish</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
              <div className="md:w-1/2 overflow-hidden bg-gray-50 relative">
                 <img src="/b1510d54-18d2-496a-bd4f-443453e73b0f.png" alt="Metal Tubes Before and After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Tube grinding and polishing</h3>
                
                <div className="space-y-8 flex-grow">
                   <div>
                    <span className="block text-sm font-bold uppercase tracking-wider text-accent-orange mb-2">Typical Parts</span>
                    <span className="text-lg font-medium text-gray-800">Round and rectangular tubes</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Problem Solved</span>
                    <span className="text-lg text-gray-600">Improve surface consistency</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="block text-sm font-bold uppercase tracking-wider text-green-600 mb-2">Result</span>
                    <span className="text-lg text-gray-800 font-medium tracking-tight">Prepare for mirror finishing</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-24 text-center flex flex-col items-center">
            <p className="text-gray-600 mb-6 text-xl">Not sure which solution fits your part?</p>
             <Link to="/solution">
              <PrimaryButton className="px-10 h-14 text-lg shadow-md hover:shadow-lg">
                Get Your Solution <ArrowRight className="w-6 h-6 ml-2" />
              </PrimaryButton>
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
              <span className="block text-sm font-bold uppercase tracking-widest text-accent-orange mb-3">Process Development</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">Advanced Surface Technologies</h2>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
                We continue exploring advanced finishing methods for hardened materials, precision molds, technical ceramics, and next-generation surface applications.
              </p>
              <div>
                <Link to="/advanced-surface-technologies" className="inline-flex items-center gap-2 font-bold text-gray-900 border-b-2 border-accent-orange pb-1 hover:text-accent-orange transition-colors">
                  Explore Technologies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - REAL RESULT */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Real Result</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row group transition-all duration-300 hover:shadow-xl">
            <div className="md:w-1/2 overflow-hidden bg-gray-100 relative">
              <img src="/8cf89a17-e9ed-4817-aeec-a018d36a3519.png" alt="Featured Case Result" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <div className="mb-8">
                <span className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Problem</span>
                <h3 className="text-xl font-medium text-gray-900">Sharp burrs and inconsistent edges after CNC machining.</h3>
              </div>
              
              <div className="mb-8">
                <span className="block text-sm font-bold uppercase tracking-wider text-accent-orange mb-2">Solution</span>
                <h3 className="text-xl font-medium text-gray-900">Automated multi-head deburring process.</h3>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <span className="block text-sm font-bold uppercase tracking-wider text-green-600 mb-4">Result</span>
                <ul className="space-y-4 text-lg text-gray-800 font-medium">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" /> 
                    <span>Improved edge consistency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" /> 
                    <span>Ready for coating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" /> 
                    <span>60% less manual work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/cases" className="inline-flex items-center text-lg font-bold text-accent-orange hover:text-orange-600 transition-colors">
              View more cases <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 - HOW IT WORKS */}
      <section className="py-24 bg-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">How It Works</h2>
            <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gray-200 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <div className="w-20 h-20 bg-white border-2 border-gray-100 text-gray-900 flex items-center justify-center font-bold text-2xl rounded-full mb-8 shadow-sm">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send your part</h3>
              <p className="text-gray-600 text-lg">Upload drawings, files, or photos indicating the current state and target finish.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <div className="w-20 h-20 bg-white border-2 border-gray-100 text-gray-900 flex items-center justify-center font-bold text-2xl rounded-full mb-8 shadow-sm">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We analyze</h3>
              <p className="text-gray-600 text-lg">Our engineers calculate cycle times and match machine specs against your requirements.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <div className="w-20 h-20 bg-accent-orange text-white flex items-center justify-center font-bold text-2xl rounded-full mb-8 shadow-md shadow-accent-orange/30">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">You get a solution</h3>
              <p className="text-gray-600 text-lg">Review an actionable quote with the recommended equipment and verified cycle data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - FINAL CTA */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Ready to improve your surface finishing process?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Send your drawing and get a solution within 24–48 hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <Link to="/solution">
              <PrimaryButton className="h-16 px-12 text-xl shadow-md w-full sm:w-auto hover:shadow-lg">
                Get Your Custom Solution
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
