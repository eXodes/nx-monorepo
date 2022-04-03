<script lang="ts">
const appName = import.meta.env.DOM_APP_NAME;
</script>

<svelte:head>
  <title>{appName}</title>
</svelte:head>

<h1 class="text-lg font-bold">Welcome to {appName}</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
