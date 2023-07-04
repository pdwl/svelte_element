<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";

  export let height: string = "60px";

  let className: string = "";
  let styleName: string = "";
  export { className as class };
  export { styleName as style };

  const componentOptions: any = getContext("componentOptions");
  if (componentOptions) {
    componentOptions.set("el-header");
  }
</script>

<header class={clsx(className, "el-header")} style={clsx(styleName, `height:${height}`)}>
  <slot />
</header>
