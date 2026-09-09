import { ArrowRight } from 'lucide-react';
import { ASSIGNMENTS } from '../data';
import { ModalType } from '../types';

interface AssignmentsSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export default function AssignmentsSection({ onOpenModal }: AssignmentsSectionProps) {
  return (
    <section id="assignments" className="w-full py-12 lg:py-16 bg-[#faf8ff]">
      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase tracking-wider block">
              Project Portfolio
            </span>
            <h2 className="font-serif text-[28px] text-[#131b2e] font-medium tracking-tight">
              Assignments &amp; Research Modules
            </h2>
            <p className="text-[15px] text-[#434655] max-w-[68ch]">
              Three core course assignments spanning custom deep learning foundations, large-scale architectures, and multimodal cross-attention.
            </p>
          </div>
          <span className="font-mono text-[11px] text-[#515f74]">
            3 Deliverables (2024–2025)
          </span>
        </div>

        {/* 3 Research Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ASSIGNMENTS.map((asg) => (
            <div
              key={asg.id}
              className="bg-white p-6 rounded-lg border border-[#eaedff] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="space-y-4">
                {/* Header row: Number & Status Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] text-[#515f74] uppercase font-semibold">
                    {asg.number}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 font-mono text-[11px] rounded uppercase font-medium ${asg.statusColor}`}
                  >
                    {asg.status}
                  </span>
                </div>

                {/* Title & Short excerpt */}
                <div className="space-y-2">
                  <h3 className="text-[18px] font-semibold text-[#131b2e] group-hover:text-[#0037b0] transition-colors leading-snug">
                    {asg.title}
                  </h3>
                  <p className="text-[13px] text-[#434655] line-clamp-2 leading-relaxed">
                    {asg.subtitle}
                  </p>
                </div>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px] text-[#515f74]">
                  {asg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#f2f3ff] rounded border border-[#eaedff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mini Benchmark Preview */}
                <div className="p-3 bg-[#f2f3ff] rounded border border-[#eaedff] space-y-1.5 font-mono text-[11px] text-[#515f74]">
                  <div className="flex justify-between items-center">
                    <span>{asg.metrics.label1}</span>
                    <span className="font-semibold text-[#131b2e]">
                      {asg.metrics.value1}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{asg.metrics.label2}</span>
                    <span className="font-semibold text-[#131b2e]">
                      {asg.metrics.value2}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4">
                <button
                  onClick={() => onOpenModal(asg.modalKey)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#e2e7ff] hover:bg-[#0037b0] hover:text-white text-[#131b2e] rounded text-[14px] font-semibold transition-colors cursor-pointer"
                >
                  <span>{asg.buttonLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
