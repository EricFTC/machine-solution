import React, { useState } from 'react';
import SEO from '../components/SEO';
import { ArrowRight, UploadCloud, Mail } from 'lucide-react';
import { PrimaryButton } from '../components/ui/Buttons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    material: '',
    partDescription: '',
    surfaceRequirement: '',
    annualQuantity: '',
    problemType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for submitting your request. Our engineering team will review it and get back to you shortly.');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-10 md:p-14">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Tell Us About Your Part
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Send us your part drawing, material details, or finishing challenge for a rapid engineering evaluation and process recommendation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Company</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Country</label>
                <input 
                  type="text" 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" 
                  required 
                />
              </div>
            </div>

            <div className="w-full h-px bg-gray-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Problem Type</label>
                <select 
                  name="problemType"
                  value={formData.problemType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors bg-white"
                  required
                >
                  <option value="" disabled>Select Problem Type</option>
                  <option value="deburring">Deburring</option>
                  <option value="grinding">Grinding</option>
                  <option value="polishing">Polishing</option>
                  <option value="mirror_finish">Mirror Finish</option>
                  <option value="surface_texture">Surface Texture</option>
                  <option value="mold_finishing">Mold Finishing</option>
                  <option value="automation">Automation</option>
                  <option value="hard_material_processing">Hard Material Processing</option>
                  <option value="not_sure">Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Material</label>
                <input 
                  type="text" 
                  name="material"
                  placeholder="e.g. 316L Stainless Steel, Zirconia..."
                  value={formData.material}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Part Description</label>
              <textarea 
                name="partDescription"
                rows={3}
                value={formData.partDescription}
                onChange={handleChange}
                placeholder="Describe the geometry, size, and function of the part."
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" 
                required 
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Surface Requirement</label>
              <textarea 
                name="surfaceRequirement"
                rows={2}
                value={formData.surfaceRequirement}
                onChange={handleChange}
                placeholder="What is your required finish? (e.g. Ra 0.2, remove sharp edges, mirror finish)"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" 
                required 
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Annual Quantity</label>
              <input 
                type="text" 
                name="annualQuantity"
                value={formData.annualQuantity}
                onChange={handleChange}
                placeholder="e.g. 100,000 pcs/year"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" 
                required 
              />
            </div>

            <div className="w-full h-px bg-gray-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                <UploadCloud className="w-8 h-8 text-gray-400 mb-3 group-hover:text-accent-orange transition-colors" />
                <span className="text-sm font-bold text-gray-700 mb-1">Upload Drawing</span>
                <span className="text-xs text-gray-500">PDF, STEP, or IGES</span>
              </div>
              <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                <UploadCloud className="w-8 h-8 text-gray-400 mb-3 group-hover:text-accent-orange transition-colors" />
                <span className="text-sm font-bold text-gray-700 mb-1">Upload Photos</span>
                <span className="text-xs text-gray-500">JPG or PNG</span>
              </div>
            </div>

            <div className="pt-6">
              <PrimaryButton type="submit" className="w-full py-5 text-lg hover:-translate-y-1 shadow-md hover:shadow-lg transition-transform flex items-center justify-center gap-3">
                Request Process Recommendation <ArrowRight className="w-5 h-5" />
              </PrimaryButton>
            </div>
          </form>
        </div>
        
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-accent-orange" />
            <span className="font-bold text-gray-900">Or email us directly</span>
          </div>
          <a href="mailto:eric@facetfin.com" className="text-accent-orange hover:underline text-lg font-semibold">eric@facetfin.com</a>
          <p className="text-gray-500 text-sm mt-2">We typically respond within 24 hours on business days.</p>
        </div>
        
        <div className="mt-4 text-center text-sm font-medium text-gray-500">
          Your information is secure. We use it solely for engineering evaluation purposes.
        </div>
      </div>
    </div>
  );
}
