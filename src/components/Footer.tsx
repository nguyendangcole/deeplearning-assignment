import { Code, ExternalLink } from 'lucide-react';
import { COURSE_INFO } from '../data';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#eaedff] mt-8">
      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-[15px] font-semibold text-[#131b2e]">
              {COURSE_INFO.author} · {COURSE_INFO.studentId}
            </p>
            <p className="text-[13px] text-[#434655]">
              {COURSE_INFO.courseCode}: {COURSE_INFO.courseName} · {COURSE_INFO.termShort}
            </p>
            <p className="font-mono text-[11px] text-[#515f74] uppercase tracking-wider">
              {COURSE_INFO.university} · {COURSE_INFO.faculty}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-2">
            <p className="text-[13px] text-[#434655]">
              Instructor:{' '}
              <span className="text-[#131b2e] font-semibold">
                {COURSE_INFO.instructor}
              </span>
            </p>
            <a
              href={COURSE_INFO.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 font-mono text-[12px] text-[#0037b0] hover:underline"
            >
              <Code className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3 text-[#0037b0]" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#f2f3ff] flex flex-col sm:flex-row justify-between items-center text-[#515f74] font-mono text-[11px] gap-2">
          <span>Academic Research &amp; Coursework Portfolio</span>
          <span></span>
        </div>
      </div>
    </footer>
  );
}
