from flask import Flask, request, jsonify, render_template
import tensorflow as tf

app = Flask(__name__)

# load trained model
model = tf.keras.models.load_model("models/toxicity.h5")

# load vectorizer model
vectorizer = tf.keras.models.load_model("vectorizer_model")

labels = [
    "toxic",
    "severe_toxic",
    "obscene",
    "threat",
    "insult",
    "identity_hate"
]


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json
    comment = data["text"]

    # convert to tensor
    vectorized = vectorizer(tf.constant([comment]))

    result = model.predict(vectorized)[0]

    response = {}

    for i,label in enumerate(labels):
        response[label] = float(result[i])

    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)