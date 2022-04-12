<script lang="ts">
import { classNames } from "@nx-monorepo/utils";

let classes: string;

$: ({ class: classes } = $$restProps);
</script>

<div
  class={classNames(
    "max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-3 items-center justify-center",
    classes
  )}
>
  <slot />
</div>
