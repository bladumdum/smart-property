import Card from "../common/Card";

export default function ModelPerform() {
  const performCards = [
    {
      title: "R2 Score",
      desc: "metrik  untuk mengukur seberapa jauh prediksi sebuah model meleset dari data aslinya",
      value: 0.78,
    },
    {
      title: "Root Mean Error Squered",
      desc: "metrik  untuk mengukur seberapa jauh prediksi sebuah model meleset dari data aslinya",
      value: 0.78,
    },
  ];

  return (
    <section className="py-24 flex justify-center items-center">
      <div className="flex flex-col items-center text-center gap-6">
        <h2 className="text-5xl">Performa Model</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {performCards.map(({ title, desc, value }) => (
            <Card key={title} title={title} desc={desc} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
