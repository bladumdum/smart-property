import { useState } from "react";
import Input from "../common/Input";
import { predictionHouse } from "../../services/api";

export default function HouseForm({ setPrediction }) {
  const [formData, setFormData] = useState({
    LB: Number(""),
    LT: Number(""),
    KT: Number(""),
    KM: Number(""),
    GRS: Number(""),
  });

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

  const dataFormValidation = (data) => {
    const dataLimit = [
      { id: "lb", name: "Luas Bangunan", max: 10000, min: 1 },
      { id: "lt", name: "Luas Tanah", max: 10000, min: 1 },
      { id: "kt", name: "Kamar Tidur", max: 10000, min: 1 },
      { id: "km", name: "Kamar Mandi", max: 10000, min: 0 },
      { id: "grs", name: "Garasi", max: 10000, min: 0 },
    ];

    for (const { id, name, max, min } of dataLimit) {
      const v = Number(data[id.toUpperCase()]);

      if (isNaN(v) || v > max || v < min) {
        alert(`field ${name} harus diisi dengan nilai valid`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputIsValid = dataFormValidation(formData);

    if (!inputIsValid) {
      return;
    }

    try {
      const prediction = await predictionHouse(formData);

      setPrediction(prediction);
      return;
    } catch (error) {
      console.error(`error: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = (e) => {
    setFormData({
      LB: "",
      LT: "",
      KT: "",
      KM: "",
      GRS: "",
    });
  };

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
        <div className="flex justify-center items-center gap-4">
          <button
            type="submit"
            className="bg-brand hover:bg-brand-hover flex justify-center items-center rounded-sm w-full py-4 text-sm font-semibold">
            Predict
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-error hover:bg-error-hover flex justify-center items-center rounded-sm w-full py-4 text-sm font-semibold">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
