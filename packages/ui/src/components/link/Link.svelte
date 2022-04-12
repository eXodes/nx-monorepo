<script lang="ts">
  export let href: string;
  export let target = "_self";
</script>

<a class="hover:underline" href={href} target={target} data-testid="link">
  <slot />
</a>
