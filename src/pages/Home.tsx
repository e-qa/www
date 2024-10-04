import Projects from '../components/Projects';
import { useTranslation } from 'react-i18next';

type Skill = {
  id: number;
  src: string;
  alt: string;
};

const skills: Skill[] = [
  { id: 1, src: '/icons/html.svg', alt: 'html-icon' },
  { id: 2, src: '/icons/css.svg', alt: 'css-icon' },
  { id: 3, src: '/icons/bootstrap.svg', alt: 'bootstrap-icon' },
  { id: 4, src: '/icons/tailwind.svg', alt: 'tailwind-icon' },
  { id: 5, src: '/icons/javascript.svg', alt: 'javascript-icon' },
  { id: 6, src: '/icons/typescript.svg', alt: 'typescript-icon' },
  { id: 7, src: '/icons/react.svg', alt: 'react-icon' },
  { id: 8, src: '/icons/next.svg', alt: 'next-icon' },
  { id: 9, src: '/icons/node.svg', alt: 'node-icon' },
  { id: 10, src: '/icons/express.svg', alt: 'express-icon' },
  { id: 11, src: '/icons/mongo.svg', alt: 'mongo-icon' },
  { id: 12, src: '/icons/git.svg', alt: 'git-icon' },
];
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex  flex-col my-14">
        <h1 className="text-2xl lg:text-4xl font-medium">{t('title')}</h1>
        <p className="my-4 lg:my-6 text-base lg:text-xl ">{t('hero_text')}</p>

        <h3 className="mt-20 mb-5 text-xl">{t('tools_technologies')}</h3>
        <div className="flex items-center justify-center  lg:justify-between flex-wrap lg:flex-nowrap gap-4 lg:gap-5 ">
          {skills.map((item) => {
            return (
              <img
                key={item.id}
                src={item.src}
                alt={item.alt}
                className="w-10 lg:w-20 hover:scale-150 transition -transform duration-300"
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
