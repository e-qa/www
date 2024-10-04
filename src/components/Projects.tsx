import { useTranslation } from 'react-i18next';
import data from '../../public/data.json';

interface Project {
  id: number;
  name: { [key: string]: string };
  link?: string;
  source: string;
  img: string;
  description: { [key: string]: string };
}

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h3 className="mt-20 mb-5 text-xl">{t('personal_projects')}</h3>
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 md:grid-cols-2 gap-10">
        {data.Projects.map((project: Project) => {
          return (
            <div
              className="card bg-base-100  lg:w-96 w-[90%] shadow-xl"
              key={project.id}
            >
              <figure className="px-10 pt-10">
                <img src={project.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-start">
                <h2 className="card-title text-base lg:text-xl">
                  {project.name[i18n.language]}
                </h2>
                <p className="text-sm lg:text-base">
                  {project.description[i18n.language]}
                </p>
                <div className="card-actions mt-2">
                  {project.link && (
                    <button className="btn">
                      <a href={project.link}>{t('website')}</a>
                    </button>
                  )}
                  <button className="btn">
                    <a href={project.source}>{t('source')}</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
