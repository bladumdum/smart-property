import Card from "../common/Card";

export default function SystemOperation() {
  const instructionSets = [
    "Pengguna memasukkan data rumah",
    "Data diproses oleh model Random Forest",
    "Model menghitung estimasi harga",
    "Sistem menampilkan hasil prediksi model",
  ];
  return (
    <section className="py-24 flex justify-center items-center">
      <div className="flex flex-col items-center text-center gap-6">
        <h2 className=" text-5xl">Cara Kerja Sistem</h2>

        <div className="flex flex-col gap-6">
          {instructionSets.map((instruction, index) => (
            <Card key={instruction} title={instruction} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
