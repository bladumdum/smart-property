import pandas as pd
from sklearn.model_selection import train_test_split
import joblib
from  pathlib import Path
from sklearn.metrics import r2_score, root_mean_squared_error
import math

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

y_pred = reg.predict(X_test)

r2 = r2_score(y_test, y_pred)
rmse = root_mean_squared_error(y_test, y_pred)

print(r2)
print(f'{math.floor(rmse):,}')

# test sample
new_data = {
    'LB': 64,
    'LT': 81,
    'KT': 2,
    'KM': 2,
    'GRS': 1,
}

new_df = pd.DataFrame(new_data, index=[0])

r = float(reg.predict(new_df)[0])

print(f'{r:,}')

model_dir = BASE_DIR / 'backend'
model_dir.mkdir(parents=True, exist_ok=True)

# joblib.dump(reg, model_dir / 'random_forest_model.pkl')
