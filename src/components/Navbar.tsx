import { useState, useEffect } from 'react';
import { ExternalLink, User, Menu, X } from 'lucide-react';
import { COURSE_INFO } from '../data';
import { ModalType } from '../types';

interface NavbarProps {
  onOpenModal: (type: ModalType) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const assignmentsEl = document.getElementById('assignments');
      const videosEl = document.getElementById('videos');
      const aiUsageEl = document.getElementById('ai-usage');

      if (aiUsageEl && scrollY >= aiUsageEl.offsetTop - 180) {
        setActiveSection('ai-usage');
      } else if (videosEl && scrollY >= videosEl.offsetTop - 180) {
        setActiveSection('videos');
      } else if (assignmentsEl && scrollY >= assignmentsEl.offsetTop - 180) {
        setActiveSection('assignments');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#ffffff]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#eaedff]">
      <div className="h-16 max-w-[1140px] mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Left Branding */}
        <div 
          onClick={() => scrollTo('hero')} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="flex flex-col">
            <span className="font-mono text-[11px] text-[#515f74] uppercase tracking-wider group-hover:text-[#0037b0] transition-colors">
              HCMUT CSE · CO3133
            </span>
            <span className="text-[15px] font-semibold text-[#131b2e] tracking-tight group-hover:text-[#0037b0] transition-colors">
              Deep Learning &amp; Applications
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1 font-sans">
          <button
            onClick={() => scrollTo('hero')}
            className={`px-3 py-1 text-[13px] rounded transition-colors ${
              activeSection === 'home'
                ? 'bg-[#d5e3fc] text-[#0d1c2e] font-semibold'
                : 'text-[#434655] hover:text-[#131b2e] hover:bg-[#f2f3ff]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('assignments')}
            className={`px-3 py-1 text-[13px] rounded transition-colors ${
              activeSection === 'assignments'
                ? 'bg-[#d5e3fc] text-[#0d1c2e] font-semibold'
                : 'text-[#434655] hover:text-[#131b2e] hover:bg-[#f2f3ff]'
            }`}
          >
            Assignments
          </button>
          <button
            onClick={() => scrollTo('videos')}
            className={`px-3 py-1 text-[13px] rounded transition-colors ${
              activeSection === 'videos'
                ? 'bg-[#d5e3fc] text-[#0d1c2e] font-semibold'
                : 'text-[#434655] hover:text-[#131b2e] hover:bg-[#f2f3ff]'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => scrollTo('ai-usage')}
            className={`px-3 py-1 text-[13px] rounded transition-colors ${
              activeSection === 'ai-usage'
                ? 'bg-[#d5e3fc] text-[#0d1c2e] font-semibold'
                : 'text-[#434655] hover:text-[#131b2e] hover:bg-[#f2f3ff]'
            }`}
          >
            AI Usage
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href={COURSE_INFO.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1 text-[#515f74] hover:text-[#0037b0] transition-colors text-[13px] font-medium"
            title="Course Repository"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#515f74]" />
          </a>

          <button
            onClick={() => onOpenModal('author-profile')}
            className="w-8 h-8 rounded-full bg-[#0037b0] text-white flex items-center justify-center hover:bg-[#1d4ed8] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0037b0]/40"
            title="Student Profile: Đặng Duy Nguyên"
          >
            <User className="w-4 h-4 text-white" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-[#515f74] hover:text-[#131b2e] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#eaedff] bg-white px-4 py-3 space-y-2">
          <button
            onClick={() => scrollTo('hero')}
            className="block w-full text-left px-3 py-2 text-[14px] rounded text-[#131b2e] hover:bg-[#f2f3ff]"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('assignments')}
            className="block w-full text-left px-3 py-2 text-[14px] rounded text-[#131b2e] hover:bg-[#f2f3ff]"
          >
            Assignments
          </button>
          <button
            onClick={() => scrollTo('videos')}
            className="block w-full text-left px-3 py-2 text-[14px] rounded text-[#131b2e] hover:bg-[#f2f3ff]"
          >
            Videos
          </button>
          <button
            onClick={() => scrollTo('ai-usage')}
            className="block w-full text-left px-3 py-2 text-[14px] rounded text-[#131b2e] hover:bg-[#f2f3ff]"
          >
            AI Usage
          </button>
        </div>
      )}
    </header>
  );
}
