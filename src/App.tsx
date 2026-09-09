import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AssignmentsSection from './components/AssignmentsSection';
import VideosSection from './components/VideosSection';
import AiUsageSection from './components/AiUsageSection';
import Footer from './components/Footer';
import AssignmentModals from './components/AssignmentModals';
import AiUsageModal from './components/AiUsageModal';
import VideoPlayerModal from './components/VideoPlayerModal';
import AuthorProfileModal from './components/AuthorProfileModal';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] antialiased selection:bg-[#d5e3fc] selection:text-[#001d31]">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenModal={setActiveModal} />

      {/* Main Content Area */}
      <main className="pt-16">
        <HeroSection onOpenModal={setActiveModal} />
        <AssignmentsSection onOpenModal={setActiveModal} />
        <VideosSection onOpenModal={setActiveModal} />
        <AiUsageSection onOpenModal={setActiveModal} />
      </main>

      {/* Academic Footer */}
      <Footer />

      {/* Assignment Detail & Spec Modals */}
      <AssignmentModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onOpenVideo={(videoKey) => setActiveModal(videoKey)}
      />

      {/* AI Usage Policy Modal */}
      <AiUsageModal
        isOpen={activeModal === 'ai-usage'}
        onClose={() => setActiveModal(null)}
      />

      {/* Presentation Video Player Modal */}
      <VideoPlayerModal
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />

      {/* Author Student Profile Modal */}
      <AuthorProfileModal
        isOpen={activeModal === 'author-profile'}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
