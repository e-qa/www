<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
</script>

<div class="container">
  <Header />
  <slot />
</div>

<style>
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>
