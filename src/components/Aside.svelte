<script>
    import clsx from "../common/clsx";
    export let width = "300px";
</script>

<aside class={clsx("el-aside", $$props["class"])} style={$$props["style"]} style:width={width}>
    <slot />
</aside>
