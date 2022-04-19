<script lang="ts">
import { Link, Title, Toggle } from "@nx-monorepo/ui";
import { theme } from "@nx-monorepo/store";
import { CubeTransparent, Icon, LightBulb, Moon } from "svelte-hero-icons";

export let appName: string;
</script>

<svelte:head>
  <title>{appName}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center gap-3">
  <Icon src={CubeTransparent} class="text-brand-400 h-20 w-20" />

  <Title name="Welcome to {appName}" />
  <p class="text-gray-800 dark:text-gray-200">
    Visit
    <Link href="https://kit.svelte.dev" external={true}>kit.svelte.dev</Link>,
    <Link href="https://nestjs.com" external={true}>nestjs.com</Link>
    and
    <Link href="https://nx.dev/" external={true}>nx.dev</Link>
    to learn more.
  </p>

  <div class="mt-5">
    <Toggle
      enabled={$theme === "dark"}
      on:change={({ detail }) => theme.set(detail ? "dark" : "light")}
    >
      <svelte:fragment slot="disabled">
        <Icon src={LightBulb} class="text-brand-400 h-6 w-6" />
      </svelte:fragment>
      <svelte:fragment slot="enabled">
        <Icon src={Moon} class="text-brand-400 h-6 w-6" />
      </svelte:fragment>
    </Toggle>
  </div>
</div>
