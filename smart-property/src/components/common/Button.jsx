import { Link } from "react-router-dom";

export default function Button({ name = "Mulai Prediksi" }) {
  return (
    <Link
      className=" bg-brand flex justify-between items-center rounded-sm h-16 px-12 py-2 text-sm font-semibold"
      to={"/prediction"}>
      {name}
    </Link>
  );
}
