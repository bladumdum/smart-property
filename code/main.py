import pandas as pd
from sklearn.model_selection import train_test_split
import joblib
from  pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
csv_path = BASE_DIR / 'dataset'/ 'data.csv'
df = pd.read_csv(csv_path)
df.drop(columns=['Unnamed: 0', 'NO', 'NAMA RUMAH'], inplace=True)

X = df.drop(columns=["HARGA"])
y = df["HARGA"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

from sklearn.ensemble import RandomForestRegressor

reg = RandomForestRegressor(n_estimators=300, criterion="absolute_error", random_state=42, n_jobs=-1, max_depth=11)
reg.fit(X_train, y_train)

model_dir = BASE_DIR / 'backend'
model_dir.mkdir(parents=True, exist_ok=True)

joblib.dump(reg, model_dir / 'random_forest_model.pkl')
