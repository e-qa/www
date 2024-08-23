<script lang="ts">
  type Skill = {
    id: number;
    src: string;
    alt: string;
  };

  let skills: Skill[] = [
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
</script>

<section class="skills">
  <h2>My Skills</h2>
  <div class="icons">
    {#each skills as skill (skill.id)}
      <img src={skill.src} alt={skill.alt} />
    {/each}
  </div>
</section>

<style>
  .skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 0px 50px 0;
    gap: 20px;
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  section h2 {
    letter-spacing: 0.3rem;
    text-align: start !important;
    width: 60%;
    font-size: 32px;
  }
  img {
    width: 46px;
    transition: 0.3s transform;
  }
  img:hover {
    transform: scale(1.5);
  }
</style>
