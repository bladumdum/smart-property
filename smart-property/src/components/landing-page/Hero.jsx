import heroImage from "../../assets/images/landing-page/hero.jpg";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className=" container mx-auto h-full flex items-center justify-center relative z-10 text-center flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className=" text-6xl font-semibold">Prediksi Harga Rumah</h1>
          <h5 className=" text-xl font-semibold">
            Menggunakan{" "}
            <span className=" text-brand">Random Forest Regressor</span>
          </h5>
        </div>
        <p className="text-gray-400 max-w-md leading-relaxed">
          Prediksi harga rumah dengan Machine Learning berdasarkan karakteristik
          properti.
        </p>
        <Button />
        <div className=" mt-32"></div>
      </div>
    </section>
  );
}
