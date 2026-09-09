import { Terminal, ArrowUpRight, ArrowDown, ShieldCheck } from 'lucide-react';
import { COURSE_INFO } from '../data';
import { ModalType } from '../types';

interface HeroSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Top Academic Notification & Progress Line */}
      <div className="w-full bg-[#f2f3ff] py-2 border-b border-[#eaedff]">
        <div className="max-w-[1140px] mx-auto px-4 lg:px-8 flex items-center justify-between text-[11px] font-mono text-[#515f74]">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse"></span>
            <span>Semester 261 Research Portfolio · Academic Archive</span>
          </span>
          <span className="hidden sm:inline-block tracking-tight text-[#434655]">
            Document Ref: {COURSE_INFO.documentRef}
          </span>
        </div>
      </div>

      {/* Main Hero / Research Header */}
      <section id="hero" className="w-full relative overflow-hidden bg-white border-b border-[#eaedff]">
        {/* Subtle Coordinate & Tensor Watermark */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-35 pointer-events-none flex items-center justify-end pr-6 select-none">
          <svg
            className="w-[520px] h-[520px] text-[#747686]/40"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid-pattern-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeDasharray="2,2" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid-pattern-hero)" />
            
            {/* Input layer nodes */}
            <circle cx="80" cy="120" r="4" fill="currentColor" />
            <circle cx="80" cy="200" r="4" fill="currentColor" />
            <circle cx="80" cy="280" r="4" fill="currentColor" />

            {/* Hidden layer nodes */}
            <circle cx="200" cy="80" r="4" fill="currentColor" />
            <circle cx="200" cy="160" r="4" fill="currentColor" />
            <circle cx="200" cy="240" r="4" fill="currentColor" />
            <circle cx="200" cy="320" r="4" fill="currentColor" />

            {/* Output layer nodes */}
            <circle cx="320" cy="140" r="4" fill="currentColor" />
            <circle cx="320" cy="260" r="4" fill="currentColor" />

            {/* Dense synaptic lines */}
            <path
              d="M80 120 L200 80 M80 120 L200 160 M80 200 L200 160 M80 200 L200 240 M80 280 L200 240 M80 280 L200 320"
              stroke="currentColor"
              strokeDasharray="4,3"
              strokeWidth="0.75"
            />
            <path
              d="M200 80 L320 140 M200 160 L320 140 M200 240 L320 260 M200 320 L320 260"
              stroke="currentColor"
              strokeWidth="0.75"
            />

            {/* Mathematical Tensor Annotations */}
            <text x="75" y="60" fill="currentColor" fontFamily="JetBrains Mono, monospace" fontSize="10">
              X ~ [B, D_in]
            </text>
            <text x="175" y="45" fill="currentColor" fontFamily="JetBrains Mono, monospace" fontSize="10">
              H = σ(W_l X + b)
            </text>
            <text x="290" y="115" fill="currentColor" fontFamily="JetBrains Mono, monospace" fontSize="10">
              Y_hat ∈ R^K
            </text>
          </svg>
        </div>

        <div className="max-w-[1140px] mx-auto px-4 lg:px-8 py-10 lg:py-14 relative z-10">
          <div className="max-w-[68ch] space-y-6">
            {/* Institutional pre-header */}
            <div className="space-y-1">
              <p className="font-mono text-[11px] text-[#515f74] uppercase tracking-wider font-medium">
                {COURSE_INFO.university}
              </p>
              <p className="text-[13px] text-[#434655] font-medium">
                {COURSE_INFO.faculty}
              </p>
            </div>

            {/* Main Title & Course Subtitle */}
            <div className="space-y-2 pt-1">
              <h1 className="font-serif text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.15] text-[#131b2e] font-normal tracking-tight">
                {COURSE_INFO.courseName}
              </h1>
              <p className="text-[17px] text-[#0037b0] font-semibold tracking-normal">
                {COURSE_INFO.term}
              </p>
            </div>

            {/* Academic Abstract */}
            <div className="bg-[#f2f3ff] p-5 rounded-lg border border-[#eaedff] shadow-xs space-y-2">
              <span className="font-mono text-[11px] text-[#515f74] uppercase tracking-widest font-semibold block">
                Abstract
              </span>
              <p className="text-[15px] text-[#434655] leading-relaxed">
                {COURSE_INFO.abstract}
              </p>
            </div>

            {/* Academic Metadata 4-column Grid */}
            <div className="bg-[#faf8ff] p-4 rounded-lg border border-[#eaedff] shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#515f74] block uppercase font-medium">
                  Instructor
                </span>
                <span className="text-[15px] font-semibold text-[#131b2e] block">
                  {COURSE_INFO.instructor}
                </span>
                <span className="font-mono text-[11px] text-[#515f74] block">
                  {COURSE_INFO.instructorTitle}
                </span>
              </div>

              <div 
                onClick={() => onOpenModal('author-profile')}
                className="space-y-1 cursor-pointer group hover:bg-[#eaedff]/40 p-1 -m-1 rounded transition-colors"
                title="Click to view student author profile"
              >
                <span className="font-mono text-[11px] text-[#515f74] block uppercase font-medium">
                  Student Author
                </span>
                <span className="text-[15px] font-semibold text-[#131b2e] group-hover:text-[#0037b0] transition-colors block">
                  {COURSE_INFO.author}
                </span>
                <span className="font-mono text-[11px] text-[#515f74] block">
                  ID: {COURSE_INFO.studentId}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#515f74] block uppercase font-medium">
                  Course Code
                </span>
                <span className="text-[15px] font-semibold text-[#131b2e] block">
                  {COURSE_INFO.courseCode}
                </span>
                <span className="font-mono text-[11px] text-[#515f74] block">
                  {COURSE_INFO.program}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#515f74] block uppercase font-medium">
                  Term / Year
                </span>
                <span className="text-[15px] font-semibold text-[#131b2e] block">
                  {COURSE_INFO.termShort}
                </span>
                <span className="font-mono text-[11px] text-[#515f74] block">
                  {COURSE_INFO.year}
                </span>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={COURSE_INFO.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0037b0] text-white rounded text-[15px] font-semibold shadow hover:bg-[#1d4ed8] transition-colors"
              >
                <Terminal className="w-4 h-4" />
                <span>View GitHub Repository</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => scrollTo('assignments')}
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#eaedff] text-[#131b2e] hover:bg-[#d5e3fc] rounded text-[15px] font-semibold transition-colors"
              >
                <span>Explore Assignments</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenModal('ai-usage')}
                className="font-mono text-[12px] text-[#515f74] hover:text-[#0037b0] transition-colors inline-flex items-center gap-1.5 sm:ml-auto py-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#0037b0]" />
                <span>AI Disclosure Statement</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
