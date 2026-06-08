import { useState } from "react";
import Input from "../common/Input";
import { predictionHouse } from "../../services/api";

export default function HouseForm({ setPrediction }) {
  const [formData, setFormData] = useState({
    LB: "",
    LT: "",
    KT: "",
    KM: "",
    GRS: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const prediction = await predictionHouse(formData);
      return setPrediction(prediction);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputContents = [
    {
      label: "Luas Bangunan",
      type: "number",
      name: "LB",
      value: formData.LB,
      placeholder: "Ukuran bangunan dalam meter persegi",
    },
    {
      label: "Luas Tanah",
      type: "number",
      name: "LT",
      value: formData.LT,
      placeholder: "Ukuran Tanah dalam meter persegi",
    },
    {
      label: "Kamar Tidur",
      type: "number",
      name: "KT",
      value: formData.KT,
      placeholder: "Jumlah kamar tidur",
    },
    {
      label: "Kamar Mandi",
      type: "number",
      name: "KM",
      value: formData.KM,
      placeholder: "Jumlah kamar mandi",
    },
    {
      label: "Garasi",
      type: "number",
      name: "GRS",
      value: formData.GRS,
      placeholder: "Jumlah garasi",
    },
  ];

  return (
    <div className=" pt-24 w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-4 mb-8">
          {inputContents.map(({ label, type, name, value, placeholder }) => (
            <div className="flex flex-col gap-2" key={name}>
              <Input
                label={label}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                handleChange={handleChange}
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-brand flex justify-center items-center rounded-sm w-full py-4 text-sm font-semibold">
          Predict
        </button>
      </form>
    </div>
  );
}
