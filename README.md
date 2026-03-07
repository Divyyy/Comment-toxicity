# Toxic Comment Classification

This project focuses on building a **deep learning based multi-label NLP model** for detecting toxic comments across multiple categories.

The core development and experimentation are implemented in **`ct.ipynb`**, which contains the complete training pipeline from raw data preprocessing to model evaluation.

---

## Project Overview

Online platforms require automated systems to detect harmful or abusive content.  
This project addresses that problem using **multi-label text classification**, where a single comment may belong to multiple toxicity categories simultaneously.

The model learns contextual patterns in text and predicts toxicity probabilities for each category.

---

## Main Training Notebook

The primary work of this project is contained in:

```
ct.ipynb
```

This notebook includes the full machine learning workflow:

- Data loading and exploration
- Text preprocessing
- Text vectorization
- Model architecture definition
- Model training
- Evaluation metrics
- Training loss visualization

The notebook demonstrates the complete **end-to-end pipeline for training a toxicity classification model**.

---

## Toxicity Categories

The model predicts the following labels:

- toxic  
- severe_toxic  
- obscene  
- threat  
- insult  
- identity_hate  

Each label is predicted as a **probability score between 0 and 1**.

---

## Model Architecture

The model uses a deep learning sequence model for text classification.

Pipeline:

```
Text Input
↓
TextVectorization
↓
Embedding Layer
↓
Bidirectional LSTM
↓
Dense Output Layer (Sigmoid)
```

### Components

**TextVectorization**

Converts raw text into integer token sequences.

**Embedding Layer**

Maps tokens into dense vector representations.

**Bidirectional LSTM**

Captures contextual dependencies in text sequences.

**Dense Layer**

Produces multi-label toxicity probabilities using sigmoid activation.

---

## Training Configuration

Training was performed using **TensorFlow / Keras**.

Key settings:

- Optimizer: Adam
- Loss Function: Binary Crossentropy
- Epochs: 5
- Metrics:
  - Precision
  - Recall
  - Accuracy

For multi-label classification tasks, **precision and recall provide more meaningful evaluation than accuracy alone**.

---

## Training Visualization

The notebook tracks both **training loss and validation loss** across epochs to monitor model convergence and generalization.

The results show stable training behaviour with decreasing loss.

---

## Project Structure

```
comment-toxicity/
│
├── ct.ipynb
├── app.py
├── Dockerfile
├── requirements.txt
│
├── models/
│   └── toxicity.h5
│
├── vectorizer_model/
│
├── templates/
│   └── index.html
│
├── static/
│   ├── script.js
│   └── style.css
```

---

## Model Inference

After training, the model and text vectorizer are saved and used for inference.

Saved components:

```
models/toxicity.h5
vectorizer_model/
```

These are loaded by the application for toxicity prediction.

---

## Running with Docker

Build the Docker image:

```
docker build -t toxicity-detector .
```

Run the container:

```
docker run -p 5000:5000 toxicity-detector
```

---

## Concepts Demonstrated

- Natural Language Processing
- Multi-label classification
- Sequence modeling using LSTM
- Text vectorization
- Model evaluation using precision and recall
- TensorFlow training pipeline
- Containerized deployment using Docker

---
