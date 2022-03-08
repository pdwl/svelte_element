<script>
    /**
     * @description 2022年3月8日12:19:23
     * @example 类似隔壁热
     */
    import clsx from "./../common/clsx/index";
    import { setContext, createEventDispatcher } from "svelte";
    import { writable } from "svelte/store";
    import Radio from "./Radio.svelte";
    import RadioButton from "./RadioButton.svelte";
    export let value = undefined;
    export let size = undefined;
    export let fill = "#409EFF";
    export let textcolor = "#ffffff";
    export let backgroundcolor = "#ffffff";
    export let disabled = false;
    export let radiodata = [];
    export let type = "radio";
    const dispatch = createEventDispatcher();
    const RadioGroup_value = writable(value);
    setContext("RadioGroup_props", $$props);
    setContext("RadioGroup_value", RadioGroup_value);
    setContext("RadioGroup_disabled", disabled);
    setContext("RadioGroup_change", handleChange);
    function handleChange(e) {
        RadioGroup_value.set(e);
        dispatch("change", e);
    }

    let propList = [];
    for (let index = 0; index < radiodata.length; index++) {
        const prop = {};
        const radio = radiodata[index];
        if (typeof radio === "string") {
            prop.value = radio;
            prop.label = radio;
            propList.push(prop);
            continue;
        }

        if (typeof radio === "object") {
            if ("value" in radio === false && "label" in radio === false) {
                continue;
            }
            prop.value = radio.value || String(radio.label);
            prop.label = String(radio.label) || radio.value;
            prop.disabled = radio.disabled == true ? true : false;
            prop.text = radio.text != undefined ? radio.text : "";
            propList.push(prop);
        }
    }
</script>

<div class={clsx("el-radio-group", $$props["class"])} style={$$props["style"]} role="radiogroup">
    {#each propList as radio, index}
        {#if type == "radio"}
            <Radio bind:value={radio.value} label={radio.label} disabled={disabled || radio.disabled} {size} on:change text={radio.text || radio.label || radio.value} />
        {:else}
            <RadioButton bind:value={radio.value} label={radio.label} disabled={disabled || radio.disabled} {size} on:change text={radio.text || radio.label || radio.value} />
        {/if}
    {:else}
        <slot />
    {/each}
</div>
