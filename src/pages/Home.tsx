import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex  flex-col my-14">
      <h1 className="text-4xl font-medium">Hey👋🏼, I’m Eli.</h1>
      <p className="my-6 text-xl ">
        I’m a JavaScript Developer with a passion for creating engaging and
        user-friendly web experiences. With hands-on experience in developing
        dynamic web applications and a strong foundation in front-end
        technologies, I’m eager to contribute to innovative projects and
        continue learning.
      </p>
      <div>
        <Link
          to={"/about"}
          className="btn btn-neutral hover:btn-accent text-md"
        >
          More Information
          <FaLongArrowAltRight size={25} className="mt-[3px]" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
