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
    

@history_bp.route("/history/<int:id>", methods=["DELETE"])
def delete_history(id):
    try:
        deleted_row = service.delete_history(id)

        if not deleted_row:
            return jsonify({
                "success": False,
                "message": "data tidak ditemukan",
                "deleted_row": deleted_row
            }), 404
        
        return jsonify({
            "success": True,
            "message": "data berhasil dihapus",
            "deleted_row": deleted_row
        }), 200
    
    except Exception as e:
        return jsonify({
            "message": str(e),
        }), 500
