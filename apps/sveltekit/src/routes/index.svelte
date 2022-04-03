<script lang="ts">
import { Link, Title } from "@nx-monorepo/ui-library";

const appName = import.meta.env.DOM_APP_NAME;
</script>

<svelte:head>
  <title>{appName}</title>
</svelte:head>

<Title name="Welcome to {appName}" />
<p>
  Visit <Link href="https://kit.svelte.dev">kit.svelte.dev</Link> to read the documentation
</p>
