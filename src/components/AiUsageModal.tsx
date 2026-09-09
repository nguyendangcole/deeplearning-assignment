import { X, ShieldCheck } from 'lucide-react';
import { AI_USAGE_ENTRIES } from '../data';

interface AiUsageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiUsageModal({ isOpen, onClose }: AiUsageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#131b2e]/60 backdrop-blur-sm flex items-center justify-center p-4 lg:p-6 overflow-y-auto animate-fade-in">
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white max-w-[840px] w-full max-h-[90vh] rounded-lg shadow-2xl overflow-y-auto flex flex-col border border-[#eaedff] z-10">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#eaedff] flex items-center justify-between z-20">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-[#0037b0]" />
            <div>
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold block">
                Academic Integrity · HCMUT CSE
              </span>
              <h2 className="font-serif text-[22px] text-[#131b2e] font-medium leading-tight">
                Detailed AI Usage Log (/AI_USAGE.md)
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#515f74] hover:text-[#131b2e] rounded bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 text-[15px] text-[#131b2e]">
          <p className="text-[#434655] leading-relaxed">
            In full accordance with HCMUT course policy CO3133 Semester 261, the following matrix documents generative assistant interactions during this semester&apos;s project work. Every artifact was rigorously reviewed and tested by the author prior to repository inclusion.
          </p>

          <div className="overflow-x-auto border border-[#eaedff] rounded-lg">
            <table className="w-full text-left font-mono text-[12px] bg-white">
              <thead className="bg-[#eaedff] font-semibold text-[#131b2e] border-b border-[#eaedff]">
                <tr>
                  <th className="p-3">Task Domain</th>
                  <th className="p-3">Tool Employed</th>
                  <th className="p-3">Nature of Interaction</th>
                  <th className="p-3">Human Verification Process</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eaedff] text-[#434655]">
                {AI_USAGE_ENTRIES.map((entry, index) => (
                  <tr key={index} className="hover:bg-[#faf8ff]">
                    <td className="p-3 font-semibold text-[#131b2e] whitespace-nowrap">
                      {entry.domain}
                    </td>
                    <td className="p-3 font-medium text-[#0037b0] whitespace-nowrap">
                      {entry.tool}
                    </td>
                    <td className="p-3 text-[13px] font-sans text-[#434655]">
                      {entry.natureOfInteraction}
                    </td>
                    <td className="p-3 text-[13px] font-sans text-[#434655]">
                      {entry.verificationProcess}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#f2f3ff] p-4 rounded-lg border border-[#eaedff] space-y-2">
            <h4 className="font-semibold text-[14px] text-[#131b2e]">
              Course Integrity Statement
            </h4>
            <p className="text-[13px] text-[#434655] leading-relaxed">
              No direct code solutions, automated mathematical conclusions, or plagiarized model weights were accepted without thorough mathematical proof and reproducible local benchmarks. All checkpoints and random seeds (seed=42) are deterministically reproducible on Google Colab and local GPU servers.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-[#eaedff] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#515f74]">
            Compliance: HCMUT CSE CO3133.   
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0037b0] text-white rounded text-[14px] font-semibold hover:bg-[#1d4ed8] transition-colors cursor-pointer"
          >
            Return to Landing Page
          </button>
        </div>
      </div>
    </div>
  );
}
