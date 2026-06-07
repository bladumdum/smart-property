from flask import Blueprint, request, jsonify
from service.prediction_service import PredictionService
from entities.house import HouseForm

prediction_bp = Blueprint('prediction', __name__)

service = PredictionService()

@prediction_bp.route('/predict', methods=['POST'])
def predict():
    data = request.get_json() or {}

    required_fields = ["LB", "LT", "KT", "KM", "GRS"]

    # validasi input
    for field in required_fields:
        if field not in data:
            return jsonify({
                "success": False,
                "messages": f"field {field} harus diisi"
            }), 400

    try:
        # unpacking data
        house = HouseForm(**data)
        result = service.predict_house(house)

        return jsonify({
            'success': True,
            'prediction': result
        })
    
    except TypeError as e:
        return jsonify({
            'success':False,
            'messages': str(e),
        }), 400
    
    except Exception as e:
        return jsonify({
            'success': False,
            'messages': str(e),
        }), 500
    
@prediction_bp.route("/health")
def health():
    return {
        "success": True,
        "message": "API running"
    }
