<script lang="ts">
  import clsx from "clsx";

  let className: string = "";
  let styleName: string = "";
  export { className as class };
  export { styleName as style };
  let style: string = styleName == "" ? undefined : styleName;
</script>

<div class={clsx(className, "el-button-group")} {style}>
  <slot />
</div>
