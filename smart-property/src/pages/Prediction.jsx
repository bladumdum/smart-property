import { useState } from "react";
import HouseForm from "../components/prediction/HouseForm";
import PredictionCard from "../components/prediction/PredictionCard";

export default function Prediction() {
  const [prediction, setPrediction] = useState(null);
  return (
    <div className="container-center">
      <div className="flex flex-col justify-center items-center py-24">
        <div className="max-w-md">
          <h2 className="text-6xl font-semibold text-center">
            Prediksi Harga Rumah
          </h2>
          <div className="flex flex-col gap-8">
            <HouseForm setPrediction={setPrediction} />
            <PredictionCard prediction={prediction} />
          </div>
        </div>
      </div>
    </div>
  );
}
