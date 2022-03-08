<script>
    import clsx from "./../common/clsx/index";
    import { setContext } from "svelte";
    import { writable } from "svelte/store";
    export let gutter = 0;
    export let justify = "start";
    export let type = undefined;
    export let align = undefined;
    let classList = undefined;
    let style = undefined;
    const gutterStore = writable(gutter);
    setContext("gutter", gutterStore);
    
    $: {
        classList = clsx(["el-row", justify !== "start" ? `is-justify-${justify}` : "", align ? `is-align-${align}` : "", { "el-row--flex": type === "flex" }], $$props["class"]);
        $gutterStore = gutter;
        style = Boolean($gutterStore) ? `margin-left: -${$gutterStore / 2}px; margin-right: -${$gutterStore / 2}px;` : undefined;
        style = clsx({ [`${style}`]: style != undefined }, $$props["style"]);
    }
    
</script>

<div class={classList} {style}><slot /></div>
