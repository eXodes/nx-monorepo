<script lang="ts">
import "../app.css";

import { Container } from "@nx-monorepo/ui";
import { classNames } from "@nx-monorepo/utils";
import { theme } from "@nx-monorepo/store";
</script>

<main class={classNames($theme === "dark" && "dark")}>
  <div class="duration-100 motion-reduce:transition-none dark:bg-gray-900">
    <Container class="min-h-screen">
      <slot />
    </Container>
  </div>
</main>
