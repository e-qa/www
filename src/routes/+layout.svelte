<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import "../app.css";
</script>

<div class="background">
  <div class="container">
    <Header />
  </div>
</div>

<div class="container">
  <slot />
</div>

<div class="background">
  <div class="container">
    <Footer />
  </div>
</div>

<style>
  .background {
    width: 100%;
    background-color: black;
    color: white;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
</style>
