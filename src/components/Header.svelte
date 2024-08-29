<script lang="ts">
  import { goto } from "$app/navigation";

  let logo = "/icons/logo.png";
  let isMenuOpen = false;
  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    isMenuOpen = target.checked;
  }
  function navigateToPage(path: string) {
    goto(path);
    isMenuOpen = false;
  }
</script>

<header>
  {#if isMenuOpen}
    <div class="overlay">
      <div class="menu">
        <div class="menu-link">
          <ul>
            <li>
              <button class="link" on:click={() => navigateToPage("/")}
                >HOME</button
              >
            </li>
            <li>
              <button class="link" on:click={() => navigateToPage("/projects")}
                >PROJECTS</button
              >
            </li>
            <li>
              <button class="link" on:click={() => navigateToPage("/")}
                >ABOUT</button
              >
            </li>
            <li>
              <button class="link" on:click={() => navigateToPage("/contact")}
                >CONTACT</button
              >
            </li>
          </ul>
        </div>
        <div class="menu-contacts">
          <span>eliqarayevv@gmail.com</span>
          <span>050 412 40 32</span>
        </div>
      </div>
    </div>
  {/if}
  <div class="header">
    <div class="logo">
      <a href="/">
        <img src={logo} alt="" style="width: 4.375rem; height:4.375rem" />
      </a>
    </div>

    <div class="menu-button">
      <input
        type="checkbox"
        id="toggle"
        checked={isMenuOpen}
        on:change={handleInput}
      />
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
  {#if !isMenuOpen}
    <div class="header-text">
      <div class="text">
        <h1>ELI GARAEV</h1>
        <span>FRONTEND WEB DEVELOPER </span>
        <br />
        <br />
        <button class="btn"> My Resume </button>
      </div>
    </div>
  {/if}
</header>

<style>
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    animation: animation-2 2s ease-out forwards;
    position: sticky;
    top: 0;
  }
  .menu-button {
    width: 3.75rem;
    height: 1.875rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;
  }
  .btn {
    padding: 10px 20px;
    width: 250px;
    height: 60px;
    font-size: 20px;
    border: none;
    outline: none;
    color: #fff;
    background: black;
    cursor: pointer;
    position: relative;
    z-index: 0;
    animation: animation-3 1s ease-out forwards;
  }

  .btn:before {
    content: "";
    position: absolute;
    top: -3px;
    right: -3px;
    width: 255px;
    height: 65px;
    z-index: -1;
    background: linear-gradient(40deg, #790e8f, #05b86d, #977d07, #d00a0a);
    background-size: 200%;
    animation: animation 3s linear infinite;
  }
  .btn:after {
    z-index: -1;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
  }

  @keyframes animation {
    0% {
      background-position: 0%, 0;
    }
    50% {
      background-position: 0%, 0;
    }
    100% {
      background-position: 200%, 0;
    }
  }
  #toggle {
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 999;
  }

  .line {
    display: block;
    height: 0.1875rem;
    width: 3.125rem;
    background: white;
    transition: 0.3s transform;
    z-index: 999;
  }
  #toggle:checked ~ .line {
    background: black;
  }
  #toggle:checked ~ span:nth-of-type(2) {
    transform: scale(0);
  }
  #toggle:checked ~ span:nth-of-type(1) {
    transform: translateY(0.875rem) rotate(45deg) scale(0.9);
  }
  #toggle:checked ~ span:nth-of-type(3) {
    transform: translateY(-0.875rem) rotate(-45deg) scale(0.9);
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    background-color: black;
    color: white;
    letter-spacing: 0.3rem;
  }
  .text h1 {
    display: inline-block;
    position: relative;
    animation: animation-1 1s ease-out forwards;
    white-space: nowrap;
    font-size: 6rem;
  }
  .text span {
    display: inline-block;
    position: relative;
    animation: animation-1 1s ease-out forwards;
    white-space: nowrap;
    font-size: 32px;
  }

  @keyframes animation-1 {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes animation-2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes animation-3 {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  /* Overlay  */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 200px;
    height: 100vh;
    font-size: 40px;
    color: black;
    animation: animation-2 1.5s ease forwards;
  }
  .menu li {
    list-style: none;
    transition: 0.3s ease transform;
  }
  .link {
    border: none;
    background-color: transparent;
    font-family: "League Gothic", sans-serif;
    font-size: 70px;
  }
  .menu li:hover {
    transform: scaleX(50%);
  }
  .menu-contacts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 24px;
  }
  @media (max-width: 425px) {
    .menu {
      flex-wrap: wrap;
      flex-direction: column;
      gap: 0;
    }
  }
</style>
