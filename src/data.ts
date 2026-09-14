import { Assignment, VideoPresentation, AiUsageEntry } from './types';

export const COURSE_INFO = {
  university: 'Ho Chi Minh City University of Technology – VNU-HCM',
  faculty: 'Faculty of Computer Science and Engineering · Department of Computer Science',
  courseName: 'Deep Learning and Its Applications',
  courseCode: 'CO3133',
  term: 'Semester 261 (Academic Year 2026–2027)',
  termShort: 'Semester 261',
  year: '2026 – 2027',
  documentRef: 'CO3133-HCMUT-2352821',
  instructor: 'Dr. Lê Thành Sách',
  instructorTitle: 'HCMUT CSE Advisor',
  author: 'Đặng Duy Nguyên',
  studentId: '2352821',
  program: 'Undergraduate student',
  githubUrl: 'https://github.com/nguyenduy-dang',
  repoUrl: 'https://github.com/nguyendangcole/deeplearning-assignment',
  liveUrl: 'https://nguyendangcole.github.io/deeplearning-assignment/',
  abstract:
    'Course project landing page presenting three core Deep Learning research assignments developed throughout Semester 261. The technical portfolio spans mathematical derivations of custom gradient pipelines, empirical benchmarking across modern convolutional and sequence networks, scaling methodologies on distributed data regimes, and cross-modal attention representation frameworks.',
};

export const ASSIGNMENTS: Assignment[] = [
  {
    id: 'asg-01',
    modalKey: 'assignment-1',
    viewKey: 'assignment-1',
    number: 'ASSIGNMENT 01',
    title: 'Foundations of Deep Learning Pipelines and Architectures',
    subtitle: 'From Linear Models to Modern Sequence Models: A Comparative Study for Image Classification.',
    tags: ['Linear Classifier', 'MLP', 'CNN', 'LSTM/GRU', 'Transformer'],
    metrics: {
      label1: 'Primary Dataset',
      value1: 'Fashion-MNIST (Debug: MNIST)',
      label2: 'Key Milestones',
      value2: 'M1 Draft (Sep 23) · M2 Final (Oct 21)',
    },
    buttonLabel: 'View Assignment',
  },
  {
    id: 'asg-02',
    modalKey: 'assignment-2',
    viewKey: 'assignment-2',
    number: 'ASSIGNMENT 02',
    title: 'Deep Learning on Large-Scale Data and Specialized Tasks',
    subtitle: 'Deep Learning on Large-Scale Data for Specialized Computer Vision or Language Tasks.',
    tags: ['Pretrained Backbones', 'Fine-Tuning Protocol', 'Ablation Study'],
    metrics: {
      label1: 'Dataset Requirement',
      value1: '≥ 5,000 Samples (Task-Specific)',
      label2: 'Key Milestones',
      value2: 'M1 Proposal (Oct 07) · M3 Final (Nov 11)',
    },
    buttonLabel: 'View Assignment',
  },
  {
    id: 'asg-03',
    modalKey: 'assignment-3',
    viewKey: 'assignment-3',
    number: 'ASSIGNMENT 03',
    title: 'Multimodal Deep Learning',
    subtitle: 'Representation, Cross-Modal Fusion, and Alignment Evaluation across Heterogeneous Modalities.',
    tags: ['Unimodal Baselines', 'Cross-Modal Fusion', 'Alignment Evaluation'],
    metrics: {
      label1: 'Modality Alignment',
      value1: '≥ 2 Genuine Modalities (≥ 5,000 Pairs)',
      label2: 'Key Milestones',
      value2: 'M1 Proposal (Nov 18) · M3 Final (Dec 02)',
    },
    buttonLabel: 'View Assignment',
  },
];

export const VIDEO_PRESENTATIONS: VideoPresentation[] = [
  {
    id: 'vid-01',
    assignmentTag: 'ASSIGNMENT 01 DEFENSE',
    title: 'Foundations & Benchmark Walkthrough',
    description:
      'Mathematical review of custom backward pass with comparative empirical CIFAR-10 classification tables.',
    duration: 'TBD',
    isUpcoming: true,
  },
  {
    id: 'vid-02',
    assignmentTag: 'ASSIGNMENT 02 DEFENSE',
    title: 'Large-Scale Training & Specialized Tasks',
    description:
      'Distributed data-parallel scaling, gradient accumulation ablation, and vision transformer convergence.',
    duration: 'TBD',
    isUpcoming: true,
  },
  {
    id: 'vid-03',
    assignmentTag: 'ASSIGNMENT 03 DEFENSE',
    title: 'Multimodal Representation & Cross-Modal Evaluation',
    description:
      'Final oral defense covering text-to-vision alignment, contrastive projection heads, and zero-shot reasoning.',
    duration: 'TBD',
    isUpcoming: true,
  },
];

export const AI_USAGE_ENTRIES: AiUsageEntry[] = [
  {
    domain: 'Data Pipeline',
    tool: 'Claude 3.5 Sonnet',
    natureOfInteraction: 'PyTorch Dataset boilerplate and data augmentation transforms',
    verificationProcess: 'Verified tensor shapes, channel ordering, and normalization parameters against torchvision spec.',
  },
  {
    domain: 'Mathematical Proofs',
    tool: 'None (Manual Work)',
    natureOfInteraction: 'Manual analytic gradient derivation for backpropagation',
    verificationProcess: 'Step-by-step vector calculus handwritten check and numerical gradient approximation comparison.',
  },
  {
    domain: 'Visualizations',
    tool: 'GPT-4o',
    natureOfInteraction: 'Matplotlib styling and publication-grade export scripts',
    verificationProcess: 'Cross-referenced output coordinates against raw log data and confirmed accuracy metric bounds.',
  },
  {
    domain: 'LaTeX Formatting',
    tool: 'Claude 3.5 Sonnet',
    natureOfInteraction: 'Markdown table generation and math equation typesetting formatting',
    verificationProcess: 'Proofread syntax, variable indices, and tensor rank dimensions.',
  },
];
