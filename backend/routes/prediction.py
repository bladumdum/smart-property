from flask import Blueprint, request, jsonify
from service.prediction_service import PredictionService

prediction_bp = Blueprint('prediction', __name__)

service = PredictionService()

@prediction_bp.route("/predict", methods=["POST"])
def predict():
    data = request.json

    try:
        result = service.predict_house_service(data)

        return jsonify({
            'prediction': float(result)
        })
    except Exception as e:
        return jsonify({
            'success': '',
            'messages': str(e),
        }), 500
