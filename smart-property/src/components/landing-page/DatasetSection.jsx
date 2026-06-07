import Card from "../common/Card";

export default function DatasetSection() {
  const cardNames = [
    {
      title: "No",
      desc: "Nomor data",
    },
    {
      title: "Nama Rumah",
      desc: "Title rumah",
    },
    {
      title: "Harga",
      desc: "Harga dari rumah",
    },
    {
      title: "Luas Bangunan",
      desc: "Ukuran bangunan dalam meter persegi",
    },
    {
      title: "Luas Tanah",
      desc: "Ukuran tanah dalam meter persegi",
    },
    {
      title: "Kamar Tidur",
      desc: "Jumlah kamar tidur",
    },
    {
      title: "Kamar Mandi",
      desc: "Jumlah kamar mandi",
    },
    {
      title: "Garasi",
      desc: "Jumlah garasi",
    },
  ];

  return (
    <section className=" py-24 flex justify-center items-center">
      <div className=" flex flex-col items-center gap-6">
        {/* text */}
        <div className="max-w-md text-center">
          <h2 className=" text-5xl mb-6">Dataset</h2>
          <p className=" text-gray-400 leading-relaxed">
            Dataset daftar harga rumah yang saya dapatkan dari kaggle{" "}
            <a
              href="https://www.kaggle.com/datasets/wisnuanggara/daftar-harga-rumah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400">
              daftar harga rumah
            </a>{" "}
            . Dataset ini terdiri dari 8 kolom dengan jumlah data 1100 data
          </p>
        </div>

        {/* cards */}
        <div className=" grid md:grid-cols-3 gap-6">
          {cardNames.map(({ title, desc }) => (
            <Card key={title} title={title} desc={desc} shrink={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
