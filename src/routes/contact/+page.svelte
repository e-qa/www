<script>
  let linkedin = "/icons/linkedin.svg";
  let phone = "/icons/phone.svg";
  let github = "/icons/github-black.svg";
</script>

<section class="contact">
  <h1>Contact with me</h1>
  <div>
    <a href="https://www.linkedin.com/in/eli-qarayev">
      <img src={linkedin} alt="" />
    </a>
    <a href="tel:+994504124032">
      <img src={phone} alt="" />
    </a>

    <a href="https://www.github.com/e-qa">
      <img src={github} alt="" />
    </a>
  </div>
</section>

<style>
  .contact {
    padding: 100px 0px;
  }
  h1 {
    font-size: 64px;
    text-align: center;
    margin-bottom: 40px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
  img {
    width: 100px;
  }
</style>
