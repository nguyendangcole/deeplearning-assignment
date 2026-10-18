# Assignment 1: Foundations of Deep Learning Pipelines & Architectures

<div align="center">

![Course](https://img.shields.io/badge/Course-CO3133%20Deep%20Learning-blue?style=for-the-badge)
![Assignment](https://img.shields.io/badge/Assignment-01%20Foundations-003366?style=for-the-badge)
![Dataset](https://img.shields.io/badge/Dataset-Fashion--MNIST-orange?style=for-the-badge)
![Weight](https://img.shields.io/badge/Weight-40%25%20Course%20Grade-success?style=for-the-badge)

**Comparative Benchmark from Linear Classifiers to Vision Transformers on Fashion-MNIST**  
*Faculty of Computer Science and Engineering — Ho Chi Minh City University of Technology (HCMUT)*

[Live Web Showcase](https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-1) • [Main Repository](https://github.com/nguyendangcole/deeplearning-assignment) • [Course Handbook](../handbook-ene.pdf)

</div>

---

## 📌 1. Assignment Overview

| Field | Details |
| :--- | :--- |
| **Student** | **Đặng Duy Nguyên** (Student ID: `2352821`) |
| **Advisor** | **Dr. Lê Thành Sách** |
| **Course** | Deep Learning and Its Applications (`CO3133`) — Semester 261 |
| **Task** | 10-Class Fashion Image Classification & Multi-Architecture Comparative Study |
| **Dataset** | Fashion-MNIST (60,000 train / 10,000 test, $28 \times 28$ grayscale images) |
| **Data Split** | Train: 54,000 (90%) · Validation: 6,000 (10%) · Test: 10,000 (Seed 42) |
| **Evaluated Architectures** | Linear Classifier, MLP, CNN, Recurrent Networks (LSTM & GRU), Vision Transformer (ViT) |

---

## 📊 2. Master Benchmark Results (Test Set)

All models were evaluated under identical conditions on the unseen test set (10,000 images, Fashion-MNIST) with seed `42`:

| Model Architecture | Parameters | Best Val Acc (%) | Test Acc (%) | Test Macro-F1 (%) | Train Time (s) | Latency (ms/sample) | Checkpoint |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Linear Classifier** | 7,850 | 85.13% | 84.21% | 84.19% | 276.4s | **0.0027 ms** | [`linear_best.pth`](./checkpoints/linear_best.pth) |
| **Multilayer Perceptron (MLP)** | 235,146 | 88.98% | 88.77% | 88.71% | 285.8s | 0.0121 ms | [`mlp_best.pth`](./checkpoints/mlp_best.pth) |
| **Convolutional Neural Network (CNN)** | 421,834 | **92.63%** | **92.19%** | **92.17%** | 306.7s | 0.0205 ms | [`cnn_best.pth`](./checkpoints/cnn_best.pth) |
| **LSTM Baseline ($H=128$)** | 82,186 | 90.33% | 90.00% | 89.95% | 289.1s | 0.0242 ms | [`lstm_128_best.pth`](./checkpoints/lstm_128_best.pth) |
| **GRU Baseline ($H=128$)** | 61,962 | 90.80% | 90.51% | 90.46% | 292.6s | 0.0202 ms | [`gru_128_best.pth`](./checkpoints/gru_128_best.pth) |
| **LSTM Matched ($H=258$)** | 299,806 | 90.80% | 89.94% | 89.91% | 305.5s | 0.0475 ms | [`lstm_300k_best.pth`](./checkpoints/lstm_300k_best.pth) |
| **GRU Matched ($H=300$)** | 300,010 | **91.02%** | **90.60%** | **90.49%** | 303.9s | 0.0460 ms | [`gru_300k_best.pth`](./checkpoints/gru_300k_best.pth) |
| **Vision Transformer (ViT)** | 72,074 | 88.07% | 87.60% | 87.52% | 373.5s | 0.0802 ms | [`transformer_best.pth`](./checkpoints/transformer_best.pth) |

---

## 🧠 3. Key Findings & Architectural Insights

1. **Spatial Inductive Bias Dominates ($92.19\%$ Test Acc):**  
   The CNN achieves the highest accuracy and macro-F1 across all benchmarks. Local receptive fields and translation equivariance are inherently suited to pixel grids, maintaining spatial relationships that flatten-based models lose.

2. **Parameter-Efficiency: GRU vs. LSTM ($300\text{K}$ Budget):**  
   Under a matched $\approx 300\text{K}$ parameter budget, **GRU outperforms LSTM** ($90.60\%$ vs $89.94\%$) while achieving faster inference. GRU's simpler gating mechanism allocates all parameters into wider hidden states ($H=300$ vs $H=258$).

3. **Vision Transformer from Scratch ($87.60\%$):**  
   Without inductive biases or large-scale pretraining, training a ViT directly on 50,000 $28\times28$ images reaches competitive accuracy ($87.60\%$) but requires higher compute and longer epoch times compared to CNN.

---

## 🚀 4. How to Reproduce

### Option A: View Executed Notebook Directly on GitHub
You can inspect the full notebook with all 63 executed cell outputs, loss curves, confusion matrices, and benchmark tables directly in your browser:
* 📓 **[Assignment1_Extended_Executed.ipynb](./Assignment1_Extended_Executed.ipynb)** *(Pre-computed Colab outputs)*

### Option B: Run Locally with Jupyter
```bash
# 1. Clone repository
git clone https://github.com/nguyendangcole/deeplearning-assignment.git
cd deeplearning-assignment

# 2. Install Python dependencies
pip install torch torchvision numpy pandas matplotlib seaborn scikit-learn

# 3. Launch notebook
jupyter notebook assignment1/Assignment1_Extended.ipynb
```

### Option C: Run in Google Colab
Upload [Assignment1_Extended.ipynb](./Assignment1_Extended.ipynb) to [Google Colab](https://colab.research.google.com/), select a **T4 GPU** runtime, and run all cells.

---

## 💾 5. Loading Checkpoints in PyTorch

All trained model weights are saved in PyTorch state dictionary format under [`assignment1/checkpoints/`](./checkpoints/):

```python
import torch

# Example: Loading the best CNN checkpoint
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
checkpoint_path = 'assignment1/checkpoints/cnn_best.pth'

# Note: define CNNClassifier architecture before loading
# model = CNNClassifier().to(device)
state_dict = torch.load(checkpoint_path, map_location=device)
model.load_state_dict(state_dict)
model.eval()
print("Checkpoint loaded successfully!")
```

---

## 📂 6. Directory Structure

```text
assignment1/
├── Assignment1_Extended_Executed.ipynb  # Executed notebook with full outputs, tables & plots
├── Assignment1_Extended.ipynb           # Clean reproducible training pipeline
├── Assignment1 (1).ipynb                # Initial baseline run notebook
├── README.md                            # Assignment 1 documentation (this file)
├── all_histories.json                   # Consolidated epoch-by-epoch loss & accuracy curves
├── checkpoints/                         # PyTorch model weights (.pth)
│   ├── cnn_best.pth                     # Best CNN checkpoint (421k params, 92.19% acc)
│   ├── linear_best.pth                  # Best Linear classifier checkpoint (84.21% acc)
│   ├── mlp_best.pth                     # Best MLP checkpoint (88.77% acc)
│   ├── lstm_128_best.pth                # Best LSTM baseline (82k params, 90.00% acc)
│   ├── gru_128_best.pth                 # Best GRU baseline (62k params, 90.51% acc)
│   ├── lstm_300k_best.pth               # Matched budget LSTM (300k params, 89.94% acc)
│   ├── gru_300k_best.pth                # Matched budget GRU (300k params, 90.60% acc)
│   ├── mlp_300k_best.pth                # Matched budget MLP (300k params)
│   └── transformer_best.pth             # Best ViT checkpoint (72k params, 87.60% acc)
├── figures/                             # 27+ visualization figures & plots
│   ├── *_confusion_matrix.png           # Multi-class confusion matrices
│   ├── *_training_history.png           # Train vs. Val loss and accuracy curves
│   ├── *_sample_predictions.png         # Model inference visual qualitative predictions
│   ├── lstm_vs_gru_matched_*.png        # Matched budget convergence & comparison
│   ├── eda_*.png                        # Dataset distribution & representative samples
│   └── master_tradeoff_comparison.png   # Accuracy vs Parameters vs Latency trade-offs
├── histories/                           # Individual model JSON training history logs
├── results/                             # Quantitative evaluation exports
│   ├── master_model_comparison.csv      # Full master benchmark metrics table
│   └── model_comparison.csv             # Raw benchmark metrics table
└── scripts/
    └── build_extended_notebook.py       # Python generator script for reproducible notebook
```

---

## 🔗 References & Navigation

* 🌐 **Interactive Web Portfolio:** [https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-1](https://nguyendangcole.github.io/deeplearning-assignment/#/assignment-1)
* 📖 **Course Handbook:** [handbook-ene.pdf](../handbook-ene.pdf)
* 🏠 **Root Repository:** [deeplearning-assignment](https://github.com/nguyendangcole/deeplearning-assignment)
