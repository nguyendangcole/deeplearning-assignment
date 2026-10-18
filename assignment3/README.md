# Assignment 3: Multimodal Deep Learning

<div align="center">

![Course](https://img.shields.io/badge/Course-CO3133%20Deep%20Learning-blue?style=for-the-badge)
![Assignment](https://img.shields.io/badge/Assignment-03%20Multimodal-003366?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Planned%20Milestone-lightgrey?style=for-the-badge)
![Weight](https://img.shields.io/badge/Weight-30%25%20Course%20Grade-informational?style=for-the-badge)

**Representation Learning, Cross-Modal Fusion & Alignment Evaluation across Heterogeneous Modalities**  
*Faculty of Computer Science and Engineering — Ho Chi Minh City University of Technology (HCMUT)*

[Live Web Showcase](https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-3) • [Main Repository](https://github.com/nguyendangcole/deeplearning-assignment) • [Course Handbook](../handbook-ene.pdf)

</div>

---

## 📌 1. Assignment Overview

| Field | Details |
| :--- | :--- |
| **Student** | **Đặng Duy Nguyên** (Student ID: `2352821`) |
| **Advisor** | **Dr. Lê Thành Sách** |
| **Course** | Deep Learning and Its Applications (`CO3133`) — Semester 261 |
| **Topic** | Multimodal Deep Learning (Image-Text, Vision-Language, VQA, or Audio-Visual) |
| **Contribution** | **30%** of total course project grade |
| **Current Milestone** | Milestone M1 Proposal (Upcoming) |

---

## 🗓️ 2. Milestone Roadmap & Deliverables

As defined in **Section 7 of the HCMUT Course Project Handbook**:

| Milestone | Deadline (23:59 GMT+7) | Description & Required Minimum Deliverables | Status |
| :--- | :---: | :--- | :---: |
| **M1 Proposal** | **18 Nov 2026** | Multimodal task formulation, paired dataset proposal ($\ge 5,000$ pairs), unimodal baseline plan | Upcoming |
| **M2 Draft** | **25 Nov 2026** | Unimodal Baseline A, Unimodal Baseline B, Simple fusion baseline with initial quantitative metrics | Upcoming |
| **M3 Final** | **02 Dec 2026** | Advanced cross-modal fusion architecture, ablation study, alignment evaluation, report (PDF), presentation slides & video defense | Upcoming |

---

## 🎯 3. Core Technical & Experimental Requirements

In adherence to **Part IV (Assignment 3)** of the Course Handbook:

1. **Dataset Requirements:**
   * Paired multimodal dataset with **$\ge 2$ genuine modalities** (e.g., Image-Text, RGB-Depth, Audio-Spectrogram & Text).
   * Minimum **$\ge 5,000$ aligned pairs**.
   * Split verification and leakage prevention across paired instances.

2. **Methodology & Architectural Components:**
   * **Unimodal Baseline A:** Independent model trained strictly on Modality A.
   * **Unimodal Baseline B:** Independent model trained strictly on Modality B.
   * **Simple Fusion Baseline:** Early fusion (feature concatenation) or late fusion (decision ensemble / average pooling).
   * **Advanced Multimodal Fusion:** Cross-attention transformer, dual-encoder contrastive alignment (e.g., CLIP-style), or co-attention mechanism.

3. **Evaluation Protocol:**
   * Downstream task performance (classification accuracy / retrieval Recall@K / BLEU / mAP).
   * Cross-modal alignment evaluation & representation similarity.
   * Controlled ablation analyzing fusion mechanisms vs unimodal backbones.

---

## 📂 4. Directory Structure

```text
assignment3/
├── README.md               # Assignment 3 documentation (this file)
├── notebooks/              # Multimodal training & alignment notebooks
├── src/                    # Modular encoders, cross-modal attention, and fusion heads
├── checkpoints/            # Saved multimodal model checkpoints (.pth)
├── figures/                # Cross-modal retrieval curves, attention heatmaps, ablation charts
└── results/                # Quantitative benchmark CSVs and evaluation logs
```

---

## 🚀 5. Quickstart & Instructions

```bash
# 1. Navigate to Assignment 3 directory
cd assignment3

# 2. Install requirements
pip install -r requirements.txt  # (To be populated upon M2 release)

# 3. Run training pipeline
python src/train.py --config configs/multimodal.yaml
```

*Updates, notebooks, checkpoint links, and evaluation results will be published progressively as milestones are reached.*

---

## 🔗 References & Navigation

* 🌐 **Interactive Web Portfolio:** [https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-3](https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-3)
* 📖 **Course Handbook:** [handbook-ene.pdf](../handbook-ene.pdf)
* 🏠 **Root Repository:** [deeplearning-assignment](https://github.com/nguyendangcole/deeplearning-assignment)
