CREATE_NONEXISTING_DATABASE = """"
create database if not exists house_prediction
"""

PREDICTION_HISTORY_TABLE = """
create table if not exists prediction_history (
    id int auto_increment primary_key,
    lb int not null,
    lt int not null,
    kt int not null,
    km int not null,
    grs int not null,
    predicted_price decimal not null
"""

