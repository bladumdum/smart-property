import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className=" flex justify-center items-center gap-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/prediction"}>Prediction</Link>
        </li>
        <li>
          <Link to={"/history"}>History</Link>
        </li>
      </ul>
    </nav>
  );
}
