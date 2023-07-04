<script lang="ts">
  import clsx from "clsx";

  export let width: string = "300px";

  let className: string = "";
  let styleName: string = "";
  export { className as class };
  export { styleName as style };
</script>

<aside class={clsx(className, "el-aside")} style={clsx(styleName, `width:${width}`)}>
  <slot />
</aside>
