import { Verified, ArrowRight } from 'lucide-react';
import { ModalType } from '../types';

interface AiUsageSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export default function AiUsageSection({ onOpenModal }: AiUsageSectionProps) {
  return (
    <section id="ai-usage" className="w-full py-12 lg:py-16 bg-[#faf8ff]">
      <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#eaedff] shadow-xs space-y-5 relative overflow-hidden">
          {/* Accent vertical bar */}
          <div className="w-1.5 h-full bg-[#0037b0] absolute left-0 top-0"></div>

          {/* Heading */}
          <div className="flex items-center space-x-2 text-[#0037b0]">
            <Verified className="w-6 h-6 text-[#0037b0]" />
            <h2 className="text-[19px] sm:text-[21px] font-semibold text-[#131b2e]">
              AI Usage &amp; Academic Integrity Disclosure
            </h2>
          </div>

          <p className="text-[15px] text-[#434655] leading-relaxed max-w-[68ch]">
            Generative AI tools may be used during selected stages of the course projects for learning support, coding assistance, debugging, writing support, and project development. AI-assisted outputs are reviewed, tested, and verified before inclusion in the submitted work in accordance with HCMUT academic honesty guidelines.
          </p>

          {/* 3 Columns policy */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-1">
            <div className="bg-[#faf8ff] p-4 rounded border border-[#eaedff]">
              <span className="font-mono text-[11px] text-[#515f74] block font-semibold uppercase tracking-wider">
                Permitted Scope
              </span>
              <p className="text-[13px] text-[#131b2e] mt-1 font-medium">
                Grammar checks, syntax debugging &amp; boilerplates.
              </p>
            </div>

            <div className="bg-[#faf8ff] p-4 rounded border border-[#eaedff]">
              <span className="font-mono text-[11px] text-[#515f74] block font-semibold uppercase tracking-wider">
                Verification Policy
              </span>
              <p className="text-[13px] text-[#131b2e] mt-1 font-medium">
                100% human-verified code and empirical benchmarks.
              </p>
            </div>

            <div className="bg-[#faf8ff] p-4 rounded border border-[#eaedff]">
              <span className="font-mono text-[11px] text-[#515f74] block font-semibold uppercase tracking-wider">
                Reproducibility
              </span>
              <p className="text-[13px] text-[#131b2e] mt-1 font-medium">
                Random seeds, checkpoints &amp; environment logged.
              </p>
            </div>
          </div>

          {/* Action & compliance metadata */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#f2f3ff]">
            <button
              onClick={() => onOpenModal('ai-usage')}
              className="inline-flex items-center space-x-1.5 text-[14px] font-semibold text-[#0037b0] hover:text-[#1d4ed8] hover:underline cursor-pointer"
            >
              <span>View detailed AI usage document (/AI_USAGE.md)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="font-mono text-[11px] text-[#515f74]">
              Compliance: HCMUT CSE CO3133
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
