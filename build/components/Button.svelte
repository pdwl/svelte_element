<script>
    import clsx from "./../common/clsx/index";
    export let text = undefined;
    export let size = "";
    export let type = "default";
    export let plain = false;
    export let round = false;
    export let circle = false;
    export let loading = false;
    export let disabled = false;
    export let icon = "";
    export let autofocus = false;
    export let nativeType = "button";
    let _icon;
    let classList;
    $: {
        _icon = icon.substr(0, 8) == "el-icon-" ? icon : `el-icon-${icon}`;
        classList = clsx(
            "el-button",
            `el-button--${type}`,
            {
                "is-disabled": loading == true ? false : disabled == true ? true : false,
                "is-loading": loading,
                "is-plain": plain,
                "is-round": round,
                "is-circle": circle,
                [`el-button--${size}`]: Boolean(size),
            },
            $$props["class"]
        );
    }
</script>

<!-- svelte-ignore a11y-autofocus -->
<button class={classList} style={$$props["style"]} on:click {disabled} {autofocus} type={nativeType}>
    {#if loading}
        <i class="el-icon-loading" />
    {:else if icon && !loading}
        <i class={_icon} />
    {/if}
    {#if $$slots.default}
        <span><slot /></span>
    {:else if text != undefined}
        <span><slot>{text}</slot></span>
    {/if}
</button>
