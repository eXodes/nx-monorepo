<script lang="ts">
import { ExternalLink, Icon } from "svelte-hero-icons";

export let href: string;
export let target = "_self";
export let external = false;
</script>

<a
  class="text-brand-600 hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-500 inline-flex hover:underline"
  href={href}
  target={external ? "_blank" : target}
  data-testid="link"
>
  <slot />
  {#if external}
    <span class="my-auto ml-0.5 inline">
      <Icon src={ExternalLink} class="h-4 w-4" />
    </span>
  {/if}
</a>
