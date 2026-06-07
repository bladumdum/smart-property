from dataclasses import dataclass, asdict
import pandas as pd

@dataclass
class HouseForm:
    """Representasi dari data input rumah yang dikirimkan dari frontend
    """
    LB:int
    LT:int
    KT:int
    KM:int
    GRS:int

    def to_dataframe(self)->pd.DataFrame:
        """mengonversi attribut ke dataframe"""
        return pd.DataFrame([asdict(self)])
    
    def to_dict(self)->dict: 
        """mengonversi attribut ke dictionary"""
        return asdict(self)
