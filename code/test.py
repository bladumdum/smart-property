import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
import numpy as np

path = "./dataset"
df = pd.read_csv(f"{path}/dataset_kelulusan_mahasiswa.csv")
df = df.dropna(subset=["Status Kelulusan"])

X = df.drop(columns=["Status Kelulusan", "Jumlah Semester", "IPS Semester Akhir"])
y = df["Status Kelulusan"]

# # print(X.info())
# print(print(X.describe(include="O").columns))
# print(print(X.describe(include=[np.number]).columns))
# print(X["IPS Semester Akhir"].head())

# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# categorycal_cols = X.select_dtypes(include=["object"]).columns.tolist()

# ct = ColumnTransformer([("encoder", OneHotEncoder(handle_unknown="ignore"), categorycal_cols)], remainder="passthrough")

# X_train = np.array(ct.fit_transform(X_train))
# X_test = np.array(ct.transform(X_test))

# encoded_df = pd.DataFrame(
#     X_train, 
#     columns=ct.get_feature_names_out()
# )

