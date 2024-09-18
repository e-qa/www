import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Projects from "../components/Projects";

type Skill = {
  id: number;
  src: string;
  alt: string;
};

const skills: Skill[] = [
  { id: 1, src: "/icons/html.svg", alt: "html-icon" },
  { id: 2, src: "/icons/css.svg", alt: "css-icon" },
  { id: 3, src: "/icons/bootstrap.svg", alt: "bootstrap-icon" },
  { id: 4, src: "/icons/tailwind.svg", alt: "tailwind-icon" },
  { id: 5, src: "/icons/javascript.svg", alt: "javascript-icon" },
  { id: 6, src: "/icons/typescript.svg", alt: "typescript-icon" },
  { id: 7, src: "/icons/react.svg", alt: "react-icon" },
  { id: 8, src: "/icons/next.svg", alt: "next-icon" },
  { id: 9, src: "/icons/node.svg", alt: "node-icon" },
  { id: 10, src: "/icons/express.svg", alt: "express-icon" },
  { id: 11, src: "/icons/mongo.svg", alt: "mongo-icon" },
  { id: 12, src: "/icons/git.svg", alt: "git-icon" },
];
const Home = () => {
  return (
    <>
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

        <h3 className="mt-20 mb-5 text-xl">
          Tools & Technologies{" "}
          <span role="img" aria-label="tools">
            🛠️
          </span>
        </h3>
        <div className="flex items-center justify-between gap-5 ">
          {skills.map((item) => {
            return (
              <img
                key={item.id}
                src={item.src}
                alt={item.alt}
                className="w-20 hover:scale-150 transition  -transform duration-300"
              />
            );
          })}
        </div>
      </div>
      <Projects />
    </>
  );
};

export default Home;
