import { Presentation, Download, ExternalLink, ChevronRight, Layers, Database, Sparkles } from 'lucide-react';

interface SlidesSectionProps {
  onNavigateView?: (view: 'assignment-1' | 'assignment-2' | 'assignment-3') => void;
}

export default function SlidesSection({ onNavigateView }: SlidesSectionProps) {
  const base = (import.meta as any).env?.BASE_URL || '/';
  const slidePdfUrl = `${base}assignment1_slides.pdf`;
  const slideDownloadName = 'CO3133-Semester-261 – Group [2352821] – Assignment [1].pdf';

  return (
    <section id="slides" className="w-full py-12 lg:py-16 bg-white border-t border-[#eaedff]">
      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase tracking-wider block">
              Presentation Deck · Defense Materials
            </span>
            <h2 className="font-serif text-[28px] text-[#131b2e] font-medium tracking-tight">
              Assignment Presentation Slides
            </h2>
            <p className="text-[15px] text-[#434655] max-w-[68ch]">
              Official presentation slides submitted for CO3133 defense and academic evaluation.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={slidePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg text-[13px] font-medium transition-colors shadow-xs"
            >
              <Presentation className="w-4 h-4" />
              <span>Open Slides (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={slidePdfUrl}
              download={slideDownloadName}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#131b2e] rounded-lg text-[13px] font-medium transition-colors border border-[#eaedff]"
            >
              <Download className="w-4 h-4 text-[#0037b0]" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Slide Showcase Card (Clean presentation info without heavy iframe embed) */}
        <div className="bg-[#faf8ff] rounded-xl border border-[#eaedff] p-6 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#d5e3fc] text-[#001d31] font-mono text-[11px] font-semibold uppercase rounded">
                  Assignment 01 Slide Deck
                </span>
                <span className="font-mono text-[12px] text-[#515f74]">
                  13 Slides · 3.2 MB
                </span>
                <span className="hidden sm:inline text-[#747686]">|</span>
                <span className="font-mono text-[11px] text-[#515f74] hidden sm:inline">
                  {slideDownloadName}
                </span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#131b2e] leading-snug">
                Foundations of Deep Learning Pipelines and Architectures: From Linear Models to Modern Sequence Models
              </h3>
              <p className="text-[13px] text-[#515f74]">
                10-Class Fashion Image Classification &amp; Multi-Architecture Comparative Study on Fashion-MNIST.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigateView?.('assignment-1');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-white hover:bg-[#f2f3ff] text-[#0037b0] border border-[#d0deff] rounded-lg text-[13px] font-semibold transition-colors shrink-0 cursor-pointer shadow-2xs"
            >
              <span>View Assignment 1</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#eaedff] text-[13px]">
            <div className="bg-white p-4 rounded-lg border border-[#eaedff] space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#0037b0] uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>Scope of Slides</span>
              </div>
              <p className="text-[#434655] text-[12px]">
                Introduction, Exploratory Data Analysis, 5 Model Architectures, Benchmark Results &amp; Conclusion.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-[#eaedff] space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#0037b0] uppercase">
                <Database className="w-3.5 h-3.5" />
                <span>Dataset Tested</span>
              </div>
              <p className="text-[#434655] text-[12px]">
                Fashion-MNIST (70k samples): 54k Train / 6k Val / 10k Test strictly evaluated under Seed 42.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-[#eaedff] space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#0037b0] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Format Guidelines</span>
              </div>
              <p className="text-[#434655] text-[12px]">
                Adheres to HCMUT CSE CO3133 Semester 261 defense submission requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
