# Assignment 2: Deep Learning on Large-Scale Data and Specialized Tasks

<div align="center">

![Course](https://img.shields.io/badge/Course-CO3133%20Deep%20Learning-blue?style=for-the-badge)
![Assignment](https://img.shields.io/badge/Assignment-02%20Large--Scale-003366?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Weight](https://img.shields.io/badge/Weight-30%25%20Course%20Grade-informational?style=for-the-badge)

**End-to-End Specialized Deep Learning Pipeline with Pretrained Backbones & Controlled Ablation**  
*Faculty of Computer Science and Engineering — Ho Chi Minh City University of Technology (HCMUT)*

[Live Web Showcase](https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-2) • [Main Repository](https://github.com/nguyendangcole/deeplearning-assignment) • [Course Handbook](../handbook-ene.pdf)

</div>

---

## 📌 1. Assignment Overview

| Field | Details |
| :--- | :--- |
| **Student** | **Đặng Duy Nguyên** (Student ID: `2352821`) |
| **Advisor** | **Dr. Lê Thành Sách** |
| **Course** | Deep Learning and Its Applications (`CO3133`) — Semester 261 |
| **Topic** | Monocular Depth Estimation on SUN RGB-D (10,335 Aligned Pairs) |
| **Core Architecture** | Custom Simple CNN U-Net Baseline vs. Vision Transformer (Depth Anything V2) |
| **Contribution** | **30%** of total course project grade |
| **Current Milestone** | **Milestone M3 Final (Completed)** |

---

## 🗓️ 2. Milestone Roadmap & Deliverables

As defined in **Section 7 of the HCMUT Course Project Handbook**:

| Milestone | Deadline (23:59 GMT+7) | Description & Required Minimum Deliverables | Status |
| :--- | :---: | :--- | :---: |
| **M1 Proposal** | **07 Oct 2026** | Dataset selection ($\ge 5,000$ samples), task formulation, split protocol, baseline proposal | **Completed** |
| **M2 Draft** | **28 Oct 2026** | Implementation of simple baseline + initial pretrained backbone training runs & quantitative metrics | **Completed** |
| **M3 Final** | **11 Nov 2026** | Full comparative benchmark, controlled ablation study, error analysis, technical report (PDF), presentation slides & YouTube defense video | **Completed** |

---

## 🔬 3. Controlled Experimental Design (4 Scientific Paradigms)

To thoroughly evaluate the paradigm shift from classical Convolutional Neural Networks to modern Vision Transformer Foundation Models, this project implements and benchmarks **4 controlled experiments**:

| Experiment | Model Architecture | Training Strategy | Scientific Objective | Key Results (AbsRel / $\delta < 1.25$) |
| :---: | :--- | :--- | :--- | :---: |
| **E0** | **Depth Anything V2 (Small - ViT)** | Zero-shot Pretrained Inference | Measure zero-shot out-of-the-box generalization without seeing SUN RGB-D. | $0.2188$ / $67.43\%$ |
| **E1** | **Custom Simple CNN U-Net** | Trained From Scratch (20 epochs) | Establish baseline performance without pretrained prior knowledge. | $0.2407$ / $61.27\%$ |
| **E2** | **Depth Anything V2 (Small - ViT)** | Frozen Backbone, Depth Head Only (15 epochs) | Measure linear probing spatial representation power of pretrained ViT backbone. | $0.1802$ / $74.87\%$ |
| **E3** | **Depth Anything V2 (Small - ViT)** | Full End-to-End Fine-Tuning (15 epochs) | SOTA indoor metric domain adaptation with DPT multi-scale feature assembly. | **$0.1444$ / $83.69\%$** |

* **Loss Formulation:** Combined Scale-Invariant Logarithmic Error (SILog) and Gradient Edge Loss:
  $$\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{SILog}} + 0.5 \cdot \mathcal{L}_{\text{grad}}$$
* **Resilience:** Built-in 3-layer fault tolerance (checkpoint auto-discovery across `/kaggle/input` & `/kaggle/working`, auto-resume & auto-skip).

---

## 📂 4. Directory Structure

```text
assignment2/
├── README.md               # Assignment 2 comprehensive documentation (this file)
├── dataset_proposal.md     # Official M1 Proposal (task formulation, split, leakage prevention)
├── notebooks/              # Interactive Jupyter / Colab notebooks
│   ├── 01_Dataset_EDA.ipynb               # Bit-shift decoding, distribution histograms & manifest
│   ├── 02_Training_and_Evaluation.ipynb  # Clean, modular training benchmark (E0–E3) with 1-click export
│   └── depth-estimation.ipynb            # Kaggle executed pipeline containing full inline outputs
├── checkpoints/            # Saved PyTorch model checkpoints (.pth)
│   ├── best_model_E0.pth                  # Pretrained weights: Depth Anything V2 (Zero-shot)
│   ├── best_model_E1.pth                  # Best weights: Simple CNN U-Net
│   ├── best_model_E2.pth                  # Best weights: Depth Anything V2 (Head Only)
│   └── best_model_E3.pth                  # Best weights: Depth Anything V2 (Full FT)
├── figures/                # Publication-quality figures, benchmark tables & loss curves
│   ├── benchmark_table.png                # Comprehensive quantitative metric summary table
│   ├── compute_cost_table.png             # Empirical VRAM, epoch duration & FPS comparison
│   ├── loss_curves.png                    # Training & validation convergence curves
│   ├── qualitative_comparison_grid.png    # Test set side-by-side predictions across all 4 models
│   ├── qualitative_detailed_discussion.png# High-res boundary & inductive bias zoom crops
│   ├── error_heatmaps_worst_cases.png     # Worst-case failure analysis & residual heatmaps
│   ├── depth_and_invalid_distribution.png # Depth range and missing pixel histograms
│   ├── sample_triplets_evidence.png       # RGB - Ground Truth - Mask triplets
│   └── scene_distribution.png             # Room categorization distribution
└── results/                # Quantitative benchmark CSVs, JSON logs & manifest
    ├── benchmark_comparison.csv           # Benchmark metric results across E0–E3
    ├── compute_cost_comparison.csv        # Hardware profiling (VRAM, FPS, latency)
    ├── worst_cases_metadata.csv           # Top residual failure cases on test set
    ├── evaluation_E0.json                 # Quantitative metrics for E0
    ├── evaluation_E1.json                 # Quantitative metrics for E1
    ├── evaluation_E2.json                 # Quantitative metrics for E2
    ├── evaluation_E3.json                 # Quantitative metrics for E3
    ├── history_E1.json                    # Epoch-by-epoch training logs for E1
    ├── history_E2.json                    # Epoch-by-epoch training logs for E2
    ├── history_E3.json                    # Epoch-by-epoch training logs for E3
    ├── preliminary_metrics_summary.csv    # Initial dataset profiling summary
    └── sunrgbd_manifest_10335.csv         # 10,335 pairs manifest with train/val/test splits
```

---

## 🚀 5. Quickstart & Benchmark Reproduction

### Option A: 1-Click Interactive Run on Google Colab or Kaggle
1. **EDA & Manifest Generation:**
   - [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/nguyendangcole/deeplearning-assignment/blob/main/assignment2/notebooks/01_Dataset_EDA.ipynb)
2. **Model Training & Benchmark Evaluation (All 4 Experiments):**
   - [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/nguyendangcole/deeplearning-assignment/blob/main/assignment2/notebooks/02_Training_and_Evaluation.ipynb)

### Option B: Local / Terminal Reproduction
```bash
# 1. Clone the repository
git clone https://github.com/nguyendangcole/deeplearning-assignment.git
cd deeplearning-assignment/assignment2

# 2. Launch interactive Jupyter Notebook
jupyter notebook notebooks/02_Training_and_Evaluation.ipynb
```

---

## 🔗 References & Navigation

* 🌐 **Interactive Web Portfolio:** [https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-2](https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-2)
* 📖 **Course Project Handbook:** [handbook-ene.pdf](../handbook-ene.pdf)
* 🏠 **Root Repository:** [deeplearning-assignment](https://github.com/nguyendangcole/deeplearning-assignment)
