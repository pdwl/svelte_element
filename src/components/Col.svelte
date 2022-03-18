<script>
    import clsx from "../common/clsx";
    import { getContext } from "svelte";
    export let span = 24;

    let classList = [];
    let style = undefined;
    let gutter = getContext("gutter");

    ["span", "offset", "pull", "push"].forEach((prop) => {
        if ($$props[prop] || $$props[prop] === 0) {
            classList.push(prop !== "span" ? `el-col-${prop}-${$$props[prop]}` : `el-col-${$$props[prop]}`);
        } else if (prop == "span") {
            classList.push(`el-col-${span}`);
        }
    });

    ["xs", "sm", "md", "lg", "xl"].forEach((size) => {
        if (typeof $$props[size] === "object") {
            let props = $$props[size];
            Object.keys(props).forEach((prop) => {
                classList.push(prop !== "span" ? `el-col-${size}-${prop}-${props[prop]}` : `el-col-${size}-${props[prop]}`);
            });
        } else if ($$props[size] || $$props[size] === 0) {
            classList.push(`el-col-${size}-${$$props[size]}`);
        }
    });

    $: {
        style = Boolean($gutter) ? `padding-left: ${$gutter / 2}px; padding-right: ${$gutter / 2}px;` : undefined;
        style = clsx({ [`${style}`]: style != undefined }, $$props["style"]);
        classList = clsx("el-col", classList, $$props["class"]);
    }
</script>

<div class={classList} {style} on:click>
    {#if $$props.text != undefined}
        <slot>{$$props.text}</slot>
    {:else}
        <slot />
    {/if}
</div>
