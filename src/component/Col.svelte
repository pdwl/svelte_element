<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";

  export let span: number = 24;
  export let offset: Number = 0;
  export let pull: Number = 0;
  export let push: Number = 0;
  export let xs: Number | Object = 0;
  export let sm: Number | Object = 0;
  export let md: Number | Object = 0;
  export let lg: Number | Object = 0;
  export let xl: Number | Object = 0;

  function gutter() {
    const Gutter = getContext("Gutter");
    return Number(Gutter);
  }

  let classList = [];
  let style: string;

  if (gutter()) {
    style += "padding-left: " + gutter() / 2 + "px;";
    style += "padding-right: " + gutter() / 2 + "px;";
  }

  ["span", "offset", "pull", "push"].forEach((prop) => {
    if ($$props[prop] || $$props[prop] === 0) {
      classList.push(prop !== "span" ? `el-col-${prop}-${$$props[prop]}` : `el-col-${$$props[prop]}`);
    }
  });

  ["xs", "sm", "md", "lg", "xl"].forEach((size) => {
    if (typeof $$props[size] === "number") {
      classList.push(`el-col-${size}-${$$props[size]}`);
    } else if (typeof $$props[size] === "object") {
      let props = $$props[size];
      Object.keys(props).forEach((prop) => {
        classList.push(prop !== "span" ? `el-col-${size}-${prop}-${props[prop]}` : `el-col-${size}-${props[prop]}`);
      });
    }
  });
</script>

<div class={clsx(["el-col", classList])} {style}>
  <slot />
</div>
