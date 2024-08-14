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
    margin-bottom: 60px;
  }
  .right {
    line-height: 2rem;
    width: 100%;
    margin-top: 150px;
  }
  div {
    display: flex;
    flex-direction: column;
  }

  .left img {
    width: 525px;
  }
  p {
    font-size: 1.4rem;
    color: rgb(28, 28, 120);
  }
  @media (max-width: 768px) {
    main {
      flex-direction: column;
      text-align: center;
    }
  }
  @media (max-width: 425px) {
    .left img {
      width: 400px;
    }
  }
</style>
