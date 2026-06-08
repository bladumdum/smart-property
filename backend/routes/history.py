from flask import Blueprint, request, jsonify
from service.prediction_service import PredictionService

history_bp = Blueprint('history', __name__)

service = PredictionService()

@history_bp.route('/history', methods=['GET'])
def get_prediction_history():

    try:
        result = service.get_history()

        return jsonify({
            'success': True,
            'history': result
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'messages': str(e),
        }), 500
