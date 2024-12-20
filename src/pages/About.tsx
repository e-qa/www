import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiGlobeAsiaAustralia } from 'react-icons/hi2';

const About = () => {
  return (
    <div className="px-0 pt-0 lg:px-32 lg:pt-32">
      <div className="block lg:flex">
        <div className="basis-3/10">
          <div>
            <img
              src="./me.jpg"
              alt="Profile Picture"
              className="w-48 h-48 rounded-full object-cover border-[.0625rem] border-[#595959]"
            />
          </div>
          <div className="flex items-center gap-2 mt-5">
            <HiGlobeAsiaAustralia size={23} />
            <span>Baku/Azerbaijan</span>
          </div>
        </div>
        <div className="basis-7/10 flex flex-col gap-5">
          <h1 className="text-6xl font-bold mt-3">Eli Qarayev</h1>
          <span className="text-2xl text-gray-200"> Front-End Developer </span>
          <div className="flex gap-2">
            <a
              href="https://github.com/e-qa"
              className="flex items-center gap-1 link font-bold text-sm"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://github.com/e-qa"
              className="flex items-center gap-1 link font-bold text-sm"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://github.com/e-qa"
              className="flex items-center gap-1 link font-bold text-sm"
            >
              <MdEmail />
              Email
            </a>
          </div>
          <div>
            <p>
              I’m a frontend developer passionate about solving complex
              challenges and creating intuitive, user-friendly web applications.
              I focus on delivering seamless digital experiences, blending
              design with technology to bring ideas to life
            </p>
          </div>
          <div className="mt-10 my-20">
            <h2 className="text-4xl font-bold my-2">Technical skills</h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold">JavaScript</span>
                <span className="text-sm">
                  JavaScript brings interactivity and dynamic functionality to
                  websites and applications.
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold">TypeScript</span>
                <span className="text-sm">
                  TypeScript enhances JavaScript with static typing for better
                  code reliability and maintainability.
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold">React</span>
                <span className="text-sm">
                  React makes it easy to create dynamic user interfaces with
                  reusable components.
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold">Next.js</span>
                <span className="text-sm">
                  Next.js combines the power of React with server-side rendering
                  (SSR) for optimized performance.
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold">Sass</span>
                <span className="text-sm">
                  Sass is a CSS preprocessor that simplifies and organizes
                  stylesheets with advanced features.
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold">Tailwind CSS</span>
                <span className="text-sm">
                  Tailwind CSS allows for fast and flexible modern UI design
                  with utility-first classes.
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold">ShadCN UI</span>
                <span className="text-sm">
                  ShadCN UI is a collection of accessible and customizable
                  components built for modern React applications.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
