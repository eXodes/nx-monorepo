<script lang="ts">
import { classNames } from "@nx-monorepo/utils";
import { createEventDispatcher } from "svelte";
import { Switch } from "@rgossiaux/svelte-headlessui";

export let label: string;
export let enabled = false;

const dispatch = createEventDispatcher<{
  change: boolean;
}>();

const handleChange = (bool: boolean) => {
  enabled = bool;
  dispatch("change", bool);
};
</script>

<Switch
  checked={enabled}
  on:change={(e) => handleChange(e.detail)}
  class="bg-brand-400 focus:ring-brand-500 relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-900"
  data-testid="toggle"
>
  <span class="sr-only">{label}</span>
  <span
    class={classNames(
      enabled ? "translate-x-7" : "translate-x-0",
      "pointer-events-none relative inline-block h-7 w-8 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200"
    )}
  >
    <span
      class={classNames(
        enabled
          ? "opacity-0 ease-out duration-100"
          : "opacity-100 ease-in duration-200",
        "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
      )}
      aria-hidden="true"
    >
      <slot name="disabled" />
    </span>
    <span
      class={classNames(
        enabled
          ? "opacity-100 ease-in duration-200"
          : "opacity-0 ease-out duration-100",
        "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
      )}
      aria-hidden="true"
    >
      <slot name="enabled" />
    </span>
  </span>
</Switch>
