import pandas as pd

path = "./dataset"
df = pd.read_csv(f"{path}/jabodetabek_house_price.csv")

df.to_excel(f"{path}/jabodetabek_house_price.xlsx")

# import kagglehub

# # Download latest version
# path = kagglehub.dataset_download("nafisbarizki/daftar-harga-rumah-jabodetabek")

# print("Path to dataset files:", path)
