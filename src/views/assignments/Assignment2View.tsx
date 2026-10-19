import katex from 'katex';
import 'katex/dist/katex.min.css';
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
  Clock,
  CheckCircle2
} from 'lucide-react';
import { COURSE_INFO } from '../../data';
import { ViewType, ModalType } from '../../types';

interface AssignmentViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenModal?: (type: ModalType) => void;
}

// Helper components for crisp, publication-grade LaTeX math rendering via KaTeX
function MathBlock({ math }: { math: string }) {
  const html = katex.renderToString(math, { displayMode: true, throwOnError: false });
  return (
    <div 
      className="overflow-x-auto py-2.5 px-3 bg-[#f8faff] rounded-lg border border-[#e2e7ff] text-[#131b2e] my-2" 
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
}

function InlineMath({ math }: { math: string }) {
  const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
  return (
    <span 
      className="inline-block px-1 align-baseline text-[#0037b0]" 
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
}

export default function Assignment2View({ onNavigate }: AssignmentViewProps) {
  // Support Vite's configured base URL for static assets
  const base = ((import.meta as any).env?.BASE_URL || '/').replace(/\/$/, '') + '/';
  const getAssetUrl = (path: string) => `${base}${path.replace(/^\//, '')}`;

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] pb-24">
      {/* Top Breadcrumbs & Navigation Bar */}
      <div className="bg-white border-b border-[#eaedff] sticky top-16 z-30 shadow-xs">
        <div className="max-w-[1040px] mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
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

      <div className="max-w-[1040px] mx-auto px-4 lg:px-8 pt-8 space-y-8">
        
        {/* =========================================================================
            1. ASSIGNMENT TITLE & BASIC INFORMATION (Item 1, 2, 3)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-[#d5e3fc] text-[#001d31] font-mono text-[11px] font-semibold uppercase rounded">
              CO3133 Course Project · Assignment 02
            </span>
            <span className="px-2.5 py-1 bg-[#dcfce7] text-[#166534] font-mono text-[11px] font-semibold rounded flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Milestone 1: Dataset Proposal Complete
            </span>
            <span className="px-2.5 py-1 bg-[#e2e7ff] text-[#0037b0] font-mono text-[11px] font-medium rounded">
              Weight: 30%
            </span>
            <span className="px-2.5 py-1 bg-[#f2f3ff] text-[#515f74] font-mono text-[11px] font-medium rounded">
              Track: Monocular Depth Estimation
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-[28px] sm:text-[34px] font-medium text-[#131b2e] tracking-tight leading-snug">
              Assignment 2: Monocular Depth Estimation on SUN RGB-D
            </h1>
            <p className="text-[15px] text-[#0037b0] font-medium">
              Deep Learning on Large-Scale Indoor Metric Scenes (10,335 Aligned RGB-D Pairs)
            </p>
          </div>

          {/* Group Members & Instructor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#f2f3ff] text-[13px]">
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

            <div className="space-y-1">
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0037b0]" />
                <span>Milestone 1 (Proposal)</span>
              </span>
              <div className="font-semibold text-[#166534] flex items-center gap-1">
                <span>07 Oct 2026</span>
                <span className="text-[10px] bg-[#dcfce7] px-1.5 py-0.2 rounded font-mono font-bold">READY</span>
              </div>
              <div className="font-mono text-[11px] text-[#0037b0]">Weight: 15% of A2</div>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0037b0]" />
                <span>Milestone 3 (Final Release)</span>
              </span>
              <div className="font-semibold text-[#131b2e]">11 Nov 2026</div>
              <div className="font-mono text-[11px] text-[#0037b0]">Weight: 60% of A2</div>
            </div>
          </div>

          {/* Quick Deliverable Action Links */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <a
              href="https://github.com/colece/sunrgbd-depth-estimation"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg text-[13px] font-medium transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>A2 Source Code Repository</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </a>

            <a
              href="handbook-ene.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#f2f3ff] hover:bg-[#e6e8ff] text-[#434655] rounded-lg text-[13px] font-medium transition-colors border border-[#eaedff]"
            >
              <FileText className="w-4 h-4 text-[#0037b0]" />
              <span>Course Handbook (PDF)</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            4. PROBLEM STATEMENT (Item 4)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <BookOpen className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
              4. Problem Statement &amp; Mathematical Formulation
            </h2>
          </div>

          <div className="space-y-4 text-[14px] text-[#334155] leading-relaxed">
            <p>
              <strong>Monocular Depth Estimation (MDE)</strong> is the task of predicting a dense, continuous metric depth map 
              <InlineMath math="D \in \mathbb{R}^{H \times W \times 1}" /> 
              from a single monocular RGB optical image 
              <InlineMath math="I \in \mathbb{R}^{H \times W \times 3}" />. 
              Estimating 3D spatial depth from a single 2D projection is an ill-posed inverse problem because infinitely many 3D geometries can project onto the identical 2D image plane.
            </p>

            <div className="space-y-2">
              <span className="text-[13px] font-semibold text-[#131b2e] block">
                Mathematical Mapping &amp; Evaluation Domain:
              </span>
              <MathBlock math="f_\theta : \mathbb{R}^{H \times W \times 3} \longrightarrow \mathbb{R}^{H \times W \times 1}" />
              <MathBlock math="Z_{(u,v)} = \frac{\text{raw\_uint16}_{(u,v)}}{1000.0} \quad (\text{meters})" />
              <MathBlock math="\Omega = \left\{ (u, v) \;\middle|\; 0.5\,\text{m} < Z_{(u,v)} \le 8.0\,\text{m} \quad \text{and} \quad Z_{(u,v)} \text{ is finite} \right\}" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            5. DATASET PROPOSAL (Item 5) - FULL 11 MANDATORY REQUIREMENTS
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <Database className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                5. Dataset Proposal (11 Required Components)
              </h2>
            </div>
            <span className="px-2.5 py-1 bg-[#dcfce7] text-[#166534] font-mono text-[11px] font-bold rounded">
              Verified &amp; Complete
            </span>
          </div>

          <p className="text-[13.5px] text-[#475569] leading-relaxed">
            The dataset proposal complies with all 11 required items defined in Section 18 and Section 19.6 of the Course Guidelines:
          </p>

          <div className="space-y-6 text-[13.5px] text-[#334155]">
            
            {/* 1. Dataset name, source, version, license */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                1. Dataset Name, Source, Version, and License
              </h3>
              <p>
                <strong>Dataset Name:</strong> SUN RGB-D (A RGB-D Scene Understanding Benchmark Suite).
              </p>
              <p>
                <strong>Source:</strong> Princeton Vision &amp; Robotics Group (Xiao et al., CVPR 2015). Official URL: <a href="https://rgbd.cs.princeton.edu/" target="_blank" rel="noreferrer" className="text-[#0037b0] hover:underline font-mono text-[12px]">https://rgbd.cs.princeton.edu/</a>
              </p>
              <p>
                <strong>Version:</strong> v1.0 (with standardized coordinate systems and calibrated camera intrinsics).
              </p>
              <p>
                <strong>License:</strong> Open Access for academic research and educational coursework.
              </p>
            </div>

            {/* 2. Task, input, output */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                2. Task, Input, and Output Definitions
              </h3>
              <p>
                <strong>Task Type:</strong> Supervised Monocular Depth Estimation (Continuous Metric Depth Regression).
              </p>
              <p>
                <strong>Input Definition:</strong> Single optical RGB frame <InlineMath math="I \in \mathbb{R}^{H \times W \times 3}" />, resized to standardized resolution <InlineMath math="256 \times 320" />, normalized using ImageNet statistics (<InlineMath math="\mu = [0.485, 0.456, 0.406]" />, <InlineMath math="\sigma = [0.229, 0.224, 0.225]" />).
              </p>
              <p>
                <strong>Output Definition:</strong> Dense metric depth map <InlineMath math="D \in \mathbb{R}^{H \times W \times 1}" />, where each pixel <InlineMath math="(u, v)" /> specifies the orthogonal physical distance <InlineMath math="Z_{(u,v)}" /> in meters from the camera sensor plane to the visible object surface.
              </p>
            </div>

            {/* 3. Number of samples, annotations */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                3. Number of Samples and Annotation Types
              </h3>
              <p>
                <strong>Total Sample Count:</strong> <strong>10,335</strong> aligned RGB-Depth pairs. (Satisfies the course threshold requirement of <InlineMath math="\ge 5{,}000" /> samples).
              </p>
              <p>
                <strong>Sensor Diversity:</strong> Intel RealSense 3D (3,784 pairs), Asus Xtion (3,784 pairs), Microsoft Kinect v1 (1,449 pairs), Microsoft Kinect v2 (1,318 pairs).
              </p>
              <p>
                <strong>Annotation Format:</strong> 16-bit Lossless PNG (<code className="font-mono text-[12px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">uint16</code>). Metric depth is obtained via <InlineMath math="Z = \text{raw\_uint16} / 1000.0" /> (millimeter precision).
              </p>
            </div>

            {/* 4. Preliminary distribution analysis */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-3">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                4. Preliminary Distribution Analysis &amp; Empirical Evidence
              </h3>
              <p>
                Preliminary distribution analysis was conducted on representative samples to verify scale conversion, statistical stability, and sensor validity masks.
              </p>

              {/* Empirical metrics table */}
              <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
                <table className="w-full text-[13px] text-left">
                  <thead className="bg-[#f8faff] text-[#475569] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                    <tr>
                      <th className="px-4 py-2.5">Specification / Metric</th>
                      <th className="px-4 py-2.5">Empirical Value</th>
                      <th className="px-4 py-2.5">Compliance &amp; Analytical Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2f3ff] bg-white">
                    <tr>
                      <td className="px-4 py-2 font-medium">Total Benchmark Pairs</td>
                      <td className="px-4 py-2 font-mono text-[#0037b0] font-semibold">10,335 pairs</td>
                      <td className="px-4 py-2 text-[#166534] font-medium">Exceeds ≥ 5,000 requirement</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Mean Valid Depth</td>
                      <td className="px-4 py-2 font-mono">1.83 meters</td>
                      <td className="px-4 py-2 text-[#515f74]">Primary human working envelope in rooms</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Median Valid Depth</td>
                      <td className="px-4 py-2 font-mono">1.80 meters</td>
                      <td className="px-4 py-2 text-[#515f74]">Well-balanced distribution, robust to outliers</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Standard Deviation</td>
                      <td className="px-4 py-2 font-mono">0.66 meters</td>
                      <td className="px-4 py-2 text-[#515f74]">Consistent indoor spatial variance</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Effective Range [Min, Max]</td>
                      <td className="px-4 py-2 font-mono text-[#0037b0] font-semibold">[0.53m, 3.82m]</td>
                      <td className="px-4 py-2 text-[#166534] font-medium">Within standard [0.5m, 8.0m] indoor bounds</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Storage Format</td>
                      <td className="px-4 py-2 font-mono text-[#7e22ce]">16-bit PNG (uint16)</td>
                      <td className="px-4 py-2 text-[#515f74]">Lossless millimeter scale representation</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Sensor Invalid Pixel Ratio</td>
                      <td className="px-4 py-2 font-mono">~8.4% mean (raw)</td>
                      <td className="px-4 py-2 text-[#515f74]">Masked out during training &amp; metric calculation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Inline Figures with captions */}
              <div className="space-y-4 pt-2">
                <div className="bg-[#fcfcff] p-3 rounded-lg border border-[#eaedff] space-y-2">
                  <img
                    src={getAssetUrl('assignment2/figures/depth_and_invalid_distribution.png')}
                    alt="Depth and Invalid Distribution"
                    className="w-full rounded border border-[#eaedff]"
                  />
                  <p className="text-[12px] font-mono text-[#515f74] text-center">
                    Figure 1: Empirical Ground Truth Metric Depth Distribution (peak around 1.80m) and Missing Pixel Ratio.
                  </p>
                </div>

                <div className="bg-[#fcfcff] p-3 rounded-lg border border-[#eaedff] space-y-2">
                  <img
                    src={getAssetUrl('assignment2/figures/scene_distribution.png')}
                    alt="Scene Category Distribution"
                    className="w-full rounded border border-[#eaedff]"
                  />
                  <p className="text-[12px] font-mono text-[#515f74] text-center">
                    Figure 2: Scene Category Breakdown across 10,335 Pairs (Bedroom: 1,822, Office: 1,543, Living Room: 1,058, Classroom: 985, etc.).
                  </p>
                </div>

                <div className="bg-[#fcfcff] p-3 rounded-lg border border-[#eaedff] space-y-2">
                  <img
                    src={getAssetUrl('assignment2/figures/sample_triplets_evidence.png')}
                    alt="Qualitative Sample Triplets"
                    className="w-full rounded border border-[#eaedff]"
                  />
                  <p className="text-[12px] font-mono text-[#515f74] text-center">
                    Figure 3: Qualitative Triplets (Column 1: Input RGB Frame | Column 2: Continuous Metric Depth | Column 3: Binary Validity Mask).
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Data-splitting plan */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                5. Data-Splitting Plan
              </h3>
              <p>
                The benchmark is partitioned into three disjoint splits following the standard SUN RGB-D benchmark protocol:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1 text-[13px] text-[#475569]">
                <li><strong>Training Set:</strong> <strong>5,285 pairs</strong> (~51.1% of total, ~82.9% of train/val development pool). Satisfies the <InlineMath math="\ge 5{,}000" /> threshold on the training split alone.</li>
                <li><strong>Validation Set:</strong> <strong>1,090 pairs</strong> (~10.5% of total, ~17.1% of train/val development pool) for hyperparameter tuning and model checkpointing.</li>
                <li><strong>Test Set:</strong> <strong>3,960 pairs</strong> (~38.4% of total) for final unbiased evaluation.</li>
              </ul>
            </div>

            {/* 6. Split unit to prevent leakage */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                6. Split Unit Used to Prevent Data Leakage
              </h3>
              <p>
                <strong>Split Unit:</strong> <strong>Physical Scene / Room Identifier</strong> (<code className="font-mono text-[12px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">scene_id</code>).
              </p>
              <p>
                <strong>Rationale:</strong> Sequential frames captured within the same physical room share distinct structural features (wall color, furniture layout, lighting conditions). A random frame-level split would allow identical room geometry to appear in both training and test sets, causing artificial over-fitting (scene memorization rather than depth perception). By partitioning strictly by unique room ID, no room in the test set has ever been seen during training.
              </p>
            </div>

            {/* 7. Evaluation metrics WITH CRISP LATEX RENDERING */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-2">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                7. Evaluation Metric(s)
              </h3>
              <p>
                All metrics are computed exclusively over the valid evaluation domain 
                <InlineMath math="\Omega = \left\{ (u, v) \mid 0.5\,\text{m} < y_{(u,v)} \le 8.0\,\text{m} \right\}" />:
              </p>

              <div className="space-y-3 pt-1">
                <div>
                  <span className="text-[13px] font-semibold text-[#131b2e] block">
                    • Root Mean Squared Error (RMSE):
                  </span>
                  <MathBlock math="\text{RMSE} = \sqrt{\frac{1}{|\Omega|} \sum_{i \in \Omega} \left( y_i - \hat{y}_i \right)^2}" />
                </div>

                <div>
                  <span className="text-[13px] font-semibold text-[#131b2e] block">
                    • Mean Absolute Relative Error (AbsRel):
                  </span>
                  <MathBlock math="\text{AbsRel} = \frac{1}{|\Omega|} \sum_{i \in \Omega} \frac{\left| y_i - \hat{y}_i \right|}{y_i}" />
                </div>

                <div>
                  <span className="text-[13px] font-semibold text-[#131b2e] block">
                    • Threshold Accuracy (<InlineMath math="\delta_n" /> for <InlineMath math="n \in \{1, 2, 3\}" />):
                  </span>
                  <MathBlock math="\delta_n = \frac{1}{|\Omega|} \sum_{i \in \Omega} \mathbb{I} \left( \max\left( \frac{y_i}{\hat{y}_i}, \, \frac{\hat{y}_i}{y_i} \right) < 1.25^n \right)" />
                  <p className="text-[12px] text-[#64748b] mt-1 pl-1">
                    Evaluated at thresholds: <InlineMath math="\delta_1: \text{threshold} = 1.25" />, <InlineMath math="\delta_2: \text{threshold} = 1.25^2 = 1.5625" />, <InlineMath math="\delta_3: \text{threshold} = 1.25^3 \approx 1.953" />.
                  </p>
                </div>

                <div>
                  <span className="text-[13px] font-semibold text-[#131b2e] block">
                    • Scale-Invariant Logarithmic Error (SILog):
                  </span>
                  <MathBlock math="\text{SILog} = \sqrt{\frac{1}{|\Omega|} \sum_{i \in \Omega} d_i^2 - \frac{1}{|\Omega|^2} \left( \sum_{i \in \Omega} d_i \right)^2}, \quad \text{where } d_i = \log \hat{y}_i - \log y_i" />
                </div>
              </div>
            </div>

            {/* 8. Baseline plan */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                8. Baseline Plan
              </h3>
              <p>
                <strong>Tier 1 (Heuristic Baseline):</strong> Global Spatial Mean Depth Prior — predicts the empirical mean depth of the training corpus across all pixels to establish the absolute performance floor.
              </p>
              <p>
                <strong>Tier 2 (Neural Baseline):</strong> A lightweight UNet/FCN architecture trained completely from scratch (random weight initialization) using standard L1/L2 loss. This measures the empirical gain provided by deep representations without pretraining.
              </p>
            </div>

            {/* 9. Planned pretrained models */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                9. Planned Pretrained Model(s) &amp; Transfer Learning
              </h3>
              <p>
                <strong>Pretrained Backbone:</strong> MiDaS v3.1 / DPT (Dense Prediction Transformer) or FastDepth / MobileNetV3-Depth with ImageNet pretrained encoders.
              </p>
              <p>
                <strong>Fine-Tuning Strategy:</strong> Freeze early low-level convolutional/patch layers, fine-tuning the multiscale neck and decoder heads with Scale-Invariant Logarithmic Loss (<InlineMath math="\mathcal{L}_{\text{SiLog}}" />) and Edge Gradient Loss (<InlineMath math="\mathcal{L}_{\text{grad}}" />):
              </p>
              <MathBlock math="\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{SiLog}} + 0.5 \cdot \mathcal{L}_{\text{grad}} + 0.1 \cdot \mathcal{L}_{\text{SSIM}}" />
            </div>

            {/* 10. Compute estimate */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                10. Compute &amp; Hardware Estimation
              </h3>
              <p>
                <strong>Hardware Environment:</strong> Standard Google Colab (Free Tier) — 1x NVIDIA Tesla T4 GPU (15 GB VRAM), 12.7 GB Host RAM.
              </p>
              <p>
                <strong>Memory Budget:</strong> ~5.2 GB – 6.0 GB VRAM allocation at batch size 16 (input resolution 256×320).
              </p>
              <p>
                <strong>Training Throughput:</strong> ~12 ms per step → ~10–11 minutes per epoch on 5,285 training pairs.
              </p>
              <p>
                <strong>Total Expected Runtime:</strong> ~2.5 to 3.5 hours for 15–20 epochs (safely completes within Colab's standard 12-hour session limit).
              </p>
            </div>

            {/* 11. Subset selection rules */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                11. Subset Selection Rules &amp; Quality Filtering
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-1 text-[13px] text-[#475569]">
                <li><strong>Sensor Range Cutoff:</strong> Enforce strict indoor depth bounds: <InlineMath math="0.5\,\text{m} \le Z \le 8.0\,\text{m}" />. Out-of-range pixels and sensor occlusions (<InlineMath math="Z = 0" />) are flagged via boolean validity masks.</li>
                <li><strong>Camera Intrinsics Validity:</strong> Only frames with verified calibration intrinsic matrices (<InlineMath math="K" /> matrix) are retained to guarantee correct metric geometry.</li>
                <li><strong>Aspect Ratio Standard:</strong> Input frames from diverse sensors are bilinearly interpolated to a standard <InlineMath math="256 \times 320" /> resolution.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* =========================================================================
            6. METHODOLOGY (Item 6)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-3">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <GitBranch className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              6. Methodology Roadmap
            </h2>
          </div>
          <p className="text-[13.5px] text-[#475569] leading-relaxed">
            The planned pipeline adopts a two-stage transfer learning methodology: Stage 1 fine-tunes the decoder while keeping early backbone weights frozen; Stage 2 unfreezes top encoder blocks with a reduced learning rate and Cosine Annealing schedule.
          </p>
        </div>

        {/* =========================================================================
            7. EXPERIMENTAL SETUP (Item 7)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-3">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Cpu className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              7. Experimental Setup &amp; Planned Ablations
            </h2>
          </div>
          <p className="text-[13.5px] text-[#475569] leading-relaxed">
            Controlled experiments will evaluate: (1) Standard MSE Loss vs. Scale-Invariant Logarithmic (SiLog) Loss; (2) Performance comparison between Scratch UNet Baseline and Pretrained Vision Transformer; (3) Inference latency on mobile CPU vs. T4 GPU.
          </p>
        </div>

        {/* =========================================================================
            8 - 11. ROADMAP PLACEHOLDERS FOR MILESTONE 2 & 3
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-[#eaedff] shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-[14px] font-semibold text-[#131b2e]">
              <BarChart3 className="w-4 h-4 text-[#0037b0]" />
              <span>8. Results &amp; Quantitative Benchmark</span>
            </div>
            <p className="text-[12.5px] text-[#64748b]">
              Quantitative test evaluation across 3,960 test pairs (RMSE, AbsRel, δ_1) will be documented upon experimental completion.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#eaedff] shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-[14px] font-semibold text-[#131b2e]">
              <Layers className="w-4 h-4 text-[#0037b0]" />
              <span>9. Comparison and Discussion</span>
            </div>
            <p className="text-[12.5px] text-[#64748b]">
              Ablation analysis comparing architectural trade-offs, inference throughput, and depth resolution will follow Milestone 2.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#eaedff] shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-[14px] font-semibold text-[#131b2e]">
              <AlertCircle className="w-4 h-4 text-[#0037b0]" />
              <span>10. Error Analysis</span>
            </div>
            <p className="text-[12.5px] text-[#64748b]">
              Qualitative inspection of failure modes (transparent glass surfaces, dark boundaries, reflective mirrors).
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#eaedff] shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-[14px] font-semibold text-[#131b2e]">
              <HelpCircle className="w-4 h-4 text-[#0037b0]" />
              <span>11. Limitations and Conclusion</span>
            </div>
            <p className="text-[12.5px] text-[#64748b]">
              Discussion on indoor-to-outdoor domain shift limitations and concluding remarks for Assignment 2.
            </p>
          </div>
        </div>

        {/* =========================================================================
            12. LINK TO SOURCE CODE (Item 12)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-3">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Github className="w-4 h-4 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              12. Link to Source Code
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] text-[13px] gap-2">
            <span className="text-[#434655]">Assignment 2 GitHub Repository:</span>
            <a
              href="https://github.com/colece/sunrgbd-depth-estimation"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-[#0037b0] hover:underline font-mono text-[12px] font-semibold"
            >
              <span>https://github.com/colece/sunrgbd-depth-estimation</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            13. LINK TO CHECKPOINTS OR REPRODUCTION (Item 13)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-3">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Terminal className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              13. Link to Checkpoint(s) &amp; Reproduction Instructions
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] text-[13px] text-[#475569] space-y-2">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block">
              Repository Setup &amp; Reproduction:
            </span>
            <div className="p-3 bg-[#1e293b] text-[#f8fafc] font-mono text-[12px] rounded-lg overflow-x-auto">
              <code>git clone https://github.com/colece/sunrgbd-depth-estimation.git &amp;&amp; cd sunrgbd-depth-estimation</code>
            </div>
            <p className="text-[12px] text-[#64748b]">
              Model weight checkpoints (.pth) will be linked here upon final milestone release.
            </p>
          </div>
        </div>

        {/* =========================================================================
            14. LINK TO REPORT / SLIDES (Item 14)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-3">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <FileText className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              14. Link to Report / Slides
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            Technical report (PDF) and presentation slides will be attached here prior to the Milestone 3 deadline.
          </div>
        </div>

        {/* =========================================================================
            15. LINK TO YOUTUBE PRESENTATION VIDEO (Item 15)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-3">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Video className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              15. Link to YouTube Presentation Video
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            Presentation video will be published on YouTube adhering to title format: <code className="font-mono text-[11px] bg-[#f2f3ff] px-1.5 py-0.5 rounded text-[#131b2e]">CO3133-Semester-261 – Group 2352821 – Assignment 2</code>.
          </div>
        </div>

        {/* =========================================================================
            16. ASSIGNMENT-SPECIFIC AI USAGE DISCLOSURE (Item 16)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-3">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <ShieldCheck className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              16. Assignment-Specific AI Usage Disclosure
            </h2>
          </div>
          <div className="p-4 bg-[#f8faff] rounded-lg border border-[#d9e2ff] text-[13px] text-[#334155] space-y-2">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block">
              AI Tools Disclosure Statement:
            </span>
            <p>
              Google Antigravity IDE (Gemini 3.8 Flash) was employed as an interactive coding assistant for vectorizing 16-bit PNG depth map decoding scripts, debugging memory allocation on Google Colab, and assembling TypeScript/Vite presentation components. All mathematical loss formulations, dataset splitting logic, and empirical conclusions were verified independently according to course instructions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
