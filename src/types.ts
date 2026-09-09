export type ModalType =
  | null
  | 'assignment-1'
  | 'assignment-2'
  | 'assignment-3'
  | 'ai-usage'
  | 'video-1'
  | 'video-2'
  | 'author-profile';

export type ViewType = 'home' | 'assignment-1' | 'assignment-2' | 'assignment-3';

export interface Assignment {
  id: string;
  modalKey: 'assignment-1' | 'assignment-2' | 'assignment-3';
  viewKey: 'assignment-1' | 'assignment-2' | 'assignment-3';
  number: string;
  weight?: string;
  title: string;
  subtitle: string;
  tags: string[];
  metrics: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
  buttonLabel: string;
}

export interface VideoPresentation {
  id: string;
  modalKey?: 'video-1' | 'video-2';
  assignmentTag: string;
  title: string;
  description: string;
  duration: string;
  thumbnailUrl?: string;
  isUpcoming?: boolean;
  videoUrl?: string;
  chapters?: { time: string; title: string }[];
}

export interface AiUsageEntry {
  domain: string;
  tool: string;
  natureOfInteraction: string;
  verificationProcess: string;
}
