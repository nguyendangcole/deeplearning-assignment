import { ArrowLeft, ExternalLink, FileText, Github, Play, CheckCircle2, Database, Cpu, Layers, GitBranch, ShieldCheck } from 'lucide-react';
import { COURSE_INFO } from '../../data';
import { ViewType, ModalType } from '../../types';

interface AssignmentViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenModal?: (type: ModalType) => void;
}

export default function Assignment1View({ onNavigate, onOpenModal }: AssignmentViewProps) {
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
            <span className="hidden sm:inline">CO3133 / Assignments</span>
            <span className="hidden sm:inline">/</span>
            <span className="font-semibold text-[#131b2e] bg-[#f2f3ff] px-2.5 py-1 rounded">Assignment 01</span>
            
            <button
              onClick={() => onNavigate('assignment-2')}
              className="text-[12px] text-[#0037b0] hover:underline cursor-pointer ml-2"
            >
              Next: Asg 02 →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 pt-8 space-y-8">
        {/* Header Title Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-[#d5e3fc] text-[#001d31] font-mono text-[11px] font-semibold uppercase rounded">
              CO3133 Course Project · Assignment 01
            </span>
            <span className="px-2.5 py-1 bg-[#e2e7ff] text-[#0037b0] font-mono text-[11px] font-medium rounded">
              Topic: Foundations of DL Pipelines &amp; Architectures
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-[28px] sm:text-[34px] font-medium text-[#131b2e] tracking-tight leading-snug">
              From Linear Models to Modern Sequence Models: A Comparative Study for Image Classification
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#434655] leading-relaxed max-w-[85ch]">
              An end-to-end empirical study constructing a modular deep learning pipeline in PyTorch to train, benchmark, and analyze five distinct neural architecture families under strict fairness protocols on Fashion-MNIST.
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
              <span className="block font-mono text-[11px] text-[#515f74] uppercase">Milestone 1 (Draft)</span>
              <span className="font-semibold text-[#131b2e]">23 Sep 2026 (25%)</span>
              <span className="block font-mono text-[11px] text-[#515f74]">EDA, Pipeline, Linear/MLP</span>
            </div>
            <div>
              <span className="block font-mono text-[11px] text-[#515f74] uppercase">Milestone 2 (Final)</span>
              <span className="font-semibold text-[#131b2e]">21 Oct 2026 (75%)</span>
              <span className="block font-mono text-[11px] text-[#515f74]">All 5 Models, Report &amp; Video</span>
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
              onClick={() => onOpenModal?.('video-1')}
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#e2e7ff] hover:bg-[#d0d7ff] text-[#0037b0] rounded-lg text-[13px] font-medium transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4" />
              <span>Watch Defense Video</span>
            </button>

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
            <span className="font-semibold text-[#131b2e] block">Week 3 Gate Milestone: Specification &amp; Architecture Showcase</span>
            <p className="mt-0.5 leading-relaxed">
              This page defines the formal specifications, dataset splits, architecture criteria, and evaluation rubrics for Assignment 01 as prescribed in the Course Project Handbook. Experimental benchmarks and artifact checkpoints will be populated upon completing Milestones M1 (Draft) and M2 (Final).
            </p>
          </div>
        </div>

        {/* Section 1: Five Mandatory Architecture Families */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-4">
            <Layers className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              1. Five Mandatory Deep Learning Architecture Families
            </h2>
          </div>

          <p className="text-[14px] text-[#434655] leading-relaxed">
            As mandated by Section 11.1 of the handbook, all five models must be implemented, trained from scratch, and systematically compared under identical training/validation splits and random seeds:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Model 1</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Linear / Softmax Classifier</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Flattens 28×28 input images into 784-dimensional vectors. Direct linear projection producing 10 logits trained with Cross-Entropy loss without redundant prior softmax.
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Parameters: ~7,850 weights
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Model 2</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Multilayer Perceptron (MLP)</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Deep fully connected network with non-linear activation functions (ReLU/GELU), Dropout, and LayerNorm/BatchNorm to explore non-linear representation capacity.
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Hidden Layers: ≥ 2 layers
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Model 3</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Convolutional Neural Network (CNN)</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Self-designed custom architecture leveraging translation invariance, local receptive fields, 2D convolution kernels, pooling layers, and spatial feature hierarchies.
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Inductive Bias: Spatial translation
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Model 4</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Recurrent Network (LSTM / GRU)</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Treats 2D images as sequences of rows (28 timesteps × 28 features) or patches. Evaluates sequential memory mechanisms and vanishing/exploding gradient behavior.
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Sequential modeling of 2D pixels
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0] uppercase">Model 5</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Vision Transformer (ViT)</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Patch projection / row token embeddings paired with learned 1D positional encodings and multi-head self-attention mechanisms to test global context learning without conv inductive bias.
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Self-Attention &amp; Positional Encodings
              </div>
            </div>

            <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-mono text-[11px] font-semibold text-[#515f74] uppercase">Optional Extensions</span>
              <h3 className="font-semibold text-[#131b2e] text-[15px]">Robustness &amp; Ablation</h3>
              <p className="text-[13px] text-[#515f74] leading-relaxed">
                Ablation studies comparing LSTM vs. GRU, Mamba state-space models, parameter-matched budget comparisons, and perturbation noise robustness tests.
              </p>
              <div className="font-mono text-[11px] text-[#515f74] pt-2 border-t border-[#eaedff]">
                Controlled budget matching
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Pipeline & Dataset Protocol */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dataset Card */}
          <div className="bg-white p-6 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-[#0037b0]">
              <Database className="w-5 h-5" />
              <h3 className="font-serif text-[18px] font-medium text-[#131b2e]">Dataset Requirements &amp; EDA</h3>
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#434655]">
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Primary Dataset:</span>
                <span>Fashion-MNIST (10 classes, 60,000 train, 10,000 test, 28×28 grayscale).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Debugging Dataset:</span>
                <span>MNIST used solely for development sanity and autograd checks.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Splitting Strategy:</span>
                <span>Stratified 80/20 train-validation split with fixed seed across all 5 models to guarantee zero data leakage.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Preprocessing:</span>
                <span>Normalization (mean=0.2860, std=0.3530), random horizontal flip, and tensor resizing.</span>
              </li>
            </ul>
          </div>

          {/* Fairness Constraints Card */}
          <div className="bg-white p-6 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-[#0037b0]">
              <Cpu className="w-5 h-5" />
              <h3 className="font-serif text-[18px] font-medium text-[#131b2e]">Fairness &amp; Evaluation Constraints</h3>
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#434655]">
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Beyond Accuracy:</span>
                <span>Evaluation mandates Macro-F1, parameter counts, training wall-clock time, and inference throughput (ms/sample).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Fixed Seed:</span>
                <span>Deterministic reproducibility for weight initialization, batch shuffling, and split partitions.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Qualitative Evidence:</span>
                <span>Confusion matrix analysis, hardest misclassified test cases, and class-wise boundary inspection.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold text-[#131b2e] shrink-0">• Inductive Bias:</span>
                <span>Comparative analysis of why CNNs exploit 2D spatial locality whereas ViTs require higher data density.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Training Pipeline Architecture */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-4">
            <GitBranch className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              2. End-to-End PyTorch Pipeline Workflow
            </h2>
          </div>

          <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] font-mono text-[12px] text-[#131b2e] overflow-x-auto leading-relaxed">
            Raw Fashion-MNIST ➔ Custom Dataset &amp; Augmentations ➔ DataLoader (Batched &amp; Shuffled) ➔ Model Forward Pass ➔ Cross-Entropy Loss ➔ PyTorch Autograd Optimizer Step ➔ Epoch Validation ➔ Checkpoint Selection ➔ Confusion Matrix &amp; Error Taxonomy
          </div>
        </div>

        {/* Section 4: Benchmark Table (Placeholder for Planned Results) */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#f2f3ff] pb-4">
            <div>
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                3. Comparative Benchmark Results (Planned Protocol)
              </h2>
              <p className="text-[13px] text-[#515f74] mt-0.5">
                The benchmark schema below will record final empirical results upon completion of Milestone M2.
              </p>
            </div>
            <span className="px-2.5 py-1 bg-[#f2f3ff] text-[#515f74] font-mono text-[11px] rounded border border-[#eaedff]">
              Status: In Development (M1/M2)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="bg-[#f2f3ff] border-b border-[#eaedff] text-[#515f74] font-mono text-[11px] uppercase">
                  <th className="py-3 px-4">Architecture</th>
                  <th className="py-3 px-4">Parameters</th>
                  <th className="py-3 px-4">Top-1 Accuracy</th>
                  <th className="py-3 px-4">Macro-F1</th>
                  <th className="py-3 px-4">Train Time (s/epoch)</th>
                  <th className="py-3 px-4">Inference (ms)</th>
                  <th className="py-3 px-4">Checkpoint</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eaedff] font-mono text-[12px]">
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-[#131b2e]">Linear / Softmax Classifier</td>
                  <td className="py-3 px-4 text-[#515f74]">~7.8 K</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M1</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M1</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#0037b0]">linear_ckpt.pt</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-[#131b2e]">Multilayer Perceptron (MLP)</td>
                  <td className="py-3 px-4 text-[#515f74]">~200 K</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M1</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M1</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#0037b0]">mlp_ckpt.pt</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-[#131b2e]">Convolutional Network (CNN)</td>
                  <td className="py-3 px-4 text-[#515f74]">~1.2 M</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M2</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M2</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#0037b0]">cnn_ckpt.pt</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-[#131b2e]">Recurrent (LSTM / GRU)</td>
                  <td className="py-3 px-4 text-[#515f74]">~450 K</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M2</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M2</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#0037b0]">rnn_ckpt.pt</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-[#131b2e]">Vision Transformer (ViT)</td>
                  <td className="py-3 px-4 text-[#515f74]">~2.5 M</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M2</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending M2</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#515f74]">Pending</td>
                  <td className="py-3 px-4 text-[#0037b0]">vit_ckpt.pt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 5: Deliverables Checklist */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
            4. Assignment 01 Deliverables &amp; Artifacts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2 text-[13px]">
            <div className="p-3 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-1">
              <span className="font-semibold text-[#131b2e] block">1. Source Code</span>
              <span className="text-[#515f74] text-[12px] block">Reproducible PyTorch modules, train/eval scripts, requirements.txt</span>
            </div>
            <div className="p-3 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-1">
              <span className="font-semibold text-[#131b2e] block">2. Technical Report</span>
              <span className="text-[#515f74] text-[12px] block">Problem formulation, EDA, methodology, error analysis (PDF)</span>
            </div>
            <div className="p-3 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-1">
              <span className="font-semibold text-[#131b2e] block">3. YouTube Defense</span>
              <span className="text-[#515f74] text-[12px] block">Mandatory defense presentation recording with chapter marks</span>
            </div>
            <div className="p-3 bg-[#faf8ff] rounded-lg border border-[#eaedff] space-y-1">
              <span className="font-semibold text-[#131b2e] block">4. AI Disclosure</span>
              <span className="text-[#515f74] text-[12px] block">Detailed log adhering to Section 5 with prompt samples and verifications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
