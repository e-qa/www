<script>
  import { goto } from "$app/navigation";
  let logo = "/icons/logo.png";
</script>

<footer>
  <ul>
    <li class="link">
      <button on:click={() => goto("/projects")}>PROJECTS</button>
    </li>
    <li class="link"><button on:click={() => goto("/")}>ABOUT</button></li>
    <li class="link">
      <button on:click={() => goto("/contact")}>CONTACT</button>
    </li>
  </ul>
  <div class="contact">
    <span>050 412 40 32</span>
    <a href="mailto:example@example.com">eliqarayevv@gmail.com</a>
  </div>
  <div class="logo">
    <button on:click={() => goto("/")}>
      <img src={logo} alt="logo" />
    </button>
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
  .contact a {
    color: white;
    font-size: 25px;
  }
  button {
    border: none;
    background: black;
    cursor: pointer;
  }
  .link button {
    font-family: "League Gothic", sans-serif;
    font-size: 25px;
    border: none;
    color: white;
    background-color: transparent;
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
