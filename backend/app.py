from flask import Flask
from routes.prediction import prediction_bp
from routes.history import history_bp
from flask_cors import CORS

app = Flask(__name__)

CORS(app, origins=["http://localhost:5173"])

app.register_blueprint(prediction_bp, url_prefix='/prediction')
app.register_blueprint(history_bp)

@app.route("/")
def home():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)
