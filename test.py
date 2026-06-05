# import pandas as pd

# df = pd.DataFrame([{
#     'a': 'martian',
#     'b': 'martianezo',
#     'c': 'martiano',
# }])

# print(df.describe().T)

from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello World'

app.run()
