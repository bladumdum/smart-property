import mysql.connector
from  schema import CREATE_NONEXISTING_DATABASE, PREDICTION_HISTORY_TABLE

class DatabaseManager:
    def __init__(self):
        """Mengelola koneksi database.

        Private Attributes:
            ____temp_connection: Objek koneksi sementara ke database MySQL yang digunakan jika database suduh ada.
            __temp_cursor:  Cursor database sementara untuk menjalankan query.
            ____connection: Objek koneksi ke database MySQL yang dijalankan ketika database belum ada.
            __cursor:  Cursor database untuk menjalankan query.
        """
        # insialisasi koneksi sementara ke database
        self.__temp_connection = mysql.connector.connect(
            host = 'localhost',
            user = 'root',
            password = '',
        )

        # membuat cursor sementara
        self.__temp_cursor = self.__temp_connection.cursor()
        self.__temp_cursor.execute(CREATE_NONEXISTING_DATABASE)

        self.__temp_connection.commit
        self.__temp_connection.close()

        self.__connection = mysql.connector.connect(
            host = 'localhost',
            user = 'root',
            password = '',
            database = 'house_prediction',
        )
        
        self.__cursor = self.__connection.cursor()

    def create_tables(self)->None:
        queries = [
            PREDICTION_HISTORY_TABLE
        ]

        for query in queries:
            self.__cursor.execute(query)

        self.__connection.commit()

    def save_prediction(
            self,
            lb:int,
            lt:int,
            kt:int,
            km:int,
            grs:int,
            predicted_price:float,
    )->None:
        """Menyimpan data prediksi ke tabel prediction_history di database

        Args:
            lb (int): Luas bangunan.
            lt (int): Luas tanah.
            kt (int): Jumlah kamar tidur.
            km (int): Jumlah kamar mandi.
            grs (int): Jumlah kapasitas mobil dalam garasi.
            predicted_price (float): Hasil yang diprediksi oleh model.
        """
        query = """
        insert into prediction_history
        (lb, lt, kt, km, grs, predicted_price)
        values (%s, %s, %s, %s, %s, %s)
        """
        
        values = (
            lb, 
            lt, 
            kt,
            km, 
            grs,
            predicted_price
        )

        try:
            self.__cursor.execute(query, values)
            self.__connection.commit()
            return True
        except Exception as e:
            print(e)
            return False
