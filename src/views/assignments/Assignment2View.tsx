import { ArrowLeft, ExternalLink, FileText, Github, Play, CheckCircle2, Database, Cpu, Layers, GitBranch, ShieldCheck } from 'lucide-react';
import { COURSE_INFO } from '../../data';
import { ViewType, ModalType } from '../../types';

interface AssignmentViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenModal?: (type: ModalType) => void;
}

export default function Assignment2View({ onNavigate, onOpenModal }: AssignmentViewProps) {
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
              onClick={() => onNavigate('assignment-1')}
              className="text-[12px] text-[#0037b0] hover:underline cursor-pointer mr-2"
            >
              ← Prev: Asg 01
            </button>
            <span className="hidden sm:inline">CO3133 / Assignments</span>
            <span className="hidden sm:inline">/</span>
            <span className="font-semibold text-[#131b2e] bg-[#f2f3ff] px-2.5 py-1 rounded">Assignment 02</span>
            <button
              onClick={() => onNavigate('assignment-3')}
              className="text-[12px] text-[#0037b0] hover:underline cursor-pointer ml-2"
            >
              Next: Asg 03 →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 pt-8 space-y-8">
        {/* Header Title Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-[#d5e3fc] text-[#001d31] font-mono text-[11px] font-semibold uppercase rounded">
              CO3133 Course Project · Assignment 02
            </span>
            <span className="px-2.5 py-1 bg-[#f2f3ff] text-[#515f74] font-mono text-[11px] font-medium rounded border border-[#eaedff]">
              Weight: 30% of Total Course Project
            </span>
            <span className="px-2.5 py-1 bg-[#e2e7ff] text-[#0037b0] font-mono text-[11px] font-medium rounded">
              Topic: Large-Scale Data &amp; Specialized Tasks
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-[28px] sm:text-[34px] font-medium text-[#131b2e] tracking-tight leading-snug">
              Deep Learning on Large-Scale Data for Specialized Computer Vision or Language Tasks
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#434655] leading-relaxed max-w-[85ch]">
              Extending foundational pipeline methodologies to large-scale data regimes. Students select one specialized domain track, submit a formal dataset proposal, build baseline models, and conduct rigorous transfer learning and controlled factor ablation studies.
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
              <span className="font-semibold text-[#131b2e]">07 Oct 2026 (15%)</span>
              <span className="block font-mono text-[11px] text-[#515f74]">Dataset &amp; Task Proposal</span>
            </div>
            <div>
              <span className="block font-mono text-[11px] text-[#515f74] uppercase">Milestone 3 (Final)</span>
              <span className="font-semibold text-[#131b2e]">11 Nov 2026 (60%)</span>
              <span className="block font-mono text-[11px] text-[#515f74]">Controlled Ablation &amp; Defense</span>
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
            <span className="font-semibold text-[#131b2e] block">Week 3 Gate Milestone: Specification &amp; Proposal Framework</span>
            <p className="mt-0.5 leading-relaxed">
              In accordance with Section 18 of the handbook, the formal Dataset Proposal for Assignment 02 will be submitted at Milestone M1 (07 Oct 2026). This page provides the structural template and task requirements for the upcoming implementation.
            </p>
          </div>
        </div>

        {/* Section 1: Candidate Task Tracks */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-4">
            <Layers className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              1. Candidate Specialized Task Tracks (Section 17)
            </h2>
          </div>

          <p className="text-[14px] text-[#434655] leading-relaxed">
            Students select one specialized track to investigate deeply. Each track possesses strict minimum dataset size and annotation thresholds:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Track A</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Fine-Grained Image Classification</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Requires ≥ 5 semantic classes and ≥ 5,000 training images. Focuses on transfer learning with modern ViT or ConvNeXt backbones.
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Primary Metrics: Accuracy, Macro-F1
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Track B</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Object Detection</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Minimum ~3,000 training images and ~5,000 bounding-box instances. Explores anchor-free or feature-pyramid detectors (YOLO / Faster R-CNN).
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Primary Metrics: mAP@50, mAP@50:95
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Track C</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Semantic or Instance Segmentation</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Pixel-level dense prediction requiring ≥ 3 foreground classes and ~1,000+ masked images (e.g. Mask2Former, U-Net, DeepLabV3+).
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Primary Metrics: mIoU, Dice Score
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Track D</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Person or Vehicle Re-Identification</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Metric learning across multi-camera views with ≥ 300 distinct identities and strict gallery/query protocol separation.
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Primary Metrics: Rank-1, Rank-5, mAP
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Track E</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Monocular Depth Estimation</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Dense depth regression from single 2D views using ~5,000 RGB-depth pairs with scene-level split validation to prevent leakage.
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Primary Metrics: Abs Rel, RMSE, δ &lt; 1.25
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Track F</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Text Classification &amp; Sequence Labeling</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Large-scale natural language processing with tokenization, class imbalance handling, and transformer fine-tuning (RoBERTa / DeBERTa).
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Primary Metrics: Macro-F1, Exact Match
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Technical & Experimental Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-[#0037b0]">
              <Cpu className="w-5 h-5" />
              <h3 className="font-serif text-[18px] font-medium text-[#131b2e]">Mandatory Model Pipeline</h3>
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#434655]">
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• 1. Simple Baseline:</span>
                <span>A lightweight reference model to establish minimum performance benchmarks.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• 2. Pretrained Backbone:</span>
                <span>A modern deep architecture adapted to the task with a well-documented transfer learning protocol.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• 3. Fine-Tuning Strategy:</span>
                <span>Explicit distinction between feature extraction (linear probing) vs. end-to-end parameter adaptation.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• 4. Compute Cost Accounting:</span>
                <span>Reporting GPU memory footprint, throughput (samples/sec), and FLOPs.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-[#0037b0]">
              <GitBranch className="w-5 h-5" />
              <h3 className="font-serif text-[18px] font-medium text-[#131b2e]">Mandatory Controlled Ablation</h3>
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#434655]">
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Factor Isolation:</span>
                <span>At least one factor must be systematically varied while fixing all other parameters.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Example Studies:</span>
                <span>Freeze vs. Full fine-tune, Data Augmentation strategies, Backbone A vs. B, or Loss formulations.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Error Taxonomy:</span>
                <span>Systematic grouping of failure modes (e.g. occlusion, blur, rare classes) with frequency quantification.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Scientific Hypothesis:</span>
                <span>Every experiment requires an a priori hypothesis and metric-driven conclusion criteria.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Proposal Checklist */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-4">
            <Database className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              2. Dataset Proposal Requirements (Milestone M1 · Due 07 Oct 2026)
            </h2>
          </div>

          <p className="text-[13px] text-[#434655] leading-relaxed">
            Before full model training begins, a Dataset Proposal must be submitted and achieve Approved status:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-[12px] pt-2">
            <div className="p-3 bg-[#faf8ff] rounded border border-[#eaedff]">
              ✓ Dataset Name, Source &amp; License
            </div>
            <div className="p-3 bg-[#faf8ff] rounded border border-[#eaedff]">
              ✓ Input &amp; Output Prediction Unit
            </div>
            <div className="p-3 bg-[#faf8ff] rounded border border-[#eaedff]">
              ✓ Sample Counts &amp; Class Balance
            </div>
            <div className="p-3 bg-[#faf8ff] rounded border border-[#eaedff]">
              ✓ Data-Splitting &amp; Leakage Prevention
            </div>
            <div className="p-3 bg-[#faf8ff] rounded border border-[#eaedff]">
              ✓ Baseline &amp; Pretrained Model Plan
            </div>
            <div className="p-3 bg-[#faf8ff] rounded border border-[#eaedff]">
              ✓ Compute Hardware Estimation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
