from models.predictor import HousePredictor
from database.db import DatabaseManager
import pandas as pd
from entities.house import HouseForm

class PredictionService:
    """Representasi dari logika bisnis prediksi 

    Private Attribute:
        __predictor: Objek yang melakukan prediksi harga rumah.
        __db: Objek yang mengelola koneksi database.
    """
    def __init__(self, predictor:HousePredictor =  None, db:DatabaseManager = None):
        self.__predictor  = predictor or HousePredictor()
        self.__db = db or DatabaseManager()

    def predict_house(self, house:HouseForm)->float:

        prediction = self.__predictor.predict(house.to_dataframe())

        house_data = house.to_dict()

        saved = self.__db.save_prediction(
            lb=int(house_data["LB"]),
            lt=int(house_data["LT"]),
            kt=int(house_data["KT"]),
            km=int(house_data["KM"]),
            grs=int(house_data["GRS"]),
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
