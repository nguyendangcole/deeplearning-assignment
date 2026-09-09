import { Assignment, VideoPresentation, AiUsageEntry } from './types';

export const COURSE_INFO = {
  university: 'Ho Chi Minh City University of Technology – VNU-HCM',
  faculty: 'Faculty of Computer Science and Engineering · Department of Computer Science',
  courseName: 'Deep Learning and Its Applications',
  courseCode: 'CO3133',
  term: 'Semester 261 (Academic Year 2024–2025)',
  termShort: 'Semester 261',
  year: '2024 – 2025',
  documentRef: 'CO3133-HCMUT-2352821',
  instructor: 'Dr. Lê Thành Sách',
  instructorTitle: 'HCMUT CSE Advisor',
  author: 'Đặng Duy Nguyên',
  studentId: '2352821',
  program: 'Undergraduate Honors',
  githubUrl: 'https://github.com/nguyenduy-dang',
  repoUrl: 'https://github.com/nguyenduy-dang/co3133-deep-learning-portfolio',
  abstract:
    'Course project landing page presenting three core Deep Learning research assignments developed throughout Semester 261. The technical portfolio spans mathematical derivations of custom gradient pipelines, empirical benchmarking across modern convolutional and sequence networks, scaling methodologies on distributed data regimes, and cross-modal attention representation frameworks.',
};

export const ASSIGNMENTS: Assignment[] = [
  {
    id: 'asg-01',
    modalKey: 'assignment-1',
    number: 'ASSIGNMENT 01',
    status: 'Completed',
    statusColor: 'bg-[#d5e3fc] text-[#0d1c2e]',
    title: 'Foundations of Deep Learning Pipelines and Architectures',
    subtitle: 'From Linear Models to Modern Sequence Models: A Comparative Study for Image Classification.',
    tags: ['PyTorch Autograd', 'Backpropagation', 'CIFAR-10'],
    metrics: {
      label1: 'Top-1 Accuracy',
      value1: '88.42% (ResNet-18)',
      label2: 'Loss Convergence',
      value2: '0.342 Cross-Entropy',
    },
    buttonLabel: 'View Assignment Paper',
  },
  {
    id: 'asg-02',
    modalKey: 'assignment-2',
    number: 'ASSIGNMENT 02',
    status: 'In Progress',
    statusColor: 'bg-[#dce1ff] text-[#001551]',
    title: 'Deep Learning on Large-Scale Data and Specialized Tasks',
    subtitle: 'Deep Learning on Large-Scale Data for Specialized Computer Vision or Language Tasks.',
    tags: ['Vision Transformers', 'Distributed DP', 'Mixed Precision'],
    metrics: {
      label1: 'Throughput',
      value1: '1,420 img/sec (A100)',
      label2: 'Checkpoint State',
      value2: 'Epoch 45 / 100',
    },
    buttonLabel: 'View Assignment Spec',
  },
  {
    id: 'asg-03',
    modalKey: 'assignment-3',
    number: 'ASSIGNMENT 03',
    status: 'Upcoming',
    statusColor: 'bg-[#dae2fd] text-[#434655]',
    title: 'Multimodal Deep Learning',
    subtitle: 'Representation, Cross-Modal Fusion, and Alignment Evaluation across Visual-Linguistic Spaces.',
    tags: ['Contrastive CLIP', 'Cross-Attention', 'Zero-Shot'],
    metrics: {
      label1: 'Task Baseline',
      value1: 'VQA / Image-Text Retrieval',
      label2: 'Scheduled Defense',
      value2: 'W15 Defense Week',
    },
    buttonLabel: 'View Assignment Spec',
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
