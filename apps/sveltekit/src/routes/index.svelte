<script lang="ts">
import { Link, Title } from "@nx-monorepo/ui";
import { CubeTransparent, Icon } from "svelte-hero-icons";

export let appName: string;
</script>

<svelte:head>
  <title>{appName}</title>
</svelte:head>

<div>
  <Icon src={CubeTransparent} class="w-20 h-20 text-brand-400" />
</div>
<Title name="Welcome to {appName}" />
<p>
  Visit
  <Link href="https://kit.svelte.dev" external={true}>kit.svelte.dev</Link>
  and
  <Link href="https://nx.dev/" external={true}>nx.dev</Link>
  to learn more.
</p>
