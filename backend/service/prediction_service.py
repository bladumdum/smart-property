from models.predictor import HousePredictor
from database.db import DatabaseManager
import pandas as pd
import numpy as np

class PredictionService:
    """Representasi dari logika bisnis prediksi 

    Private Attribute:
        __predictor: Objek yang melakukan prediksi harga rumah.
        __db: Objek yang mengelola koneksi database.
    """
    def __init__(self, predictor = HousePredictor, db = DatabaseManager):
        self.__predictor = predictor
        self.__db = db

    def predict_house_service(self, data)->np.ndarray:
        features = pd.DataFrame[{
        'LB': data['LB'],
        'LT': data['LT'],
        'KT': data['KT'],
        'KM': data['KM'],
        'GRS': data['GRS'], 
        }]

        prediction = self.__predictor.predict(features)

        saved = self.__db.d_prediction(
            lb=features["LB"],
            lt=features["LT"],
            kt=features["KT"],
            km=features["KM"],
            grs=features["GRS"],
            predicted_price=float(prediction)
        )

        if not saved:
            raise Exception('failed to save prediction')

        return prediction
