<script>
    import clsx from "./../common/clsx/index";
    export let value = undefined;
    export let label = undefined;
    export let checked = false;
    export let disabled = false;
    export let border = false;
    export let size = undefined;
    export let name = undefined;
    import { setContext, getContext, createEventDispatcher, onMount } from "svelte";
    let focus = false;
    let model = value;
    $: ischecked = value === label ? true : false;
    const dispatch = createEventDispatcher();
    const _RadioGroup = getContext("RadioGroup");
    const _RadioGroup_value = _RadioGroup != undefined ? _RadioGroup.value : undefined;
    const isGroup = () => {
        return _RadioGroup != undefined ? true : false;
    };
    const isDisabled = () => {
        return isGroup() ? _RadioGroup.disabled || disabled : disabled;
    };
    // const handleChange = (e) => {
    //     console.log(e);
    //     console.log(label);
    // };

    // model = value;
    // console.log(model);
    //     model = isDisabled() ? _RadioGroup_value : value;
    //     console.log(model);
    // console.log(_RadioGroup, model);
    const tabIndex = () => {
        return isDisabled() || (isDisabled() && model !== label) ? -1 : 0;
    };
    let classList;
    $: {
        model = isDisabled() ? _RadioGroup_value : value;
        classList = clsx(
            "el-radio",
            [border && size != undefined ? "el-radio--" + radioSize : "", { "is-disabled": isDisabled() }, { "is-focus": focus }, { "is-bordered": border }, { "is-checked": model === label }],
            $$props["class"]
        );
        // classList2 = clsx(, {
        //     "is-disabled": isDisabled(),
        //     "is-checked": ,
        // });
    }
    // console.log(isGroup(), isDisabled(), checked, label, checked);
    // console.log($$props);
    const onclick = (e) => {
        // model = false;
        // console.log(model, label, model === label);
        value = e.target.value;
        // console.log(checked);
        dispatch("click", e);
    };
    console.log(model, label, model === label);
    onMount(() => {
        // console.log(_input.getAttribute('ref'));
        // console.log(model === label);
    });
    // console.log(checked);
    // :focus={focus == true}
    // :blur={focus == false}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classList} style={$$props["style"]} role="radio" tabindex={tabIndex()} aria-checked={model === label} aria-disabled={isDisabled()}>
    <span class="el-radio__input" class:is-disabled={isDisabled()} class:is-checked={model === label}>
        <span class="el-radio__inner" />
        <input
            class="el-radio__original"
            bind:value={label}
            type="radio"
            aria-hidden="true"
            on:focus={() => (focus = true)}
            on:blur={() => (focus = false)}
            on:click={onclick}
            {name}
            disabled={isDisabled()}
            tabindex={tabIndex()}
            autocomplete="off"
        />
    </span>
    <span class="el-radio__label">
        {#if $$slots.default}
            <slot />
        {:else}
            {label}
        {/if}
    </span>
</label>
