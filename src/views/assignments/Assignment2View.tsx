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
  Clock
} from 'lucide-react';
import { COURSE_INFO } from '../../data';
import { ViewType, ModalType } from '../../types';

interface AssignmentViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenModal?: (type: ModalType) => void;
}

export default function Assignment2View({ onNavigate }: AssignmentViewProps) {
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

      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 pt-8 space-y-6">
        
        {/* =========================================================================
            1. ASSIGNMENT TITLE & BASIC INFORMATION (Item 1, 2, 3)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-[#d5e3fc] text-[#001d31] font-mono text-[11px] font-semibold uppercase rounded">
              CO3133 Course Project · Assignment 02
            </span>
            <span className="px-2.5 py-1 bg-[#e2e7ff] text-[#0037b0] font-mono text-[11px] font-medium rounded">
              Weight: 30%
            </span>
            <span className="px-2.5 py-1 bg-[#f2f3ff] text-[#515f74] font-mono text-[11px] font-medium rounded">
              Semester 261
            </span>
          </div>

          <div className="space-y-2">
            {/* Item 1: Assignment Title */}
            <h1 className="font-serif text-[28px] sm:text-[32px] font-medium text-[#131b2e] tracking-tight leading-snug">
              Assignment 2: Deep Learning on Large-Scale Data and Specialized Tasks
            </h1>
            <p className="text-[15px] text-[#0037b0] font-medium">
              Topic: Deep Learning on Large-Scale Data for Specialized Computer Vision or Language Tasks
            </p>
          </div>

          {/* Item 2 & 3: Group Members & Instructor */}
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
              <div className="font-semibold text-[#131b2e]">07 Oct 2026</div>
              <div className="font-mono text-[11px] text-[#0037b0]">Weight: 15% of A2</div>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0037b0]" />
                <span>Milestone 3 (Final)</span>
              </span>
              <div className="font-semibold text-[#131b2e]">11 Nov 2026</div>
              <div className="font-mono text-[11px] text-[#0037b0]">Weight: 60% of A2</div>
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
              href="handbook-ene.pdf"
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
            4. PROBLEM STATEMENT (Item 4)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <BookOpen className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Problem Statement
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Nội dung chi tiết về bài toán chuyên biệt (Selected task track, Real-world motivation, Input/Output, Mathematical formulation và các thách thức quy mô lớn) đang được cập nhật theo Milestone M1 Proposal.
          </div>
        </div>

        {/* =========================================================================
            5. DATASET DESCRIPTION AND EDA (Item 5)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Database className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Dataset Description &amp; EDA
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Đề xuất và mô tả tập dữ liệu quy mô lớn (Dataset Proposal: nguồn dữ liệu, kích thước ≥ 5,000 mẫu, phân tích phân bố, kiểm soát chống rò rỉ dữ liệu) đang được chuẩn bị để nộp xét duyệt.
          </div>
        </div>

        {/* =========================================================================
            6. METHODOLOGY (Item 6)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <GitBranch className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Methodology
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Phương pháp nghiên cứu (Mô hình Baseline đơn giản, mô hình hiện đại / Pretrained Backbone, chiến lược Fine-tuning, tối ưu hóa huấn luyện phân tán / bộ nhớ) đang được xây dựng.
          </div>
        </div>

        {/* =========================================================================
            7. EXPERIMENTAL SETUP (Item 7)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Cpu className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Experimental Setup
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Thiết lập thực nghiệm (Môi trường GPU, chiến lược đóng băng Freeze vs. Full fine-tune, các yếu tố kiểm soát Ablation study và metric đặc thù) đang được chuẩn bị.
          </div>
        </div>

        {/* =========================================================================
            8. RESULTS (Item 8)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <BarChart3 className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Results
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Bảng kết quả định lượng (Độ chính xác / Metric đặc thù, thời gian huấn luyện, chi phí tính toán) và kết quả định tính sẽ được cập nhật sau khi hoàn thành chạy thực nghiệm.
          </div>
        </div>

        {/* =========================================================================
            9. COMPARISON AND DISCUSSION (Item 9)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Layers className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Comparison and Discussion
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            So sánh giữa Baseline và mô hình Pretrained, phân tích kết quả nghiên cứu cắt bỏ (Ablation study) và đánh đổi hiệu năng - chi phí tính toán sẽ được cập nhật khi có kết quả.
          </div>
        </div>

        {/* =========================================================================
            10. ERROR ANALYSIS (Item 10)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <AlertCircle className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Error Analysis
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Phân tích lỗi (Phân loại các trường hợp dự đoán sai, nguyên nhân từ dữ liệu hoặc kiến trúc mô hình và đề xuất khắc phục) đang được tiến hành.
          </div>
        </div>

        {/* =========================================================================
            11. LIMITATIONS AND CONCLUSION (Item 11)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <HelpCircle className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Limitations and Conclusion
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Giới hạn thực nghiệm về phần cứng, tính đại diện của dữ liệu chuyên biệt và tổng kết đóng góp của Assignment 2 đang được hoàn thiện.
          </div>
        </div>

        {/* =========================================================================
            12. LINK TO SOURCE CODE (Item 12)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Github className="w-4 h-4 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Link to Source Code
            </h2>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#faf8ff] rounded-lg border border-[#eaedff] text-[13px]">
            <span className="text-[#434655]">GitHub Source Code Repository:</span>
            <a
              href={COURSE_INFO.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-[#0037b0] hover:underline font-mono text-[12px] font-semibold"
            >
              <span>{COURSE_INFO.repoUrl}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            13. LINK TO CHECKPOINTS OR REPRODUCTION (Item 13)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Terminal className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Link to Checkpoint(s) / Reproduction Instructions
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Liên kết tải model checkpoints và lệnh CLI tái lập huấn luyện sẽ được cập nhật khi hoàn thành các thử nghiệm.
          </div>
        </div>

        {/* =========================================================================
            14. LINK TO REPORT / SLIDES (Item 14)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <FileText className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Link to Report / Slides
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Báo cáo kỹ thuật (Report PDF) và slide trình bày (Slides) sẽ được đính kèm tại đây trước hạn chót Milestone M3 Final.
          </div>
        </div>

        {/* =========================================================================
            15. LINK TO YOUTUBE PRESENTATION VIDEO (Item 15)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <Video className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Link to YouTube Presentation Video
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74] space-y-1">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block">Status: In Progress</span>
            <p>Video thuyết trình sẽ được tải lên YouTube và gắn link tại đây theo định dạng tiêu đề chuẩn: <code className="font-mono text-[11px] bg-[#f2f3ff] px-1.5 py-0.5 rounded text-[#131b2e]">CO3133-Semester-261 – Group 2352821 – Assignment 2</code>.</p>
          </div>
        </div>

        {/* =========================================================================
            16. ASSIGNMENT-SPECIFIC AI USAGE DISCLOSURE (Item 16)
           ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#eaedff] shadow-xs space-y-4">
          <div className="flex items-center space-x-3 border-b border-[#f2f3ff] pb-3">
            <ShieldCheck className="w-5 h-5 text-[#0037b0]" />
            <h2 className="font-serif text-[18px] font-medium text-[#131b2e]">
              Assignment-Specific AI Usage Disclosure
            </h2>
          </div>
          <div className="p-4 bg-[#faf8ff] rounded-lg border border-dashed border-[#d0d7ff] text-[13px] text-[#515f74]">
            <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase block mb-1">Status: In Progress</span>
            Nhật ký khai báo sử dụng các công cụ AI cho Assignment 2 sẽ được ghi nhận và cập nhật đầy đủ trong quá trình triển khai bài tập.
          </div>
        </div>

      </div>
    </div>
  );
}
