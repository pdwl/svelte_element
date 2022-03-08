<script>
    /**
    * @description 2022年3月8日02:42:28
    * @example 翻了好久的谷歌，找到了解决办法
    */
    import clsx from "./../common/clsx/index";
    export let text = undefined;
    export let value = undefined;
    export let label = undefined;
    export let checked = false;
    export let disabled = false;
    export let border = false;
    export let size = undefined;
    export let name = undefined;
    import { getContext, createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const writable_value = getContext("RadioGroup_value");
    $: RadioGroup_value = $writable_value;
    const RadioGroup_props = getContext("RadioGroup_props");
    const RadioGroup_disabled = getContext("RadioGroup_disabled");
    const RadioGroup_change = getContext("RadioGroup_change");
    
    if(RadioGroup_props!= undefined){
        size = RadioGroup_props.size;
    }

    let focus = false;
    $: ischecked = value === label ? true : false;
    $: isDisabled = isGroup() ? RadioGroup_disabled || disabled : disabled;
    $: tabindex = isDisabled || (isDisabled && value !== label) ? -1 : 0;
    $: value = isGroup() ? RadioGroup_value : value;

    const isGroup = () => {
        return RadioGroup_value != undefined ? true : false;
    };
    $: classList = clsx("el-radio", [border && size != undefined ? `el-radio--${size}` : "", { "is-disabled": isDisabled }, { "is-focus": focus }, { "is-bordered": border }, { "is-checked": ischecked }], $$props["class"]);

    function handleKeydown(e) {
        if (e.code !== "Space") {
            return;
        }
        value = isDisabled ? value : label;
        e.stopPropagation();
        e.preventDefault();
    }

    function handleChange(e) {
        value = label;
        dispatch("change", e);
        if (RadioGroup_value != undefined) {
            RadioGroup_change(value);
        }
    }
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classList} style={$$props["style"]} role="radio" {tabindex} aria-checked={ischecked} aria-disabled={isDisabled} on:keydown={handleKeydown}>
    <span class="el-radio__input" class:is-disabled={isDisabled} class:is-checked={ischecked}>
        <span class="el-radio__inner" />
        <input
            class="el-radio__original"
            type="radio"
            value={label}
            bind:group={value}
            aria-hidden="true"
            {name}
            disabled={isDisabled}
            tabindex="-1"
            on:focus={() => (focus = true)}
            on:blur={() => (focus = false)}
            on:change={handleChange}
            autocomplete="off"
        />
    </span>
    <span class="el-radio__label" on:keydown|stopPropagation>
        {#if $$slots.default}
            <slot />
        {:else if text != undefined}
            {text}
        {:else}
            {label}
        {/if}
    </span>
</label>
