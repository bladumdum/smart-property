import Button from "../common/Button";

export default function GetReady() {
  return (
    <section className=" py-24 flex justify-center items-center">
      <div className="flex flex-col items-center text-center gap-6">
        <h2 className="text-5xl">Siap Mencoba?</h2>
        <p className="text-gray-400 max-w-md leading-relaxed">
          Prediksi harga rumah anda sekarang
        </p>
        <Button />
      </div>
    </section>
  );
}
