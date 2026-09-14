import { ArrowRight } from 'lucide-react';
import { ASSIGNMENTS } from '../data';
import { ViewType } from '../types';

interface AssignmentsSectionProps {
  onNavigateView: (view: ViewType) => void;
}

export default function AssignmentsSection({ onNavigateView }: AssignmentsSectionProps) {
  return (
    <section id="assignments" className="w-full py-12 lg:py-16 bg-[#faf8ff]">
      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase tracking-wider block">
              Course Work
            </span>
            <h2 className="font-serif text-[28px] text-[#131b2e] font-medium tracking-tight">
              Assignments
            </h2>
            <p className="text-[15px] text-[#434655] max-w-[68ch]">
              Three core course assignments for Deep Learning and Its Applications (CO3133).
            </p>
          </div>
          <span className="font-mono text-[11px] text-[#515f74]">
            Semester 261
          </span>
        </div>

        {/* 3 Streamlined Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ASSIGNMENTS.map((asg) => (
            <div
              key={asg.id}
              className="bg-white p-6 rounded-xl border border-[#eaedff] shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#d0d7ff] transition-all group"
            >
              <div className="space-y-3">
                <span className="font-mono text-[12px] text-[#0037b0] uppercase font-semibold block">
                  {asg.number}
                </span>

                <h3 className="text-[17px] font-semibold text-[#131b2e] group-hover:text-[#0037b0] transition-colors leading-snug">
                  {asg.title}
                </h3>
                
                <p className="text-[13px] text-[#515f74] leading-relaxed">
                  {asg.subtitle}
                </p>
              </div>

              {/* Action Button: View Assignment */}
              <div className="pt-6 mt-2">
                <button
                  onClick={() => {
                    onNavigateView(asg.viewKey);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#e2e7ff] hover:bg-[#0037b0] hover:text-white text-[#0037b0] rounded-lg text-[13px] font-semibold transition-colors cursor-pointer"
                >
                  <span>View Assignment</span>
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
