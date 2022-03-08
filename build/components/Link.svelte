<script>
    import clsx from "./../common/clsx/index";
    import { createEventDispatcher } from "svelte";
    export let type = "default";
    export let disabled = undefined;
    export let underline = true;
    export let href = undefined;
    export let icon = undefined;
    const dispatch = createEventDispatcher();
    let classList = clsx(["el-link", type ? `el-link--${type}` : "", disabled && "is-disabled", underline && !disabled && "is-underline"], $$props["class"]);

    href = disabled == true ? undefined : href;

    function handleClick() {
        if (!disabled) {
            if (!href) {
                dispatch("click");
            }
        }
    }
</script>

<a class={classList} style={$$props["style"]} {href} on:click={handleClick}>
    {#if icon}
        <i class={icon.substr(0, 8) == "el-icon-" ? icon : `el-icon-${icon}`} />
    {/if}
    {#if $$slots.default}
        <span class="el-link--inner">
            <slot />
        </span>
    {/if}
</a>
