import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../components/ui/Buttons';

export default function CaseStudies() {
  const cases = [
    {
      label: "Sample Case 01",
      title: "Precision milling and grinding for copper-aluminum alloy",
      partInfo: {
        material: "Copper-Aluminum Alloy",
        type: "Precision CNC milled plate",
        size: "200mm x 150mm",
      },
      problem: "Traditional separated milling and grinding processes led to alignment errors, long cycle times, and failure to meet the strict surface roughness requirements.",
      solution: "Implemented an integrated precision milling and grinding processing center to complete both operations in a single setup.",
      result: "Achieved a consistent flat surface finish with a roughness of Ra 0.8µm. Eliminated multi-step clamping errors and improved production efficiency by 40%.",
      image: "/8cf89a17-e9ed-4817-aeec-a018d36a3519.png"
    },
    {
      label: "Sample Case 02",
      title: "Flat surface mirror polishing",
      partInfo: {
        material: "Stainless Steel 316",
        type: "Flat precision plate",
        size: "600mm x 400mm",
      },
      problem: "Manual hand polishing yielded inconsistent reflectivity and visible swirl marks, failing high-end cosmetic requirements.",
      solution: "Implemented an automated flatbed planetary polishing machine equipped with multi-stage buffing wheels and liquid compound delivery.",
      result: "Consistently achieved an 8K mirror finish (Ra < 0.02µm). Eliminated visual defects and reduced labor input by 60%.",
      image: "/ab22b3a0-f324-4d7a-bed5-9fb462b4c23e.png"
    },
    {
      label: "Sample Case 03",
      title: "Automated polishing for cylindrical tubes",
      partInfo: {
        material: "Stainless Steel 316L",
        type: "Marine tube",
        size: "Ø 50mm, Length 3000mm",
      },
      problem: "Inconsistent manual polishing times and uneven surface reflectivity resulted in high labor costs and rework.",
      solution: "Installed a 4-station centerless tube polishing line with automated compound application and speed control.",
      result: "100% consistency across 3-meter tubes. Mirror finish (#8) achieved. Cycle time reduced from 15 minutes to 2 minutes.",
      image: "/5095bd91-b573-4f99-a5bd-85dd0aacb2e0.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">Engineering Case Studies</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Practical examples of surface finishing challenges and the equipment solutions implemented to resolve them.
          </p>
        </div>

        <div className="space-y-24">
          {cases.map((cs, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              
              {/* Image Column */}
              <div className="w-full lg:w-5/12">
                 <div className="bg-gray-100 rounded border border-gray-200 overflow-hidden relative shadow-sm aspect-[4/3]">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-700 border border-gray-200 rounded z-10 shadow-sm">
                      {cs.label}
                    </div>
                    <img src={cs.image} alt={cs.title} className="w-full h-full object-cover saturate-50 contrast-125" />
                 </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-7/12 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">{cs.title}</h2>
                
                <div className="space-y-8">
                  {/* Part Info */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Section 1 — Part Info</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 border border-gray-200 rounded p-4 text-sm text-gray-700">
                      <div>
                        <span className="block font-medium text-gray-500 mb-1">Material</span>
                        {cs.partInfo.material}
                      </div>
                      <div>
                        <span className="block font-medium text-gray-500 mb-1">Part type</span>
                        {cs.partInfo.type}
                      </div>
                      <div>
                        <span className="block font-medium text-gray-500 mb-1">Size range</span>
                        {cs.partInfo.size}
                      </div>
                    </div>
                  </div>

                  {/* Problem */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Section 2 — Problem</h3>
                    <p className="text-gray-800 leading-relaxed">{cs.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Section 3 — Solution</h3>
                    <p className="text-gray-800 leading-relaxed">{cs.solution}</p>
                  </div>

                  {/* Result */}
                  <div className="bg-orange-50 border border-orange-100 rounded p-4">
                    <h3 className="text-sm font-bold text-accent-orange uppercase tracking-wider mb-2">Section 4 — Result</h3>
                    <p className="text-gray-900 font-medium leading-relaxed">{cs.result}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a similar problem?</h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
            Send us your part drawing or description. We'll identify the correct process and provide an equipment recommendation.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Link to="/contact">
              <PrimaryButton className="px-8 shadow-sm text-lg">Request Process Recommendation <ArrowRight className="w-5 h-5 ml-2"/></PrimaryButton>
            </Link>
            <span className="text-sm text-gray-500 font-medium">Response within 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
