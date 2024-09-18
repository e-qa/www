import data from "../../public/data.json";

const Projects = () => {
  return (
    <>
      <h3 className="mt-20 mb-5 text-xl">
        Personal Projects
        <span role="img" aria-label="project">
          📁
        </span>
      </h3>
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 md:grid-cols-2 gap-10">
        {data.Projects.map((project) => {
          return (
            <div
              className="card bg-base-100 lg:w-96 w-[100%] shadow-xl"
              key={project.id}
            >
              <figure className="px-10 pt-10">
                <img src={project.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-start">
                <h2 className="card-title text-xl">{project.name}</h2>
                <p>{project.description}</p>
                <div className="card-actions mt-2">
                  <button className="btn">
                    <a href={project.link}>website</a>
                  </button>
                  {project.link && (
                    <button className="btn">
                      <a href={project.source}>source</a>
                    </button>
                  )}
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
