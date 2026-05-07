import React, { useState } from 'react';
import { Upload, FileText, CheckCircle2 } from 'lucide-react';
import { PrimaryButton } from '../components/ui/Buttons';

export default function SolutionWizard() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    partType: '',
    problems: [] as string[],
    additionalDetails: '',
    fileName: ''
  });

  const problemsList = [
    'Burr removal',
    'Surface consistency',
    'Mirror polishing',
    'Scratch removal',
    'Reduce manual labor',
    'Increase production speed',
    'Other'
  ];

  const handleProblemChange = (problem: string) => {
    setFormData(prev => ({
      ...prev,
      problems: prev.problems.includes(problem)
        ? prev.problems.filter(p => p !== problem)
        : [...prev.problems, problem]
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.dataTransfer.files[0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Request Received</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto">
          Our engineering team is actively reviewing your part details at <strong>{formData.email}</strong>. We will return with a recommended solution in 24-48 hours.
        </p>
        <PrimaryButton onClick={() => window.location.href = '/'} className="px-8 h-12">
          Return to Home
        </PrimaryButton>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24 font-sans">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Tell us about your part</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            Send your drawing, photos, or process requirements. We'll analyze your application and recommend a suitable grinding or polishing solution.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-accent-orange bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
            <CheckCircle2 className="w-4 h-4" />
            Typical response time: 24–48 hours
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-16">
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:bg-white focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Company *</label>
                <input 
                  type="text" 
                  required
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:bg-white focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-2">Email *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:bg-white focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors"
                />
              </div>
            </div>

            <div className="h-px bg-gray-100 w-full mb-10"></div>

            {/* Technical Field 1 */}
            <div className="mb-10">
              <label className="block text-sm font-bold text-gray-900 mb-2">What part are you processing?</label>
              <textarea 
                rows={3}
                value={formData.partType}
                onChange={e => setFormData({...formData, partType: e.target.value})}
                placeholder="Example:&#10;- stainless steel tube&#10;- stamped bracket&#10;- aluminum panel&#10;- CNC machined part"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:bg-white focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors placeholder-gray-400 font-mono text-sm leading-relaxed whitespace-pre"
              />
            </div>

            {/* Technical Field 2 */}
            <div className="mb-10">
              <label className="block text-sm font-bold text-gray-900 mb-4">What problem are you trying to solve?</label>
              <div className="grid md:grid-cols-2 gap-3">
                {problemsList.map(problem => (
                  <label 
                    key={problem} 
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.problems.includes(problem) 
                        ? 'border-accent-orange bg-orange-50/50' 
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-accent-orange focus:ring-accent-orange rounded border-gray-300"
                      checked={formData.problems.includes(problem)}
                      onChange={() => handleProblemChange(problem)}
                    />
                    <span className="text-sm font-medium text-gray-800">{problem}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Technical Field 3 */}
            <div className="mb-10">
              <label className="block text-sm font-bold text-gray-900 mb-2">Additional process details</label>
              <textarea 
                rows={5}
                value={formData.additionalDetails}
                onChange={e => setFormData({...formData, additionalDetails: e.target.value})}
                placeholder="Examples:&#10;- current process&#10;- desired finish&#10;- production volume&#10;- Ra requirement&#10;- manual or automatic process"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:bg-white focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors placeholder-gray-400 font-mono text-sm leading-relaxed whitespace-pre"
              />
            </div>

            {/* Upload Area */}
            <div className="mb-12">
              <label className="block text-sm font-bold text-gray-900 mb-2">Upload drawing or part photos</label>
              <div 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-gray-200 rounded-lg p-10 text-center bg-gray-50 hover:bg-gray-100 hover:border-gray-300 transition-colors cursor-pointer group relative"
              >
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={e => {
                    if (e.target.files && e.target.files[0]) {
                      setFormData({...formData, fileName: e.target.files[0].name });
                    }
                  }}
                />
                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4 group-hover:text-accent-orange transition-colors" />
                <div className="font-medium text-gray-900 mb-1">Drag and drop file here, or click to browse</div>
                <div className="text-sm text-gray-500 font-medium">Supports PDF, STEP, JPG, PNG</div>
                
                {formData.fileName && (
                  <div className="mt-6 inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-accent-orange shadow-sm content-center">
                    <FileText className="w-4 h-4" />
                    {formData.fileName}
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-8 border-t border-gray-100">
              <PrimaryButton type="submit" className="w-full sm:w-auto px-12 h-14 text-lg shadow-md hover:shadow-lg mb-4">
                Request Process Review
              </PrimaryButton>
              <div className="text-sm font-medium text-gray-500">
                We review every submission manually.
              </div>
            </div>

          </form>
        </div>

        {/* TRUST SECTION */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-8 tracking-tight uppercase">What happens next?</h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 relative">
            <div className="hidden md:block absolute top-[1.1rem] left-[15%] right-[15%] h-px bg-gray-200 -z-10"></div>
            
            <div className="bg-gray-50 w-full md:w-auto px-4 py-2">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-gray-900 mx-auto mb-3 shadow-sm">1</div>
              <div className="text-sm font-medium text-gray-700">We review your part</div>
            </div>
            
            <div className="bg-gray-50 w-full md:w-auto px-4 py-2">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-gray-900 mx-auto mb-3 shadow-sm">2</div>
              <div className="text-sm font-medium text-gray-700">We evaluate possible processes</div>
            </div>
            
            <div className="bg-gray-50 w-full md:w-auto px-4 py-2">
              <div className="w-8 h-8 rounded-full bg-accent-orange text-white flex items-center justify-center font-bold mx-auto mb-3 shadow-sm">3</div>
              <div className="text-sm font-medium text-gray-700">We recommend a suitable solution</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

