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
    weight: '40% of Project',
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
    weight: '30% of Project',
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
    weight: '30% of Project',
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
    modalKey: 'video-1',
    assignmentTag: 'ASSIGNMENT 01 DEFENSE',
    title: 'Foundations & Benchmark Walkthrough',
    description:
      'Mathematical review of custom backward pass with comparative empirical CIFAR-10 classification tables.',
    duration: '12:40',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbv-p-sQPIVQt-m7EJwoMZqwdgkOuC2eBu8bew54CBqQzTmv9V9Z-olwL8kM0NlExc4olbgncvsIFhN1u3jCQEWLDBioYTb7Gq6hJKNLvr577Ila5iXJzExIO1XiJpplV0GT9qkZWqyA6Y9ifkcdoC8p9y7a_okuo-n3Uy7JpCj_72jtsrnjgxxRXvieKhZdgJV_IN0Lyr06LpUUKFc9yclf_cqww9ugyfBuwB09Te5dlF40UgzqDP2A',
    isUpcoming: false,
    chapters: [
      { time: '00:00', title: 'Problem Formulation & CIFAR-10 Pipeline' },
      { time: '03:15', title: 'Manual Matrix Derivatives vs PyTorch Autograd' },
      { time: '07:40', title: 'Empirical Benchmark Table (MLP vs LeNet vs ResNet-18)' },
      { time: '10:20', title: 'Error Analysis & Gradient Norm Vanishing Proof' },
    ],
  },
  {
    id: 'vid-02',
    modalKey: 'video-2',
    assignmentTag: 'ASSIGNMENT 02 DEFENSE',
    title: 'Large-Scale Training & Specialized Tasks',
    description:
      'Distributed data-parallel scaling, gradient accumulation ablation, and vision transformer convergence.',
    duration: '15:20',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5Se0lTeNA6rHiqUQOt_qzuTcFbFM3PE317bLlR9IXXxXDW--SLXLiHkyxKATNh_gQV5GHto9D7eedSXd9zXexihBa9inDAkmaStfNbECcONVRCVQ1BbrwbZKPHFoXr3M7WFnUSbmH0CWcG1SB3oePJHtcLJ7Lu-LxEP9zpMwjq7TNKgNbEfr7J-mdaM0gCqGKwszShjrE9Gc8CAXWA56xVZBMLW8eWHzfXwUPPcwCX3iZx0Co9el5kQ',
    isUpcoming: false,
    chapters: [
      { time: '00:00', title: 'Distributed Cluster Configuration (4x NVIDIA A100)' },
      { time: '04:10', title: 'AMP Mixed Precision (FP16/BF16) Speedups' },
      { time: '09:30', title: 'Vision Transformer vs ConvNeXt Scaling Curves' },
      { time: '13:00', title: 'Mid-term Checkpoint Analysis & Epoch 45 Results' },
    ],
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
