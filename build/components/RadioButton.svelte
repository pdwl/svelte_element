<script>
    /**
    * @description 2022年3月8日16:59:31
    * @example 类似隔壁热
    */
    import clsx from "./../common/clsx/index";
    export let text = undefined;
    export let value = undefined;
    export let label = undefined;
    export let checked = false;
    export let disabled = false;
    export let size = undefined;
    export let name = undefined;
    import { getContext, createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const writable_value = getContext("RadioGroup_value");
    $: RadioGroup_value = $writable_value;
    const RadioGroup_props = getContext("RadioGroup_props");
    const RadioGroup_disabled = getContext("RadioGroup_disabled");
    const RadioGroup_change = getContext("RadioGroup_change");

    if (RadioGroup_props != undefined) {
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
    $: classList = clsx(
        "el-radio-button",
        [size != undefined ? `el-radio-button--${size}` : "",
        { 'is-active': ischecked },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
        ],
        $$props["class"]
    );

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
    $: styleList = clsx({
        backgroundColor: RadioGroup_props != undefined ? RadioGroup_props.fill || "" : "",
        borderColor: RadioGroup_props != undefined ? RadioGroup_props.fill || "" : "",
        boxShadow: RadioGroup_props != undefined ? (RadioGroup_props.fill ? `-1px 0 0 0 ${RadioGroup_props.fill}` : "") : "",
        color: RadioGroup_props != undefined ? RadioGroup_props.textColor || "" : "",
    });
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classList} style={$$props["style"]} role="radio" {tabindex} aria-checked={ischecked} aria-disabled={isDisabled} on:keydown={handleKeydown}>
    <input
        class="el-radio-button__orig-radio"
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

    <span class="el-radio-button__inner" style={styleList} on:keydown|stopPropagation>
        {#if $$slots.default}
            <slot />
        {:else if text != undefined}
            {text}
        {:else}
            {label}
        {/if}
    </span>
</label>
