import { Play, Clock, Lock, ArrowRight } from 'lucide-react';
import { VIDEO_PRESENTATIONS } from '../data';
import { ModalType } from '../types';

interface VideosSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export default function VideosSection({ onOpenModal }: VideosSectionProps) {
  return (
    <section id="videos" className="w-full py-12 lg:py-16 bg-white border-t border-b border-[#eaedff]">
      <div className="max-w-[1140px] mx-auto px-4 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-1.5">
          <span className="font-mono text-[11px] text-[#0037b0] font-semibold uppercase tracking-wider block">
            Video Documentation
          </span>
          <h2 className="font-serif text-[28px] text-[#131b2e] font-medium tracking-tight">
            Presentation Videos &amp; Defenses
          </h2>
          <p className="text-[15px] text-[#434655] max-w-[68ch]">
            Oral defenses, architecture walkthroughs, and experimental results presentations recorded for course evaluation.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEO_PRESENTATIONS.map((vid) => (
            <div
              key={vid.id}
              className="bg-[#faf8ff] rounded-lg border border-[#eaedff] shadow-xs overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div>
                {/* Video Thumbnail Container */}
                <div
                  onClick={() => vid.modalKey && onOpenModal(vid.modalKey)}
                  className={`relative w-full aspect-video bg-[#e2e7ff] flex items-center justify-center overflow-hidden ${
                    vid.modalKey ? 'cursor-pointer' : ''
                  }`}
                >
                  {vid.thumbnailUrl ? (
                    <>
                      <img
                        src={vid.thumbnailUrl}
                        alt={vid.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Dark overlay & Play Button */}
                      <div className="absolute inset-0 bg-[#131b2e]/25 flex items-center justify-center group-hover:bg-[#131b2e]/35 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#0037b0] shadow-md group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-[#0037b0] ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#131b2e]/85 text-white font-mono text-[11px] rounded font-medium">
                        {vid.duration}
                      </span>
                    </>
                  ) : (
                    <div className="w-full h-full bg-[#f2f3ff] flex flex-col items-center justify-center text-[#515f74] space-y-2 p-4 text-center">
                      <Clock className="w-9 h-9 text-[#515f74]/70" />
                      <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
                        Scheduled Recording
                      </span>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#131b2e]/85 text-white font-mono text-[11px] rounded font-medium">
                        TBD
                      </span>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-4 space-y-2">
                  <span className="font-mono text-[11px] text-[#515f74] uppercase font-semibold block">
                    {vid.assignmentTag}
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#131b2e] leading-snug group-hover:text-[#0037b0] transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-[13px] text-[#434655] leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-4 pt-0">
                {vid.modalKey ? (
                  <button
                    onClick={() => onOpenModal(vid.modalKey)}
                    className="inline-flex items-center space-x-1.5 text-[14px] font-semibold text-[#0037b0] hover:text-[#1d4ed8] group-hover:underline cursor-pointer"
                  >
                    <span>Watch Presentation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <span className="inline-flex items-center space-x-1.5 text-[14px] font-medium text-[#515f74]">
                    <Lock className="w-4 h-4 text-[#515f74]" />
                    <span>Upcoming Presentation</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
