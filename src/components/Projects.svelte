<script lang="ts">
  let arrow = "/icons/arrow.svg";
  let github = "/icons/github.svg";
  let world = "/icons/world.svg";
  import data from "$lib/data.json";

  type Data = {
    id: number;
    name: string;
    link: string;
    source: string;
    img: string;
    description: string;
  };
  const projects: Data[] = data.Projects;
</script>

<section>
  <div class="projects">
    {#each projects as project (project.id)}
      <div class="card">
        <div class="card-img">
          <img src={project.img} alt="project img" />
        </div>
        <div class="card-title">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div class="link">
            <a href={project.source}>
              <img src={github} alt="github icon" />
              source
            </a>
            <a href={project.link}>
              <img src={world} alt="github icon" />
              website
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="buttons">
    <button>
      <img src={arrow} alt="right arrow" />
      All Projects
    </button>
    <button>
      <img src={arrow} alt="right arrow" />
      Contact me
    </button>
  </div>
</section>

<style>
  section {
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .projects {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: "Roboto", sans-serif;
  }
  .card {
    border: 1px solid black;
    width: 400px;
    height: 400px;
  }

  .card-img img {
    width: 100%;
  }
  .card-title {
    border-top: 1px solid black;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    display: flex;
    height: 180px;
  }
  .link {
    display: flex;
    gap: 10px;
  }
  .link a {
    align-items: center;
    display: flex;
    border: none;
    color: white;
    gap: 10px;
    background: black;
    text-decoration: none;
    padding: 10px;
    font-size: 14px;
  }
  .link img {
    width: 20px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .buttons img {
    width: 20px;
  }
  .buttons button {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 200px;
    height: 40px;
    cursor: pointer;
    position: none;
    border: 1px solid black;
    padding: 0 40px;
    background: black;
    color: white;
  }
  @media (max-width: 768px) {
    .card {
      height: 320px;
    }
    .card-title p {
      font-size: 12px;
    }
    .link a {
      padding: 6px;
    }
  }

  @media (max-width: 425px) {
    .projects {
      flex-wrap: wrap;
    }
    .card {
      height: 420px;
    }
  }
</style>
