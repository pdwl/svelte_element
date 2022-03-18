<script>
    import clsx from "../common/clsx";
    export let icon = undefined;
    export let name = undefined;
    let classList = clsx(icon != undefined ? (icon.substr(0, 8) == "el-icon-" ? icon : `el-icon-${icon}`) : name != undefined ? `el-icon-${name}` : undefined, $$props["class"]);
</script>

<i class={classList} style={$$props["style"]}>
    <slot />
</i>
