import katex from 'katex';
import 'katex/dist/katex.min.css';
import { 
  ArrowLeft,
  Download, 
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
  CheckCircle2,
  Award,
  Zap,
  Sliders,
  Eye,
  TrendingUp,
  Gauge,
  Code,
  FileCode,
  Check,
  Activity
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
            <span className="px-2.5 py-1 bg-[#e2e7ff] text-[#0037b0] font-mono text-[11px] font-medium rounded">
              Track: Monocular Depth Estimation
            </span>
            <span className="px-2.5 py-1 bg-[#f2f3ff] text-[#515f74] font-mono text-[11px] font-medium rounded">
              SUN RGB-D Benchmark (10,335 Pairs)
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
              href="https://github.com/nguyendangcole/nguyen-assignment2-deeplearning"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg text-[13px] font-medium transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
            </a>

            <div
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#f8faff] text-[#515f74] rounded-lg text-[13px] font-medium border border-[#eaedff]"
              title="Technical report PDF will be uploaded for Milestone 3"
            >
              <FileText className="w-4 h-4 text-[#0037b0]" />
              <span>Report (PDF)</span>
              <span className="text-[10px] font-mono bg-[#e2e7ff] text-[#0037b0] px-1.5 py-0.2 rounded font-semibold">Upcoming</span>
            </div>

            <div
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#f8faff] text-[#515f74] rounded-lg text-[13px] font-medium border border-[#eaedff]"
              title="Presentation slides will be uploaded for Milestone 3"
            >
              <FileText className="w-4 h-4 text-[#0037b0]" />
              <span>Slides (PDF)</span>
              <span className="text-[10px] font-mono bg-[#e2e7ff] text-[#0037b0] px-1.5 py-0.2 rounded font-semibold">Upcoming</span>
            </div>

            <div
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#f8faff] text-[#515f74] rounded-lg text-[13px] font-medium border border-[#eaedff]"
              title="Presentation video will be published on YouTube for Milestone 3"
            >
              <Video className="w-4 h-4 text-[#ff0000]" />
              <span>YouTube Video</span>
              <span className="text-[10px] font-mono bg-[#e2e7ff] text-[#0037b0] px-1.5 py-0.2 rounded font-semibold">Upcoming</span>
            </div>
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
              <MathBlock math="Z_{(u,v)} = \frac{(D_{(u,v)} \gg 3) \mid (D_{(u,v)} \ll 13)}{1000.0} \quad (\text{meters})" />
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
                <strong>Annotation Format &amp; Decoding:</strong> 16-bit Lossless PNG (<code className="font-mono text-[12px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">uint16</code>). Metric ground truth is restored from the color-guided bilateral inpainted stream (<code className="font-mono text-[12px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">depth_bfx/</code>) using bit-shift cyclic restoration: <InlineMath math="Z = \frac{(D \gg 3) \mid (D \ll 13)}{1000.0} \quad (\text{meters})" /> to eliminate specular reflection blind spots.
              </p>
            </div>

            {/* 4. Preliminary distribution analysis */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-semibold text-[15px] text-[#131b2e]">
                  4. Preliminary Distribution Analysis &amp; Empirical Evidence
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={getAssetUrl('assignment2/preliminary_metrics_summary.csv')}
                    download="preliminary_metrics_summary.csv"
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#0037b0] rounded text-[11px] font-mono font-medium border border-[#eaedff] transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    <span>metrics_summary.csv</span>
                  </a>
                  <a
                    href={getAssetUrl('assignment2/sunrgbd_manifest_10335.csv')}
                    download="sunrgbd_manifest_10335.csv"
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#0037b0] rounded text-[11px] font-mono font-medium border border-[#eaedff] transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    <span>manifest_10335.csv</span>
                  </a>
                </div>
              </div>
              <p>
                Preliminary distribution analysis was conducted across all 10,335 pairs in the benchmark to verify physical scale conversion, central tendency, scene composition, and sensor missing rate characteristics.
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
                      <td className="px-4 py-2 text-[#166534] font-medium">Official SUN RGB-D benchmark size</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Analyzed Dataset Corpus</td>
                      <td className="px-4 py-2 font-mono text-[#0037b0] font-semibold">10,335 pairs</td>
                      <td className="px-4 py-2 text-[#166534] font-medium">100% full benchmark (Exceeds ≥ 5,000 requirement)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Mean Valid Depth</td>
                      <td className="px-4 py-2 font-mono">2.38 meters</td>
                      <td className="px-4 py-2 text-[#515f74]">Primary human working envelope in indoor rooms</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Median Valid Depth</td>
                      <td className="px-4 py-2 font-mono">2.08 meters</td>
                      <td className="px-4 py-2 text-[#515f74]">Well-balanced distribution, robust central tendency</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Standard Deviation</td>
                      <td className="px-4 py-2 font-mono">1.20 meters</td>
                      <td className="px-4 py-2 text-[#515f74]">Consistent indoor spatial variance across scenes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Effective Range [Min, Max]</td>
                      <td className="px-4 py-2 font-mono text-[#0037b0] font-semibold">[0.50m, 8.00m]</td>
                      <td className="px-4 py-2 text-[#166534] font-medium">Covers standard [0.5m, 8.0m] Section 19.6 indoor bounds</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Storage &amp; Bit-Shift Decode</td>
                      <td className="px-4 py-2 font-mono text-[#7e22ce]">16-bit PNG (Lossless uint16)</td>
                      <td className="px-4 py-2 text-[#515f74]">Restored via Z = ((raw &gt;&gt; 3) | (raw &lt;&lt; 13)) / 1000.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Sensor Invalid Pixel Ratio</td>
                      <td className="px-4 py-2 font-mono text-[#166534] font-semibold">0.43% mean (Refined depth_bfx, down from 15.77% raw) (Max 52.36%)</td>
                      <td className="px-4 py-2 text-[#515f74]">Dynamically masked out via valid_mask during training</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Raw Sensor vs Inpainted Target Comparison Table */}
              <div className="bg-[#fcfcff] p-4 rounded-xl border border-[#dce3f9] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#0037b0] bg-[#eef4ff] px-2 py-0.5 rounded">
                      Empirical Investigation
                    </span>
                    <span className="text-[13.5px] font-semibold text-[#131b2e]">
                      Raw Sensor Depth (<code className="font-mono text-[11.5px] text-[#515f74]">depth/</code>) vs. Refined Inpainted Target (<code className="font-mono text-[11.5px] text-[#0037b0]">depth_bfx/</code>)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#166534] bg-[#dcfce7] px-2 py-0.5 rounded font-semibold w-fit">
                    10,335 Pairs Analyzed
                  </span>
                </div>

                <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
                  <table className="w-full text-[12.5px] text-left">
                    <thead className="bg-[#f8faff] text-[#475569] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                      <tr>
                        <th className="px-3.5 py-2">Empirical Metric</th>
                        <th className="px-3.5 py-2 text-[#b45309]">Raw Depth (depth/)</th>
                        <th className="px-3.5 py-2 text-[#166534]">Refined Inpainted Depth (depth_bfx/)</th>
                        <th className="px-3.5 py-2">Physical Phenomenon &amp; Training Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f2f3ff] bg-white">
                      <tr>
                        <td className="px-3.5 py-2 font-medium">Mean Invalid Pixel Ratio</td>
                        <td className="px-3.5 py-2 font-mono text-[#b45309]">15.77%</td>
                        <td className="px-3.5 py-2 font-mono text-[#166534] font-bold">0.43% (↓ 36.7× reduction)</td>
                        <td className="px-3.5 py-2 text-[#515f74]">Effectively eliminates sensor blind spots caused by specular reflections on tinted glass, mirrors, and reflective surfaces</td>
                      </tr>
                      <tr>
                        <td className="px-3.5 py-2 font-medium">Max Observed Invalid Ratio</td>
                        <td className="px-3.5 py-2 font-mono text-[#b45309]">71.30%</td>
                        <td className="px-3.5 py-2 font-mono text-[#166534] font-bold">52.36%</td>
                        <td className="px-3.5 py-2 text-[#515f74]">Smoothly infills large window apertures and strong ambient infrared interference zones</td>
                      </tr>
                      <tr>
                        <td className="px-3.5 py-2 font-medium">Mean Valid Depth</td>
                        <td className="px-3.5 py-2 font-mono">2.29 m</td>
                        <td className="px-3.5 py-2 font-mono font-medium text-[#131b2e]">2.38 m</td>
                        <td className="px-3.5 py-2 text-[#515f74]">Spans standard Section 19.6 indoor evaluation range [0.5m – 8.0m]</td>
                      </tr>
                      <tr>
                        <td className="px-3.5 py-2 font-medium">Median Valid Depth</td>
                        <td className="px-3.5 py-2 font-mono">2.04 m</td>
                        <td className="px-3.5 py-2 font-mono font-medium text-[#131b2e]">2.08 m</td>
                        <td className="px-3.5 py-2 text-[#515f74]">Robust central tendency centered around human working envelope and interior furniture</td>
                      </tr>
                      <tr>
                        <td className="px-3.5 py-2 font-medium">Standard Deviation (Std Dev)</td>
                        <td className="px-3.5 py-2 font-mono">1.08 m</td>
                        <td className="px-3.5 py-2 font-mono font-medium text-[#131b2e]">1.20 m</td>
                        <td className="px-3.5 py-2 text-[#515f74]">Consistent spatial dispersion across diverse room categories</td>
                      </tr>
                      <tr>
                        <td className="px-3.5 py-2 font-medium">Training Supervision Density</td>
                        <td className="px-3.5 py-2 font-mono text-[#b45309]">Sparse / Hole-ridden (84.23%)</td>
                        <td className="px-3.5 py-2 font-mono text-[#166534] font-bold">Dense Continuous (99.57%)</td>
                        <td className="px-3.5 py-2 text-[#166534] font-medium">Provides dense gradient supervision along crisp object boundaries for both CNN and ViT</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                    Figure 1: Empirical Ground Truth Metric Depth Distribution (peak around 2.08m - 2.38m) and Missing Pixel Ratio (0.43% mean across full 10,335 benchmark pairs with depth_bfx).
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
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-2">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                5. Data-Splitting Plan
              </h3>
              <p>
                The benchmark is partitioned into three disjoint splits strictly based on unique Room/Scene IDs to satisfy the course guideline (<InlineMath math="\ge 5{,}000" /> training pairs) while completely preventing data leakage:
              </p>
              <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
                <table className="w-full text-[12.5px] text-left">
                  <thead className="bg-[#f8faff] text-[#475569] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                    <tr>
                      <th className="px-3.5 py-2">Dataset Split</th>
                      <th className="px-3.5 py-2">Number of Pairs</th>
                      <th className="px-3.5 py-2">Ratio (%)</th>
                      <th className="px-3.5 py-2">Operational Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2f3ff] bg-white">
                    <tr>
                      <td className="px-3.5 py-2 font-semibold text-[#0037b0]">Train Set</td>
                      <td className="px-3.5 py-2 font-mono font-bold text-[#131b2e]">7,751 pairs</td>
                      <td className="px-3.5 py-2 font-mono">~75.0%</td>
                      <td className="px-3.5 py-2 text-[#166534] font-medium">Gradient descent optimization (exceeds the ≥ 5,000 sample requirement)</td>
                    </tr>
                    <tr>
                      <td className="px-3.5 py-2 font-semibold text-[#0284c7]">Validation Set</td>
                      <td className="px-3.5 py-2 font-mono font-bold text-[#131b2e]">1,550 pairs</td>
                      <td className="px-3.5 py-2 font-mono">~15.0%</td>
                      <td className="px-3.5 py-2 text-[#515f74]">Hyperparameter tuning, SILog validation monitoring, and Early Stopping</td>
                    </tr>
                    <tr>
                      <td className="px-3.5 py-2 font-semibold text-[#7e22ce]">Test Set</td>
                      <td className="px-3.5 py-2 font-mono font-bold text-[#131b2e]">1,034 pairs</td>
                      <td className="px-3.5 py-2 font-mono">~10.0%</td>
                      <td className="px-3.5 py-2 text-[#515f74]">Final unbiased generalization evaluation across unseen rooms</td>
                    </tr>
                    <tr className="bg-[#f8faff] font-semibold">
                      <td className="px-3.5 py-2 text-[#131b2e]">Total Benchmark Corpus</td>
                      <td className="px-3.5 py-2 font-mono text-[#0037b0]">10,335 pairs</td>
                      <td className="px-3.5 py-2 font-mono">100.0%</td>
                      <td className="px-3.5 py-2 text-[#166534]">100% full SUN RGB-D benchmark</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[12px] text-[#64748b]">
                <em>Note:</em> The legacy Princeton official benchmark split (5,285 train / 1,090 val / 3,960 test) is also fully indexed in our manifest for secondary cross-paper comparability.
              </p>
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

            {/* 8. Baseline & Model Progression Plan (3 Core Experiments) */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-3">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                8. Baseline &amp; Controlled Experiments Plan (E0, E1, E2, E3)
              </h3>
              <p>
                To rigorously investigate the representation capacity of classical convolutional networks against foundation Vision Transformers on real-world indoor scenes, the experimental pipeline is structured into four controlled ablation studies (E0, E1, E2, E3):
              </p>

              {/* Experiment Table */}
              <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
                <table className="w-full text-[13px] text-left">
                  <thead className="bg-[#f8faff] text-[#475569] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                    <tr>
                      <th className="px-4 py-2.5">Experiment</th>
                      <th className="px-4 py-2.5">Model Architecture</th>
                      <th className="px-4 py-2.5">Training Strategy</th>
                      <th className="px-4 py-2.5">Scientific Purpose &amp; Rationale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2f3ff] bg-white">
                    <tr>
                      <td className="px-4 py-2.5 font-mono font-bold text-[#b45309]">E0</td>
                      <td className="px-4 py-2.5 font-medium text-[#131b2e]">Depth Anything V2 (Small - ViT)</td>
                      <td className="px-4 py-2.5 font-mono text-[12px] text-[#b45309]">Pretrained Inference (Zero-shot)</td>
                      <td className="px-4 py-2.5 text-[#515f74]">Measures out-of-distribution zero-shot generalization without any training on SUN RGB-D. Serves as reference floor to quantify fine-tuning gains.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-mono font-bold text-[#0037b0]">E1</td>
                      <td className="px-4 py-2.5 font-medium text-[#131b2e]">Simple CNN Encoder–Decoder (UNet Baseline)</td>
                      <td className="px-4 py-2.5 font-mono text-[12px] text-[#7e22ce]">From scratch (Random Init)</td>
                      <td className="px-4 py-2.5 text-[#515f74]">Establishes the empirical baseline floor without external pretraining. Measures pure convolutional feature learning from raw SUN RGB-D pixels.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-mono font-bold text-[#0284c7]">E2</td>
                      <td className="px-4 py-2.5 font-medium text-[#131b2e]">Depth Anything V2 (Small - ViT)</td>
                      <td className="px-4 py-2.5 font-mono text-[12px] text-[#0284c7]">Freeze encoder, train depth head only</td>
                      <td className="px-4 py-2.5 text-[#515f74]">Linear probing / Feature extraction. Evaluates how well general-purpose pre-trained Vision Transformer representations transfer to metric indoor depth regression.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-mono font-bold text-[#166534]">E3</td>
                      <td className="px-4 py-2.5 font-medium text-[#131b2e]">Depth Anything V2 (Small - ViT)</td>
                      <td className="px-4 py-2.5 font-mono text-[12px] text-[#166534]">Fine-tune encoder + depth head</td>
                      <td className="px-4 py-2.5 text-[#515f74]">Full end-to-end domain adaptation with Cosine Annealing scheduler. Maximizes metric boundary accuracy and minimizes RMSE across complex indoor layouts.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 9. Loss Function & Optimization */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-2">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                9. Loss Function &amp; Optimization Strategy
              </h3>
              <p>
                All models are optimized on the dynamic validity domain <InlineMath math="\Omega = \{(u,v) \mid 0.5 < y_{(u,v)} \le 8.0\}" /> using a combined Scale-Invariant Logarithmic (SILog) Loss and Edge Gradient Loss to enforce crisp object boundaries:
              </p>
              <MathBlock math="\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{SILog}} + 0.5 \cdot \mathcal{L}_{\text{grad}}" />
              <p className="text-[12.5px] text-[#64748b]">
                Optimizer: AdamW (<InlineMath math="\beta_1 = 0.9, \beta_2 = 0.999" />, weight decay <InlineMath math="10^{-4}" />) paired with Cosine Annealing learning rate schedule and FP16 Mixed Precision (<code className="font-mono text-[11.5px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">torch.cuda.amp.autocast</code>).
              </p>
            </div>

            {/* 10. Compute estimate */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                10. Compute &amp; Hardware Estimation
              </h3>
              <p>
                <strong>Hardware Environment:</strong> Google Colab Pro — 1x NVIDIA L4 GPU (24 GB VRAM - Ada Lovelace) or NVIDIA Tesla T4 GPU (15 GB VRAM).
              </p>
              <p>
                <strong>Memory Budget:</strong> ~5.8 GB – 6.4 GB VRAM allocation at batch size 16 (input resolution 256×320).
              </p>
              <p>
                <strong>Training Throughput:</strong> ~35–45 seconds per epoch on NVIDIA L4 (~1.2 min per epoch on T4).
              </p>
              <p>
                <strong>Persistent Storage:</strong> Full 6.5 GB dataset archive stored permanently on Google Drive at <code className="font-mono text-[12px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">MyDrive/BTL-deep_learning/assignment2/datasets/SUNRGBD.zip</code>, unzipped locally to Colab SSD for maximum I/O throughput.
              </p>
            </div>

            {/* 11. Subset selection rules */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-1">
              <h3 className="font-semibold text-[15px] text-[#131b2e]">
                11. Subset Selection Rules &amp; Quality Filtering
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-1 text-[13px] text-[#475569]">
                <li><strong>Zero-Drop Strategy with Dynamic Masking:</strong> Retains 100% of the 10,335 analyzed pairs. Missing/invalid depth values (sensor parallax, reflective mirrors, transparent glass) are masked dynamically via boolean validity tensor: <InlineMath math="\text{valid\_mask} = (Z > 0.5) \land (Z \le 8.0) \land \text{isfinite}(Z)" /> during backpropagation.</li>
                <li><strong>Physical Scale &amp; Bit-Shift Decode:</strong> Raw 16-bit PNG depth maps from Princeton are decoded via cyclic 3-bit restoration: <InlineMath math="Z = ((D \gg 3) \mid (D \ll 13)) / 1000.0" /> before normalization.</li>
                <li><strong>Resolution Standardization:</strong> All camera streams (Intel RealSense, Asus Xtion, Kinect v1/v2) are interpolated to a standard <InlineMath math="256 \times 320" /> training resolution.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* =========================================================================
            6. METHODOLOGY & MODEL ARCHITECTURES (Course Criteria 1, 2, 3)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <GitBranch className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                6. Methodology &amp; Model Architectures (Criteria 1, 2, 3)
              </h2>
            </div>
            <span className="px-2.5 py-1 bg-[#dcfce7] text-[#166534] font-mono text-[11px] font-bold rounded">
              Criterion 1, 2, 3 Fulfilled
            </span>
          </div>

          <div className="space-y-6 text-[14px] text-[#334155] leading-relaxed">
            <p>
              To tackle the ill-posed monocular depth estimation problem on real-world indoor scenes, our methodology directly addresses the course requirements by developing: (1) a dedicated from-scratch convolutional baseline; (2) a state-of-the-art pretrained Vision Transformer foundation model; and (3) a principled fine-tuning procedure tailored to metric depth recovery.
            </p>

            {/* Sub-section 6.1: Simple Baseline */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[16px] text-[#131b2e] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#f1f5f9] text-[#475569] font-mono text-[12px] font-bold flex items-center justify-center">
                    1
                  </span>
                  <span>Simple Baseline Model: Custom CNN U-Net (E1)</span>
                </h3>
                <span className="px-2 py-0.5 bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0] font-mono text-[11px] rounded font-semibold">
                  Trained From Scratch (7.8M params)
                </span>
              </div>
              <p>
                As required by <strong>Criterion 1 (Simple Baseline)</strong>, we designed a classical 4-stage convolutional Encoder–Decoder architecture with symmetric skip connections, initialized completely from scratch with no pre-trained weights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] bg-[#f8faff] p-4 rounded-lg border border-[#eaedff]">
                <div className="space-y-1.5">
                  <span className="font-semibold text-[#131b2e] block">Architectural Specifications:</span>
                  <ul className="list-disc list-inside space-y-1 text-[#475569]">
                    <li><strong>Encoder:</strong> 4 stages with DoubleConv blocks <code className="font-mono text-[11.5px] bg-[#eef2ff] px-1 py-0.5 rounded text-[#0037b0]">[Conv2d 3x3 → BatchNorm → ReLU]</code> doubling channel width: 3 → 32 → 64 → 128 → 256.</li>
                    <li><strong>Downsampling:</strong> 2×2 Max Pooling with stride 2 between stages.</li>
                    <li><strong>Bottleneck:</strong> Central feature representation with 512 feature channels.</li>
                    <li><strong>Decoder:</strong> 4 upsampling stages using Bilinear interpolation / Transposed convolutions, concatenating low-level spatial skip features from corresponding encoder stages.</li>
                    <li><strong>Output Head:</strong> Final 1×1 convolution with Sigmoid scaling mapped to continuous metric depth bounds <InlineMath math="[0.5\,\text{m}, \, 8.0\,\text{m}]" />.</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <span className="font-semibold text-[#131b2e] block">Baseline Operational Purpose:</span>
                  <p className="text-[#475569]">
                    Establishes the true empirical lower bound of monocular depth estimation when an architecture must learn 3D projective geometry purely from scratch on SUN RGB-D. It provides the reference against which the feature transfer and representation gains of foundation models are benchmarked.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#515f74] block">Complexity: 7,832,129 trainable parameters | 18.2 GFLOPs at 256×320</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-section 6.2: Pretrained / Modern Model */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[16px] text-[#131b2e] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#e0f2fe] text-[#0369a1] font-mono text-[12px] font-bold flex items-center justify-center">
                    2
                  </span>
                  <span>Modern Foundation Model: Depth Anything V2 (Small - ViT-S)</span>
                </h3>
                <span className="px-2 py-0.5 bg-[#dcfce7] text-[#166534] border border-[#bbf7d0] font-mono text-[11px] rounded font-semibold">
                  Pretrained Foundation Model (24.8M params)
                </span>
              </div>
              <p>
                In accordance with <strong>Criterion 2 (Pretrained or Modern Model)</strong>, we employ <strong>Depth Anything V2</strong> (Small variant), a state-of-the-art foundation model designed for robust monocular depth estimation across diverse visual distributions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] bg-[#f8faff] p-4 rounded-lg border border-[#eaedff]">
                <div className="space-y-1.5">
                  <span className="font-semibold text-[#131b2e] block">Vision Transformer (ViT-S) Backbone:</span>
                  <p className="text-[#475569]">
                    Comprises 12 transformer encoder blocks with 384 hidden dimension and 6 multi-head self-attention heads (24.8M parameters). Images are split into <InlineMath math="14 \times 14" /> non-overlapping patches. Global self-attention enables the model to resolve large-scale room structures (ceiling-floor planes, long corridors) that fall outside the local receptive field of classical CNNs.
                  </p>
                  <span className="text-[11.5px] font-mono text-[#0037b0] block">Pretraining: Trained on 62M synthetic images + Hypersim indoor metric depth.</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-semibold text-[#131b2e] block">Dense Prediction Transformer (DPT) Head:</span>
                  <p className="text-[#475569]">
                    Hooks intermediate feature representations at transformer layers 3, 6, 9, and 12. Multi-scale token features are reassembled via convolutional projection into pyramid feature maps at scales <InlineMath math="1/4, 1/8, 1/16, 1/32" /> and progressively fused via Residual Convolutional Units (RCU) into crisp, high-resolution metric depth maps.
                  </p>
                  <span className="text-[11.5px] font-mono text-[#166534] block">Head Capacity: ~3.2M parameters optimized for dense metric regression.</span>
                </div>
              </div>
            </div>

            {/* Sub-section 6.3: Clear Fine-Tuning Procedure */}
            <div className="border-l-2 border-[#0037b0] pl-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[16px] text-[#131b2e] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#fef3c7] text-[#92400e] font-mono text-[12px] font-bold flex items-center justify-center">
                    3
                  </span>
                  <span>Clear Fine-Tuning Procedure</span>
                </h3>
                <span className="px-2 py-0.5 bg-[#fef3c7] text-[#92400e] border border-[#fde68a] font-mono text-[11px] rounded font-semibold">
                  Criterion 3 Fulfilled
                </span>
              </div>
              <p>
                Fine-tuning foundation depth models requires balancing preservation of general visual representations against adaptation to specific sensor metrics. Our procedure enforces four critical components:
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-[#fcfcff] p-3.5 rounded-lg border border-[#eaedff] space-y-1.5">
                  <span className="font-semibold text-[13.5px] text-[#131b2e] flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-[#0037b0]" />
                    <span>A. Differential Learning Rates (Discriminative Layer Tuning)</span>
                  </span>
                  <p className="text-[13px] text-[#475569]">
                    To avoid catastrophic forgetting of rich pre-trained features, we decouple learning rates between the transformer backbone and the depth head:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12.5px] font-mono pt-1">
                    <div className="p-2 bg-[#f2f3ff] rounded border border-[#d0d7ff] text-[#0037b0]">
                      <span className="font-bold">ViT-S Backbone:</span> lr = 1e-5 (Preserves generalized visual priors)
                    </div>
                    <div className="p-2 bg-[#dcfce7] rounded border border-[#bbf7d0] text-[#166534]">
                      <span className="font-bold">DPT Depth Head:</span> lr = 1e-4 (10× faster adaptation to indoor metrics)
                    </div>
                  </div>
                </div>

                <div className="bg-[#fcfcff] p-3.5 rounded-lg border border-[#eaedff] space-y-1.5">
                  <span className="font-semibold text-[13.5px] text-[#131b2e] flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#0037b0]" />
                    <span>B. Combined SILog + Gradient Edge Loss Function</span>
                  </span>
                  <p className="text-[13px] text-[#475569]">
                    Depth errors are supervised dynamically only over valid pixels <InlineMath math="\Omega = \{(u,v) \mid 0.5 < Z_{(u,v)} \le 8.0 \land \text{isfinite}(Z_{(u,v)})\}" />:
                  </p>
                  <MathBlock math="\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{SILog}} + 0.5 \cdot \mathcal{L}_{\text{grad}}" />
                  <div className="space-y-2 text-[12.5px] text-[#475569] pt-1">
                    <p>
                      <strong>1. Scale-Invariant Logarithmic (SILog) Loss:</strong> Penalizes relative depth errors while being invariant to global lighting and scale offsets (<InlineMath math="d_i = \log \hat{y}_i - \log y_i" />):
                    </p>
                    <MathBlock math="\mathcal{L}_{\text{SILog}} = \sqrt{\frac{1}{|\Omega|} \sum_{i \in \Omega} d_i^2 - \frac{\alpha}{|\Omega|^2} \left( \sum_{i \in \Omega} d_i \right)^2}, \quad \text{with } \alpha = 0.5" />
                    <p>
                      <strong>2. Gradient Edge Loss:</strong> Penalizes high-frequency boundary blurring by computing horizontal and vertical spatial Sobel differences:
                    </p>
                    <MathBlock math="\mathcal{L}_{\text{grad}} = \frac{1}{|\Omega|} \sum_{i \in \Omega} \left( \left| \nabla_x \hat{y}_i - \nabla_x y_i \right| + \left| \nabla_y \hat{y}_i - \nabla_y y_i \right| \right)" />
                  </div>
                </div>

                <div className="bg-[#fcfcff] p-3.5 rounded-lg border border-[#eaedff] space-y-1.5">
                  <span className="font-semibold text-[13.5px] text-[#131b2e] flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-[#0037b0]" />
                    <span>C. Optimization Schedule &amp; Numerical Stability</span>
                  </span>
                  <p className="text-[13px] text-[#475569]">
                    Optimizer: <strong>AdamW</strong> (<InlineMath math="\beta_1 = 0.9, \beta_2 = 0.999" />, weight decay <InlineMath math="10^{-4}" />) paired with a <strong>Cosine Annealing Learning Rate scheduler</strong>. Gradients are scaled using FP16 Automatic Mixed Precision (<code className="font-mono text-[11.5px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">torch.cuda.amp.autocast</code>) with gradient clipping at norm 1.0.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            7. CONTROLLED EXPERIMENTS DESIGN (Course Criterion 4)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                7. Controlled Experiments Design (Criterion 4)
              </h2>
            </div>
            <span className="px-2.5 py-1 bg-[#dcfce7] text-[#166534] font-mono text-[11px] font-bold rounded">
              Controlled Factor: Freeze vs. Full Fine-Tune
            </span>
          </div>

          <div className="space-y-4 text-[14px] text-[#334155] leading-relaxed">
            <p>
              To rigorously fulfill <strong>Criterion 4 (At least one controlled experiment)</strong>, our research investigates the fundamental transfer learning trade-off: <strong>Freeze vs. Full Fine-Tune</strong> alongside <strong>Scratch vs. Foundation Pre-trained Representations</strong> across four carefully controlled regimes (E0, E1, E2, E3).
            </p>

            {/* Controlled Experiments Matrix Table */}
            <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
              <table className="w-full text-[13px] text-left">
                <thead className="bg-[#f8faff] text-[#475569] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                  <tr>
                    <th className="px-4 py-2.5">ID</th>
                    <th className="px-4 py-2.5">Architecture</th>
                    <th className="px-4 py-2.5">Training Strategy</th>
                    <th className="px-4 py-2.5">Controlled Factor / Variable</th>
                    <th className="px-4 py-2.5">Parameters Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f2f3ff] bg-white">
                  <tr>
                    <td className="px-4 py-2.5 font-mono font-bold text-[#b45309]">E0</td>
                    <td className="px-4 py-2.5 font-medium text-[#131b2e]">Depth Anything V2 (Small)</td>
                    <td className="px-4 py-2.5 text-[#515f74]">Zero-shot Pretrained (Hypersim)</td>
                    <td className="px-4 py-2.5 font-mono text-[12px] text-[#b45309]">0 epochs (No in-domain training)</td>
                    <td className="px-4 py-2.5 font-mono text-[12px]">0 params (0.0%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-mono font-bold text-[#0037b0]">E1</td>
                    <td className="px-4 py-2.5 font-medium text-[#131b2e]">Custom Simple CNN U-Net</td>
                    <td className="px-4 py-2.5 text-[#515f74]">From Scratch (Random Initialization)</td>
                    <td className="px-4 py-2.5 font-mono text-[12px] text-[#7e22ce]">Scratch Baseline (20 epochs)</td>
                    <td className="px-4 py-2.5 font-mono text-[12px]">7.83M (100.0%)</td>
                  </tr>
                  <tr className="bg-[#f0f9ff]/50">
                    <td className="px-4 py-2.5 font-mono font-bold text-[#0284c7]">E2</td>
                    <td className="px-4 py-2.5 font-medium text-[#131b2e]">Depth Anything V2 (Small)</td>
                    <td className="px-4 py-2.5 text-[#0284c7] font-medium">Freeze ViT Backbone, Train Depth Head Only</td>
                    <td className="px-4 py-2.5 font-mono text-[12px] text-[#0284c7] font-bold">Controlled: Freeze Encoder (15 ep)</td>
                    <td className="px-4 py-2.5 font-mono text-[12px]">~3.21M (12.9%)</td>
                  </tr>
                  <tr className="bg-[#f0fdf4]/50">
                    <td className="px-4 py-2.5 font-mono font-bold text-[#166534]">E3</td>
                    <td className="px-4 py-2.5 font-medium text-[#131b2e]">Depth Anything V2 (Small)</td>
                    <td className="px-4 py-2.5 text-[#166534] font-medium">Full End-to-End Fine-Tuning (Differential LR)</td>
                    <td className="px-4 py-2.5 font-mono text-[12px] text-[#166534] font-bold">Controlled: Full Fine-Tune (15 ep)</td>
                    <td className="px-4 py-2.5 font-mono text-[12px]">24.81M (100.0%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Controlled Invariants Callout */}
            <div className="bg-[#f8faff] p-4 rounded-lg border border-[#eaedff] space-y-2">
              <span className="font-semibold text-[13px] text-[#131b2e] block">
                Strictly Controlled Experimental Invariants (Held Constant Across All Runs):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[12px]">
                <div className="p-2.5 bg-white rounded border border-[#eaedff]">
                  <span className="font-mono text-[11px] text-[#515f74] block uppercase">Dataset Partitions</span>
                  <span className="font-semibold text-[#131b2e]">Identical 7,751 Train / 1,550 Val / 1,034 Test</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#eaedff]">
                  <span className="font-mono text-[11px] text-[#515f74] block uppercase">Spatial Resolution</span>
                  <span className="font-semibold text-[#131b2e]">Standardized 256×320 pixels</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#eaedff]">
                  <span className="font-mono text-[11px] text-[#515f74] block uppercase">Evaluation Metric Bounds</span>
                  <span className="font-semibold text-[#131b2e]">0.5 m &lt; Depth ≤ 8.0 m</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#eaedff]">
                  <span className="font-mono text-[11px] text-[#515f74] block uppercase">Loss &amp; Mini-batch</span>
                  <span className="font-semibold text-[#131b2e]">SILog + 0.5·Grad Loss | Batch 16</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            8. RESULTS & QUANTITATIVE BENCHMARK (Course Criterion 5)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                8. Results &amp; Quantitative Benchmark (Criterion 5)
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 bg-[#dcfce7] text-[#166534] font-mono text-[11px] font-bold rounded flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Empirical Evaluation Complete
              </span>
            </div>
          </div>

          <div className="space-y-6 text-[14px] text-[#334155] leading-relaxed">
            <p>
              All four models were evaluated on the held-out SUN RGB-D test set (1,034 scene-disjoint pairs) across the standard monocular depth estimation benchmarks: Root Mean Squared Error (RMSE), Mean Absolute Relative Error (AbsRel), and Threshold Accuracy (<InlineMath math="\delta_1, \delta_2, \delta_3" />).
            </p>

            {/* Master Quantitative Results Table */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] font-bold text-[#131b2e] uppercase flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#0037b0]" />
                  Master Quantitative Benchmark on SUN RGB-D Test Set (1,034 Pairs)
                </span>
                <span className="text-[11px] font-mono text-[#515f74]">
                  Lower is better (↓) | Higher is better (↑)
                </span>
              </div>

              <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
                <table className="w-full text-left text-[13px] border-collapse">
                  <thead className="bg-[#f2f3ff] text-[#131b2e] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                    <tr>
                      <th className="py-2.5 px-3">Exp</th>
                      <th className="py-2.5 px-3">Model Architecture</th>
                      <th className="py-2.5 px-3">Training Strategy</th>
                      <th className="py-2.5 px-3 font-bold text-[#0037b0]">RMSE (m) ↓</th>
                      <th className="py-2.5 px-3 font-bold text-[#0037b0]">AbsRel ↓</th>
                      <th className="py-2.5 px-3 font-bold text-[#166534]">δ₁ (&lt; 1.25) ↑</th>
                      <th className="py-2.5 px-3">δ₂ (&lt; 1.25²) ↑</th>
                      <th className="py-2.5 px-3">δ₃ (&lt; 1.25³) ↑</th>
                      <th className="py-2.5 px-3">Test Loss ↓</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2f3ff] bg-white">
                    {/* E0 */}
                    <tr className="hover:bg-[#f9faff]">
                      <td className="py-2.5 px-3 font-mono font-bold text-[#b45309]">E0</td>
                      <td className="py-2.5 px-3 font-medium text-[#131b2e]">Depth Anything V2 (Small)</td>
                      <td className="py-2.5 px-3 text-[#515f74] text-[12px]">Pretrained Zero-shot (Hypersim)</td>
                      <td className="py-2.5 px-3 font-mono text-[#b45309]">1.500 m</td>
                      <td className="py-2.5 px-3 font-mono text-[#b45309]">0.649</td>
                      <td className="py-2.5 px-3 font-mono text-[#b45309]">17.3%</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">55.4%</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">86.5%</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">0.4585</td>
                    </tr>

                    {/* E1 */}
                    <tr className="hover:bg-[#f9faff]">
                      <td className="py-2.5 px-3 font-mono font-bold text-[#0037b0]">E1</td>
                      <td className="py-2.5 px-3 font-medium text-[#131b2e]">Custom Simple CNN U-Net</td>
                      <td className="py-2.5 px-3 text-[#515f74] text-[12px]">Trained From Scratch (20 epochs)</td>
                      <td className="py-2.5 px-3 font-mono text-[#131b2e]">0.868 m</td>
                      <td className="py-2.5 px-3 font-mono text-[#131b2e]">0.282</td>
                      <td className="py-2.5 px-3 font-mono text-[#131b2e]">55.2%</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">82.4%</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">93.5%</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">0.3688</td>
                    </tr>

                    {/* E2 */}
                    <tr className="hover:bg-[#f9faff] bg-[#f0f9ff]/30">
                      <td className="py-2.5 px-3 font-mono font-bold text-[#0284c7]">E2</td>
                      <td className="py-2.5 px-3 font-medium text-[#131b2e]">Depth Anything V2 (Small)</td>
                      <td className="py-2.5 px-3 text-[#0284c7] font-medium text-[12px]">Freeze ViT, Train Head Only (15 ep)</td>
                      <td className="py-2.5 px-3 font-mono text-[#0284c7] font-semibold">0.560 m</td>
                      <td className="py-2.5 px-3 font-mono text-[#0284c7] font-semibold">0.153</td>
                      <td className="py-2.5 px-3 font-mono text-[#0284c7] font-bold">83.2%</td>
                      <td className="py-2.5 px-3 font-mono text-[#0284c7]">95.7%</td>
                      <td className="py-2.5 px-3 font-mono text-[#0284c7]">97.8%</td>
                      <td className="py-2.5 px-3 font-mono text-[#515f74]">0.2419</td>
                    </tr>

                    {/* E3 */}
                    <tr className="bg-[#f0fdf4] font-medium border-t-2 border-[#bbf7d0]">
                      <td className="py-2.5 px-3 font-mono font-bold text-[#166534] flex items-center gap-1.5">
                        <span>E3</span>
                        <span className="text-[10px] bg-[#166534] text-white px-1.5 py-0.2 rounded font-normal">SOTA</span>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-[#131b2e]">Depth Anything V2 (Small)</td>
                      <td className="py-2.5 px-3 text-[#166534] font-semibold text-[12px]">Full End-to-End Fine-Tuning (15 ep)</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#166534]">0.508 m</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#166534]">0.129</td>
                      <td className="py-2.5 px-3 font-mono font-extrabold text-[#166534]">88.7%</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#166534]">96.6%</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#166534]">98.2%</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#166534]">0.2228</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Findings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#fcfcff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-mono text-[11px] text-[#166534] uppercase font-bold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>SOTA Performance Gain (E3 vs E1)</span>
                </span>
                <div className="font-serif text-[22px] font-bold text-[#166534]">
                  ↓ 41.5% RMSE
                </div>
                <p className="text-[12.5px] text-[#515f74]">
                  Full end-to-end fine-tuning slashes RMSE from <strong>0.868 m</strong> down to <strong>0.508 m</strong> and skyrockets <InlineMath math="\delta_1" /> accuracy from <strong>55.2%</strong> to <strong>88.7%</strong> (+33.5% percentage points) over the from-scratch baseline.
                </p>
              </div>

              <div className="p-4 bg-[#fcfcff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-mono text-[11px] text-[#0284c7] uppercase font-bold flex items-center gap-1">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Freeze vs. Full FT (E2 vs E3)</span>
                </span>
                <div className="font-serif text-[22px] font-bold text-[#0284c7]">
                  ↓ 9.3% Further Error
                </div>
                <p className="text-[12.5px] text-[#515f74]">
                  Freezing the ViT backbone (E2) achieves <strong>0.560 m</strong> RMSE / <strong>83.2%</strong> <InlineMath math="\delta_1" />. Full adaptation (E3) yields an additional 9.3% RMSE reduction and +5.5% <InlineMath math="\delta_1" /> by tuning self-attention to sensor noise.
                </p>
              </div>

              <div className="p-4 bg-[#fcfcff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-mono text-[11px] text-[#b45309] uppercase font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Zero-Shot Scale Drift (E0)</span>
                </span>
                <div className="font-serif text-[22px] font-bold text-[#b45309]">
                  1.500 m RMSE
                </div>
                <p className="text-[12.5px] text-[#515f74]">
                  Without fine-tuning on SUN RGB-D, zero-shot pretrained models suffer significant metric scale misalignment with physical Kinect cameras, establishing that task-specific fine-tuning is strictly required.
                </p>
              </div>
            </div>

            {/* Visual Artifact 1: Loss Curves */}
            <div className="bg-[#fcfcff] p-4 rounded-xl border border-[#eaedff] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-[12px] font-bold text-[#131b2e] uppercase flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#0037b0]" />
                  Figure 4: Comparative Training and Validation Loss Dynamics (E1 vs E2 vs E3)
                </span>
                <a
                  href={getAssetUrl('assignment2/figures/loss_curves.png')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 text-[12px] text-[#0037b0] hover:underline font-mono"
                >
                  <span>View High-Res</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <img
                src={getAssetUrl('assignment2/figures/loss_curves.png')}
                alt="Training and Validation Loss Dynamics"
                className="w-full rounded-lg border border-[#eaedff] bg-white p-1"
              />
              <p className="text-[12px] font-mono text-[#515f74] text-center">
                Figure 4: Loss curves across all training epochs. Notice the rapid, stable convergence of Depth Anything V2 (E2 and E3 reaching loss &lt; 0.25 within 5 epochs) compared to the slow progression of the from-scratch CNN baseline E1.
              </p>
            </div>

            {/* Visual Artifact 2: High-Res Benchmark Table */}
            <div className="bg-[#fcfcff] p-4 rounded-xl border border-[#eaedff] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-[12px] font-bold text-[#131b2e] uppercase flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-[#0037b0]" />
                  Figure 5: Publication-Grade Benchmark Summary Table
                </span>
                <a
                  href={getAssetUrl('assignment2/benchmark_comparison.csv')}
                  download="benchmark_comparison.csv"
                  className="inline-flex items-center space-x-1.5 text-[12px] text-[#0037b0] hover:underline font-mono"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download benchmark_comparison.csv</span>
                </a>
              </div>
              <img
                src={getAssetUrl('assignment2/figures/benchmark_table.png')}
                alt="Benchmark Summary Table"
                className="w-full rounded-lg border border-[#eaedff] bg-white p-1"
              />
            </div>

          </div>
        </div>

        {/* =========================================================================
            9. QUALITATIVE EVALUATION (Course Criterion 6)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <Eye className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                9. Qualitative Evaluation &amp; Visual Comparisons (Criterion 6)
              </h2>
            </div>
            <span className="px-2.5 py-1 bg-[#dcfce7] text-[#166534] font-mono text-[11px] font-bold rounded">
              Criterion 6 Fulfilled
            </span>
          </div>

          <div className="space-y-6 text-[14px] text-[#334155] leading-relaxed">
            <p>
              Numerical metrics provide aggregate performance, but qualitative visual inspection reveals how each model handles fine geometry, thin structures, planar walls, and sensor dropouts. Figure 6 presents predictions on test set samples across all four regimes alongside the ground truth.
            </p>

            {/* Qualitative Grid Image Display */}
            <div className="bg-[#fcfcff] p-4 sm:p-5 rounded-xl border border-[#eaedff] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-[12px] font-bold text-[#131b2e] uppercase flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#0037b0]" />
                  Figure 6: Side-by-Side Visual Comparison Across Models and Ground Truth
                </span>
                <a
                  href={getAssetUrl('assignment2/figures/qualitative_comparison_grid.png')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 text-[12px] text-[#0037b0] hover:underline font-mono"
                >
                  <span>Open Full Resolution (6.4 MB)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <img
                src={getAssetUrl('assignment2/figures/qualitative_comparison_grid.png')}
                alt="Qualitative Comparison Grid"
                className="w-full rounded-lg border border-[#eaedff] bg-white p-1"
              />
              <p className="text-[12px] font-mono text-[#515f74] text-center">
                Figure 6: Qualitative evaluation on representative SUN RGB-D test rooms. Columns show: (1) Input RGB optical frame; (2) Sensor Ground Truth Depth; (3) E0 Zero-shot; (4) E1 Scratch CNN Baseline; (5) E2 Frozen ViT; (6) E3 Full Fine-tuned; (7) Error Residual Difference Map.
              </p>
            </div>

            {/* Deep Qualitative Critique Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-[13px]">
              <div className="p-4 bg-[#f8faff] rounded-lg border border-[#eaedff] space-y-2">
                <span className="font-semibold text-[#131b2e] block flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0037b0]" />
                  <span>Boundary Sharpness &amp; Thin Objects</span>
                </span>
                <p className="text-[#475569]">
                  <strong>E1 (CNN Baseline):</strong> Produces overly diffuse, smoothed boundaries around furniture (chairs, table legs, monitors), merging thin foreground geometries into background walls.
                </p>
                <p className="text-[#166534] font-medium">
                  <strong>E3 (Full FT):</strong> Thanks to high-resolution DPT skip-fusion, E3 captures crisp, pixel-sharp silhouette edges around chairs, bedding, and wall fixtures.
                </p>
              </div>

              <div className="p-4 bg-[#f8faff] rounded-lg border border-[#eaedff] space-y-2">
                <span className="font-semibold text-[#131b2e] block flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                  <span>Planar Surface Regularity</span>
                </span>
                <p className="text-[#475569]">
                  <strong>E1:</strong> Displays undulating, wavy artifacts across large planar regions (floors, ceilings, side walls) due to the limited local receptive field of convolutional filters.
                </p>
                <p className="text-[#0284c7] font-medium">
                  <strong>E2 &amp; E3:</strong> Vision Transformer self-attention enforces global geometric consistency, recovering flat, continuous depth gradients across walls and floors.
                </p>
              </div>

              <div className="p-4 bg-[#f8faff] rounded-lg border border-[#eaedff] space-y-2">
                <span className="font-semibold text-[#131b2e] block flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#166534]" />
                  <span>Semantic Infilling of Sensor Holes</span>
                </span>
                <p className="text-[#475569]">
                  <strong>Ground Truth:</strong> Raw infrared sensors frequently fail on specular glass windows and reflective tables, creating black zero-depth hole artifacts.
                </p>
                <p className="text-[#166534] font-medium">
                  <strong>E3:</strong> Synthesizes visually convincing, structurally plausible metric depth even where raw sensor beams were lost, demonstrating high semantic understanding.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            10. ERROR ANALYSIS (Course Criterion 7 - Milestone 2 Draft / In-Progress)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-[#b45309]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                10. Error Analysis (Criterion 7)
              </h2>
            </div>
            <span className="px-2.5 py-1 bg-[#fef3c7] text-[#92400e] border border-[#fde68a] font-mono text-[11px] font-bold rounded">
              Milestone 2 In-Progress · To Be Finalized in M3
            </span>
          </div>

          <div className="space-y-4 text-[14px] text-[#334155] leading-relaxed">
            <div className="p-3.5 bg-[#fffbeb] rounded-lg border border-[#fde68a] text-[13px] text-[#92400e] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-[#d97706]" />
              <div>
                <strong>Milestone 2 Draft Status:</strong> Preliminary failure modes have been categorized based on test set residuals. A systematic quantitative error confusion clustering (stratified by room depth, surface reflectivity, and sensor type) is actively in progress and will be fully documented for Milestone 3.
              </div>
            </div>

            <p>
              Initial inspection of high-residual test samples (<InlineMath math="\text{AbsRel} > 0.35" />) reveals four distinct recurrent failure modes in monocular depth estimation on SUN RGB-D:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
              <div className="p-4 bg-[#f8faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-semibold text-[#131b2e] block">1. Specular Reflections &amp; Mirrors</span>
                <p className="text-[#515f74]">
                  Full-length mirrors and glossy wardrobe doors reflect virtual scenes behind the physical surface. The model predicts the depth of the reflected room rather than the physical mirror plane, generating high absolute error.
                </p>
              </div>

              <div className="p-4 bg-[#f8faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-semibold text-[#131b2e] block">2. Transparent Glass Doors &amp; Windows</span>
                <p className="text-[#515f74]">
                  Large window apertures allow exterior outdoor lighting into indoor rooms. The model attempts to estimate depth of outdoor trees/buildings through the pane, violating the indoor evaluation boundary <InlineMath math="Z \le 8.0\,\text{m}" />.
                </p>
              </div>

              <div className="p-4 bg-[#f8faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-semibold text-[#131b2e] block">3. Distant Corridor Extremities (&gt; 6.5m)</span>
                <p className="text-[#515f74]">
                  Disparity resolution degrades quadratically with distance (<InlineMath math="\Delta Z \propto Z^2" />). In deep auditoriums and classrooms, metric errors increase near the 8-meter ceiling threshold.
                </p>
              </div>

              <div className="p-4 bg-[#f8faff] rounded-lg border border-[#eaedff] space-y-1.5">
                <span className="font-semibold text-[#131b2e] block">4. Fine Occlusion Boundaries &amp; Cables</span>
                <p className="text-[#515f74]">
                  Extremely thin chair legs, monitor power cables, and hanging cords are occasionally blurred due to spatial downsampling to 256×320 resolution during input processing.
                </p>
              </div>
            </div>

            {/* Reserved Placeholder for Milestone 3 */}
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74] text-center">
              <em>[Milestone 3 Reserved Box]: Comprehensive failure mode collage with per-class residual error distribution plots will be incorporated here.</em>
            </div>
          </div>
        </div>

        {/* =========================================================================
            11. COMPUTE-COST & HARDWARE EFFICIENCY ANALYSIS (Criterion 8 - M2 Draft)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#f2f3ff] pb-3">
            <div className="flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-[#0037b0]" />
              <h2 className="font-serif text-[20px] font-medium text-[#131b2e]">
                11. Compute-Cost &amp; Hardware Efficiency Analysis (Criterion 8)
              </h2>
            </div>
            <span className="px-2.5 py-1 bg-[#fef3c7] text-[#92400e] border border-[#fde68a] font-mono text-[11px] font-bold rounded">
              Milestone 2 Preliminary Profile
            </span>
          </div>

          <div className="space-y-4 text-[14px] text-[#334155] leading-relaxed">
            <p>
              Practical deployment in robotics and AR requires balancing depth fidelity with hardware memory footprint and inference frame rate. Table 4 profiles empirical resource consumption measured on an <strong>NVIDIA Tesla T4 GPU (15 GB VRAM)</strong> and an <strong>NVIDIA L4 GPU (24 GB VRAM)</strong>.
            </p>

            {/* Compute Profile Table */}
            <div className="overflow-x-auto rounded-lg border border-[#eaedff]">
              <table className="w-full text-left text-[13px] border-collapse">
                <thead className="bg-[#f8faff] text-[#475569] font-mono text-[11px] uppercase border-b border-[#eaedff]">
                  <tr>
                    <th className="py-2.5 px-3">Model</th>
                    <th className="py-2.5 px-3">Parameters</th>
                    <th className="py-2.5 px-3">Peak VRAM (Batch 16)</th>
                    <th className="py-2.5 px-3">Throughput (T4)</th>
                    <th className="py-2.5 px-3">Epoch Duration</th>
                    <th className="py-2.5 px-3">Total Training Budget</th>
                    <th className="py-2.5 px-3">Inference Latency (FPS)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f2f3ff] bg-white">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#131b2e]">E1 (CNN Baseline)</td>
                    <td className="py-2.5 px-3 font-mono text-[#515f74]">7.83 M</td>
                    <td className="py-2.5 px-3 font-mono text-[#166534]">~2.1 GB</td>
                    <td className="py-2.5 px-3 font-mono">~276 pairs/sec</td>
                    <td className="py-2.5 px-3 font-mono">~28 sec</td>
                    <td className="py-2.5 px-3 font-mono">9.3 minutes (20 ep)</td>
                    <td className="py-2.5 px-3 font-mono text-[#166534]">12.4 ms (~80.6 FPS)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0284c7]">E2 (Frozen ViT)</td>
                    <td className="py-2.5 px-3 font-mono text-[#515f74]">24.81 M (Head: 3.2M)</td>
                    <td className="py-2.5 px-3 font-mono text-[#0284c7]">~3.8 GB</td>
                    <td className="py-2.5 px-3 font-mono">~184 pairs/sec</td>
                    <td className="py-2.5 px-3 font-mono">~42 sec</td>
                    <td className="py-2.5 px-3 font-mono">10.5 minutes (15 ep)</td>
                    <td className="py-2.5 px-3 font-mono text-[#0284c7]">18.8 ms (~53.2 FPS)</td>
                  </tr>
                  <tr className="bg-[#f0fdf4]/40 font-medium">
                    <td className="py-2.5 px-3 font-bold text-[#166534]">E3 (Full Fine-Tune)</td>
                    <td className="py-2.5 px-3 font-mono text-[#166534]">24.81 M (Full)</td>
                    <td className="py-2.5 px-3 font-mono text-[#166534]">~5.6 GB</td>
                    <td className="py-2.5 px-3 font-mono">~108 pairs/sec</td>
                    <td className="py-2.5 px-3 font-mono">~72 sec</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#166534]">18.0 minutes (15 ep)</td>
                    <td className="py-2.5 px-3 font-mono text-[#166534]">18.8 ms (~53.2 FPS)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] pt-1">
              <div className="p-3.5 bg-[#f8faff] rounded-lg border border-[#eaedff] space-y-1">
                <span className="font-semibold text-[#131b2e] block">High Operational Efficiency:</span>
                <p className="text-[#475569]">
                  Total computational training budget across all three experimental regimes (E1 + E2 + E3) required <strong>&lt; 38 minutes</strong> on a single Tesla T4 GPU (&lt; 0.65 GPU hours), well within academic free-tier Google Colab and Kaggle resource quotas.
                </p>
              </div>
              <div className="p-3.5 bg-[#f8faff] rounded-lg border border-[#eaedff] space-y-1">
                <span className="font-semibold text-[#131b2e] block">Real-Time Robotics Feasibility:</span>
                <p className="text-[#475569]">
                  At <strong>18.8 ms latency (~53.2 FPS)</strong>, Depth Anything V2 Small easily exceeds the 30 FPS threshold required for real-time robotic navigation, indoor mapping, and mobile AR camera streams.
                </p>
              </div>
            </div>

            {/* Reserved Placeholder for Milestone 3 */}
            <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74] text-center">
              <em>[Milestone 3 Reserved Box]: Comprehensive FLOPs scaling curve and TensorRT/ONNX INT8 quantization profiling will be finalized here.</em>
            </div>
          </div>
        </div>

        {/* =========================================================================
            12. LINK TO SOURCE CODE & NOTEBOOKS (Item 12)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Github className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              12. Link to Source Code &amp; Interactive Notebooks
            </h2>
          </div>

          <p className="text-[13.5px] text-[#475569]">
            All dataset profiling, training pipelines, evaluation routines, and pre-trained weights wrappers are fully open-sourced in our GitHub repository and packaged as ready-to-run Jupyter Notebooks:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* EDA Notebook Card */}
            <div className="p-4 bg-[#f8faff] rounded-xl border border-[#eaedff] flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <FileCode className="w-4 h-4 text-[#0037b0]" />
                  <span className="font-mono text-[12px] font-bold text-[#131b2e]">01_Dataset_EDA.ipynb</span>
                </div>
                <p className="text-[12.5px] text-[#515f74]">
                  Comprehensive exploratory data analysis notebook: bit-shift decoding restoration, depth histograms, missing-pixel statistics, zero-drop filtering, and scene categorization.
                </p>
              </div>
              <a
                href={getAssetUrl('assignment2/notebooks/01_Dataset_EDA.ipynb')}
                download="01_Dataset_EDA.ipynb"
                className="inline-flex items-center justify-center space-x-2 px-3.5 py-2 bg-[#0037b0] hover:bg-[#00257a] text-white rounded-lg text-[12.5px] font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download EDA Notebook (.ipynb)</span>
              </a>
            </div>

            {/* Training Benchmark Notebook Card */}
            <div className="p-4 bg-[#f8faff] rounded-xl border border-[#eaedff] flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-[#166534]" />
                  <span className="font-mono text-[12px] font-bold text-[#131b2e]">depth-estimation.ipynb (02)</span>
                </div>
                <p className="text-[12.5px] text-[#515f74]">
                  Complete benchmark execution pipeline: PyTorch datasets, SILog + Gradient loss, Simple CNN U-Net (E1), Depth Anything V2 (E0, E2, E3), metrics evaluation, and qualitative grid visualization.
                </p>
              </div>
              <a
                href={getAssetUrl('assignment2/notebooks/depth-estimation.ipynb')}
                download="depth-estimation.ipynb"
                className="inline-flex items-center justify-center space-x-2 px-3.5 py-2 bg-[#166534] hover:bg-[#14532d] text-white rounded-lg text-[12.5px] font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Training Benchmark (.ipynb)</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] text-[13px] gap-2 pt-3">
            <span className="text-[#434655] font-medium">Assignment 2 Official GitHub Repository:</span>
            <a
              href="https://github.com/nguyendangcole/nguyen-assignment2-deeplearning"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-[#0037b0] hover:underline font-mono text-[12px] font-semibold"
            >
              <span>https://github.com/nguyendangcole/nguyen-assignment2-deeplearning</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            13. LINK TO CHECKPOINTS & REPRODUCTION INSTRUCTIONS (Item 13)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Terminal className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              13. Link to Checkpoint(s) &amp; Reproduction Instructions
            </h2>
          </div>

          <div className="p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] text-[13px] text-[#475569] space-y-3">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block">
              1-Click Setup &amp; Benchmark Reproduction Guide:
            </span>
            <div className="p-3 bg-[#1e293b] text-[#f8fafc] font-mono text-[12px] rounded-lg overflow-x-auto space-y-1">
              <div className="text-[#94a3b8]"># 1. Clone Assignment 2 repository</div>
              <div>git clone https://github.com/nguyendangcole/nguyen-assignment2-deeplearning.git</div>
              <div>cd nguyen-assignment2-deeplearning</div>
              <div className="text-[#94a3b8] pt-1"># 2. Launch interactive Jupyter Notebook</div>
              <div>jupyter notebook depth-estimation.ipynb</div>
            </div>
            <p className="text-[12px] text-[#64748b]">
              Pre-trained PyTorch model weights checkpoints (<code className="font-mono text-[11.5px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">best_model_E1.pth</code>, <code className="font-mono text-[11.5px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">best_model_E2.pth</code>, <code className="font-mono text-[11.5px] bg-[#f2f3ff] px-1 py-0.5 rounded text-[#0037b0]">best_model_E3.pth</code>) will be hosted on GitHub Releases and Google Drive for final milestone grading.
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
            Milestone 2 Draft metrics and methodologies are documented above. The formal LaTeX publication report (PDF) and presentation slide deck will be compiled and uploaded here prior to Milestone 3 (Final Release deadline: 11 Nov 2026).
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
            Presentation video will be recorded and published on YouTube adhering strictly to course title format: <code className="font-mono text-[11px] bg-[#f2f3ff] px-1.5 py-0.5 rounded text-[#131b2e]">CO3133-Semester-261 – Group 2352821 – Assignment 2</code> upon final release.
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
              Google Antigravity IDE (Gemini 3.8 Flash) was employed as an interactive coding assistant for vectorizing 16-bit PNG depth map decoding scripts, debugging GPU memory allocation on Kaggle/Colab, structuring TypeScript/Vite benchmark presentation views, and verifying KaTeX mathematical formulations. All loss functions, dataset splitting pipelines, training schedules, and empirical experimental findings were validated independently according to course instructions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
