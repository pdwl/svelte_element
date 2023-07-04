<script lang="ts">
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { writable, get } from "svelte/store";

  let className: string = "";
  let styleName: string = "";
  export { className as class };
  export { styleName as style };
  let style: string = styleName == "" ? undefined : styleName;

  export let direction: string = "";

  // 由于这个组件是在框架外面的
  // 通过外部组件创建一个可写的变量
  const componentOptions: any = writable("");
  // 通过上下文设定这个值
  setContext("componentOptions", componentOptions);

  function isVertical() {
    if (direction === "vertical") {
      return true;
    } else if (direction === "horizontal") {
      return false;
    }
    if ($$slots && $$slots.default) {
      const tag: string = get(componentOptions);
      return tag === "el-header" || tag === "el-footer";
    }
    return false;
  }
</script>

<section class={clsx(className, "el-container", { "is-vertical": isVertical() })} {style}>
  <slot />
</section>
