<script>
    import clsx from "../common/clsx";
    import Button from "./Button.svelte";
    export let options = [];
</script>

<div class={clsx("el-button-group", $$props["class"])} style={$$props["style"]}>
    {#each options as tmp}
        <Button on:click {...tmp} />
    {/each}
    <slot />
</div>
