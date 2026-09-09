import { ArrowLeft, ExternalLink, FileText, Github, CheckCircle2, Database, Cpu, Layers, GitBranch, ShieldCheck } from 'lucide-react';
import { COURSE_INFO } from '../../data';
import { ViewType, ModalType } from '../../types';

interface AssignmentViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenModal?: (type: ModalType) => void;
}

export default function Assignment3View({ onNavigate, onOpenModal }: AssignmentViewProps) {
  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] pb-24">
      {/* Top Breadcrumbs & Navigation Bar */}
      <div className="bg-white border-b border-[#eaedff] sticky top-16 z-30 shadow-xs">
        <div className="max-w-[1140px] mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-2 text-[13px] font-medium text-[#0037b0] hover:text-[#00257a] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Course Overview</span>
          </button>

          <div className="flex items-center space-x-3 text-[12px] font-mono text-[#515f74]">
            <button
              onClick={() => onNavigate('assignment-2')}
              className="text-[12px] text-[#0037b0] hover:underline cursor-pointer mr-2"
            >
              ← Prev: Asg 02
            </button>
            <span className="hidden sm:inline">CO3133 / Assignments</span>
            <span className="hidden sm:inline">/</span>
            <span className="font-semibold text-[#131b2e] bg-[#f2f3ff] px-2.5 py-1 rounded">Assignment 03</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 pt-8 space-y-8">
        {/* Header Title Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-[#d5e3fc] text-[#001d31] font-mono text-[11px] font-semibold uppercase rounded">
              CO3133 Course Project · Assignment 03
            </span>
            <span className="px-2.5 py-1 bg-[#f2f3ff] text-[#515f74] font-mono text-[11px] font-medium rounded border border-[#eaedff]">
              Weight: 30% of Total Course Project
            </span>
            <span className="px-2.5 py-1 bg-[#e2e7ff] text-[#0037b0] font-mono text-[11px] font-medium rounded">
              Topic: Multimodal Deep Learning
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-[28px] sm:text-[34px] font-medium text-[#131b2e] tracking-tight leading-snug">
              Multimodal Deep Learning: Representation, Fusion, and Evaluation
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#434655] leading-relaxed max-w-[85ch]">
              Designing, training, and benchmarking an end-to-end multimodal architecture operating on at least two genuinely paired modalities. Contrasts unimodal baselines against simple and advanced cross-modal fusion strategies, isolating modality support vs. conflict scenarios.
            </p>
          </div>

          {/* Academic Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#f2f3ff] text-[13px]">
            <div>
              <span className="block font-mono text-[11px] text-[#515f74] uppercase">Student Author</span>
              <span className="font-semibold text-[#131b2e]">{COURSE_INFO.author}</span>
              <span className="block font-mono text-[11px] text-[#515f74]">ID: {COURSE_INFO.studentId}</span>
            </div>
            <div>
              <span className="block font-mono text-[11px] text-[#515f74] uppercase">Instructor</span>
              <span className="font-semibold text-[#131b2e]">{COURSE_INFO.instructor}</span>
              <span className="block font-mono text-[11px] text-[#515f74]">HCMUT CSE</span>
            </div>
            <div>
              <span className="block font-mono text-[11px] text-[#515f74] uppercase">Milestone 1 (Proposal)</span>
              <span className="font-semibold text-[#131b2e]">18 Nov 2026 (15%)</span>
              <span className="block font-mono text-[11px] text-[#515f74]">Multimodal Task &amp; Data Proposal</span>
            </div>
            <div>
              <span className="block font-mono text-[11px] text-[#515f74] uppercase">Milestone 3 (Final)</span>
              <span className="font-semibold text-[#131b2e]">02 Dec 2026 (60%)</span>
              <span className="block font-mono text-[11px] text-[#515f74]">Cross-Modal Fusion &amp; Defense</span>
            </div>
          </div>

          {/* Quick Deliverable Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={COURSE_INFO.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg text-[13px] font-medium transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>Source Code Repository</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </a>

            <button
              onClick={() => onOpenModal?.('ai-usage')}
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#f2f3ff] hover:bg-[#e6e8ff] text-[#434655] rounded-lg text-[13px] font-medium transition-colors border border-[#eaedff] cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#0037b0]" />
              <span>AI Disclosure Log</span>
            </button>

            <a
              href="handbook-ene.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#f2f3ff] hover:bg-[#e6e8ff] text-[#434655] rounded-lg text-[13px] font-medium transition-colors border border-[#eaedff]"
            >
              <FileText className="w-4 h-4" />
              <span>Handbook Spec (PDF)</span>
            </a>
          </div>
        </div>

        {/* Notice Badge */}
        <div className="p-4 bg-[#eef2ff] border-l-4 border-[#0037b0] rounded-r-lg text-[13px] text-[#3b4758] flex items-start space-x-3">
          <CheckCircle2 className="w-5 h-5 text-[#0037b0] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#131b2e] block">Week 3 Gate Milestone: Specification &amp; Multimodal Task Options</span>
            <p className="mt-0.5 leading-relaxed">
              Assignment 03 explores multimodal representation and fusion scheduled for the second half of Semester 261. Formal proposals will be submitted at Milestone M1 (18 Nov 2026).
            </p>
          </div>
        </div>

        {/* Section 1: Candidate Multimodal Task Options */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-4">
            <Layers className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              1. Candidate Multimodal Task Options (Section 26)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Option 1</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Image–Text Classification</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                ≥ 5 semantic classes, ≥ 5,000 paired image–text instances. Joint representation learning for multi-label or categorical predictions.
              </p>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Option 2</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Image–Text Retrieval</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Contrastive learning (CLIP-like objective) across shared embedding spaces. Metrics: Recall@1, Recall@5, Recall@10, Median Rank.
              </p>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Option 3</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Visual Question Answering (VQA)</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                ≥ 10,000 question–image pairs. Requires bidirectional co-attention to locate image regions relevant to question phrases.
              </p>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Option 4</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Image Captioning</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Autoregressive natural language generation conditioned on visual encodings. Metrics: CIDEr, BLEU-4, METEOR.
              </p>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Option 5</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">RGB–Depth Scene Prediction</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                ≥ 5,000 spatially aligned RGB and Depth maps. Explores depth-guided semantic segmentation or 3D bounding-box estimation.
              </p>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Option 6</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Video–Text Retrieval</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Temporal video frame sequence encoding paired with textual query descriptions using cross-modal transformer encoders.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Four Mandatory Benchmark Models */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-4">
            <Cpu className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              2. Mandatory Four-Model Comparative Framework (Section 29)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-[13px]">
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-1.5">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] block uppercase">Model 1</span>
              <span className="font-semibold text-[#131b2e] block">Unimodal Baseline A</span>
              <span className="text-[#515f74] text-[12px] block">Trained exclusively on Modality A (e.g. Vision-only)</span>
            </div>
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-1.5">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] block uppercase">Model 2</span>
              <span className="font-semibold text-[#131b2e] block">Unimodal Baseline B</span>
              <span className="text-[#515f74] text-[12px] block">Trained exclusively on Modality B (e.g. Text-only)</span>
            </div>
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-1.5">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] block uppercase">Model 3</span>
              <span className="font-semibold text-[#131b2e] block">Simple Fusion Baseline</span>
              <span className="text-[#515f74] text-[12px] block">Direct vector concatenation or linear projection combination</span>
            </div>
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-1.5">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] block uppercase">Model 4</span>
              <span className="font-semibold text-[#131b2e] block">Advanced Cross-Modal Model</span>
              <span className="text-[#515f74] text-[12px] block">Cross-attention, bilinear pooling, or alignment loss</span>
            </div>
          </div>
        </div>

        {/* Section 3: Modality Interaction Protocol */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-4">
            <GitBranch className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              3. Modality Interaction &amp; Ablation Protocol (Section 30)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] text-[#434655]">
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-semibold text-[#131b2e] block">Complementary Evidence (Support Cases):</span>
              <p className="leading-relaxed">
                Identifying cases where neither modality alone succeeds, but joint fusion produces accurate predictions.
              </p>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-semibold text-[#131b2e] block">Conflicting Evidence (Noise &amp; Misalignment):</span>
              <p className="leading-relaxed">
                Analyzing scenarios where one noisy modality degrades the stronger modality, and evaluating attention weights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
