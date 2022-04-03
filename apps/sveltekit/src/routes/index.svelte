<script lang="ts">
import { Title } from "@nx-monorepo/ui-library";

const appName = import.meta.env.DOM_APP_NAME;
</script>

<svelte:head>
  <title>{appName}</title>
</svelte:head>

<Title name="Welcome to {appName}" />
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
