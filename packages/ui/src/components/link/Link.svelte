<script lang="ts">
import { ExternalLink, Icon } from "svelte-hero-icons";

export let href: string;
export let target = "_self";
export let external = false;
</script>

<a
  class="inline-flex text-brand-500 hover:text-brand-400 hover:underline"
  href={href}
  target={external ? "_blank" : target}
  data-testid="link"
>
  <slot />
  {#if external}
    <span class="ml-0.5 my-auto inline">
      <Icon src={ExternalLink} class="w-4 h-4" />
    </span>
  {/if}
</a>
