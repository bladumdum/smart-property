import aboutImg from "../../assets/images/landing-page/aboutImg.jpg";

export default function AboutProject() {
  return (
    <section className="bg-bg-secondary py-24 flex items-center">
      <div className="container-center flex flex-col md:flex-row justify-between items-center gap-24">
        {/* Text */}
        <div className="max-w-md">
          <h2 className="text-5xl font-light mb-6">Tentang Proyek</h2>

          <p className="text-gray-400 leading-relaxed">
            Sistem ini menggunakan algoritma Random Forest Regressor untuk
            memperkirakan harga rumah berdasarkan karakteristik properti seperti
            luas bangunan, luas tanah, jumlah kamar tidur, dan lokasi.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={aboutImg}
            alt="House"
            className="w-xl rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
