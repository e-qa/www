import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between my-4">
      <Link to={"/"} className="text-4xl">
        eli.
      </Link>
      <div className="flex gap-5">
        <Link to={"/contact"} className="text-2xl">
          contact
        </Link>
        <Link to={"/about"} className="text-2xl">
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
