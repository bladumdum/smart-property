import mysql.connector
from database.schema import CREATE_NONEXISTING_DATABASE, PREDICTION_HISTORY_TABLE, PREDICTION_HISTORY
import traceback

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

        self.__temp_connection.commit()
        self.__temp_connection.close()

        self.__connection = mysql.connector.connect(
            host = 'localhost',
            user = 'root',
            password = '',
            database = 'house_prediction',
        )
        
        self.__cursor = self.__connection.cursor()

        self.create_tables()

    def get_connection(self):
        return mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="house_prediction",
        )

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
        connection = self.get_connection()
        cursor = connection.cursor()

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
        (
            building_size_m2,
            land_size_m2,
            bedroom_count,
            bathroom_count,
            garage,
            predicted_price
        )
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
            cursor.execute(query, values)
            connection.commit()
            return True
        except Exception as e:
            print(e)
            traceback.print_exc()
            return False
        finally:
            cursor.close()
            connection.close()

    def get_prediction_history(self):
        connection = self.get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            cursor.execute(PREDICTION_HISTORY)

            result = cursor.fetchall()
        except Exception as e:
            print(e)
            traceback.print_exc()
            return False
        finally:
            cursor.close()
            connection.close()

        return result
    
    def delete(self, predicted_id): 
        connection = self.get_connection()
        cursor = connection.cursor()

        cursor.execute(
            "delete from prediction_history where id = %s", 
            (predicted_id,)
        )

        connection.commit()

        return cursor.rowcount
