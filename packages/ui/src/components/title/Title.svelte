<script lang="ts">
export let name: string;
</script>

<h1 class="text-xl font-bold">
  <slot>
    {name}
  </slot>
</h1>
