import kagglehub

# Download latest version
path = kagglehub.dataset_download("wisnuanggara/daftar-harga-rumah")

print("Path to dataset files:", path)