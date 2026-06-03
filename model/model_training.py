import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics import confusion_matrix, accuracy_score

path = "./dataset"
df = pd.read_csv(f"{path}/dataset_kelulusan_mahasiswa.csv")
df = df.dropna(subset=["Status Kelulusan"])

X = df.drop(columns=["Status Kelulusan", "Jumlah Semester", "IPS Semester Akhir"])
y = df["Status Kelulusan"]

obj_cols = X.select_dtypes(include=["object"]).columns.tolist()

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

ct = ColumnTransformer(
    [("encoder", OneHotEncoder(), obj_cols)], 
    remainder="passthrough"
)

X_train = ct.fit_transform(X_train)
X_test = ct.transform(X_test)

for d in range(2, 11):
    clf = RandomForestClassifier(n_estimators=300, criterion="entropy", random_state=0, max_depth=d)
    clf.fit(X_train, y_train)

    y_pred = clf.predict(X_test)

    cm = confusion_matrix(y_test, y_pred=y_pred)
    acc = accuracy_score(y_test, y_pred=y_pred)

    print(d)
    print(cm)
    print("\n")
    print(acc)
    print("\n")
