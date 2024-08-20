<script lang="ts">
  import "../app.css";
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";
  let isLoading = true;

  onMount(() => {
    isLoading = false;
  });
</script>

{#if isLoading}
  <div class="loading-screen">
    <h1>Loading....</h1>
  </div>
{:else}
  <div class="container">
    <Header />
    <slot />
  </div>
{/if}

<style>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>
