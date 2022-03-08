<script>
    import clsx from "./../common/clsx/index";
    import { getContext } from "svelte";
    export let height = "60px";
    const isFooter = getContext("isFooter");
    isFooter.set(1);
</script>

<footer class={clsx("el-footer", $$props["class"])} style={$$props["style"]} style:height={height}>
    <slot />
</footer>
