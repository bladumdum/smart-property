import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestRegressor
import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics import mean_squared_error, r2_score
import seaborn as sns
import matplotlib.pyplot as plt
from collections import Counter
from sklearn.impute import SimpleImputer

df = pd.read_csv('./dataset/jabodetabek_house_price.csv')
df.drop(columns=['url', 'title', 'address', 'ads_id', 'year_built'], inplace=True)

# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# print(df.duplicated().sum())
# df.drop_duplicates(inplace=True)
# print(df.duplicated().sum())

num_cols = df.select_dtypes(include=[np.number]).columns.tolist()
cat_cols = df.select_dtypes(include=['object']).columns.tolist()

median_missing_cols=['bathrooms', 'bedrooms', 'building_age', 'land_size_m2', 'building_size_m2']
mode_missing_cols = ['floors', 'property_type']

df['building_age_missing'] = (
    df['building_age'].isna().astype(int)
)

df[["property_type", 'property_condition', 'certificate', 'building_orientation', 'furnishing']] = (
    df[[
    "property_type", 
    'property_condition', 
    'certificate', 
    'building_orientation', 
    'furnishing'
    ]].fillna("unknown")
)

def median_filler(df:pd.DataFrame, missing_cols)->pd.DataFrame:
    for col in missing_cols:
        df[col] = df[col].fillna(
            df[col].median()
        )

    return df

def mode_filler(df:pd.DataFrame, missing_cols)->pd.DataFrame:
    for col in missing_cols:
        df[col] = df[col].fillna(
            df[col].mode()[0]
        )

    return df

df = median_filler(df, median_missing_cols)
df = mode_filler(df, mode_missing_cols)

all_facilities = (
    df["facilities"]
    .fillna("")
    .str.lower()
    .str.split(",")
    .explode()
    .str.strip()
)


facility_counts = all_facilities.value_counts()

important_facilities = (
    facility_counts
    .head(20)
    .index
    .tolist()
)

for facility in important_facilities:
    df[f'fac_{facility}'] = (
        df['facilities']
        .fillna('')
        .str.lower()
        .str.contains(facility, regex=False)
        .astype(int)
    )

df.drop(columns=['facilities'], inplace=True)

for fac in df.head().columns.tolist():
    if 'fac' in fac:
        print(fac)

# print(df.head().columns)

# sns.heatmap(df.corr()[['price_in_rp']].sort_values(by='price_in_rp', ascending=False), annot = True)
# plt.show()
