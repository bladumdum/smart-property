CREATE_NONEXISTING_DATABASE = 'create database if not exists house_prediction'

PREDICTION_HISTORY_TABLE = """
create table if not exists prediction_history (
    id int auto_increment primary key,
    building_size_m2 int not null,
    land_size_m2 int not null,
    bedroom_count int not null,
    bathroom_count int not null,
    garage int not null,
    predicted_price double not null
    )
"""

PREDICTION_HISTORY = 'select * from prediction_history order by id desc'

