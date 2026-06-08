import HistoryCard from "./HistoryCard";

export default function HistoryTable() {
  const ids = [1, 2, 3, 4];
  return (
    <div className="flex flex-col justify-center items-center w-full py-24 gap-6">
      {ids.map((id) => (
        <HistoryCard id={id} />
      ))}
    </div>
  );
}
