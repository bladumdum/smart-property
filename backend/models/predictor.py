from pathlib import Path
import joblib
import pandas as pd
import numpy as np

BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / 'random_forest_model.pkl'

class HousePredictor:
    """Representasi dari sebuah model yang memprediksi harga rumah.
    
    Attributes:
        model (any): Model untuk memprediksi harga rumah yang dibangun dengan algoritma random forest."""
    
    def __init__(self)->None:
        self.__model = joblib.load(MODEL_PATH)

    def predict(self, inp_data:pd.DataFrame)->np.ndarray:
        """lakukan prediksi
    
        Args:
            inp_data (DataFrame): Data luas bangunan, luas tanah, jumlah kamar tidur, jumlah kamar mandi, dan kapasitas mobil dalam garasi.

        Returns:
            np.ndarray: array satu dimensi yang berisi value hasil prediksi model
            """
        
        return self.__model.predict(inp_data)[0]
