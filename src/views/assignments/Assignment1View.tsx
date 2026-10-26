import { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  FileText, 
  Github, 
  Layers, 
  Database, 
  Cpu, 
  GitBranch, 
  ShieldCheck, 
  Terminal, 
  BarChart3, 
  AlertCircle, 
  HelpCircle, 
  Users, 
  Video, 
  BookOpen,
  Award,
  Activity,
  TrendingUp,
  Table,
  Sparkles,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Download,
  Presentation
} from 'lucide-react';
import { COURSE_INFO } from '../../data';
import { ViewType, ModalType } from '../../types';
import { ASSIGNMENT1_HISTORIES } from '../../assignment1Histories';



interface AssignmentViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenModal?: (type: ModalType) => void;
}

// Model result data from assignment1/results/master_model_comparison.csv
const MODEL_RESULTS = [
  {
    id: 'linear',
    name: 'Linear Classifier',
    shortName: 'Linear',
    params: '7,850',
    bestEpoch: 12,
    valLoss: 0.4352,
    valAcc: 85.13,
    testAcc: 84.21,
    macroF1: 84.19,
    trainTime: '276.37s',
    infTime: '0.0088s',
    latency: '0.0027 ms',
    checkpoint: 'linear_best.pth',
    historyPlot: 'assignment1/figures/linear_training_history.png',
    samplePredPlot: 'assignment1/figures/linear_sample_predictions.png',
    cmPlot: 'assignment1/figures/linear_confusion_matrix.png',
    architecture: 'Input Flatten(784) → Linear(784, 10) + Cross-Entropy Loss',
    inductiveBias: 'None (Linear hyperplane in 784D vector space)',
    badge: 'Baseline'
  },
  {
    id: 'mlp',
    name: 'Multilayer Perceptron (MLP)',
    shortName: 'MLP',
    params: '235,146',
    bestEpoch: 17,
    valLoss: 0.3026,
    valAcc: 88.98,
    testAcc: 88.77,
    macroF1: 88.71,
    trainTime: '285.81s',
    infTime: '0.0386s',
    latency: '0.0121 ms',
    checkpoint: 'mlp_best.pth',
    historyPlot: 'assignment1/figures/mlp_training_history.png',
    samplePredPlot: 'assignment1/figures/mlp_sample_predictions.png',
    cmPlot: 'assignment1/figures/mlp_confusion_matrix.png',
    architecture: 'Linear(784, 256) → BatchNorm → ReLU → Dropout(0.3) → Linear(256, 128) → ReLU → Linear(128, 10)',
    inductiveBias: 'None (Fully connected permutation-invariant layers)',
    badge: 'Non-linear'
  },
  {
    id: 'cnn',
    name: 'Convolutional Neural Network (CNN)',
    shortName: 'CNN',
    params: '421,834',
    bestEpoch: 9,
    valLoss: 0.1994,
    valAcc: 92.63,
    testAcc: 92.19,
    macroF1: 92.17,
    trainTime: '306.71s',
    infTime: '0.0656s',
    latency: '0.0205 ms',
    checkpoint: 'cnn_best.pth',
    historyPlot: 'assignment1/figures/cnn_training_history.png',
    samplePredPlot: 'assignment1/figures/cnn_sample_predictions.png',
    cmPlot: 'assignment1/figures/cnn_confusion_matrix.png',
    architecture: 'Conv2D(1→32, 3x3) → BN → ReLU → Conv2D(32→64) → MaxPool(2) → Conv2D(64→128) → MaxPool(2) → FC(128*7*7, 256) → FC(256, 10)',
    inductiveBias: 'High (2D Spatial Locality & Translation Equivariance)',
    badge: 'Best Accuracy'
  },
  {
    id: 'lstm',
    name: 'LSTM Baseline (H=128)',
    shortName: 'LSTM-128',
    params: '82,186',
    bestEpoch: 17,
    valLoss: 0.2676,
    valAcc: 90.33,
    testAcc: 90.00,
    macroF1: 89.95,
    trainTime: '289.11s',
    infTime: '0.0775s',
    latency: '0.0242 ms',
    checkpoint: 'lstm_128_best.pth',
    historyPlot: 'assignment1/figures/lstm_128_training_history.png',
    samplePredPlot: 'assignment1/figures/lstm_128_sample_predictions.png',
    cmPlot: 'assignment1/figures/lstm_128_confusion_matrix.png',
    architecture: 'Row scanlines (T=28, d=28) → LSTM(28, H=128, 4 gates) → h_28 → FC(128, 10)',
    inductiveBias: 'Sequential Temporal Bias (Top-to-bottom row scanline transitions)',
    badge: 'Recurrent'
  },
  {
    id: 'gru',
    name: 'GRU Baseline (H=128)',
    shortName: 'GRU-128',
    params: '61,962',
    bestEpoch: 17,
    valLoss: 0.2582,
    valAcc: 90.80,
    testAcc: 90.51,
    macroF1: 90.46,
    trainTime: '292.60s',
    infTime: '0.0647s',
    latency: '0.0202 ms',
    checkpoint: 'gru_128_best.pth',
    historyPlot: 'assignment1/figures/gru_128_training_history.png',
    samplePredPlot: 'assignment1/figures/gru_128_sample_predictions.png',
    cmPlot: 'assignment1/figures/gru_128_confusion_matrix.png',
    architecture: 'Row scanlines (T=28, d=28) → GRU(28, H=128, 3 gates) → h_28 → FC(128, 10)',
    inductiveBias: 'Sequential Temporal Bias (Efficient 3-gate recurrent transitions)',
    badge: 'Extended Study'
  },
  {
    id: 'lstm_300k',
    name: 'LSTM Matched (H=258)',
    shortName: 'LSTM-300K',
    params: '299,806',
    bestEpoch: 14,
    valLoss: 0.2591,
    valAcc: 90.80,
    testAcc: 89.94,
    macroF1: 89.91,
    trainTime: '305.49s',
    infTime: '0.1521s',
    latency: '0.0475 ms',
    checkpoint: 'lstm_300k_best.pth',
    historyPlot: 'assignment1/figures/lstm_300k_training_history.png',
    samplePredPlot: 'assignment1/figures/lstm_300k_sample_predictions.png',
    cmPlot: 'assignment1/figures/lstm_300k_confusion_matrix.png',
    architecture: 'Row scanlines (T=28, d=28) → LSTM(28, H=258, 4 gates) → h_28 → FC(258, 10)',
    inductiveBias: 'Sequential Temporal Bias (~300K parameter matched budget)',
    badge: 'Extended Study'
  },
  {
    id: 'gru_300k',
    name: 'GRU Matched (H=300)',
    shortName: 'GRU-300K',
    params: '300,010',
    bestEpoch: 10,
    valLoss: 0.2532,
    valAcc: 91.02,
    testAcc: 90.60,
    macroF1: 90.49,
    trainTime: '303.92s',
    infTime: '0.1471s',
    latency: '0.0460 ms',
    checkpoint: 'gru_300k_best.pth',
    historyPlot: 'assignment1/figures/gru_300k_training_history.png',
    samplePredPlot: 'assignment1/figures/gru_300k_sample_predictions.png',
    cmPlot: 'assignment1/figures/gru_300k_confusion_matrix.png',
    architecture: 'Row scanlines (T=28, d=28) → GRU(28, H=300, 3 gates) → h_28 → FC(300, 10)',
    inductiveBias: 'Sequential Temporal Bias (~300K parameter matched budget, +16.3% wider)',
    badge: 'Extended Study'
  },
  {
    id: 'transformer',
    name: 'Vision Transformer (ViT)',
    shortName: 'ViT',
    params: '72,074',
    bestEpoch: 20,
    valLoss: 0.3170,
    valAcc: 88.07,
    testAcc: 87.60,
    macroF1: 87.52,
    trainTime: '373.48s',
    infTime: '0.2567s',
    latency: '0.0802 ms',
    checkpoint: 'transformer_best.pth',
    historyPlot: 'assignment1/figures/transformer_training_history.png',
    samplePredPlot: 'assignment1/figures/transformer_sample_predictions.png',
    cmPlot: 'assignment1/figures/transformer_confusion_matrix.png',
    architecture: '4x4 Patching (49 patches) → Linear Projection (d=64) + CLS Token + 1D PosEmbedding → 2 Transformer Blocks (h=4, d_mlp=128) → Head(64, 10)',
    inductiveBias: 'Low (Global Multi-Head Self-Attention across all patches)',
    badge: 'Attention'
  }
];

// Extended Study: Matched Parameter Budget (~300K) Models for dedicated comparison block
const MATCHED_PARAMETER_MODELS = [
  MODEL_RESULTS[5], // LSTM Matched (H=258)
  MODEL_RESULTS[6]  // GRU Matched (H=300)
];

export default function Assignment1View({ onNavigate }: AssignmentViewProps) {
  const [selectedModelId, setSelectedModelId] = useState<string>('cnn');
  const [selectedEdaTab, setSelectedEdaTab] = useState<'distribution' | 'pixels' | 'samples' | 'average'>('distribution');
  const [selectedCmModelId, setSelectedCmModelId] = useState<string>('cnn');
  const [selectedHistoryModelId, setSelectedHistoryModelId] = useState<string>('linear');

  const base = ((import.meta as any).env?.BASE_URL || '/').replace(/\/$/, '') + '/';
  const getAssetUrl = (path: string) => `${base}${path.replace(/^\//, '')}`;

  const allModels = MODEL_RESULTS;
  const currentModel = allModels.find((m) => m.id === selectedModelId) || MODEL_RESULTS[2];
  const currentCmModel = allModels.find((m) => m.id === selectedCmModelId) || MODEL_RESULTS[2];
  const currentHistoryModel = allModels.find((m) => m.id === selectedHistoryModelId) || MODEL_RESULTS[0];
  const currentHistory = ASSIGNMENT1_HISTORIES[selectedHistoryModelId] || ASSIGNMENT1_HISTORIES['linear'];

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

          <div className="flex items-center space-x-3">
            <a
              href={`${base}Murph_A1_Report.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-md text-[12px] font-medium transition-colors shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Report PDF</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
            <a
              href={`${base}assignment1_slides.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#0037b0] border border-[#d5e3fc] rounded-md text-[12px] font-medium transition-colors shadow-xs cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Slides (13p)</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
            <div className="flex items-center space-x-2 text-[12px] font-mono text-[#515f74]">
              <span className="hidden sm:inline">CO3133 / Assignments</span>
              <span className="hidden sm:inline">/</span>
              <span className="font-semibold text-[#131b2e] bg-[#f2f3ff] px-2.5 py-1 rounded">Assignment 01</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Centered Content Stream */}
      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 pt-8 space-y-8">
            
            {/* =========================================================================
                1. ASSIGNMENT TITLE & BASIC INFORMATION
               ========================================================================= */}
            <div id="sec-overview" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6 scroll-mt-28">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 bg-[#d5e3fc] text-[#001d31] font-mono text-[11px] font-semibold uppercase rounded">
                  CO3133 Course Project · Assignment 01
                </span>
                <span className="px-2.5 py-1 bg-[#e2e7ff] text-[#0037b0] font-mono text-[11px] font-medium rounded">
                  Fashion-MNIST Benchmark
                </span>
                <span className="px-2.5 py-1 bg-[#f2f3ff] text-[#515f74] font-mono text-[11px] font-medium rounded">
                  5 Core Architectures
                </span>
              </div>

          <div className="space-y-2">
            <h1 className="font-serif text-[28px] sm:text-[32px] font-medium text-[#131b2e] tracking-tight leading-snug">
              Assignment 1: Foundations of Deep Learning Pipelines and Architectures
            </h1>
            <p className="text-[15px] text-[#0037b0] font-medium">
              Topic: From Linear Models to Modern Sequence Models: A Comparative Study for Image Classification
            </p>
          </div>

          {/* Group Members & Instructor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#f2f3ff] text-[13px]">
            <div className="space-y-1">
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#0037b0]" />
                <span>Group Member(s)</span>
              </span>
              <div className="font-semibold text-[#131b2e]">{COURSE_INFO.author}</div>
              <div className="font-mono text-[11px] text-[#515f74]">Student ID: {COURSE_INFO.studentId}</div>
              <a 
                href={COURSE_INFO.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center text-[11px] text-[#0037b0] hover:underline font-mono"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
              </a>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-[#0037b0]" />
                <span>Instructor</span>
              </span>
              <div className="font-semibold text-[#131b2e]">{COURSE_INFO.instructor}</div>
              <div className="text-[11px] text-[#515f74]">Faculty of Computer Science and Engineering, HCMUT</div>
            </div>
          </div>

          {/* Quick Deliverable Action Links */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <a
              href={`${base}Murph_A1_Report.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg text-[13px] font-medium transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Assignment 1 Report (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
            </a>

            <a
              href={`${base}assignment1_slides.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#131b2e] hover:bg-[#25324d] text-white rounded-lg text-[13px] font-medium transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <Presentation className="w-4 h-4 text-[#82b1ff]" />
              <span>View Presentation Slides (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
            </a>

            <a
              href={`${base}assignment1_slides.pdf`}
              download="CO3133-Semester-261 – Group [2352821] – Assignment [1].pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-[#f2f3ff] hover:bg-[#e6e8ff] text-[#131b2e] rounded-lg text-[13px] font-medium transition-colors border border-[#eaedff] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#0037b0]" />
              <span>Download Slides (13p)</span>
            </a>

            <a
              href={COURSE_INFO.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#f2f3ff] hover:bg-[#e6e8ff] text-[#131b2e] rounded-lg text-[13px] font-medium transition-colors border border-[#eaedff]"
            >
              <Github className="w-4 h-4 text-[#0037b0]" />
              <span>Source Code Repo</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </a>

            <a
              href={`${base}handbook-ene.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#f2f3ff] hover:bg-[#e6e8ff] text-[#434655] rounded-lg text-[13px] font-medium transition-colors border border-[#eaedff]"
            >
              <FileText className="w-4 h-4" />
              <span>Course Handbook (PDF)</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            2. PROBLEM STATEMENT
           ========================================================================= */}
        <div id="sec-problem-statement" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <BookOpen className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              1. Problem Statement
            </h2>
          </div>
          
          <div className="space-y-5 text-[14px] text-[#434655] leading-relaxed">
            <p>
              Image classification on complex clothing products introduces nuanced visual ambiguities due to subtle textural contours, sleeve variations, and high intra-class variance compared to handwritten digits. The core objective of <strong>Assignment 1</strong> is to formulate, implement from scratch, and systematically benchmark <strong>5 foundational deep learning architectures</strong> on the <strong>Fashion-MNIST</strong> dataset under controlled empirical conditions.
            </p>


            {/* Motivation & Representation Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Real-World Motivation
                </span>
                <p className="text-[13px] text-[#515f74]">
                  Automated visual inventory cataloging, product search retrieval in fashion e-commerce, and systematically measuring how distinct inductive priors (Spatial translation vs Temporal scanlines vs Self-Attention tokens) cope with silhouette overlaps.
                </p>
              </div>

              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Key Representation Challenges
                </span>
                <p className="text-[13px] text-[#515f74]">
                  Subtle textural and collar boundaries across upper-body garments (<em>T-shirt</em>, <em>Shirt</em>, <em>Pullover</em>, <em>Coat</em>) and preserving 2D spatial locality when comparing 1D flattened vectors vs 2D spatial feature grids.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. DATASET DESCRIPTION AND EDA
           ========================================================================= */}
        <div id="sec-eda" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Database className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              2. Dataset Description &amp; Exploratory Data Analysis (EDA)
            </h2>
          </div>

          <div className="space-y-4 text-[14px] text-[#434655] leading-relaxed">
            <p>
              The <strong>Fashion-MNIST</strong> dataset comprises 70,000 grayscale images across 10 clothing categories (60,000 train + 10,000 test). We enforce a deterministic <strong>90/10 Train/Val split</strong> with fixed seed (<code className="bg-[#f2f3ff] px-1.5 py-0.5 rounded font-mono text-[12px]">seed = 42</code>), yielding 54,000 training, 6,000 validation, and 10,000 held-out test samples. All image batches undergo channel-wise normalization using the computed training split parameters.
            </p>

            {/* Split Verification & DataLoader Sanity Check Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-1">
              {/* Card 1: Split Verification Summary */}
              <div className="p-4 bg-[#f8faff] rounded-xl border border-[#dbe6fd] space-y-3">
                <div className="flex items-center justify-between border-b border-[#e2ecff] pb-2">
                  <div className="flex items-center space-x-1.5 text-[#0037b0]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-mono text-[12px] font-bold uppercase tracking-wider">
                      Split Verification Summary
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#e6f4ea] text-[#137333] font-mono text-[10px] font-semibold rounded-full border border-[#ceead6]">
                    ✓ No Overlap (Seed 42)
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[12px]">
                  <div className="p-2 bg-white rounded-lg border border-[#eaedff]">
                    <div className="font-mono text-[10px] text-[#515f74] uppercase">Training</div>
                    <div className="font-mono text-[13px] font-bold text-[#131b2e]">54,000</div>
                    <div className="text-[10px] text-[#515f74]">90% of train</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-[#eaedff]">
                    <div className="font-mono text-[10px] text-[#515f74] uppercase">Validation</div>
                    <div className="font-mono text-[13px] font-bold text-[#131b2e]">6,000</div>
                    <div className="text-[10px] text-[#515f74]">10% of train</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-[#eaedff]">
                    <div className="font-mono text-[10px] text-[#515f74] uppercase">Test Set</div>
                    <div className="font-mono text-[13px] font-bold text-[#131b2e]">10,000</div>
                    <div className="text-[10px] text-[#515f74]">Held-out bench</div>
                  </div>
                </div>

                <div className="space-y-1.5 text-[11px] font-mono text-[#434655] bg-white p-2.5 rounded-lg border border-[#eaedff]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#515f74]">Training Mean (54k split):</span>
                    <span className="font-semibold text-[#131b2e]">0.2856</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#515f74]">Training Std (54k split):</span>
                    <span className="font-semibold text-[#131b2e]">0.3528</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-[#f2f3ff]">
                    <span className="text-[#515f74]">Index Overlap Check:</span>
                    <span className="text-[#137333] font-semibold">PASSED (0 overlapping indices)</span>
                  </div>
                </div>
              </div>

              {/* Card 2: DataLoader Batch Sanity Check */}
              <div className="p-4 bg-[#f8faff] rounded-xl border border-[#dbe6fd] space-y-3">
                <div className="flex items-center justify-between border-b border-[#e2ecff] pb-2">
                  <div className="flex items-center space-x-1.5 text-[#0037b0]">
                    <Terminal className="w-4 h-4" />
                    <span className="font-mono text-[12px] font-bold uppercase tracking-wider">
                      DataLoader Batch Sanity Check
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#f2f3ff] text-[#0037b0] font-mono text-[10px] font-semibold rounded-full border border-[#d2dffc]">
                    Batch Size = 64
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px] font-mono bg-white p-2.5 rounded-lg border border-[#eaedff] text-[#434655]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#515f74]">Batch Images Shape:</span>
                    <span className="font-semibold text-[#131b2e]">torch.Size([64, 1, 28, 28])</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#515f74]">Batch Labels Shape:</span>
                    <span className="font-semibold text-[#131b2e]">torch.Size([64])</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#515f74]">Data Types (Images / Labels):</span>
                    <span className="font-semibold text-[#131b2e]">float32 / int64</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-[#f2f3ff]">
                    <span className="text-[#515f74]">Normalized Min / Max:</span>
                    <span className="font-semibold text-[#131b2e]">-0.8096 / +2.0249</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#515f74]">Normalized Mean / Std:</span>
                    <span className="font-semibold text-[#0037b0]">-0.0159 (≈ 0) / 0.9638 (≈ 1)</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#515f74] leading-normal">
                  The zero-mean unit-variance transformation is empirically validated on loaded mini-batches prior to feedforward training.
                </p>
              </div>
            </div>

            {/* EDA Tabs */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-2 border-b border-[#eaedff] pb-2">
                {[
                  { key: 'distribution', label: 'Class Distribution', file: 'eda_class_distribution.png' },
                  { key: 'pixels', label: 'Pixel Distributions', file: 'eda_pixel_distribution.png' },
                  { key: 'samples', label: 'Representative Samples', file: 'eda_representative_samples.png' },
                  { key: 'average', label: 'Mean Class Images', file: 'eda_average_images.png' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setSelectedEdaTab(tab.key as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all cursor-pointer ${
                      selectedEdaTab === tab.key
                        ? 'bg-[#0037b0] text-white shadow-xs'
                        : 'bg-[#f2f3ff] text-[#515f74] hover:bg-[#e6e8ff]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* EDA Image Display Card */}
              <div className="bg-[#fcfcff] p-4 sm:p-5 rounded-xl border border-[#eaedff] flex flex-col items-center space-y-3">
                {selectedEdaTab === 'distribution' && (
                  <>
                    <img 
                      src={getAssetUrl('assignment1/figures/eda_class_distribution.png')} 
                      alt="Class Distribution"
                      className="max-h-[420px] w-auto object-contain rounded-lg border border-[#eaedff] bg-white p-2"
                    />
                    <p className="text-[12px] font-mono text-[#515f74] text-center">
                      Figure 2.1: Balanced class frequency distribution across 10 categories (6,000 samples per class in training set).
                    </p>
                    <div className="w-full max-w-[760px] bg-[#f0f4ff] p-3 rounded-lg border border-[#d2dffc] text-[12px] text-[#334155] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0037b0] font-mono text-[11px] uppercase">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>EDA Insight: Perfect Class Balance</span>
                      </div>
                      <p className="leading-relaxed">
                        The dataset features a perfectly uniform class distribution (6,000 images/class in train, 1,000 images/class in test). With zero class imbalance, <strong>Accuracy</strong> and <strong>Macro-F1</strong> provide unbiased performance evaluation across all models without requiring loss re-weighting or oversampling.
                      </p>
                    </div>
                  </>
                )}
                {selectedEdaTab === 'pixels' && (
                  <>
                    <img 
                      src={getAssetUrl('assignment1/figures/eda_pixel_distribution.png')} 
                      alt="Pixel Intensity Distribution"
                      className="max-h-[420px] w-auto object-contain rounded-lg border border-[#eaedff] bg-white p-2"
                    />
                    <p className="text-[12px] font-mono text-[#515f74] text-center">
                      Figure 2.2: Raw pixel intensity (0–255) vs Standardized Z-score distribution after transform.
                    </p>
                    <div className="w-full max-w-[760px] bg-[#f0f4ff] p-3 rounded-lg border border-[#d2dffc] text-[12px] text-[#334155] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0037b0] font-mono text-[11px] uppercase">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>EDA Insight: Pixel Intensity Distribution &amp; Normalization</span>
                      </div>
                      <p className="leading-relaxed">
                        Over 70% of pixels have an intensity of 0 (corresponding to black background). Applying Z-score standardization (<code className="bg-white px-1 py-0.5 rounded font-mono text-[11px]">μ = 0.2860, σ = 0.3530</code>) centers the distribution symmetrically around 0, stabilizing gradient propagation and accelerating optimizer convergence.
                      </p>
                    </div>
                  </>
                )}
                {selectedEdaTab === 'samples' && (
                  <>
                    <img 
                      src={getAssetUrl('assignment1/figures/eda_representative_samples.png')} 
                      alt="Representative Fashion Samples"
                      className="max-h-[420px] w-auto object-contain rounded-lg border border-[#eaedff] bg-white p-2"
                    />
                    <p className="text-[12px] font-mono text-[#515f74] text-center">
                      Figure 2.3: Representative visual samples gallery across all 10 fashion categories.
                    </p>
                    <div className="w-full max-w-[760px] bg-[#f0f4ff] p-3 rounded-lg border border-[#d2dffc] text-[12px] text-[#334155] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0037b0] font-mono text-[11px] uppercase">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>EDA Insight: Morphological Similarity &amp; Confusion Clusters</span>
                      </div>
                      <p className="leading-relaxed">
                        Upper-body clothing categories (<em>T-shirt</em>, <em>Pullover</em>, <em>Coat</em>, <em>Shirt</em>) share highly similar silhouette outlines and sleeve boundaries at 28x28 resolution. In contrast, footwear (<em>Sandal</em>, <em>Sneaker</em>, <em>Ankle boot</em>) and accessories (<em>Bag</em>, <em>Trouser</em>) exhibit distinct spatial outlines, making them significantly easier to discriminate.
                      </p>
                    </div>
                  </>
                )}
                {selectedEdaTab === 'average' && (
                  <>
                    <img 
                      src={getAssetUrl('assignment1/figures/eda_average_images.png')} 
                      alt="Average Mean Images per Class"
                      className="max-h-[420px] w-auto object-contain rounded-lg border border-[#eaedff] bg-white p-2"
                    />
                    <p className="text-[12px] font-mono text-[#515f74] text-center">
                      Figure 2.4: Mean pixel template per category illustrating canonical silhouette structures and variance.
                    </p>
                    <div className="w-full max-w-[760px] bg-[#f0f4ff] p-3 rounded-lg border border-[#d2dffc] text-[12px] text-[#334155] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0037b0] font-mono text-[11px] uppercase">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>EDA Insight: Intra-Class Variance in Mean Templates</span>
                      </div>
                      <p className="leading-relaxed">
                        Mean composite images for <em>Trouser</em> and <em>Bag</em> display sharp, well-defined silhouettes (low pose/style variance). In contrast, mean images for <em>Shirt</em> and <em>Coat</em> show blurred boundaries near collars and sleeves, reflecting high intra-class variance—the primary cause of inter-class confusion.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. METHODOLOGY
           ========================================================================= */}
        <div id="sec-methodology" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <GitBranch className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              3. Methodology &amp; Architectures
            </h2>
          </div>

          <div className="space-y-4 text-[14px] text-[#434655] leading-relaxed">
            <p>
              We implement and evaluate 5 core deep learning paradigms from first principles using PyTorch. Each model adopts a distinct mathematical representation and inductive prior:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-[#0037b0]">1. Linear Classifier</span>
                  <span className="text-[10px] font-mono bg-[#d5e3fc] text-[#001d31] px-1.5 py-0.5 rounded">7,850 params</span>
                </div>
                <p className="text-[12px] text-[#515f74]">
                  Linear transformation <code className="bg-[#eaedff] px-1 rounded">y = Wx + b</code> from 784 flattened pixels directly to 10 class logits. Establishes the convex optimization baseline.
                </p>
              </div>

              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-[#0037b0]">2. MLP (Dense)</span>
                  <span className="text-[10px] font-mono bg-[#d5e3fc] text-[#001d31] px-1.5 py-0.5 rounded">235,146 params</span>
                </div>
                <p className="text-[12px] text-[#515f74]">
                  Deep fully connected network (784 → 256 → 128 → 10) with BatchNorm, ReLU non-linearities, and Dropout(0.2) to prevent overfitting.
                </p>
              </div>

              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-[#0037b0]">3. CNN (2D Spatial)</span>
                  <span className="text-[10px] font-mono bg-[#d5e3fc] text-[#001d31] px-1.5 py-0.5 rounded">421,834 params</span>
                </div>
                <p className="text-[12px] text-[#515f74]">
                  3-stage convolutional backbone (1→32→64→128) with 3x3 kernels, MaxPool2D, and spatial translation equivariance prior.
                </p>
              </div>

              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-[#0037b0]">4. LSTM (Sequential)</span>
                  <span className="text-[10px] font-mono bg-[#d5e3fc] text-[#001d31] px-1.5 py-0.5 rounded">82,186 params</span>
                </div>
                <p className="text-[12px] text-[#515f74]">
                  Treats 28 image rows as sequential scanline timesteps (<code className="bg-[#eaedff] px-1 rounded">T=28, d=28</code>) with hidden dimension <code className="bg-[#eaedff] px-1 rounded">H=128</code>.
                </p>
              </div>

              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-[#0037b0]">5. GRU (Efficient RNN)</span>
                  <span className="text-[10px] font-mono bg-[#d5e3fc] text-[#001d31] px-1.5 py-0.5 rounded">61,962 params</span>
                </div>
                <p className="text-[12px] text-[#515f74]">
                  Streamlined 3-gate recurrent update mechanism (<code className="bg-[#eaedff] px-1 rounded">H=128</code>) removing separate cell memory for 25% parameter savings per recurrent unit.
                </p>
              </div>

              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-[#0037b0]">6. Vision Transformer (ViT)</span>
                  <span className="text-[10px] font-mono bg-[#d5e3fc] text-[#001d31] px-1.5 py-0.5 rounded">72,074 params</span>
                </div>
                <p className="text-[12px] text-[#515f74]">
                  Patch projection (4x4 patches → 49 tokens), learnable 1D position embeddings, 2 Transformer Blocks with Multi-Head Attention (h=4, d=64).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DEDICATED SECTION: END-TO-END TRAINING & EVALUATION PIPELINE FLOW
            (Exact Visual Adaptation of Report Figure 2.1)
           ========================================================================= */}
        <div id="sec-pipeline-flow" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <Workflow className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                End-to-End Deep Learning Pipeline Flow
              </h2>
            </div>
            <span className="text-[11px] font-mono bg-[#eef2ff] text-[#0037b0] px-2.5 py-1 rounded font-semibold border border-[#d2dffc] w-fit">
              Figure 2.1 · Architecture Overview
            </span>
          </div>

          <p className="text-[13px] text-[#515f74] leading-relaxed">
            In strict compliance with Course Specification (Section 3.2), our unified training and evaluation workflow operates as a closed-loop supervised pipeline across all five candidate model families:
          </p>

          {/* Publication-Grade Figure 2.1 Flow Diagram */}
          <div className="bg-[#fbfcff] p-5 sm:p-7 rounded-2xl border border-[#eaedff] space-y-4 shadow-2xs">
            {/* Desktop 2-Row Flow Diagram (MD+) */}
            <div className="hidden md:block space-y-3">
              {/* Row 1: Forward Processing (Data -> Preprocessing -> DataLoader -> Model) */}
              <div className="grid grid-cols-4 gap-3 items-center">
                {/* 1. Raw Data */}
                <div className="relative group">
                  <div className="bg-blue-50/70 border-2 border-blue-500/80 rounded-xl p-3.5 text-center shadow-xs transition-all hover:shadow-md hover:bg-blue-50">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full">Input Tensor</span>
                    <h4 className="text-[15px] font-bold text-blue-950 mt-1">Raw Data</h4>
                    <p className="text-[12px] font-mono text-blue-800 mt-0.5">28 × 28 Grayscale</p>
                  </div>
                  {/* Connector Arrow Right */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 translate-x-1/2 text-gray-400">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                {/* 2. Preprocessing */}
                <div className="relative group">
                  <div className="bg-blue-50/70 border-2 border-blue-500/80 rounded-xl p-3.5 text-center shadow-xs transition-all hover:shadow-md hover:bg-blue-50">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full">Transform</span>
                    <h4 className="text-[15px] font-bold text-blue-950 mt-1">Preprocessing</h4>
                    <p className="text-[12px] font-mono text-blue-800 mt-0.5">Flip + Normalize</p>
                  </div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 translate-x-1/2 text-gray-400">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                {/* 3. DataLoader */}
                <div className="relative group">
                  <div className="bg-blue-50/70 border-2 border-blue-500/80 rounded-xl p-3.5 text-center shadow-xs transition-all hover:shadow-md hover:bg-blue-50">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full">Batch Generator</span>
                    <h4 className="text-[15px] font-bold text-blue-950 mt-1">DataLoader</h4>
                    <p className="text-[12px] font-mono text-blue-800 mt-0.5">Batch B = 64, Shuffle</p>
                  </div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 translate-x-1/2 text-gray-400">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                {/* 4. Model f_theta */}
                <div className="relative group">
                  <div className="bg-blue-50/90 border-2 border-blue-600 rounded-xl p-3.5 text-center shadow-xs transition-all hover:shadow-md hover:bg-blue-100/50">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-800 bg-blue-200/80 px-2 py-0.5 rounded-full">Forward Pass</span>
                    <h4 className="text-[15px] font-bold text-blue-950 mt-1">Model f<sub>θ</sub></h4>
                    <p className="text-[12px] font-mono text-blue-800 mt-0.5">Logits z ∈ ℝ<sup>10</sup></p>
                  </div>
                </div>
              </div>

              {/* Turnaround Connector between Row 1 and Row 2 */}
              <div className="flex justify-end pr-16 py-1">
                <div className="flex items-center space-x-1.5 text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 text-[11px] font-mono font-semibold">
                  <span>Logits z</span>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>
              </div>

              {/* Row 2: Optimization & Evaluation (Right to Left flow) */}
              <div className="grid grid-cols-4 gap-3 items-center">
                {/* 8. Evaluation (Final node on left) */}
                <div className="relative group">
                  <div className="bg-emerald-50/90 border-2 border-emerald-600 rounded-xl p-3.5 text-center shadow-xs transition-all hover:shadow-md hover:bg-emerald-100/50">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-full">Benchmark</span>
                    <h4 className="text-[15px] font-bold text-emerald-950 mt-1">Evaluation</h4>
                    <p className="text-[12px] font-mono text-emerald-800 mt-0.5">Acc, F1, Latency</p>
                  </div>
                </div>

                {/* 7. Prediction */}
                <div className="relative group">
                  <div className="bg-emerald-50/70 border-2 border-emerald-500/80 rounded-xl p-3.5 text-center shadow-xs transition-all hover:shadow-md hover:bg-emerald-50">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">Decision Rule</span>
                    <h4 className="text-[15px] font-bold text-emerald-950 mt-1">Prediction</h4>
                    <p className="text-[12px] font-mono text-emerald-800 mt-0.5">ŷ = arg max(z)</p>
                  </div>
                  {/* Connector Arrow Left */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 -translate-x-1/2 text-gray-400">
                    <ArrowLeft className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>

                {/* 6. Optimization */}
                <div className="relative group">
                  <div className="bg-rose-50/70 border-2 border-rose-400 rounded-xl p-3.5 text-center shadow-xs transition-all hover:shadow-md hover:bg-rose-50">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded-full">Gradient Step</span>
                    <h4 className="text-[15px] font-bold text-rose-950 mt-1">Optimization</h4>
                    <p className="text-[12px] font-mono text-rose-800 mt-0.5">Adam (η = 10<sup>-3</sup>)</p>
                  </div>
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 -translate-x-1/2 text-gray-400">
                    <ArrowLeft className="w-4 h-4 text-rose-400" />
                  </div>
                </div>

                {/* 5. CrossEntropyLoss (First node on right of row 2) */}
                <div className="relative group">
                  <div className="bg-rose-50/70 border-2 border-rose-400 rounded-xl p-3.5 text-center shadow-xs transition-all hover:shadow-md hover:bg-rose-50">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded-full">Objective</span>
                    <h4 className="text-[15px] font-bold text-rose-950 mt-1">CrossEntropyLoss</h4>
                    <p className="text-[12px] font-mono text-rose-800 mt-0.5">ℒ<sub>CE</sub>(z, y)</p>
                  </div>
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 -translate-x-1/2 text-gray-400">
                    <ArrowLeft className="w-4 h-4 text-rose-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Stacked Flow Diagram (< MD) */}
            <div className="md:hidden space-y-2.5">
              {[
                { step: "01", name: "Raw Data", sub: "28 × 28 Grayscale", badge: "Input", color: "border-blue-400 bg-blue-50/70 text-blue-950" },
                { step: "02", name: "Preprocessing", sub: "Flip + Normalize", badge: "Transform", color: "border-blue-400 bg-blue-50/70 text-blue-950" },
                { step: "03", name: "DataLoader", sub: "Batch B = 64, Shuffle", badge: "Loader", color: "border-blue-400 bg-blue-50/70 text-blue-950" },
                { step: "04", name: "Model f_θ", sub: "Logits z ∈ ℝ¹⁰", badge: "Forward", color: "border-blue-500 bg-blue-50/90 text-blue-950" },
                { step: "05", name: "CrossEntropyLoss", sub: "ℒ_CE(z, y)", badge: "Loss", color: "border-rose-400 bg-rose-50/80 text-rose-950" },
                { step: "06", name: "Optimization", sub: "Adam (η = 10⁻³)", badge: "Backprop", color: "border-rose-400 bg-rose-50/80 text-rose-950" },
                { step: "07", name: "Prediction", sub: "ŷ = arg max(z)", badge: "ArgMax", color: "border-emerald-400 bg-emerald-50/70 text-emerald-950" },
                { step: "08", name: "Evaluation", sub: "Acc, F1, Latency", badge: "Metrics", color: "border-emerald-500 bg-emerald-50/90 text-emerald-950" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={"w-full border-2 rounded-xl p-3 text-center " + item.color + " shadow-xs"}>
                    <div className="flex items-center justify-between text-[10px] font-mono font-semibold mb-1">
                      <span>Step {item.step}</span>
                      <span className="bg-white/80 px-2 py-0.5 rounded-full">{item.badge}</span>
                    </div>
                    <div className="text-[14px] font-bold">{item.name}</div>
                    <div className="text-[12px] font-mono opacity-80">{item.sub}</div>
                  </div>
                  {idx < 7 && (
                    <ArrowDown className="w-4 h-4 text-gray-400 my-1" />
                  )}
                </div>
              ))}
            </div>

            {/* Publication Caption matching Figure 2.1 */}
            <div className="pt-3 border-t border-[#f0f2ff] text-center">
              <p className="text-[12px] text-[#515f74] font-serif italic">
                <strong>Figure:</strong> Comprehensive end-to-end deep learning pipeline architecture. Arrows depict synchronous mini-batch forward signal propagation, empirical loss calculation, backward gradient updates, and post-inference multi-metric evaluation.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            5. EXPERIMENTAL SETUP
           ========================================================================= */}
        <div id="sec-setup" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Cpu className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              4. Experimental Setup
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[13px]">
            <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1">
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold">Optimizer &amp; LR</span>
              <div className="font-semibold text-[#131b2e]">AdamW (lr = 1e-3)</div>
              <div className="text-[11px] text-[#515f74]">Weight decay: 1e-4, CosineAnnealingLR (η_min = 1e-5)</div>
            </div>

            <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1">
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold">Batch &amp; Epochs</span>
              <div className="font-semibold text-[#131b2e]">Batch: 64 · Max: 20 Epochs</div>
              <div className="text-[11px] text-[#515f74]">Early stopping patience = 5 on Validation Loss</div>
            </div>

            <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1">
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold">Loss &amp; Metrics</span>
              <div className="font-semibold text-[#131b2e]">CrossEntropyLoss</div>
              <div className="text-[11px] text-[#515f74]">Accuracy (%), Macro-F1 (%), Latency (ms/sample)</div>
            </div>

            <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1">
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold">Hardware &amp; Seed</span>
              <div className="font-semibold text-[#131b2e]">PyTorch 2.x (MPS / CUDA)</div>
              <div className="text-[11px] text-[#515f74]">Deterministic Seed = 42 for all runs</div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            6. MODEL TRAINING DYNAMICS & EPOCH HISTORY (TABLE FORMAT BEFORE RESULTS)
           ========================================================================= */}
        <div id="sec-training-dynamics" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <Table className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                5. Model Training Dynamics &amp; Epoch History
              </h2>
            </div>

            {/* Model Selector Pills */}
            <div className="flex flex-wrap gap-1 bg-[#f2f3ff] p-1 rounded-lg">
              {allModels.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedHistoryModelId(m.id)}
                  className={`px-3 py-1 rounded-md text-[12px] font-mono font-medium transition-all cursor-pointer ${
                    selectedHistoryModelId === m.id
                      ? 'bg-[#0037b0] text-white shadow-xs'
                      : 'text-[#515f74] hover:text-[#131b2e]'
                  }`}
                >
                  {m.shortName}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[13px] text-[#515f74]">
              Detailed epoch-by-epoch training metrics (Loss, Accuracy, Epoch Duration) extracted directly from saved training history logs (<code className="bg-[#f2f3ff] px-1.5 py-0.5 rounded font-mono text-[12px]">assignment1/histories/</code>).
            </p>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px] font-mono">
              <div className="bg-[#f2f3ff] p-2.5 rounded-lg border border-[#eaedff]">
                <span className="text-[#515f74] block">Model:</span>
                <span className="font-bold text-[#131b2e] truncate block">{currentHistoryModel.name}</span>
              </div>
              <div className="bg-[#f2f3ff] p-2.5 rounded-lg border border-[#eaedff]">
                <span className="text-[#515f74] block">Best Epoch:</span>
                <span className="font-bold text-[#0037b0] block">Epoch {currentHistory.best_epoch}</span>
              </div>
              <div className="bg-[#f2f3ff] p-2.5 rounded-lg border border-[#eaedff]">
                <span className="text-[#515f74] block">Lowest Val Loss:</span>
                <span className="font-bold text-[#0037b0] block">{currentHistory.best_val_loss.toFixed(4)}</span>
              </div>
              <div className="bg-[#f2f3ff] p-2.5 rounded-lg border border-[#eaedff]">
                <span className="text-[#515f74] block">Peak Val Acc:</span>
                <span className="font-bold text-[#0037b0] block">{currentHistory.best_val_accuracy.toFixed(2)}%</span>
              </div>
              <div className="bg-[#f2f3ff] p-2.5 rounded-lg border border-[#eaedff] col-span-2 sm:col-span-1">
                <span className="text-[#515f74] block">Total Train Time:</span>
                <span className="font-bold text-[#131b2e] block">{currentHistory.total_training_time.toFixed(1)}s</span>
              </div>
            </div>

            {/* Epoch Metrics Table */}
            <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
              <table className="w-full text-left text-[12px] border-collapse">
                <thead className="bg-[#f2f3ff] text-[#131b2e] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                  <tr>
                    <th className="py-2.5 px-3">Epoch</th>
                    <th className="py-2.5 px-3">Train Loss</th>
                    <th className="py-2.5 px-3">Train Acc (%)</th>
                    <th className="py-2.5 px-3">Val Loss</th>
                    <th className="py-2.5 px-3">Val Acc (%)</th>
                    <th className="py-2.5 px-3">Epoch Time (s)</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f2f3ff] font-mono">
                  {currentHistory.train_loss.map((_, idx) => {
                    const epochNum = idx + 1;
                    const trainLoss = currentHistory.train_loss[idx].toFixed(4);
                    const trainAcc = currentHistory.train_accuracy[idx].toFixed(2);
                    const valLoss = currentHistory.val_loss[idx].toFixed(4);
                    const valAcc = currentHistory.val_accuracy[idx].toFixed(2);
                    const time = (currentHistory.epoch_time[idx] || 0).toFixed(2);
                    const isBest = epochNum === currentHistory.best_epoch;

                    return (
                      <tr 
                        key={idx}
                        className={`hover:bg-[#f9faff] transition-colors ${
                          isBest ? 'bg-[#eff6ff] font-semibold text-[#1e40af]' : ''
                        }`}
                      >
                        <td className="py-2.5 px-3">
                          {isBest ? `⭐ Epoch ${epochNum}` : `Epoch ${epochNum}`}
                        </td>
                        <td className="py-2.5 px-3 text-[#515f74]">{trainLoss}</td>
                        <td className="py-2.5 px-3 text-[#515f74]">{trainAcc}%</td>
                        <td className="py-2.5 px-3 text-[#0037b0] font-medium">{valLoss}</td>
                        <td className="py-2.5 px-3 text-[#0037b0] font-medium">{valAcc}%</td>
                        <td className="py-2.5 px-3 text-[#515f74]">{time}s</td>
                        <td className="py-2.5 px-3">
                          {isBest ? (
                            <span className="bg-[#0037b0] text-white px-2 py-0.5 rounded text-[10px] font-bold">
                              Best Checkpoint
                            </span>
                          ) : (
                            <span className="text-[#94a3b8] text-[11px]">-</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* =========================================================================
            7. RESULTS (MASTER BENCHMARK + PER-MODEL CHECKPOINT PREDICTIONS)
           ========================================================================= */}
        <div id="sec-results" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6 scroll-mt-28">
          <div className="flex items-center justify-between border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                6. Experimental Results
              </h2>
            </div>
            <span className="font-mono text-[11px] bg-[#d5e3fc] text-[#001d31] px-2.5 py-1 rounded font-semibold">
              Held-out Test (N=10,000)
            </span>
          </div>

          {/* Master Benchmark Table */}
          <div className="space-y-3">
            <h3 className="font-mono text-[13px] font-bold text-[#131b2e] uppercase flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#0037b0]" />
              Master Quantitative Model Benchmark
            </h3>

            <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
              <table className="w-full text-left text-[13px] border-collapse">
                <thead className="bg-[#f2f3ff] text-[#131b2e] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                  <tr>
                    <th className="py-2.5 px-4">Model Architecture</th>
                    <th className="py-2.5 px-3">Parameters</th>
                    <th className="py-2.5 px-3">Best Epoch</th>
                    <th className="py-2.5 px-3">Val Loss</th>
                    <th className="py-2.5 px-3">Val Acc (%)</th>
                    <th className="py-2.5 px-3 font-bold text-[#0037b0]">Test Acc (%)</th>
                    <th className="py-2.5 px-3">Macro-F1 (%)</th>
                    <th className="py-2.5 px-3">Train Time</th>
                    <th className="py-2.5 px-3">Latency (ms)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f2f3ff]">
                  {allModels.map((row) => (
                    <tr 
                      key={row.id}
                      className={`hover:bg-[#f9faff] transition-colors ${row.id === 'cnn' ? 'bg-[#f4f7ff] font-medium' : ''}`}
                    >
                      <td className="py-2.5 px-4 font-semibold text-[#131b2e] flex items-center gap-2">
                        <span>{row.name}</span>
                        {row.id === 'cnn' && (
                          <span className="text-[10px] font-mono bg-[#0037b0] text-white px-1.5 py-0.2 rounded font-normal">Best Acc</span>
                        )}
                        {row.badge === 'Extended Study' && (
                          <span className="text-[10px] font-mono bg-[#eef2ff] text-[#0037b0] border border-[#d2dffc] px-1.5 py-0.2 rounded font-normal">
                            Extended Study
                          </span>
                        )}
                        {row.badge === 'Baseline' && (
                          <span className="text-[10px] font-mono bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0] px-1.5 py-0.2 rounded font-normal">
                            Baseline
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">{row.params}</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">{row.bestEpoch}</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">{row.valLoss.toFixed(4)}</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">{row.valAcc.toFixed(2)}%</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#0037b0]">{row.testAcc.toFixed(2)}%</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">{row.macroF1.toFixed(2)}%</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">{row.trainTime}</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">{row.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Model Output & Qualitative Predictions Visualizer */}
          <div className="space-y-4 pt-4 border-t border-[#f2f3ff]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-mono text-[13px] font-bold text-[#131b2e] uppercase flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#0037b0]" />
                  Per-Model Training Convergence &amp; Best Checkpoint Predictions
                </h3>
                <p className="text-[12px] text-[#515f74]">
                  Select a model to view its learning curves and direct output sample predictions from its saved best checkpoint.
                </p>
              </div>

              {/* Model Selector Pills */}
              <div className="flex flex-wrap gap-1.5">
                {allModels.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModelId(m.id)}
                    className={`px-3 py-1 rounded-md text-[12px] font-mono font-medium transition-all cursor-pointer ${
                      selectedModelId === m.id
                        ? 'bg-[#0037b0] text-white shadow-xs'
                        : 'bg-[#f2f3ff] text-[#515f74] hover:bg-[#e6e8ff]'
                    }`}
                  >
                    {m.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Detail Output Box */}
            <div className="bg-[#fcfcff] p-5 rounded-xl border border-[#eaedff] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eaedff] pb-3">
                <div className="space-y-0.5">
                  <h4 className="font-semibold text-[15px] text-[#131b2e] flex items-center gap-2">
                    <span>{currentModel.name}</span>
                    <span className="text-[11px] font-mono bg-[#d5e3fc] text-[#001d31] px-2 py-0.5 rounded font-normal">
                      Checkpoint: {currentModel.checkpoint}
                    </span>
                  </h4>
                  <p className="text-[12px] text-[#515f74] font-mono">
                    {currentModel.architecture}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[12px] font-mono">
                  <div className="bg-white px-2.5 py-1 rounded border border-[#eaedff]">
                    <span className="text-[#515f74]">Test Acc: </span>
                    <span className="font-bold text-[#0037b0]">{currentModel.testAcc}%</span>
                  </div>
                  <div className="bg-white px-2.5 py-1 rounded border border-[#eaedff]">
                    <span className="text-[#515f74]">Macro-F1: </span>
                    <span className="font-bold text-[#0037b0]">{currentModel.macroF1}%</span>
                  </div>
                  <div className="bg-white px-2.5 py-1 rounded border border-[#eaedff]">
                    <span className="text-[#515f74]">Latency: </span>
                    <span className="font-bold text-[#131b2e]">{currentModel.latency}</span>
                  </div>
                </div>
              </div>

              {/* Vertical Stack: Training History (Top) & Best Checkpoint Sample Predictions (Bottom) */}
              <div className="space-y-6">
                {/* 1. Training History (Full Width) */}
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#eaedff] space-y-3 flex flex-col items-center">
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#f2f3ff] pb-2">
                    <span className="font-mono text-[12px] font-bold text-[#0037b0] uppercase flex items-center gap-1.5">
                      <Activity className="w-4 h-4" />
                      1. Convergence History (Train vs Val Loss &amp; Accuracy Curves)
                    </span>
                    <span className="text-[11px] font-mono text-[#515f74] bg-[#f2f3ff] px-2 py-0.5 rounded">
                      Optimal Epoch {currentModel.bestEpoch} · Val Loss: {currentModel.valLoss.toFixed(4)} · Val Acc: {currentModel.valAcc.toFixed(2)}%
                    </span>
                  </div>
                  <img 
                    src={getAssetUrl(currentModel.historyPlot)} 
                    alt={`${currentModel.name} Training History`}
                    className="w-full max-w-[980px] h-auto object-contain rounded-lg border border-[#f2f3ff] bg-white p-1"
                  />
                  <p className="text-[12px] font-mono text-[#515f74] text-center">
                    Figure 6.1a: Training convergence history of {currentModel.name} across 20 epochs. Optimal checkpoint saved at Epoch {currentModel.bestEpoch}.
                  </p>
                </div>

                {/* 2. Sample Predictions Output (Full Width) */}
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#eaedff] space-y-3 flex flex-col items-center">
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#f2f3ff] pb-2">
                    <span className="font-mono text-[12px] font-bold text-[#0037b0] uppercase flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      2. Best Checkpoint Model Predictions (Ground Truth vs Predicted on Held-out Test)
                    </span>
                    <span className="text-[11px] font-mono text-[#0037b0] bg-[#e2e7ff] px-2 py-0.5 rounded font-semibold">
                      Checkpoint: {currentModel.checkpoint} · Test Acc: {currentModel.testAcc}%
                    </span>
                  </div>
                  <img 
                    src={getAssetUrl(currentModel.samplePredPlot)} 
                    alt={`${currentModel.name} Sample Predictions`}
                    className="w-full max-w-[980px] h-auto object-contain rounded-lg border border-[#f2f3ff] bg-white p-1"
                  />
                  <p className="text-[12px] font-mono text-[#515f74] text-center">
                    Figure 6.1b: Qualitative test sample predictions from the optimal checkpoint of {currentModel.name}, displaying Ground Truth (True), Predicted class (Pred), and Confidence score.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            8. COMPARISON AND DISCUSSION
           ========================================================================= */}
        <div id="sec-discussion" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Layers className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              7. Comparison &amp; Discussion
            </h2>
          </div>

          <div className="space-y-4 text-[14px] text-[#434655] leading-relaxed">
            <p>
              The empirical results reveal distinct performance, parameter efficiency, and latency trade-offs governed by the underlying architectural inductive biases:
            </p>

            {/* Tradeoff figure */}
            <div className="bg-[#fcfcff] p-4 rounded-xl border border-[#eaedff] flex flex-col items-center space-y-2">
              <img 
                src={getAssetUrl('assignment1/figures/master_tradeoff_comparison.png')} 
                alt="Model Trade-off Comparison"
                className="max-h-[460px] w-auto object-contain rounded-lg border border-[#eaedff] bg-white p-2"
              />
              <p className="text-[12px] font-mono text-[#515f74] text-center">
                Figure 7.1: Master Trade-off Analysis: Accuracy vs Parameters, Accuracy vs Latency, and Macro-F1 across all architectures.
              </p>
            </div>

            {/* Core Discussion Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Spatial Inductive Bias Dominance (CNN)
                </span>
                <p className="text-[13px] text-[#515f74]">
                  CNN achieved the top performance (<strong>92.19% Test Acc</strong>, <strong>92.17% Macro-F1</strong>). Its 2D local receptive fields and weight sharing naturally match visual image translation properties, outperforming flat MLPs by +3.42% with fast latency (0.0205ms).
                </p>
              </div>

              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Sequence &amp; Attention Modalities (GRU / LSTM vs ViT)
                </span>
                <p className="text-[13px] text-[#515f74]">
                  GRU baseline reached <strong>90.51% Test Acc</strong> (faster and higher than LSTM at <strong>90.00%</strong>). Vision Transformer reached <strong>87.60% Test Acc</strong> from scratch with 72K parameters, demonstrating patch self-attention capabilities.
                </p>
              </div>
            </div>

            {/* EXTENDED RESEARCH: LSTM vs GRU Matched Parameter Budget (~300K) placed below core models */}
            <div className="mt-6 pt-6 border-t border-[#f2f3ff] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#eef2ff] text-[#0037b0] font-mono text-[11px] font-bold uppercase rounded">
                      Extended Research Study
                    </span>
                    <span className="text-[11px] font-mono text-[#515f74] bg-[#f8faff] px-2 py-0.5 rounded border border-[#e2e8f0]">
                      Budget: ≈ 300K Parameters
                    </span>
                  </div>
                  <h3 className="font-serif text-[17px] font-medium text-[#131b2e] pt-1">
                    LSTM vs. GRU under a Matched Parameter Budget (H=258 vs H=300)
                  </h3>
                </div>
              </div>

              <p className="text-[13px] text-[#515f74] leading-relaxed">
                In standard baseline configurations (<span className="font-mono">H=128</span>), LSTM has 4 gate transformations (82.2K params) while GRU has only 3 gates (62.0K params). To establish an unbiased, scientifically rigorous comparison, we calibrated the hidden dimension so both architectures operate under an identical parameter budget of <strong className="text-[#131b2e]">≈ 300K parameters</strong>:
              </p>

              {/* Matched Budget Comparison Table */}
              <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
                <table className="w-full text-left text-[12px] border-collapse">
                  <thead className="bg-[#f8faff] text-[#131b2e] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                    <tr>
                      <th className="py-2.5 px-3">Architecture</th>
                      <th className="py-2.5 px-3">Hidden Size (H)</th>
                      <th className="py-2.5 px-3">Total Params</th>
                      <th className="py-2.5 px-3">Val Acc (%)</th>
                      <th className="py-2.5 px-3">Test Acc (%)</th>
                      <th className="py-2.5 px-3">Macro-F1 (%)</th>
                      <th className="py-2.5 px-3">Latency (ms)</th>
                      <th className="py-2.5 px-3">Checkpoint</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2f3ff] font-mono">
                    <tr className="hover:bg-[#f9faff]">
                      <td className="py-2.5 px-3 font-semibold text-[#131b2e]">LSTM Matched</td>
                      <td className="py-2.5 px-3 text-[#515f74]">H = 258 (4 gates)</td>
                      <td className="py-2.5 px-3 text-[#515f74]">299,806</td>
                      <td className="py-2.5 px-3 text-[#515f74]">90.80%</td>
                      <td className="py-2.5 px-3 font-bold text-[#131b2e]">89.94%</td>
                      <td className="py-2.5 px-3 text-[#515f74]">89.91%</td>
                      <td className="py-2.5 px-3 text-[#515f74]">0.0475 ms</td>
                      <td className="py-2.5 px-3 text-[#0037b0]">lstm_300k_best.pth</td>
                    </tr>
                    <tr className="hover:bg-[#f9faff] bg-[#f4f7ff]">
                      <td className="py-2.5 px-3 font-semibold text-[#0037b0] flex items-center gap-1.5">
                        <span>GRU Matched</span>
                        <span className="text-[10px] font-mono bg-[#0037b0] text-white px-1.5 py-0.2 rounded">Winner</span>
                      </td>
                      <td className="py-2.5 px-3 text-[#0037b0] font-semibold">H = 300 (+16.3% wider)</td>
                      <td className="py-2.5 px-3 text-[#515f74]">300,010</td>
                      <td className="py-2.5 px-3 font-semibold text-[#0037b0]">91.02%</td>
                      <td className="py-2.5 px-3 font-bold text-[#0037b0]">90.60%</td>
                      <td className="py-2.5 px-3 font-semibold text-[#0037b0]">90.49%</td>
                      <td className="py-2.5 px-3 font-semibold text-[#137333]">0.0460 ms (faster)</td>
                      <td className="py-2.5 px-3 text-[#0037b0]">gru_300k_best.pth</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Matched Budget Visualizations - Full Width Stacked for Maximum Readability */}
              <div className="space-y-6 pt-3">
                <div className="bg-[#fcfcff] p-5 rounded-xl border border-[#eaedff] flex flex-col items-center space-y-3">
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-[#515f74] border-b border-[#f2f3ff] pb-2">
                    <span className="font-semibold text-[#131b2e] text-[13px]">
                      Figure 7.2a: Epoch-by-Epoch Training &amp; Validation Convergence (LSTM vs. GRU ~300K Budget)
                    </span>
                    <span className="text-[#0037b0] font-medium">H=258 (LSTM) vs. H=300 (GRU)</span>
                  </div>
                  <div className="w-full flex justify-center bg-white p-3 rounded-lg border border-[#eaedff] shadow-xs">
                    <img 
                      src={getAssetUrl('assignment1/figures/lstm_vs_gru_matched_convergence.png')} 
                      alt="Figure 7.2a: Epoch-by-epoch loss and accuracy convergence of LSTM vs. GRU under the matched 300K budget."
                      className="w-full max-h-[520px] object-contain rounded-md"
                    />
                  </div>
                  <p className="text-[12px] font-mono text-[#515f74] text-center max-w-3xl leading-relaxed">
                    Validation loss (left) and validation accuracy (right) trajectories across 20 epochs under the matched 300K parameter budget. GRU achieves faster early-stage convergence and lower terminal loss (0.2520 vs. 0.2541).
                  </p>
                </div>

                <div className="bg-[#fcfcff] p-5 rounded-xl border border-[#eaedff] flex flex-col items-center space-y-3">
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-[#515f74] border-b border-[#f2f3ff] pb-2">
                    <span className="font-semibold text-[#131b2e] text-[13px]">
                      Figure 7.2b: Multi-Dimensional Empirical Performance Comparison Bar Chart
                    </span>
                    <span className="text-[#0037b0] font-medium">Test Accuracy • Total Training Time • Inference Latency</span>
                  </div>
                  <div className="w-full flex justify-center bg-white p-3 rounded-lg border border-[#eaedff] shadow-xs">
                    <img 
                      src={getAssetUrl('assignment1/figures/lstm_vs_gru_matched_budget_barchart.png')} 
                      alt="Figure 7.2b: Side-by-side performance tradeoff bar chart (Accuracy, Macro-F1, and Inference Latency)."
                      className="w-full max-h-[520px] object-contain rounded-md"
                    />
                  </div>
                  <p className="text-[12px] font-mono text-[#515f74] text-center max-w-3xl leading-relaxed">
                    Side-by-side empirical trade-offs: GRU Matched ($H=300$) delivers superior classification accuracy (90.60% vs. 89.94%) with lower inference latency per sample (0.0460 ms vs. 0.0475 ms) due to 3-gate parameter efficiency.
                  </p>
                </div>
              </div>

              {/* Key Takeaways Box */}
              <div className="p-4 bg-[#f0f4ff] rounded-lg border border-[#d2dffc] text-[13px] text-[#334155] space-y-2">
                <div className="font-semibold text-[#0037b0] font-mono text-[11px] uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Key Empirical Takeaway: Gating Efficiency &amp; Hidden Capacity</span>
                </div>
                <p className="leading-relaxed text-[12.5px]">
                  Because GRU omits the separate memory cell and couples the update and reset gates into 3 affine transformations (versus 4 in LSTM), it achieves a <strong>25% parameter savings per recurrent unit</strong>. Holding total parameter budget fixed at ~300K allows GRU to expand its hidden state width by <strong>+16.3% (H=300 vs H=258)</strong>. This larger representational capacity yields <strong>+0.66% higher Test Accuracy (90.60% vs 89.94%)</strong> while requiring fewer floating-point operations per step, resulting in lower inference latency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            9. ERROR ANALYSIS
           ========================================================================= */}
        <div id="sec-error-analysis" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <AlertCircle className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              8. Error Analysis
            </h2>
          </div>

          <div className="space-y-4 text-[14px] text-[#434655] leading-relaxed">
            <p>
              Analyzing the normalized confusion matrices across all 5 models highlights consistent semantic error clusters and difficult class boundaries:
            </p>

            {/* Confusion Matrix Viewer */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eaedff] pb-2">
                <span className="text-[13px] font-semibold text-[#131b2e]">
                  Normalized Confusion Matrix:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {allModels.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedCmModelId(m.id)}
                      className={`px-3 py-1 rounded-md text-[12px] font-mono font-medium transition-all cursor-pointer ${
                        selectedCmModelId === m.id
                          ? 'bg-[#0037b0] text-white shadow-xs'
                          : 'bg-[#f2f3ff] text-[#515f74] hover:bg-[#e6e8ff]'
                      }`}
                    >
                      {m.shortName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#fcfcff] p-4 rounded-xl border border-[#eaedff] flex flex-col items-center space-y-2">
                <img 
                  src={getAssetUrl(currentCmModel.cmPlot)} 
                  alt={`${currentCmModel.name} Confusion Matrix`}
                  className="max-h-[440px] w-auto object-contain rounded-lg border border-[#eaedff] bg-white p-2"
                />
                <p className="text-[12px] font-mono text-[#515f74] text-center">
                  Figure 8.1: Normalized Confusion Matrix for {currentCmModel.name} on the held-out test set (10,000 samples).
                </p>
              </div>
            </div>

            {/* Key Error Findings */}
            <div className="p-4 bg-[#fff9f9] rounded-lg border border-[#ffe0e0] text-[13px] space-y-2">
              <span className="font-mono text-[11px] font-bold text-[#b91c1c] uppercase block">
                Key Error Findings &amp; Ambiguity Clusters
              </span>
              <ul className="list-disc list-inside space-y-1 text-[#515f74]">
                <li>
                  <strong>Shirt vs. T-shirt/top / Pullover / Coat:</strong> Across all architectures (especially Linear and MLP), Class 6 (<em>Shirt</em>) is the most frequently confused category due to near-identical collar, button, and sleeve boundaries at 28x28 resolution.
                </li>
                <li>
                  <strong>Footwear Disambiguation:</strong> Footwear classes (<em>Sandal</em>, <em>Sneaker</em>, <em>Ankle boot</em>) achieve high discriminability (&gt;95% per-class accuracy in CNN) thanks to distinct low-level silhouette outlines.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* =========================================================================
            10. LIMITATIONS AND CONCLUSION
           ========================================================================= */}
        <div id="sec-limitations" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-5 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <HelpCircle className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              9. Limitations &amp; Conclusion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
            <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase block">
                Limitations &amp; Threats to Validity
              </span>
              <ul className="list-disc list-inside space-y-1 text-[#515f74] leading-relaxed">
                <li>28x28 grayscale resolution limits fine-grained texture modeling for fabric weave.</li>
                <li>Top-to-bottom scanline formulation for LSTM imposes an unnatural 1D directionality on 2D images.</li>
                <li>Custom Transformer trained from scratch without large-scale pretraining exhibits data-efficiency constraints compared to hard-coded CNN spatial priors.</li>
              </ul>
            </div>

            <div className="p-4 bg-[#f2f3ff] rounded-lg border border-[#d0d7ff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase block">
                Conclusion
              </span>
              <p className="text-[#515f74] leading-relaxed">
                Assignment 1 successfully demonstrated the full pipeline of deep image classification across 5 paradigms. The <strong>CNN architecture</strong> demonstrated the strongest performance (<strong>92.19% Test Acc</strong>), while <strong>Transformer</strong>, <strong>GRU</strong>, and <strong>LSTM</strong> proved that sequence and self-attention mechanisms can effectively capture image representations.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            11. LINK TO SOURCE CODE
           ========================================================================= */}
        <div id="sec-source-code" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Github className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              10. Link to Source Code
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] gap-3 text-[13px]">
            <div className="space-y-0.5">
              <div className="font-semibold text-[#131b2e]">GitHub Source Code Repository</div>
              <div className="text-[12px] text-[#515f74]">Contains full implementation, Jupyter notebooks, and training scripts</div>
            </div>
            <a
              href={COURSE_INFO.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg font-mono text-[12px] font-semibold transition-colors shadow-xs"
            >
              <span>View on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            12. LINK TO CHECKPOINTS & REPRODUCTION INSTRUCTIONS
           ========================================================================= */}
        <div id="sec-checkpoints" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-5 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Terminal className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              11. Link to Checkpoints &amp; Reproduction Instructions
            </h2>
          </div>

          <div className="space-y-4 text-[13px]">
            <p className="text-[#515f74]">
              All best model weights are saved in PyTorch state dict format under{' '}
              <a
                href={`${COURSE_INFO.repoUrl}/tree/main/assignment1/checkpoints`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#0037b0] px-1.5 py-0.5 rounded font-mono text-[12px] inline-flex items-center gap-1 font-medium transition-colors"
              >
                <span>assignment1/checkpoints/</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              {' '}in the GitHub repository.
            </p>

            {/* Checkpoints table */}
            <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
              <table className="w-full text-left text-[12px] border-collapse">
                <thead className="bg-[#f2f3ff] text-[#131b2e] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                  <tr>
                    <th className="py-2.5 px-3">Model</th>
                    <th className="py-2.5 px-3">Checkpoint File (.pth)</th>
                    <th className="py-2.5 px-3">Best Epoch</th>
                    <th className="py-2.5 px-3">Test Accuracy</th>
                    <th className="py-2.5 px-3">GitHub Checkpoint Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f2f3ff] font-mono">
                  {allModels.map((m) => {
                    const checkpointUrl = `${COURSE_INFO.repoUrl}/blob/main/assignment1/checkpoints/${m.checkpoint}`;
                    return (
                      <tr key={m.id} className="hover:bg-[#f9faff]">
                        <td className="py-2.5 px-3 font-semibold text-[#131b2e] flex items-center gap-2">
                          <span>{m.name}</span>
                          {m.badge === 'Extended Study' && (
                            <span className="text-[10px] font-mono bg-[#eef2ff] text-[#0037b0] border border-[#d2dffc] px-1 py-0.2 rounded font-normal">
                              Extended Study
                            </span>
                          )}
                          {m.id === 'cnn' && (
                            <span className="text-[10px] font-mono bg-[#0037b0] text-white px-1.5 py-0.2 rounded font-normal">
                              Best Acc
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3">
                          <a
                            href={checkpointUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[#0037b0] hover:underline font-bold"
                          >
                            <span>{m.checkpoint}</span>
                            <ExternalLink className="w-3 h-3 opacity-75" />
                          </a>
                        </td>
                        <td className="py-2.5 px-3 text-[#515f74]">Epoch {m.bestEpoch}</td>
                        <td className="py-2.5 px-3 text-[#0037b0] font-bold">{m.testAcc}%</td>
                        <td className="py-2.5 px-3 text-[#515f74]">
                          <a
                            href={checkpointUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[#0037b0] hover:underline"
                          >
                            <span className="truncate max-w-[280px]">tree/main/assignment1/checkpoints/{m.checkpoint}</span>
                            <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* CLI Reproduction Instructions */}
            <div className="space-y-1.5">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase block">
                CLI Reproduction Commands
              </span>
              <div className="bg-[#0f172a] text-[#e2e8f0] p-4 rounded-lg font-mono text-[12px] space-y-2 overflow-x-auto">
                <div className="text-[#94a3b8]"># 1. Clone repository and navigate to folder</div>
                <div>git clone {COURSE_INFO.repoUrl}.git</div>
                <div>cd deeplearning-assignment</div>
                <div className="text-[#94a3b8] pt-2"># 2. Run extended training pipeline notebook</div>
                <div>jupyter notebook assignment1/Assignment1_Extended.ipynb</div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            12. TECHNICAL REPORT & DELIVERABLES (<Murph>_A1_Report.pdf)
           ========================================================================= */}
        <div id="sec-report" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-5 scroll-mt-28">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f2f3ff] pb-4">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                12. Technical Report &amp; Deliverables
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#eef4ff] text-[#0037b0] border border-[#d0deff]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Official Report · 29 Pages
            </span>
          </div>

          {/* Overview Metadata Card */}
          <div className="p-5 sm:p-6 bg-[#fbfcfe] rounded-xl border border-[#eaedff] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#d5e3fc] text-[#001d31] font-mono text-[10px] font-semibold uppercase rounded">
                    Milestone 2 Deliverable
                  </span>
                  <span className="text-[12px] font-mono text-[#515f74]">
                    4.9 MB · 29 Pages
                  </span>
                </div>
                <h3 className="text-[16px] font-semibold text-[#131b2e] leading-snug">
                  Foundations of Deep Learning Pipelines and Architectures: From Linear Models to Modern Sequence Models
                </h3>
                <p className="text-[12px] text-[#515f74]">
                  Document: <code className="font-mono text-[11px] bg-[#f2f3ff] px-1.5 py-0.5 rounded text-[#0037b0] font-semibold">&lt;Murph&gt;_A1_Report.pdf</code> · Author: {COURSE_INFO.author} ({COURSE_INFO.studentId}) · Advisor: {COURSE_INFO.instructor}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={`${base}Murph_A1_Report.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg text-[13px] font-medium transition-colors shadow-xs cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Report (PDF)</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
                <a
                  href={`${base}Murph_A1_Report.pdf`}
                  download="<Murph>_A1_Report.pdf"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-[#f2f3ff] hover:bg-[#e6e8ff] text-[#131b2e] rounded-lg text-[13px] font-medium transition-colors border border-[#eaedff] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#0037b0]" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#f2f3ff] text-[12px]">
              <div className="bg-white p-3 rounded-lg border border-[#eaedff]">
                <span className="font-mono text-[10px] text-[#515f74] uppercase font-semibold block">Scope &amp; Content</span>
                <span className="text-[#131b2e] font-medium mt-0.5 block">5 Core Architectures Benchmark &amp; Analysis</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#eaedff]">
                <span className="font-mono text-[10px] text-[#515f74] uppercase font-semibold block">Dataset</span>
                <span className="text-[#131b2e] font-medium mt-0.5 block">Fashion-MNIST (10 Classes, 70k Images)</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#eaedff]">
                <span className="font-mono text-[10px] text-[#515f74] uppercase font-semibold block">Key Findings</span>
                <span className="text-[#131b2e] font-medium mt-0.5 block">CNN 92.19% · GRU Matched 90.60% · ViT 87.60%</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            13. PRESENTATION SLIDES (CO3133-Semester-261 – Group [2352821] – Assignment [1].pdf)
           ========================================================================= */}
        <div id="sec-slides" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-5 scroll-mt-28">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f2f3ff] pb-4">
            <div className="flex items-center space-x-3">
              <Presentation className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                13. Presentation Slides &amp; Defense Materials
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#eef4ff] text-[#0037b0] border border-[#d0deff]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Official Slides · 13 Pages
            </span>
          </div>

          {/* Overview Metadata Card */}
          <div className="p-5 sm:p-6 bg-[#fbfcfe] rounded-xl border border-[#eaedff] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#d5e3fc] text-[#001d31] font-mono text-[10px] font-semibold uppercase rounded">
                    Milestone Deliverable
                  </span>
                  <span className="text-[12px] font-mono text-[#515f74]">
                    3.2 MB · 13 Slides
                  </span>
                </div>
                <h3 className="text-[16px] font-semibold text-[#131b2e] leading-snug">
                  Foundations of Deep Learning Pipelines and Architectures: From Linear Models to Modern Sequence Models
                </h3>
                <p className="text-[12px] text-[#515f74]">
                  Document: <code className="font-mono text-[11px] bg-[#f2f3ff] px-1.5 py-0.5 rounded text-[#0037b0] font-semibold">CO3133-Semester-261 – Group [2352821] – Assignment [1].pdf</code> · Author: {COURSE_INFO.author} ({COURSE_INFO.studentId}) · Advisor: {COURSE_INFO.instructor}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={`${base}assignment1_slides.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg text-[13px] font-medium transition-colors shadow-xs cursor-pointer"
                >
                  <Presentation className="w-4 h-4" />
                  <span>View Slides (PDF)</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
                <a
                  href={`${base}assignment1_slides.pdf`}
                  download="CO3133-Semester-261 – Group [2352821] – Assignment [1].pdf"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-[#f2f3ff] hover:bg-[#e6e8ff] text-[#131b2e] rounded-lg text-[13px] font-medium transition-colors border border-[#eaedff] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#0037b0]" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#f2f3ff] text-[12px]">
              <div className="bg-white p-3 rounded-lg border border-[#eaedff]">
                <span className="font-mono text-[10px] text-[#515f74] uppercase font-semibold block">Slide Deck Content</span>
                <span className="text-[#131b2e] font-medium mt-0.5 block">13 Slides covering Intro, EDA, 5 Models &amp; Conclusion</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#eaedff]">
                <span className="font-mono text-[10px] text-[#515f74] uppercase font-semibold block">Scope &amp; Results</span>
                <span className="text-[#131b2e] font-medium mt-0.5 block">Fashion-MNIST 70K Benchmark across 5 Paradigms</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#eaedff]">
                <span className="font-mono text-[10px] text-[#515f74] uppercase font-semibold block">Course Format</span>
                <span className="text-[#131b2e] font-medium mt-0.5 block">Compliant with CO3133 Defense Specifications</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            14. LINK TO YOUTUBE PRESENTATION VIDEO (Placeholder as requested)
           ========================================================================= */}
        <div id="sec-video" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Video className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              14. Link to YouTube Presentation Video
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74] space-y-1">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block">Status: Pending Video Upload</span>
            <p>The presentation video will be uploaded to YouTube and linked here following the standard title format: <code className="font-mono text-[11px] bg-[#f2f3ff] px-1.5 py-0.5 rounded text-[#131b2e]">CO3133-Semester-261 – Group 2352821 – Assignment 1</code>.</p>
          </div>
        </div>

        {/* =========================================================================
            15. ASSIGNMENT-SPECIFIC AI USAGE DISCLOSURE (Handbook Section 5.2)
           ========================================================================= */}
        <div id="sec-ai-disclosure" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-5 scroll-mt-28">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f2f3ff] pb-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                15. Assignment-Specific AI Usage Disclosure
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#eef4ff] text-[#0037b0] border border-[#d0deff]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Handbook Sec. 5.2 Compliant
            </span>
          </div>

          <p className="text-[13px] text-[#515f74] leading-relaxed">
            In strict adherence to Section 5 of the Course Project Handbook, all generative AI tool usage during the preparation, experimentation, and report writing for Assignment 1 is transparently documented below.
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead className="bg-[#faf8ff] text-[#131b2e] border-b border-[#eaedff]">
                <tr>
                  <th className="py-2.5 px-4 font-semibold w-1/4">Field</th>
                  <th className="py-2.5 px-4 font-semibold">Disclosure Record (Assignment 1)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eaedff] text-[#334155]">
                <tr className="hover:bg-[#fbfcfe]">
                  <td className="py-2.5 px-4 font-medium text-[#131b2e] bg-[#faf8ff]/50">Tool Name &amp; Model</td>
                  <td className="py-2.5 px-4">ChatGPT, Google Antigravity</td>
                </tr>
                <tr className="hover:bg-[#fbfcfe]">
                  <td className="py-2.5 px-4 font-medium text-[#131b2e] bg-[#faf8ff]/50">Member Who Used It</td>
                  <td className="py-2.5 px-4">Đặng Duy Nguyên</td>
                </tr>
                <tr className="hover:bg-[#fbfcfe]">
                  <td className="py-2.5 px-4 font-medium text-[#131b2e] bg-[#faf8ff]/50">Development Stage</td>
                  <td className="py-2.5 px-4">Model design, pipeline coding, controlled experimentation, and report writing</td>
                </tr>
                <tr className="hover:bg-[#fbfcfe]">
                  <td className="py-2.5 px-4 font-medium text-[#131b2e] bg-[#faf8ff]/50">Purpose</td>
                  <td className="py-2.5 px-4">Brainstorming model architectures, suggesting preprocessing techniques and hyperparameters, explaining PyTorch APIs, assisting with code generation and debugging, reviewing LSTM–GRU parameter calculations, and improving report formatting.</td>
                </tr>
                <tr className="hover:bg-[#fbfcfe]">
                  <td className="py-2.5 px-4 font-medium text-[#131b2e] bg-[#faf8ff]/50">Affected Sections</td>
                  <td className="py-2.5 px-4">Sections 1.1–1.5 (Problem &amp; Data), Sections 2.1–2.4 (Methodology), and Sections 3.1–3.6 (Implementation Results &amp; Error Analysis)</td>
                </tr>
                <tr className="hover:bg-[#fbfcfe]">
                  <td className="py-2.5 px-4 font-medium text-[#131b2e] bg-[#faf8ff]/50">Student Verification</td>
                  <td className="py-2.5 px-4">AI suggestions were reviewed and adapted to assignment requirements. Final implementations, parameter counts, and benchmark results were verified through real PyTorch execution runs and training logs.</td>
                </tr>
                <tr className="hover:bg-[#fbfcfe]">
                  <td className="py-2.5 px-4 font-medium text-[#131b2e] bg-[#faf8ff]/50">Responsible Member</td>
                  <td className="py-2.5 px-4 font-medium text-[#0037b0]">Đặng Duy Nguyên (Student ID: 2352821)</td>
                </tr>
                <tr className="hover:bg-[#fbfcfe]">
                  <td className="py-2.5 px-4 font-medium text-[#131b2e] bg-[#faf8ff]/50">Verification Sources</td>
                  <td className="py-2.5 px-4">Official PyTorch documentation (v2.11), Fashion-MNIST research paper (Xiao et al., 2017), and generated execution logs.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
