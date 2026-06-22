import React from 'react';
import SEO from '../components/SEO';
import { ArrowRight, Lightbulb, TestTube, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <SEO
        title="Engineering Services — Process Consulting, Manufacturing & Equipment"
        description="Full-spectrum metal finishing engineering services: process consulting, manufacturing validation with sample testing, and equipment integration. From process development to production automation."
        canonical="/services"
        keywords="metal finishing consulting, manufacturing validation, equipment integration, surface finishing services, process development"
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">Engineering Services</h1>
          <div className="w-20 h-1 bg-accent-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We partner with manufacturers from initial process evaluation through to full-scale automation integration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <Link to="/services/process-consulting" className="bg-white border border-gray-200 rounded-xl p-10 hover:shadow-lg transition-all group flex flex-col items-start cursor-pointer hover:border-accent-orange">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
              <Lightbulb className="w-7 h-7 text-gray-700 group-hover:text-accent-orange transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Consulting</h3>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              Analyze parts, materials, and finishing requirements. Receive practical process recommendations tailored to your goals.
            </p>
            <span className="inline-flex items-center font-bold text-sm tracking-widest uppercase text-gray-500 group-hover:text-accent-orange transition-colors">
              Explore Service <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </Link>

          <Link to="/services/manufacturing-validation" className="bg-white border border-gray-200 rounded-xl p-10 hover:shadow-lg transition-all group flex flex-col items-start cursor-pointer hover:border-accent-orange">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
              <TestTube className="w-7 h-7 text-gray-700 group-hover:text-accent-orange transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Validation</h3>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              Prototype testing, sample processing, and pilot batch validation before you commit to capital equipment.
            </p>
            <span className="inline-flex items-center font-bold text-sm tracking-widest uppercase text-gray-500 group-hover:text-accent-orange transition-colors">
              Explore Service <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </Link>

          <Link to="/services/equipment-solutions" className="bg-white border border-gray-200 rounded-xl p-10 hover:shadow-lg transition-all group flex flex-col items-start cursor-pointer hover:border-accent-orange">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
              <Factory className="w-7 h-7 text-gray-700 group-hover:text-accent-orange transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Solutions</h3>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              Standalone machines, automated cells, and custom lines built and integrated around your validated process.
            </p>
            <span className="inline-flex items-center font-bold text-sm tracking-widest uppercase text-gray-500 group-hover:text-accent-orange transition-colors">
              Explore Service <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
}
