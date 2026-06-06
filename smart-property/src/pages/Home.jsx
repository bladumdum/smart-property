export default function HomePage() {
  return (
    <>
      {/* hero */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('../assets/images/hero.jpg')` }}>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className=" container mx-auto h-full flex items-center justify-center relative z-10">
          <h1 className=" text-6xl font-semibold">Prediksi Harga Rumah</h1>
        </div>
      </section>
    </>
  );
}
