<script>
  let javascript = "/icons/javascript.png";
  let typescirpt = "/icons/typescript.png";
  let html = "/icons/html.png";
  let sass = "/icons/sass.png";
  let css = "/icons/css.png";
  let bootstrap = "/icons/bootstrap.png";
  let tailwind = "/icons/tailwind.png";
</script>

<h2 class="heading">Skills</h2>
<div class="skills">
  <img src={html} alt="" />
  <img src={css} alt="" />
  <img src={sass} alt="" />
  <img src={bootstrap} alt="" />
  <img src={tailwind} alt="" />
  <img src={javascript} alt="" />
  <img src={typescirpt} alt="" />
</div>

<style>
  .skills {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  img {
    width: 200px;
    height: 100px;
    object-fit: contain;
    transition: filter 1s ease;
  }
  img:nth-child(2) {
    width: 207px;
    height: 118px;
  }
  img:nth-child(3) {
    width: 92px;
  }

  img:last-child {
    width: 182px;
    height: 89px;
  }

  img:hover {
    filter: invert(40%) sepia(100%) saturate(1000%) hue-rotate(160deg);
  }
  @media (max-width: 1024px) {
    .skills {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 768px) {
    .skills {
      flex-wrap: nowrap;
      flex-direction: column;
    }
  }
</style>
