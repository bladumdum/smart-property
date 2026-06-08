import HistoryTable from "../components/prediction/HistoryTable";

export default function History() {
  return (
    <div className="container-center">
      <div className="flex flex-col justify-center items-center py-24">
        <h2 className="text-5xl font-semibold">History Prediction</h2>
        <HistoryTable />
      </div>
    </div>
  );
}
