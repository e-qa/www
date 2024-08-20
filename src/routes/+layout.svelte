<script>
  import { onMount } from "svelte";
  import "../app.css";
  import Header from "../components/Header.svelte";
  let isLoading = false;
  onMount(() => {
    isLoading = true;
  });
</script>

{#if !isLoading}
  <h1>loading....</h1>
{:else}
  <div class="container">
    <Header />
    <slot />
  </div>
{/if}

<style>
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>
