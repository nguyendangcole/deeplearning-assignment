import { useState, useEffect, useCallback } from 'react';
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
import { Assignment1View, Assignment2View, Assignment3View } from './views/assignments';
import { ModalType, ViewType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [currentView, setCurrentView] = useState<ViewType>('home');

  // Handle URL hash changes for deep linking & browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'assignment-1' || hash === 'assignment-2' || hash === 'assignment-3') {
        setCurrentView(hash as ViewType);
      } else {
        setCurrentView('home');
      }
    };

    // Initial check on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToView = useCallback((view: ViewType) => {
    setCurrentView(view);
    if (view === 'home') {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      window.location.hash = `#/${view}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
      <Navbar 
        onOpenModal={setActiveModal} 
        currentView={currentView}
        onNavigateView={navigateToView}
      />

      {/* Main Content Area */}
      <main className="pt-16">
        {currentView === 'home' && (
          <>
            <HeroSection onOpenModal={setActiveModal} />
            <AssignmentsSection onNavigateView={navigateToView} />
            <VideosSection onOpenModal={setActiveModal} />
            <AiUsageSection onOpenModal={setActiveModal} />
          </>
        )}

        {currentView === 'assignment-1' && (
          <Assignment1View 
            onNavigate={navigateToView} 
            onOpenModal={setActiveModal} 
          />
        )}

        {currentView === 'assignment-2' && (
          <Assignment2View 
            onNavigate={navigateToView} 
            onOpenModal={setActiveModal} 
          />
        )}

        {currentView === 'assignment-3' && (
          <Assignment3View 
            onNavigate={navigateToView} 
            onOpenModal={setActiveModal} 
          />
        )}
      </main>

      {/* Academic Footer */}
      <Footer />

      {/* Assignment Detail Modals (if triggered from other sections) */}
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
