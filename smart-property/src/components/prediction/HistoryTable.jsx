import { useState, useEffect } from "react";
import { historyService } from "../../services/historyService";
import HistoryCard from "./HistoryCard";

export default function HistoryTable() {
  const [historyData, setHistory] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getHistory = async () => {
    try {
      const history = await historyService();

      setHistory(history);
      console.log(history[0]);
    } catch (error) {
      setError(error.message);
      console.error(`error ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteHistory = () => {
    alert("delete btn work");
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full py-24 gap-6">
      {/* {ids.map((id) => (
        <HistoryCard id={id} />
      ))} */}

      {isLoading ? (
        <div className="">Loading...</div>
      ) : error ? (
        <div className="">{error}</div>
      ) : historyData.length === 0 ? (
        <div className="">Tidak ada riwayat prediksi</div>
      ) : (
        historyData.map((history) => (
          <HistoryCard {...history} deleteHistory={deleteHistory} />
        ))
      )}
    </div>
  );
}
