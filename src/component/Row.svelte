<script lang="ts">
  import clsx from "clsx";
  import { setContext } from "svelte";

  let className: string = "";
  let styleName: string = "";
  export { className as class };
  export { styleName as style };

  export let gutter: number = 0;
  export let type: string = "";
  export let justify: string = "start";
  export let align: string = "";

  setContext("Gutter", gutter);

  function style() {
    let ret: string = "";
    if (gutter) {
      ret += "margin-left:" + `-${gutter / 2}px;`;
      ret += "margin-right:" + `-${gutter / 2}px;`;
    }
    return ret + styleName;
  }
</script>

<div class={clsx([className, "el-row", justify !== "start" ? `is-justify-${justify}` : "", align ? `is-align-${align}` : "", { "el-row--flex": type === "flex" }])} style={style()}>
  <slot />
</div>
