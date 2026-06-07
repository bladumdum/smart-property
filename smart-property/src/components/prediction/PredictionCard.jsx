export default function PredictionCard({ prediction }) {
  return (
    <div className="flex flex-col">
      <h5 className="font-semibold pl-6">Harga Estimasi</h5>
      <div className="py-10 px-6 bg-bg-card rounded-sm">
        <p
          className={` ${prediction ? "text-brand" : "text-gray-500"} text-3xl font-semibold text-left `}>
          {prediction
            ? `Rp ${Number(prediction).toLocaleString("id-ID")}`
            : "-"}
        </p>
      </div>
    </div>
  );
}
