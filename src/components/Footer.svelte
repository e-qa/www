<script>
  let logo = "/icons/logo.png";
</script>

<footer>
  <ul>
    <li><a href="#">PROJECTS</a></li>
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">CONTACT</a></li>
  </ul>
  <div class="contact">
    <span>050 412 40 32</span>
    <a href="mailto:example@example.com">eliqarayevv@gmail.com</a>
  </div>
  <div class="logo">
    <a href="#">
      <img src={logo} alt="logo" />
    </a>
  </div>
</footer>

<style>
  footer {
    padding: 100px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
    gap: 20px;
  }

  .contact {
    display: flex;
    flex-direction: column;
  }
  .contact a,
  ul a {
    font-size: 25px;
    color: white;
  }
  .contact span {
    font-size: 25px;
  }
  img {
    width: 200px;
  }
  @media (max-width: 425px) {
    footer {
      flex-direction: column;
    }
  }
</style>
