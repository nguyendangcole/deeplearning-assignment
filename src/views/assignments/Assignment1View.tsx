import { useState, useEffect } from 'react';
import katex from 'katex';
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
  Sliders,
  Table,
  Sparkles,
  List,
  ArrowUp,
  X,
  ChevronRight
} from 'lucide-react';
import { COURSE_INFO } from '../../data';
import { ViewType, ModalType } from '../../types';
import { ASSIGNMENT1_HISTORIES } from '../../assignment1Histories';

function MathInline({ math }: { math: string }) {
  const html = katex.renderToString(math, { throwOnError: false, displayMode: false });
  return <span className="inline-block align-middle mx-0.5 font-normal" dangerouslySetInnerHTML={{ __html: html }} />;
}

function MathBlock({ math, className = '' }: { math: string; className?: string }) {
  const html = katex.renderToString(math, { throwOnError: false, displayMode: true });
  return <div className={`my-2 overflow-x-auto text-[#131b2e] ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

const TOC_ITEMS = [
  { id: 'sec-overview', num: '01', title: 'Overview & Info', icon: BookOpen },
  { id: 'sec-problem-statement', num: '02', title: 'Problem Statement', icon: BookOpen },
  { id: 'sec-eda', num: '03', title: 'Dataset & EDA', icon: Database },
  { id: 'sec-methodology', num: '04', title: 'Methodology & Models', icon: GitBranch },
  { id: 'sec-setup', num: '05', title: 'Experimental Setup', icon: Cpu },
  { id: 'sec-training-dynamics', num: '06', title: 'Training Dynamics', icon: Activity },
  { id: 'sec-results', num: '07', title: 'Experimental Results', icon: BarChart3 },
  { id: 'sec-discussion', num: '08', title: 'Comparison & Discussion', icon: Layers },
  { id: 'sec-error-analysis', num: '09', title: 'Error Analysis', icon: AlertCircle },
  { id: 'sec-limitations', num: '10', title: 'Limitations & Conclusion', icon: HelpCircle },
  { id: 'sec-source-code', num: '11', title: 'Source Code Repo', icon: Github },
  { id: 'sec-checkpoints', num: '12', title: 'Checkpoints & Reproduction', icon: Terminal },
  { id: 'sec-report', num: '13', title: 'Report & Slides', icon: FileText },
  { id: 'sec-video', num: '14', title: 'YouTube Video', icon: Video },
  { id: 'sec-ai-disclosure', num: '15', title: 'AI Usage Disclosure', icon: ShieldCheck },
];

interface AssignmentViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenModal?: (type: ModalType) => void;
}

// Model result data from results/assignment-1/results/model_comparison.csv
const MODEL_RESULTS = [
  {
    id: 'linear',
    name: 'Linear Classifier',
    shortName: 'Linear',
    params: '7,850',
    bestEpoch: 10,
    valLoss: 0.5196,
    valAcc: 82.82,
    testAcc: 82.45,
    macroF1: 82.26,
    trainTime: '324.99s',
    infTime: '3.3271s',
    latency: '0.3327 ms',
    checkpoint: 'linear_best.pth',
    historyPlot: 'results/assignment-1/figures/linear_training_history.png',
    samplePredPlot: 'results/assignment-1/figures/linear_sample_predictions.png',
    cmPlot: 'results/assignment-1/figures/linear_confusion_matrix.png',
    architecture: 'Input Flatten(784) → Linear(784, 10) + Softmax logits',
    inductiveBias: 'None (Linear hyperplane in 784D space)',
    badge: 'Baseline'
  },
  {
    id: 'mlp',
    name: 'Multilayer Perceptron (MLP)',
    shortName: 'MLP',
    params: '235,146',
    bestEpoch: 14,
    valLoss: 0.3213,
    valAcc: 87.95,
    testAcc: 87.57,
    macroF1: 87.51,
    trainTime: '353.55s',
    infTime: '2.0924s',
    latency: '0.2092 ms',
    checkpoint: 'mlp_best.pth',
    historyPlot: 'results/assignment-1/figures/mlp_training_history.png',
    samplePredPlot: 'results/assignment-1/figures/mlp_sample_predictions.png',
    cmPlot: 'results/assignment-1/figures/mlp_confusion_matrix.png',
    architecture: 'Linear(784, 256) → BatchNorm → ReLU → Dropout(0.3) → Linear(256, 128) → ReLU → Linear(128, 10)',
    inductiveBias: 'None (Fully connected permutation-invariant layers)',
    badge: 'Non-linear'
  },
  {
    id: 'cnn',
    name: 'Convolutional Neural Network (CNN)',
    shortName: 'CNN',
    params: '421,834',
    bestEpoch: 14,
    valLoss: 0.1917,
    valAcc: 92.78,
    testAcc: 92.03,
    macroF1: 92.03,
    trainTime: '356.18s',
    infTime: '2.1325s',
    latency: '0.2132 ms',
    checkpoint: 'cnn_best.pth',
    historyPlot: 'results/assignment-1/figures/cnn_training_history.png',
    samplePredPlot: 'results/assignment-1/figures/cnn_sample_predictions.png',
    cmPlot: 'results/assignment-1/figures/cnn_confusion_matrix.png',
    architecture: 'Conv2D(1→32, 3x3) → BN → ReLU → Conv2D(32→64) → MaxPool(2) → Dropout(0.25) → Conv2D(64→128) → MaxPool(2) → FC(128*7*7, 256) → FC(256, 10)',
    inductiveBias: 'High (2D Spatial Locality & Translation Equivariance)',
    badge: 'Best Accuracy'
  },
  {
    id: 'lstm',
    name: 'LSTM Image Classifier',
    shortName: 'LSTM',
    params: '82,186',
    bestEpoch: 20,
    valLoss: 0.2723,
    valAcc: 90.18,
    testAcc: 88.15,
    macroF1: 88.14,
    trainTime: '325.57s',
    infTime: '3.1135s',
    latency: '0.3114 ms',
    checkpoint: 'lstm_best.pth',
    historyPlot: 'results/assignment-1/figures/lstm_training_history.png',
    samplePredPlot: 'results/assignment-1/figures/lstm_sample_predictions.png',
    cmPlot: 'results/assignment-1/figures/lstm_confusion_matrix.png',
    architecture: 'Sequential scanlines (T=28 rows, d=28) → LSTM(input=28, hidden=128) → Last hidden state h_28 → FC(128, 10)',
    inductiveBias: 'Sequential Temporal Bias (Top-to-bottom row transitions)',
    badge: 'Recurrent'
  },
  {
    id: 'transformer',
    name: 'Transformer Image Classifier',
    shortName: 'Transformer',
    params: '71,946',
    bestEpoch: 19,
    valLoss: 0.3183,
    valAcc: 88.58,
    testAcc: 88.22,
    macroF1: 88.05,
    trainTime: '445.34s',
    infTime: '2.2613s',
    latency: '0.2261 ms',
    checkpoint: 'transformer_best.pth',
    historyPlot: 'results/assignment-1/figures/transformer_training_history.png',
    samplePredPlot: 'results/assignment-1/figures/transformer_sample_predictions.png',
    cmPlot: 'results/assignment-1/figures/transformer_confusion_matrix.png',
    architecture: '4x4 Patching (49 patches) → Linear Projection (d=64) + CLS Token + 1D PosEmbedding → 4 Transformer Encoder Blocks (h=4, d_mlp=128) → LayerNorm → Head(64, 10)',
    inductiveBias: 'Low (Global Multi-Head Self-Attention across all patches)',
    badge: 'Attention'
  }
];

export default function Assignment1View({ onNavigate }: AssignmentViewProps) {
  const [selectedModelId, setSelectedModelId] = useState<string>('cnn');
  const [selectedEdaTab, setSelectedEdaTab] = useState<'distribution' | 'pixels' | 'samples' | 'average'>('distribution');
  const [selectedCmModelId, setSelectedCmModelId] = useState<string>('cnn');
  const [selectedHistoryModelId, setSelectedHistoryModelId] = useState<string>('transformer');
  const [activeSection, setActiveSection] = useState<string>('sec-overview');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);

  const base = ((import.meta as any).env?.BASE_URL || '/').replace(/\/$/, '') + '/';
  const getAssetUrl = (path: string) => `${base}${path.replace(/^\//, '')}`;

  const currentModel = MODEL_RESULTS.find((m) => m.id === selectedModelId) || MODEL_RESULTS[2];
  const currentCmModel = MODEL_RESULTS.find((m) => m.id === selectedCmModelId) || MODEL_RESULTS[2];
  const currentHistoryModel = MODEL_RESULTS.find((m) => m.id === selectedHistoryModelId) || MODEL_RESULTS[4];
  const currentHistory = ASSIGNMENT1_HISTORIES[selectedHistoryModelId] || ASSIGNMENT1_HISTORIES['transformer'];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalScroll) * 100)));
        setScrollProgress(currentProgress);
      }

      // Determine active section based on scroll offset
      const scrollPosition = window.scrollY + 140;
      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const item = TOC_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // offset for sticky navigation header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileTocOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] pb-24">
      {/* Top Breadcrumbs & Navigation Bar */}
      <div className="bg-white border-b border-[#eaedff] sticky top-16 z-30 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-2 text-[13px] font-medium text-[#0037b0] hover:text-[#00257a] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Course Overview</span>
          </button>

          <div className="flex items-center space-x-2 text-[12px] font-mono text-[#515f74]">
            <span className="hidden sm:inline">CO3133 / Assignments</span>
            <span className="hidden sm:inline">/</span>
            <span className="font-semibold text-[#131b2e] bg-[#f2f3ff] px-2.5 py-1 rounded">Assignment 01</span>
          </div>
        </div>
      </div>

      {/* Main Centered Layout with Compact Left Gutter TOC */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex justify-center gap-6 xl:gap-8 items-start relative">
          
          {/* =========================================================================
              COMPACT STICKY LEFT SIDEBAR: TABLE OF CONTENTS (Only on wide screens)
             ========================================================================= */}
          <aside className="hidden xl:block w-48 2xl:w-52 shrink-0 sticky top-32 self-start">
            <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-[#eaedff] p-3 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-[#f2f3ff]">
                <div className="flex items-center space-x-1.5 text-[#131b2e]">
                  <List className="w-3.5 h-3.5 text-[#0037b0]" />
                  <span className="font-serif text-[12px] font-semibold">Contents</span>
                </div>
                <span className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#f2f3ff] text-[#0037b0]">
                  15 Sec
                </span>
              </div>

              {/* Reading Progress Indicator */}
              <div className="space-y-1 pb-2 border-b border-[#f2f3ff]">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#515f74]">
                  <span>Progress</span>
                  <span className="font-semibold text-[#0037b0]">{scrollProgress}%</span>
                </div>
                <div className="w-full bg-[#f2f3ff] h-1 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#0037b0] h-full rounded-full transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>
              </div>

              {/* Navigation List */}
              <nav className="space-y-0.5 max-h-[calc(100vh-270px)] overflow-y-auto pr-0.5 text-[11px]">
                {TOC_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-2 py-1 rounded-md text-[11px] flex items-center space-x-1.5 transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-[#0037b0] text-white font-medium shadow-xs' 
                          : 'text-[#515f74] hover:bg-[#f2f3ff] hover:text-[#131b2e]'
                      }`}
                      title={item.title}
                    >
                      <span className={`font-mono text-[9px] px-1 py-0.2 rounded shrink-0 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#f2f3ff] text-[#0037b0]'
                      }`}>
                        {item.num}
                      </span>
                      <span className="truncate flex-1">{item.title}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Footer Quick Actions */}
              <div className="pt-2 border-t border-[#f2f3ff] flex items-center justify-center text-[10px]">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center space-x-1 text-[#515f74] hover:text-[#0037b0] cursor-pointer font-medium"
                >
                  <ArrowUp className="w-3 h-3" />
                  <span>Scroll to Top</span>
                </button>
              </div>
            </div>
          </aside>

          {/* =========================================================================
              MAIN CENTERED CONTENT CONTAINER
             ========================================================================= */}
          <main className="w-full max-w-[1040px] min-w-0 space-y-8">
            
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
              href={COURSE_INFO.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg text-[13px] font-medium transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
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

            {/* Formal Mathematical Formulation Card */}
            <div className="p-5 bg-[#fcfdff] rounded-xl border border-[#eaedff] space-y-4">
              <div className="flex items-center justify-between border-b border-[#f2f3ff] pb-2">
                <span className="font-mono text-[12px] font-bold text-[#0037b0] uppercase flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  Formal Mathematical Formulation
                </span>
                <span className="text-[11px] font-mono text-[#515f74] bg-[#f2f3ff] px-2 py-0.5 rounded">
                  Supervised 10-Class Classification
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
                {/* 1. Input Space & Posterior Probability Mapping */}
                <div className="p-4 bg-white rounded-lg border border-[#eaedff] space-y-2">
                  <span className="font-mono text-[11px] font-semibold text-[#131b2e] uppercase block">
                    1. Input Space &amp; Probability Mapping
                  </span>
                  <p className="text-[#515f74] leading-normal">
                    Let an input image be <MathInline math="\mathbf{x} \in \mathbb{R}^{28 \times 28}" /> with target one-hot vector <MathInline math="\mathbf{y} \in \{0, 1\}^{C}" /> (<MathInline math="C = 10" />). A neural network parameterized by <MathInline math="\boldsymbol{\theta}" /> computes logits <MathInline math="\mathbf{z} = f_{\boldsymbol{\theta}}(\mathbf{x})" />:
                  </p>
                  <MathBlock math="f_{\boldsymbol{\theta}}: \mathbb{R}^{28 \times 28} \longrightarrow \Delta^{C-1}, \quad \hat{y}_c = \operatorname{Softmax}(z_c) = \frac{\exp(z_c)}{\sum_{k=1}^C \exp(z_k)}" />
                </div>

                {/* 2. Empirical Risk Minimization & Decision Rule */}
                <div className="p-4 bg-white rounded-lg border border-[#eaedff] space-y-2">
                  <span className="font-mono text-[11px] font-semibold text-[#131b2e] uppercase block">
                    2. Empirical Risk Minimization (ERM)
                  </span>
                  <p className="text-[#515f74] leading-normal">
                    Given training set <MathInline math="\mathcal{D} = \{(\mathbf{x}_i, \mathbf{y}_i)\}_{i=1}^N" />, we minimize the regularized Cross-Entropy loss (<MathInline math="\lambda = 10^{-4}" />):
                  </p>
                  <MathBlock math="\mathcal{L}(\boldsymbol{\theta}) = -\frac{1}{N} \sum_{i=1}^N \sum_{c=1}^C y_{i,c} \log \hat{y}_{i,c} + \frac{\lambda}{2} \|\boldsymbol{\theta}\|_2^2" />
                  <div className="pt-2 text-[12px] text-[#515f74] border-t border-[#f2f3ff] flex items-center justify-between">
                    <span className="font-mono text-[11px]">MAP Decision Rule:</span>
                    <MathInline math="\hat{c} = \underset{c \in \{0, \dots, C-1\}}{\operatorname{argmax}} \, \hat{y}_c" />
                  </div>
                </div>
              </div>
            </div>

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
              The <strong>Fashion-MNIST</strong> dataset comprises 70,000 grayscale images across 10 clothing categories (60,000 train + 10,000 test). We enforce a deterministic <strong>90/10 Train/Val split</strong> (54,000 train / 6,000 validation / 10,000 held-out test). All images are normalized with standard Fashion-MNIST dataset statistics (<code className="bg-[#f2f3ff] px-1.5 py-0.5 rounded font-mono text-[12px]">μ = 0.2860, σ = 0.3530</code>).
            </p>

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
                      src={getAssetUrl('results/assignment-1/figures/eda_class_distribution.png')} 
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
                      src={getAssetUrl('results/assignment-1/figures/eda_pixel_distribution.png')} 
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
                      src={getAssetUrl('results/assignment-1/figures/eda_representative_samples.png')} 
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
                      src={getAssetUrl('results/assignment-1/figures/eda_average_images.png')} 
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
                  <span className="font-mono text-[12px] font-bold text-[#0037b0]">5. Transformer Image Classifier</span>
                  <span className="text-[10px] font-mono bg-[#d5e3fc] text-[#001d31] px-1.5 py-0.5 rounded">71,946 params</span>
                </div>
                <p className="text-[12px] text-[#515f74]">
                  Patch projection (4x4 patches → 49 tokens), learnable 1D position embeddings, 4 Transformer Encoder layers with Multi-Head Self-Attention (h=4, d=64).
                </p>
              </div>

              <div className="p-4 bg-[#f2f3ff] rounded-lg border border-[#d0d7ff] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-[#0037b0]">Pipeline Flow</span>
                  <span className="text-[10px] font-mono bg-[#0037b0] text-white px-1.5 py-0.5 rounded">End-to-End</span>
                </div>
                <p className="text-[12px] text-[#515f74]">
                  Dataset → DataLoader (B=64) → Model Forward → CrossEntropy Loss → AdamW Optimizer → Cosine LR Scheduler → Best Checkpoint (.pth).
                </p>
              </div>
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
              {MODEL_RESULTS.map((m) => (
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
              Detailed epoch-by-epoch training metrics (Loss, Accuracy, Epoch Duration) extracted directly from saved training history logs (<code className="bg-[#f2f3ff] px-1.5 py-0.5 rounded font-mono text-[12px]">results/assignment-1/histories/</code>).
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
                  {MODEL_RESULTS.map((row) => (
                    <tr 
                      key={row.id}
                      className={`hover:bg-[#f9faff] transition-colors ${row.id === 'cnn' ? 'bg-[#f4f7ff] font-medium' : ''}`}
                    >
                      <td className="py-2.5 px-4 font-semibold text-[#131b2e] flex items-center gap-2">
                        <span>{row.name}</span>
                        {row.id === 'cnn' && (
                          <span className="text-[10px] font-mono bg-[#0037b0] text-white px-1.5 py-0.2 rounded">Best</span>
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
                {MODEL_RESULTS.map((m) => (
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
                src={getAssetUrl('results/assignment-1/figures/model_tradeoff_comparison.png')} 
                alt="Model Trade-off Comparison"
                className="max-h-[460px] w-auto object-contain rounded-lg border border-[#eaedff] bg-white p-2"
              />
              <p className="text-[12px] font-mono text-[#515f74] text-center">
                Figure 7.1: Master Trade-off Analysis: Accuracy vs Parameters, Accuracy vs Latency, and Macro-F1 across all 5 architectures.
              </p>
            </div>

            {/* Discussion Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Spatial Inductive Bias Dominance (CNN)
                </span>
                <p className="text-[13px] text-[#515f74]">
                  CNN achieved the top performance (<strong>92.03% Test Acc</strong>, <strong>92.03% Macro-F1</strong>). Its 2D local receptive fields and weight sharing naturally match visual image translation properties, outperforming flat MLPs by +4.46% with fast latency (0.21ms).
                </p>
              </div>

              <div className="p-4 bg-[#f9faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Sequence &amp; Attention Modalities (LSTM vs Transformer)
                </span>
                <p className="text-[13px] text-[#515f74]">
                  Transformer Image Classifier reached <strong>88.22% Test Acc</strong> with only 71.9K parameters, proving global self-attention can model image patches from scratch. LSTM achieved <strong>88.15% Test Acc</strong> by treating row scanlines as sequential dependencies.
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
                  {MODEL_RESULTS.map((m) => (
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
                Assignment 1 successfully demonstrated the full pipeline of deep image classification across 5 paradigms. The <strong>CNN architecture</strong> demonstrated the strongest performance (<strong>92.03% Test Acc</strong>), while <strong>Transformer</strong> and <strong>LSTM</strong> proved that sequence and self-attention mechanisms can effectively capture image representations.
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
                href={`${COURSE_INFO.repoUrl}/tree/main/results/assignment-1/checkpoints`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#0037b0] px-1.5 py-0.5 rounded font-mono text-[12px] inline-flex items-center gap-1 font-medium transition-colors"
              >
                <span>results/assignment-1/checkpoints/</span>
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
                  {MODEL_RESULTS.map((m) => {
                    const checkpointUrl = `${COURSE_INFO.repoUrl}/blob/main/results/assignment-1/checkpoints/${m.checkpoint}`;
                    return (
                      <tr key={m.id} className="hover:bg-[#f9faff]">
                        <td className="py-2.5 px-3 font-semibold text-[#131b2e]">{m.name}</td>
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
                            <span className="truncate max-w-[280px]">tree/main/results/assignment-1/checkpoints/{m.checkpoint}</span>
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
                <div>jupyter notebook results/assignment-1/Assignment1_Extended.ipynb</div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            13. LINK TO REPORT / SLIDES (Placeholder as requested)
           ========================================================================= */}
        <div id="sec-report" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <FileText className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              12. Link to Report / Slides
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: Pending Final Submission</span>
            Technical report (PDF) and presentation slides will be attached here upon final release.
          </div>
        </div>

        {/* =========================================================================
            14. LINK TO YOUTUBE PRESENTATION VIDEO (Placeholder as requested)
           ========================================================================= */}
        <div id="sec-video" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Video className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              13. Link to YouTube Presentation Video
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74] space-y-1">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block">Status: Pending Video Upload</span>
            <p>The presentation video will be uploaded to YouTube and linked here following the standard title format: <code className="font-mono text-[11px] bg-[#f2f3ff] px-1.5 py-0.5 rounded text-[#131b2e]">CO3133-Semester-261 – Group 2352821 – Assignment 1</code>.</p>
          </div>
        </div>

        {/* =========================================================================
            15. ASSIGNMENT-SPECIFIC AI USAGE DISCLOSURE (Placeholder as requested)
           ========================================================================= */}
        <div id="sec-ai-disclosure" className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4 scroll-mt-28">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <ShieldCheck className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              14. Assignment-Specific AI Usage Disclosure
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: Pending Disclosure Declaration</span>
            Assignment-specific AI tool usage declarations (Tool name, user, task, prompt, contribution, student verification, affected files, responsible member) will be maintained and documented here.
          </div>
        </div>

          </main>
        </div>
      </div>

      {/* Mobile Floating TOC Toggle Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
          className="flex items-center space-x-2 px-4 py-2.5 bg-[#0037b0] text-white text-[13px] font-medium rounded-full shadow-lg hover:bg-[#00257a] transition-all cursor-pointer"
        >
          <List className="w-4 h-4" />
          <span>Contents ({scrollProgress}%)</span>
        </button>
      </div>

      {/* Mobile TOC Drawer Modal */}
      {isMobileTocOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col shadow-2xl border border-[#eaedff] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-[#f2f3ff] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <List className="w-4 h-4 text-[#0037b0]" />
                <h3 className="font-serif font-semibold text-[15px] text-[#131b2e]">Table of Contents</h3>
              </div>
              <button 
                onClick={() => setIsMobileTocOpen(false)}
                className="p-1 text-[#515f74] hover:text-[#131b2e] rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto space-y-1.5 flex-1">
              {TOC_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-[13px] flex items-center space-x-2.5 transition-all cursor-pointer ${
                    activeSection === item.id 
                      ? 'bg-[#0037b0] text-white font-medium' 
                      : 'text-[#515f74] hover:bg-[#f2f3ff] hover:text-[#131b2e]'
                  }`}
                >
                  <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                    activeSection === item.id ? 'bg-white/20 text-white' : 'bg-[#f2f3ff] text-[#0037b0]'
                  }`}>
                    {item.num}
                  </span>
                  <span className="truncate">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
