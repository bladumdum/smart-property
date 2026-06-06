from flask import Flask
from routes.prediction import prediction_bp
from routes.history import history_bp

app = Flask(__name__)

app.register_blueprint(prediction_bp)
app.register_blueprint(history_bp)

@app.route("/")
def home():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)
