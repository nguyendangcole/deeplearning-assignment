# Assignment 2: Deep Learning on Large-Scale Data and Specialized Tasks

<div align="center">

![Course](https://img.shields.io/badge/Course-CO3133%20Deep%20Learning-blue?style=for-the-badge)
![Assignment](https://img.shields.io/badge/Assignment-02%20Large--Scale-003366?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Progress-yellow?style=for-the-badge)
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
| **Topic** | Deep Learning on Large-Scale Data for Specialized Computer Vision or Language Tasks |
| **Contribution** | **30%** of total course project grade |
| **Current Milestone** | Milestone M2 Draft (In Progress) |

---

## 🗓️ 2. Milestone Roadmap & Deliverables

As defined in **Section 7 of the HCMUT Course Project Handbook**:

| Milestone | Deadline (23:59 GMT+7) | Description & Required Minimum Deliverables | Status |
| :--- | :---: | :--- | :---: |
| **M1 Proposal** | **07 Oct 2026** | Dataset selection ($\ge 5,000$ samples), task formulation, split protocol, baseline proposal | **Completed** |
| **M2 Draft** | **28 Oct 2026** | Implementation of simple baseline + initial pretrained backbone training runs & quantitative metrics | **In Progress** |
| **M3 Final** | **11 Nov 2026** | Full comparative benchmark, controlled ablation study, error analysis, technical report (PDF), presentation slides & YouTube defense video | Upcoming |

---

## 🎯 3. Core Technical & Experimental Requirements

In adherence to **Part III (Assignment 2)** of the Course Handbook:

1. **Dataset Requirements:**
   * Approved domain-specific dataset with **$\ge 5,000$ samples**.
   * Documented train/validation/test split with seed, stratification, and strict data leakage prevention.
   * Preprocessing & augmentation pipeline (normalization, tokenization, resizing, color jitter, etc.).

2. **Methodology & Model Architectures:**
   * **Simple Baseline:** Lightweight custom architecture or non-pretrained baseline.
   * **Pretrained SOTA Backbone:** Modern pretrained architecture (e.g., ResNet, ConvNeXt, Swin, ViT, RoBERTa) adapted via transfer learning.
   * **Fine-Tuning Protocol:** Controlled comparison between linear probing (frozen backbone) and full/partial fine-tuning.

3. **Mandatory Ablation Study:**
   * Controlled experiment testing at least one architectural or training factor (e.g., loss function, learning rate schedule, data augmentation, or unfreezing depth).
   * Clear hypothesis, changed factor, fixed factors, and conclusion criteria.

4. **Error Analysis & Diagnostics:**
   * Quantitative & qualitative analysis of failure modes.
   * Confusion matrix, difficult cases, and misclassification patterns.

---

## 📂 4. Directory Structure

```text
assignment2/
├── README.md               # Assignment 2 documentation (this file)
├── notebooks/              # Jupyter/Colab exploratory and training notebooks
├── src/                    # Modular Python source code (data loading, models, train, eval)
├── checkpoints/            # Saved PyTorch model weights (.pth)
├── figures/                # Training curves, confusion matrices, error visualizations
└── results/                # Quantitative benchmark CSVs and evaluation logs
```

---

## 🚀 5. Quickstart & Instructions

```bash
# 1. Navigate to Assignment 2 directory
cd assignment2

# 2. Install requirements
pip install -r requirements.txt  # (To be populated upon M2 release)

# 3. Run training pipeline
python src/train.py --config configs/default.yaml
```

*Updates, notebooks, checkpoint links, and evaluation results will be published progressively as milestones are reached.*

---

## 🔗 References & Navigation

* 🌐 **Interactive Web Portfolio:** [https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-2](https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-2)
* 📖 **Course Handbook:** [handbook-ene.pdf](../handbook-ene.pdf)
* 🏠 **Root Repository:** [deeplearning-assignment](https://github.com/nguyendangcole/deeplearning-assignment)
