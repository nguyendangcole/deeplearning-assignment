import { useState } from 'react';
import { X, Code, Play, FileText, Check, Copy } from 'lucide-react';
import { COURSE_INFO } from '../data';
import { ModalType } from '../types';

interface AssignmentModalsProps {
  activeModal: ModalType;
  onClose: () => void;
  onOpenVideo: (videoModal: 'video-1' | 'video-2') => void;
}

export default function AssignmentModals({
  activeModal,
  onClose,
  onOpenVideo,
}: AssignmentModalsProps) {
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  if (!activeModal || (activeModal !== 'assignment-1' && activeModal !== 'assignment-2' && activeModal !== 'assignment-3')) {
    return null;
  }

  const handleCopyBibtex = () => {
    const bibtex = `@article{nguyen2024deeplearning,
  title={Foundations of Deep Learning Pipelines and Architectures: A Comparative Empirical Study},
  author={Nguyen, Duy-Dang and Le, Thanh-Sach},
  journal={HCMUT CSE Technical Reports},
  volume={CO3133},
  number={261},
  pages={1--14},
  year={2024}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#131b2e]/60 backdrop-blur-sm flex items-center justify-center p-4 lg:p-6 overflow-y-auto animate-fade-in">
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative bg-white max-w-[920px] w-full max-h-[90vh] rounded-lg shadow-2xl overflow-y-auto flex flex-col border border-[#eaedff] z-10">
        
        {/* ASSIGNMENT 1 MODAL */}
        {activeModal === 'assignment-1' && (
          <>
            {/* Modal Header Bar */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#eaedff] flex items-center justify-between z-20">
              <div>
                <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold block">
                  CO3133 · Assignment 01 Technical Report
                </span>
                <h2 className="font-serif text-[22px] sm:text-[24px] text-[#131b2e] font-medium leading-tight">
                  Foundations of Deep Learning Pipelines and Architectures
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-[#515f74] hover:text-[#131b2e] rounded bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Article Body */}
            <div className="p-6 sm:p-8 space-y-6 text-[15px] text-[#131b2e]">
              {/* Paper Meta Bar */}
              <div className="p-4 bg-[#f2f3ff] rounded-lg border border-[#eaedff] space-y-3 text-[13px]">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#434655]">
                  <span>
                    <strong className="text-[#131b2e]">Author:</strong> {COURSE_INFO.author} ({COURSE_INFO.studentId})
                  </span>
                  <span>
                    <strong className="text-[#131b2e]">Instructor:</strong> {COURSE_INFO.instructor}
                  </span>
                  <span>
                    <strong className="text-[#131b2e]">Status:</strong>{' '}
                    <span className="px-2 py-0.5 bg-[#d5e3fc] text-[#0d1c2e] font-mono text-[11px] rounded font-semibold">
                      Completed &amp; Benchmarked
                    </span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-[#0037b0] font-mono text-[12px] pt-1 border-t border-[#eaedff]">
                  <a
                    href={COURSE_INFO.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1 font-medium"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>GitHub Codebase</span>
                  </a>
                  <button
                    onClick={handleCopyBibtex}
                    className="hover:underline flex items-center gap-1 font-medium text-[#515f74] cursor-pointer"
                  >
                    {copiedBibtex ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBibtex ? 'BibTeX Copied!' : 'Copy BibTeX'}</span>
                  </button>
                </div>
              </div>

              {/* 1. Problem Statement */}
              <section className="space-y-2">
                <h3 className="font-serif text-[20px] text-[#131b2e] font-semibold">
                  1. Problem Statement
                </h3>
                <p className="leading-relaxed text-[#434655]">
                  Understanding fundamental gradient flow and learning dynamics requires implementing backpropagation from scratch before transitioning to GPU-accelerated automatic differentiation. This project formulates multi-class visual recognition under strict architectural constraints.
                </p>
                <div className="p-3.5 bg-[#faf8ff] rounded border border-[#eaedff] space-y-1.5 font-mono text-[12px]">
                  <div>
                    <strong className="text-[#131b2e]">Motivation:</strong> Analyze loss surface topology and vanishing gradients in deep feedforward structures without residual connections.
                  </div>
                  <div>
                    <strong className="text-[#131b2e]">Task Definition:</strong> Supervised 10-class natural image classification.
                  </div>
                  <div>
                    <strong className="text-[#131b2e]">Input / Output:</strong> Tensor X ∈ ℝ^(B × 3 × 32 × 32) → Logits Ŷ ∈ ℝ^(B × 10).
                  </div>
                </div>
              </section>

              {/* 2. Dataset & EDA */}
              <section className="space-y-2">
                <h3 className="font-serif text-[20px] text-[#131b2e] font-semibold">
                  2. Dataset &amp; Exploratory Data Analysis
                </h3>
                <p className="text-[#434655] leading-relaxed">
                  Experiments utilize CIFAR-10 consisting of 60,000 32×32 color images in 10 balanced classes (50,000 training, 10,000 test images). Data augmentations apply random horizontal flips (p=0.5) and random 4-pixel padding with cropping. Normalization constants: μ = (0.4914, 0.4822, 0.4465), σ = (0.2470, 0.2435, 0.2616).
                </p>
              </section>

              {/* 3. Methodology & Benchmark Table */}
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[20px] text-[#131b2e] font-semibold">
                    3. Empirical Results &amp; Benchmarks
                  </h3>
                  <span className="font-mono text-[11px] text-[#515f74]">
                    Batch Size = 128 · AdamW (lr=1e-3)
                  </span>
                </div>
                <div className="overflow-x-auto border border-[#eaedff] rounded-lg">
                  <table className="w-full text-left font-mono text-[12px] bg-white">
                    <thead className="bg-[#eaedff] font-semibold text-[#131b2e] border-b border-[#eaedff]">
                      <tr>
                        <th className="p-3">Model Architecture</th>
                        <th className="p-3">Params (M)</th>
                        <th className="p-3">Top-1 Accuracy</th>
                        <th className="p-3">Training Time</th>
                        <th className="p-3">Convergence Epoch</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eaedff] text-[#434655]">
                      <tr className="hover:bg-[#faf8ff]">
                        <td className="p-3 font-medium text-[#131b2e]">Custom 3-Layer MLP</td>
                        <td className="p-3">1.28 M</td>
                        <td className="p-3">54.12%</td>
                        <td className="p-3">4.2m (CPU)</td>
                        <td className="p-3">28</td>
                      </tr>
                      <tr className="hover:bg-[#faf8ff]">
                        <td className="p-3 font-medium text-[#131b2e]">Custom CNN (LeNet-Modified)</td>
                        <td className="p-3">0.45 M</td>
                        <td className="p-3">73.65%</td>
                        <td className="p-3">6.8m (GPU)</td>
                        <td className="p-3">40</td>
                      </tr>
                      <tr className="bg-[#f2f3ff] font-semibold text-[#0037b0]">
                        <td className="p-3">ResNet-18 (Residual Baseline)</td>
                        <td className="p-3">11.17 M</td>
                        <td className="p-3">88.42%</td>
                        <td className="p-3">14.5m (GPU)</td>
                        <td className="p-3">62</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 4. Discussion & Error Analysis */}
              <section className="space-y-2">
                <h3 className="font-serif text-[20px] text-[#131b2e] font-semibold">
                  4. Discussion &amp; Error Analysis
                </h3>
                <p className="text-[#434655] leading-relaxed">
                  The multi-layer perceptron suffered from severe spatial disorganization, failing on shifted or rotated pixel arrangements. In contrast, ResNet-18 maintained stable gradient norms across 18 layers due to identity skip pathways preventing catastrophic vanishing gradients. Frequent misclassifications clustered around visually ambiguous pairs such as <em>Cat vs. Dog</em> and <em>Automobile vs. Truck</em>.
                </p>
              </section>

              {/* 5. AI Tooling Disclosure Specific to Asg 1 */}
              <section className="p-4 bg-[#f2f3ff] rounded-lg border border-[#eaedff] space-y-1.5">
                <h4 className="text-[14px] font-semibold text-[#131b2e]">
                  AI Tooling Disclosure for Assignment 01
                </h4>
                <p className="text-[13px] text-[#434655]">
                  Claude 3.5 Sonnet was utilized for drafting Matplotlib confusion matrix plot scripts and formatting LaTeX equation summaries. Core matrix derivative computations and PyTorch module implementations were analytically formulated and verified by hand.
                </p>
              </section>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-[#eaedff] flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#515f74]">
                HCMUT CSE · Deep Learning Portfolio
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#0037b0] text-white rounded text-[14px] font-semibold hover:bg-[#1d4ed8] transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </>
        )}

        {/* ASSIGNMENT 2 MODAL */}
        {activeModal === 'assignment-2' && (
          <>
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#eaedff] flex items-center justify-between z-20">
              <div>
                <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold block">
                  CO3133 · Assignment 02 Specification
                </span>
                <h2 className="font-serif text-[22px] sm:text-[24px] text-[#131b2e] font-medium leading-tight">
                  Deep Learning on Large-Scale Data and Specialized Tasks
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-[#515f74] hover:text-[#131b2e] rounded bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-[15px] text-[#131b2e]">
              <div className="p-4 bg-[#f2f3ff] rounded-lg border border-[#eaedff] space-y-2 text-[13px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase">
                    Milestone Track · In Progress
                  </span>
                  <span className="font-mono text-[11px] bg-[#dce1ff] text-[#001551] px-2 py-0.5 rounded font-semibold">
                    Epoch 45 / 100
                  </span>
                </div>
                <p className="text-[#434655]">
                  Assignment 02 focuses on scaling deep architectures across distributed hardware nodes and training specialized Vision Transformers (ViT) and sequence models on multi-GPU setups.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="font-serif text-[20px] text-[#131b2e] font-semibold">
                  1. Scope &amp; Target Objectives
                </h3>
                <p className="text-[#434655] leading-relaxed">
                  Implementation of mixed-precision (FP16/BF16) training using PyTorch native AMP (Automatic Mixed Precision), gradient checkpointing to reduce activation memory footprints, and DistributedDataParallel (DDP) across high-throughput GPU clusters.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-[12px]">
                  <div className="p-3 bg-[#faf8ff] rounded border border-[#eaedff]">
                    <span className="text-[#515f74] block font-semibold">ACCELERATOR</span>
                    <span className="text-[#131b2e] font-bold">NVIDIA A100-SXM4-80GB</span>
                  </div>
                  <div className="p-3 bg-[#faf8ff] rounded border border-[#eaedff]">
                    <span className="text-[#515f74] block font-semibold">CURRENT THROUGHPUT</span>
                    <span className="text-[#131b2e] font-bold">1,420 images / sec</span>
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif text-[20px] text-[#131b2e] font-semibold">
                  2. Planned Benchmark Metrics
                </h3>
                <ul className="list-disc pl-5 text-[#434655] space-y-1.5 text-[14px]">
                  <li>Linear scaling efficiency across 1 vs 2 vs 4 GPU instances.</li>
                  <li>Validation Top-1 Accuracy comparisons against standard ConvNeXt baselines.</li>
                  <li>VRAM footprint and communication overhead profiling under varying batch size regimes.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif text-[20px] text-[#131b2e] font-semibold">
                  3. Defense Video Presentation
                </h3>
                <p className="text-[#434655]">
                  The technical defense walkthrough detailing distributed multi-GPU training setup and loss curves will be recorded and published upon final benchmark completion.
                </p>
              </section>
            </div>

            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-[#eaedff] flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#515f74] text-white rounded text-[14px] font-semibold hover:bg-[#434655] transition-colors cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </>
        )}

        {/* ASSIGNMENT 3 MODAL */}
        {activeModal === 'assignment-3' && (
          <>
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#eaedff] flex items-center justify-between z-20">
              <div>
                <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold block">
                  CO3133 · Assignment 03 Specification
                </span>
                <h2 className="font-serif text-[22px] sm:text-[24px] text-[#131b2e] font-medium leading-tight">
                  Multimodal Deep Learning
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-[#515f74] hover:text-[#131b2e] rounded bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-[15px] text-[#131b2e]">
              <div className="p-4 bg-[#f2f3ff] rounded-lg border border-[#eaedff] space-y-2 text-[13px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase">
                    Upcoming Research Milestone
                  </span>
                  <span className="font-mono text-[11px] bg-[#dae2fd] text-[#434655] px-2 py-0.5 rounded font-semibold">
                    Week 15 Defense
                  </span>
                </div>
                <p className="text-[#434655]">
                  Assignment 03 explores cross-attention mechanisms, joint image-text latent representations, and multimodal zero-shot generalization.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="font-serif text-[20px] text-[#131b2e] font-semibold">
                  Methodology Plan &amp; Dual-Encoder Pipeline
                </h3>
                <p className="text-[#434655] leading-relaxed">
                  Designing dual-encoder architectures inspired by CLIP (Contrastive Language-Image Pretraining). The pipeline evaluates symmetric cross-entropy loss over normalized visual and textual embeddings:
                </p>
                <div className="p-4 bg-[#faf8ff] rounded border border-[#eaedff] font-mono text-[12px] space-y-2">
                  <div className="text-[#0037b0] font-semibold">
                    ℒ_contrastive = 0.5 * (ℒ_img2text + ℒ_text2img)
                  </div>
                  <div className="text-[#434655]">
                    Sim(I_i, T_j) = (v_i · u_j) / (||v_i|| * ||u_j|| * τ)
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif text-[20px] text-[#131b2e] font-semibold">
                  Planned Evaluation Benchmarks
                </h3>
                <ul className="list-disc pl-5 text-[#434655] space-y-1 text-[14px]">
                  <li>Visual Question Answering (VQA v2 baseline).</li>
                  <li>Image-to-Text and Text-to-Image Retrieval (MS-COCO 5k split).</li>
                  <li>Zero-shot transfer accuracy on unseen category distributions.</li>
                </ul>
              </section>
            </div>

            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-[#eaedff] flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#515f74] text-white rounded text-[14px] font-semibold hover:bg-[#434655] transition-colors cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
