<script lang="ts">
import { Link, Title } from "@nx-monorepo/ui";

const appName = import.meta.env.DOM_APP_NAME;
</script>

<svelte:head>
  <title>{appName}</title>
</svelte:head>

<Title name="Welcome to {appName}" />
<p>
  Visit
  <Link href="https://kit.svelte.dev">kit.svelte.dev</Link>
  and
  <Link href="https://nx.dev/">nx.dev</Link>
  to learn more.
</p>
