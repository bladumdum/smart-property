import { Link } from "react-router-dom";

export default function Button({ name = "Mulai Prediksi" }) {
  return (
    <Link
      className=" bg-brand hover:bg-brand-hover hover:text-text-primary-hover flex justify-center items-center rounded-sm h-16 px-12 py-2 text-sm font-semibold"
      to={"/prediction"}>
      {name}
    </Link>
  );
}
