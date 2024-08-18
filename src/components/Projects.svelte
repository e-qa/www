<script>
  import data from "$lib/data.json";
  let arr = Object.values(data)[0];
</script>

<section class="projects">
  <div class="title">
    <h2 class="heading">Projects</h2>
  </div>
  <ul class="projects-list">
    {#each arr as project}
      <li>
        <a href={project.link} target="_blank">
          <img src={project.img} alt="project" />
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .projects {
    margin-top: 140px;
  }
  .projects-list {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    row-gap: 30px;
    width: 100%;
  }
  .projects-list img {
    width: 95%;
  }
  .projects-list a {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    .projects-list {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 768px) {
    .projects-list {
      grid-template-columns: auto !important;
    }
  }
</style>
