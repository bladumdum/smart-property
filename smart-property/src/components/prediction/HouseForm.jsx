import { useState } from "react";

import Input from "../common/Input";
const [formData, setFormData] = useState({
  LB: "",
  LT: "",
  KT: "",
  KM: "",
  GRS: "",
});
export default function HouseForm({ setPrediction }) {
  const inputContents = [
    {
      label: "Luas Bangunan",
      type: "number",
      value: formData.LB,
      placeholder: "Ukuran bangunan dalam meter persegi",
    },
    {
      label: "Luas Tanah",
      type: "number",
      value: formData.LT,
      placeholder: "Ukuran Tanah dalam meter persegi",
    },
    {
      label: "Kamar Tidur",
      type: "number",
      value: formData.KT,
      placeholder: "Jumlah kamar tidur",
    },
    {
      label: "Kamar Mandi",
      type: "number",
      value: formData.KM,
      placeholder: "Jumlah kamar mandi",
    },
    {
      label: "Garasi",
      type: "number",
      value: formData.KM,
      placeholder: "Jumlah garasi",
    },
  ];

  const handleChange = (value) => {
    return;
  };

  return (
    <div className=" pt-24 w-full">
      <form action="POST" className="w-full">
        <div className="flex flex-col gap-4">
          {inputContents.map(({ label, type, value, placeholder }) => (
            <div className="flex flex-col gap-2">
              <Input
                label={label}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
