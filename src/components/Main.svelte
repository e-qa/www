<script>
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";
  import Skills from "./Skills.svelte";
  import data from "$lib/data.json";
</script>

<About />
<Skills />
<Projects data={data.Projects.slice(0, 3)} />
