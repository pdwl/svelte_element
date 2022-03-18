<script>
  import clsx from '../common/clsx'
  import { setContext, onMount } from "svelte";
  import { writable, get } from "svelte/store";

  export let direction = undefined;

  const _isHeader = writable(0);
  const _isFooter = writable(0);

  setContext("isHeader", _isHeader);
  setContext("isFooter", _isFooter);

  onMount(() => {
    let Header = get(_isHeader);
    let Footer = get(_isFooter);

    function isVertical() {
      if (direction === "vertical") {
        return true;
      } else if (direction === "horizontal") {
        return false;
      }
      return Header + Footer > 0 ? true : false;
    }
    direction = isVertical();
  });
</script>

<section class="{clsx(['el-container',$$props['class']])}" style={$$props['style']} class:is-vertical={direction}>
  <slot />
</section>
