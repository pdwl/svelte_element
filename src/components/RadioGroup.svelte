<script>
    /**
     * @description 2022年3月8日12:19:23
     * @example 类似隔壁热
     */
    import clsx from "../common/clsx";
    import { setContext, createEventDispatcher } from "svelte";
    import { writable } from "svelte/store";
    import Radio from "./Radio.svelte";
    import RadioButton from "./RadioButton.svelte";
    export let value = undefined;
    export let label = [];
    export let size = undefined;
    export let fill = "#409EFF";
    export let textColor = "#ffffff";
    export let backgroundcolor = "#ffffff";
    export let disabled = false;
    export let type = "radio";
    const dispatch = createEventDispatcher();
    const RadioGroup_value = writable(value);
    setContext("RadioGroup_props", $$props);
    setContext("RadioGroup_value", RadioGroup_value);
    setContext("RadioGroup_change", handleChange);
    function handleChange(e) {
        RadioGroup_value.set(e);
        dispatch("change", e);
    }

    let propList = [];
    for (let index = 0; index < label.length; index++) {
        const prop = {};
        const tmp = label[index];
        if (typeof tmp === "string") {
            prop.value = tmp;
            prop.label = tmp;
            propList.push(prop);
            continue;
        }

        if (typeof tmp === "object") {
            if ("value" in tmp === false && "label" in tmp === false) {
                continue;
            }
            prop.value = tmp.value || String(tmp.label);
            prop.label = String(tmp.label) || tmp.value;
            prop.disabled = tmp.disabled == true ? true : false;
            prop.text = tmp.text != undefined ? tmp.text : "";
            propList.push(prop);
        }
    }
</script>

<div class={clsx("el-radio-group", $$props["class"])} style={$$props["style"]} role="radiogroup">
    {#each propList as tmp, index}
        {#if type == "radio"}
            <Radio bind:value={tmp.value} label={tmp.label} disabled={disabled || tmp.disabled} {size} on:change text={tmp.text || tmp.label || tmp.value} />
        {:else}
            <RadioButton bind:value={tmp.value} label={tmp.label} disabled={disabled || tmp.disabled} {size} on:change text={tmp.text || tmp.label || tmp.value} />
        {/if}
    {:else}
        <slot />
    {/each}
</div>
