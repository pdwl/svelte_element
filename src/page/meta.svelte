<script lang="ts">
  import clsx from "clsx";
  let show = false;
  let showbtn = false;
  function handleMouseEnter() {
    show = true;
  }
  function handleMouseLeave() {
    show = false;
  }
  function handleClick(e) {
    showbtn = !showbtn;
  }
</script>

<div class="meta" style={clsx("height: auto;", showbtn ? "display: black;" : "display: none;")}>
  <slot />
</div>
<div class="demo-block-control" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} on:click={handleClick}>
  <i class={clsx(showbtn ? "el-icon-caret-top" : "el-icon-caret-bottom", show && "hovering")} />
  <span style={clsx(!show && "display: none;")}>{showbtn ? "隐藏" : "显示"}代码</span>
</div>
