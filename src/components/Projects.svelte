<script>
  let extension = "/images/extension.png";
  let drumMachine = "/images/drum-machine.png";
  let soundsEffect = "/images/sound-effect.png";
</script>

<section class="projects">
  <h2 class="heading">Projects</h2>

  <div>
    <img src={extension} alt="" />
    <img src={drumMachine} alt="" />
    <img src={soundsEffect} alt="" />
  </div>
</section>

<style>
  .projects {
    margin-top: 140px;
  }
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    row-gap: 30px;
    width: 100%;
  }

  div > img {
    width: 95%;
  }

  @media (max-width: 1024px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 768px) {
    div {
      grid-template-columns: auto;
    }
  }
</style>
