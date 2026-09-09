import { X, User, BookOpen, Award, Mail, ExternalLink, Code } from 'lucide-react';
import { COURSE_INFO } from '../data';

interface AuthorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthorProfileModal({ isOpen, onClose }: AuthorProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#131b2e]/60 backdrop-blur-sm flex items-center justify-center p-4 lg:p-6 overflow-y-auto animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative bg-white max-w-[560px] w-full rounded-lg shadow-2xl overflow-hidden border border-[#eaedff] z-10">
        {/* Header decoration */}
        <div className="bg-[#0037b0] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/80 hover:text-white rounded-full bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-white text-[#0037b0] flex items-center justify-center font-bold text-2xl shadow-md">
              <User className="w-8 h-8 text-[#0037b0]" />
            </div>
            <div>
              <h2 className="font-serif text-[22px] font-semibold text-white">
                {COURSE_INFO.author}
              </h2>
              <p className="font-mono text-[12px] text-white/80">
                Student ID: {COURSE_INFO.studentId}
              </p>
              <span className="inline-block mt-1 px-2.5 py-0.5 bg-white/20 text-white font-mono text-[11px] rounded">
                {COURSE_INFO.program}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-[14px]">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <BookOpen className="w-5 h-5 text-[#0037b0] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#131b2e] font-semibold block">Academic Affiliation</span>
                <p className="text-[#434655] text-[13px]">
                  {COURSE_INFO.faculty}, {COURSE_INFO.university}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-[#0037b0] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#131b2e] font-semibold block">Academic Coursework</span>
                <p className="text-[#434655] text-[13px]">
                  {COURSE_INFO.courseCode} - {COURSE_INFO.courseName} ({COURSE_INFO.termShort})
                </p>
                <p className="text-[#515f74] text-[12px]">
                  Advisor &amp; Instructor: {COURSE_INFO.instructor}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-[#0037b0] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#131b2e] font-semibold block">Contact &amp; Student Email</span>
                <p className="text-[#434655] text-[13px] font-mono">
                 nguyen.dangcolece@hcmut.edu.vn  
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-[#f2f3ff] rounded-lg border border-[#eaedff] text-[13px] text-[#434655] space-y-1">
            <strong className="text-[#131b2e] block">Research Focus:</strong>
            <p>
              Deep learning optimization, gradient backpropagation dynamics, distributed multi-GPU training regimes, and cross-attention multimodal architectures.
            </p>
          </div>

          <div className="pt-2 flex gap-3">
            <a
              href={COURSE_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 bg-[#0037b0] text-white rounded font-semibold text-[13px] hover:bg-[#1d4ed8] transition-colors"
            >
              <Code className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#eaedff] text-[#131b2e] hover:bg-[#d5e3fc] rounded font-semibold text-[13px] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
