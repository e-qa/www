<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  let arrow = "/icons/arrow.svg";
  let github = "/icons/github.svg";
  let world = "/icons/world.svg";
  export let data;

  type Data = {
    id: number;
    name: string;
    link: string;
    source: string;
    img: string;
    description: string;
  };
  const projects: Data[] = data;

  let currentPath = $page.url.pathname;
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

            <a href={project.link} class={project.link ? "" : "disabled"}>
              <img src={world} alt="github icon" />
              website
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="buttons">
    {#if currentPath !== "/projects"}
      <button
        on:click={() => {
          goto("/projects");
        }}
      >
        <img src={arrow} alt="right arrow" />
        All Projects
      </button>
    {/if}
    <button on:click={() => goto("/contact")}>
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
    margin-top: 50px;
  }
  .projects {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    place-content: center;
    gap: 10px;
    font-family: "Roboto", sans-serif;
  }
  .card {
    border: 1px solid black;
    width: 400px;
    height: 420px;
  }

  .card-img img {
    width: 100%;
    height: 220px;
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
  .disabled {
    display: none !important;
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
      grid-template-columns: 1fr;
    }
    .card {
      height: 420px;
    }
  }
</style>
