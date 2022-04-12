<script lang="ts">
export let href: string;
export let target = "_self";
</script>

<a
  class="text-brand-500 hover:text-brand-400 hover:underline"
  href={href}
  target={target}
  data-testid="link"
>
  <slot />
</a>
