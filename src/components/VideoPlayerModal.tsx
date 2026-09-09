import { useState } from 'react';
import { X, Play, Pause, Volume2, Maximize2, ExternalLink, Bookmark } from 'lucide-react';
import { VIDEO_PRESENTATIONS } from '../data';
import { ModalType } from '../types';

interface VideoPlayerModalProps {
  activeModal: ModalType;
  onClose: () => void;
}

export default function VideoPlayerModal({ activeModal, onClose }: VideoPlayerModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  if (!activeModal || (activeModal !== 'video-1' && activeModal !== 'video-2')) {
    return null;
  }

  const currentVideo =
    activeModal === 'video-1' ? VIDEO_PRESENTATIONS[0] : VIDEO_PRESENTATIONS[1];

  return (
    <div className="fixed inset-0 z-[100] bg-[#131b2e]/70 backdrop-blur-md flex items-center justify-center p-4 lg:p-6 overflow-y-auto animate-fade-in">
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white max-w-[960px] w-full max-h-[92vh] rounded-lg shadow-2xl overflow-y-auto flex flex-col border border-[#eaedff] z-10">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-3.5 border-b border-[#eaedff] flex items-center justify-between z-20">
          <div>
            <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold block">
              CO3133 · {currentVideo.assignmentTag}
            </span>
            <h2 className="font-serif text-[20px] sm:text-[22px] text-[#131b2e] font-medium leading-tight">
              {currentVideo.title}
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

        {/* Video Player Display */}
        <div className="p-4 sm:p-6 space-y-6">
          <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg border border-[#eaedff] group">
            <img
              src={currentVideo.thumbnailUrl}
              alt={currentVideo.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />

            {/* Video overlay controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 flex flex-col justify-between p-4">
              <div className="flex justify-between items-center text-white/90">
                <span className="font-mono text-[12px] bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  {currentVideo.assignmentTag} · Defense Video
                </span>
                <span className="font-mono text-[12px] bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  HD 1080p · HCMUT Lecture Hall
                </span>
              </div>

              {/* Big Center Play/Pause toggle */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#0037b0]/90 hover:bg-[#1d4ed8] text-white flex items-center justify-center shadow-xl backdrop-blur-sm hover:scale-105 transition-all cursor-pointer"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-white" />
                  ) : (
                    <Play className="w-8 h-8 fill-white ml-1" />
                  )}
                </button>
              </div>

              {/* Bottom Control Bar */}
              <div className="space-y-2">
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all">
                  <div
                    className="h-full bg-[#1d4ed8]"
                    style={{
                      width: activeChapterIndex === 0 ? '25%' : activeChapterIndex === 1 ? '50%' : activeChapterIndex === 2 ? '75%' : '90%',
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-white text-[12px] font-mono">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-[#93ccff]"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <span>
                      {currentVideo.chapters?.[activeChapterIndex]?.time || '00:00'} / {currentVideo.duration}
                    </span>
                    <Volume2 className="w-4 h-4 text-white/80" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="hidden sm:inline text-white/80">
                      Chapter: {currentVideo.chapters?.[activeChapterIndex]?.title}
                    </span>
                    <Maximize2 className="w-4 h-4 text-white/80 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapters & Interactive Presentation Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chapters list */}
            <div className="space-y-3">
              <h3 className="font-serif text-[18px] text-[#131b2e] font-semibold flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-[#0037b0]" />
                <span>Presentation Chapters</span>
              </h3>
              <div className="space-y-2">
                {currentVideo.chapters?.map((chap, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`w-full text-left p-3 rounded border text-[13px] transition-all flex items-start gap-2.5 cursor-pointer ${
                      activeChapterIndex === idx
                        ? 'bg-[#d5e3fc] border-[#0037b0]/30 text-[#0d1c2e] font-semibold'
                        : 'bg-[#faf8ff] border-[#eaedff] text-[#434655] hover:bg-[#f2f3ff]'
                    }`}
                  >
                    <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-[#eaedff] text-[#0037b0]">
                      {chap.time}
                    </span>
                    <span className="flex-1">{chap.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Defense Notes / Transcript Highlights */}
            <div className="space-y-3">
              <h3 className="font-serif text-[18px] text-[#131b2e] font-semibold">
                Oral Defense Overview
              </h3>
              <div className="p-4 bg-[#f2f3ff] rounded-lg border border-[#eaedff] space-y-3 text-[13px] text-[#434655]">
                <p className="leading-relaxed">
                  {currentVideo.description}
                </p>
                <div className="border-t border-[#eaedff] pt-2 space-y-1 font-mono text-[11px]">
                  <div>
                    <span className="text-[#515f74]">Presenter:</span>{' '}
                    <strong className="text-[#131b2e]">Đặng Duy Nguyên (2352821)</strong>
                  </div>
                  <div>
                    <span className="text-[#515f74]">Evaluation Panel:</span>{' '}
                    <strong className="text-[#131b2e]">Dr. Lê Thành Sách, HCMUT CSE</strong>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#eaedff] text-[#0037b0] hover:bg-[#d5e3fc] rounded font-semibold text-[14px] transition-colors"
                >
                  <span>Watch on YouTube / Course Archive</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white px-6 py-3.5 border-t border-[#eaedff] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0037b0] text-white rounded text-[14px] font-semibold hover:bg-[#1d4ed8] transition-colors cursor-pointer"
          >
            Close Presentation
          </button>
        </div>
      </div>
    </div>
  );
}
