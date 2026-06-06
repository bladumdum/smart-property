from models.predictor import HousePredictor
from database.db import DatabaseManager
import pandas as pd

class PredictionService:
    """Representasi dari logika bisnis prediksi 

    Private Attribute:
        __predictor: Objek yang melakukan prediksi harga rumah.
        __db: Objek yang mengelola koneksi database.
    """
    def __init__(self, predictor:HousePredictor =  None, db:DatabaseManager = None):
        self.__predictor  = predictor or HousePredictor()
        self.__db = db or DatabaseManager()

    def predict_house(self, data)->float:
        features = pd.DataFrame([{
        'LB': data['LB'],
        'LT': data['LT'],
        'KT': data['KT'],
        'KM': data['KM'],
        'GRS': data['GRS'], 
        }])

        prediction = self.__predictor.predict(features)

        saved = self.__db.save_prediction(
            lb=int(data["LB"]),
            lt=int(data["LT"]),
            kt=int(data["KT"]),
            km=int(data["KM"]),
            grs=int(data["GRS"]),
            predicted_price=float(prediction)
        )

        if not saved:
            raise Exception('failed to save prediction')

        return prediction
    
    def get_history(self)->list[dict]:
        got = self.__db.get_prediction_history()

        if got is None:
            raise Exception('failed to get history')
        
        return got
