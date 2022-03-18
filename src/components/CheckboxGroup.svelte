<script>
    import clsx from "../common/clsx";
    import Checkbox from "./Checkbox.svelte";
    import CheckboxButton from "./CheckboxButton.svelte";
    export let group = [];
    export let options = [];
    export let disabled = false;
    export let min = undefined;
    export let max = undefined;
    export let size = undefined;
    export let type = "checkbox";
    export let fill = "#409EFF";
    export let textColor = "#ffffff";
    import { setContext, createEventDispatcher } from "svelte";
    // import { writable } from "svelte/store";
    // $: value = value === undefined ? $$props.group : value;
    const dispatch = createEventDispatcher();
    // const writable_group = writable(group);
    setContext("CheckboxGroup_props", $$props);
    setContext("CheckboxGroup_group", true);
    setContext("CheckboxGroup_dispatch", handleChange);
    // setContext("CheckboxGroup_group", writable_group);
    setContext("CheckboxGroup_min", min);
    setContext("CheckboxGroup_max", max);
    // let group=[];
    // $: console.log(value);
    // $: if (value) {
    //     $writable_value = value;
    // }
    function handleChange(e) {
        // console.log(e);
        // writable_value.set(e);
        group = e;
        dispatch("change", e);
    }
    let propList = [];
    for (let index = 0; index < options.length; index++) {
        const prop = {};
        const tmp = options[index];
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
            prop.disabled = tmp.disabled;
            prop.text = tmp.text != undefined ? tmp.text : "";
            propList.push(prop);
        }
    }
</script>

<div class={clsx("el-checkbox-group", $$props["class"])} style={$$props["style"]} role="group" aria-label="checkbox-group">
    {#each propList as tmp}
        {#if type == "checkbox"}
            <Checkbox bind:group invalue={tmp.value} label={tmp.label} disabled={disabled || tmp.disabled} {size} text={tmp.text || tmp.label || tmp.value} />
        {:else}
            <CheckboxButton bind:group invalue={tmp.value} label={tmp.label} disabled={disabled || tmp.disabled} {size} text={tmp.text || tmp.label || tmp.value} />
        {/if}
    {:else}
        <slot />
    {/each}
</div>
