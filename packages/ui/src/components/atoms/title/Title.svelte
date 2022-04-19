<script lang="ts">
export let name: string;
</script>

<h1 class="text-xl font-bold dark:text-gray-50">
  <slot>
    {name}
  </slot>
</h1>
