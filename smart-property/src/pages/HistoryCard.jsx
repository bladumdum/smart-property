export default function HistoryCard({ id }) {
  return (
    <div className="bg-bg-card py-10 w-full rounded-sm" key={id}>
      <div className="flex justify-between items-center px-6">
        <div className="flex flex-col gap-3 max-w-sm">
          <h6 className="text-2xl font-semibold">Prediksi 1</h6>
          <div className="text-gray-400 text-sm flex flex-col gap-1">
            <p>Luas Bangunan: 220</p>
            <p>Luas Bangunan: 220</p>
            <p>Luas Bangunan: 220</p>
            <p>Luas Bangunan: 220</p>
            <p>Luas Bangunan: 220</p>
          </div>
          <hr />
          <p className=" font-semibold">
            Harga Prediksi: <span className="text-info">3.200.000.000</span>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 max-w-sm">
          <button
            onClick={() =>
              alert("Fitur ini masih belum dibuat. backendnya bingung cik😭")
            }
            className="bg-brand flex justify-center items-center rounded-sm h-16 px-12 py-2 text-sm font-semibold w-full">
            Edit
          </button>
          <button className="bg-error flex justify-center items-center rounded-sm h-16 px-12 py-2 text-sm font-semibold w-full">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
