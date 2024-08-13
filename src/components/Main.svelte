<script>
  let icon = "/images/Saly-10.svg";
</script>

<main>
  <div class="left">
    <img src={icon} alt="icon" />
  </div>
  <div class="right">
    <p>
      Welcome to my digital corner! As a JavaScript developer, I love building
      interactive and user-friendly web applications. Here, I share my coding
      journey and personal projects.
    </p>
  </div>
</main>

<style>
  main {
    display: flex;
    height: calc(100% - 140px);
    justify-content: center;
    align-items: center;
  }
  .right {
    line-heigt: 1.8rem;
    width: 100%;
    margin-top: 150px;
  }
  div {
    display: flex;
    flex-direction: column;
  }

  div > img {
    width: 450px;
  }
  p {
    font-size: 1.4rem;
    color: rgb(28, 28, 120);
  }
  .lang {
    color: #f7e018;
  }
</style>
